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
              >Welcome back</strong
            ></b-col
          >
        </b-row>
        <b-row style="margin-top:23px; margin-left: -189px;">
          <b-col
            ><span
              >Sign in with your email address or mobile number.</span
            ></b-col
          >
        </b-row>
        <b-row style="margin-left:7px; margin-top: 8px">
          <b-col
            ><b-form-input
              id="emailInput"
              size="sm"
              class="mr-sm-2"
              placeholder="Email or mobile number"
            ></b-form-input
          ></b-col>
        </b-row>
        <b-row style="margin-left:4px; margin-top: 23px;">
          <b-col>
            <router-link to="SignIn/auth">
              <b-button
                href="/SignIn/auth"
                id="next"
                variant="success"
                style="width: 552px;"
                ><strong>Next</strong></b-button
              >
            </router-link>
          </b-col>
        </b-row>
        <b-row style="margin-top:12px;">
          <b-col>
            <span
              >New to BonApp?
              <router-link to="/SignUp"
                ><a href="/SignUp" style="color: #3E996E;"
                  >Create an account</a
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
