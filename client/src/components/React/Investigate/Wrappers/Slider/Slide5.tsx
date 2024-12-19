import SearchBox from "../../Steps/SearchBox";
import Step5 from "../../Steps/Step5";


export default function Slide5({
    containerWidth,
    setGettingHelp,
    setStartSearch
}) {

    return (
        <div
            style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }}
            className='xl:w-168 xs:w-full xs:min-w-full text-center h-fit xs:px-2'>
            <Step5 setGettingHelp={setGettingHelp} setStartSearch={setStartSearch} />
        </div>
    )
}