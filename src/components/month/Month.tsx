import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

const momentMonths = moment.months()

export default function Month(props: {
    year: number,
    region: string,
    activeCulture: any,
}){

  const months = props.activeCulture.monthNames || momentMonths

    const navigate = useNavigate()
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
    const [startDate, setStartDate] = React.useState(moment([props.year, month]).clone().startOf('month').startOf('week'))
    const [endDate, setEndDate] = React.useState(moment([props.year, month]).clone().endOf('month')) 
      const day = startDate.clone().subtract(1, 'day')
      while(day.isBefore(endDate, 'day')){
        calendar.push(
          Array(props.activeCulture?.data.length)
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
                    <span className="isDates-grey">{day}</span>
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
        <button className="text-purple-800 bg-white rounded-md shadow-lg py-2 px-3 hover:bg-purple-800 hover:text-white" onClick={() => navigate('/')}>Go Back</button>
      <h1 className="text-4xl font-semibold font-mon text-purple-800 border-solid border-b-2 border-b-purple-800 inline pb-3">Calendar for the year {props.year} </h1>
    </div>
    <div className="border-solid border-2 border-purple-800">
        {months.map((month: any, index: any) => (
        <div className="container mx-auto" key={index + Math.random()}>
            <table className="w-full">
                <tbody>
                    <tr className="border-solid border-[1px] border-black">
                        <th className="" colSpan={props.activeCulture.data.length}>
                        <h1 className="month-name">{month}</h1>
                        </th>
                    </tr>
                    <tr className="border-solid border-[1px] border-black">
                        {
                          props.activeCulture?.data.map((day: any, index: any) => (
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