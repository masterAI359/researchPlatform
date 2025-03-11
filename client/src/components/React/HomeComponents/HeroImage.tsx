import { useState } from "react";
import Loader from "../Loaders/Loader";
import Search from "../Investigate/Steps/Search";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import LearnMore from "../Buttons/HeroImageButtons/LearnMore";
import GetStarted from "../Buttons/HeroImageButtons/GetStarted";


export default function HeroImage() {
	const id = useSelector((state: RootState) => state.auth.user_id)

	const [isLoading, setIsLoading] = useState(false)

	console.log(id)

	return (
		<section className='md:p-8 xs:p-4 animate-fade-in duration-700 ease-in'>
			<div className='md:mx-auto 2xl:max-w-7xl py-16 lg:px-16 md:px-12 sm:px-8 xs:px-6 xl:px-40 xs:w-full items-center 
			lg:py-32 bg-gradientdown rounded-[3rem] overflow-hidden relative'>
				<img
					className='sr-only lg:not-sr-only lg:absolute -mt-16 lg:left-80 opacity-70 top-20'
					src='public/images/assets/cubeTwo.png'>
				</img>

				<div className='max-w-xl'>
					<div className='mb-8 flex'>
						<span className='relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/10'>
							Welcome to
						</span>
					</div>
					<div className='mk6'>
						<h1 className='text-3xl tracking-tight mt-6 font-light lg:text-4xl text-white'>
							<strong>elenchus</strong>
							<span className='block text-zinc-400'>

							</span>
						</h1>
						<p className='text-white mt-6 text-balance w-[80%]'>
							Elenchus is a research tool, specifically for examining the statements
							you see or hear in our ever increasingly online world, where nearly everything seems to be up for debate.
							<span className="hidden sm:block"> This app guides you through examining your perspective
								on the idea or statement of your choosing, and uncovering
								the evidence behind them.</span>


						</p>
						<div className='relative w-full sm:w-[75%]   mt-8'>
							<div className="flex gap-x-6 items-center w-full">
								<GetStarted />
								<LearnMore />

							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


