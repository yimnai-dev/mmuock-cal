//@ts-nocheck
import moment from "moment";
import React from "react";
import { MONTH_NAMES, MONTH_SHORTS } from "./data.util";
export function useCustomLocale(props: {
    region: string;
    activeCulture: any;
}){
    const currentLocale = moment
    React.useEffect(() => {
        console.log('Month names: ', Kalenda.MONTHNAMES)
        currentLocale.updateLocale('custom', {
            months: props.activeCulture.monthNames,
            monthsShort: props.activeCulture.monthNames,
            weekdays: props.activeCulture.data.data,
            weekdaysShort: props.activeCulture.data,
            weekdaysMin: props.activeCulture.data,
            week: {
                dow: 0,
                doy: 1,
            },
        }) 
    },  [props.region, props.activeCulture])
    return currentLocale
}
