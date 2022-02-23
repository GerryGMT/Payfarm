<template>
  <div class="app">
    <v-app-bar app color="#fff" flat>
      <div class="d-flex align-center pa-6">
        <v-img
          lazy-src="../assets/foot.svg"
          max-height="140"
          max-width="140"
          src="../assets/foot.svg"
        ></v-img>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/signin">
        <div class="pa-4">
          <v-btn color="#53C351" height="35"> Login </v-btn>
        </div>
      </router-link>
    </v-app-bar>

    <div class="signin">
      <v-layout column>
        <v-flex>
          <div class="d-flex justify-center">
            <v-card class="form">
              <v-img
                lazy-src="../assets/foot.svg"
                src="../assets/head.svg"
              ></v-img>
              <div class="form-1">
                <v-img
                  lazy-src="../assets/foot.svg"
                  src="../assets/avr.svg"
                ></v-img>
              </div>

              <div>
                <form class="ml-8 mr-8">
                  <h4>Short Code</h4>
                  <v-text-field label="1234" required outlined></v-text-field>
                  <h4>Password</h4>
                  <v-text-field
                    label="********"
                    required
                    outlined
                  ></v-text-field>
                  <v-checkbox label="Remember me?" required></v-checkbox>

                  <v-btn class="mb-12" color="#556EE6" dark width="100%">
                    Activate Account
                  </v-btn>
                </form>
              </div>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.signin {
  height: 90vh;
  background: url("../assets/Frame.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
}
.form {
  height: auto;
  width: auto;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  margin: 1rem;
  border-radius: 6px;
}
.form-1 {
  transform: translate(0px, -30px);
}
</style>
