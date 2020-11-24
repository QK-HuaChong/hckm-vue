<template>
  <div class="login">
   <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="../assets/images/login.jpg" alt="login" class="login-card-img">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <img src="../assets/images/logo.svg" alt="logo" class="logo">
              </div>
              <p class="login-card-description">登录hckm系统{{$store.state.name}}</p>
              <form action="#!">
                  <div class="form-group">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name="email" id="email" v-model="email" class="form-control" placeholder="邮箱地址" @change="gainEmail()">
                  </div>
                  <div class="form-group">
                    <label for="phone" class="sr-only">Phone</label>
                    <input type="phone" name="phone" id="phone" v-model="phone" class="form-control" placeholder="手机号码" @change="gainPhone($event)">
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="***********">
                  </div>
                  <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="登录" @click="loginAction()">
                </form>
                <a href="#!" class="forgot-password-link">忘记密码?</a>
                <p class="login-card-footer-text">没有账户? <router-link to="/register">点击注册</router-link></p>
                <nav class="login-card-footer-nav">
                  <a href="#!">使用条款、</a>
                  <a href="#!">隐私权政策</a>
                </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </div>
</template>


<script>
export default {
  name: 'Login',
  data() {
      return {
          email: '',
          phone: '',
      }
  },
  props:{
      loginTitle: String, 
  },
  computed:{
      fullName: function(){
          return this.email + ' ' + this.phone;
        }
  },
  methods: {
      gainEmail(){
          console.log(this.email);
        },
      gainPhone(event){
          this.phone = event.currentTarget.value
      },
      loginAction(){
          console.log("Login action")
      }
  }
}
</script>
<style sc>
@import "../assets/css/login.css";
</style>
 