import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { Region } from "../../utils/types.util";
import Day from "../day/Day";

export default function Month(props: {
    year: number,
    activeCulture: Region,
    calendar: any,
    weekDays: string[],
    monthName: string,
}){

  const id = React.useId()

    return <div>
    <h1 className="text-2xl font-mono font-semibold text-purple-800">{props.monthName}</h1>
    <table className="border-solid border-2 border-purple-800 container mx-auto max-sm:px-3">
         <thead className="text-center font-bold text-xl">
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
              props.calendar.cal.map((week: any, index: any) => (
                <tr key={index + Math.random()} className="border-[1px] border-solid border-black">
                  {week.map((day: any) => (
                    <Day id={id} key={day + Math.random()} day={day}/>
                  ))}
                </tr>
              ))
            }
      </tbody>
    </table>
  </div>
}