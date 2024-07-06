<template>
  <div class="footer">
    <div style="float:left; width:50vw;">
      <strong style="color: white; font-size: 30px; float: left;">Bon</strong
      ><strong style="color: #06C167; font-size: 30px; float: left;"
        >App</strong
      >
      <div style="margin-top: 180px; margin-left: -426px;">
        <img src="../assets/appStore.svg" />
        <img
          src="../assets/googlePlay.png"
          style="width:138px; margin-left: 20px;"
        />
      </div>
    </div>
    <hr style="background-color: white; position: relative; top: 260px" />
    <div style="color: white; margin-top: -46px">
      <b-row>
        <b-col><strong>About Bon App</strong></b-col>
        <b-col><strong>Get Help</strong></b-col>
      </b-row>
      <b-row style="margin-top: 22px">
        <b-col>Read our blog</b-col>
        <b-col>Read FAQs</b-col>
      </b-row>
      <b-row style="margin-top: 22px">
        <b-col>Buy gift cards</b-col>
        <b-col>View all cities</b-col>
      </b-row>
      <b-row style="margin-top: 22px">
        <b-col>Create a business account</b-col>
        <b-col>View all countries</b-col>
      </b-row>
      <b-row style="margin-top: 22px">
        <b-col>Add your resturant</b-col>
        <b-col>Resturants near me</b-col>
      </b-row>
      <b-row style="margin-top: 22px">
        <b-col>Sign up to deliver</b-col>
        <b-col>English</b-col>
      </b-row>
    </div>

    <div style="position: absolute; left: 46px; margin-top:76px;">
      <img src="../assets/fb.png" class="icons" />
      <img src="../assets/tw.png" class="icons" />
      <img src="../assets/ig.png" class="icons" />
      <router-link
        to="/commercial/login"
        class="link"
        style="margin-left: 587px"
        >Commercial Service
      </router-link>
      <router-link to="/thirdparty/login" class="link"
        >Third-Party Developer</router-link
      >
      <router-link to="/menu/cart/checkout/ordertracking" class="link"
        >Order Tracking</router-link
      >
      <router-link to="/tech/login" class="link">Technical Service</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  height: 509px;
  width: 100vw;
  background-color: black;
  padding: 66px;
}

.icons {
  width: 26px;
  margin-left: 18px;
}

.link {
  color: white;
  margin-left: 46px;
}
</style>
