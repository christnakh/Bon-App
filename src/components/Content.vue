<template>
  <div>
    <div style="background-color:#FFF2D9; width:100vw; height: 415px">
      <img
        src="../assets/snack2.svg"
        style="height: 415px;left: 0px; position: absolute"
      />
      <img
        src="../assets/snack.svg"
        style="height: 415px; right: 0px; position: absolute"
      />
      <div style="padding-top: 16vh">
        <h1 style="color: black">Your favorite food, delivered with BonApp</h1>
        <div
          style="display: flex; align-items: center; margin-bottom: 100px; width:500px; margin: auto;"
        >
          <b-form-input
            id="emailInput"
            size="sm"
            class="mr-sm-2"
            placeholder="Enter a restaurant name"
            style="flex: 1; width: auto; margin-right: 10px"
          ></b-form-input>
          <b-button id="findFood" size="sm" class="my-2 my-sm-0" type="submit"
            ><strong style="font-size:16px; height: 20px;"
              >Find Restaurant</strong
            ></b-button
          >
        </div>
      </div>
    </div>

    <Section title="New on Bon App" />
    <hr class="divider" />
    <Section title="Food Near Me" />
    <hr class="divider" />
    <Cities />
    <Section title="Breakfast and Brunch Delivery in paris" />
    <OptionsPanel />
    <hr class="divider" />
    <Section title="Chinese Delivery in paris" />
    <hr class="divider" />
    <AllResturants />
    <hr class="divider" />
    <SubSection title="Countries with Uber App" />
  </div>
</template>

<script>
import Section from "./Section";
import SubSection from "./SubSection";
import Cities from "./CitySubSection";
import OptionsPanel from "./OptionsPanel";
import AllResturants from "./allResturants";

export default {
  name: "content",
  components: {
    Section,
    SubSection,
    Cities,
    OptionsPanel,
    AllResturants
  }
};
</script>

<style scoped>
#findFood {
  background-color: black;
  color: white;
  width: 116px;
  height: 66px;
  border: none;
  vertical-align: middle;
}

#emailInput {
  width: 120px;
  height: 54px;
  font-size: 20px;
  display: inline-block;
  vertical-align: middle;
}

.divider {
  width: 80vw;
  margin-left: 98px;
}
</style>
