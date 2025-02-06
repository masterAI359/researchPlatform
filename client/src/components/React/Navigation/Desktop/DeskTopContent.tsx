import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import DropdownMenu from "./Dropdown"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function DeskTopContent() {
    const signingOut = useSelector((state: RootState) => state.auth.signOut)
    const signedIn = useSelector((state: RootState) => state.auth.signedIn)

    useEffect(() => { console.log(signedIn) }, [signedIn])

    return (
        <div className={`fixed top-0 w-full inset-x-0 z-30 md:block xs:hidden sm:hidden transition-all duration-200 ease-in-out delay-200
        ${signingOut ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}
        `}>
            <div className="md:w-dvw mx-auto">
                <div className="w-full shadow-black mt-0 py-1 mx-auto border-b
			 border-white/10 shadow-thick backdrop-blur-xl backdrop-filter
			 md:items-center h-fit">
                    <div className="relative flex items-center w-full md:max-w-7xl mx-auto">
                        <div className="flex flex-row items-center justify-between md:justify-start">
                            <a className="text-white hover:text-white/50 items-center font-bold gap-3 inline-flex text-lg" href="/" title="link to your page" aria-label="your label">
                                <svg className="sm:h-9 sm:w-9" width={24} height={24} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t\t\t\t\t.st0 {\n\t\t\t\t\t\t\t\t\tfill: url(#SVGID_1_);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t.st1 {\n\t\t\t\t\t\t\t\t\tfill: url(#SVGID_00000000207239244634862380000006962274168297888698_);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t.st2 {\n\t\t\t\t\t\t\t\t\tfill: none;\n\t\t\t\t\t\t\t\tstroke: url(#SVGID_00000034776861429047087230000001558930889264589704_);\n\t\t\t\t\t\t\t\tstroke-width: 22;\n\t\t\t\t\t\t\t\tstroke-miterlimit: 10;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t.st3 {\n\t\t\t\t\t\t\t\t\tfill: none;\n\t\t\t\t\t\t\t\tstroke: #4361bf;\n\t\t\t\t\t\t\t\tstroke-width: 22;\n\t\t\t\t\t\t\t\tstroke-miterlimit: 10;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t" }} />
                                    <g>
                                        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="148.2895" y1="171.2033" x2="243.3945" y2="526.1401" gradientTransform="matrix(1 0 0 -1 0 512)">
                                            <stop offset={0} style={{ stopColor: '#231F20', stopOpacity: 0 }} />
                                            <stop offset="1.698262e-02" style={{ stopColor: '#282938', stopOpacity: '7.325035e-02' }} />
                                            <stop offset="5.051199e-02" style={{ stopColor: '#303A61', stopOpacity: '0.2179' }} />
                                            <stop offset="8.489555e-02" style={{ stopColor: '#374883', stopOpacity: '0.3662' }} />
                                            <stop offset="0.1198" style={{ stopColor: '#3C539D', stopOpacity: '0.5167' }} />
                                            <stop offset="0.1554" style={{ stopColor: '#405BB0', stopOpacity: '0.6703' }} />
                                            <stop offset="0.1921" style={{ stopColor: '#425FBB', stopOpacity: '0.8288' }} />
                                            <stop offset="0.2318" style={{ stopColor: '#4361BF' }} />
                                            <stop offset="0.5051" style={{ stopColor: '#3C519A' }} />
                                            <stop offset="0.6732" style={{ stopColor: '#384A89' }} />
                                            <stop offset="0.7144" style={{ stopColor: '#344174', stopOpacity: '0.8739' }} />
                                            <stop offset="0.7979" style={{ stopColor: '#2D3350', stopOpacity: '0.6184' }} />
                                            <stop offset="0.8759" style={{ stopColor: '#272836', stopOpacity: '0.3797' }} />
                                            <stop offset="0.9456" style={{ stopColor: '#242126', stopOpacity: '0.1664' }} />
                                            <stop offset={1} style={{ stopColor: '#231F20', stopOpacity: 0 }} />
                                        </linearGradient>
                                        <path className="st0" d="M19.6,285.4c10.5,2,20.1,5.8,30.2,8c10.1,2.3,20.3,3.9,30.7,4.6c10.3,0.7,20.7,0.6,31-0.3s20.5-2.6,30.6-4.9
	c20.2-4.7,39.8-12.1,58.5-21.5c9.4-4.7,18.6-9.8,27.4-15.3c8.8-5.5,17.3-11.6,25.3-18.1c16.1-13,30.7-28.1,43-44.8
	c12.5-16.6,22.6-34.9,30.2-54.2c3.8-9.6,6.8-19.6,9.1-29.6c2.2-10,3.6-20.3,3.8-30.4c0.2-10.1-0.7-20.3-3.2-29.8
	c-1.2-4.8-2.9-9.4-5.1-13.7c-2.1-4.4-4.7-8.3-7.8-12l10.9-9.9c4.2,4.3,7.9,9.3,10.8,14.6s5.2,10.8,7,16.4s3,11.4,3.9,17.2
	c0.8,5.8,1.3,11.6,1.4,17.3c0.3,23.1-4.4,45.7-12.1,67c-3.8,10.7-8.5,21-13.8,31c-2.7,5-5.5,9.9-8.5,14.7s-6.1,9.5-9.4,14.1
	c-13.2,18.3-28.8,34.9-46.3,49.3c-8.8,7.1-18,13.8-27.6,19.7c-9.5,5.9-19.3,11.4-29.3,16.4c-10.1,4.9-20.5,9.3-31.1,13.1
	c-10.6,3.8-21.5,7-32.6,9.2c-11.1,2.3-22.4,3.9-33.7,4.6s-22.7,0.5-34-0.6s-22.5-3.1-33.5-6c-10.9-3-21.9-6.1-31.5-12.4L19.6,285.4
	z" />
                                    </g>
                                    <g>
                                        <linearGradient id="SVGID_00000147927671876477989060000004187792665574093455_" gradientUnits="userSpaceOnUse" x1="17.252" y1="210.0029" x2="9.0475" y2="230.6258" gradientTransform="matrix(1 0 0 -1 0 512)">
                                            <stop offset="0.2989" style={{ stopColor: '#4361BF' }} />
                                            <stop offset="0.3341" style={{ stopColor: '#3B55A8', stopOpacity: '0.9381' }} />
                                            <stop offset="0.4147" style={{ stopColor: '#2B3C79', stopOpacity: '0.7968' }} />
                                            <stop offset="0.4861" style={{ stopColor: '#1F2957', stopOpacity: '0.6715' }} />
                                            <stop offset="0.5449" style={{ stopColor: '#181E43', stopOpacity: '0.5683' }} />
                                            <stop offset="0.5838" style={{ stopColor: '#151A3B', stopOpacity: '0.5' }} />
                                            <stop offset={1} style={{ stopColor: '#231F20', stopOpacity: 0 }} />
                                        </linearGradient>
                                        <path style={{ fill: 'url(#SVGID_00000147927671876477989060000004187792665574093455_)' }} d="M11.6,283.6l0.2-0.7l0.2-0.4l0.1-0.2
	l0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.2l0.5-0.4c0.3-0.2,0.7-0.5,1-0.7c0.6-0.4,1.2-0.4,1.7-0.1
	c0.5,0.2,0.9,0.7,1.4,1.3c0.4,0.7,0.8,1.5,1.1,2.9l-2.6,14.5c-0.8,1.2-1.6,1.8-2.3,2.2c-0.7,0.4-1.4,0.6-2.1,0.6s-1.3-0.2-1.8-0.8
	c-0.3-0.3-0.5-0.7-0.7-1l-0.4-0.5c-0.1-0.1-0.1-0.2-0.2-0.3c0,0,0-0.1,0-0.2v-0.1V299v-0.4l0.1-0.7L11.6,283.6z" />
                                    </g>
                                    <linearGradient id="SVGID_00000127739088028454661390000005283434346961373314_" gradientUnits="userSpaceOnUse" x1="123.5112" y1="258.2523" x2="513.2973" y2="387.4947" gradientTransform="matrix(1.0672 -7.923674e-02 7.923674e-02 -1.0934 -83.8874 610.9016)">
                                        <stop offset="0.3743" style={{ stopColor: '#4361BF' }} />
                                        <stop offset="0.6341" style={{ stopColor: '#151A2A', stopOpacity: 0 }} />
                                        <stop offset="0.8324" style={{ stopColor: '#231F20', stopOpacity: 0 }} />
                                        <stop offset="0.9553" style={{ stopColor: '#231F20', stopOpacity: 0 }} />
                                    </linearGradient>
                                    <path style={{ fill: 'none', stroke: 'url(#SVGID_00000127739088028454661390000005283434346961373314_)', strokeWidth: 22, strokeMiterlimit: 10 }} d="M413.8,76.6c43.4,36.8,72,83.9,84.3,132.5c12.7,50.1,8.2,101.7-15.2,145.2c-5.9,11-12.9,21.4-21.2,31.2
c-73.1,86.1-213,87.5-312.5,3.1s-121-222.7-47.9-308.8S314.3-7.8,413.8,76.6z" />
                                    <circle className="st3" cx="255.6" cy="255.8" r="241.2" />
                                </svg>
                                <span>elenchus</span>
                            </a>
                        </div>
                        <div className="w-full h-auto flex items-center gap-x-10">
                            <ul className="space-y-2 w-full justify-self-end justify-end text-md list-none md:space-y-0 text-white md:m-auto inline-flex flex-nowrap md:items-center text-center md:h-8 gap-8">
                                <li className="text-white hover:text-blue-300 transition-all duration-200 ease-in-out">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className="text-white hover:text-blue-300 transition-all duration-200 ease-in-out">
                                    <Link to='/Investigate'>Investigate</Link>
                                </li>
                                <li className="text-white hover:text-blue-300 transition-all duration-200 ease-in-out">
                                    <Link to='/About'>About</Link>
                                </li>
                            </ul>
                            <DropdownMenu />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}