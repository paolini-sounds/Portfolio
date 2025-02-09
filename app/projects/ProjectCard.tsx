import { SquareArrowOutUpRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface Props {
	img: string | StaticImageData;
	title: string;
	children: string;
	tools: string[];
	gitHubLink: string;
	liveLink?: string;
}

const ProjectCard = ({
	img,
	title,
	children,
	tools,
	gitHubLink,
	liveLink,
}: Props) => {
	return (
		<div className='card bg-base-200 rounded-lg w=[100%] md:w-[500px] '>
			<div className='px-5'>
				<figure className='relative w-full h-64 mt-4'>
					<Image
						src={img}
						alt={`screenshot of ${title}`}
						style={{ objectFit: 'contain' }}
						fill
					/>
				</figure>
			</div>
			<div className='my-2 mx-4'>
				<div className='border-b border-gray-600'>
					<h2 className='card-title text-2xl'>{title}</h2>
					<div className='flex gap-3 p-2'>
						{tools.map((tool, index) => (
							<div key={index} className='bg-gray-600 px-3 rounded-md'>
								{tool}
							</div>
						))}
					</div>
				</div>
				<p>{children}</p>
				<div className='card-actions my-3'>
					<a
						className='btn btn-ghost rounded-xl text-amber-200 hover:text-teal-300 transition-all'
						href={gitHubLink}
					>
						<FaGithub />
						GitHub
					</a>
					{liveLink && (
						<a
							className='btn btn-ghost rounded-xl text-teal-200 hover:text-teal-300 transition-all'
							href={liveLink}
						>
							<SquareArrowOutUpRight />
							Live
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
