import { defineConfig } from 'astro/config';

export default defineConfig({
  // Your Astro configuration
  integrations: [
    // Add any Astro integrations here
  ],
  vite: {
    plugins: [
      // Configure Vite to handle Elm files
      {
        name: 'vite-plugin-elm',
        enforce: 'pre',
        transform(code, id) {
          if (!id.endsWith('.elm')) return null;
          
          // This is a simplified version - in a real project, you'd use vite-plugin-elm
          return {
            code: `
              import { Elm } from '${id}';
              export { Elm };
            `,
            map: null
          };
        }
      }
    ]
  }
});
