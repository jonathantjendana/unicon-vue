<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="indigo">
        <div class="flex-grow-1">
          <v-card-text class="py-2 white--text">
            &copy; {{ new Date().getFullYear() }} —
            <strong>NUS Entreprenuership Society</strong>
          </v-card-text>
        </div>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>