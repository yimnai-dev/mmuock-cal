import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { Region } from "../../utils/types.util";
import Day from "../day/Day";
import { MONTH_NAMES, bilingualLanguages } from "../../utils/data.util";

export default function Month(props: {
    year: number,
    activeCulture: Region,
    calendar: any,
    weekDays: string[],
    monthName: string,
    isBilingual: boolean,
    language: string,
    monthIndex: number,
}){



  const id = React.useId()
  const secondaryDayNames = (props.isBilingual && bilingualLanguages[props.language.toLowerCase()].dayNames) || []
  const secondaryMonthNames = (props.isBilingual && bilingualLanguages[props.language.toLowerCase()].monthNames) || []


  //@ts-ignore
  const bilingualKalenda = new Kalenda(props.activeCulture.calOrigin).cal(props.monthIndex + 1, props.year, true)
  //@ts-ignore
  bilingualKalenda.bilingual(Kalenda.WESTERN)
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
                    <Day secondaryLang={secondaryDayNames.length > 0 ? (bilingualKalenda.cal2[weekIndex][dayIndex] !== null ? secondaryDayNames[bilingualKalenda.cal2[weekIndex][dayIndex]] : '') : ''}  
                      isBilingual={props.isBilingual} language={props.language} 
                      weekDays={props.weekDays} year={props.year} 
                      month={props.activeCulture.monthNames.indexOf(props.monthName) + 1}
                      id={id} key={day + Math.random()} day={day}  />
                  ))}
                </tr>
              ))
            }
      </tbody>
    </table>
  </div>
}