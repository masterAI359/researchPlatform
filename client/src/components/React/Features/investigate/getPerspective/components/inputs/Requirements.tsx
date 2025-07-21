

export default function Requirements({ acceptInput, }) {

    return (
        <div
            className={`flex flex-row-reverse items-center w-full h-fit px-6 absolute bottom-0 right-0`}>
            <div className="justify-self-end h-fit w-auto rounded-full">
                {acceptInput === null
                    ? ''
                    : acceptInput === true
                        ? <svg className="text-blue-500 bottom-2 right-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="25px" height="25px"
                            fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray=""
                                strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                <g transform="scale(16,16)"><path d="M7.5,1c-3.58203,0 -6.5,2.91797 -6.5,6.5c0,3.58203 2.91797,6.5 6.5,6.5c3.58203,0 6.5,-2.91797 6.5,-6.5c0,-3.58203 -2.91797,-6.5 -6.5,-6.5zM7.5,2c3.04297,0 5.5,2.45703 
                            5.5,5.5c0,3.04297 -2.45703,5.5 -5.5,5.5c-3.04297,0 -5.5,-2.45703 -5.5,-5.5c0,-3.04297 2.45703,-5.5 5.5,-5.5zM10.14453,5.14844l-3.64453,3.64453l-1.64844,-1.64453l-0.70312,0.70313l2.35156,2.35547l4.35547,-4.35547z" />
                                </g></g>
                        </svg>
                        : acceptInput === false
                            ? <svg className="bottom-2 pr-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="25px" height="25px" fillRule="nonzero"><g fill="#f24343" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM17.52734,16l6.08789,8.94336l-6.16211,9.05664h2.54492l4.80273,-7.09766h0.19922l4.7168,7.09766h2.69336l-6.09961,-8.95508l6.23633,-9.04492h-2.55664l-4.81445,7.16016h-0.20117l-4.74023,-7.16016z" /></g></g></svg>
                            : null}
            </div>
            <div className="justify-self-end items-center h-fit w-auto mr-2">
                {acceptInput === null
                    ? ''
                    : acceptInput === true
                        ? <p className="font-light tracking-tight text-zinc-400 text-md">Proceed</p>
                        : acceptInput === false
                            ? <p className="font-normal tracking-tight text-nowrap
                     text-red-600 text-xs lg:text-md"
                            >Input must be a minimum of 5 words
                            </p>
                            : null}
            </div>
        </div>
    )
}