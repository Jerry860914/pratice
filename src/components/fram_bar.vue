<template>
  <div class="farm-bar">
                        <div class="bar_title" v-for="(item, itemid) in arr" 
                        :key="itemid" :class="{'selected': itemid == Selected}" 
                        @click="Selected = itemid;updateinfo()" ><img src="../assets/shield2.png" alt="" class = "title_icon">
                        <h3>{{item.itemname}}</h3></div>
                        
    </div>
    
</template>

<script>
import bus from '../bus'
export default {
  name: 'farm_navbar',
  components: {
    
  },

    data () {
        return{
            arr: [
                {isSelected: true, itemname:'自營商買超',url:'api/posts/D_BUY/'},
                {isSelected: false, itemname:'外資買超',url:'api/posts/F_BUY'},
                {isSelected: false, itemname:'投信買超',url:'api/posts/I_BUY'},
                {isSelected: false, itemname:'投信賣超',url:'api/posts/I_SELL'},
                {isSelected: false, itemname:'外資賣超',url:'api/posts/F_SELL'},
                {isSelected: false, itemname:'自營商賣超',url:'api/posts/D_SELL'},
             
            ],
            Selected:1
        }

    },
    methods: {
        updateinfo() {
            
            bus.emit('updateinfo',this.arr[this.Selected]);
            //console.log(this.arr[this.Selected]['url'])
            console.log(this.Selected)
        }
    },


}
</script>

<style scoped>

.farm-bar {
    border-right: 1px solid #dfdfdf;
    flex: 1 6 10%;
    display: flex;
    flex-direction: column;
    
}

.bar_title {
    position: relative;
    text-align: center;
    display: block;
    margin: 0 3px 18px 0;
    display: block;
    cursor: pointer;
    border-left: 3px solid rgb(245, 245, 245);
}

.bar_title:hover {
  color:#4CAF50;
  cursor: pointer;
}
.bar_title h3{
    margin: 0px;
    padding: 0px;
    display: block;
    font-size: 18px;
    font-weight: normal;
    line-height: 14px;
}

.bar_title.selected {
    color: rgb(1, 216, 73);
    border-color: #0386f4;
}

.bar_title img{
    display: block;
    margin: 0 auto 9px;
    text-align: center;
    
}

@media all and (max-width: 640px) {

.farm-bar {
    height: 20%;
    width: 100%;
}

}

</style>
