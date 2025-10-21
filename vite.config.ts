import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import version from 'vite-plugin-package-version';

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      viteTsconfigPaths(),
      svgr({
        include: '**/*.svg?react',
      }),
      version(),
    ],
    server: {
      open: true,
      port: process.env.VITE_APP_PORT
        ? parseInt(process.env.VITE_APP_PORT)
        : 3000,
    },
    build: {
      outDir: 'build',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunks/[hash]-[hash].js',
          assetFileNames: 'assets/static/[name]-[hash].[ext]',
          manualChunks: {
            // MUI libraries
            mui: ['@mui/material', '@mui/icons-material'],
            // Redux libraries
            redux: ['@reduxjs/toolkit', 'react-redux'],
            // React and routing
            react: ['react', 'react-dom', 'react-router'],
          },
        },
      },
    },

    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      coverage: {
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/setupTests.ts'],
      },
    },
    resolve: {
      preserveSymlinks: true,
    },
  };
});
