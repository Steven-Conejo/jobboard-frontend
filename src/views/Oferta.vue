<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Registrar Oferta de Empleo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <form @submit.prevent="registrarOferta">
        <ion-item>
          <ion-label position="stacked">Título del Puesto</ion-label>
          <ion-input v-model="oferta.titulo" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Descripción</ion-label>
          <ion-textarea v-model="oferta.descripcion" required></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Ubicación</ion-label>
          <ion-input v-model="oferta.ubicacion" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Salario</ion-label>
          <ion-input v-model="oferta.salario" type="number" required></ion-input>
        </ion-item>
        <div class="form-group">
          <ion-label class="ion-padding-start">Categoría</ion-label>
          <div class="autocomplete-container">
            <input
              type="text"
              v-model="oferta.categoria"
              @input="filterCategorias"
              @focus="showCategoriaOptions = true"
              @blur="hideCategoriaOptions"
              class="autocomplete-input"
              placeholder="Escribe o selecciona una categoría"
              required
            />
            <div v-if="showCategoriaOptions && filteredCategorias.length" class="autocomplete-list">
              <div
                class="autocomplete-item"
                v-for="(categoria, index) in filteredCategorias"
                :key="index"
                @mousedown.prevent="selectCategoria(categoria)"
              >
                {{ categoria }}
              </div>
            </div>
          </div>
        </div>

        <ion-button expand="block" type="submit" class="ion-margin-top">Registrar Oferta</ion-button>
      </form>
    </ion-content>

    <footer class="footer">
      Bolsa de Empleo SFC de Steven, Fabricio y Carlos de la UCR
    </footer>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
} from '@ionic/vue'

const router = useRouter()

const categorias = [
  'Recepcionista',
  'Contador',
  'Asistente administrativo',
  'Ingeniero industrial',
  'Técnico en electrónica',
  'Desarrollador web',
  'Secretaria',
  'Diseñador gráfico',
  'Operario de producción',
  'Agente de servicio al cliente',
  'Auxiliar contable',
  'Mecánico automotriz',
  'Cocinero',
  'Guardia de seguridad',
  'Profesor de inglés',
  'Auxiliar de bodega',
]

const oferta = ref({
  titulo: '',
  descripcion: '',
  ubicacion: '',
  salario: null as number | null,
  categoria: ''
})

const showCategoriaOptions = ref(false)
const filteredCategorias = ref<string[]>(categorias)

const filterCategorias = () => {
  const search = oferta.value.categoria.toLowerCase()
  filteredCategorias.value = categorias.filter(c =>
    c.toLowerCase().includes(search)
  )
}

const selectCategoria = (categoria: string) => {
  oferta.value.categoria = categoria
  showCategoriaOptions.value = false
}

const hideCategoriaOptions = () => {
  setTimeout(() => {
    showCategoriaOptions.value = false
  }, 100)
}

const registrarOferta = () => {
  console.log('Oferta registrada:', oferta.value)
  router.push('/dashboard-reclutadores')
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  margin: 1rem 0;
  position: relative;
}

.autocomplete-container {
  position: relative;
  width: 100%;
}

.autocomplete-input {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.autocomplete-list {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #ccc;
  border-radius: 6px;
  max-height: 160px;
  overflow-y: auto;
  position: absolute;
  z-index: 10;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.autocomplete-item {
  padding: 0.6rem 0.8rem;
  cursor: pointer;
}

.autocomplete-item:hover {
  background-color: #f0f0f0;
}

.footer {
  text-align: center;
  font-size: 0.85rem;
  color: #666;
  padding: 1rem 0;
  border-top: 1px solid #ddd;
  background-color: #f8f8f8;
}
</style>
