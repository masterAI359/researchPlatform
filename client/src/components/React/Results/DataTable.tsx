import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import TableRow from "./TableRow"



export default function DataTable() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { pov, review } = investigateState
    const { idea, perspective, expertise } = pov
    const { endingPerspective, merit, movedOnIdea } = review


    const changed = endingPerspective === perspective

    return (
        <table className="w-full 2xl:min-h-72 table-fixed border-separate border-spacing-x-10 text-left">
            <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
            </colgroup>
            <thead>
                <tr className="h-full">
                    <td />
                    <th scope="col" className="md:px-6 pt-6 xl:px-8 xl:pt-8">
                        <div className="text-sm 2xl:text-lg text-white font-light text-center">no</div>
                    </th>
                    <th scope="col" className="md:px-6 pt-6 xl:px-8 xl:pt-8">
                        <div className="text-sm 2xl:text-lg text-white font-light text-center">Yes</div>
                    </th>

                </tr>
            </thead>
            <tbody>

                <tr className="h-full 2xl:min-h-20">
                    <th scope="colgroup" colSpan={4} className="pb-4 text-sm md:text-md 2xl:text-lg text-blue-400 font-light pt-8">
                        Perspectives
                        <div className="absolute inset-x-8 mt-4 bg-ebony/50" />
                    </th>
                </tr>
                <tr className="h-full 2xl:min-h-20">
                    <th scope="row" className="py-4 text-xs md:text-sm 2xl:text-lg font-normal leading-6 text-white">
                        Agree
                        <div className="absolute inset-x-8 mt-4 h-px bg-ebony/50" />
                    </th>
                    <td className="px-6 py-4 xl:px-8">
                        {endingPerspective !== perspective && <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check text-green-500 mx-auto" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>}
                        <span className="sr-only">Included in Basic</span>
                    </td>
                    <td className="px-6 py-4 xl:px-8">
                        {endingPerspective === perspective && <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check text-green-500 mx-auto" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>}
                        <span className="sr-only">Included in Essential</span>
                    </td>

                </tr>
                <tr className="h-full 2xl:min-h-20">
                    <th scope="row" className="py-4 text-xs 2xl:text-lg font-normal text-nowrap leading-6 text-white">
                        Had Merit
                        <div className="absolute inset-x-8 mt-4 h-px bg-ebony/50" />
                    </th>
                    <TableRow truthyValue={merit} />
                </tr>
                <tr className="h-full 2xl:min-h-20">
                    <th scope="row" className="py-4 text-xs md:text-sm 2xl:text-lg font-normal leading-6 text-white text-nowrap">
                        Changed Opinion
                        <div className="absolute inset-x-8 mt-4 h-px bg-ebony/50" />
                    </th>
                    <TableRow truthyValue={changed} />
                </tr>
            </tbody>
        </table>
    )

}