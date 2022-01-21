<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat explicabo deleniti natus, optio est quod accusantium a in velit quo, 
            aperiam ipsum iusto aliquam molestiae expedita dolore eveniet inventore laboriosam.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info">Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg">
            <v-container>
              <v-layout>
                <v-flex>
                  <span class="headline white--text">Lorem, ipsum dolor.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat explicabo deleniti natus, optio est quod accusantium a in velit quo, 
            aperiam ipsum iusto aliquam molestiae expedita dolore eveniet inventore laboriosam.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info">Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
  }
</script>
