<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list><!-- dense -->
      
        <v-list-tile @click="v-on" href="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile @click="v-on" href="/my-page">
          <v-list-tile-action>
            <v-icon>sentiment_satisfied_alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My-Page</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile @click="v-on" href="/inquire">
          <v-list-tile-action>
            <v-icon>assignment_ind</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Inquire</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile @click="v-on" href="/store">
          <v-list-tile-action>
            <v-icon>swap_horiz</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Store</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="v-on" href="/usage-information">
          <v-list-tile-action>
            <v-icon>highlight</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Usage-Information</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="v-on" href="/send-feedback">
          <v-list-tile-action>
            <v-icon>create</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Send-Feedback</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="v-on" href="/web-development-course">
          <v-list-tile-action>
            <v-icon>perm_identity</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Web Development Course</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>

    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn icon large>
        <v-avatar>
          <img
            src="https://cdn.discordapp.com/attachments/449047222462447617/584982883819585548/2.png"
            alt="Logo"
          >
        </v-avatar>
      </v-btn>
        MWC
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-container grid-list-md text-xs-center>
       <v-layout row wrap>
        <v-flex>
          <v-card>
            <v-btn color="purple accent-4" href="/login">Login&nbsp;
            <v-icon>account_circle</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card>
            <v-btn color="red accent-3" href="/signup">SignUp
            <v-icon>label_important</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
        </v-layout>
      </v-container>
    </v-toolbar-items>
      
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
<!-- -->


<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <header class="card-header">
            <h3 class="card-title mt-2">Sign up</h3>
        </header>

      <article class="card-body">

      <form>
        
        <div class="form-group">
        <label>Id</label>   
          <input type="text" class="form-control form-group col-md-6" style="" placeholder="" v-model="user.id" maxlength="15">
        </div> <!-- form-group end.// -->

        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" placeholder="" v-model="user.email_address" maxlength="30">
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div> <!-- form-group end.// -->


        <div class="form-row">
          <div class="form-group col-md-6">

            <v-select 
            :items="academys"
            label="Academy를 선택해주세요"
            required v-model="academy">
            </v-select>

          </div> <!-- form-group end.// -->
        </div> <!-- form-row.// -->

        <div class="form-group">
          <label>Create password</label>
            <v-text-field type="password" v-model="user.password" maxlength="30"></v-text-field>
        </div> <!-- form-group end.// -->  

        <div class="form-groups">
          <label>Confirmation password</label>
            <v-text-field type="password" v-model="user.confirm_password" maxlength="30"></v-text-field>
        </div> <!-- form-group end.// -->  



          <div class="row justify-content-center">

              <!-- 버튼이 눌렸을때 무언가 작동을 하도록 만들자 -->
              <v-btn
                color="primary" 
                @click="process_signup" 
                
                >
                Register
              </v-btn>
          
          
          </div> <!-- form-group// -->      


          <small class="text-muted">Because we are in the process of testing, <br>we can exclude the possibility of information leakage. </small>                                          
      </form>

      </article> <!-- card-body end .// -->
      <div class="border-top card-body text-center">Have an account? <a href="/login">Log In</a></div>
      </div> <!-- card.// -->
    </div> <!-- col.//-->
  </div> <!-- row.//-->
</div>           
<!--container end.//-->
<!-- -->


  <v-snackbar v-model="snackbar">
    {{ sbMsg }}
    <v-btn color="pink" flat 
    @click="snackbar = false">
      Close
    </v-btn>
  </v-snackbar>

  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        drawer: false,

        // 변수 선언
        //test_value: 1,
        academy: 0,
        academys: [],
        user: {
          id: "",
          email_address: "",
          password: "",
          confirm_password: ""
        },
        snackbar: false,
        sbMsg: ''
      }
    },
    props: {
      source: String
    },

    // 브라우저가 열리면 자동으로 실행되는 부분 (첫 한번)
    mounted () {
        this.academys.push("C언어 학원");
        this.academys.push("JavaScript 학원");
        this.academys.push("Nodejs 학원");
        this.academys.push("JAVA 학원");
        this.academys.push("HTML/CSS 학원");
        this.academys.push("C# 학원");
        this.academys.push("DB 학원");
    },

    // 자바스크립트로 함수를 만드는 부분
    methods: {
      // 이름이 process_signup 인 함수
      process_signup() {
         //console.log(this.test_value);
         console.log(this.academy);
         console.log(this.user.email_address);
         console.log(this.user.id);
         console.log(this.user.password + "/");
         console.log(this.user.confirm_password + "/");

        if(this.user.password != this.user.confirm_password){
          this.pop("password를 확인해주세요");
        }else{
          // pop
          this.signup();
          this.pop("회원가입 양식이 전송되었습니다");
        }
      },


      // 회원가입 시그널을 전송하는 함수
      signup () {
        // 전송을 시작하는 부분
        // 주소는 백엔드의 기능을 가르킨다
        axios.post('http://localhost:3000/signup_info', {
          id : this.user.id,
          email_address : this.user.email_address,
          academy : this.academy,
          password : this.user.password,
          confirm_password : this.user.confirm_password
        });
      },

      // 팝콘
      pop (msg) {
        this.snackbar = true
        this.sbMsg = msg
      }

    }
  }
</script>

<style>
  
</style>
