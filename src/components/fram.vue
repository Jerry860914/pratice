<template>
  <div class="fram">
    <transition @before-enter="beforeEnter" @before-leave="beforeLeave" name="slide">
    <div v-if="isload" class="loading">
      <img src="../assets/load.gif" alt="loading">
    </div>
  </transition>
  <transition name="fade" >
  
  
    <table v-show="isShow">
      
      <tr id = "headTitle"><th colspan="5 "> {{text}}<div>單位：張數 ／ 資料日期：{{date}}</div></th>
        
      </tr>
      <tr><th>名次</th><th>股票名稱</th><th>收盤價</th><th>漲跌幅</th><th>買賣超張數</th></tr>
      <tr v-for="(item, itemid) in posts" :key="itemid">
        <td >{{itemid+1}}</td>
        <td>{{item.stock_id}}</td>
        <td>{{item.close}}</td>
        <td>{{item.increase}}%</td>
        <td>{{item.spread}}</td>
        
      </tr>
      
    </table>  
    </transition>      
  </div>
</template>

<script>
//import loading from './loading.vue'
import PostService from '../PostService'
import bus from '../bus'
export default {
  name: 'fram',
  components: {
    
  }, 
  data (){
      return {
        posts:[],
        error:'',
        text:'外資買超',
        date:'',
        url:'http://54.238.185.168:8080/api/posts/F_BUY',
        //url:'http://localhost:5000/api/posts/F_BUY',
        isShow:false,
        isload:true,
      }
  },
 created() {
    PostService.getPosts(this.url).then( (e)=> {
      console.log(e.data);
      
      this.isload = false;
      
      window.setTimeout(() => {
        this.isShow = true;
      }, 1000);
      
      this.posts = e.data;
      this.date = this.posts[0]['date']
    }).catch((e) =>{
      console.log(e);
    });
    
   console.log(this.url);
    bus.on('updateinfo', (msg) =>{

        console.log(msg);
        this.url = msg['url'];
        this.text = msg['itemname'];
        this.updateinfo(this.url);
    })
    
},
  methods: {
    updateinfo(msg){
      console.log('123');
      this.posts = [];
      this.isShow = false;
      window.setTimeout(() => {
         this.isload = true;
      }, 1000);
      
      
      console.log(msg)
      PostService.getPosts(this.url).then( (e)=> {
      console.log(e.data);
      this.isload = false;
      window.setTimeout(() => {
         this.isShow = true;
      }, 1000);
      
      
      this.posts = e.data;
      this.date = this.posts[0]['date']
    }).catch((e) =>{
      console.log(e);
    });
      
    },
    beforeLeave() {
      
    },
  },


}
</script>


<style scoped>
.fram {
    background-color: rgb(255, 255, 255);
     display: flex ;
    flex: 4  1 70%;
}
table{
    width: 100%;
    align-items: center;
    border-spacing: 0;
    border: 1px solid black;
    border-collapse: collapse;
}
tr,td{
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid black;
    border-collapse: collapse;
    font-size: 20px;
}

#headTitle th{
  padding: 20px;
  font-size: 25px;
}
#headTitle div{
  font-size: 20px;
  text-align: right;
  
}
.loading {
  display: block;
  margin: 0 auto;
  text-align: center;
}
.slide-leave-active,
.slide-enter-active {
  transition: all .9s ease;
}

.slide-enter-from {
  transform: translateY(-200%);
}

.slide-leave-to {
  transform: translateY(-200%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

@media all and (max-width: 640px) {
.fram {
    width: 100%;
    height: 80%;
}

}
</style>
