import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import andrewpic from '../../public/Andrew_Picture.jpg';
import handleScroll from '../util/handleScroll';

const HomePage = () => {
	return (
		<section id='home'>
			<motion.div
				className='hero bg-base-200 items-start pt-11 md:pt-0 md:items-center min-h-screen'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'easeIn' }}
			>
				<div className='hero-content flex-col lg:flex-row-reverse gap-0 lg:gap-10'>
					<motion.div
						className='w-[60%] md:w-[45%] lg:w-[30%]'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
					>
						<Image
							src={andrewpic}
							alt='picture of andrew'
							style={{ borderRadius: '50%' }}
							objectFit='cover'
						/>
					</motion.div>

					<div className='px-5 md:px-0'>
						<p className='text-teal-500 font-bold text-2xl'>Hello, I'm</p>
						<h1 className='text-8xl font-bold drop-shadow-[0_0_10px_rgba(227,223,222,0.2)]'>
							Andrew Paolini
						</h1>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
						>
							<p className='text-gray-400 font-bold text-4xl my-3 drop-shadow-[0_0_10px_rgba(227,223,222,0.6)'>
								Full Stack Developer
							</p>
						</motion.div>
						<motion.div
							className='mt-4 flex place-items-end gap-0 md:gap-3'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
						>
							<button
								className='btn btn-primary mr-3'
								onClick={() => handleScroll('projects')}
							>
								Projects
							</button>
							<button className='btn text-violet-300 hover:text-violet-400 transition-all'>
								<Linkedin />
								LinkedIn
							</button>
							<button className='btn text-teal-200 hover:text-teal-300 transition-all'>
								<Github />
								GitHub
							</button>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default HomePage;
