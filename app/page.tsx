import HomePage from './home/page';
import ContactSection from './contact/page';
import ProjectsSection from './projects/page';

export default function Home() {
	return (
		<div className=''>
			<HomePage />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
