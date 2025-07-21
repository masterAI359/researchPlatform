import InvestigationsFallback from "../SavedInvestigations/fallbacks/InvestigationsFallback";
import NoChartData from "../UserArticles/fallbacks/NoChartData";


export default function MetricsFallback() {

    return (
        <section id='metrics-fallback'
            className="w-full h-full flex flex-col justify-center items-center">
            <NoChartData />
            <InvestigationsFallback />
        </section>
    );
};