import SaveInvestigation from "../Buttons/ProcessButtons/SaveInvestigation"
import InvestigateMore from "../Buttons/ProcessButtons/InvestigateMore"
import TableData from "./TableData"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { changedStance } from "@/ReduxToolKit/Reducers/Investigate/Review"

export default function FinalResults() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { pov, review } = investigateState
    const { idea, perspective, expertise } = pov
    const { endingPerspective, merit, newPOV } = review


    return (
        <section className="lg:p-8">
            <div className="mx-auto 2xl:max-w-7xl py-16 lg:px-16 md:px-12 px-2 xl:px-36 items-center relative w-full bg-gradientdown rounded-[3rem]">
                <div className="text-center max-w-xl mx-auto">
                    <span className="text-md 2xl:text-lg text-blue-500 font-light"> Results</span>
                    <h2 className="text-xl mt-6 tracking-tight font-light lg:text-2xl text-white">
                        Your Investigation of the idea:  <span className="block text-zinc-400"> {idea}</span>
                    </h2>
                </div>

                <div className="isolate mt-12">
                    <div className="relative -mx-8">
                        <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                            <div className="flex w-1/4 px-4" style={{ marginLeft: '50%' }} aria-hidden="true">
                                <div className="w-full rounded-xl ring-1 ring-white/5 bg-ebony shadow-inset">
                                </div>
                            </div>
                        </div>
                        <table className="w-full table-fixed border-separate border-spacing-x-24 text-left">
                            <caption className="sr-only"> Pricing plan comparison</caption>
                            <colgroup>
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <td />
                                    <th scope="col" className="md:px-6 pt-6 xl:px-8 xl:pt-8">
                                        <div className="text-sm 2xl:text-lg text-white font-light text-center">Initial</div>
                                    </th>
                                    <th scope="col" className="md:px-6 pt-6 xl:px-8 xl:pt-8">
                                        <div className="text-sm 2xl:text-lg text-white font-light text-center">Changes</div>
                                    </th>
                                    <th scope="col" className="md:px-6 pt-6 xl:px-8 xl:pt-8">
                                        <div className="text-sm 2xl:text-lg text-white font-light text-center">Final</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th scope="colgroup" colSpan={4} className="pb-4 text-sm md:text-md 2xl:text-xl text-blue-400 font-light pt-8">
                                        Perspectives
                                        <div className="absolute inset-x-8 mt-4 h-px bg-ebony/50" />
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row" className="py-4 text-xs md:text-sm 2xl:text-lg font-normal leading-6 text-white">
                                        Has Merit
                                        <div className="absolute inset-x-8 mt-4 h-px bg-wbony/50" />
                                    </th>
                                    <td className="px-6 py-4 xl:px-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check text-white mx-auto" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                        <span className="sr-only">Included in Basic</span>
                                    </td>
                                    <td className="px-6 py-4 xl:px-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check text-white mx-auto" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="px-6 py-4 xl:px-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check text-white mx-auto" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="py-4 text-xs 2xl:text-lg font-normal leading-6 text-white">
                                        Familiarity
                                        <div className="absolute inset-x-8 mt-4 h-px bg-wbony/50" />
                                    </th>
                                    <td className="px-6 py-4 xl:px-8">

                                        <p className="text-white font-light text-sm text-nowrap text-center">{expertise ? expertise : 'N/A'}</p>
                                    </td>
                                    <td className="px-6 py-4 xl:px-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check text-white mx-auto" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                        <span className="sr-only">Included in Essential</span>
                                    </td>
                                    <td className="px-6 py-4 xl:px-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check text-white mx-auto" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                        <span className="sr-only">Included in Premium</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="py-4 text-xs md:text-sm 2xl:text-lg font-normal leading-6 text-white">
                                        Agreement
                                        <div className="absolute inset-x-8 mt-4 h-px bg-wbony/50" />
                                    </th>
                                    <TableData agreement={perspective} />
                                    <td className="px-6 py-4 xl:px-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check text-white mx-auto" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </td>
                                    <TableData agreement={endingPerspective} />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex mt-16 gap-x-6 w-1/2 justify-center mx-auto">
                    <SaveInvestigation />
                    <InvestigateMore />
                </div>
            </div>
        </section>


    )
}



