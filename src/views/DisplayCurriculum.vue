<template>
  <v-row no-gutters class="home-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <v-row>
        <v-col>
          <h1 class="title">All Curriculum</h1>
          <h4>This is the description</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            velit? Laboriosam fuga ab dolorem nesciunt itaque inventore dolores,
            dolore possimus natus enim voluptatibus sequi animi tenetur odio,
            eligendi in magni.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>
              Section {{ i + 1 }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list flat subheader three-line>
                <v-subheader>Resources</v-subheader>

                <v-list-item-group v-model="settings" multiple active-class="">
                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                        <v-list-item-subtitle
                          >Notify me about updates to apps or games that I
                          downloaded</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                        <v-list-item-subtitle
                          >Auto-update apps at any time. Data charges may
                          apply</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Auto-add widgets</v-list-item-title>
                        <v-list-item-subtitle
                          >Automatically add home screen widgets when downloads
                          complete</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-list flat subheader three-line>
                <v-subheader>Projects</v-subheader>

                <v-list-item-group v-model="settings" multiple active-class="">
                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                        <v-list-item-subtitle
                          >Notify me about updates to apps or games that I
                          downloaded</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                        <v-list-item-subtitle
                          >Auto-update apps at any time. Data charges may
                          apply</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Auto-add widgets</v-list-item-title>
                        <v-list-item-subtitle
                          >Automatically add home screen widgets when downloads
                          complete</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style>
</style>
