# alveoli

> :page_facing_up: Alveoli - Blur &amp; Material Vue Admin Template based on [PWA](https://github.com/vuejs-templates/pwa) template

## Documentation

- This template builds on top of the PWA template, based on the main webpack template, so please refer to the [webpack template docs](http://vuejs-templates.github.io/webpack).

- Check out the [official Vue.js guide](http://vuejs.org/guide/) for general information about Vue that is not specific to this template.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use [yarn](https://yarnpkg.com) for a more efficient dependency tree.**

```bash
$ npm install -g vue-cli
$ vue init JeanBarriere/alveoli my-project
$ cd my-project
$ yarn
$ yarn dev
```

> :warning: **The `master` branch is not yet considered stable and can contain bugs or not build at all, so use at your own risk.**

If port `8080` is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `yarn dev` will fail.

## What's Included

* All the PWA template features
* The Alveoli theme based on [Vuetify](https://vuetifyjs.com/)
  - Material based theme
  - Blur and single-line icons guideline
  - [Feather](https://github.com/feathericons/feather) icon pack with insider plugin (usage: `<f-icon>menu</f-icon>`)
* [Vue i18n](https://github.com/kazupon/vue-i18n) pre-configured with **en-gb** and fr-fr by default
* [Vuex](https://github.com/vuejs/vuex) with [persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) on top, built with files as modules
* Webpack aliases to match a reactive architecture:
  - Type `%` to reach `src/components/pages` (e.g : `%/PageName`) (for pages components)
  - Type `$` to reach `src/components/templates` (e.g : `$/TemplateName`) (for generic components)
  - Type `#` to reach `src/components/utils` (e.g : `#/UtilName`) (for SDK or partial components)
  - Type `~` to reach `src/services` (e.g : `?/ServiceName`) (for services such as an API or a HTTP manager)
  - `@` is still the alias to reach the `src` folder

## Contributing

This project is a modified copy of the [`pwa`](https://github.com/vuejs-templates/pwa) template.
