import { ScaleIcon, SheildIcon } from "./FallbackIcons";
import ChartFallback from "./ChartFallback";

export default function ChartFallbackContainer() {
    const integrityMessage = `
    No articles saved —
    bookmark some stories to see your reporting 
    quality snapshot.`;
    const biasMessage = "No articles saved — bookmark some stories to see a breakdown of the biases in your information sources."
    const actionFallback = "Look into a topic";
    const directionLink = "/investigate";


    return (
        <div className="flex flex-col gap-y-24 py-16">
            <ChartFallback message={biasMessage} actionText={actionFallback} direction={directionLink}>
                <ScaleIcon />
            </ChartFallback>
            <ChartFallback message={integrityMessage} actionText={actionFallback} direction={directionLink} >
                <SheildIcon />
            </ChartFallback>
        </div>
    )
};