<template>
  <div class="container">
    <h2>Account Management</h2>

    <!-- Display existing accounts -->
    <div>
      <h3>Existing Accounts</h3>
      <ul>
        <li v-for="account in accounts" :key="account.id">
          <div class="client-details">
            <p><strong>Name:</strong> {{ account.name }}</p>
            <p><strong>Email:</strong> {{ account.email }}</p>
            <p><strong>Account Status:</strong> {{ account.status }}</p>
          </div>
          <div class="client-actions">
            <button @click="editAccount(account.id)">Edit</button>
            <button @click="suspendAccount(account.id)">Suspend</button>
            <button @click="deleteAccount(account.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          status: "Active"
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          status: "Active"
        }
      ]
    };
  },
  methods: {
    editAccount(accountId) {
      // Implement the edit account functionality
      console.log("Editing account:", accountId);
    },
    suspendAccount(accountId) {
      // Implement the suspend account functionality
      console.log("Suspending account:", accountId);
    },
    deleteAccount(accountId) {
      // Implement the delete account functionality
      console.log("Deleting account:", accountId);
    }
  }
};
</script>

<style scoped>
/* Custom styles for the account management page */

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333333;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
}

.client-details {
  margin-bottom: 10px;
}

.client-details p {
  margin: 5px 0;
}

.client-actions {
  display: flex;
  justify-content: flex-end;
}

button {
  padding: 10px 20px;
  background-color: #03c167;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
  margin-left: 10px;
}

button:hover {
  background-color: #029c52;
}
</style>
