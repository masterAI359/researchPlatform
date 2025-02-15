import { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary';




interface Articles {
	description: string;
	datePublished: string;
	image: any;
	url: string;
	name: string;
	obj: any;
}

interface OptionsTypes {
	method: string;
	headers: HeadersInit;
}

export default function ArticlesResult() {
	const [articles, setArticles] = useState<Articles[]>([]);

	const options: OptionsTypes = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	};

	const fetchBingApi = async () => {
		const storedArticles = JSON.parse(sessionStorage.getItem('articles'));
		if (storedArticles || storedArticles?.date === new Date().getDate()) {
			setArticles(storedArticles.data);
			return;
		} else {
			try {
				const response = await fetch(`/search/articles?q=latest news`, options);
				if (!response.ok) {
					throw new Error('There was a network response issue!');
				}
				const jsonResponse = await response.json();
				setArticles(jsonResponse.data);
				sessionStorage.setItem('articles', JSON.stringify(jsonResponse));
			} catch (err) {
				console.log({ 'Fetch Failed': err });
			}
		}
	};


	useEffect(() => {
		fetchBingApi();
	}, []);

	function splitArray(array) {
		const midpoint = Math.ceil(array.length / 2);
		const firstHalf = array.slice(0, midpoint);
		const secondHalf = array.slice(midpoint);
		return [firstHalf, secondHalf];
	}

	const [firstHalf, secondHalf] = splitArray(articles);




	return (
		<>
			<section className='lg:p-8'>
				<div className='xs:p-4 md:px-8 py-12 mx-auto md:px-12 lg:px-0 xl:px-0 2xl:max-w-7xl'>
					<div className='relative flex flex-col bg-gradientup ring-1 ring-white/10 rounded-4xl px-6 md:pt-24 lg:flex lg:pt-0'>
						<div className='lg:p-20 lg:pb-0'>
							<div className='grid grid-cols-1 lg:grid-cols-2 lg:border-b items-end border-white/10 py-12'>
								<div>
									<span className='text-white'>Current Events</span>
									<h2 className='text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white'>
										Top Stories{' '}
										<span className='block text-zinc-400'>

										</span>
									</h2>
								</div>
								<p className='text-white mt-6'>

								</p>
							</div>
						</div>
						<div className='relative mx-auto lg:px-16'>
							<div className='items-center space-x-6 pb-12 lg:pb-0 lg:space-x-8 overflow-y-hidden relative lg:px-4 mx-auto grid grid-cols-1 lg:grid-cols-2'>
								{/* Error Boundary  */}
								<ErrorBoundary>
									<div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 lg:animate-scroller'>
										{firstHalf.map((article) => (
											<div
												key={article.name}
												className='relative rounded-3xl shadow-inset sm:opacity-0 lg:opacity-90 lg:hover:opacity-100 p-4 bg-white/5 lg:p-8 ring-1 ring-white/5'
											>
												<a href={article.url} target='_blank'>
													<figcaption className='relative flex flex-row gap-4 pb-6 border-b border-white/10'>
														<div className='overflow-hidden shrink-0'>
															<img
																src={
																	article.image.img
																		? article.image.img
																		: 'public/images/assets/cube.png'
																}
																className='object-cover rounded-full h-20 w-20 shrink-0'
															/>
														</div>
														<div>
															<div className='text-lg font-medium leading-6 text-white'>
																{article.name}
															</div>
															<div className='mt-1'>
																<span className='text-sm flex items-center gap-3 text-white/70 group-hover:text-white'>
																	<img
																		className='h-8 w-auto'
																		src={`../${article.logo}`}
																		alt=''
																	/>

																	<p>{article.provider}</p>

																	{/*}	Published on{' '}
																{article.datePublished.substring(0, 10)} at{' '}
																{article.datePublished
																	.substring(10, 16)
																	.replace('T', ' ')}  {*/}
																</span>
															</div>
														</div>
													</figcaption>
													<figure>
														<div className='h-full group mt-2 pt-2'>
															<blockquote className='relative'>
																<p className='text-base text-white'>
																	"{article.description}"
																</p>
															</blockquote>
														</div>
													</figure>
												</a>
											</div>
										))}
									</div>
									<div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 lg:animate-scroller'>
										{secondHalf.map((article) => (
											<div
												key={article.name}
												className='relative rounded-3xl shadow-inset sm:opacity-0 lg:opacity-90 lg:hover:opacity-100 p-4 bg-white/5 lg:p-8 ring-1 ring-white/5'
											>
												<a href={article.url} target='_blank'>
													<figcaption className='relative flex flex-row gap-4 pb-6 border-b border-white/10'>
														<div className='overflow-hidden shrink-0'>
															<img
																src={
																	article.image.img
																		? article.image.img
																		: 'public/images/assets/cube.png'
																}
																className='object-cover rounded-full h-20 w-20 shrink-0'
															/>
														</div>
														<div>
															<div className='text-lg font-medium leading-6 text-white'>
																{article.name}
															</div>
															<div className='mt-1'>
																<span className='text-sm flex items-center gap-3 text-white/70 group-hover:text-white'>

																	<img
																		className='h-8 w-auto'
																		src={`../${article.logo}`}
																		alt=''
																	/>

																	{article.provider}
																	{/*}			Published on{' '}
																{article.datePublished.substring(0, 10)} at{' '}
																{article.datePublished
																	.substring(10, 16)
																	.replace('T', ' ')}  {*/}
																</span>
															</div>
														</div>
													</figcaption>
													<figure>
														<div className='h-full group mt-2 pt-2'>
															<blockquote className='relative'>
																<p className='text-base text-white'>
																	"{article.description}"
																</p>
															</blockquote>
														</div>
													</figure>
												</a>
											</div>
										))}
									</div>
								</ErrorBoundary>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
