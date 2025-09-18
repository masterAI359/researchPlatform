
interface ExtractBM {
    handleSave: () => void,
    saved: boolean
};

export default function ExtractBookmark({ handleSave, saved }: ExtractBM): JSX.Element | null {


    return (
        <svg onClick={handleSave}
            className={`${saved ? 'text-white' : 'text-white/30'} group-hover:text-white/60 transition-all duration-200 ease-in-out'}
            transition-all duration-200 ease-in-out`}
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={'100%'} height={'100%'} viewBox="0,0,256,256">
            <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" /></g></g>
        </svg>
    )
}