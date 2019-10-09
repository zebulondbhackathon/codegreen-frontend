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
      <div id="ticker"><p><span style="color:white"></span>MSCI,ESG Ratings Change for AAPL: <span style="color:red">AAA to AA</span>
Bloomberg,Chevron CVX.N to increase investments in Renewables,Renewable investments to double in 2020
Bloomberg,Exxon XOM.N settles oil spill claims. Stock rises,
Reuters,Rio Tinto to shutdown mine in Queensland,The worlds <span>     </span>largest miner Rio Tino bowed to pressure from Banks and activists to shut down its legacy mine responsible for most of its pollution,
Bloomberg,Contribution of renewables increases to 11% in the US,Renewable energy sources contributed 11% of US energy needs a new high,
Reuters,Google parent Alphabet Inc fails on GHG emisssion targets,Alphabet Inc missed its Green House Gas emission targets which could attract aire of regulators in Europe</p>
             </div>

             <div class="ticker-wrap">
<div class="ticker">
  <div class="ticker__item">Letterpress chambray brunch.</div>
  <div class="ticker__item">Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</div>
  <div class="ticker__item">Ugh PBR&B kale chips Echo Park.</div>
  <div class="ticker__item">Gluten-free mumblecore chambray mixtape food truck. </div>

</div>
</div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>

#ticker {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(72, 70, 80);
  color: white;
  height:60px;
  padding-top:15px;
  overflow:hidden;

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


