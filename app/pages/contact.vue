<template>
  <section class="container contact">
    <article class="glass intro">
      <span class="eyebrow">Contact</span>
      <h1 class="section-title">Start the conversation without another integration sprint.</h1>
      <p class="section-copy">
        This page posts to the shared backend contact endpoint so website leads already arrive in the same data model as
        the admin can inspect later.
      </p>
    </article>

    <article class="glass form-card">
      <form class="form" @submit.prevent="onSubmit">
        <label>
          <span>Name</span>
          <input v-model="form.name" required />
        </label>
        <label>
          <span>Email</span>
          <input v-model="form.email" type="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input v-model="form.phone" />
        </label>
        <label>
          <span>Company</span>
          <input v-model="form.company" />
        </label>
        <label class="wide">
          <span>Message</span>
          <textarea v-model="form.message" rows="6" required />
        </label>
        <button :disabled="pending" type="submit">
          {{ pending ? 'Sending...' : 'Send inquiry' }}
        </button>
      </form>

      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useContactForm } from '~/app/composables/useContactForm'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  source: 'website',
})

const { pending, successMessage, errorMessage, submit } = useContactForm()

async function onSubmit() {
  await submit(form)
  if (successMessage.value) {
    Object.assign(form, { name: '', email: '', phone: '', company: '', message: '', source: 'website' })
  }
}

useSeoMeta({
  title: 'Contact',
  description: 'Send a message through the shared startup backend contact pipeline.',
})
</script>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 18px;
  padding-bottom: 48px;
}

.intro,
.form-card {
  padding: 24px;
}

.form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

label {
  display: grid;
  gap: 8px;
}

label span {
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  border: 1px solid #d8e1ec;
  border-radius: 16px;
  padding: 14px 16px;
  font: inherit;
  background: rgba(255, 255, 255, 0.86);
}

.wide {
  grid-column: 1 / -1;
}

button {
  width: fit-content;
  padding: 14px 20px;
  border: none;
  border-radius: 999px;
  color: white;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(135deg, #0f766e, #0b5d91);
}

.success {
  color: #0f766e;
}

.error {
  color: #c2410c;
}

@media (max-width: 860px) {
  .contact,
  .form {
    grid-template-columns: 1fr;
  }
}
</style>

