import { RootState } from "@/ReduxToolKit/store";
import { useSelector } from "react-redux";
import ProcessMap from "./ProcessMap";
import { useEffect } from "react";

interface InvestigationData {
    id: string,
    icon: string,
    title: string | null,
    description: string | null
}


export default function DetailsTable() {
    const investigation = useSelector((state: RootState) => state.userWork.investigationToReview)
    const dataForReview = JSON.stringify('storedInvestigation', investigation)
    const data = JSON.parse(localStorage.getItem('storedInvestigation'))
    const { idea, initial_perspective, biases, premises, ending_perspective, changed_opinion } = data





    const investigationDetails: InvestigationData[] = [
        {
            id: "easyIntegration",
            icon: "integration",
            title: "Idea Tackled",
            description: `${idea}`,
        },
        {
            id: "customizableOrdering",
            icon: "customizable",
            title: "Initial Perspective",
            description: `${initial_perspective ? initial_perspective : 'N/A'}`,
        },
        {
            id: "realTimeTracking",
            icon: "tracking",
            title: "Biases",
            description: `${biases ? biases : 'N/A'}`,
        },
        {
            id: "automatedReporting",
            icon: "reporting",
            title: "Premises of Idea",
            description: `${premises ? premises : 'N/A'}`,
        },
        {
            id: "scalableSolutions",
            icon: "scalable",
            title: "Once you dug in",
            description: `${changed_opinion ? 'You had a shift in perspective, having been moved by the evidence' : "You weren't moved to change your perspective by the available evidence"}`,
        },
        {
            id: "secureDataManagement",
            icon: "secure",
            title: "Ending Perspective",
            description: `${ending_perspective !== null ?
                `${ending_perspective === 'Agree' ? 'You ended your investigation in agreement with the idea being evaluated' : ''} 
                 ${ending_perspective === 'Disagree' ? 'You ended your investigation rejecting the idea being evaluated' : ''} 
                 ${ending_perspective === 'Neutral' ? 'You were on the fence about this idea by the end of your research. Perhaps more inquiry is needed' : ''}`
                : 'You did not share your final perspective on the idea'}`,
        },
    ];







    return (
        <article>
            <section className="lg:p-8">
                <div
                    className="mx-auto 2xl:max-w-7xl py-12 2xl:py-0 lg:px-16 md:px-12 px-8 xl:px-36 items-center relative w-full">
                    <div
                        className="relative isolate lg:flex-col overflow-hidden bg-gradientdown rounded-4xl px-6 p-10 lg:flex lg:p-20">
                        <div className="pb-12 border-b border-white/10">
                            <span className="text-white">Inquiry to Conclusion</span>
                            <h2
                                className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                                Visualizing your research <span className="block text-zinc-400"
                                >from beginning to end</span>
                            </h2>
                        </div>
                        <ProcessMap investigationDetails={investigationDetails} />
                    </div>
                </div>
            </section>
        </article>


    );
}


{/* <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="size-6">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg> */}



{/* <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler size-5 icon-tabler-key"

                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none" />
                                                    <circle
                                                        cx="8"
                                                        cy="15"
                                                        r="4" />
                                                    <line
                                                        x1="10.85"
                                                        y1="12.15"
                                                        x2="19"
                                                        y2="4" />
                                                    <line
                                                        x1="18"
                                                        y1="5"
                                                        x2="20"
                                                        y2="7" />
                                                    <line
                                                        x1="15"
                                                        y1="8"
                                                        x2="17"
                                                        y2="10" />
                                                </svg> */}