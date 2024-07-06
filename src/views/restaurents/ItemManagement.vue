<template>
  <div class="item-management">
    <h2 class="item-management__title">Item Management</h2>

    <div class="item-management__items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item-management__item"
      >
        <input
          class="item-management__input"
          type="text"
          v-model="item.name"
          placeholder="Name"
        />
        <textarea
          class="item-management__textarea"
          v-model="item.description"
          placeholder="Description"
        ></textarea>
        <input
          class="item-management__input"
          type="number"
          v-model="item.price"
          placeholder="Price"
        />
        <div class="item-management__buttons">
          <button class="item-management__edit-button" @click="editItem(index)">
            Edit
          </button>
          <button
            class="item-management__delete-button"
            @click="deleteItem(index)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <div class="item-management__save-button-container">
      <button class="item-management__save-button" @click="saveChanges">
        Save Changes
      </button>
    </div>

    <h2 class="item-management__add-title">Add Item</h2>

    <div class="item-management__item">
      <input
        class="item-management__input"
        type="text"
        v-model="newItem.name"
        placeholder="Name"
      />
      <textarea
        class="item-management__textarea"
        v-model="newItem.description"
        placeholder="Description"
      ></textarea>
      <input
        class="item-management__input"
        type="number"
        v-model="newItem.price"
        placeholder="Price"
      />
      <button class="item-management__create-button" @click="createItem">
        Create
      </button>
    </div>
    <div class="admin-panel__back-button-container">
      <button class="admin-panel__back-button" @click="goBack">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Item 1", description: "Description", price: 10 },
        { name: "Item 2", description: "Description", price: 15 },
        { name: "Item 3", description: "Description", price: 20 }
      ],
      newItem: {
        name: "",
        description: "",
        price: null
      }
    };
  },
  methods: {
    goBack() {
      // Perform the necessary logic to go back to the previous page
      this.$router.go(-1);
    },
    editItem(index) {
      const item = this.items[index];
      console.log("Editing item:", item);
    },
    deleteItem(index) {
      const item = this.items[index];
      if (confirm("Are you sure you want to delete this item?")) {
        this.items.splice(index, 1);
        console.log("Deleted item:", item);
      }
    },
    saveChanges() {
      console.log("Saving changes");
    },
    createItem() {
      const { name, description, price } = this.newItem;
      const newItem = { name, description, price };
      this.items.push(newItem);
      this.newItem.name = "";
      this.newItem.description = "";
      this.newItem.price = null;
      console.log("Created new item:", newItem);
    }
  }
};
</script>

<style scoped>
.item-management {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.item-management__title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.item-management__items {
  margin-bottom: 20px;
}

.item-management__item {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr auto;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.item-management__input,
.item-management__textarea {
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
}

.item-management__buttons {
  display: flex;
  gap: 10px;
}

.item-management__edit-button,
.item-management__delete-button,
.item-management__save-button,
.item-management__create-button {
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.item-management__edit-button:hover,
.item-management__delete-button:hover,
.item-management__save-button:hover,
.item-management__create-button:hover {
  background-color: #0062cc;
}

.item-management__save-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.item-management__add-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.item-management__create-button {
  width: 100%;
  background-color: #4caf50;
}

.item-management__create-button:hover {
  background-color: #3e8e41;
}

.item-management__input,
.item-management__textarea,
.item-management__edit-button,
.item-management__delete-button,
.item-management__save-button,
.item-management__create-button {
  font-family: Arial, sans-serif;
}

.item-management__input,
.item-management__textarea {
  margin: 4px;
}

.item-management__save-button {
  margin-top: 16px;
  background-color: #dc3545;
  color: white;
}

.item-management__save-button:hover {
  background-color: #c82333;
}
</style>
