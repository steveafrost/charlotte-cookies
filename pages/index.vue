<template>
  <div class="container">
    <div>
      <h1 class="title">
        Girl Scout Cookies
      </h1>
      <h2 class="subtitle">
        Purchase cookies from your favorite Troop 76853 Girl Scout
      </h2>
      <the-form />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TheForm from '@/components/the-form'

export default {
  components: {
    'the-form': TheForm
  },
  computed: {
    ...mapState({
      products: state => state.products
    })
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    ...mapActions({
      getProducts: 'content/getProducts'
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
}

.title {
  color: #00AE58;
  display: block;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 65px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.1;
  margin-bottom: 20px;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  margin-bottom: 45px;
}

.links {
  padding-top: 15px;
}
</style>
