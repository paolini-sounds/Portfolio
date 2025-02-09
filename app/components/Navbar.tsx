'use client';
import { motion } from 'framer-motion';
import React from 'react';
import NavLink from './NavLink';
import handleScroll from '../util/handleScroll';

const Navbar = () => {
	return (
		<>
			<motion.div
				className='navbar sticky top-0 z-50 justify-between bg-black'
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
				<div className='dropdown dropdown-end lg:hidden'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost bg-black m-1'
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

				<motion.div
					className='absolute bottom-0 left-1/2 h-[.5px] bg-teal-100'
					initial={{ width: '0%', x: '-50%', opacity: 0.3 }}
					animate={{ width: '100%', x: '-50%', opacity: 1 }}
					transition={{ delay: 2, duration: 1, ease: 'easeIn' }}
				/>
			</motion.div>
		</>
	);
};

export default Navbar;
