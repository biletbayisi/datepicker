import { describe, expect, it, vi } from 'vitest';
import { addMonths, addYears, getMonth, getYear, subMonths } from 'date-fns';
import { mount, VueWrapper } from '@vue/test-utils';

import DpHeader from '@/components/DatePicker/DpHeader.vue';

import { openMenu } from '../../utils';

import { getMonths, getYears } from '@/utils/util';
import { useArrowNavigation } from '@/composables';
import { getDefaultFilters } from '@/utils/defaults';

import type { DateFilter } from '@/interfaces';

describe('Month and Year picker components', () => {
    let wrapper: VueWrapper<any>;
    const props = {
        month: getMonth(new Date()),
        year: getYear(new Date()),
        instance: 0,
        months: getMonths(null, 'en-Us', 'short'),
        years: getYears([2020, 2030]),
        filters: getDefaultFilters({}),
    };

    it('Should select next month', () => {
        wrapper = mount(DpHeader, { props });

        wrapper.vm.handleMonthYearChange(true);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('month', getMonth(addMonths(new Date(), 1)));
    });

    it('Should select previous month', () => {
        wrapper = mount(DpHeader, { props });

        wrapper.vm.handleMonthYearChange(false);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('month', getMonth(subMonths(new Date(), 1)));
    });

    it('Should switch year', () => {
        wrapper = mount(DpHeader, { props: { ...props, month: 11 } });
        wrapper.vm.handleMonthYearChange(true);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('year', getYear(addYears(new Date(), 1)));
    });

    it('Should skip month from filter', () => {
        const filters = { months: [getMonth(addMonths(new Date(), 1))], years: [] } as unknown as DateFilter;
        wrapper = mount(DpHeader, { props: { ...props, filters } });
        const afterSkip = addMonths(new Date(), 2);
        wrapper.vm.handleMonthYearChange(true);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('month', getMonth(afterSkip));
    });

    it('Should skip year from filter', () => {
        const filters = { years: [getYear(addYears(new Date(), 1))], months: [] } as unknown as DateFilter;
        wrapper = mount(DpHeader, { props: { ...props, month: 11, filters } });

        const afterSkip = addYears(new Date(), 2);
        wrapper.vm.handleMonthYearChange(true);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('year', getYear(afterSkip));
    });

    it('Should return true for disabled month with maxDate', () => {
        wrapper = mount(DpHeader, { props: { ...props, maxDate: subMonths(new Date(), 1) } });

        wrapper.vm.handleMonthYearChange(true);

        expect(wrapper.vm.isDisabled).toBeTruthy();
    });

    it('Should return true for disabled month with minDate', () => {
        wrapper = mount(DpHeader, { props: { ...props, minDate: addMonths(new Date(), 1) } });
        wrapper.vm.handleMonthYearChange(false);

        expect(wrapper.vm.isDisabled).toBeTruthy();
    });

    it('Should disable navigation with prevent-min-max-navigation', () => {
        wrapper = mount(DpHeader, { props: { ...props, maxDate: new Date(), preventMinMaxNavigation: true } });

        expect(wrapper.vm.isDisabled).toBeTruthy();
    });

    it('Should properly show left-right icons on multi-calendars', () => {
        wrapper = mount(DpHeader, { props: { ...props, multiCalendars: 2 } });

        expect(wrapper.vm.showLeftIcon(wrapper.vm.defaultedMultiCalendars, 0)).toEqual(true);
        expect(wrapper.vm.showRightIcon(wrapper.vm.defaultedMultiCalendars, 0)).toEqual(false);

        const secondInstance = mount(DpHeader, {
            props: { ...props, multiCalendars: 2, instance: 1 },
        }) as unknown as VueWrapper<{
            showLeftIcon: (opts: any, inst: number) => boolean;
            showRightIcon: (opts: any, inst: number) => boolean;
        }>;
        expect(secondInstance.vm.showLeftIcon(wrapper.vm.defaultedMultiCalendars, 1)).toEqual(false);
        expect(secondInstance.vm.showRightIcon(wrapper.vm.defaultedMultiCalendars, 1)).toEqual(true);
    });

    it('Should build matrix', () => {
        const { refSets } = useArrowNavigation();

        mount(DpHeader, { props: { ...props, arrowNavigation: true } });

        expect(refSets.monthYear).toHaveLength(4);
    });

    it('Should get proper overlay slot props for month-overlay', async () => {
        wrapper = mount(DpHeader, { props });

        const spy = vi.spyOn(wrapper.vm.overlaySlotProps('month'), 'toggle');

        const slotProps = wrapper.vm.overlaySlotProps('month');
        expect(slotProps).toHaveProperty('items');
        expect(slotProps.items).toHaveLength(12);
        expect(spy.getMockName()).toEqual('toggleMonthPicker');
    });

    it('Should get proper overlay slot props for year-overlay', async () => {
        wrapper = mount(DpHeader, { props: { ...props, years: getYears([2000, 2100]) } });

        const spy = vi.spyOn(wrapper.vm.overlaySlotProps('year'), 'toggle');

        const slotProps = wrapper.vm.overlaySlotProps('year');
        expect(slotProps).toHaveProperty('items');
        expect(slotProps.items).toHaveLength(101);
        expect(spy.getMockName()).toEqual('toggleYearPicker');
    });

    it('Should display year picker', async () => {
        const dp = await openMenu({ yearPicker: true });

        const currentYear = getYear(new Date());

        const el = dp.find(`[data-test="${currentYear}"]`);
        expect(el).toBeDefined();
    });

    it('Should select single year', async () => {
        const dp = await openMenu({ yearPicker: true });

        const currentYear = getYear(new Date());

        await dp.find(`[data-test="${currentYear}"]`).trigger('click');

        await dp.find(`[data-test="select-button"]`).trigger('click');

        expect(dp.emitted()).toHaveProperty('update:model-value', [[currentYear]]);
    });

    it('Should select year range', async () => {
        const dp = await openMenu({ yearPicker: true, range: true });
        const today = new Date();
        const rangeStart = getYear(addYears(today, 1));
        const rangeEnd = rangeStart + 5;

        await dp.find(`[data-test="${rangeStart}"]`).trigger('click');
        await dp.find(`[data-test="${rangeEnd}"]`).trigger('click');

        await dp.find(`[data-test="select-button"]`).trigger('click');

        expect(dp.emitted()).toHaveProperty('update:model-value', [[[rangeStart, rangeEnd]]]);
    });
});
