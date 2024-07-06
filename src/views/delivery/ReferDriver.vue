<template>
  <div>
    <h2>Refer Driver</h2>
    <div class="form-container">
      <label for="email">Restaurant Email:</label>
      <input type="email" id="email" v-model="restaurantEmail" />
      <button @click="sendReferral">Send Referral</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurantEmail: ""
    };
  },
  methods: {
    sendReferral() {
      // Perform the logic to send the referral to the restaurant owner using the this.restaurantEmail value
      // You can use a backend API or any other method to send the referral
      // Example API call:
      // fetch('/api/send-referral', {
      //   method: 'POST',
      //   body: JSON.stringify({ email: this.restaurantEmail }),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data);
      // })
      // .catch(error => {
      //   console.error(error);
      // });

      // Reset the input field after sending the referral
      this.restaurantEmail = "";
    }
  }
};
</script>

<style scoped>
/* Custom styles for the referral page */

body {
  background-color: #ffffff;
  color: #03c167;
  font-family: Arial, sans-serif;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

label {
  margin-bottom: 10px;
}

input {
  padding: 5px;
  margin-bottom: 10px;
  width: 300px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #03c167;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #029c52;
}
</style>
