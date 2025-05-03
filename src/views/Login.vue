<template>
    <div class="login-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <h1 class="title">Iniciar Sesión</h1>
      <form class="login-form">
        <input type="email" placeholder="Correo electrónico" class="input" />
        <input type="password" placeholder="Contraseña" class="input" />
        <button type="submit" class="login-button">Ingresar</button>
      </form>
      <p class="register-link">
        ¿No tienes una cuenta?
        <router-link to="/register">Regístrate</router-link>
      </p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'; 
  
  export default defineComponent({
    name: 'Login',
  });
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
  </style>
  