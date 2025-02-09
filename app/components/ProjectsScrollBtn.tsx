'use client';
import React from 'react';
import handleScroll from '../util/handleScroll';

const ProjectsScrollBtn = () => {
	return (
		<button
			className='btn btn-primary mr-3'
			onClick={() => handleScroll('projects')}
		>
			Projects
		</button>
	);
};

export default ProjectsScrollBtn;
