<template>
  <div>
    <div style="margin-top: 100px">
      <strong style="color: black; font-size: 48px; margin-left: 66px"
        >Bon&nbsp;</strong
      ><strong style="color: #06C167; font-size: 48px">App</strong><br />
      <div>
        <b-row style="margin-top: 50px;">
          <b-col
            ><strong style="color: black; font-size: 30px; margin-left: -326px;"
              >Let's get started</strong
            ></b-col
          >
        </b-row>
        <b-row style="margin-top:23px; margin-left: -312px;">
          <b-col><span>Enter your phone number (required)</span></b-col>
        </b-row>
        <b-row style="margin-left:-4px; margin-top: 8px">
          <b-col>
            <b-dropdown id="areas" text="+1" class="m-md-2" style="float:left;">
              <b-dropdown-item>+961</b-dropdown-item>
              <b-dropdown-item>+33</b-dropdown-item>
              <b-dropdown-item>+7</b-dropdown-item>
            </b-dropdown>
            <b-form-input
              id="emailInput"
              size="sm"
              class="mr-sm-2"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row style="margin-left:-16px; margin-top: 23px;">
          <b-col
            ><b-button id="next" variant="success" style="width: 552px;"
              ><strong>Next</strong></b-button
            ></b-col
          >
        </b-row>
        <b-row style="margin-top:12px;">
          <b-col>
            <span
              >Already use BonApp?
              <router-link to="/SignIn"
                ><a href="/SignIn" style="color: #3E996E;"
                  >Sign in</a
                ></router-link
              ></span
            >
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn"
};
</script>

<style scoped>
#emailInput {
  width: 552px;
  margin-left: 30vw;
  height: 48px;
  font-size: 20px;
  border: 1px solid black;
  float: left;
}

.btn-success.disabled,
.btn-success:disabled {
  color: #fff;
  background-color: #c2c2c2;
  border-color: #c2c2c2;
}
</style>
