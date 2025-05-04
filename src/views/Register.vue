<template>
  <div class="register-container">
    <img src="@/assets/logo.png" alt="Logo" class="logo" />
    <h1 class="title">Crear una cuenta</h1>

    <div class="form-wrapper">
      <form class="register-form">
        <label for="email">E-mail:</label>
        <input id="email" type="email" placeholder="Escriba su correo electrónico" class="input" />

        <label for="password">Contraseña:</label>
        <input id="password" type="password" placeholder="Escriba su contraseña" class="input" />

        <label for="confirm-password">Confirmar Contraseña:</label>
        <input id="confirm-password" type="password" placeholder="Escriba su contraseña" class="input" />

        <label for="nombre">Nombre:</label>
        <input id="nombre" type="text" placeholder="Digite su nombre" class="input" />

        <label for="apellidos">Apellidos:</label>
        <input id="apellidos" type="text" placeholder="Digite sus dos apellidos" class="input" />

        <label>Deseas registrarte como:</label>
        <div class="role-options">
          <label>
            <input type="radio" name="role" value="candidato" checked />
            Candidato
          </label>
          <label>
            <input type="radio" name="role" value="reclutador" />
            Reclutador
          </label>
        </div>

        <button type="submit" class="register-button">Registrar</button>
      </form>

      <p class="help-link">
        ¿Necesitas ayuda en algo?
        <a href="#" class="help-anchor">envíanos un mensaje</a>
      </p>

      <p class="login-link">
        ¿Ya tienes una cuenta?
        <router-link to="/login">Inicia sesión</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Register',
});
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.logo {
  width: 60px;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4f46e5;
  margin-bottom: 1rem;
  text-align: center;
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

.help-link,
.login-link {
  text-align: center;
  font-size: 0.85rem;
  margin-top: 1rem;
}

.help-anchor {
  color: #4f46e5;
  text-decoration: none;
  margin-left: 0.2rem;
}

.help-anchor:hover {
  text-decoration: underline;
}
</style>
