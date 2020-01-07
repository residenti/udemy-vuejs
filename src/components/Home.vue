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
import { mapGetters } from "vuex"

export default {
  // 1. vuex で定義した getters を取得する書き方.
  // computed: {
  //   doubleCount() {
  //     return this.$store.getters.doubleCount
  //   },
  //   tripleCount() {
  //     return this.$store.getters.tripleCount
  //   }
  // },
  // 2. mapGetters を用いた書き方.
  //computed: mapGetters(["doubleCount", "tripleCount"]),
  // ES6 のスプレッド演算子(...)を用いて mapGetters(Object) を copumputed オブジェクトにマージする書き方.
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"])
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
