import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: resolve('./src/lib'),
			$components: resolve('./src/components'),
			$styles: resolve('./src/styles')
		}
	}
}

export default config
