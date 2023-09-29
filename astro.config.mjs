import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    react(),
    //     {
    //   include: ['**/react/*'],
    // }
  ],
});
