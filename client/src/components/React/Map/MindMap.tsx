import TopPath from "./Paths/TopPath"
import MiddlePath from "./Paths/MiddlePath"
import BottomPath from "./Paths/BottomPath"
import MindNode1 from "./Nodes/MindNode1"
import MindNode2 from "./Nodes/MindNode2"
import Prejudgements from "./Nodes/Prejudgements"
import BiasNode from "./Nodes/BiasNode"
import SearchNode from "./Nodes/SearchNode"

export default function MindMap({ currentStep, setCurrentStep }) {

    return (
        <div
            className="text-white h-full w-full bg-white/10
        mx-auto flex flex-col p-10 rounded-4xl relative">
            <TopPath currentStep={currentStep} />
            <MiddlePath currentStep={currentStep} />
            <BottomPath currentStep={currentStep} />
            <MindNode1 currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <Prejudgements currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <BiasNode currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <MindNode2 currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <SearchNode currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
    )
}