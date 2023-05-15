export type Region = {
    region: string;
    weekDays: string[];
    monthNames: string[];
    calOrigin: any;
}

export type SecondaryCalendar = {
    dayNames: string[];
    monthNames: string[];
    calOrigin?: any;
    region?: string;
}

export type KalendaOptions = {
    year: number;
    viewOptions: boolean;
    customLanguage: boolean;
    currentLang: string;
    region: string;
    activeCulture: Region;
    swap: boolean;
    secondaryCalendar: SecondaryCalendar;
    customKalendar: SecondaryCalendar;
    isBilingual: boolean;
}
