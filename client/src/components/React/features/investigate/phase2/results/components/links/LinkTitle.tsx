


export default function LinkTitle({ name }) {

    return (
        <div className='relative z-10 p-4'>

            <div className="flex flex-col lg:gap-y-6">
                <h1 className='xl:text-lg lg:text-base sm:text-sm text-lg
                 leading-6 text-white font-light tracking-tight font-serif'>
                    {name}
                </h1>
            </div>
        </div>
    )
}