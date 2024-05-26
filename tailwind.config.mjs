import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: {
					'50': '#edf4fd',
					'100': '#dae9fb',
					'200': '#b5d2f7',
					'300': '#91bcf2',
					'400': '#6ca5ee',
					'500': '#478fea',
					'600': '#3972bb',
					'700': '#2b568c',
					'800': '#1c395e',
					'900': '#0e1d2f'
				},
				gray: {
					100: '#e4e5e7',
					200: '#cbccce',
					300: '#a9aaab',
					400: '#848486',
					500: '#5f5f60',
					600: '#3e3f3f',
					700: '#242525',
					800: '#131414',
					900: '#0c0d0d',
				},
			},
		},
	},
	plugins: [starlightPlugin()],
};