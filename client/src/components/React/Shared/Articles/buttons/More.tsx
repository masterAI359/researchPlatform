import { useState } from "react";



export default function More({ setOpen, articleData }) {
    const [showSourceDetails, setShowSourceDetails] = useState<boolean>(false);

    return (
        <div className="bg-black border border-white/40 z-30 rounded-md 
        w-auto h-auto p-3 absolute bottom-0 right-10">
            <div
                onClick={() => { setOpen(false) }}
                className="absolute right-1 top-1 hover:bg-white/10 rounded-md p-1 xs:h-7 xs:w-7 md:h-8 md:w-8 cursor-pointer">
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" fill="currentColor" />
                </svg>
            </div>
            {!showSourceDetails && <ul className="w-full mx-auto flex flex-col gap-y-2 pr-12">
                <li className="text-white text-left hover:text-blue-400 transition-all cursor-pointer 
                duration-200 ease-in-out xs:text-xs md:text-sm font-light tracking-tight text-nowrap">
                    <a href={articleData.article_url} target="_blank">
                        Visit source
                    </a>
                </li>
                <li onClick={() => setShowSourceDetails(true)}
                    className="text-white text-left hover:text-blue-400 transition-all cursor-pointer 
                duration-200 ease-in-out xs:text-xs md:text-sm font-light tracking-tight"
                >
                    Source info
                </li>
            </ul>}

            {showSourceDetails && <SourceDetails articleData={articleData} />}
        </div>
    );
};



function SourceDetails({ articleData }): React.ReactNode {

    console.log(articleData.factual_reporting)

    return (
        <div className="w-full h-auto pt-8">
            <ul className="flex flex-col gap-y-3">
                <li className="text-white text-left cursor-pointer 
                 xs:text-xs md:text-sm font-light tracking-tight text-nowrap">
                    <span className="text-blue-400">Reporting integrity</span> - {articleData.factual_reporting ?? 'unknown'}
                </li>
                <li className="text-white text-left cursor-pointer 
                 xs:text-xs md:text-sm font-light tracking-tight">
                    <span className="text-blue-400">Country of origin</span> - {articleData.country ?? 'unknown'}
                </li>
            </ul>
        </div>
    )

}