<template>
  <div>
    <h2>Home</h2>
    <button @click="toUsers">Usersページにいく.</button>
    <p>
    Vuex で管理されているデータ<br>
    count * 2 = {{ doubleCount }}<br>
    count * 3 = {{ tripleCount }}
    </p>
    <p>v-model を Vuex で使う.</p>
    <!--
      v-model を Vuex で使う方法その1
      :value と @input に分解する.
    <input
      type="text"
      :value="message"
      @input="updateMessage"
    >
    -->
    <!--
      v-model を Vuex で使う方法その2
      setter を用いる.
    -->
    <input
      type="text"
      v-model="message"
    >
    <p> {{ message }} </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  // 1. vuex で定義した getters を取得する書き方.
  // computed: {
  //   doubleCount() {
  //     return this.$store.getters["message/doubleCount"]
  //   },
  //   tripleCount() {
  //     return this.$store.getters["message/tripleCount"]
  //   }
  // },
  // 2. mapGetters を用いた書き方.
  //computed: mapGetters("count", ["doubleCount", "tripleCount"]),
  // ES6 のスプレッド演算子(...)を用いて mapGetters(Object) を copumputed オブジェクトにマージする書き方.
  computed: {
    ...mapGetters("count", ["doubleCount", "tripleCount"]),
    // message() {
    //   return this.$store.getters["message/message"]
    // }
    message: {
      get() {
        return this.$store.getters["message/message"]
      },
      set(value) {
        this.$store.dispatch("message/updateMessage", value)
      }
    }
  },

  methods: {
    // updateMessage(event) {
    //   this.$store.dispatch("updateMessage", event.target.value)
    // },
    toUsers() {
      this.$router.push({
        name: 'user-id-profile',
        params: { id: 1 }
      })
    }
  }
}
</script>
