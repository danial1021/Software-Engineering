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
   
<!-- 달력 시작-->
  <v-layout wrap style="margin-top:50px;">
    
    <v-flex
      sm12
      lg3
      class="pa-3 mb-3 feature-pane"
      
    >
    <!-- 왼쪽의 달력 조절하는 방향 버튼 -->
      <v-btn
        fab
        outline
        small
        absolute
        left
        color="primary"
        @click="$refs.calendar.prev()"
      >
        <v-icon dark>
          keyboard_arrow_left
        </v-icon>
      </v-btn>
      <v-btn
        fab
        outline
        small
        absolute
        right
        color="primary"
        @click="$refs.calendar.next()"
      >
        <v-icon
          dark
        >
          keyboard_arrow_right
        </v-icon>
      </v-btn>
      <br><br><br>

      <v-select
        v-model="type"
        :items="typeOptions"
        label="Type"
      ></v-select>

      <v-checkbox
        v-model="dark"
        label="Dark"
      ></v-checkbox>

      <v-select
        v-model="color"
        :items="colorOptions"
        label="Color"
      ></v-select>
      <v-menu
        ref="startMenu"
        v-model="startMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="start"
        transition="scale-transition"
        min-width="290px"
        lazy
        offset-y
        full-width
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="start"
            label="Start Date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="start"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            @click="startMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            flat
            color="primary"
            @click="$refs.startMenu.save(start)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="endMenu"
        v-model="endMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="end"
        transition="scale-transition"
        min-width="290px"
        lazy
        offset-y
        full-width
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="end"
            label="End Date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="end"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            @click="endMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            flat
            color="primary"
            @click="$refs.endMenu.save(end)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="nowMenu"
        v-model="nowMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="now"
        transition="scale-transition"
        min-width="290px"
        lazy
        offset-y
        full-width
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="now"
            label="Today"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="now"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            @click="nowMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            flat
            color="primary"
            @click="$refs.nowMenu.save(now)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-select
        v-model="weekdays"
        :items="weekdaysOptions"
        label="Weekdays"
      ></v-select>
      <v-select
        v-if="hasIntervals"
        v-model="intervals"
        :items="intervalsOptions"
        label="Intervals"
      ></v-select>
      <v-select
        v-if="hasIntervals"
        v-model="styleInterval"
        :items="styleIntervalOptions"
        label="Styling"
      ></v-select>
    </v-flex>
    <v-flex
      sm12
      lg9
      class="pl-3"
    >
      <v-sheet height="500">
        <v-calendar
          ref="calendar"
          v-model="start"
          :type="type"
          :start="start"
          :end="end"
          :min-weeks="minWeeks"
          :max-days="maxDays"
          :now="now"
          :dark="dark"
          :weekdays="weekdays"
          :first-interval="intervals.first"
          :interval-minutes="intervals.minutes"
          :interval-count="intervals.count"
          :interval-height="intervals.height"
          :interval-style="intervalStyle"
          :show-interval-label="showIntervalLabel"
          :color="color"
        >
          <template v-slot:day="day">
            <v-sheet
              v-if="day.day % 3 === 0"
              :color="color"
              class="white--text pa-1"
            >
              day slot {{ day.date }}
            </v-sheet>
          </template>
          <template v-slot:header="day">
            <div
              v-if="day.weekday % 2"
              class="day-header"
            >
              day-header slot {{ day.date }}
            </div>
          </template>
          <template v-slot:day-body="day">
            <div
              v-if="day.weekday % 3 === 2"
              class="day-body"
            >
              day-body slot {{ day.date }}
            </div>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>
  </v-layout>
  <!-- 달력 끝 -->

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
  const weekdaysDefault = [0, 1, 2, 3, 4, 5, 6]

  const intervalsDefault = {
    first: 0,
    minutes: 60,
    count: 24,
    height: 40
  }

  const stylings = {
    default (interval) {
      return undefined
    },
    workday (interval) {
      const inactive = interval.weekday === 0 ||
        interval.weekday === 6 ||
        interval.hour < 9 ||
        interval.hour >= 17
      const startOfHour = interval.minute === 0
      const dark = this.dark
      const mid = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'

      return {
        backgroundColor: inactive ? (dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined,
        borderTop: startOfHour ? undefined : '1px dashed ' + mid
      }
    },
    past (interval) {
      return {
        backgroundColor: interval.past ? (this.dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined
      }
    }
  }


  export default {
    data: () => ({
      drawer: null,
      props: {
        source: String
      },  
      snackbar: false,
      sbMsg: '',
      dark: false,
      startMenu: false,
      start: '2019-01-12',
      endMenu: false,
      end: '2019-01-27',
      nowMenu: false,
      minWeeks: 1,
      now: null,
      type: 'month',
      typeOptions: [
        { text: 'Day', value: 'day' },
        { text: 'Week', value: 'week' },
        { text: 'Month', value: 'month' },
      ],
      weekdays: weekdaysDefault,
      weekdaysOptions: [
        { text: 'Sunday - Saturday', value: weekdaysDefault },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] }
      ],
      intervals: intervalsDefault,
      intervalsOptions: [
        { text: 'Default', value: intervalsDefault },
        { text: 'Workday', value: { first: 16, minutes: 30, count: 20, height: 40 } }
      ],
      maxDays: 7,
      maxDaysOptions: [
        { text: '7 days', value: 7 },
        { text: '5 days', value: 5 },
        { text: '4 days', value: 4 },
        { text: '3 days', value: 3 }
      ],
      styleInterval: 'default',
      styleIntervalOptions: [
        { text: 'Default', value: 'default' },
        { text: 'Workday', value: 'workday' },
        { text: 'Past', value: 'past' }
      ],
      color: 'primary',
      colorOptions: [
        { text: 'Primary', value: 'primary' },
        { text: 'Secondary', value: 'secondary' },
        { text: 'Accent', value: 'accent' },
        { text: 'Red', value: 'red' },
        { text: 'Pink', value: 'pink' },
        { text: 'Purple', value: 'purple' },
        { text: 'Deep Purple', value: 'deep-purple' },
        { text: 'Indigo', value: 'indigo' },
        { text: 'Blue', value: 'blue' },
        { text: 'Light Blue', value: 'light-blue' },
        { text: 'Cyan', value: 'cyan' },
        { text: 'Teal', value: 'teal' },
        { text: 'Green', value: 'green' },
        { text: 'Light Green', value: 'light-green' },
        { text: 'Lime', value: 'lime' },
        { text: 'Yellow', value: 'yellow' },
        { text: 'Amber', value: 'amber' },
        { text: 'Orange', value: 'orange' },
        { text: 'Deep Orange', value: 'deep-orange' },
        { text: 'Brown', value: 'brown' },
        { text: 'Blue Gray', value: 'blue-gray' },
        { text: 'Gray', value: 'gray' },
        { text: 'Black', value: 'black' }
      ]
    }),
    computed: {
      intervalStyle () {
        return stylings[ this.styleInterval ].bind(this)
      },
      hasIntervals () {
        return this.type in {
          'week': 1, 'day': 1,
        }
      },  
    },
    methods: {
      showIntervalLabel (interval) {
        return interval.minute === 0
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

<style scoped>

  #inspire {
    overflow: auto;
  }

  .feature-pane {
    position: relative;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }

  .day-header {
    margin: 0px 2px 2px 2px;
    padding: 2px 6px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    border-radius: 2px;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .day-body {
    position: absolute;
    top: 400px;
    height: 36px;
    margin: 2px;
    padding: 2px 6px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    border-radius: 2px;
    left: 0;
    right: 0;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .day {
    position: relative;
    height: 24px;
    margin: 0px;
    padding: 0px 6px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    border-radius: 2px;
    left: 0;
    right: 0;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

</style>

