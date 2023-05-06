import moment from "moment";
import React from "react";
import { Region } from "./types.util";
export function useCustomLocale(props: {
    region: string;
    activeCulture: Region;
}){
    const currentLocale = moment
    console.log(props.activeCulture.weekDays)
    React.useEffect(() => {
        currentLocale.updateLocale('custom', {
            months: props.activeCulture.monthNames,
            monthsShort: props.activeCulture.monthNames,
            weekdays: props.activeCulture.weekDays,
            weekdaysShort: props.activeCulture.weekDays,
            weekdaysMin: props.activeCulture.weekDays,
            week: {
                dow: 0,
                doy: 4,
            },
        }
    ) 
    },  [props.region, props.activeCulture])
    return currentLocale
}
