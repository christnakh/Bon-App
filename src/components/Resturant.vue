<template>
  <div class="section">
    <b-card
      :img-src="require(`../assets/${icons}.jpeg`)"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 23rem;"
      img-height="240px"
      class="mb-2"
    >
      <b-card-text>
        <h5 style="float: left;">{{ brand }}</h5>
        <br />
        <span style="float: left;"
          >$0.99 Delivery Fee &nbsp;•&nbsp; {{ deliveryTime }} Min &nbsp;•&nbsp;
          $</span
        ><br />
        <div class="divider"></div>
        <span style="float: left">{{ category }}</span>
        <div class="ratings">
          <strong style="font-family: avenir;">{{ this.ratings }}</strong>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "resturant",
  props: {
    brand: String,
    category: String,
    deliveryFee: String,
    deliveryTime: String,
    ratings: String,
    icons: String
  }
};
</script>

<style scoped>
.section {
  margin-left: 23px;
  color: black;
}
.card {
  border: none;
}
.divider {
  background-color: #eeeeee;
  width: 23rem;
  height: 1px;
  margin-left: -18px;
  margin-top: 16px;
  margin-bottom: 8px;
}
.ratings {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #eeeeee;
  margin-top: -76px;
  margin-left: 308px;
  text-align: center;
  padding-top: 6px;
}
</style>
