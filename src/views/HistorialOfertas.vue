<template>
  <ion-page>
    <ion-content>
      <div class="dashboard-container">
        <div class="top-bar">
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
          <button @click="logout" class="logout-button">🔓 Cerrar sesión</button>
        </div>

        <h2 class="headline">Historial de Ofertas Publicadas</h2>

        <div v-if="loading" class="loading">Cargando ofertas...</div>
        <div v-else-if="ofertas.length === 0" class="no-ofertas">
          Aún no tienes ninguna oferta registrada.
        </div>

        <div v-else class="table-container">
          <table class="ofertas-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Descripción</th>
                <th>Ubicación</th>
                <th>Salario</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="oferta in ofertas" :key="oferta.id">
                <td>{{ oferta.job_title }}</td>
                <td>{{ oferta.description }}</td>
                <td>{{ oferta.location }}</td>
                <td>₡{{ oferta.salary }}</td>
                <td>{{ oferta.category }}</td>
                <td class="acciones">
                  <button @click="editarOferta(oferta.id)" title="Editar">✏️</button>
                  <button @click="confirmarEliminacion(oferta.id)" title="Eliminar">🗑️</button>
                  <button @click="verCandidatos(oferta.id)" title="Ver Candidatos">👤</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Modal personalizado -->
        <div v-if="mostrarModal" class="modal-backdrop">
          <div class="modal-content">
            <h3>¿Eliminar esta oferta?</h3>
            <p>Esta acción no se puede deshacer. ¿Estás seguro?</p>
            <div class="modal-actions">
              <button class="cancelar" @click="cancelarEliminacion">Cancelar</button>
              <button class="confirmar" @click="eliminarOfertaConfirmada">Eliminar</button>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
        Bolsa de Empleo SFC de Steven, Fabricio y Carlos de la UCR
      </footer>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '@/services/apiClient'

export default defineComponent({
  name: 'HistorialOfertas',
  setup() {
    const router = useRouter()
    const ofertas = ref<any[]>([])
    const loading = ref(true)
    const userRole = ref<number | null>(null)

    const mostrarModal = ref(false)
    const ofertaAEliminar = ref<number | null>(null)

    const validarAcceso = async () => {
      try {
        const resp = await apiClient.get('/user')
        userRole.value = resp.data.role
        if (userRole.value !== 2) {
          router.replace('/login')
        } else {
          await obtenerOfertas()
        }
      } catch {
        router.replace('/login')
      }
    }

    const logout = () => {
      localStorage.removeItem('auth_token')
      router.replace('/login')
    }

    const obtenerOfertas = async () => {
      try {
        const resp = await apiClient.get('/job-offers')
        ofertas.value = resp.data
      } catch (err) {
        console.error('Error al obtener ofertas:', err)
      } finally {
        loading.value = false
      }
    }

    const editarOferta = (id: number) => router.push(`/editar-oferta/${id}`)
    const verCandidatos = (id: number) => router.push(`/candidatos/${id}`)

    const confirmarEliminacion = (id: number) => {
      ofertaAEliminar.value = id
      mostrarModal.value = true
    }

    const cancelarEliminacion = () => {
      mostrarModal.value = false
      ofertaAEliminar.value = null
    }

    const eliminarOfertaConfirmada = async () => {
      if (!ofertaAEliminar.value) return
      try {
        await apiClient.delete(`/job-offers/${ofertaAEliminar.value}`)
        ofertas.value = ofertas.value.filter(o => o.id !== ofertaAEliminar.value)
      } catch (err) {
        alert('Error al eliminar la oferta.')
      } finally {
        cancelarEliminacion()
      }
    }

    onMounted(validarAcceso)

    return {
      logout,
      ofertas,
      loading,
      editarOferta,
      verCandidatos,
      confirmarEliminacion,
      cancelarEliminacion,
      eliminarOfertaConfirmada,
      mostrarModal
    }
  }
})
</script>

<style scoped>
.dashboard-container {
  padding: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  font-family: sans-serif;
  color: #000;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 60px;
}

.logout-button {
  background: none;
  color: #e91e63;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.headline {
  text-align: center;
  margin: 1.5rem 0;
  font-size: 1.6rem;
  font-weight: bold;
  color: #000;
}

.loading,
.no-ofertas {
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  color: #666;
}

.table-container {
  overflow-x: auto;
}

.ofertas-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.ofertas-table th,
.ofertas-table td {
  padding: 0.9rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  color: #000;
}

.ofertas-table th {
  background-color: #f2f2f2;
  font-weight: bold;
  font-size: 1rem;
}

.ofertas-table tbody tr:hover {
  background-color: #f9f9f9;
}

.acciones {
  display: flex;
  gap: 0.4rem;
  justify-content: flex-start;
  align-items: center;
}

.acciones button {
  background-color: #e0f7fa;
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.2s;
}

.acciones button:hover {
  background-color: #b2ebf2;
}

.footer {
  text-align: center;
  font-size: 0.85rem;
  color: #666;
  padding: 1rem 0;
  border-top: 1px solid #ddd;
  background-color: #f8f8f8;
}

/* Estilos del modal personalizado */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-content h3 {
  margin-bottom: 0.5rem;
}

.modal-content p {
  margin-bottom: 1rem;
  color: #333;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.modal-actions button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
}

.modal-actions .cancelar {
  background-color: #eee;
  color: #555;
}

.modal-actions .confirmar {
  background-color: #e53935;
  color: white;
}
</style>


