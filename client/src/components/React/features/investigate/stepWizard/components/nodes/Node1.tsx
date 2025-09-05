import NodeCaption from "../labels/NodeCaption";
import { captions } from "../labels/labels";
import WizardTrack from "../tracks/WizardTrack";

interface Node {
    index: number
};

export default function Node1({ index }: Node): JSX.Element {
    const nodeNumber: number = 0;

    return (
        <li className="flex flex-col md:w-full xs:w-full h-16 items-center">
            <div className="flex items-center justify-center w-full h-fit box-border">
                <WizardTrack thisStep={nodeNumber} />
            </div>
            <NodeCaption thisStep={nodeNumber} caption={captions[0].caption} />
        </li>
    );
};