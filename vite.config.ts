import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Hospital_Pre-Booking_Web_Application',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
