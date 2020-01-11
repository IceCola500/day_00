<template>
  <div class="detail">
      <dl>
        <dt><img :src="this.list.img" alt=""></dt>
        <dd>{{this.list.nm}}</dd>
      </dl>
      <button class="back" @click="fn">返回</button>
  </div>
</template>

<script>
import axios from "axios"
import { log } from 'util';
export default {
  data(){
    return{
      list:[]
    }
  },
  mounted(){
    axios.get("/maoyan").then(res=>{
      let id=this.$route.query.id;
      this.list = res.data.filter(v=>v.id==id)[0]
      console.log(this.list);
      
    })
  },
  methods: {
    fn(){
      this.$router.back()
    }
  },
}
</script>

<style>

</style>