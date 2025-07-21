import React from "react";

interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        id: "easyIntegration",
        icon: "integration",
        title: "Publication Bias",
        description:
            `Our dynamic charts reveal the political bias of the news sources you consume,
          rated by Media Bias/Fact Check(MBFC).`,
    },
    {
        id: "customizableOrdering",
        icon: "shield",
        title: "Journalistic Integrity",
        description:
            "Evaluate the trustworthiness of news sources with factual accuracy ratings.",
    },
    {
        id: "realTimeTracking",
        icon: "tracking",
        title: "Media Pattern Tracking",
        description:
            "Explore how your reading habits evolve. Our charts highlight trends in bias and credibility within the articles you save, helping you stay self-aware in a noisy news cycle."

    },
];

const ChartingFeatures: React.FC = () => {
    return (
        <section className="lg:p-8">
            <div className="px-8 py-12 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-24 items-start">
                    <span className="text-blue-400">Informed Analysis</span>
                    <h2 className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                        Surfacing patterns
                        <span className="block text-zinc-400">in the media landscape</span>
                    </h2>
                </div>
                <div className="pt-12 border-t border-white/10 mt-12">
                    <dl className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:space-y-0 lg:gap-24">
                        {features.map((feature) => (
                            <div key={feature.id}>
                                <dt className="inline-flex items-center gap-3">
                                    <div className="flex items-center text-white">
                                        {feature.icon === "integration" && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler size-5 icon-tabler-key"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <circle cx="8" cy="15" r="4" />
                                                <line x1="10.85" y1="12.15" x2="19" y2="4" />
                                                <line x1="18" y1="5" x2="20" y2="7" />
                                                <line x1="15" y1="8" x2="17" y2="10" />
                                            </svg>
                                        )}
                                        {feature.icon === "shield" && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="size-6"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                                                <path d="M15 19l2 2l4 -4" />
                                            </svg>


                                        )}
                                        {feature.icon === "tracking" && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <p className="text-base font-medium leading-6 text-white">
                                        {feature.title}
                                    </p>
                                </dt>
                                <dd className="mt-4 text-sm text-white">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default ChartingFeatures;


{/* <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
                                                />
                                            </svg> */}