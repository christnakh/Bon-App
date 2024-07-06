<template>
  <div class="cart-container">
    <h2>Your Cart</h2>
    <div v-if="cartItems.length === 0">
      Your cart is empty.
    </div>
    <div v-else>
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>Price: ${{ item.price }}</p>
          <div class="edit-fields">
            <label for="ingredients">Ingredients:</label>
            <input type="text" v-model="item.ingredients" class="edit-input" />
            <br />
            <label for="removal">Removal:</label>
            <input type="text" v-model="item.removal" class="edit-input" />
          </div>
          <div class="quantity-controls">
            <button @click="decreaseQuantity(item)" class="quantity-control">
              -
            </button>
            <input
              type="number"
              v-model="item.quantity"
              min="1"
              class="quantity-input"
            />
            <button @click="increaseQuantity(item)" class="quantity-control">
              +
            </button>
          </div>
        </div>
        <div class="item-actions">
          <button @click="removeItem(item)" class="remove-button">
            Remove
          </button>
        </div>
      </div>
      <div class="total">
        <h3>Total: ${{ calculateTotalPrice }}</h3>
        <div class="checkout-buttons">
          <button @click="proceedToCheckout" class="checkout-button">
            Proceed to Checkout
          </button>
          <button @click="goBackToMenu" class="back-button">
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cartItems: [
        {
          id: 1,
          name: "Item 1",
          price: 10,
          quantity: 1,
          ingredients: "Tomato, Lettuce",
          removal: "Onion"
        },
        {
          id: 2,
          name: "Item 2",
          price: 20,
          quantity: 2,
          ingredients: "Chicken, Cheese",
          removal: "Mayonnaise"
        },
        {
          id: 3,
          name: "Item 3",
          price: 15,
          quantity: 1,
          ingredients: "Beef, Tomato, Lettuce",
          removal: "Pickles"
        }
      ]
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
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem(item) {
      const index = this.cartItems.findIndex(
        cartItem => cartItem.id === item.id
      );
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
    proceedToCheckout() {
      this.$router.push("/menu/cart/checkout");
      console.log("Proceeding to checkout");
    },
    goBackToMenu() {
      // Navigate back to the menu or perform other actions
      console.log("Going back to menu");
    }
  }
};
</script>

<style scoped>
.cart-container {
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.item-info {
  flex: 1;
}

.item-info h3 {
  margin-bottom: 5px;
  font-size: 18px;
}

.edit-fields {
  margin-bottom: 10px;
}

.edit-fields label {
  display: inline-block;
  margin-right: 5px;
  font-weight: bold;
}

.edit-input {
  width: 200px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-control {
  padding: 5px 10px;
  background-color: #ff5500;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
}

.quantity-input {
  width: 40px;
  text-align: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.item-actions {
  display: flex;
  align-items: center;
}

.remove-button {
  padding: 5px 10px;
  background-color: #666;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
}

.checkout-buttons {
  display: flex;
  align-items: center;
}

.checkout-button {
  padding: 10px 20px;
  background-color: #ff5500;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.back-button {
  padding: 10px 20px;
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
