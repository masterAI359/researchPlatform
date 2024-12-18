import SearchBox from "../../Steps/SearchBox";


export default function Slide5({
    containerWidth,
    setQuery,
    setIsSubmitted,
    isLoading
}) {

    return (
        <div
            style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }}
            className='xl:w-168 xs:w-full xs:min-w-full text-center h-fit xs:px-2'>
            <SearchBox
                setQuery={setQuery}
                setIsSubmitted={setIsSubmitted}
                isLoading={isLoading}
            />
        </div>
    )
}