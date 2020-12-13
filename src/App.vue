<template>
  <div id="app">
    <div class="header">
      <h1>Finanzapp</h1>
      <nav>
        <button v-on:click="signUp" v-if="is_auth">Registro</button>
        <button v-on:click="init" v-if="is_auth">Inicio</button>
        <button v-on:click="getBudget" v-if="is_auth">Presupuesto</button>
        <button v-if="is_auth">Transacción</button>
        <button v-if="is_auth">Cerrar Sesión</button>
      </nav>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>Finanzapp 2020</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },
  methods: {
    signUp: function () {
      if (this.$route.name != "sign_up") {
        this.$router.push({ name: "sign_up" });
      }
    },
    init: function () {
      if (this.$route.name != "user") {
        let username = localStorage.getItem("current_username");
        this.$router.push({ name: "user", params: { username: username } });
      }
    },
    getBudget: function () {
      if (this.$route.name != "user_budget") {
        let username = localStorage.getItem("current_username");
        this.$router.push({
          name: "user_budget",
          params: { username: username },
        });
      }
    },
  },
  beforeCreate: function () {
    localStorage.setItem("current_username", "hermes23");
    localStorage.setItem("isAuth", true);
    this.$router.push({ name: "user", params: { username: "hermes23" } });
  },
};
</script>

<style>
body {
  margin: 0 0 0 0;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #941103;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 {
  width: 20%;
  text-align: center;
}
.header nav {
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}

.header nav button {
  color: #ffffff;
  background: #941103;
  border: 2px solid #ffffff;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover {
  color: #941103;
  background: #ffffff;
  border: 1px solid #ffffff;
}

.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #ffffff;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #941103;
  color: #ffffff;
}

.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
