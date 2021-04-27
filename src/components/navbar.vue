<template>
  <div class="navbar">
                <a href="" class = "active">Home</a>
                <a href="">News</a>
                <a href="">Contact</a>
            </div>
  
</template>

<script>


export default {
  name: 'navbar',
  components: {
    
  }
}
</script>

<style>

.navbar {
    background-color: #333;
    
    font-size: 14px;
    line-height: 21px;
}
.navbar a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
.navbar a.active {
  background-color: #4CAF50;
  color: white;
}

</style>
