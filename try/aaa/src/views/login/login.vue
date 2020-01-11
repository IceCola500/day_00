<template>
  <div class="my">
    <h1>登陆</h1>
    <ul>
      <li>账号：<input type="text" v-model="text" placeholder="请输入账号"></li>
      <li>密码：<input type="text" v-model="password" placeholder="请输入密码"></li>
      <li><button class="login" @click="login()">注册</button><button class="join">登陆</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      text:'',
      password:'',
    }
  },
  methods:{
    login(){
      this.props.push("/index")
    }
  }

}
</script>

<style scoped lang="scss">
.my{
  width: 100%;
  height: 100%;
  h1{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    background-color: rgb(236, 232, 232);
  }
  ul{
    width: 100%;
    li{
      width: 100%;
      height: 50px;
      line-height: 50px;
      margin-left: 10px;
      input{
        width: 80%;
        height: 30px;
        padding-left: 5px;
        border:1px solid #ccc;
        border-radius: 5px;
      }
      button{
        width: 100px;
        height: 35px;
        margin-left: 60px;
        background-color: #fff;
        border:1px solid blue;
        color:blue;
        border-radius: 10px;
      }
    }
  }
}
</style>
