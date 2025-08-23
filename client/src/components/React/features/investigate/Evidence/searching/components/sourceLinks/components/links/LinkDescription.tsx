import { limitString } from "@/helpers/Presentation"

export default function LinkDescription({ isPriority, isHilighted, provider, logo, description }) {

    const formattedDescription = limitString(description);

    return (
        <div className="relative w-full mx-auto flex flex-col gap-8 sm:gap-3 md:gap-5 lg:gap-8 h-auto box-border pt-2">
            <div className="flex gap-4 items-center relative px-4">
                <div>
                    <img
                        className="lg:h-8 lg:w-8 xs:h-6 xs:w-6"
                        loading={isPriority ? 'eager' : 'lazy'}
                        decoding={isPriority ? 'sync' : 'async'}
                        src={logo}
                        alt=""
                    />
                </div>

                <div className='h-full text-lg sm:text-xs text-left lg:text-sm xl:text-base font-serif text-white'>
                    {provider}
                </div>
            </div>
            <div className={`h-full ${isHilighted ? 'opacity-100' : ''}`}>
                <blockquote className='relative px-4'>
                    <p className='lg:text-sm text-base sm:text-xs text-left transition-colors duration-100 font-serif font-light'>
                        {formattedDescription}
                    </p>
                </blockquote>
            </div>
        </div>
    )
}