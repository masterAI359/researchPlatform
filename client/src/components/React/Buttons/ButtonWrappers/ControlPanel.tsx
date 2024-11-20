import TakeNotes from "../TakeNotes"




//TODO: create the Control Panel that will let the user compare articles, take notes, and finish reading the articles

export default function ControlPanel() {

    return (
        <div>

        </div>
    )
}



function CompareStories() {

    return (
        <button className="bg-black w-auto h-auto p-2 fixed lg:left-12 lg:bottom-12 
        rounded-lg hover:bg-white/10 transition-all duration-300 
        ease-in-out group">
            <div className="h-full w-full box-border">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="35px" height="35px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(9.84615,9.84615)"><path d="M4,0c-2.20312,0 -4,1.79688 -4,4v13c0,2.20313 1.79688,4 4,4h7c0.26563,0 0.53125,-0.04297 0.78125,-0.09375c-0.25391,0.05469 -0.51172,0.09375 -0.78125,0.09375v1c0,2.20313 1.79688,4 4,4h7c2.20313,0 4,-1.79687 4,-4v-10c0,-1.0625 -0.56641,-1.50781 -2.3125,-3.21875c-0.24219,-0.23828 -0.47266,-0.50391 -0.71875,-0.75c-0.24609,-0.24609 -0.51172,-0.47656 -0.75,-0.71875c-1.71094,-1.74609 -2.15625,-2.3125 -3.21875,-2.3125h-4c-0.32422,0 -0.63281,0.05078 -0.9375,0.125c-0.34375,-0.36719 -0.77344,-0.75781 -1.375,-1.34375c-0.24219,-0.23828 -0.47266,-0.50391 -0.71875,-0.75c-0.24609,-0.24609 -0.51172,-0.47656 -0.75,-0.71875c-1.71094,-1.74609 -2.15625,-2.3125 -3.21875,-2.3125zM4,2h3.78125c0.67188,0 1.21875,0.34375 1.21875,1.15625v1.84375c0,0.55078 0.44922,1 1,1h1.90625c1.0625,0 1.09375,0.67188 1.09375,1.09375v10.625c0,0.39063 -0.89453,1.28125 -2,1.28125h-7c-1.10547,0 -2,-0.89453 -2,-2l0.125,-13.65625c0.26953,-0.78125 1,-1.34375 1.875,-1.34375zM15,7h3.78125c0.67578,0 1.21875,0.34375 1.21875,1.15625v1.84375c0,0.55078 0.44922,1 1,1h1.90625c1.0625,0 1.09375,0.67188 1.09375,1.09375v10.625c0,0.39063 -0.89453,1.28125 -2,1.28125h-7c-1.10547,0 -2,-0.89453 -2,-2v-1.5625c0.98828,-0.57422 1.6875,-1.52734 1.90625,-2.6875l4.03125,3.0625v-2.8125h3v-2h-3v-2.8125l-3.9375,3zM6.9375,8.1875v2.8125h-3v2h3v2.8125l5,-3.8125z" /></g></g></svg>
            </div>
        </button>
    )
}