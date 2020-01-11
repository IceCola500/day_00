<template>
  <dl @click="fn(nm)">
      <dt><img :src="img" alt=""></dt>
      <dd>
          <p>{{nm}}</p>
          <p>主演：{{star}}</p>
          <p>{{rt}}</p>
          <div class="right">
              <button v-if="preShow" class="go">购票</button>
              <button v-else class="yu">预售</button>
          </div>
      </dd>
  </dl>
</template>

<script>
export default {
    props:["img","id","nm","sc","preShow","star","rt"],
    computed: {
          addlist(){
           return this.$store.state.list
        }
    },
    methods:{
        fn(nm){
            this.$router.push("/detail?id="+this.id)
            this.$store.commit("addlist",nm)
            console.log(this.addlist);
            console.log(nm);
            
        }
    }
}
</script>

<style scoped lang="scss">
dl{
    width: 90%;
    display: flex;
    margin: 10px;
    position: relative;
    dt{
        flex: 2;
        img{
            width: 100%;
        }
    }
    dd{
        flex:8;
        margin-left: 10px;
        p:nth-child(1){
            font-size: 20px;
            font-weight: 800;
        }
        p:nth-child(2){
            margin-top: 35px;
            font-size: 14px;
            color:#666
        }
         p:nth-child(3){
            font-size: 14px;
            color:#666
        }
    }
    .right{
        position: absolute;
        top: 30px;
        right: 0;
        button{
            width: 50px;
            height: 30px;
            border:0;
            border-radius: 5px;
        }
        .yu{
            color: rgb(119, 115, 115);
            background-color: #0ff;
        }
        .go{
            color: #fff;
            background-color: #f00;
        }
            
        }
}
</style>