<template>
  <div class="profile-container">
    <div class="profile-header">
      <!-- Header content goes here -->
    </div>
    <div class="profile-body">
      <div class="profile-info">
        <h2>
          <input type="text" v-model="user.name" class="name-input" />
        </h2>
        <p>
          <input type="text" v-model="user.email" class="email-input" />
        </p>
        <!-- Other user information -->
      </div>
      <div class="profile-actions">
        <router-link to="/edit-profile" class="edit-profile-link"
          >Edit Profile</router-link
        >
        <button class="logout-button" @click="logout">Logout</button>
        <button class="forgot-password-button" @click="forgotPassword">
          Forgot Password
        </button>
        <router-link class="back-button" to="/#">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  data() {
    return {
      user: {
        name: "John Doe",
        email: "johndoe@example.com"
        // Other user data
      }
    };
  },
  methods: {
    logout() {
      // Handle logout functionality
    },
    forgotPassword() {
      // Handle forgot password functionality
    }
  }
};
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.profile-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f0f0f0;
  /* Avatar styles */
}

.profile-info {
  text-align: center;
  margin-top: 20px;
}

.profile-info h2 {
  font-size: 24px;
  margin-bottom: 5px;
}

.profile-info p {
  font-size: 16px;
  color: #666;
}

.name-input,
.email-input {
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  width: 250px;
}

.profile-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.edit-profile-link,
.logout-button,
.forgot-password-button,
.order-history-link {
  padding: 10px 20px;
  background-color: #ff5500;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

.logout-button {
  background-color: #666;
}

.forgot-password-button {
  background-color: #f0f0f0;
  color: #333;
}

.order-history-link {
  background-color: #007bff;
}
</style>
