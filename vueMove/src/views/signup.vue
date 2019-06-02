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
        <v-avatar size="60px" tile>
          <img
            src="https://media.discordapp.net/attachments/449047222462447617/582457973658615808/1.png?width=1218&height=670"
            alt="Vuetify"
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
        <div class="form-row">

          <div class="col form-group">
            <label>Child name </label>   
              <input type="text" class="form-control" placeholder="">
          </div> <!-- form-group end.// -->

          <div class="col form-group">
            <label>Child's parent name</label>
              <input type="text" class="form-control" placeholder=" ">
          </div> <!-- form-group end.// -->

        </div> <!-- form-row end.// -->


        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" placeholder="">
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div> <!-- form-group end.// -->


        <div class="form-row">
          <div class="form-group col-md-4">
            <label>Academy</label>
            <select id="inputState" class="form-control">
                <option> Choose...</option>
                <option>A학원</option>
                <option>B학원</option>
                <option selected="">C학원</option>
                <option>A방과후</option>
                <option>B방과후</option>
            </select>
          </div> <!-- form-group end.// -->
        </div> <!-- form-row.// -->

        <div class="form-group">
          <label>Create password</label>
            <input class="form-control" type="password">
        </div> <!-- form-group end.// -->  

        <div class="form-group">
          <label>Confirmation password</label>
            <input class="form-control" type="password">
        </div> <!-- form-group end.// -->  

          <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block" > Register  </button>
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

