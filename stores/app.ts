import {ref, computed} from 'vue'
import type {Ref} from 'vue'
import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', () => {
    const realisations: Ref = ref([])

    function setRealisations(data: Array<any>) {
        realisations.value = data
    }

    const getRealisations = computed(() => {
        return realisations.value
    })

    return {realisations, setRealisations}
})
