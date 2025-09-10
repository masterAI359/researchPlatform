
interface Feature {
    id: string;
    icon: "integration" | "customizable" | "tracking";
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        id: "easyIntegration",
        icon: "integration",
        title: "Easy Integration",
        description:
            "Take your data analysis to the next level with our advanced tools.",
    },
    {
        id: "customizableOrdering",
        icon: "customizable",
        title: "Customizable Ordering Options",
        description:
            "Transform your data into visually stunning infographics that captivate your audience",
    },
    {
        id: "realTimeTracking",
        icon: "tracking",
        title: "Real-time Order Tracking",
        description:
            "Our charts are optimized for mobile devices, providing a seamless viewing experience across screens.",
    },
];

export default function FeatureBenefits() {
    return (
        <section className="lg:p-8">
            <div className="px-8 py-12 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
                <div className="lg:text-center max-w-2xl lg:mx-auto">
                    <span className="text-blue-400">Comparative Analysis</span>
                    <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                        Live data charts for{" "}
                        <span className="block text-zinc-400">up-to-the-minute insights</span>
                    </h2>
                    <p className="mt-5 text-white max-w-md mx-auto">
                        Tell a compelling story with our engaging infographic charts. Transform
                        your data into visually stunning infographics that captivate your
                        audience.
                    </p>
                </div>

                <div className="space-y-24">
                    <div className="relative isolate overflow-hidden bg-gradientdown ring-1 ring-white/10 rounded-4xl px-6 pt-16 mt-12 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <span className="text-white">The coolest feature</span>
                            <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                                Advanced charting tools{" "}
                                <span className="block text-zinc-400">for in-depth data analysis</span>
                            </h2>
                            <p className="mt-4 text-base text-white">
                                Stay up-to-date with live data charts. Our charts dynamically update
                                as new data becomes available, giving you real-time insights into
                                your metrics.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href="#_"
                                    title="link to your page"
                                    aria-label="your label"
                                    className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent"
                                >
                                    Get started
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                className="absolute left-0 top-0 w-[57rem] max-w-none shadow-thick opacity-50 ring-1 ring-white/10 rounded-3xl"
                                src="/images/assets/lightcode.svg"
                                alt="img"
                            />
                        </div>
                    </div>

                    <dl className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:space-y-0 lg:gap-24">
                        {features.map((feature) => (
                            <div key={feature.id}>
                                <dt className="inline-flex items-center gap-3">
                                    <div className="flex items-center text-white">
                                        {feature.icon === "integration" && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-key"
                                                width="20"
                                                height="20"
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
                                        {feature.icon === "customizable" && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
                                                />
                                            </svg>
                                        )}
                                        {feature.icon === "tracking" && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6"
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

                    <div className="grid grid-cols-1 gap-4 list-none lg:gap-3 lg:grid-cols-4">
                        <div className="mt-12 h-full lg:mt-0 space-y-3">
                            <img
                                alt="Lexingtøn thumbnail"
                                className="w-full bg-gradientup rounded-3xl ring-1 ring-white/10"
                                src="/images/assets/lightDashboard.svg"
                            />
                        </div>
                        <div className="mt-12 h-full lg:mt-0 space-y-3 lg:col-span-3">
                            <img
                                alt="Lexingtøn thumbnail"
                                className="w-full bg-gradientdown rounded-3xl h-full object-cover object-left ring-1 ring-white/10"
                                src="/images/assets/dashboard.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
