<template>
  <ion-page>
    <ion-content>
      <div class="candidatos-container">
        <h2>👤 Candidatos postulados</h2>
        <div v-if="candidatos.length === 0">No hay candidatos registrados.</div>
        <ul v-else>
          <li v-for="c in candidatos" :key="c.id">
            <strong>{{ c.first_name }} {{ c.last_name }}</strong><br />
            📧 {{ c.email }}
          </li>
        </ul>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import apiClient from '@/services/apiClient'

export default defineComponent({
  setup() {
    const candidatos = ref<any[]>([])
    const route = useRoute()

    const obtenerCandidatos = async () => {
      const { id } = route.params
      const resp = await apiClient.get(`/job-offers/${id}/candidatos`)
      candidatos.value = resp.data
    }

    onMounted(obtenerCandidatos)

    return { candidatos }
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
