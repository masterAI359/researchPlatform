import SearchBox from "../../Steps/Search";
import Step5 from "../../Steps/Step5";


export default function Slide5({
    containerWidth,
}) {

    return (
        <div
            style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }}
            className='xs:w-full xs:min-w-full text-center h-fit xs:px-2 basis-full box-border'>
            <Step5 />
        </div>
    )
}