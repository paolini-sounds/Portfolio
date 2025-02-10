import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Andrew Paolini',
	description: 'Portfolio Website',
	openGraph: {
		title: 'Andrew Paolini - Full Stack Developer',
		description:
			'Website showcasing projects and skills as a full stack developer.',
		siteName: 'Andrew Paolini',
		images: [
			{
				url: 'https://andrewpaolini.dev/PortfolioSite.png',
				alt: 'screenshot of Andrew Paolini landing page',
				width: 1200,
				height: 746,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' data-theme='black'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
