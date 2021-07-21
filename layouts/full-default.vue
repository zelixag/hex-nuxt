<script>
  import _default from '@/components/public/default'

  export default {
    name: 'error',
    data() {
      return {
        timer: null,
        title: 'EliteX | ',
      }
    },
    components: {
      Default: _default
    },
    head() {
      return {
        title: this.title + this.$t('c2c.ILEXTitle'),
        meta: [{name: 'viewport', content: 'width=1240'}]
      }
    }
  }

</script>
<template>
  <div id="app" class="full" :class="{'day':$store.state.hex_client_background.active=='day'}" ref="app">
    <nuxt/>
    <Default></Default>
  </div>
</template>
