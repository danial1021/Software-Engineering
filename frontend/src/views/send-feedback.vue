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

    <v-layout justify-center style="margin-top:30px">
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>

          <!-- <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Full Name"
            placeholder="OOO 또는 OOO의 어머니,아버지 ..."
            required
          ></v-text-field>

            <br> -->

          <!-- <v-text-field
            ref="academy"
            v-model="academy"
            label="Academy-name"
            placeholder="OOO학원, OOO방과후 ..."
          ></v-text-field> -->
          
           <!-- <div class="form-row">
            <div class="form-group col-md-6">

              <v-select 
              :items="academys"
              label="Academy를 선택해주세요"
              required v-model="academy">
              </v-select>

            </div> 
          </div>  -->

            <br>

          <v-text-field            
            v-model="user_require.problem"
            label="About_problem"
            maxlength="100"
            required
            placeholder="기능, 디자인, OO버튼, 추가 기능 개선 ..."
          ></v-text-field>

            <br>

          <v-text-field
            v-model="user_require.email_address"
            label="Email_address"
            maxlength="30"
            required
            placeholder="xxx@xxx.xxx"
          ></v-text-field>

          <!-- <v-text-field
            ref="email_address"
            v-model="email_address"
            :rules="[() => !!email_number || 'This field is required']"
            label="email_address"
            maxlength="30"
            required
            placeholder="xxx@xxx.xxx"
          ></v-text-field> -->

            <br>

        <v-text-field
            ref="title"
            v-model="user_require.title"
            label="제목을 입력하세요"
            single-line
            full-width
            maxlength="30"
            hide-details
            required
         ></v-text-field>

        
        <hr class="hr1">

        <v-textarea
            v-model="user_require.context"
            placeholder="Message about your opinion"
            counter
            maxlength="500"
            full-width
            required
        ></v-textarea>

        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat href="/send-feedback">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn 
            color="primary"
            flat
            @click="move"
          >Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

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
        drawer: null,

        // 변수 선언
        user_require: {
          problem: "",
          email_address: "",
          title: "",
          context: ""  
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
      // 이름이 move 인 함수
        move() {
          console.log(this.user_require.problem);
          console.log(this.user_require.email_address);
          console.log(this.user_require.title);
          console.log(this.user_require.context);

        
          // pop
          // 모든 값이 있냐/없냐
          if(this.user_require.problem != ""
            && this.user_require.email_address != "" 
            && this.user_require.title != "" 
            && this.user_require.context != ""){

              this.go();
              this.pop("Feedback 해주셔서 감사합니다^^");
            }else{
              this.pop("내용을 더 채워주세요");
            }
        },
      


      // Feedback 시그널을 전송하는 함수
      go () {
        // 전송을 시작하는 부분
        // 주소는 백엔드의 기능을 가르킨다
        axios.post('http://localhost:3000/feedback', {
          problem : this.user_require.problem,
          email_address : this.user_require.email_address,
          title : this.user_require.title,
          context : this.user_require.context
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
    .hr1{
        border: 0;
        height: 10px;
        background: #7B68EE;
    }
</style>
