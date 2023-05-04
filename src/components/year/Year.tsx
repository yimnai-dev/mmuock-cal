import { CulturalCalendar } from "../../utils/types.util";
import Month from "../month/Month";

export default function Year(props: {
    year: number, 
    setYear: React.Dispatch<React.SetStateAction<number>>,
    region: string,
    activeCulture: any
}) {
    
    return (
        <div className="w-screen min-h-screen bg-hero bg-center">
            <div className="container mx-auto max-sm:px-3 py-3">
                <Month year={props.year} region={props.region} activeCulture={props.activeCulture}/>
            </div>
        </div>
    )
}