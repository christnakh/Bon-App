<template>
  <div class="order-history">
    <h1>Order History</h1>

    <div class="filter-sort">
      <label>Filter:</label>
      <select v-model="selectedFilter" @change="applyFilter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <label>Sort By:</label>
      <select v-model="selectedSort" @change="applySort">
        <option value="date">Date</option>
        <option value="orderNumber">Order Number</option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Date</th>
          <th>Status</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in filteredOrders" :key="order.orderNumber">
          <td>{{ order.orderNumber }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.status }}</td>
          <td>
            <button @click="showOrderDetails(order.orderNumber)">
              View Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="selectedOrder">
      <h2>Order Details</h2>
      <p>Order Number: {{ selectedOrder.orderNumber }}</p>
      <p>Date: {{ selectedOrder.date }}</p>
      <p>Status: {{ selectedOrder.status }}</p>
      <!-- Additional order details here -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          orderNumber: "ORD001",
          date: "2023-06-10",
          status: "Completed"
          // Additional order details
        },
        {
          orderNumber: "ORD002",
          date: "2023-06-05",
          status: "Pending"
          // Additional order details
        }
        // Add more order objects as needed
      ],
      selectedFilter: "all",
      selectedSort: "date",
      selectedOrder: null
    };
  },
  computed: {
    filteredOrders() {
      if (this.selectedFilter === "all") {
        return this.orders;
      } else {
        return this.orders.filter(
          order => order.status === this.selectedFilter
        );
      }
    }
  },
  methods: {
    applyFilter() {
      this.selectedOrder = null;
    },
    applySort() {
      this.selectedOrder = null;
      if (this.selectedSort === "date") {
        this.orders.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (this.selectedSort === "orderNumber") {
        this.orders.sort((a, b) => a.orderNumber.localeCompare(b.orderNumber));
      }
    },
    showOrderDetails(orderNumber) {
      this.selectedOrder = this.orders.find(
        order => order.orderNumber === orderNumber
      );
    }
  }
};
</script>

<style scoped>
.order-history {
  max-width: 800px;
  margin: 0 auto;
}

.filter-sort {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

button {
  padding: 4px 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
