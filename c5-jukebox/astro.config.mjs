/*
// astro.config.mjs
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  output: "server",
  adapter: netlify(),
});
*/

import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://nuoxoxo.github.io',
  base: '/jukebox',
})

/*
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});
*/
