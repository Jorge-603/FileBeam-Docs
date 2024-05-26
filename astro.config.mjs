import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.filebeam.xyz',
  integrations: [
    starlight({
      title: 'Documentacion de FileBeam',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/dark-logo.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/filebeam/',
      },
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },
      sidebar: [
        {
          label: 'FileBeam v2.0',
          link: '/releases/sapphire',
          badge: 'Nuevo',
        },
        {
          label: 'Preguntas Frecuentes',
          autogenerate: { directory: 'faq' },
        },
        {
          label: 'API',
          autogenerate: { directory: 'api' },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/filebeam/docs/edit/master/',
      },
      customCss: ['./src/tailwind.css'],
      lastUpdated: true,
      components: {
        Head: './src/components/Head.astro',
        PageFrame: './src/components/PageFrame.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
    }),
    tailwind({ applyBaseStyles: true }),
  ],
});
