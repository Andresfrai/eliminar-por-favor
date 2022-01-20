<template>
  <v-app>
    <v-toolbar class="warning" app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>VUETIFY</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="success">ingreso</v-btn>
      <v-btn class="error">salir</v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-layout mt-4 column align-center>
        <v-felx>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-avatar>
        </v-felx>
        <v-flex>
          <p>Juanito Perez</p>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: true
  }),
};
</script>
