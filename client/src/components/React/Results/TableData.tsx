import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"


export default function TableData({ agreement }) {
    console.log(agreement)
    return (
        <td className="px-6 py-4 xl:px-8">
            {agreement !== 'Neutral' ? <svg xmlns="http://www.w3.org/2000/svg" className={`${agreement === 'Agree' && 'text-green-500'} ${agreement === 'Disagree' && 'text-red-500'} icon icon-tabler icon-tabler-check mx-auto`} width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
            </svg> : <p className="text-zinc-400 font-light text-sm">Neutral</p>}
        </td>
    )


}