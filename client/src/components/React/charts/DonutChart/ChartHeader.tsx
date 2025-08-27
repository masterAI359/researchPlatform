import PurposeList from "./PurposeList";
import React from "react";

function ChartHeader(): JSX.Element {

    return (
        <div>
            <span className="text-blue-400"> Comparative Analysis</span>
            <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                Source diversity <span className="block text-zinc-400"></span>
            </h2>
            <p className="mt-4 text-base text-white">
                Identify trends in the sources you choose to inform yourself with
            </p>
            <PurposeList />
        </div>
    );
};

export default React.memo(ChartHeader);