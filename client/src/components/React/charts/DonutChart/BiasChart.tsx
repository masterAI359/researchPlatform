import ChartHeader from "./ChartHeader";
import SourceChart from "./SourceChart";
import React from "react";

function BiasChart(): JSX.Element {
    return (
        <section
            className="lg:p-8 animate-fade-in transition-opacity">
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