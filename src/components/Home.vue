<template>
  <div>
    <p>Home</p>
    <button @click="toUsers">Usersページにいく.</button>
  </div>
</template>

<script>
  export default {
    methods: {
      toUsers() {
        this.$router.push({
          name: 'user-id-profile',
          params: { id: 1 }
        })
      }
    }
  }
</script>
