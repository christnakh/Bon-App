<template>
  <div>
    <div style="margin-top: 100px">
      <strong style="color: black; font-size: 48px; margin-left: 66px"
        >Uber&nbsp;</strong
      ><strong style="color: #06C167; font-size: 48px">Eats</strong><br />
      <div>
        <b-row style="margin-top: 50px;">
          <b-col
            ><strong style="color: black; font-size: 30px; margin-left: -326px;"
              >Welcome back</strong
            ></b-col
          >
        </b-row>
        <b-row style="margin-top:23px; margin-left: -276px;">
          <b-col><span>Please enter your password to sign in.</span></b-col>
        </b-row>
        <b-row style="margin-left:7px; margin-top: 8px">
          <b-col
            ><b-form-input
              id="emailInput"
              size="sm"
              class="mr-sm-2"
              placeholder="Enter your password"
            ></b-form-input
          ></b-col>
        </b-row>
        <b-row style="margin-left:4px; margin-top: 23px;">
          <b-col
            ><b-button id="next" variant="success" style="width: 552px;"
              ><strong>Sign in</strong></b-button
            ></b-col
          >
        </b-row>
        <b-row style="margin-top:12px;">
          <b-col>
            <span
              ><router-link to="/SignIn/auth"
                ><a href="/SignIn/auth" style="color: #3E996E;"
                  >Forgot Password?</a
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
  name: "SignIn",
  data() {
    return {
      disable: true
    };
  }
};
</script>

<style scoped>
#emailInput {
  width: 552px;
  margin-left: 30vw;
  height: 48px;
  font-size: 20px;
  border: 1px solid black;
}

.btn-success.disabled,
.btn-success:disabled {
  color: #fff;
  background-color: #c2c2c2;
  border-color: #c2c2c2;
}
</style>
