import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { Region } from "../../utils/types.util";
import { useCustomLocale } from "../../utils/locale.util";

export default function Month(props: {
    year: number,
    region: string,
    activeCulture: Region,
}){

  const customMoment = useCustomLocale({region: props.region, activeCulture: props.activeCulture})

  const months = props.activeCulture.monthNames || moment.months()
    function isExtraDays(week: number, date: number){
        if (week === 0 && date > 10) {
          return true;
        } else if (week === 5 && date < 10) {
          return true;
        } else if (week === 4 && date < 10) {
          return true;
        } else {
          return false;
        }
      };
    
    function getDate(month: number){
      let calendar = []
    const [startDate, setStartDate] = React.useState(customMoment([props.year, month]).clone().startOf('month').startOf('week'))
    const [endDate, setEndDate] = React.useState(customMoment([props.year, month]).clone().endOf('month')) 
      const day = startDate.clone().subtract(1, 'day')
      while(day.isBefore(endDate, 'day')){
        calendar.push(
          Array(props.activeCulture?.weekDays.length)
          .fill(0)
          .map(() => day.add(1, 'day').clone().format("DD"))
        )
      }
      if (calendar.length > 0) {
        return calendar.map((week, index) => (
          <tr key={index + Math.random()} className="border-solid border-[1px] border-black">
            {week.map((day) => (
              <td className="text-center border-solid border-[1px] border-black" key={day + Math.random()}>
                <span className="">
                  {isExtraDays(index, parseInt(day)) ? (
                    <span className="text-red-500 font-bold">{day}</span>
                  ) : (
                    day
                  )}
                </span>
              </td>
            ))}
          </tr>
        ));
      }
    };
    return <div>
    <div className="py-4 mb-6 flex items-center justify-between">
        <Link className="text-purple-800 bg-white rounded-md shadow-lg py-2 px-3 hover:bg-purple-800 hover:text-white" to='/'>Go Back</Link>
      <h1 className="text-4xl font-semibold font-mon text-purple-800 border-solid border-b-2 border-b-purple-800 inline pb-3">Calendar for the year {props.year} </h1>
    </div>
    <div className="border-solid border-2 border-purple-800">
        {months.map((month: any, index: any) => (
        <div className="container mx-auto" key={index + Math.random()}>
            <table className="w-full">
                <tbody>
                    <tr className="border-solid border-[1px] border-black">
                        <th className="" colSpan={props.activeCulture.weekDays.length}>
                        <h1 className="month-name">{month}</h1>
                        </th>
                    </tr>
                    <tr className="border-solid border-[1px] border-black">
                        {
                          props.activeCulture.weekDays.map((day, index) => (
                            <th key={index + Math.random()} className="font-bold px-3 border-solid border-[1px] border-black">{day.toUpperCase()}</th>
                          ))
                        }
                    </tr>
                        {getDate(index)}
                </tbody>
            </table>
        </div>
        ))}
    </div>
  </div>
}