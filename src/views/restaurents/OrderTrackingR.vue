<template>
  <div class="order-tracking">
    <h2>Order Tracking</h2>

    <div v-if="orders.length > 0">
      <div v-for="order in orders" :key="order.orderNumber" class="order-item">
        <div v-if="isLoading" class="loading">
          <p>Loading...</p>
        </div>
        <div v-else>
          <h3>{{ order.orderNumber }}</h3>
          <p class="status">Status: {{ order.status }}</p>
          <p class="delivery-time">
            Estimated Delivery Time: {{ order.estimatedDeliveryTime }}
          </p>
          <div v-if="order.driverLocation" class="driver-location">
            <p>Driver's Location: {{ order.driverLocation }}</p>
          </div>
          <button
            v-if="order.status !== 'Done'"
            @click="markOrderAsDone(order)"
          >
            Mark as Done
          </button>
          <button v-else @click="markOrderInProgress(order)">
            Mark In Progress
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <p>No active orders found.</p>
    </div>

    <div v-if="error" class="error-message">
      <p>Error: {{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      orders: [],
      error: null
    };
  },
  mounted() {
    this.fetchActiveOrders();
    this.startOrderUpdates();
  },
  methods: {
    fetchActiveOrders() {
      // Simulating API call to fetch active orders
      setTimeout(() => {
        // Replace this with your actual API call
        const response = {
          data: [
            {
              orderNumber: "123456",
              status: "Preparing",
              estimatedDeliveryTime: "12:00 PM",
              driverLocation: "123 Main St"
            },
            {
              orderNumber: "789123",
              status: "Pickup",
              estimatedDeliveryTime: "01:30 PM",
              driverLocation: "456 Elm St"
            }
            // Add more orders here...
          ]
        };
        this.orders = response.data;
        this.isLoading = false;
      }, 1000);
    },
    startOrderUpdates() {
      // Simulating real-time updates every few seconds
      setInterval(() => {
        for (let i = 0; i < this.orders.length; i++) {
          const order = this.orders[i];
          const statuses = ["Preparing", "Pickup", "Delivery"];
          order.status = statuses[Math.floor(Math.random() * statuses.length)];
          order.driverLocation = "Updated Location";
        }
      }, 5000);
    },
    markOrderAsDone(order) {
      order.status = "Done";
    },
    markOrderInProgress(order) {
      order.status = "Preparing";
    }
  }
};
</script>

<style scoped>
.order-tracking {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.status {
  font-weight: bold;
}

.delivery-time {
  margin-top: 10px;
}

.driver-location {
  margin-top: 10px;
  font-style: italic;
}

.error-message {
  margin-top: 20px;
  color: #f00;
}

.loading {
  margin-top: 10px;
}

.order-item {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin: 0;
}
</style>
