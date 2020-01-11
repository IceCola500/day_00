<template>
  <div class="hot">
    <dldom v-for="item in list" 
    :key="item.id" 
    :img="item.img" 
    :nm="item.nm" 
    :preShow="item.preShow" 
    :sc="item.sc" 
    :id ="item.id"
    :star="item.star"
    :rt="item.rt"
    ></dldom>
  </div>
</template>

<script>
import axios from "axios"
import dldom from "../../../../components/dldom"
export default {
data(){
  return{
    list:[]
  }
},
components:{
  dldom
},
mounted(){
  axios.get("/maoyan").then(res=>{
    this.list=res.data
    // .map(item=>{
    //   return {
    //     id:item.id,
    //     img:item.img,
    //     nm:item.nm,
    //     preShow:item.preShow,
    //     sc:item.sc,
    //     wish:item.wish
    //   }
    // })
  })
}
}
</script>

<style>

</style>