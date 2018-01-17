import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/**
 * for lazy-load and shorter-file purpose
 */
const load = function (name) {
  return (resolve) => require(['%/' + name], resolve){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: load('Hello'){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
