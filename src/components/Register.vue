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
              <p class="login-card-description">注册hckm系统</p>
              <form action="#!">
                  <div class="form-group">
                  <div class="form-group">
                    <label for="phone" class="sr-only">Name</label>
                    <input type="name" name="name" id="name" class="form-control" placeholder="账户名" @change="gainName($event)">
                    <p>{{verifyName}}</p>
                  </div>
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="邮箱地址" @change="gainEmail($event)">
                    <p>{{msgEmail}}</p>
                  </div>
                  <div>
                    <label for="phone" class="sr-only">Phone</label>
                    <input type="phone" name="phone" id="phone" class="form-control" placeholder="手机号码" @change="gainPhone($event)">
                    <p>{{msgPhone}}</p>
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="填写密码" @change="gainPwd($event)">
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="确认密码" @change="gainCfPwd($event)">
                    <p>{{verifyPwd}}</p>
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
import {verifyEmail,verifyPhone} from  '../utils/verifyUtil';
export default {
  name: 'Register',
  data() {
      return {
          errMap: {
            "ERROR_EMAIL": "邮箱格式不正确",
            "ERROR_PHONE": "号码格式不正确",
          },
          name: '',
          phone: '',
          email: '',
          password: '',
          confirmPwd: '',
          verifyName: '',
          msgEmail: '',
          msgPhone: '',
          verifyPwd: '',
      }
  },
  props:{
      loginTitle: String,
  },
  computed:{
      fullName: function(){
          return this.email + ' ' + this.monicker
        }
  },
  methods: {
      gainEmail(event){
          this.email = event.currentTarget.value;
          if(!verifyEmail(event.currentTarget.value)){
            this.msgEmail = this.errMap["ERROR_EMAIL"];
          }else{
            this.msgEmail = '';
          }
        },
      gainPhone(event){
          this.phone = event.currentTarget.value;
          if(!verifyPhone(event.currentTarget.value)){
            this.msgPhone = this.errMap["ERROR_PHONE"];
          }else{
            this.msgPhone = '';
          }
      },
      gainName(event){
          this.name = event.currentTarget.value
          if(this.name == '123'){
            this.verifyName = '用户名已存在';
          }else{
            this.verifyName = '';
          }
      },
      gainPwd(event){
          this.password = event.currentTarget.value
      },
      gainCfPwd(event){
          this.confirmPwd = event.currentTarget.value
          if(this.password != this.confirmPwd){
            this.verifyPwd = '两次密码不相符';
          }else{
            this.verifyPwd = '';
          }
      }
  }
}
</script>
<style scoped>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/login.css";
</style>
