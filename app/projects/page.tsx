import React from 'react';
import ProjectCard from './ProjectCard';
import soundFileExplorerImg from '../../public/SoundFileExplorer.png';
import notRedditImg from '../../public/NotReddit.png';
import pantryChefImg from '../../public/PantryChef.png';
import eventScopeImg from '../../public/EventScope.png';
import munchkinScoreKeeperImg from '../../public/MunchkinScoreKeeper.png';
import portfolioSiteImg from '../../public/PortfolioSite.png';

const ProjectsSection = () => {
	return (
		<section
			id='projects'
			className='px-2 mb-12 bg-[url(/Gradient4.png)] bg-cover bg-center bg-no-repeat'
		>
			<h1 className='text-6xl font-bold mt-8 mb-10'>Projects</h1>
			<div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center place-content-center items-center gap-x-32 gap-y-12 max-w-[100%] mx-auto lg:max-w-[90%] xl:max-w-[80%]'>
				<ProjectCard
					img={notRedditImg}
					title='NotReddit'
					tools={['React', 'MongoDB', 'Express', 'Node.js']}
					gitHubLink='https://github.com/paolini-sounds/reddit-clone'
					liveLink='https://notreddit.lat/'
				>
					A MERN stack project based on the basic funtionalities of Reddit.
				</ProjectCard>
				<ProjectCard
					img={portfolioSiteImg}
					title='Portfolio Site'
					tools={['NextJS', 'TailwindCSS', 'DaisyUI']}
					gitHubLink='https://github.com/paolini-sounds/Portfolio'
				>
					A responsive website that showcases my projects and contact
					information
				</ProjectCard>
				<ProjectCard
					img={eventScopeImg}
					title='EventScope'
					tools={['React Native', 'TypeScript', 'Zustand']}
					gitHubLink='https://github.com/paolini-sounds/EventScope'
				>
					A mobile Application to search events using Ticketmaster&#39;s
					Discovery API. Allows searching and filtering by date, category, and
					location
				</ProjectCard>
				<ProjectCard
					img={pantryChefImg}
					title='PantryChef'
					tools={['React', 'TypeScript', 'Zustand']}
					gitHubLink='https://github.com/paolini-sounds/PantryChef'
					liveLink='https://pantry-chef-psi.vercel.app/'
				>
					A React project that utilizes the Spoonacular API. Find recipes by
					ingredient, and filter by intolerances and diets.
				</ProjectCard>
				<ProjectCard
					img={soundFileExplorerImg}
					title='Sound File Explorer'
					tools={['Python', 'PySimpleGUI', 'PyGame']}
					gitHubLink='https://github.com/paolini-sounds/sound_file_explorer'
				>
					Sound File Explorer is a Python application that allows users to
					manage and play sound files. It supports search functionality,
					directory management, and displays detailed information about the
					sound files.
				</ProjectCard>
				<ProjectCard
					img={munchkinScoreKeeperImg}
					title='Munchkin Score Keeper'
					tools={['JavaScript', 'HTML', 'CSS']}
					gitHubLink='https://github.com/paolini-sounds/Munchkin_Score_Keeper'
					liveLink='https://paolini-sounds.github.io/Munchkin_Score_Keeper/'
				>
					A dynamic web application which works as a scoreboard for the board
					game munchkin
				</ProjectCard>
			</div>
		</section>
	);
};

export default ProjectsSection;
