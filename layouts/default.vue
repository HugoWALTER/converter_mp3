<template>
  <div>
    <Header />
    <LayoutContent>
      <nuxt />
    </LayoutContent>
  </div>
</template>
<script>
import Layout from 'ant-design-vue/lib/layout'
import Header from '@/components/Header/index.vue'

export default {
  name: 'Logo',
  components: {
    Header,
    LayoutContent: Layout.Content
  }
}
</script>
<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.ant-empty-image img {
        height: max-content;
        width: max-content;
    }
</style>
