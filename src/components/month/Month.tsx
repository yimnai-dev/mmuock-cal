import React from "react";
import { KalendaOptions } from "../../utils/types.util";
import Day from "../day/Day";

export default function Month(props: {
    calendar: any,
    weekDays: string[],
    monthName: string,
    monthIndex: number,
    kalendaOptions: KalendaOptions,
    setKalendaOptions: React.Dispatch<React.SetStateAction<KalendaOptions>>,
}){
  const id = React.useId()
  const secondaryDayNames = props.kalendaOptions.secondaryCalendar.dayNames
  const secondaryMonthNames = props.kalendaOptions.secondaryCalendar.monthNames
  //@ts-ignore
  const bilingualKalenda = new Kalenda(props.kalendaOptions.activeCulture.calOrigin).cal(props.monthIndex + 1, props.kalendaOptions.year, true)
  //@ts-ignore
  bilingualKalenda.bilingual(Kalenda.WESTERN)
  console.table(bilingualKalenda.cal2)
    return <div className="py-3">
    <h1 className="text-xl font-mono font-light text-purple-500">{props.monthName}<span className="italic text-black">{(secondaryMonthNames.length > 0 ? `/${secondaryMonthNames[props.monthIndex]}` : '')}</span></h1>
    <table className="border-solid border-2 border-purple-800 container mx-auto max-sm:px-3">
         <thead className="text-center font-bold text-sm">
          <tr className="">
            {
              props.weekDays.map((val) => (
                <th className="border-[1px] border-solid border-black" key={val + Math.random()}>{val.toUpperCase()}</th>
              ))
            }
          </tr>
         </thead>
      <tbody>
            {
              props.calendar.cal.map((week: number[], weekIndex: number) => (
                <tr key={weekIndex + Math.random()} className="border-[1px] border-solid border-black">
                  {week.map((day: number, dayIndex: number) => (
                    <Day secondaryLang={secondaryDayNames.length > 0 ? (Number.isNaN(bilingualKalenda.cal2[weekIndex][dayIndex]) ? '' : secondaryDayNames[bilingualKalenda.cal2[weekIndex][dayIndex]] ) : ''}  
                    key={day + Math.random()} day={day} />
                  ))}
                </tr>
              ))
            }
      </tbody>
    </table>
  </div>
}