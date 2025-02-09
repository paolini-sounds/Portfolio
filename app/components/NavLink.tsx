'use client';
import React from 'react';
import handleScroll from '../util/handleScroll';

interface Props {
	text: string;
	target: string;
}

const NavLink = ({ text, target }: Props) => {
	return (
		<button
			className='btn btn-ghost text-lg hover:text-green-100'
			onClick={() => handleScroll(target)}
		>
			{text}
		</button>
	);
};

export default NavLink;
