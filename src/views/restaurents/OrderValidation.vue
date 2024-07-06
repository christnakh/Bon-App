<template>
  <div>
    <h2>Order Validation</h2>

    <!-- Display orders -->
    <div class="order" v-for="(order, index) in orders" :key="index">
      <div class="order-details">
        <p><strong>Order ID:</strong> {{ order.id }}</p>
        <br />
        <p><strong>Customer Name:</strong> {{ order.customerName }}</p>
        <br />
        <p><strong>Items:</strong></p>
        <ul>
          <li v-for="(item, idx) in order.items" :key="idx">{{ item }}</li>
        </ul>
      </div>
      <div class="order-status" :class="order.status">
        {{ order.status }}
      </div>
      <div class="buttons-container">
        <button @click="acceptOrder(index)">Accept</button>
        <button @click="rejectOrder(index)">Reject</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 1,
          customerName: "John Doe",
          items: ["Item 1", "Item 2", "Item 3"],
          status: "Preparation"
        },
        {
          id: 2,
          customerName: "Jane Smith",
          items: ["Item 4", "Item 5"],
          status: "Delivery"
        }
        // Add more orders as needed
      ]
    };
  },
  methods: {
    acceptOrder(index) {
      // Implement the logic to accept the order
      console.log("Accepted order:", this.orders[index]);
    },
    rejectOrder(index) {
      // Implement the logic to reject the order
      console.log("Rejected order:", this.orders[index]);
    }
  }
};
</script>

<style scoped>
/* Custom styles for the order validation page */

body {
  background-color: #f4f4f4;
  color: #333333;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Ubuntu", sans-serif;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

.order {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.order-details {
  margin-bottom: 10px;
}

.order-details p {
  margin: 5px 0;
}

.order-status {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.buttons-container {
  display: flex;
  justify-content: center;
}

button {
  padding: 10px 20px;
  background-color: #03c167;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0 5px;
}

button:hover {
  background-color: #029c52;
}
</style>
