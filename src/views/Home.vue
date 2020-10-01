<template>
  <v-row no-gutters class="home-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <v-row justify="space-between">
        <h1 class="title">All Curricula</h1>
        <v-btn>Create New</v-btn>
      </v-row>
      <v-card outlined>
        <v-card-title class="headline">
          My Curriculum #1
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          voluptates odit tempora dignissimos, ut tempore eveniet repellendus
          voluptate earum ea ab odio error, veniam magnam eligendi deserunt sit
          sapiente autem?
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang='scss' scoped>
// .home-page-home-header {
//   display: flex;
// }
</style>
