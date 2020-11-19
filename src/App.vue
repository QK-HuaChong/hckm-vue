<template>
  <router-view></router-view>
</template>

<script> 

export default {
  name: 'App',
  methods:{
    toIndexs() {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>

</style>
