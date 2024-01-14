import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
});
