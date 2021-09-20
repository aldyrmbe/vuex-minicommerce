<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="products-wrapper">
      <router-link name="product-name" :to='`/product/${prod.id}`' class="product-block" v-for="(prod, idx) in products" :key="idx">
        <div class="product-image">
          <img :src="prod.image">
        </div>
        <div class="product-info">
          <h4>{{ prod.title }}</h4>
          <span>{{ prod.price }}</span>
        </div>
      </router-link>

      <div class="product-block">
        <div class="product-image">
          <img src="https://via.placeholder.com/200">
        </div>
        <div class="product-info">
          <h4>Product title</h4>
          <span>Rp.100.000</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'

export default {
  name: 'ProductList',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['products']),
  },
  created() {
    this.getProducts()
  },
  methods: {
    ...mapActions([
      'getProducts'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/_variables.scss';

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

// layout
.products-wrapper {
  display: flex;
  margin: 2em;
  padding: 1em;
  width: 100%;
  flex-wrap: wrap;
  
  a {
    color: $blue;
    text-decoration: none;
  }
  .product-block {
    padding: 1em;
  }
}

</style>
