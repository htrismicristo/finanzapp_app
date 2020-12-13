<template>
  <div id="UserBudget">
    <h2>{{ username }}</h2>
    <h2><span> Tu presupuesto personal es: </span> {{ budget }} COP</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserBudget",
  data: function () {
    return {
      username: "",
      budget: 0,
    };
  },
  created: function () {
    this.username = this.$route.params.username;
    let self = this;
    axios
      .get("https://finanzapp-api.herokuapp.com/user/budget/" + this.username)
      .then((result) => {
        self.budget = result.data.budget;
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  },
};
</script>

<style>
#UserBudget {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#UserBudget h2 {
  font-size: 50px;
  color: #1c2d61;
}
#UserBudget span {
  color: #941103;
  font-weight: bold;
}
</style>