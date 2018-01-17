const state = {
  alveoli: {
    version: '1.0'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const getters = {
  getAlveoliVersion (state) {
    return state.alveoli.version{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const mutations = {
  setAlveoliVersion (state, payload) {
    if (payload) {
      state.alveoli.version = payload.version ? payload.version : '1.0'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const actions = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  state,
  getters,
  mutations,
  actions{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
