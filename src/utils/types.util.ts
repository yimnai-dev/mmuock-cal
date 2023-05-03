export type CulturalCalendar = {
    region: Region;
    weekDays: string[];
    monthNames: string[];
    monthShorts: string[];
    weekDaysMin: string[];
}

export type Region = 'mmuock' | 'nkwen' | 'bangwa'