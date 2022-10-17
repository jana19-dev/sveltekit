import { sveltekit } from '@sveltejs/kit/vite'

const config = {
	server: {
		port: process.env.PORT || 3000
	},
	plugins: [sveltekit()],
	define: {
		'import.meta.env.BUILD_TIME': JSON.stringify(new Date().toISOString()),
		'import.meta.env.BUILD_VERSION': JSON.stringify(process.env.npm_package_version)
	}
}

export default config
