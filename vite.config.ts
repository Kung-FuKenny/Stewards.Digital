import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/Hospital-Website',  // Set base path if deploying to a subdirectory
  server: {
    // Configure the development server if needed
    open: true,  // Automatically open the app in the browser
    port: 3000,  // Set custom port if needed
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.tsx'),
      },
    },
  },
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       input: {
//         main: './index.html'
//       }
//     }
//   },
//   server: {
//     port: 3000
//   }
// });
