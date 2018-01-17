<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="../../assets/v.png" alt="Vue" class="mb-5">
        <blockquote>
          &#8220;\{{ $t('alveoli.slogan') }}&#8221;
          <footer>
            <small>
              <em>&mdash;Version \{{ getAlveoliVersion }}</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'hello',
  computed: mapGetters(['getAlveoliVersion']){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
