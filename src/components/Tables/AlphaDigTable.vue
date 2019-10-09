<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
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

<script>
export default {
  name: "alpha-dig-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Apple Inc",
          symbol: "AAPL.O",
          field: "Carbon Emission",
          unit: "MT",
          value: 89000,
          discrepancy: "Scope 3 data not considered"
        },
        {
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
