<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/home">
        <md-icon>person</md-icon>
        <p>Home</p>
      </sidebar-link>
      
      <!-- <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>User Profile</p>
      </sidebar-link> -->
      <sidebar-link to="/data-source">
        <md-icon>grid_on</md-icon>
        <p>ESG Data Sourcing</p>
      </sidebar-link>     
      <sidebar-link to="/green-insights">
        <md-icon>local_florist</md-icon>
        <p>Green Insights</p>
      </sidebar-link>
      <sidebar-link class="sublink" style="margin-top: -20px; margin-bottom: -10px;" to="/green">
        <md-icon></md-icon>
        <p>Portfolio Analysis</p>
      </sidebar-link>
      <sidebar-link class="sublink" style="margin-top: -20px; margin-bottom: -10px;" to="/green">
        <md-icon></md-icon>
        <p>Trading Insights</p>
      </sidebar-link>
      <sidebar-link class="sublink" style="margin-top: -20px; margin-bottom: -10px;" to="/green">
        <md-icon></md-icon>
        <p>Green Bonds</p>
      </sidebar-link>
      <sidebar-link class="sublink" style="margin-top: -20px; margin-bottom: -10px;" to="/green">
        <md-icon></md-icon>
        <p>Counterparty Risk</p>
      </sidebar-link>
      <sidebar-link class="sublink" style="margin-top: -20px; margin-bottom: -10px;" to="/green">
        <md-icon></md-icon>
        <p>Research</p>
      </sidebar-link>
      <sidebar-link class="sublink" style="margin-top: -20px; margin-bottom: -10px;" to="/green">
        <md-icon></md-icon>
        <p>Smart Beta Strategy</p>
      </sidebar-link>
      <sidebar-link to="" class="active-pro">
        <span @click="navigate('https://www.db.com/newsroom_news/2019/dbtechhackathon-2019-social-media-wall-en-11606.htm')"><md-icon>spa</md-icon>
        <p>DB Sustainability Hack</p></span>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
#sideBarLinks > li.sublink > a {
  background: unset !important;
}
#sideBarLinks > li.active-pro > a {
  background-color: unset !important;
}


</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  methods: {
    navigate(url) {
      window.open(url, '_blank');
    }
  }
};
</script>
