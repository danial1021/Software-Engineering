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
              I'm a thing. But, like most politicians, he promised more than he could deliver. 
              You won't have time for sleeping, soldier, not with all the bed making you'll be doing. 
              Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! 
              You're going to do his laundry? I've got to find a way to escape.
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
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  </div>

</div>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      show1: false,
      show2: false
    }),
    props: {
      source: String
    }
  }
</script>