<template>
  <div class="container">
    <h2>Menu Management</h2>

    <!-- Create new menu form -->
    <div>
      <h3>Create New Menu</h3>
      <form @submit.prevent="createMenu">
        <label for="menuName">Menu Name:</label>
        <input type="text" id="menuName" v-model="newMenu.name" required />

        <label for="menuItems">Menu Items:</label>
        <select id="menuItems" v-model="newMenu.items" multiple required>
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
          <!-- Add more items as needed -->
        </select>

        <button type="submit">Create Menu</button>
      </form>
    </div>

    <!-- Display existing menus -->
    <div>
      <h3>Existing Menus</h3>
      <ul>
        <li v-for="menu in menus" :key="menu.id">
          <div class="menu-name">{{ menu.name }}</div>
          <div class="menu-items">
            <ul>
              <li v-for="item in menu.items" :key="item.id">{{ item.name }}</li>
              <!-- Add more items as needed -->
            </ul>
          </div>
          <div class="menu-actions">
            <button @click="editMenu(menu.id)">Edit</button>
            <button @click="deleteMenu(menu.id)">Delete</button>
          </div>
        </li>
        <!-- Add more menus as needed -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMenu: {
        name: "",
        items: []
      },
      menus: [
        {
          id: 1,
          name: "Menu 1",
          items: [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" }
            // Add more items as needed
          ]
        }
        // Add more menus as needed
      ]
    };
  },
  methods: {
    createMenu() {
      // Add logic to create a new menu
      // Retrieve menu name from this.newMenu.name
      // Retrieve menu items from this.newMenu.items
      // Generate a unique ID for the new menu
      // Push the new menu to this.menus array
      // Reset the form
    }
  }
};
</script>

<style scoped>
/* Custom styles for the menu management page */

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
select {
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
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
}

button:hover {
  background-color: #029c52;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
}

.menu-name {
  margin-bottom: 5px;
  font-weight: bold;
}

.menu-items {
  margin-bottom: 10px;
}

.menu-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
