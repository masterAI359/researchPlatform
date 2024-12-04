import ZoomIn from "./ZoomIn"
import ZoomOut from "./ZoomOut"

export default function ZoomWrapper() {


    return (
        <div className="absolute left-12 bottom-20 flex items-center
        rounded-lg h-8 w-16 bg-white/20 pointer-cursor">

            <ZoomOut />
            <ZoomIn />
        </div>
    )
}