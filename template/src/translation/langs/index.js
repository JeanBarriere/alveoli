/**
 * The file enables `@/translation/index.js` to import all i18n languages
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('.', true, /\.json$/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const modules = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

files.keys().forEach(key => {
  if (modules[key.replace(/(\.\/|\.json)/g, '').replace(/(\.\/|\/(.*))/g, '')] === undefined) {
    modules[key.replace(/(\.\/|\.json)/g, '').replace(/(\.\/|\/(.*))/g, '')] = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  modules[key.replace(/(\.\/|\.json)/g, '').replace(/(\.\/|\/(.*))/g, '')][key.replace(/(\.\/|\.json)/g, '').split('/')[1]] = files(key){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
})

export default modules{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
