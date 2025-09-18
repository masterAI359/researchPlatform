import { WikiDisambigCandidate } from "@/services/wiki/wiki";

interface CandidateProps {
    candidate: WikiDisambigCandidate | null
};

export default function Candidate({ candidate }: CandidateProps): JSX.Element | null {
    if (!candidate) return null;

    return (
        <div
            id={`${candidate.pageid}`}
            aria-label="possible meaning"
            className="flex items-center justify-start w-full h-full"
        >
            <div className="w-full h-auto">
                <p className="text-white font-light tracking-tight text-base">
                    {candidate.extract}
                </p>
            </div>

        </div>
    );
};
