import { ref, watch } from 'vue';
import { getYear, parse, setYear } from 'date-fns';

import { dateToUtc, getMonthVal, getTimeVal, isValidDate, setDateMonthOrYear, setDateTime } from '@/utils/date-utils';
import { convertType } from '@/utils/type-guard';
import { useUtils, useState } from '@/components/composables';
import { errors } from '@/utils/util';

import type { ModelValue, VueEmit, TimeModel, MonthModel } from '@/interfaces';

/**
 * Handles values from external to internal and vise versa
 */
export const useExternalInternalMapper = (emit: VueEmit) => {
    const { internalModelValue, config } = useState();
    const {
        getZonedToUtc,
        getZonedDate,
        formatDate,
        getDefaultPattern,
        checkRangeEnabled,
        checkPartialRangeValue,
        getDate,
    } = useUtils();

    const inputValue = ref('');

    watch(internalModelValue, () => {
        emit('internal-model-change', internalModelValue.value);
    });

    const mapYearExternalToInternal = (value: number | number[]): Date | Date[] => {
        if (Array.isArray(value)) {
            return checkRangeEnabled(() => [
                setYear(getDate(), value[0]),
                value[1] ? setYear(getDate(), value[1]) : checkPartialRangeValue(),
            ]);
        }
        return setYear(getDate(), +value);
    };

    const mapTimeExternalToInternal = (value: TimeModel | TimeModel[]): Date | Date[] => {
        // Unlike in other modes, partial range is not supported here, since the time needs to be defined on both time inputs
        if (Array.isArray(value)) {
            return [
                setDateTime(null, +value[0].hours, +value[0].minutes, value[0].seconds),
                setDateTime(null, +value[1].hours, +value[1].minutes, value[1].seconds),
            ];
        }
        return setDateTime(null, value.hours, value.minutes, value?.seconds);
    };

    const mapMonthExternalToInternal = (value: MonthModel | MonthModel[]): Date | Date[] => {
        if (Array.isArray(value)) {
            return checkRangeEnabled(() => [
                setDateMonthOrYear(null, +value[0].month, +value[0].year),
                value[1] ? setDateMonthOrYear(null, +value[1].month, +value[1].year) : checkPartialRangeValue(),
            ]);
        }
        return setDateMonthOrYear(null, +value.month, +value.year);
    };

    // Map external multi dates format to internal model value
    const mapMultiDateExternalToInternal = (value: Date[] | string[]) => {
        if (Array.isArray(value)) {
            return value.map((date) => parseModelType(date));
        }
        throw new Error(errors.dateArr('multi-dates'));
    };

    // Map external week picker format to internal model value
    const mapWeekExternalToInternal = (value: Date[]) => {
        if (Array.isArray(value)) {
            return [getDate(value[0]), getDate(value[1])];
        }
        throw new Error(errors.dateArr('week-picker'));
    };

    // Map external format to internal model value for range and single picker
    const mapDateExternalToInternal = (value: Date | Date[]) => {
        if (config.value.modelAuto) {
            return Array.isArray(value)
                ? [parseModelType(value[0]), parseModelType(value[1])]
                : [parseModelType(value), null];
        }
        if (Array.isArray(value)) {
            return checkRangeEnabled(() => [
                parseModelType(value[0]),
                value[1] ? parseModelType(value[1]) : checkPartialRangeValue(),
            ]);
        }
        return parseModelType(value);
    };

    /**
     * When emitting value back to host, if partial date is enabled and second value is not selected
     * auto add 'null' value as second value
     */
    const sanitizeModelValue = () => {
        if (Array.isArray(internalModelValue.value) && config.value.range && internalModelValue.value.length === 1) {
            internalModelValue.value.push(checkPartialRangeValue());
        }
    };

    // Shared method, create mapped array of dates to emit
    const getRangeEmitValue = (): Date[] => {
        const modelValue = internalModelValue.value as Date[];
        return [
            toModelType(modelValue[0]),
            modelValue[1] ? toModelType(modelValue[1]) : checkPartialRangeValue(),
        ] as Date[];
    };

    // Get value for model-auto, single or array, internally it is always handled as an array
    const getModelAutoForExternal = () =>
        (internalModelValue.value as Date[])[1]
            ? getRangeEmitValue()
            : toModelType(convertType(internalModelValue.value));

    // Map internal value for external
    const getMultiDatesForExternal = () =>
        (internalModelValue.value as Date[]).map((date) => toModelType(date) as string);

    // Parent internal to external function mapper that will return proper date format based on provided config
    const mapInternalDatesToExternal = () => {
        sanitizeModelValue();
        if (config.value.modelAuto) return getModelAutoForExternal();
        if (config.value.multiDates) return getMultiDatesForExternal();
        if (Array.isArray(internalModelValue.value)) {
            return checkRangeEnabled(() => getRangeEmitValue());
        }
        return toModelType(convertType(internalModelValue.value));
    };

    const mapExternalToInternal = (value: ModelValue) => {
        if (!value) return null;
        if (config.value.timePicker) return mapTimeExternalToInternal(convertType(value));
        if (config.value.monthPicker) return mapMonthExternalToInternal(convertType(value));
        if (config.value.yearPicker) return mapYearExternalToInternal(convertType(value));
        if (config.value.multiDates) return mapMultiDateExternalToInternal(convertType(value));
        if (config.value.weekPicker) return mapWeekExternalToInternal(convertType(value));
        return mapDateExternalToInternal(convertType(value));
    };

    /**
     * Map external values to dates that will be used internally by the datepicker
     * Also does the validation of the provided value, if invalid it will use null as a default or an empty value
     */
    const parseExternalModelValue = (value: ModelValue): void => {
        const mappedDate = mapExternalToInternal(value);

        if (isValidDate(convertType(mappedDate))) {
            internalModelValue.value = convertType(mappedDate);
            formatInputValue();
        } else {
            internalModelValue.value = null;
            inputValue.value = '';
        }
    };

    const getInputValue = (): string => {
        if (!internalModelValue.value) return '';
        if (config.value.multiDates)
            return (internalModelValue.value as Date[]).map((date) => formatDate(date)).join('; ');
        return formatDate(internalModelValue.value);
    };

    /**
     * Map the date value(s) to the human-readable text for the input field
     */
    const formatInputValue = (): void => {
        if (!config.value.format || typeof config.value.format === 'string') {
            inputValue.value = getInputValue();
        } else {
            inputValue.value = config.value.format(internalModelValue.value as Date | Date[]);
        }
    };

    const parseModelType = (value: string | number | Date): Date => {
        if (config.value.utc) {
            const toDate = new Date(value);
            return config.value.utc === 'preserve'
                ? new Date(toDate.getTime() + toDate.getTimezoneOffset() * 60000)
                : toDate;
        }
        if (config.value.modelType) {
            if (config.value.modelType === 'date' || config.value.modelType === 'timestamp')
                return getZonedDate(new Date(value));

            if (
                config.value.modelType === 'format' &&
                (typeof config.value.format === 'string' || !config.value.format)
            )
                return parse(value as string, getDefaultPattern(), new Date());

            return getZonedDate(parse(value as string, config.value.modelType, new Date()));
        }

        return getZonedDate(new Date(value));
    };

    const toModelType = (val: Date): string | number | Date => {
        if (config.value.utc) {
            return dateToUtc(val, config.value.utc === 'preserve');
        }
        if (config.value.modelType) {
            if (config.value.modelType === 'timestamp') return +getZonedToUtc(val);

            if (
                config.value.modelType === 'format' &&
                (typeof config.value.format === 'string' || !config.value.format)
            )
                return formatDate(getZonedToUtc(val));

            return formatDate(getZonedToUtc(val));
        }
        return getZonedToUtc(val);
    };

    const emitValue = (value: ModelValue): void => {
        emit('update:model-value', value);
    };

    /**
     * Shared code between modes that support range and partial range
     * Maps the internal model-value into appropriate output
     */
    const mapInternalToSpecificExternal = <T extends (val: Date) => ReturnType<T> | ReturnType<T>[]>(mapper: T) => {
        if (Array.isArray(internalModelValue.value)) {
            return [
                mapper(internalModelValue.value[0]),
                internalModelValue.value[1] ? mapper(internalModelValue.value[1]) : checkPartialRangeValue(),
            ];
        }
        return mapper(convertType(internalModelValue.value));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const modeEmitter = (mapper: any) => emitValue(convertType(mapInternalToSpecificExternal(mapper)));

    /**
     * When date is selected, emit event to update modelValue on external,
     * and format input value
     */
    const emitModelValue = (): void => {
        formatInputValue();

        if (config.value.monthPicker) return modeEmitter(getMonthVal);
        if (config.value.timePicker) return modeEmitter(getTimeVal);
        if (config.value.yearPicker) return modeEmitter(getYear);
        if (config.value.weekPicker) return emitValue(internalModelValue.value);
        return emitValue(mapInternalDatesToExternal());
    };

    return {
        inputValue,
        parseExternalModelValue,
        formatInputValue,
        emitModelValue,
    };
};