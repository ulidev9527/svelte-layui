import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	compilerOptions: {
		customElement: true
	},
	onwarn: (warning, handler) => { // 关闭警告

		switch (warning.code) {
			case "a11y-click-events-have-key-events":
			case "a11y-no-static-element-interactions":
				return;
		}

		handler(warning);
	}
};

export default config;
