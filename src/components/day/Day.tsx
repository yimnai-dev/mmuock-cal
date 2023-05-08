import { bilingualLanguages } from "../../utils/data.util"
export default function Day(props: {
    day: number,
    month: number,
    year: number,
    id: string,
    weekDays: string[],
    isBilingual: boolean,
    language: string,
    secondaryLang: string,
}){

    
    return (
        <>
            <td className={props.day < 0 ? "text-red-500 text-center border-[1px] border-solid border-black cursor-pointer" : "text-center border-[1px] border-solid border-black cursor-pointer"} key={props.day + Math.random()}>{Math.abs(props.day) + ' ' + props.secondaryLang}</td>
        </>
    )
}