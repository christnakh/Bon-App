<template>
  <div class="container">
    <h2>Component Management</h2>

    <!-- Display existing components -->
    <div>
      <h3>Existing Components</h3>
      <ul>
        <li v-for="component in components" :key="component.id">
          <div class="component-details">
            <p><strong>Name:</strong> {{ component.name }}</p>
            <p><strong>Description:</strong> {{ component.description }}</p>
          </div>
          <div class="component-actions">
            <button @click="editComponent(component)">Edit</button>
            <button @click="removeComponent(component.id)">Remove</button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Add new component form -->
    <div>
      <h3>Add New Component</h3>
      <form @submit.prevent="addComponent">
        <label for="componentName">Name:</label>
        <input
          type="text"
          id="componentName"
          v-model="newComponent.name"
          required
        />

        <label for="componentDescription">Description:</label>
        <textarea
          id="componentDescription"
          v-model="newComponent.description"
          required
        ></textarea>

        <button type="submit">Add Component</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: [
        { id: 1, name: "Component 1", description: "This is component 1" },
        { id: 2, name: "Component 2", description: "This is component 2" }
      ],
      newComponent: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    addComponent() {
      // Add new component to the components array
      const newId = this.components.length + 1;
      this.components.push({
        id: newId,
        name: this.newComponent.name,
        description: this.newComponent.description
      });

      // Clear the newComponent data
      this.newComponent.name = "";
      this.newComponent.description = "";
    },
    editComponent(component) {
      // Implement the edit functionality as per your requirements
      console.log("Edit component:", component);
    },
    removeComponent(componentId) {
      // Remove the component from the components array
      this.components = this.components.filter(
        component => component.id !== componentId
      );
    }
  }
};
</script>

<style scoped>
/* Custom component styles */
/* ... Add your custom styles here ... */
</style>
