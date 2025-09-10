import { useSelector } from "react-redux";
import StatItem from "./StatItem"
import { RootState } from "@/ReduxToolKit/store";

interface Stats {
    percentChanged: number | null,
    validated: number | null,
    neutral: number | null,
    needMore: number | null
}

export default function StatBreakdown() {
    const stats = useSelector((state: RootState) => state.userWork.stats);

    const { neededMore, neutral, percentChanged, validated } = stats;

    return (
        <dl className="mt-12 grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2">
            <StatItem label="Changed your opinion" target={percentChanged} />
            <StatItem label="Validated your POV" target={validated} />
            <StatItem label="Remained neutral" target={neutral} />
            <StatItem label="Needed more information" target={neededMore} />
        </dl>
    );
}
