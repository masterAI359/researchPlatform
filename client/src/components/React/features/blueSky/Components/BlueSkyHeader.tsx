interface BlueSkyHeader {
    children: JSX.Element | null
};


export default function BlueSkyHeader({ children }: BlueSkyHeader): JSX.Element | null {

    return (
        <div
            className='lg:px-20 lg:pb-0 relative'>
            <div className='border-b px-2 md:px-0 items-end border-white/10 py-4 lg:py-16'>
                <div className="px-2">

                    <div className='flex items-center gap-x-2 w-fit'>
                        <div className="lg:w-7 lg:h-7 h-6 w-6 mx-auto text-white/90">
                            <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>
                        </div>
                        <div className="text-zinc-300 text-xs">BlueSky feed</div>
                    </div>
                </div>
                <p className='text-white mt-6'>
                </p>
                {children}
            </div>
        </div>
    );
};