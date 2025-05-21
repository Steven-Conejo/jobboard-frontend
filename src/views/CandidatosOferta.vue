<template>
  <ion-page>
    <ion-content>
      <div class="candidatos-container">
        <h2>👤 Candidatos postulados</h2>
        <div v-if="loading">Cargando candidatos...</div>
        <div v-else-if="candidatos.length === 0">No hay candidatos registrados.</div>
        <ul v-else>
          <li v-for="c in candidatos" :key="c.id">
            <strong>{{ c.first_name }} {{ c.last_name }}</strong><br />
            📧 {{ c.email }}
          </li>
        </ul>
        <ion-button color="primary" @click="volverHistorial" style="margin-top: 1rem;">
          ← Volver a Historial
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import apiClient from '@/services/apiClient'

export default defineComponent({
  name: 'CandidatosOferta',
  setup() {
    const candidatos = ref<any[]>([])
    const loading = ref(true)
    const route = useRoute()
    const router = useRouter()

    const obtenerCandidatos = async () => {
      loading.value = true
      const { id } = route.params
      try {
        const resp = await apiClient.get(`/job-offers/${id}/candidatos`)
        candidatos.value = resp.data
      } catch (error) {
        console.error('Error al obtener candidatos:', error)
      } finally {
        loading.value = false
      }
    }

    const volverHistorial = () => {
      router.push({ name: 'HistorialOfertas' })
    }

    onMounted(obtenerCandidatos)

    return { candidatos, loading, volverHistorial }
  }
})
</script>

<style scoped>
.candidatos-container {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
}
li {
  background-color: #f1f1f1;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
}
</style>

