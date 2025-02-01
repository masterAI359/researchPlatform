import { useSelector } from "react-redux"
import type { RootState } from '@/ReduxToolKit/store'

import TopPath from "./Paths/TopPath"
import MiddlePath from "./Paths/MiddlePath"
import BottomPath from "./Paths/BottomPath"
import MindNode1 from "./Nodes/MindNode1"
import MindNode2 from "./Nodes/MindNode2"
import MindNode3 from "./Nodes/MindNode3"
import MindNode4 from "./Nodes/MindNode4"
import SearchNode from "./Nodes/SearchNode"

export default function MindMap({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { stepper } = investigateState
    const { step } = stepper

    return (
        <div
            className="text-white xs:h-fit md:h-full w-10/12 bg-white/10
        mx-auto flex flex-col rounded-4xl relative">
            <TopPath currentStep={step} />
            <MiddlePath currentStep={step} />
            <BottomPath currentStep={step} />
            <MindNode1 currentStep={step} />
            <MindNode2 currentStep={step} />
            <MindNode3 currentStep={step} />
            <MindNode4 currentStep={step} />
            <SearchNode currentStep={step} />
        </div>
    )
}