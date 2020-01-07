<template>
  <div>
    <h2>Home</h2>
    <button @click="toUsers">Usersページにいく.</button>
    <p>
    Vuex で管理されているデータ<br>
    count * 2 = {{ doubleCount }}<br>
    count * 3 = {{ tripleCount }}
    </p>
  </div>
</template>

<script>
  export default {
    computed: {
      doubleCount() {
        return this.$store.getters.doubleCount
      },
      tripleCount() {
        return this.$store.getters.tripleCount
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
