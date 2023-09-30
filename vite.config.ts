import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return { ...prev, ['process.env.' + key]: `"${val}"` };
    },
    {}
  );

  return {
    define: envWithProcessPrefix,
    plugins: [react(), tsconfigPaths()],
    build: {
      outDir: 'build'
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use 'sass:math';
            @import "./src/styles/abstracts/_global";
            @import "./src/styles/abstracts/_variables";
            @import "./src/styles/base/_utilities";
          `
        }
      }
    },
    resolve: {
      alias: [
        { find: 'assets', replacement: path.resolve('./src/assets') },
        { find: 'components', replacement: path.resolve('./src/components') },
        { find: 'contexts', replacement: path.resolve('./src/contexts') },
        { find: 'hooks', replacement: path.resolve('./src/hooks') },
        { find: 'layouts', replacement: path.resolve('./src/layouts') },
        { find: 'pages', replacement: path.resolve('./src/pages') },
        { find: 'routes', replacement: path.resolve('./src/routes') },
        { find: 'store', replacement: path.resolve('./src/store') },
        { find: 'utils', replacement: path.resolve('./src/utils') }
      ]
    }
    // server: {
    //   port: 3000
    // }
  };
});
