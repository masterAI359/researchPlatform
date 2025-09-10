import CheckCircle from "../../Shared/IconComponents/CheckCircle";

const items = [
    {
        title: "Reflect",
        description:
            "Step away from reactive online arguments and clarify your own perspective first. Elenchus helps you map your thoughts before diving into external sources.",
    },
    {
        title: "Investigate",
        description:
            "Search current articles with a structured research mindset. Get full article content, source ratings, quick term lookups, and notes — all in one focused flow.",
    },
    {
        title: "Connect",
        description:
            "Trace how your beliefs hold up against evidence. Understand where you're solid, where you're uncertain, and why others might see it differently.",
    },
    {
        title: "Grow",
        description:
            "Build the habit of self-skepticism and intellectual honesty — not just for online discourse, but for how you engage with the world.",
    },
];

export default function WhyElenchus() {
    return (
        <section className="lg:p-8">
            <div className="px-4 py-12 lg:py-24 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
                <div className="relative isolate lg:flex-col overflow-hidden bg-gradientdown ring-1 ring-white/10 rounded-4xl px-6 p-10 lg:flex lg:p-20">
                    <div>
                        <span className="text-white">Benefits</span>
                        <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                            Foster clarity by guiding your
                            <span className="lg:block text-zinc-300">
                                thinking with structured research.
                            </span>
                        </h2>
                    </div>

                    <ul
                        role="list"
                        className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-12"
                    >
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="bg-ebony shadow-inset rounded-3xl p-4 h-full"
                            >
                                <CheckCircle />
                                <div>
                                    <p className="font-medium leading-6 text-white mt-6">
                                        {item.title}
                                    </p>
                                    <p className="text-xs mt-2 text-zinc-300 text-pretty">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
