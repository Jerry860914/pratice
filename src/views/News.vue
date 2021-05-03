<template>
  <div class="news">
    <h1>行情隨風飄 錢在燒股再飆</h1>
    <input type="text" v-model="params.data_id" class = "input" placeholder="輸入代碼" @keyup.enter="getnews()">
    <button v-on:click="getnews()">搜尋</button>
    
    <div><h2>{{params.data_id}}  相關新聞</h2></div>
    <section class="news_list">
      <div class="news_item" v-for ="(item , itemid) in arr" :key ="itemid">
        
       
        <a :href="item.link" class="news_link"  target="_blank">
          <div class="time">{{item.date}} </div>
          <div class="title"><h3>{{item.title}}</h3></div> 
          <div class="source"><h4>來源:{{item.source}}</h4></div> 
        </a>
      
      </div>


    </section>

  </div>
</template>


<script>
import PostService from '../PostService'
export default {
  data (){
    return {
      message : "",
      arr : [],
      url : "https://api.finmindtrade.com/api/v4/data",
      params:{dataset: "TaiwanStockNews",
              data_id:"",
              start_date: "2021-01-01",
              end_date: "2021-04-03",
              token: "", }
    }
    

  },
  methods:{
      getnews (){
        PostService.getNews(this.url,this.params).then( (e)=> {
          console.log(e.data);
          this.arr = e.data['data'].reverse();
          console.log(this.arr);
          if(this.arr == 0){
            this.arr = [{title:"無相關新聞",source:"無"}];
          }
        }).catch((e) =>{
          console.log(e);
        });  
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
  background-color: #98f57c;
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

a {
    text-decoration:none;
}
</style>