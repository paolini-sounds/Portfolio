'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import handleScroll from '../util/handleScroll';

const Navbar = () => {
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);

	useEffect(() => {
		const navbar = document.querySelector('.navbar'); // Adjust the selector if needed
		if (!navbar) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsNavbarVisible(entry.isIntersecting);
			},
			{ root: null, threshold: 0.1 } // 10% of the navbar must be visible
		);

		observer.observe(navbar);

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<motion.div
				className='navbar justify-between bg-black'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 1 }}
			>
				<button
					className='btn btn-ghost text-2xl'
					onClick={() => handleScroll('home')}
				>
					Andrew Paolini
				</button>
				<div
					className={`dropdown dropdown-end fixed top-1 right-4 z-50 bg-opacity-0 ${
						isNavbarVisible ? 'lg:hidden' : ''
					}`}
				>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost bg-opacity-50 bg-black m-1'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							className='inline-block h-6 w-6 stroke-current'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'
							></path>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'
					>
						<li>
							<NavLink target='home' text='Home' />
						</li>
						<li>
							<NavLink target='projects' text='Projects' />
						</li>
						<li>
							<NavLink target='contact' text='Contact' />
						</li>
					</ul>
				</div>
				<div className='hidden mr-10 gap-10  lg:flex'>
					<NavLink target='home' text='Home' />
					<NavLink target='projects' text='Projects' />
					<NavLink target='contact' text='Contact' />
				</div>
			</motion.div>
			<motion.div
				className='h-[1px] w-full bg-teal-100 bg-opacity-40'
				initial={{ width: '0%', opacity: 0.3 }}
				animate={{ width: '100%', opacity: 1 }}
				transition={{ delay: 2, duration: 1, ease: 'easeIn' }}
			/>
		</>
	);
};

export default Navbar;
