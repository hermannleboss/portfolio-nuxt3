// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            title: 'Hermann EHO | Web3 Developer',
            htmlAttrs: {
                lang: 'en'
            }
        }
    },
    devtools: {enabled: true},
    css: ['~/assets/css/main.scss'],
    modules: ['@nuxtjs/tailwindcss', "@nuxt/image", '@pinia/nuxt'],
    tailwindcss: {
        viewer: false,
    },
    image: {
        dir: 'assets',
        provider: 'netlify',
        netlify: {
            baseURl: process.env.IMAGES_URL
        }
    }
})