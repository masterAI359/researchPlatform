export default function InsightList() {

    return (
        <ul role="list" className="xl:max-w-128 text-sm text-white mt-4 flex flex-col pt-4 border-t border-white/10">
            <li className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="ml-3">Source Integrity according to <a className="text-blue-400" href="https://mediabiasfactcheck.com/" target="_blank">Media Bias/Fact Check Ratings(MBFC) </a></span>
            </li>
            <li className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="ml-3"> Breakdown of factual reporting ratings from sources you've saved</span>
            </li><li className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="ml-3">Spot patterns in how often your sources rely on well-sourced vs. questionable reporting</span>
            </li>
        </ul>
    );
}
