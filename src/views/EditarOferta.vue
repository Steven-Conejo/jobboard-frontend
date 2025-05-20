<template>
  <ion-page>
    <ion-content>
      <div class="form-container">
        <h2>Editar Oferta</h2>
        <form @submit.prevent="guardarCambios">
          <label>Título:</label>
          <input v-model="oferta.job_title" type="text" required />

          <label>Descripción:</label>
          <textarea v-model="oferta.description" required></textarea>

          <label>Ubicación:</label>
          <input v-model="oferta.location" type="text" required />

          <label>Salario:</label>
          <input v-model.number="oferta.salary" type="number" required min="0" />

          <label>Categoría:</label>
          <input v-model="oferta.category" type="text" required />

          <ion-button type="submit" color="success" style="margin-top: 1rem;">
            💾 Guardar Cambios
          </ion-button>
          <ion-button color="medium" fill="outline" @click="cancelarEdicion" style="margin-top: 0.5rem;">
            ← Cancelar
          </ion-button>
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
  name: 'EditarOferta',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const oferta = ref<any>({
      job_title: '',
      description: '',
      location: '',
      salary: 0,
      category: ''
    })

    const obtenerOferta = async () => {
      const { id } = route.params
      try {
        const resp = await apiClient.get(`/job-offers/${id}`)
        oferta.value = resp.data
      } catch (error) {
        alert('Error al cargar la oferta.')
        router.push({ name: 'HistorialOfertas' })
      }
    }

    const guardarCambios = async () => {
      try {
        await apiClient.put(`/job-offers/${oferta.value.id}`, oferta.value)
        alert('✅ Cambios guardados correctamente.')
        router.push({ name: 'HistorialOfertas' })
      } catch (error) {
        alert('Error al guardar los cambios.')
      }
    }

    const cancelarEdicion = () => {
      router.push({ name: 'HistorialOfertas' })
    }

    onMounted(obtenerOferta)

    return { oferta, guardarCambios, cancelarEdicion }
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
input,
textarea {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}
ion-button {
  width: fit-content;
}
</style>
