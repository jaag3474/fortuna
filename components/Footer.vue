<template>
  
    <v-footer dark padless icon>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <div class="mx-2">
              <v-icon class="el-icon-caret-bottom" size="24px">{{ icons.mdiFacebook }}</v-icon>
            </div>
            <v-icon color="teal darken-2" size="54px">{{ icons.mdiTwitter }}</v-icon>
            <v-icon color="purple darken-2" size="24px">fab fa-facebook</v-icon>pLAYED
            <v-icon color="orange darken-2" size="24px">{{ icon[12] }}</v-icon>
            <v-icon color="blue-grey darken-2" medium>{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    
 
</template>

<script>
import {
  mdiFacebook,
  mdiTwitter,
  mdiGooglePlus,
  mdiLinkedin,
  mdiInstagram
} from "@mdi/js";
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ]
    };
  }
};
</script>

<style>
</style>