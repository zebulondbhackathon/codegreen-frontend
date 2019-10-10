<template>
  <div class="content">
    <v-stepper v-model="e1">
      <v-stepper-header id="stepperHeader" style="font-size: 20px; color: white !important; background:#0000ff00; width: 80%; margin: auto;">
        <v-stepper-step step="1" @click="e1 = 1">
          Source
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2" @click="e1 = 2" > <!--style="background-color: #2053bb;width: 40px;height: 40px; font-size: 18px;"-->
          Process
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" @click="e1 = 3">
          Analyze
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4" @click="e1 = 4">
          Distribute
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="500px">
            <v-card-text class="center">
              <v-btn class="margin-horizontal content-button">Configure Sources</v-btn>
              <v-btn class="margin-horizontal content-button">Fetch Data</v-btn>
            </v-card-text>
            <div>
              <md-card>
                <md-card-content>
                  <configure-sources-table></configure-sources-table>
                </md-card-content>
              </md-card>
            </div>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="500px">
            <v-card class="mb-12" color="grey lighten-1" height="500px">
              <v-card-text class="center">
                <v-btn class="margin-horizontal content-button" @click="button = 'alphaDig'">Alpha-DIG</v-btn>
                <v-btn class="margin-horizontal content-button" @click="button = 'quorum'">Quorum MVA</v-btn>
                <v-btn class="margin-horizontal content-button">Other DQ</v-btn>
              </v-card-text>
              <div v-if="button === 'alphaDig'">
                <p id="alphaDig" class="typewriter">{{alphaDig}}</p>
                <md-card>
                  <md-card-content>
                    <alpha-dig-table></alpha-dig-table>
                  </md-card-content>
                </md-card>
              </div>
              <div v-if="button === 'quorum'" class="animated-component typewriter">
                <p v-for="item in quorum">{{item}}</p>
              </div>
            </v-card>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1">
            <div>
              <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                  <iframe src="/eafilters.html" frameBorder="0" scrolling="no" height="500" width="100%" style="height: 145px"></iframe>
                </md-card>
              </div>

              <md-card>
                <md-card-header data-background-color="green">
                  <h4 class="title">ESG Metrics</h4>
                </md-card-header>
                <md-card-content>
                  <ESGData-table table-header-color="green"></ESGData-table>
                </md-card-content>
              </md-card>
            </div>
          </v-card>

        </v-stepper-content>
        <v-stepper-content step="4">
          <div class="md-layout">
            <div
              class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
            >
              <md-card>
                <md-card-header data-background-color="orange">
                  <h4 class="title">Mercury</h4>
                  <!-- <p class="category">New employees on 15th September, 2016</p> -->
                </md-card-header>
                <md-card-content>
                  <v-img height="75%" width="75%" :src="mercuryImage" style="margin-left:auto; margin-right: auto;"/>
                </md-card-content>
              </md-card>
            </div>
            <div
              class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
            >
              <md-card>
                <md-card-header data-background-color="orange">
                  <h4 class="title">DIF</h4>
                  <!-- <p class="category">New employees on 15th September, 2016</p> -->
                </md-card-header>
                <md-card-content>
                  <v-img style="margin-left:auto; margin-right: auto;" height="80%" width="80%" :src="DIFImage"/>
                </md-card-content>
              </md-card>
            </div>
          </div>
        </v-stepper-content>
      </v-stepper-items>
      <!-- <v-footer>
        <v-btn class="continue-button" @click="advanceStep()">
          Continue
        </v-btn>
      </v-footer> -->
    </v-stepper>
  </div>
</template>

<style>

#stepperHeader > div.v-stepper__step.v-stepper__step--active > div {
  font-size:24px;
  font-weight:bold;
}

#stepperHeader > div:hover {
  cursor:pointer;
}

#stepperHeader > hr {
      color:#154b9c!important;
}

.theme--light.v-stepper .v-stepper__label {
    color:#154b9c!important;
}

#stepperHeader > div > span {
  background-color: #154b9c;
  font-size:18px;
}

.theme--light.v-stepper {
    background: #fff0!important;
}

.theme--light.v-card {
    background-color: #fff0!important;
    color: rgba(0,0,0,.87);
}

.v-stepper, .v-stepper__header {
    /* -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12); */
    box-shadow: none!important}


  .v-stepper__step__step {
    height: 50px !important;
    width: 50px !important;
  } 
  .animated-component {
    transition: opacity 1s ease-in-out;
    }
  .center {
    text-align: center;
  }
  .content-button {
    background-color: green !important;
    color: white !important;
  }
  .continue-button {
    background-color: #4caf50 !important;
    color: white;
  }
  .margin-horizontal {
    margin: 0 20px;
  }
  .typewriter {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      typing 3.5s steps(40, end),
      blink-caret .75s step-end infinite;
  }
  #stepperHeader {
    background: linear-gradient(60deg, #66bb6a, #43a047);
  }
  #stepperHeader > div > span {
    color: white;
  }
</style>

<script>
import { AlphaDigTable, ConfigureSourcesTable, NavTabsCard, NavTabsTable, ESGDataTable } from "@/components";

export default {
  components: {
    AlphaDigTable,
    ConfigureSourcesTable,
    NavTabsCard,
    NavTabsTable,
    ESGDataTable
  },
  data() {
    return {
      e1: 0,
      alphaDig: "Alpha-DIG analyzing data...",
      quorum: ["Quorum MVA analyzing data...", "Rules applied...8/95", "MVA processing complete!"],
      button: 'alphaDig',
      mercuryImage: require('@/assets/img/Mercury.jpg'),
      DIFImage: require('@/assets/img/DIF.jpg')
    };
  },
  methods: {
    advanceStep() {
      console.log('advanced')
      this.e1++;
      if (this.e1 > 3) {
        this.e1 = 0;
      }
    },
    typeWriter(value) {
      let speed = 50;
      let i = 0;
      if (i < this.alphaDig.length) {
        document.getElementById("alphaDig").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
      button = value;
    }
  }
};
</script>
