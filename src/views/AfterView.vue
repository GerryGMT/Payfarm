<template>
  <div class="app">
    <v-app-bar app color="#fff" flat>
      <div class="d-flex align-center">
        <v-img
          lazy-src="../assets/foot.svg"
          max-height="140"
          max-width="140"
          src="../assets/foot.svg"
        ></v-img>
      </div>

      <v-spacer />
      <p>Good afternoon, Koffi Olomide</p>
      <v-spacer />

      <router-link to="/">
        <div class="pa-4">
          <v-btn color="#53C351" height="35" dark> Log Out </v-btn>
        </div>
      </router-link>
    </v-app-bar>

    <v-toolbar dense color="#0B0636" dark>
      <v-toolbar-title class="pl-12">MY FARM ANIMALS</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-subheader
        >Balance
        <h2>k500</h2></v-subheader
      >

      <v-btn class="ma-2" outlined color="#53C351" rounded>Withdraw</v-btn>

      <v-btn class="ma-2" color="#53C351" rounded>Buy Feed</v-btn>
    </v-toolbar>

    <div class="background">
      <v-col>
        <div
          :class="{
            'card-1 mt-16 mb-5 ml-auto mr-auto': $vuetify.breakpoint.smAndDown,
            'card-1 mt-16 mb-5 ml-16': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <div class="card-2">
            <h1
              style="
                color: #231d4f;
                font-weight: 500;
                padding-top: 25px !important;
              "
              class="mt-6 ml-6"
            >
              k.500
              <span style="color: #848199; font-weight: 300; font-size: 18px"
                >/month</span
              >
            </h1>
            <h2 style="color: #231d4f; font-weight: 500" class="ml-6">Chick</h2>
            <v-divider width="250" class="ml-6" />
            <p
              style="
                color: #848199;
                font-weight: 5300;
                padding-top: 5px !important;
              "
              class="ml-6 mt-4"
            >
              Your chick is 3 months old
            </p>
            <v-img
              lazy-src="../assets/sell.svg"
              max-height="120"
              max-width="120"
              src="../assets/chick.svg"
              style="margin: auto !important"
              class="mt-16"
            ></v-img>
          </div>

          <div class="action">PROCEED TO BUY</div>
        </div>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.background {
  height: 90vh;
  background: url("../assets/Frame.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
}
.card-1 {
  height: 400px;
  width: 300px;
  background-color: #ef9956;
  -webkit-box-shadow: 0px -4px 8px #ef9956;
  -moz-box-shadow: 0px -4px 8px #ef9956;
  box-shadow: 0px -4px 8px #ef9956;
}
.card-2 {
  height: 400px;
  width: 290px;
  background-color: #fff;
  transform: translate(-20px, -50px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 2px;
}
.action {
  margin-top: -38px;
  margin-left: 30px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}
</style>
