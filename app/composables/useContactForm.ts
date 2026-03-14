import type { ContactSubmission } from '~/app/types/contact'

export function useContactForm() {
  const config = useRuntimeConfig()
  const pending = ref(false)
  const successMessage = ref('')
  const errorMessage = ref('')

  async function submit(payload: ContactSubmission) {
    pending.value = true
    successMessage.value = ''
    errorMessage.value = ''

    try {
      await $fetch(`${config.public.apiBase}/public/contact-submissions`, {
        method: 'POST',
        body: payload,
      })
      successMessage.value = 'Thanks. Your message is on its way.'
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : 'Submission failed'
    } finally {
      pending.value = false
    }
  }

  return {
    pending,
    successMessage,
    errorMessage,
    submit,
  }
}

