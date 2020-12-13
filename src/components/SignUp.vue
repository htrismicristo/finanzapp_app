<template>
  <form id="form1" name="form1" onsubmit="getFormvalue()">
    <div class="container">
      <h1>Formulario de Registro</h1>
      <hr />

      <label for="username"><b>Nombre de Usuario</b></label>
      <input
        type="text"
        placeholder="Ingrese su nombre de usuario"
        name="username"
        id="userename"
        required
      />

      <label for="password"><b>Contraseña</b></label>
      <input
        type="password"
        placeholder="Ingrese una contraseña segura"
        name="password"
        id="password"
        required
      />

      <label for="budget"><b>Presupuesto Personal</b></label>
      <input type="number" name="budget" value="0" id="budget" required />
      <hr />

      <button type="submit" class="registerbtn" form="form1">
        Registrarme
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  getFormvalue() {
    // var x = document.getElementById("form1");
    alert("the form was submitted");
    // axios.post("https://finanzapp-api.herokuapp.com/user/signup/", {
    //     username: x.elements.namedItem("username").value,
    //     password: x.elements.namedItem("budget").value,
    //     budget: x.elements.namedItem("budget").value,
    // })
    //   .then(function (result) {
    //     if (result.status == 200) {
    //       alert("¡Registro exitoso!");
    //     }
    //   })
    //   .catch((error) => {
    //     alert(result.statusText);
    //   });
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
}

.container h1 {
  justify-content: center;
  align-items: center;
}

input[type="number"],
input[type="number"] {
  margin: 30px;
  font-size: 15px;
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  font-size: 15px;
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #1c2d61;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 20px;
  font-size: 18px;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
  font-size: 20px;
}
</style>