<template>
  <div>
    <md-table id="alphaDigTable" v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }" :class="item.row === 1 ? 'row-color' : ''">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Symbol">{{ item.symbol }}</md-table-cell>
        <md-table-cell md-label="Field">{{ item.field }}</md-table-cell>
        <md-table-cell md-label="Unit">{{ item.unit }}</md-table-cell>
        <md-table-cell md-label="Value">{{ item.value }}</md-table-cell>
        <md-table-cell md-label="Discrepancy">{{ item.discrepancy }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<style>
  #alphaDigTable > div > table > thead > tr > th > div > div {
    font-weight: bold !important;
  }
</style>

<script>
export default {
  name: "alpha-dig-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "black"
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          row: 0,
          name: "Apple Inc",
          symbol: "AAPL.O",
          field: "Carbon Emission",
          unit: "MT",
          value: 89000,
          discrepancy: "Scope 3 data not considered"
        },
        {
          row: 1,
          name: "Samsung Electronics",
          symbol: "005930.KS",
          field: "Carbon Emission",
          unit: "MT",
          value: 13280000,
          discrepancy: "Scope 3 data not considered"
        }
      ]
    };
  }
};
</script>
