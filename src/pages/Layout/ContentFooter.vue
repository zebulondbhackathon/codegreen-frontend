<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul>
          <!-- <li>
            <a href="https://www.creative-tim.com">Creative Tim</a>
          </li> -->
          <li>
            <a href="http://www.db.com">
              About Caelimeterics
            </a>
          </li>
          <!-- <li>
            <a href="http://blog.creative-tim.com">
              Blog
            </a>
          </li> -->
          <!-- <li>
            <a href="https://www.creative-tim.com/license">
              Licenses
            </a>
          </li> -->
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a href="https://www.creative-tim.com/?ref=mdf-vuejs" target="_blank"
          >Creative Code Green</a
        >, made with <i class="fa fa-heart heart"></i> for a better web
      </div>
      <div></div>
      <div id="ticker">
      <div id="logo"> <img style="margin-top:-30px;" src="gticker.png" alt="Italian Trulli"></div>
      <!-- <button onclick="document.getElementById('ticker p').style.animation-play-state = 'paused'">PAUSE</button>-->
      <p>
        <span @click="showTickerInfo('MSCI', 'Following unsatisfactory regulatory comments on Apple’s disclosure standards relating to Carbon emissions, MSCI announced today that Apple’s rating is revised downwards from AAA (Leader) to  A (Average)')"><span class="names"> 
          [ MSCI ] </span>
          ESG Ratings Change for AAPL: <span style="color:#EE6352;">AAA to AA</span> - - - </span>
        <span class="names" @click="showTickerInfo('Bloomberg', 'Exxon today announced that it has successfully settled claims from the oil spill off Ireland, LSE reports')"> 
          [ Bloomberg ] </span> 
          Exxon XOM.N settles oil spill claims. Stock rises - - - 
        <span class="names" @click="showTickerInfo('Sustainalytics', 'B2Gold Corp. TSX:BTO will replace New Gold Inc. TSX:NGD on the Jantzi Social Index effective as of the opening of markets on Monday, September 23, 2019')"> 
          [ Sustainalytics ] </span>
          B2Gold Corp. Added to Jantzi Social Index. 
      </p>
<!--
Reuters,Rio Tinto to shutdown mine in Queensland,The worlds <span>     </span>largest miner Rio Tino bowed to pressure from Banks and activists to shut down its legacy mine responsible for most of its pollution,
Bloomberg,Contribution of renewables increases to 11% in the US,Renewable energy sources contributed 11% of US energy needs a new high,
Reuters,Google parent Alphabet Inc fails on GHG emisssion targets,Alphabet Inc missed its Green House Gas emission targets which could attract aire of regulators in Europe</p>-->
             </div>

             
    </div>
    <v-dialog v-model="showDialog" persistent max-width="290" :class="showDialog ? 'dialog' : ''">
      <v-card style="background-color: #e2e2e2">
        <v-card-title class="headline" style="background-color: #01579B; color: white;">{{dialogTitle}}</v-card-title>
        <v-card-text style="margin-top: 5px; color: black;">{{dialogText}}</v-card-text>
        <v-card-actions style="background-color: #01579B">
          <div class="flex-grow-1" style="margin-left: auto !important"></div>
          <v-btn class="close-button" text @click="showDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      showDialog: false,
      dialogTitle: '',
      dialogText: '',
      tickerInfo: [
        {
          id: 0,
          tickerName: 'MSCI',
          tickerUpdate: 'ESG Ratings Change for AAPL: <span style="color:#EE6352;">AAA to AA</span> - - - ',
          tickerAlert: 'Following unsatisfactory regulatory comments on Apple’s disclosure standards relating to Carbon emissions, MSCI announced today that Apple’s rating is revised downwards from AAA (Leader) to  A (Average)'
        },
        {
          id: 1,
          tickerName: 'Bloomberg',
          tickerUpdate: 'xxon XOM.N settles oil spill claims. Stock rises - - - ',
          tickerAlert: 'Exxon today announced that it has successfully settled claims from the oil spill off Ireland, LSE reports'
        },
        {
          id: 2,
          tickerName: 'Sustainalytics',
          tickerUpdate: 'B2Gold Corp. Added to Jantzi Social Index.',
          tickerAlert: 'B2Gold Corp. TSX:BTO will replace New Gold Inc. TSX:NGD on the Jantzi Social Index effective as of the opening of markets on Monday, September 23, 2019'
        }
      ]
    }
  },
  methods: {
    showTickerInfo(title, text) {
      console.log('clicked')
      this.showDialog = true;
      this.dialogTitle = title;
      this.dialogText = text;
      // this.dialogText = ;
    }
  }
};


</script>
<style>
.close-button {
  background-color: #80D8FF !important;
  /* color: white !important; */
}
.dialog {
  /* background-color: orange; */
  display: unset !important;
}

.names {
  color:#CBE896;
}

.names:hover {
  cursor:pointer;
}

#logo {
  background-color: #033103;
  float:left;
  z-index:10;
  width:120px;
  height:38px;
  padding-top:8px;
  padding-bottom:5px;
  margin-top:-38px;
  margin-left:20px;
  border-radius:5px;
}

#ticker {
  position: fixed;
  z-index:1;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:#3e7740 ;
  color: white;
  height:60px;
  padding-top:15px;
  margin-top:-20px;
  /*overflow:hidden;*/

}

#ticker button {
  float:right;
  margin-top: -40px;
  background-color:rgb(60, 84, 50);
  border-radius: 5px;
  z-index:-1;
  position: relative;
  padding:5px;
}

#ticker p {
 font-size: 30px;
 color: white;
  white-space: nowrap;
 overflow:hidden;
 padding-top:5px;
 padding-bottom:5px;

 height:40px;
 position: absolute;
 margin: 0;
 text-align: right;
 



 /* Apply animation to this element */	
 -moz-animation: example1 100s linear infinite;
 -webkit-animation: example1 100s linear infinite;
 animation: example1 100s linear infinite; 
}
/* Move it (define the animation) */
@-moz-keyframes example1 {
 0%   { -moz-transform: translateX(100%); }
 100% { -moz-transform: translateX(-100%); }
}
@-webkit-keyframes example1 {
 0%   { -webkit-transform: translateX(100%); }
 100% { -webkit-transform: translateX(-100%); }
}
@keyframes example1 {
 0%   { 
 -moz-transform: translateX(100%); /* Firefox bug fix */
 -webkit-transform: translateX(100%); /* Firefox bug fix */
 transform: translateX(100%); 		
 }
 100% { 
 -moz-transform: translateX(-100%); /* Firefox bug fix */
 -webkit-transform: translateX(-100%); /* Firefox bug fix */
 transform: translateX(-100%); 
 }
}

* { box-sizing: border-box; }
$duration: 30s;

@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}


* { box-sizing: border-box; }
$duration: 30s;

@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.ticker-wrap {
  
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 4rem;
  background-color: rgba(#000, 0.9); 
  padding-left: 100%;
  box-sizing: content-box;

  .ticker {

    display: inline-block;
    height: 4rem;
    line-height: 4rem;  
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;

    -webkit-animation-iteration-count: infinite; 
            animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
   -webkit-animation-name: ticker;
           animation-name: ticker;
    -webkit-animation-duration: $duration;
            animation-duration: $duration;

    &__item {

      display: inline-block;

      padding: 0 2rem;
      font-size: 2rem;
      color: white;   

    }

  }

}



</style>


