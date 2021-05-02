<template>
  <div class="news">
    <h1>行情隨風飄 錢在燒股再飆</h1>
    <input type="text" v-model="message" class = "input">
    
    <div><h2>{{message}}  相關新聞</h2></div>
    <section class="news_list">
      <div class="news_item" v-for ="(item , itemid) in arr" :key ="itemid">
        
        <a href="" class="news_link">
          <time>{{item.date}}</time>
          <div class="news_title">{{item.title}}</div>
        </a>
        

      </div>


    </section>

  </div>
</template>


<script>
export default {
  data (){
    return {
      message : "2303",
      arr : [{title:"this is  a pen" , date:"2020"},
             {title:"this is  b pen" , date:"2020"},
             {title:"this is  c pen" , date:"2020"},
             {title:"this is  d pen" , date:"2020"},
             
             ]
    }

  }

}
</script>

<style>
.input {
  border-radius: 30px;
  width: 450px;
  line-height: 180%;
  font-size: 1em;
  outline :none;
}
.news_list{
  display: flex;
  flex-direction: column;
  width:80%;
}
.news_item{
  
  border-top:5px black solid;
}

</style>