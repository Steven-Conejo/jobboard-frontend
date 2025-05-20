<template>
  <ion-page>
    <ion-content>
      <div class="form-container">
        <h2>Editar Oferta</h2>
        <form @submit.prevent="guardarCambios">
          <label>Título:</label>
          <input v-model="oferta.job_title" type="text" />

          <label>Descripción:</label>
          <textarea v-model="oferta.description"></textarea>

          <label>Ubicación:</label>
          <input v-model="oferta.location" type="text" />

          <label>Salario:</label>
          <input v-model.number="oferta.salary" type="number" />

          <label>Categoría:</label>
          <input v-model="oferta.category" type="text" />

          <button type="submit">💾 Guardar Cambios</button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import apiClient from '@/services/apiClient'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const oferta = ref<any>({})

    const obtenerOferta = async () => {
      const { id } = route.params
      const resp = await apiClient.get(`/job-offers/${id}`)
      oferta.value = resp.data
    }

    const guardarCambios = async () => {
      await apiClient.put(`/job-offers/${oferta.value.id}`, oferta.value)
      alert('✅ Cambios guardados correctamente.')
      router.push('/historial')
    }

    onMounted(obtenerOferta)

    return { oferta, guardarCambios }
  }
})
</script>

<style scoped>
.form-container {
  padding: 2rem;
  max-width: 600px;
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 1rem;
  font-weight: bold;
}
input, textarea {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  margin-top: 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.7rem;
  border-radius: 6px;
}
</style>
