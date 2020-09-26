<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevation = 0
    >
      <div class="d-flex align-center">
        <h4>Curriculum</h4>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/">Home</router-link> |
      <router-link to="/curriculum">Curriculum</router-link> |
      <router-link to="/curriculum/show">Upsert</router-link>
    </v-app-bar>

    <v-main>
      <router-view />
      <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
