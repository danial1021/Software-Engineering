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
    <!---->
    <div v-if="admin">
    <div class="row" style="padding-right:15px" >

        <div class="col">
        <v-container grid-list-md>
        <v-layout>
          <div>
            <v-btn
              color="secondary"
            >
              INCLUDE
              <v-icon right dark>favorite</v-icon>
            </v-btn>

            <v-btn
              color="blue-grey"
              class="white--text"
            >
              DELETE
              <v-icon right dark>favorite_border</v-icon>
            </v-btn>
          </div> 

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  

          <v-btn round color="primary" dark href="/inquire">RESET
            <v-icon right drak>touch_app</v-icon>
          </v-btn>

          </v-layout>
          <hr>
        </v-container>
        </div>
    </div>
      
  <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
      
    <div class="row">
      <div class="container row mx-auto">
        <div class="row col-md">
          <div class = "left" style="margin-bottom:20px">
            <div>
              <div class="card">
                <header class="card-header">
                    <h3 class="card-title mt-2">User1</h3>
                </header>

              <article class="card-body">

              <form>
                <div class="form-row">
                  <div class="col form-group">
                    <label>Id</label>   
                      <input type="text" class="form-control" placeholder="" maxlength="15">
                  </div> 
                </div> <!-- form-row end.// -->

                <div class="form-group">
                  <label>Email address</label>
                  <input type="email" class="form-control" placeholder="" maxlength="30">
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div> 

                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" type="password" maxlength="15">
                </div>      
              </form>

              </article>
              </div> 
            </div>
          </div>

          <div class = "left">
            <div>
              <div class="card">
                <header class="card-header">
                    <h3 class="card-title mt-2">User2</h3>
                </header>

              <article class="card-body">

              <form>
                <div class="form-row">
                  <div class="col form-group">
                    <label>Id</label>   
                      <input type="text" class="form-control" placeholder="" maxlength="15">
                  </div> 
                </div> <!-- form-row end.// -->

                <div class="form-group">
                  <label>Email address</label>
                  <input type="email" class="form-control" placeholder="" maxlength="30">
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div> 

                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" type="password" maxlength="15">
                </div>       
              </form>

              </article>
              </div> 
            </div>
          </div>
        </div>

        <div class = "col-md long right">
          <div>
            <div class="card">
              <header class="card-header">
                  <h3 class="card-title mt-2">Administrator</h3>
              </header>

            <article class="card-body">

            <form>
              <div class="form-row">
                <div class="col form-group">
                  <label>Id </label>   
                    <input type="text" class="form-control" placeholder="" maxlength="15">
                </div> 
              </div> <!-- form-row end.// -->

              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" placeholder="" maxlength="30">
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div> 

              <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" maxlength="15">
              </div> 

              <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" maxlength="15">
              </div>    

              <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" maxlength="15">
              </div>    

              <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" maxlength="15">
              </div>    

              <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" maxlength="15">
              </div>    

              <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" maxlength="15">
              </div>    
              
                  
            </form>

            </article>
            </div> 
          </div>
        </div> 
      </div>           
      </div>
    </div>
    <div v-else @click="back"></div>

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
      admin : false
    }),
    props: {
      source: String
    },

    mounted () {
      this.onstart()
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

      back() {
        router.go(-1);
      },

      onstart () {
        axios.post('http://localhost:3000/token_check', {
          token: this.$store.state.token
        }).then((r)=>{
          
          switch(r.data)
          {
            case "false":
              this.pop("inquire 페이지 접근 불가");
              this.admin = false;
              break;
            case "true":
              this.pop("inquire 페이지 접근 가능");       
              this.admin = true;
              break;
          }
        });
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


<style>
  hr{
    height: 6px;
    width: 100%;
    background-color: #BBDEFB;
  }
  .long{
    height: 100%;
  }
  .left{
    padding-right: 45px;
    width: 501px;
  }
  .right{
    padding-left: 45px; 
  }
  .test{
    margin-right: 40px;
  }
  .article.card-body{
    height: 100%;
  }
</style>
  
<!-- overflow: ture;-->