import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import React from 'react';

const ContactSection = () => {
	return (
		<section id='contact' className='h-screen'>
			<div className='hero  min-h-screen'>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<h1 className='text-5xl font-bold'>Get in Touch</h1>
						<p className='py-6'>
							Please feel free to reach out via LinkedIn or email
						</p>
						<div className='flex w-[100%]  justify-center'>
							<a
								href='https://www.linkedin.com/in/andrewpaolini5/'
								className='btn btn-primary text-teal-300 mr-5'
							>
								<FaLinkedin />
								LinkedIn
							</a>
							<a
								href='mailto:andrewpaolini123@gmail.com'
								className='btn btn-primary text-purple-300'
							>
								<Mail />
								Email
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
