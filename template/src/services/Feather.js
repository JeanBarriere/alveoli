import feather from 'feather-icons'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const ret = function () {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

ret.install = function (Vue) {
  Vue.feather = feather{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.component('f-icon', {
    template: `<i v-if="$slots.default" class="icon" v-html="$feather.icons[$slots.default[0].text].toSvg()"></i>`{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Object.defineProperty(Vue.prototype, '$feather', {
    get: function get () {
      return feather{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default ret{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
