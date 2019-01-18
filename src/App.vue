<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Phrase to regexp</span>
        <span class="font-weight-light">Create regexp from phrase.</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/Fazerty/phrase-to-regexp/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Regexp/>
    </v-content>
  </v-app>
</template>

<script>
import Regexp from './components/Regexp';

export default {
  name: 'App',
  components: {
    Regexp
  },
  data() {
    return {
      //
    };
  }
};
</script>
