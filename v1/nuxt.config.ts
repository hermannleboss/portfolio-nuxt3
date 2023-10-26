// https://nuxt.com/docs/api/configuration/nuxt-config
import process from "process";

export default defineNuxtConfig({
    modules: [
        ["@storyblok/nuxt", {
            accessToken: process.env.ACCESS_TOKEN,
            devtools: true,
        }]
    ],
    devtools: {enabled: true}
})
