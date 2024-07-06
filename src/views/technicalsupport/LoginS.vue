<template>
  <div>
    <div class="logo-container">
      <strong>Bon</strong>
      <strong>App</strong>
    </div>
    <h2>Login Form</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required /><br /><br />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required /><br /><br />

      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
      /><br /><br />

      <a href="#" class="reset">Reset Password</a><br /><br />

      <input
        type="submit"
        value="login"
        @click="$router.push('/tech/adminpanel')"
      />
    </form>
  </div>
</template>

<style>
/* Styles omitted for brevity */
</style>

<script>
export default {
  methods: {
    goToSignUp() {
      // Use router.push to change the root route to the sign-up page
      this.$router.push("/commercial/registration");
    }
  },
  name: "LoginForm"
};
</script>

<style>
body {
  background-color: #ffffff;
  color: #03c167;
  font-family: Arial, sans-serif;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

form {
  width: 300px;
  margin: 0 auto;
  margin-top: 70px;
  color: #000000;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: #ffffff;
  color: #03c167;
  box-sizing: border-box;
  border: #03c167 1px solid;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="tel"]:focus {
  outline: none;
  box-shadow: 0 0 5px #03c167;
}

input[type="submit"] {
  background-color: #03c167;
  color: #ffffff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  border: #03c167 1px solid;
}

input[type="submit"]:hover {
  background-color: #029c52;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  text-align: left;
}

.logo-container strong {
  color: black;
  font-size: 30px;
}

.logo-container strong:last-child {
  color: #06c167;
  margin-left: 5px;
}

.reset {
  text-decoration: none;
  color: #03c167;
}
</style>
