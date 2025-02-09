'use client';
import Image from 'next/image';
import andrewpic from '../public/Andrew_Picture.jpg';
import { Github, Linkedin } from 'lucide-react';
import { easeOut, motion } from 'framer-motion';
import HomePage from './home/page';
import ContactSection from './contact/page';
import ProjectsSection from './projects/page';
import AboutSection from './about/page';

export default function Home() {
	return (
		<>
			<HomePage />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</>
	);
}
