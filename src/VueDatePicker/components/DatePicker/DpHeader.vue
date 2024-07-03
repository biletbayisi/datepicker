<template>
    <div class="dp__month_year_row">
        <template v-if="$slots['month-year']">
            <slot
                name="month-year"
                v-bind="{ month, year, months, years, updateMonthYear, handleMonthYearChange, instance }"
            />
        </template>
    </div>
</template>

<script lang="ts" setup>
    import type { PropType, Ref } from 'vue';
    import { onMounted, ref } from 'vue';

    import { PickerBaseProps } from '@/props';

    import { useMonthYearPick } from '@/composables';

    import type {IDefaultSelect } from '@/interfaces';

    const emit = defineEmits(['update-month-year', 'mount', 'reset-flow', 'overlay-closed']);
    const props = defineProps({
        month: { type: Number as PropType<number>, default: 0 },
        year: { type: Number as PropType<number>, default: 0 },
        instance: { type: Number as PropType<number>, default: 0 },
        years: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        months: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        ...PickerBaseProps,
    });

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const { handleMonthYearChange, updateMonthYear } = useMonthYearPick(props, emit);

    const showMonthPicker = ref(false);
    const showYearPicker = ref(false);

    onMounted(() => {
        emit('mount');
    });

    const toggleWrap = (val: Ref<boolean>, show?: boolean) => {
        if (show !== undefined) {
            val.value = show;
        } else {
            val.value = !val.value;
        }

        if (!val.value) {
            emit('overlay-closed');
        }
    };

    const toggleMonthPicker = (flow = false, show?: boolean): void => {
        checkFlow(flow);
        toggleWrap(showMonthPicker, show);
    };

    const toggleYearPicker = (flow = false, show?: boolean): void => {
        checkFlow(flow);
        toggleWrap(showYearPicker, show);
    };

    const checkFlow = (flow: boolean): void => {
        if (!flow) {
            emit('reset-flow');
        }
    };

    defineExpose({
        toggleMonthPicker,
        toggleYearPicker,
        handleMonthYearChange,
    });
</script>
