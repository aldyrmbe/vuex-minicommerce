<template>
  <div class="home">
    <ProductList msg="Products List Title"></ProductList>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '../components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
