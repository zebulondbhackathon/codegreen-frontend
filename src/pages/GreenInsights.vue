<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <iframe src="/eafilters.html" frameBorder="0" scrolling="no" height="500" width="100%" style="height: 145px"></iframe>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <iframe src="/eabuysell.html" frameBorder="0" scrolling="no" height="500" width="100%" style="height: 500px"></iframe>
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