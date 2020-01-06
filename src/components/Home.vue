<template>
  <div>
    <p>Home</p>
    <button @click="toAbout">Aboutページにいく.</button>
  </div>
</template>

<script>
  export default {
    methods: {
      toAbout() {
        this.$router.push('about')
      }
    }
  }
</script>
