import TopPath from "./Paths/TopPath"
import MiddlePath from "./Paths/MiddlePath"
import BottomPath from "./Paths/BottomPath"
import MindNode1 from "./Nodes/MindNode1"
import MindNode2 from "./Nodes/MindNode2"
import MindNode3 from "./Nodes/MindNode3"
import MindNode4 from "./Nodes/MindNode4"

import SearchNode from "./Nodes/SearchNode"

export default function MindMap({ currentStep }) {

    return (
        <div
            className="text-white xs:h-fit md:h-full w-full bg-white/10
        mx-auto flex flex-col xs:pt-4 xs:px-12 md:p-10 rounded-4xl relative">
            <TopPath currentStep={currentStep} />
            <MiddlePath currentStep={currentStep} />
            <BottomPath currentStep={currentStep} />
            <MindNode1 currentStep={currentStep} />
            <MindNode2 currentStep={currentStep} />
            <MindNode3 currentStep={currentStep} />
            <MindNode4 currentStep={currentStep} />
            <SearchNode currentStep={currentStep} />
        </div>
    )
}