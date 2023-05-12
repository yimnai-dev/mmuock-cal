import { Link } from "react-router-dom";
import { KalendaOptions, Region, SecondaryCalendar } from "../../utils/types.util";
import Month from "../month/Month";
import { MONTH_NAMES } from "../../utils/data.util";
import React from "react";

export default function Year(props: {
    kalendaOptions: KalendaOptions,
    setKalendaOptions: React.Dispatch<React.SetStateAction<KalendaOptions>>,
}) {

    const months = Boolean(props.kalendaOptions.activeCulture.monthNames) ? props.kalendaOptions.activeCulture.monthNames : MONTH_NAMES
    return (
        <div className="w-screen min-h-screen bg-hero bg-center">
            <div className="py-4 mb-6 container mx-auto flex items-center justify-between">
                <Link className="text-purple-800 bg-white rounded-md shadow-lg py-2 px-3 hover:bg-purple-800 hover:text-white" to='/'>Go Back</Link>
                <h1 className="text-4xl font-semibold font-mon text-purple-800 border-solid border-b-2 border-b-purple-800 inline pb-3">Calendar for the year {props.kalendaOptions.year} </h1>
            </div>
            <div className="container mx-auto max-sm:px-3 py-6">
                {
                    (months.length === 0 ? MONTH_NAMES : months).map((month, index) => (
                        <Month key={month + Math.random()}
                          monthName={month}
                          monthIndex={index} 
                          //@ts-ignore
                          calendar={new Kalenda(props.kalendaOptions.activeCulture.calOrigin || Kalenda.WESTERN).cal(months.length === 0 ? MONTH_NAMES.indexOf(month) + 1 : months.indexOf(month) + 1, props.kalendaOptions.year, true)}
                          weekDays={props.kalendaOptions.activeCulture.weekDays}
                          kalendaOptions={props.kalendaOptions}
                          setKalendaOptions={props.setKalendaOptions}
                          />
                    ))
                }
            </div>
        </div>
    )
}