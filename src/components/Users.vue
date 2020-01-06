<template>
  <div>
    <h2>Users</h2>
    <p>
    router link ではコンポーネントが再利用されるので、起動しないライフサイクルフックがあることに注意。<br>
    watch プロパティで $route を監視するのが良さそう。変更前後の $route の値も取得できる。
    </p>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <p>id: {{ id }}</p>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザーのプロフィール</router-link>
    <router-link :to="'/users/' + (Number(id) + 1) + '/posts'">次のユーザーの投稿</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],

  watch: {
    $route(oldVal, newVal) {
      console.log("oldVal", oldVal)
      console.log("newVal", newVal)
    }
  },

  beforeCreate() {
    console.log("beforeCreate!! in users")
  },
  created() {
    console.log("created!! in users")
  },
  beforeMount() {
    console.log("beforeMount!! in users")
  },
  mounted() {
    console.log("mounted!! in users")
  },
  beforeUpdate() {
    console.log("beforeUpdate!! in users")
  },
  updated() {
    console.log("updated!! in users")
  },
  beforeDestroy() {
    console.log("beforeDestroy!! in users")
  },
  destroyed() {
    console.log("destroyed!! in users")
  },

  activated() {
    console.log("activated!! in users")
  },
  deactivated() {
    console.log("deactivated!! in users")
  }
}
</script>
