import ChartHeader from "./ChartHeader";
import SourceChart from "./SourceChart";
import React from "react";

function BiasChart(): JSX.Element {
    return (
        <section
            className="lg:p-8 opacity-0 max-w-7xl animate-fade-in transition-opacity animation-delay-300ms">
            <div className="mx-auto 2xl:max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 pt-8 xl:pt-0 lg:gap-24 items-center">
                    <ChartHeader />
                    <SourceChart />
                </div>
            </div>
        </section>

    )
};

export default React.memo(BiasChart);