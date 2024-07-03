import type { Slots } from 'vue';
import type { PresetDate } from '@/interfaces';

export const slots = [
    { name: 'month-year', use: ['month-year', 'shared'] },
    { name: 'calendar-header', use: ['calendar', 'shared'] },
    { name: 'marker-tooltip', use: ['calendar', 'shared'] },
    { name: 'marker', use: ['calendar', 'shared'] },
    { name: 'left-sidebar', use: ['menu'] },
    { name: 'calendar-bottom-marker-description-area', use: ['calendar', 'shared'] },



    //{ name: 'clock-icon', use: ['time', 'calendar', 'shared'] },
    //{ name: 'arrow-left', use: ['month-year', 'calendar', 'shared', 'year-mode'] },
    //{ name: 'arrow-right', use: ['month-year', 'calendar', 'shared', 'year-mode'] },
    //{ name: 'arrow-up', use: ['time', 'calendar', 'month-year', 'shared'] },
    //{ name: 'arrow-down', use: ['time', 'calendar', 'month-year', 'shared'] },
    //{ name: 'calendar-icon', use: ['month-year', 'time', 'calendar', 'shared', 'year-mode'] },
    //{ name: 'day', use: ['calendar', 'shared'] },
    //{ name: 'month-overlay-value', use: ['calendar', 'month-year', 'shared'] },
    //{ name: 'year-overlay-value', use: ['calendar', 'month-year', 'shared', 'year-mode'] },
    //{ name: 'year-overlay', use: ['month-year', 'shared'] },
    //{ name: 'month-overlay', use: ['month-year', 'shared'] },
    //{ name: 'month-overlay-header', use: ['month-year', 'shared'] },
    //{ name: 'year-overlay-header', use: ['month-year', 'shared'] },
    //{ name: 'hours-overlay-value', use: ['calendar', 'time', 'shared'] },
    //{ name: 'minutes-overlay-value', use: ['calendar', 'time', 'shared'] },
    //{ name: 'seconds-overlay-value', use: ['calendar', 'time', 'shared'] },
    //{ name: 'hours', use: ['calendar', 'time', 'shared'] },
    //{ name: 'minutes', use: ['calendar', 'time', 'shared'] },
    //{ name: 'month', use: ['calendar', 'month-year', 'shared'] },
    //{ name: 'year', use: ['calendar', 'month-year', 'shared', 'year-mode'] },
    //{ name: 'action-buttons', use: ['action'] },
    //{ name: 'action-preview', use: ['action'] },
    //{ name: 'action-extra', use: ['menu'] },
    //{ name: 'time-picker-overlay', use: ['calendar', 'time', 'shared'] },
    //{ name: 'am-pm-button', use: ['calendar', 'time', 'shared'] },
    //{ name: 'right-sidebar', use: ['menu'] },
    //{ name: 'time-picker', use: ['menu', 'shared'] },
    //{ name: 'action-row', use: ['action'] },
];

export const inputSlots = [{ name: 'trigger' }, { name: 'input-icon' }, { name: 'clear-icon' }, { name: 'dp-input' }];

const slotNames = {
    all: () => slots,
    input: () => inputSlots,
    calendar: () => slots.filter((slot) => slot.use.includes('calendar')),
    menu: () => slots.filter((slot) => slot.use.includes('menu')),
    shared: () => slots.filter((slot) => slot.use.includes('shared')),
    monthYear: () => slots.filter((slot) => slot.use.includes('month-year')),
};

export const mapSlots = (
    slots: Slots,
    usage: 'all' | 'input' | 'calendar' | 'menu' | 'shared' | 'monthYear',
    presetDates?: PresetDate[],
): string[] => {
    const toReturn: string[] = [];

    slotNames[usage]().forEach((slot) => {
        if (slots[slot.name]) {
            toReturn.push(slot.name);
        }
    });

    if (presetDates?.length) {
        presetDates.forEach((preset) => {
            if (preset.slot) {
                toReturn.push(preset.slot);
            }
        });
    }

    return toReturn;
};
