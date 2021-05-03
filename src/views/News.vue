<template>
  <div class="news">
    <h1>行情隨風飄 錢在燒股再飆</h1>
    <input type="text" v-model="message" class = "input" placeholder="輸入代碼">
    <button v-on:click="123">搜尋</button>
    
    <div><h2>{{message}}  相關新聞</h2></div>
    <section class="news_list">
      <div class="news_item" v-for ="(item , itemid) in arr" :key ="itemid">
        
       
        <a href="" class="news_link">
          <div class="time">{{item.date}} </div>
          <div class="title"><h3>{{item.title}}</h3></div> 
          <div class="source"><h3>{{item.source}}</h3></div> 
        </a>
      
      </div>


    </section>

  </div>
</template>


<script>
export default {
  data (){
    return {
      message : "",
      arr : [{title:"this is  a pen" , date:"2020", source:"123"},
             {title:"this is  b pen" , date:"2020", source:"123"},
             {title:"this is  c pen" , date:"2020", source:"123"},
             {title:"this is  d pen" , date:"2020", source:"123"},
             
             ]
    }

  }

}
</script>

<style>
.input {
  border-radius: 30px;
  width: 40%;
  line-height: 180%;
  font-size: 1em;
  outline :none;
}
.news_list{
  display: flex;
  flex-direction: column;
  width:50%;
  margin: 0px auto;
  justify-content:center;
  
}
.news_item{
  
  border-top: 1px solid #dfdfdf;
}

.news_item:hover{
  background-color: #f57c7c;
}
.news_link>.time{
  
}
.news_link>title{
  
}
button{
  margin: 10px;
  height: 36px;
  width: 50px;
}


</style>