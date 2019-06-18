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



  <div class="row">

    <div class="col" style="margin-top:30px">
      <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">My-Page</div>
            <span class="grey--text">Revised information</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show1 = !show1">
            <v-icon>{{ show1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show1">
              my_page에서는 자신이 store page에서 저장한 데이터를 기반으로 달력을 볼 수 있습니다.(구현 실패 ...)
              달력은 type 값에 따라서 day, week, month 등으로 바뀌면서 동작하고 전체적인 달력의 색깔을 dark 를
              체크함으로써 어둡게 하실 수 있습니다. 일정에 대한 색깔도 여러 가지로 지정 할 수 있으며, 일정 구간을 
              정하여 구성할 수도 있습니다.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
    </div>

  <div class="col" style="margin-top:30px">
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Inquire</div>
            <span class="grey--text">Inquire user's schedule</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show1 = !show1">
            <v-icon>{{ show1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show1">
            inquire page는 store 페이지에서 저장한 user 들의 여러 가지 정보들을 관리자(선생님)이 조회하여 
            자신의 스케줄과 맞춰 불필요한 학부모님들과의 전화 상담을 통한 스케줄 조정을 피할 수 있습니다.
            추가 버튼과 삭제 버튼으로 여러 명의 학생을 추가하고 삭제 할 수 있습니다. 필요를 위해서
            reset 버튼 또한 있습니다.(계획을 제대로 못짜는 바람에 ...)
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  </div>

  <div class="col" style="margin-top:30px">
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Store</div>
            <span class="grey--text">Save the schedule</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show1 = !show1">
            <v-icon>{{ show1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show1">
            store page에서는 start date와 end date를 클릭하여 달력으로 날짜를 정하고,
            일반적으로 학원 시간이 월수금, 화목 , 요일 별로 되어있으므로 이러한 날짜를
            정할 수 있도록 지정할 수 있습니다. 또한 이러한 날짜에 무엇을 하는지 간략하게 
            기술하고 password 인증을 통해서 submit 하게 됩니다.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  </div>

</div>

<!------------------------------------------------------------------------------------------------------------------------------------------------------------------------>

<div class="row">

    <div class="col" style="margin-top:30px">
      <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Usage-Information</div>
            <span class="grey--text">How to use webpage</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show2 = !show2">
            <v-icon>{{ show2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show2">
            usage_information page는 웹페이지의 전체적인 각 각의 페이지들의 기능 및 설명을 기술한 
            곳 입니다. 이 곳에서는 페이지의 사용법이나 기능들을 알아볼 수 있고, 페이지의 간단한 
            사진을 볼 수 있습니다. 
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
    </div>

  <div class="col" style="margin-top:30px">
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Send-Feedback-Think</div>
            <span class="grey--text">For improving website</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show2 = !show2">
            <v-icon>{{ show2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show2">
            send_feedback page는 말 그래도 사용자들의 추가 요구 사항이나 뭔가 새로 추가되거나 
            있었으면 좋겠는 여러 가지 기능이나 새로운 디자인들을 자신의 요구에 따라서 문제에
            대해서 기술하여 제목과 내용을 작성하여 전송할 수 있습니다.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  </div>

  <div class="col" style="margin-top:30px">
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Development-Process</div>
            <span class="grey--text">Who create this website</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show2 = !show2">
            <v-icon>{{ show2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show2">
            development-process page는 이 페이지를 만든 개발자가 이 페이지를 만듦면서 어떻게
            만들었는지 무슨 생각으로 만들었는지에 대해서 나와있습니다. 또한 로드맵 형식을 사용하여 
            순차적으로 어려움이나 구현하려고 했던 부분들을 알 수 있게 하는 페이지 입니다.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</div>

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
  export default {
    data: () => ({
      drawer: null,
      show1: false,
      show2: false,
      snackbar: false,
      sbMsg: '',
    }),
    props: {
      source: String
    },

    methods : {
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

      movePage(pos)
      {
        this.$router.push(pos);
      },

      // 팝콘
      pop (msg) {
        this.snackbar = true
        this.sbMsg = msg
      }
    }
  }
</script>