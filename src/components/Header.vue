<template>
  <b-navbar
    id="nav-header"
    toggleable="lg"
    style="height: 11vh; background-color: white"
    :sticky="true"
  >
    <router-link to="/"
      ><b-navbar-brand href="/"
        ><strong style="color: black; font-size: 30px; margin-left: 66px"
          >Bon</strong
        ><strong style="color: #06C167; font-size: 30px"
          >App</strong
        ></b-navbar-brand
      ></router-link
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-navbar-nav class="ml-auto">
      <router-link to="/SignIn">
        <b-nav-item href="/SignIn"
          ><Strong style="color: black; font-size: 18px; margin-right: 66px"
            >Sign In</Strong
          ></b-nav-item
        >
      </router-link>
      <router-link to="/profile">
        <b-nav-item href="/profile"
          ><Strong style="color: black; font-size: 18px; margin-right: 66px"
            >User info</Strong
          ></b-nav-item
        >
      </router-link>
      <router-link to="/menu/cart">
        <b-nav-item href="/menu/cart"
          ><Strong style="color: black; font-size: 18px; margin-right: 66px"
            >Cart</Strong
          ></b-nav-item
        >
      </router-link>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
