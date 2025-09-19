import { RootState } from "@/ReduxToolKit/store";
import { useSelector } from "react-redux";
import ProcessMap from "./ProcessMap";
import { useEffect } from "react";
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary";
import LostData from "@/components/React/Shared/ErrorBoundaries/messages/LostData";

interface InvestigationData {
    id: string,
    icon: string,
    title: string | null,
    description: string | null
}

interface ThoughtMap {
    idea: string | null,
    initial_perspective: string | null,
    biases: string | null,
    premises: string | null,
    ending_perspective: string | null,
    changed_opinion: boolean | null
}


export default function DetailsTable() {
    const investigation = useSelector((state: RootState) => state.userWork.investigationToReview)
    const { idea, initial_perspective, biases, premises, ending_perspective, changed_opinion } = investigation

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
            description: `${changed_opinion === true ? 'You had a shift in perspective, having been moved by the evidence' : "You weren't moved to change your perspective by the available evidence"}`,
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
        <section className="max-w-7xl">
            <div
                className="mx-auto 2xl:max-w-7xl py-12 lg:px-0 2xl:py-0 px-2 items-center relative w-full">
                <div
                    className="relative isolate lg:flex-col overflow-hidden bg-gradientdown rounded-4xl px-6 p-10 lg:flex lg:p-20">
                    <div className="pb-12 border-b border-white/10">
                        <span className="text-white">Inquiry to Conclusion</span>
                        <h2
                            className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                            Layout of your research <span className="block text-zinc-400"
                            >from beginning to end</span>
                        </h2>
                    </div>
                    <ErrorBoundary fallback={<LostData />}>
                        <ProcessMap investigationDetails={investigationDetails} />
                    </ErrorBoundary>
                </div>
            </div>
        </section>
    );
}


