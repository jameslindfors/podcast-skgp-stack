import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				keep_infinity: true,
				passes: 10
			},
			output: {
				comments: false
			}
		}
	},
	optimizeDeps: {
		exclude: ['@urql/svelte']
	},
	plugins: [sveltekit()]
};

export default config;
