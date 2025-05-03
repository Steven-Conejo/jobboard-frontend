<template>
  <div class="home-container">
    <div class="top-bar">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <button @click="logout" class="logout-button">
        <span>🔓</span> Cerrar sesión
      </button>
    </div>

    <h2>Buscar Empleo</h2>

    <div class="form-group">
      <label class="icon-label">
        <span class="emoji">💼</span> Categoría
      </label>
      <select class="select">
        <option>Recepcionista</option>
        <option>Contador</option>
        <option>Asistente administrativo</option>
        <option>Ingeniero industrial</option>
        <option>Técnico en electrónica</option>
        <option>Desarrollador web</option>
        <option>Secretaria</option>
        <option>Diseñador gráfico</option>
        <option>Operario de producción</option>
        <option>Agente de servicio al cliente</option>
        <option>Auxiliar contable</option>
        <option>Mecánico automotriz</option>
        <option>Cocinero</option>
        <option>Guardia de seguridad</option>
        <option>Profesor de inglés</option>
        <option>Auxiliar de bodega</option>
      </select>
    </div>

    <div class="form-group">
      <label class="icon-label">
        <span class="emoji">📍</span> Lugar
      </label>
      <select class="select">
        <option>San José</option>
        <option>Alajuela</option>
        <option>Heredia</option>
        <option>Cartago</option>
        <option>Guanacaste</option>
        <option>Puntarenas</option>
        <option>Limón</option>
      </select>
    </div>

    <h3 class="subtitle">Últimas Búsquedas</h3>
    <div class="recent-searches">
      <div class="search-item">
        <span class="emoji">🕒</span> Sin búsquedas recientes
      </div>
      <div class="search-item">
        <span class="emoji">🕒</span> Sin búsquedas recientes
      </div>
      <div class="search-item">
        <span class="emoji">🕒</span> Sin búsquedas recientes
      </div>
    </div>

    <div class="info-section">
      <h3>Potencia tu desarrollo profesional</h3>
      <p>
        Consejos, guías y recursos para encontrar antes el empleo de tus
        sueños que encaje contigo. Mira para más información
      </p>
      <img src="@/assets/imagenmujer.png" alt="Desarrollo" class="info-img" />
      <p>
        Copyright 2025 - 2025<br />
        Para más información consulte el siguiente enlace
      </p>
      <button @click="goToSomos" class="btn-somos">Quienes Somos</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()

    const logout = () => {
      router.push('/login')
    }

    const goToSomos = () => {
      router.push('/somos')
    }

    return { logout, goToSomos }
  },
})
</script>

<style scoped>
.home-container {
  padding: 1.5rem;
  max-width: 480px;
  margin: 0 auto;
  font-family: sans-serif;
  overflow-y: auto;
  height: 100vh;
  box-sizing: border-box;
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

h2 {
  margin: 1.5rem 0 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.icon-label {
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
}

.emoji {
  margin-right: 0.5rem;
}

.select {
  width: 100%;
  padding: 0.4rem;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.subtitle {
  margin-top: 2rem;
  color: #1a73e8;
}

.recent-searches {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.search-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.info-section {
  text-align: center;
  margin-top: 2rem;
  padding-bottom: 3rem;
}

.info-img {
  width: 100%;
  max-width: 250px;
  margin: 1rem auto;
  display: block;
}

.btn-somos {
  background-color: #ddd;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  color: black;
}
</style>
