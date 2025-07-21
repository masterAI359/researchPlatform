import React from "react";






interface GridItem {
    category: string;
    title: string;
    highlight: string;
    description: string;
}

const gridItems: GridItem[] = [
    {
        category: "Contextual Understanding",
        title: "Wikipedia-powered extracts for",
        highlight: "quick foundational insight",
        description:
            "Access concise summaries sourced from Wikipedia to quickly understand the background and core concepts behind any topic you’re investigating.",
    },
    {
        category: "Active Reflection",
        title: "Integrated note-taking for",
        highlight: "tracking your evolving perspective",
        description:
            "Capture questions, realizations, and counterpoints as you go. Your notes help document your reasoning and support a more intentional thought process.",
    },
];


const WikiAndNotes: React.FC = () => {
    return (
        <section className="lg:p-8">
            <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center relative w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-24 items-start">
                    <span className="text-blue-400">Structured thinking</span>
                    <h2 className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                        Context and notes
                        <span className="block text-zinc-400">as you explore</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-24 mt-12">
                    {gridItems.map((item, index) => (
                        <div className="relative" key={index}>
                            <p className="inline-flex text-xs text-blue-400">
                                {item.category}
                            </p>
                            <p className="mt-2 text-2xl text-white">
                                {item.title}
                                <span className="block text-zinc-400">{item.highlight}</span>
                            </p>
                            <p className="mt-4 text-base text-white">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WikiAndNotes;




