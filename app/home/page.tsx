'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import andrewpic from '../../public/Andrew_Picture.jpg';

const HomePage = () => {
	return (
		<section id='home' className=''>
			<motion.div
				className=' items-start bg-[url(/Gradient3.png)] bg-cover bg-center bg-no-repeat pt-11 lg:pt-[20vh] min-h-screen'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'easeIn' }}
				// style={{
				// 	backgroundImage: 'url(/Gradient4.png)',
				// 	backgroundSize: 'cover',
				// 	backgroundPosition: 'center',
				// 	backgroundRepeat: 'no-repeat',
				// }}
			>
				<div className='hero-content flex-col lg:flex-row-reverse gap-0 lg:gap-10'>
					<motion.div
						className='w-[50%] md:w-[45%] lg:w-[30%] mb-6'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
					>
						<Image
							src={andrewpic}
							alt='picture of andrew'
							style={{ borderRadius: '50%', objectFit: 'cover' }}
						/>
					</motion.div>

					<div className='px-5 md:px-0'>
						<p className='text-teal-500 font-bold text-2xl'>Hello, I&#39;m</p>
						<h1 className='text-6xl lg:text-8xl font-bold drop-shadow-[0_0_10px_rgba(227,223,222,0.2)]'>
							Andrew Paolini
						</h1>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
						>
							<p className='text-gray-400 font-bold text-2xl lg:text-4xl my-3 drop-shadow-[0_0_10px_rgba(227,223,222,0.6)'>
								Full Stack Developer
							</p>
						</motion.div>
						<motion.div
							className='mt-4 flex place-items-end gap-0 md:gap-3'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
						>
							<a
								href='https://www.linkedin.com/in/andrewpaolini5/'
								className='btn text-violet-300 hover:text-violet-400 transition-all'
							>
								<FaLinkedin />
								LinkedIn
							</a>
							<a
								href='https://github.com/paolini-sounds'
								className='btn text-teal-200 hover:text-teal-300 transition-all'
							>
								<FaGithub />
								GitHub
							</a>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default HomePage;
