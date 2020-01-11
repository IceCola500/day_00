<template>
  <div class="index">
      <div class="main">
          <router-view></router-view>
      </div>
      <div class="footer">
          <router-link to="/index/movie">电影</router-link>
          <router-link to="/index/ciname">影院</router-link>
          <router-link to="/index/my">我的</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
 .index{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    /* .head{
        width: 100%;
        height: 50px;
        background: #e54847;
        line-height:50px;
        text-align:center;
        color: #fff;
    } */
    .main{
         width: 100%;
         flex: 1;
         overflow: auto;
        /* //height: 100%; */
    }
    .footer{
        width: 100%;
        height: 50px;
        border-top:1px solid #ccc;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    a{
        flex: 1;
        text-decoration: none;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        color: black;
        //display: inline-block;
    }
    .router-link-active{
        color: white;
        background-color: #f00;
    }
</style>