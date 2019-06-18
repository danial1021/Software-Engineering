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

    <!-- timeline -->
    <v-timeline>
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-3"
          >
            mdi-magnify
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">왜 개발했을까?</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs10>
              학원 선생님 혹은 학교 방과후 선생님을 하시는 분들은 자신의 스케줄에 따라서 움직이고 생활하는데,
              불가피하게 시간을 옮기거나 조절해야하는 상황에서 각각의 아이의 부모님들에게 전화하여 아이의 시간을
              묻고 조절해야하는 불편함이 있다. 이에 아이나 아이의 부모님이 자신의 스케줄을 입력할 수 있는 
              웹페이지를 만듦으로써 without calling 스케줄을 조절할 수 있도록 도울 수 있는 웹을 만들었습니다.
            </v-flex>
            <v-flex xs2>
              <v-icon size="64">mdi-calendar-text</v-icon>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="display-1 mr-3 white--text font-weight-light">계획서 작성하기</h2>
          <v-icon
            dark
            size="42"
          >mdi-home-outline</v-icon>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs8>
              각 사용자가 이용할 수 있도록 전체적인 디자인 틀을 생각해보고,
              기본적인 웹사이트의 기능, 그리고 사용자가 사용자의 스케줄을 
              저장할 수 있는 기능과 그것을 선생님(관리자)가 조회할 수 있도록 
              하는 기능을 생각하여 계획한다. 언어는 node.js, javascript을 
              이용하고 또한, frontend를 vue, vuetify을 이용하여 디자인하도록 계획했습니다.
              (vue는 node.js의 express 프레임워크 위에서 동작합니다.)
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon
            class="mr-3"
            dark
            size="42"
          >
            mdi-email-outline
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">디자인 및 frontend 만들기</h2>
        </v-card-title>
        <v-container>
          <v-layout wrap>
            <v-flex>
              전체적인 틀을 vuetify의 테마을 이용하여 구현합니다. \
              내가 필요한 메뉴로 리뉴얼 한 후 각각의 페이지을 기능에 맞게 frontend을 구현합니다. 
              이런식으로 각각의 페이지를 구성합니다.
            </v-flex>
            <v-flex>
              전체 웹페이지의 frontend가 완성되면, 여러 효과를 통하여 웹페이지를 좀 더 멋지게 바꿔줍니다.
              또한, margin을 이용하여 배열에 신경쓰고, 기능 설명에 대한 설명을 기술합니다!
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="display-1 mr-3 white--text font-weight-light">backhend 만들기</h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex xs2>
              <v-icon size="64">mdi-server-network</v-icon>
            </v-flex>
            <v-flex xs10>
              axios를 이용하여 mysql(DB)와 연동하여 회원가입 처리나 로그인을 가능하게 했다. 
              이러한 기능에도 각 각 되게 많은 조건과 처리들이 존재하여서 처음해보는 백엔드로써
              노력했지만 실패한 것이 많다.
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon
            class="mr-3"
            dark
            size="42"
          >
            mdi-phone-in-talk
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">유지보수 및 추가 개선하기(testing)</h2>
        </v-card-title>
        <v-container>
          <v-layout>
            <v-flex>
              현재의 기능을 제대로 구현하고 추가적으로 feedback을 할 수 있는 페이지를 구현해 놓음으로써
              추가적으로 개선해 나갈 것입니다. 또한 프로젝트가 커진다면 라즈베리 등을 통한
              리눅스 서버를 돌린다던지 도메인 구매 등등 여러 가지 부가적인 요인들을 추가할 것입니다.
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>

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
      snackbar: false,
      sbMsg: ''
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