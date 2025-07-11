import BiasChart from "@/components/React/Charts/DonutChart/BiasChart";
import IntegrityChart from "@/components/React/Charts/PieChart/IntegrityChart";


export default function ChartJsWrapper() {

    return (
        <>
            <BiasChart />
            <IntegrityChart />
        </>
    );
};