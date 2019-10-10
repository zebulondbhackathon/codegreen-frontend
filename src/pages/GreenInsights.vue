<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          Stock Name:
          <select>
            <option>ELECTRONIC ARTS INC</option>
            <option>FACEBOOK INC-CLASS A</option>
            <option>NEWS CORP - CLASS B</option>
            <option>NEWS CORP - CLASS A</option>
            <option>TEGNA INC</option>
            <option>FOX CORP - CLASS B</option>
            <option>ACTIVISION BLIZZARD INC</option>
            <option>T-MOBILE US INC</option>
            <option>CBS CORP-CLASS B NON VOTING</option>
            <option>FRONTIER COMMUNICATIONS CORP</option>
            <option>FOX CORP - CLASS A</option>
            <option>OMNICOM GROUP</option>
            <option>COMCAST CORP-CLASS A</option>
          </select>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <iframe src="/eabuysell.html" frameBorder="0" height="500" width="100%" style="height: 500px"></iframe>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Client Insights</h4>
            <p class="category">Client Activity for ELECTRONIC ARTS INC</p>
          </md-card-header>
          <md-card-content>
            <green-insights-table table-header-color="green"></green-insights-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { GreenInsightsTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    GreenInsightsTable
  }
};

</script>