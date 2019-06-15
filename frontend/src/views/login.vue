<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list><!-- dense -->

        <v-list-tile @click="movePage('/')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile @click="movePage('/my-page')">
          <v-list-tile-action>
            <v-icon>sentiment_satisfied_alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My-Page</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile @click="movePage('/inquire')">
          <v-list-tile-action>
            <v-icon>assignment_ind</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Inquire</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile @click="movePage('/store')">
          <v-list-tile-action>
            <v-icon>swap_horiz</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Store</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="movePage('/usage-information')">
          <v-list-tile-action>
            <v-icon>highlight</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Usage-Information</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="movePage('/send-feedback')">
          <v-list-tile-action>
            <v-icon>create</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Send-Feedback</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="movePage('/web-development-course')">
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

        <v-flex v-show="!this.$store.state.login">
          <v-card>
            <v-btn color="purple accent-4" href="/login">Login &nbsp;
            <v-icon>account_circle</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
        <v-flex v-show="!this.$store.state.login">
          <v-card>
            <v-btn color="red accent-3" href="/signup">SignUp
            <v-icon>label_important</v-icon>
            </v-btn>
          </v-card>
        </v-flex>

        <v-flex v-show="this.$store.state.login" @click="free">
          <v-card>
            <v-btn color="purple accent-4" href="/">Logout
            <v-icon>exit_to_app</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
        <v-flex v-show="this.$store.state.login">
          <v-card>
            <v-btn color="red accent-3" href="/signup">Signup
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

<!-- login_form 시작 -->
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <header class="card-header">
            <h3 class="card-title mt-2">Login</h3>
        </header>

      <article class="card-body">

        <div class="form-row">

          <div class="col form-group">
            <label>Id </label>
              <input type="text" class="form-control" placeholder="" maxlength="15" v-model="user.id">
          </div> <!-- form-group end.// -->
        </div> <!-- form-row end.// -->

        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" placeholder="" maxlength="30" v-model="user.email_address">
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div> <!-- form-group end.// -->

        <div class="form-group">
          <label>Password</label>
            <input class="form-control" type="password" maxlength="30" v-model="user.password">
        </div> <!-- form-group end.// -->

          <div class="form-group">
              <button class="btn btn-primary btn-block" @click="process_login"> Submit  </button>
          </div> <!-- form-group// -->

      </article> <!-- card-body end .// -->
      <div class="border-top card-body text-center">You don't have an account? <a href="/signup">SignUp</a></div>
      </div> <!-- card.// -->
    </div> <!-- col.//-->
  </div> <!-- row.//-->
</div>
<!--container end.//-->

  <!-- login_form 끝 -->


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
        user: {
          id: "",
          email_address: "",
          password: "",
        },
        snackbar: false,
        sbMsg: ''
      }
    },
    props: {
      source: String
    },


    // 자바스크립트로 함수를 만드는 부분
    methods: {
      // 이름이 process_signup 인 함수
      process_login() {
          //console.log(this.test_value);
          console.log(this.user.id);
          console.log(this.user.email_address);
          console.log(this.user.password + "/");


          this.login_check();
      },

      // 회원가입 시그널을 전송하는 함수
      login_check () {
        // 전송을 시작하는 부분
        // 주소는 백엔드의 기능을 가르킨다
        axios.post('http://localhost:3000/login', {
          id : this.user.id,
          email_address : this.user.email_address,
          password : this.user.password
        }).then((r)=>
        {
          console.log(r.data);
          switch(r.data.id)
          {
            case 0:
              this.pop("아이디 틀림"); // 0
              break;
            case 1:
              this.pop("이메일 틀림"); // 1
              break;
            case 2:
              this.pop("비밀번호 틀림"); // 2
              break;
            case 3:
              this.pop("로그인 성공");

              this.$store.state.login = true;
              this.$store.state.token = r.data.token;

              var decoded = jwt.decode(token);
              this.$store.state.admin = decoded.payload.admin;
              break;
          }
        });
      },

      free () {
        console.log(this.$store.state.login);
        console.log(this.$store.state.token);

        this.pop("로그아웃 성공");

        this.$store.state.login = false;
        this.$store.state.token = "";

        console.log("반환 후");
        console.log(this.$store.state.login);
        console.log(this.$store.state.token);
      },

      // 팝콘
      pop (msg) {
        this.snackbar = true
        this.sbMsg = msg
      },

      movePage(pos)
      {
        this.$router.push(pos);
      }

    }
  }
</script>

