<template>
  <div>
    <p>About</p>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("[About.vue] beforeCreate!!")
  },
  created() {
    console.log("[About.vue] created!!")
  },
  beforeMount() {
    console.log("[About.vue] beforeMount!!")
  },
  mounted() {
    console.log("[About.vue] mounted!!")
  },
  beforeUpdate() {
    console.log("[About.vue] beforeUpdate!!")
  },
  updated() {
    console.log("[About.vue] updated!!")
  },
  beforeDestroy() {
    console.log("[About.vue] beforeDestroy!!")
  },
  destroyed() {
    console.log("[About.vue] destroyed!!")
  },

  activated() {
    console.log("[About.vue] activated!!")
  },
  deactivated() {
    console.log("[About.vue] deactivated!!")
  }
}
</script>
