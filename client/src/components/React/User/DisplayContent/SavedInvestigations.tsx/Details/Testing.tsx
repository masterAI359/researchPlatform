import { RootState } from "@/ReduxToolKit/store";
import { useSelector } from "react-redux";



export function Testing() {
    const investigation = useSelector((state: RootState) => state.userWork.investigationToReview)
    const dataForReview = investigation
    console.log(investigation)

    const { idea, initial_perspective, biases, premises, ending_perspective, changed_opinion } = dataForReview

    interface InvestigationData {
        id: string,
        icon: string,
        title: string | null,
        description: string | null
    }

    const finalThoughts = null

    const features: InvestigationData[] = [
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
            description: `${changed_opinion ? 'You had a shift in perspective, having been moved by the evidence' : 'You felt that your initial perspective was validated by the available evidence'}`,
        },
        {
            id: "secureDataManagement",
            icon: "secure",
            title: "Ending Perspective",
            description: `${ending_perspective !== null ?
                `${ending_perspective === 'Agree' && 'You ended your investigation in agreement with the idea being evaluated'} 
                 ${ending_perspective === 'Disagree' && 'You ended your investigation rejecting the idea being evaluated'} 
                 ${ending_perspective === 'Neutral' && 'You were on the fence about this idea by the end of your research. Perhaps more inquiry is needed'}`
                : 'You did not share your final perspective on the idea'}`,
        },
    ];


    return (
        <article>
            <section className="lg:p-8">
                <div
                    className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center relative w-full">
                    <div
                        className="relative isolate lg:flex-col overflow-hidden bg-gradientdown ring-1 ring-white/10 rounded-4xl px-6 p-10 lg:flex lg:p-20">
                        <div className="pb-12 border-b border-white/10">
                            <span className="text-white"></span>
                            <h2
                                className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                                Visualizing your research <span className="block text-zinc-400"
                                >from beginning to end</span>
                            </h2>
                        </div>
                        <dl
                            className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3 lg:space-y-0 lg:gap-24">
                            {features.map((feature) => (
                                <div>
                                    <dt className="inline-flex items-center gap-3">
                                        <div className="flex items-center text-white">
                                            {feature.icon === "integration" && (
                                                <svg
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
                                                </svg>
                                            )}
                                            {feature.icon === "customizable" && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="size-6">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                                                </svg>
                                            )}
                                            {feature.icon === "tracking" && (
                                                <svg
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
                                                </svg>
                                            )}
                                            {feature.icon === "scalable" && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="icon icon-tabler size-5 icons-tabler-outline icon-tabler-ad-2">
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none" />
                                                    <path d="M11.933 5h-6.933v16h13v-8" />
                                                    <path d="M14 17h-5" />
                                                    <path d="M9 13h5v-4h-5z" />
                                                    <path d="M15 5v-2" />
                                                    <path d="M18 6l2 -2" />
                                                    <path d="M19 9h2" />
                                                </svg>
                                            )}
                                            {feature.icon === "reporting" && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="icon icon-tabler size-5 icons-tabler-outline icon-tabler-aspect-ratio">
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none" />
                                                    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                                    <path d="M7 12v-3h3" />
                                                    <path d="M17 12v3h-3" />
                                                </svg>
                                            )}
                                            {feature.icon === "secure" && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="icon icon-tabler size-5 icons-tabler-outline icon-tabler-asterisk">
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none" />
                                                    <path d="M12 12l8 -4.5" />
                                                    <path d="M12 12v9" />
                                                    <path d="M12 12l-8 -4.5" />
                                                    <path d="M12 12l8 4.5" />
                                                    <path d="M12 3v9" />
                                                    <path d="M12 12l-8 4.5" />
                                                </svg>
                                            )}
                                        </div>
                                        <p className="text-base font-medium leading-6 text-white">
                                            {feature.title}
                                        </p>
                                    </dt>
                                    <p className="mt-4 text-sm text-white">{feature.description}</p>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </article>


    );
}
