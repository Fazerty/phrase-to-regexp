<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Phrase to regexp</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/Fazerty/phrase-to-regexp/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <phrase-to-regexp/>
    </v-content>
  </v-app>
</template>

<script>
import PhraseToRegexp from './components/PhraseToRegexp';

export default {
  name: 'App',
  components: {
    PhraseToRegexp
  },
  data() {
    return {
      //
    };
  }
};
</script>
