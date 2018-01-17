import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueI18n from 'vue-i18n'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import langs from './langs'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueI18n){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new VueI18n({
  locale: 'gb',
  messages: langs{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
