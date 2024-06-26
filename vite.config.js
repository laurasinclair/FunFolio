import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? '/projects/memoreel/' : '/',
	server: {
		open: 'index.html',
	},
	plugins: [
		react(),
		pluginPurgeCss({
			variables: true,
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': `${path.resolve(__dirname, 'src/components/')}`,
			'@context': `${path.resolve(__dirname, 'src/context/')}`,
			'@assets': `${path.resolve(__dirname, 'src/assets/')}`,
			'@images': `${path.resolve(__dirname, 'src/assets/images/')}`,
			'@services': `${path.resolve(__dirname, 'src/services/')}`,
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@utils': path.resolve(__dirname, 'src/utils'),
		},
	},
	build: {
		outDir: 'dist',
		cssMinify: true,
		sourcemap: true,
	},
});