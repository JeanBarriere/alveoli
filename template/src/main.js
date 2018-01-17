{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from '@/App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from '@/router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
import store from '@/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import i18n from '@/translation'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuetify from 'vuetify'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Feather from '~/Feather.js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import('vuetify/dist/vuetify.min.css'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Vuetify){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Feather){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  store,
  i18n,
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
