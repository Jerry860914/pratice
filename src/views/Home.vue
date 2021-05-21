<template>
  <div class="home">
    <h1>今日台股加權指數  {{point}}</h1>
    <h3>現在時間 {{time}}</h3>
    
    
  </div>
</template>

<script>
export default {
  
  data() {
    
    return{
      point:0,
      date:1, 
      time:'',
      timer:null,
    }
  },
  methods :{
    updatetime() {
    var today = new Date();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    
    this.time = this.check(hh)+":"+ this.check(mm) +":"+ this.check(ss);
    
    },
    check(i) {
      if(i < 10){
        var v = "0" + i;
        console.log(v);
        return  v;
      }else{
        return i;
      }
    }
    
  },
  created() {
    this.updatetime()
   
  },
  mounted(){
    this.timer = setInterval(() => {
        this.updatetime() 
        }, 1000)
  }
  
}
</script>


<style>
  .home{

    font-family: 'Share Tech Mono', monospace;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
    color: #ffffff;


    height: 550px;
    flex-direction: column;
    display: flex;
    justify-content:center;
    align-items: center;


    background: #0f3854;
    background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
    background-size: 100%;

  }
  html,body {
    height: 100%;
}
</style>
