import InsightList from "./InsightList";

export default function PieChartHeader() {

    return (
        <div className="">
            <span className="text-blue-400">Source reporting quality</span>
            <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                Journalistic integrity snapshot <span className="block text-zinc-400"></span>
            </h2>
            <p className="max-w-128 mt-4 text-base text-white">
                Review how often your sources cite evidence, rely on facts, or fall into less rigorous reporting practices
            </p>
            <InsightList />
        </div>
    );
}
