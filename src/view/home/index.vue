<template>
  <div>
    <button @click="push">go login</button>
  </div>
</template>
  
<script>

export default {
  name: "Home",
  data() {
    return {};
  },
  created() {},
  methods: {
    push(){
      try {
        this.$router.push({
        path:"/login"
      })
      } catch (error) {
        console.log(error);
      }
    
    }
  }
}
</script>
  
<style></style>
  