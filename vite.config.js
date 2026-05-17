import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: './dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.debug', 'console.info']
      }
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        selectGame: resolve(__dirname, 'select-game.html'),
        gameSolo: resolve(__dirname, 'game-solo.html'),
        gameChampions: resolve(__dirname, 'game-champions.html'),
        selectChampion: resolve(__dirname, 'select-champion.html'),
        shop: resolve(__dirname, 'shop.html')
      },
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    target: 'es2015',
    modulePreload: {
      polyfill: true
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true
  },
  preview: {
    port: 8080,
    host: true
  },
  define: {
    __APP_VERSION__: JSON.stringify('5.0.0'),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
});