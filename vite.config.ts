import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        guide: resolve(projectRoot, 'guide/index.html'),
        catalog: resolve(projectRoot, 'catalog/index.html'),
        kitchenInterior: resolve(projectRoot, 'catalog/kuhni_i_interer/index.html'),
        sofaGuide: resolve(projectRoot, 'catalog/divani_i_kresla/index.html'),
        sofasGuide: resolve(projectRoot, 'catalog/divani_i_kresla/divani/index.html'),
        chairsGuide: resolve(projectRoot, 'catalog/divani_i_kresla/kresla/index.html'),
        storageGuide: resolve(projectRoot, 'catalog/hranenie_i_porjadok/index.html'),
        dressersGuide: resolve(projectRoot, 'catalog/hranenie_i_porjadok/komodi_i_tumbi/index.html'),
        bedsAndMattressesGuide: resolve(projectRoot, 'catalog/krovati_i_matrasi/index.html'),
        bedsGuide: resolve(projectRoot, 'catalog/krovati_i_matrasi/krovati/index.html'),
        modularKitchensGuide: resolve(projectRoot, 'catalog/kuhni_i_interer/modulnye_kuhni/index.html'),
        tablesGuide: resolve(projectRoot, 'catalog/stoli_i_stoliki/index.html'),
        diningChairsGuide: resolve(projectRoot, 'catalog/stulja_i_skami/stulja/index.html'),
      },
    },
  },
});
