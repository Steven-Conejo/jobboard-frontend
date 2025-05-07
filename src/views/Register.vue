<template>
  <ion-page>
    <div class="register-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <h1 class="title">Crear una cuenta</h1>

      <div class="form-wrapper">
        <form class="register-form" @submit.prevent="handleRegister">
          <label for="email">E-mail:</label>
          <input v-model="email" id="email" type="email" placeholder="Escriba su correo electrónico" class="input" />

          <label for="password">Contraseña:</label>
          <input v-model="password" id="password" type="password" placeholder="Escriba su contraseña" class="input" />

          <label for="confirmPassword">Confirmar Contraseña:</label>
          <input v-model="confirmPassword" id="confirmPassword" type="password" placeholder="Confirme su contraseña" class="input" />

          <label for="nombre">Nombre:</label>
          <input v-model="nombre" id="nombre" type="text" placeholder="Digite su nombre" class="input" />

          <label for="apellidos">Apellidos:</label>
          <input v-model="apellidos" id="apellidos" type="text" placeholder="Digite sus dos apellidos" class="input" />

          <label>Deseas registrarte como:</label>
          <div class="role-options">
            <label>
              <input v-model="rol" type="radio" name="role" value="candidato" />
              Candidato
            </label>
            <label>
              <input v-model="rol" type="radio" name="role" value="reclutador" />
              Reclutador
            </label>
          </div>

          <button type="submit" class="register-button">Registrar</button>
        </form>

        <p class="login-link">
          ¿Ya tienes una cuenta?<br />
          <router-link to="/login">Inicia sesión</router-link>
        </p>
      </div>
    </div>

    <footer class="footer">
      Bolsa de Empleo SFC de Steven, Fabricio y Carlos de la UCR
    </footer>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { alertController, IonPage } from '@ionic/vue'

export default defineComponent({
  name: 'Register',
  components: { IonPage },
  setup() {
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const nombre = ref('')
    const apellidos = ref('')
    const rol = ref('candidato')

    const router = useRouter()

    const showAlert = async (title: string, message: string) => {
      const alert = await alertController.create({
        header: title,
        message: message,
        buttons: ['OK']
      })
      await alert.present()
    }

    const validateEmail = (email: string) => {
      const re = /\S+@\S+\.\S+/
      return re.test(email)
    }

    const handleRegister = async () => {
      if (!email.value || !password.value || !confirmPassword.value || !nombre.value || !apellidos.value) {
        await showAlert('⚠️ Campos vacíos', 'Por favor llena todos los campos para continuar.')
        return
      }

      if (!validateEmail(email.value)) {
        await showAlert('📧 Correo inválido', 'Por favor escribe un correo electrónico válido.')
        return
      }

      if (password.value !== confirmPassword.value) {
        await showAlert('🔁 Contraseñas no coinciden', 'La contraseña y su confirmación deben ser iguales.')
        return
      }

      await showAlert('✅ Registro exitoso', `Bienvenido/a, ${nombre.value} 🎉`)

      if (rol.value === 'candidato') {
        router.push('/dashboard-candidatos')
      } else {
        router.push('/dashboard-reclutadores') 
      }
    }

    return {
      email,
      password,
      confirmPassword,
      nombre,
      apellidos,
      rol,
      handleRegister
    }
  }
})
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-height: 100vh;
  overflow-y: auto;
}

.logo {
  width: 60px;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.7rem 2rem;
  background-color: #007bff;
  border-radius: 8px;
}

.form-wrapper {
  width: 100%;
  max-width: 380px;
  background: #fff;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.register-form {
  display: flex;
  flex-direction: column;
}

.register-form label {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: #333;
}

.input {
  padding: 0.6rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
}

.role-options {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.role-options label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.register-button {
  padding: 0.6rem;
  background-color: #111;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}

.register-button:hover {
  background-color: #333;
}

.login-link {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 1rem;
  color: #000;
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


