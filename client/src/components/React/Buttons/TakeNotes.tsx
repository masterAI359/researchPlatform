

export default function TakeNotes({ setTakingNotes }) {

    return (
        <button
            onClick={() => setTakingNotes(prev => !prev)}
            className="bg-black w-auto h-auto p-2 fixed lg:left-12 lg:bottom-12 
        rounded-lg hover:bg-white/10 transition-all duration-300 
        ease-in-out group">
            <div className="h-full w-full box-border">
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="35px" height="35px" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.24,10.24)"><path d="M23,8.42v12.08c0,1.38071 -1.11929,2.5 -2.5,2.5h-16c-1.38071,0 -2.5,-1.11929 -2.5,-2.5v-16c0,-1.38071 1.11929,-2.5 2.5,-2.5h12c0.27614,0 0.5,0.22386 0.5,0.5c0,0.27614 -0.22386,0.5 -0.5,0.5h-12c-0.82843,0 -1.5,0.67157 -1.5,1.5v16c0,0.82843 0.67157,1.5 1.5,1.5h16c0.82843,0 1.5,-0.67157 1.5,-1.5v-12.08c0,-0.27614 0.22386,-0.5 0.5,-0.5c0.27614,0 0.5,0.22386 0.5,0.5zM6.08,16.8l14.14,-14.14c0.59216,-0.56892 1.52784,-0.56892 2.12,0c0.58491,0.58564 0.58491,1.53436 0,2.12l-14.14,14.14l-0.13,0.1c-3.07,1.53 -2.89,1.47 -3.07,1.47c-0.17386,-0.00137 -0.33452,-0.09297 -0.42428,-0.24187c-0.08975,-0.14891 -0.09571,-0.33375 -0.01572,-0.48813l1.44,-2.83c0.02371,-0.04509 0.05043,-0.08852 0.08,-0.13zM6.08,18.87l1.42,-0.71l14.13,-14.08c0.09466,-0.09388 0.1479,-0.22168 0.1479,-0.355c0,-0.13332 -0.05324,-0.26112 -0.1479,-0.355c-0.19442,-0.19057 -0.50558,-0.19057 -0.7,0l-14.09,14.08z" /></g></g></svg>

            </div>
        </button>
    )
}