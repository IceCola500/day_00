<template>
  <div class="movie">
      <h1>猫眼电影</h1>
      <div class="nav">
          <router-link to="/index/movie/now">最新</router-link>
          <router-link to="/index/movie/hot">热门</router-link>
      </div>
      <div class="main">
          <router-view></router-view>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.movie{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h1{
        width: 100%;
        height: 50px;
        text-align: center;
        color: #fff;
        background-color: #f00;
    }
    .nav{
        width: 100%;
        height: 50px;
        display: flex;
        a{
            flex: 1;
            text-decoration: none;
            text-align: center;
            line-height: 50px;
            color:black;
            font-size: 16px;
            font-weight: 800;
        }
        .router-link-active{
            color:red;
            border-bottom: 3px solid #f00;
        }
    }
    .main{
        flex:1;
        overflow: auto;
    }
    
}
</style>