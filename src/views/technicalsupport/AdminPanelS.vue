<template>
  <div class="admin-panel">
    <h2 class="admin-panel__title">Admin Panel</h2>

    <div class="admin-panel__links">
      <div v-for="link in links" :key="link.path" class="admin-panel__link">
        <router-link :to="link.path" class="admin-panel__link-inner">
          <span class="admin-panel__link-title">{{ link.title }}</span>
        </router-link>
      </div>
    </div>

    <router-view></router-view>

    <div class="admin-panel__back">
      <router-link to="/" class="admin-panel__back-link">
        <span class="admin-panel__back-text">Back</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminPanel",
  data() {
    return {
      links: [
        {
          title: "Profile",
          path: "/tech/profile"
        },
        {
          title: "Component managmenet",
          path: "/tech/component"
        }
      ]
    };
  }
};
</script>

<style scoped>
.admin-panel {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.admin-panel__title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.admin-panel__links {
  display: flex;
  flex-wrap: wrap;
}

.admin-panel__link {
  width: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.admin-panel__link-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.admin-panel__link-inner:hover {
  background-color: #e0e0e0;
}

.admin-panel__link-title {
  font-size: 16px;
}

.admin-panel__back {
  margin-top: 20px;
}

.admin-panel__back-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #666666;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.admin-panel__back-link:hover {
  background-color: #e0e0e0;
}

.admin-panel__back-text {
  font-size: 14px;
  margin-left: 5px;
}
</style>
