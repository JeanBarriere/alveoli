<template>
  <div class="hello">
    <h1>\{{ $t('alveoli.name') }}</h1>
    <h2>\{{ $t('alveoli.slogan') }}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
</style>
