<template>
  <div class="order-tracking">
    <h2>Order Tracking</h2>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else-if="activeOrder">
      <h3>{{ activeOrder.orderNumber }}</h3>
      <p class="status">Status: {{ activeOrder.status }}</p>
      <p class="delivery-time">
        Estimated Delivery Time: {{ activeOrder.estimatedDeliveryTime }}
      </p>
      <div v-if="activeOrder.driverLocation" class="driver-location">
        <p>Driver's Location: {{ activeOrder.driverLocation }}</p>
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
      activeOrder: null,
      error: null
    };
  },
  mounted() {
    this.fetchActiveOrder();
    this.startOrderUpdates();
  },
  methods: {
    fetchActiveOrder() {
      // Simulating API call to fetch the active order
      setTimeout(() => {
        // Replace this with your actual API call
        const response = {
          data: {
            orderNumber: "123456",
            status: "Preparing",
            estimatedDeliveryTime: "12:00 PM",
            driverLocation: "123 Main St"
          }
        };
        this.activeOrder = response.data;
        this.isLoading = false;
      }, 1000);
    },
    startOrderUpdates() {
      // Simulating real-time updates every few seconds
      setInterval(() => {
        if (this.activeOrder) {
          const statuses = ["Preparing", "Pickup", "Delivery"];
          this.activeOrder.status =
            statuses[Math.floor(Math.random() * statuses.length)];
          this.activeOrder.driverLocation = "Updated Location";
        }
      }, 5000);
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
</style>
