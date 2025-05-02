import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; // precisa importar o 'path'

export default defineConfig({
  plugins: [react()],
  base: '/dev-portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // define que '@' aponta para a pasta src
    },
  },
});
