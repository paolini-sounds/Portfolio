import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
	output: 'export', // Enables static export
	basePath: isGithubPages ? '/paolini-sounds' : '', // Adjust basePath for GitHub Pages
	assetPrefix: isGithubPages ? '/paolini-sounds/' : '', // Adjust assetPrefix for GitHub Pages
	images: {
		unoptimized: true, // Disables the Image Optimization API
	},
};

export default nextConfig;
