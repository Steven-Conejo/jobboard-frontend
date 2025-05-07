<template>
  <ion-page>
    <div class="login-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <h1 class="title">Iniciar Sesión</h1>
      <form class="login-form" @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Correo electrónico" class="input" />
        <input v-model="password" type="password" placeholder="Contraseña" class="input" />
        <button type="submit" class="login-button">Ingresar</button>
      </form>

      <p class="register-link">
        ¿No tienes una cuenta?
        <router-link to="/register" custom v-slot="{ navigate }">
          <a @click="navigate" class="register-link-text">Regístrate</a>
        </router-link>
      </p>
    </div>

    <footer class="footer">
      Bolsa de Empleo SFC de Steven, Fabricio y Carlos de la UCR
    </footer>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IonPage, alertController } from '@ionic/vue'

export default defineComponent({
  name: 'Login',
  components: { IonPage },
  setup() {
    const email = ref('')
    const password = ref('')

    const handleLogin = async () => {
      if (!email.value || !password.value) {
        await showAlert('⚠️ Campos incompletos', 'Por favor completa todos los campos.')
        return
      }

      if (!validateEmail(email.value)) {
        await showAlert('📧 Correo inválido', 'Ingresa un correo electrónico válido.')
        return
      }
      await showAlert('✅ Inicio de sesión exitoso', `Bienvenido de nuevo, ${email.value.split('@')[0]} 👋`)
    }

    const showAlert = async (header: string, message: string) => {
      const alert = await alertController.create({
        header,
        message,
        buttons: ['OK']
      })
      await alert.present()
    }

    const validateEmail = (email: string) => {
      const re = /\S+@\S+\.\S+/
      return re.test(email)
    }

    return {
      email,
      password,
      handleLogin
    }
  }
})
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
.logo {
  width: 100px;
  margin-bottom: 1rem;
}
.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.input {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login-button {
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}
.register-link {
  margin-top: 1rem;
}
.register-link-text {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
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
