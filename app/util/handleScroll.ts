const handleScroll = (sectionId: string) => {
	const section = document.getElementById(sectionId);
	const navbarHeight = document.querySelector('.navbar')?.clientHeight || 0;
	if (section) {
		window.scrollTo({
			top: section.offsetTop - navbarHeight,
			behavior: 'smooth',
		});
	}
};

export default handleScroll;
