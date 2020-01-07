<template>
  <div>
    <h2>Home</h2>
    <button @click="toUsers">Usersページにいく.</button>
    <p>Vuex で管理されているデータ(count): {{ count }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.count
      }
    },

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
