<template>
  <div>
    <h2>Users</h2>
    <p>
    router link ではコンポーネントが再利用されるので、起動しないライフサイクルフックがあることに注意。<br>
    watch プロパティで $route を監視するのが良さそう。変更前後の $route の値も取得できる。
    </p>
    <router-link to="/users/1" class="link">ユーザー1</router-link>
    <router-link to="/users/2" class="link">ユーザー2</router-link>
    <p>id: {{ id }}</p>
    <router-link
      :to="'/users/' + (Number(id) + 1) + '/posts'"
      class="link"
    >次のユーザーの投稿</router-link>
    <router-link
      :to="{ name: 'user-id-profile', params: { id: Number(id) + 1 }, query: { lang: 'ja' }, hash: '#passing-data' }"
      class="link"
    >次のユーザーのプロフィール</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],

  watch: {
    $route(oldVal, newVal) {
      console.log("[Users.vue] oldVal", oldVal)
      console.log("[Users.vue] newVal", newVal)
    }
  },

  beforeRouteEnter(to, from, next) {
    console.log("[Users.vue] beforeRouteEnter")
    // vm インスタンスが生成される前に実行されるため this が使えないことに注意.
    // ただし次のように書くことで非同期処理的に vm を参照することができる.
    next(vm => {
      console.log("[Users.vue] beforeRouteEnter > vm.id", vm.id)
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log("[Users.vue] beforeRouteUpdate")
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log("[Users.vue] beforeRouteLeave")
    const isLeave = window.confirm("本当にこのページを離れますか?")
    next(isLeave)
  },

  beforeCreate() {
    console.log("[Users.vue] beforeCreate!! in users")
  },
  created() {
    console.log("[Users.vue] created!! in users")
  },
  beforeMount() {
    console.log("[Users.vue] beforeMount!! in users")
  },
  mounted() {
    console.log("[Users.vue] mounted!! in users")
  },
  beforeUpdate() {
    console.log("[Users.vue] beforeUpdate!! in users")
  },
  updated() {
    console.log("[Users.vue] updated!! in users")
  },
  beforeDestroy() {
    console.log("[Users.vue] beforeDestroy!! in users")
  },
  destroyed() {
    console.log("[Users.vue] destroyed!! in users")
  },

  activated() {
    console.log("[Users.vue] activated!! in users")
  },
  deactivated() {
    console.log("[Users.vue] deactivated!! in users")
  }
}
</script>
<style scoped>
.link {
  margin-right: 10px;
}
</style>
