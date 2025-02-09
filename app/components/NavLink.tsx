'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface Props {
	handleScroll: (target: string) => void;
}

const NavLink = ({ text, target, scrollTo }: Props) => {
	return (
		<button
			className='font-bold hover:text-green-100'
			onClick={() => handleScroll('about')}
		>
			About
		</button>
	);
};

export default NavLink;
