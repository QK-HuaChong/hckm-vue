<template>
  <div class="register">
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
              <p class="login-card-description">{{loginTitle}}</p>
              <form action="#!">
                  <div class="form-group">
                  <div class="form-group">
                    <label for="phone" class="sr-only">Name</label>
                    <input type="name" name="name" id="name" class="form-control" placeholder="账户名" @input="gainMonicker($event)">
                  </div>
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="邮箱地址" @input="gainCognominal($event)">
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="***********">
                  </div>
                  <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="注册">
                </form>
                <p class="login-card-footer-text"><router-link to="/">返回登陆</router-link></p>
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
  name: 'Register',
  data() {
      return {
          cognominal: '',
          monicker: ''
      }
  },
  props:{
      loginTitle: String,
  },
  computed:{
      fullName: function(){
          console.log('cognominal:' + this.cognominal)
          console.log('monicker:' + this.monicker)
          return this.cognominal + ' ' + this.monicker
        }
  },
  methods: {
      gainCognominal(event){
          this.cognominal = event.currentTarget.value
          
        },
      gainMonicker(event){
          this.monicker = event.currentTarget.value
      }
  }
}
</script>
<style>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/login.css";
</style>
