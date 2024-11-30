import { useEffect, useLayoutEffect, useState } from "react"
import MobileMenu from "./MobileMenu"


export default function Navigation({ width }) {
	const [mobileView, setMobileView] = useState(false)




	{/*   Menu for Laptop/Desktop   */ }
	const deskTopContent = (<div className="fixed top-0 w-full inset-x-0 z-30">
		<div className="lg:max-w-7xl mx-auto">
			<div className="w-full mx-auto">
				<div x-data="{ open: false }" className="relative flex flex-col w-full shadow-black mt-5 p-2 mx-auto bg-black border
			 border-white/10 shadow-thick backdrop-blur-xl backdrop-filter rounded-xl md:rounded-full 
			 md:items-center md:justify-between md:flex-row md:px-6">
					<div className="flex flex-row items-center justify-between md:justify-start">
						<a className="text-white hover:text-white/50 items-center font-bold gap-3 inline-flex text-lg" href="/" title="link to your page" aria-label="your label">
							<svg className="sm:h-12 sm:w-12" width={24} height={24} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
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
					<ul className="space-y-2 text-sm list-none md:space-y-0 text-white md:m-auto inline-flex flex-nowrap justify-center md:items-center text-center md:h-8 gap-8">
						<li>
							<a href="/" title="link to your page" aria-label="your label" className="lg:py-10 hover:text-blue-400">
								Home
							</a>
						</li>
						<li>
							<a href="/Investigate" title="link to your page" aria-label="your label" className="lg:py-10 hover:text-blue-400">
								Investigate
							</a>
						</li>
						<li>
							<a href="#" title="link to your page" aria-label="your label" className="lg:py-10 hover:text-blue-400">
								Current Events
							</a>
						</li>
						<li>
							<a href="/about" title="link to your page" aria-label="your label" className="lg:py-10 hover:text-blue-400">
								About
							</a>
						</li>
					</ul>
					<div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer top-1 bottom-1 right-2 opacity-85 hover:opacity-100 transition-all duration-300 ease-out" style={{ backgroundColor: "#374151" }} >
						<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="#848d9c" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(2,2)"><path d="M64,1c-34.74,0 -63,28.26 -63,63c0,12.01 3.39055,23.68953 9.81055,33.76953c0.89,1.4 2.73867,1.80992 4.13867,0.91992c1.4,-0.89 1.80992,-2.73867 0.91992,-4.13867c-5.8,-9.12 -8.86914,-19.69078 -8.86914,-30.55078c0,-31.43 25.57,-57 57,-57c31.43,0 57,25.57 57,57c0,10.96 -3.11953,21.60906 -9.01953,30.78906c-0.9,1.39 -0.48961,3.25039 0.90039,4.15039c0.5,0.32 1.05914,0.48047 1.61914,0.48047c0.99,0 1.9493,-0.49086 2.5293,-1.38086c6.52,-10.15 9.9707,-21.91906 9.9707,-34.03906c0,-34.74 -28.26,-63 -63,-63zM64,31c-12.68,0 -23,10.32 -23,23c0,12.68 10.32,23 23,23c12.68,0 23,-10.32 23,-23c0,-12.68 -10.32,-23 -23,-23zM64,37c9.37,0 17,7.63 17,17c0,9.37 -7.63,17 -17,17c-9.37,0 -17,-7.63 -17,-17c0,-9.37 7.63,-17 17,-17zM64,88.59766c-15.255,0 -30.50914,5.80688 -42.11914,17.42187c-0.04,0.04 -0.07156,0.07133 -0.10156,0.11133l-0.28906,0.31836c-1.11,1.23 -1.02102,3.12023 0.20898,4.24023c11.6,10.52 26.62078,16.31055 42.30078,16.31055c15.68,0 30.70078,-5.79031 42.30078,-16.32031c1.23,-1.11 1.31899,-3.01024 0.20899,-4.24024l-0.15039,-0.15039c-0.07,-0.09 -0.16024,-0.18953 -0.24024,-0.26953c-11.61,-11.615 -26.86414,-17.42187 -42.11914,-17.42187zM64,94.59766c12.8425,0 25.68484,4.57742 35.83984,13.73242c-10.12,8.19 -22.72984,12.66992 -35.83984,12.66992c-13.11,0 -25.71984,-4.47992 -35.83984,-12.66992c10.155,-9.155 22.99734,-13.73242 35.83984,-13.73242z" /></g></g></svg>
					</div>
				</div>
			</div>
		</div>
	</div>)



	if (width > 700) {
		return deskTopContent
	} else {
		return <MobileMenu />
	}

}
