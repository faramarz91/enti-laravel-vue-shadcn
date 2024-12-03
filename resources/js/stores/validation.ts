import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useValidationStore = defineStore('validation', () => {
    const data = ref()

    const message = computed(() => data.value?.message)
    function error(fieldName) {
        return data.value?.errors[fieldName]
    }

    function hasError(fieldName) {
        return !!data.value?.errors[fieldName]
    }

    return { data, message, hasError, error }
})
