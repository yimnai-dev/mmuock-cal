import { Link } from "react-router-dom";
import { Region } from "../../utils/types.util";
import Month from "../month/Month";
import { MONTH_NAMES } from "../../utils/data.util";

export default function Year(props: {
    year: number, 
    setYear: React.Dispatch<React.SetStateAction<number>>,
    region: string,
    activeCulture: Region
}) {

    const monthPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    
    return (
        <div className="w-screen min-h-screen bg-hero bg-center">
            <div className="py-4 mb-6 container mx-auto flex items-center justify-between">
                <Link className="text-purple-800 bg-white rounded-md shadow-lg py-2 px-3 hover:bg-purple-800 hover:text-white" to='/'>Go Back</Link>
                <h1 className="text-4xl font-semibold font-mon text-purple-800 border-solid border-b-2 border-b-purple-800 inline pb-3">Calendar for the year {props.year} </h1>
            </div>
            <div className="container mx-auto max-sm:px-3 py-6">
                {
                    monthPositions.map(position => (
                        <Month key={position + Math.random()}
                          monthName={MONTH_NAMES[position - 1]}
                          activeCulture={props.activeCulture} 
                          year={props.year} 
                          //@ts-ignore
                          calendar={new Kalenda(props.activeCulture.calOrigin || Kalenda.WESTERN).cal(position, props.year, true)}
                          weekDays={props.activeCulture.weekDays}/>
                    ))
                }
            </div>
        </div>
    )
}