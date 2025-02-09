import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const ContactSection = () => {
	return (
		<section id='contact' className='h-screen'>
			<div className='hero bg-base-200 min-h-screen'>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<h1 className='text-5xl font-bold'>Get in Touch</h1>
						<p className='py-6'>
							I am always looking to make new connections. Feel free to connect
							via LinkedIn or Email!
						</p>

						<a
							href='https://www.linkedin.com/in/andrewpaolini5/'
							className='btn btn-primary mr-5'
						>
							<Linkedin />
							LinkedIn
						</a>
						<a
							href='mailto:andrewpaolini123@gmail.com'
							className='btn btn-primary'
						>
							<Mail />
							Email
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
