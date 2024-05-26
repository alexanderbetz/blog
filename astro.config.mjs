import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { githubLight } from './src/mdx-theme'

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: githubLight
        }
    },
    site: 'https://alexanderbetz.com',
    integrations: [
        mdx(), sitemap(), tailwind({ applyBaseStyles: false })
    ]
})
