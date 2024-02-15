import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Включення Source Maps для продакшн білду
    minify: 'terser', // Використання Terser для мініфікації JavaScript
    terserOptions: {
      compress: {
        drop_console: true, // Видалення console.log у продакшн білді
      },
    },
    rollupOptions: {
      output: {
        manualChunks: { // Оптимізація розділення коду
          vendor: ['react', 'react-dom'], // Виділення залежностей в окремий чанк
        },
      },
    },
  },
  optimizeDeps: {
    include: ['@rainbow-me/rainbowkit', '@tanstack/react-query', 'wagmi'], // Передопрацювання залежностей для швидшого перезавантаження
  },
});