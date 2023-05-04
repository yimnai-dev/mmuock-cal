import moment from "moment";
import React from "react";
import { CulturalCalendar } from "./types.util"; 

export function useCustomLocale(props: {
    region: string;
    activeCulture: CulturalCalendar;
}){
    const currentLocale = moment
    React.useEffect(() => {
        currentLocale.updateLocale('custom', {
            months: props.activeCulture.monthNames,
            monthsShort: props.activeCulture.monthShorts,
            weekdays: props.activeCulture.weekDays,
            weekdaysShort: props.activeCulture.weekDays,
            weekdaysMin: props.activeCulture.weekDaysMin,
            week: {
                dow: 0,
                doy: 1,
            },
        }) 
    },  [props.region, props.activeCulture])
    return currentLocale
}
