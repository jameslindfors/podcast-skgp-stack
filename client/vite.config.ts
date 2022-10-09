import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';
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
	plugins: [
		sveltekit(),
		VitePWA({
			devOptions: {
				enabled: true
			},
			registerType: 'autoUpdate',
			injectRegister: 'auto',
			includeAssets: ['favicon.png'],
			manifest: {
				name: 'My Awesome App',
				short_name: 'MyApp',
				description: 'My Awesome App description',
				orientation: 'portrait',
				display: 'standalone',
			}
		})
	]
};

export default config;
