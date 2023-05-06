export default function Day(props: {
    day: number,
    id: string,
}){
    return (
        <>
            <td className={props.day < 0 ? "text-red-500 text-center border-[1px] border-solid border-black" : "text-center border-[1px] border-solid border-black"} key={props.day + Math.random()}>{Math.abs(props.day)}</td>
        </>
    )
}