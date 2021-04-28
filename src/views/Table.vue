<template>
  <div class="main">
      <fram_bar></fram_bar>
      <fram></fram>

  </div>
    
</template>

<script>

import fram_bar from '@/components/fram_bar'
import fram from '@/components/fram'
export default {
  name: 'Table',
  components: {
    fram,
    fram_bar
  },

}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 0px auto;
    justify-content:center;
}
fram{
    justify-content: center;
}


</style>
