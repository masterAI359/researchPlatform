import MindNode1 from "./Nodes/MindNode1"
import MindNode2 from "./Nodes/MindNode2"
import Prejudgements from "./Nodes/Prejudgements"


export default function MindMap({ currentStep, setCurrentStep }) {

    return (
        <div className="w-full h-full text-white mx-auto text-center relative z-10">
            <Prejudgements currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <MindNode1 currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <MindNode2 currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
    )
}