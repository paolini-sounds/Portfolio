'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import handleScroll from '../util/handleScroll';

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);
	return (
		<motion.div
			className='navbar justify-between sticky top-0 bg-black'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 2, duration: 1 }}
		>
			<motion.button
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.2, ease: 'easeInOut' }}
				onClick={() => handleScroll('home')}
				className='font-bold text-2xl ml-4 text-gray-300 hover:text-green-200 '
			>
				Andrew Paolini
			</motion.button>
			{isMobile ? (
				<details className='dropdown'>
					<motion.button
						className='mr-4'
						whileHover={{ scale: 1.1 }} // Increase size
						whileTap={{ scale: 1.15 }} // Slightly shrink when clicked
						transition={{ duration: 0.2 }}
					>
						<Menu />
					</motion.button>
				</details>
			) : (
				<div className='flex mr-10 gap-10'>
					<button
						className='font-bold hover:text-green-100'
						onClick={() => handleScroll('about')}
					>
						About
					</button>
					<button
						className='font-bold hover:text-green-100'
						onClick={() => handleScroll('projects')}
					>
						Projects
					</button>

					<button
						className='font-bold hover:text-green-100'
						onClick={() => handleScroll('contact')}
					>
						Contact
					</button>
				</div>
			)}

			<motion.div
				className='absolute bottom-0 left-1/2 h-[.5px] bg-teal-100'
				initial={{ width: '0%', x: '-50%', opacity: 0.3 }}
				animate={{ width: '100%', x: '-50%', opacity: 1 }}
				transition={{ delay: 2, duration: 1, ease: 'easeIn' }}
			/>
		</motion.div>
	);
};

export default Navbar;
