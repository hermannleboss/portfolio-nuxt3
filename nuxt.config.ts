// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/css/main.scss'],
    modules: ['@nuxtjs/tailwindcss', "@nuxt/image", '@pinia/nuxt'],
    tailwindcss: {
        viewer: false,
    },
    image: {
        provider: 'netlify',
        netlify: {
            baseURl: process.env.IMAGES_URL
        }
    }
})