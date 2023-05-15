import React from "react";
import { KalendaOptions } from "../../utils/types.util";
import Day from "../day/Day";
import { kalendaRegions } from "../../utils/data.util";

export default function Month(props: {
    weekDays: string[],
    monthName: string,
    monthIndex: number,
    kalendaOptions: KalendaOptions,
    setKalendaOptions: React.Dispatch<React.SetStateAction<KalendaOptions>>,
}){
  //@ts-ignore
  const calendarType = kalendaRegions.find(r => props.kalendaOptions.region.toLowerCase().includes(r.region.toLowerCase()))?.calOrigin || Kalenda.WESTERN
  //@ts-ignore
  const calendar = new Kalenda(calendarType).cal(props.monthIndex + 1, props.kalendaOptions.year, true)
  //@ts-ignore
  props.kalendaOptions.isBilingual && calendar.bilingual(Kalenda.WESTERN)
  //@ts-ignore
  const bilingualKalenda = new Kalenda({"nwkdays": props.kalendaOptions.secondaryCalendar.dayNames.length, "ref":{"month": props.monthIndex + 1, "year":props.kalendaOptions.year, "weekday": 1}}).cal(props.monthIndex + 1, props.kalendaOptions.year, true)
  //@ts-ignore
  bilingualKalenda.bilingual(Kalenda.WESTERN)
  // console.log('Bilingual: ', bilingualKalenda.cal)
    return <div className="py-3">
    <h1 className="text-xl font-mono font-light text-purple-500">{props.monthName}<span className="italic text-black">{(props.kalendaOptions.secondaryCalendar.monthNames.length > 0 ? `/${props.kalendaOptions.secondaryCalendar.monthNames[props.monthIndex]}` : '')}</span></h1>
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
              calendar.cal.map((week: number[], weekIndex: number) => (
                <tr key={weekIndex + Math.random()} className="border-[1px] border-solid border-black">
                  {week.map((day: number) => (
                    <Day secondaryLang={props.kalendaOptions.secondaryCalendar.dayNames.length > 0 ? props.kalendaOptions.secondaryCalendar.dayNames[bilingualKalenda.cal.flat().indexOf(day) % props.kalendaOptions.secondaryCalendar.dayNames.length] : ''}  
                    key={day + Math.random()} day={day} />
                  ))}
                </tr>
              ))
            }
      </tbody>
    </table>
  </div>
}