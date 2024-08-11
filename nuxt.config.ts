// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    plugins: ['~/plugins/burger-menu.js'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/css/global.css'],
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/seo",
        "@nuxt/eslint",
        ["@nuxtjs/google-fonts", {
            families: {
                'Josefin+Sans': [600, 700],
                Arimo: true,
            }
        }],
        "@nuxt/icon"
    ],
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    },
    icon: {
        serverBundle: {
            collections: ['uil', 'mdi']
        }
    }
})