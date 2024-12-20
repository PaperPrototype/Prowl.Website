import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte'],

	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
        // mdsvex({ extensions: ['.svelte', '.svx', '.md'] }),
        vitePreprocess(),
    ],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

    // plugins: [
	// 	svelte({
	// 		// these are the defaults. If you want to add more extensions, see https://mdsvex.pngwn.io/docs#extensions
	// 		extensions: [".svx"],
	// 		preprocess: mdsvex()
	// 	})
	// ]
};

export default config;
