<template>
  <ion-page>
    <div class="dashboard-container">
      <div class="header">
        <img src="@/assets/logo.png" alt="Logo SFC" class="logo" />
      </div>

      <div class="profile-section">
        <img src="@/assets/imagenvacia.png" alt="Sin foto" class="profile-pic" />
        <p class="user-name">Steven David</p>
        <p class="user-name">Conejo Elizondo</p>
      </div>

      <div class="add-photo">
        <button class="add-photo-btn">Agregar Foto (+)</button>
      </div>

      <div class="scrollable-content">
        <div class="card">
          <div class="card-border"></div>
          <div class="card-content">
            <div class="card-header">
              <img src="@/assets/imagenpostulaciones.png" class="card-icon" alt="Postulaciones" />
              <h4>Postulaciones</h4>
            </div>
            <p>Accede al historial de todas las postulaciones que has realizado</p>
            <input disabled placeholder="Sin postulaciones" />
            <button class="card-btn">Ver Postulaciones</button>
          </div>
        </div>

        <div class="card">
          <div class="card-border"></div>
          <div class="card-content">
            <div class="card-header">
              <img src="@/assets/imagencurriculun.png" class="card-icon" alt="Curriculum" />
              <h4>Curriculum</h4>
            </div>
            <p>Asegúrate de mantener actualizado tu curriculum</p>
            <input disabled placeholder="No actualizado" />
            <button class="card-btn">Actualizar CV</button>
          </div>
        </div>

        <div class="card">
          <div class="card-border"></div>
          <div class="card-content">
            <div class="card-header">
              <img src="@/assets/imagenperfil.png" class="card-icon" alt="Perfil" />
              <h4>Perfil</h4>
            </div>
            <p>Actualiza tus datos generales y tus preferencias</p>
            <input disabled placeholder="Actualizado hace una semana" />
            <button class="card-btn">Actualizar perfil</button>
          </div>
        </div>
      </div>

      <div class="footer-nav">
        <span class="link" @click="goToHome">🔍 Buscar Trabajo</span>
        <span class="link" @click="logout">🔓 Cerrar sesión</span>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { IonPage } from '@ionic/vue'

export default defineComponent({
  name: 'DashboardCandidatos',
  components: { IonPage },
  setup() {
    const router = useRouter()

    const goToHome = () => {
      router.push('/home')
    }

    const logout = () => {
      router.push('/login')
    }

    return { goToHome, logout }
  },
})
</script>

<style scoped>
.dashboard-container {
  padding: 1rem;
  font-family: sans-serif;
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.logo {
  width: 60px;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;
}

.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #eee;
  object-fit: cover;
}

.user-name {
  margin: 0;
  font-weight: bold;
  text-align: center;
}

.add-photo {
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
  margin-bottom: 1rem;
}

.add-photo-btn {
  background-color: #b5efbf;
  border: none;
  border-radius: 8px;
  padding: 0.3rem 0.6rem;
  font-weight: bold;
  cursor: pointer;
  color: black;
  font-size: 0.85rem;
  width: auto;
}

.scrollable-content {
  overflow-y: auto;
  flex-grow: 1;
  padding-bottom: 1rem;
}

.card {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 1rem;
  background-color: #fff;
  overflow: hidden;
}

.card-border {
  width: 10px;
  background-image: url('@/assets/bordeimagen.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.card-content {
  flex: 1;
  padding: 1rem;
  color: black;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.card-icon {
  width: 24px;
  height: 24px;
}

.card-content p {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.card-content input {
  width: 100%;
  padding: 0.4rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: black;
}

.card-btn {
  width: 100%;
  background-color: #b5efbf;
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: black;
}

.footer-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #e91e63;
  font-weight: bold;
  flex-shrink: 0;
}

.link {
  cursor: pointer;
}
</style>
