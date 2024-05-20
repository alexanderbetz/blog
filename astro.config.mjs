import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'github-light'
        }
    },
    site: 'https://alexanderbetz.com',
    integrations: [
        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: {
                theme: 'css-variables'
            }
        }), sitemap(), tailwind({ applyBaseStyles: false })
    ]
})
