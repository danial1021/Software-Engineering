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

        <v-list-tile @click="v-on" href="/about-web-developer">
          <v-list-tile-action>
            <v-icon>perm_identity</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About-Web-Developer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>

    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn icon large>
        <v-avatar size="60px">
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
            <v-btn color="purple accent-4" href="/login">Login
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
    <!---->
   <div class="row" style="padding-right:15px">

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
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
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