import { useState } from "react";
import Loader from "./React/Loader";

export default function HeroImage() {

	const [isLoading, setIsLoading] = useState(false)

	console.log(isLoading)	
	

	return (
		<section className='p-8'>
			<div className='mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-40 items-center 
			lg:py-40 w-full bg-gradientdown rounded-[3rem] overflow-hidden relative'>
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
							<strong>Elenchus</strong>
							<span className='block text-zinc-400'>
								
							</span>
						</h1>
						<p className='text-white mt-6 text-balance w-[80%]'>
							Inspired by Socrates' method of elenchus, more commonly known as 
							the <em>Socratic Method</em>.  This app guides you through examining your beliefs 
  							and uncovering the evidence behind them. Engage thoughtfully and rise above 
  							the noise of public discourse.

						</p>
						<div className='relative w-[75%] mt-8'>
							<input
								type='text'
								name='q'
								className='bg-black text-white w-full border-black h-12 shadow  p-4 rounded-full 
								 focus:border-white transition-colors'
								placeholder='search'
							/>
							<button 
							onClick={() => setIsLoading(!isLoading)}
							type='submit'>
								{isLoading ? <Loader />
								: <svg
									className='text-[#B0BEC5] hover:text-white transition-colors h-5 w-5 absolute 
									top-3.5 right-3 fill-current'
									xmlns='http://www.w3.org/2000/svg'
									xmlnsXlink='http://www.w3.org/1999/xlink'
									version='1.1'
									x='0px'
									y='0px'
									viewBox='0 0 56.966 56.966'
									xmlSpace='preserve'
								>
									<path
										d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
           s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
           c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
           s-17-7.626-17-17S14.61,6,23.984,6z'
									></path>
								</svg> }

							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
