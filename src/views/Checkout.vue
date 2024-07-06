<template>
  <div class="checkout-container">
    <h2>Checkout</h2>
    <div v-if="cartItems.length === 0">
      Your cart is empty.
    </div>
    <div v-else>
      <div class="order-summary">
        <h3>Order Summary</h3>
        <div v-for="(item, index) in cartItems" :key="index" class="order-item">
          <div class="item-info">
            <h4>{{ item.name }}</h4>
            <p>Quantity: {{ item.quantity }}</p>
          </div>
          <div class="item-price">
            <p>Price: ${{ item.price }}</p>
          </div>
        </div>
        <div class="total">
          <h4>Total: ${{ calculateTotalPrice }}</h4>
        </div>
      </div>
      <h3>Delivery Address</h3>
      <div class="address-form">
        <div class="form-group">
          <label for="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            v-model="fullName"
            class="form-input"
            placeholder="Enter your full name"
          />
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <input
            type="text"
            id="address"
            v-model="address"
            class="form-input"
            placeholder="Enter your address"
          />
        </div>
        <div class="form-group">
          <label for="city">City:</label>
          <input
            type="text"
            id="city"
            v-model="city"
            class="form-input"
            placeholder="Enter your city"
          />
        </div>
        <div class="form-group">
          <label for="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            v-model="postalCode"
            class="form-input"
            placeholder="Enter your postal code"
          />
        </div>
      </div>
      <h3>Payment Information</h3>
      <div class="payment-form">
        <div class="form-group">
          <label for="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            v-model="cardNumber"
            class="form-input"
            placeholder="Enter your card number"
          />
        </div>
        <div class="form-group">
          <label for="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            v-model="expirationDate"
            class="form-input"
            placeholder="MM/YYYY"
          />
        </div>
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            v-model="cvv"
            class="form-input"
            placeholder="Enter the CVV"
          />
        </div>
      </div>
      <button @click="placeOrder" class="place-order-button">
        <router-link to="/menu/cart/checkout/ordertracking"
          >Place Order</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      cartItems: [
        { id: 1, name: "Item 1", price: 10, quantity: 1 },
        { id: 2, name: "Item 2", price: 20, quantity: 2 },
        { id: 3, name: "Item 3", price: 15, quantity: 1 }
      ],
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      cardNumber: "",
      expirationDate: "",
      cvv: ""
    };
  },
  computed: {
    calculateTotalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }
  },
  methods: {
    placeOrder() {
      this.$router.go("/menu/cart/checkout/ordertracking");
    }
  }
};
</script>

<style scoped>
.checkout-container {
  padding: 20px;
}

.order-summary {
  margin-bottom: 20px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.item-info h4 {
  margin-bottom: 5px;
}

.item-price p {
  margin: 0;
}

.total h4 {
  font-weight: bold;
}

.address-form {
  margin-bottom: 20px;
}

.payment-form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input {
  width: 300px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.place-order-button {
  padding: 10px 20px;
  background-color: #ff5500;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
