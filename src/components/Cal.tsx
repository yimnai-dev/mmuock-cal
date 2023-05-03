import moment from "moment";
import { props } from "../descriptor/property";
import React from "react";

const months = moment.months()
const calYear = props.year as number;



export default function Calendar(){

    function isExtraDays(week: number, date: any){
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
    const [startDate, setStartDate] = React.useState(moment([calYear, month]).clone().startOf('month').startOf('week'))
    const [endDate, setEndDate] = React.useState(moment([calYear, month]).clone().endOf('month')) 
      const day = startDate.clone().subtract(1, 'day')
      while(day.isBefore(endDate, 'day')){
        calendar.push(
          Array(7)
          .fill(0)
          .map(() => day.add(1, 'day').clone().format("DD"))
        )
      }
      if (calendar.length > 0) {
        return calendar.map((week, index) => (
          <tr className="" key={index}>
            {week.map((day) => (
              <td className="">
                <span className="">
                  {isExtraDays(index, day) ? (
                    <span className="">{day}</span>
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
    return <div className="App">
    <div className="">
      <h1 className="text-red-500">Calendar for {calYear} </h1>
    </div>
    {months.map((month, index) => (
      <div className="tableContainer" key={index}>
        <table  className="calender-date">
         <tbody>
         <tr>
            <th className="month-name-col" colSpan={7}>
              <h1 className="month-name">{month}</h1>
            </th>
          </tr>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          {getDate(index)}
         </tbody>
        </table>
      </div>
    ))}
  </div>
}