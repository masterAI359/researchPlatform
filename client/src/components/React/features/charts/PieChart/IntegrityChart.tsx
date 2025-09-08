import PieChartHeader from "./PieChartHeader";
import PieChart from "./PieChart";
import React from "react";

function IntegrityChart(): JSX.Element {

    return (
        <section
            className="lg:p-8 animate-fade-in transition-opacity">
            <div className="mx-auto 2xl:max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 md:justify-center items-center">

                    <PieChartHeader />
                    <PieChart />

                </div>
            </div>
        </section>
    );
};

export default React.memo(IntegrityChart)