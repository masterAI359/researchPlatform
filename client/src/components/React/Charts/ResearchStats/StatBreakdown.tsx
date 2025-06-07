import { StatItem } from "./Stats";

interface Stats {
    percentChanged: number | null,
    validated: number | null,
    neutral: number | null,
    needMore: number | null
}

export default function StatBreakdown({ percentChanged, validated, neutral, needMore }: Stats) {

    return (
        <dl className="mt-12 grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2">
            <StatItem label="Changed your opinion" target={percentChanged} />
            <StatItem label="Validated your POV" target={validated} />
            <StatItem label="Remained neutral" target={neutral} />
            <StatItem label="Needed more information" target={needMore} />
        </dl>
    );
}
