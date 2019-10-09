<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Data Source Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Data Type">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="Rank">{{ item.rank }}</md-table-cell>
        <md-table-cell md-label="URL">{{ item.url }}</md-table-cell>
        <md-table-cell md-label="Key">{{ item.key }}</md-table-cell>
        <md-table-cell md-label="Active">{{ item.active }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "configure-sources-table",
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
          name: "MSCI",
          type: "Fin, ESG",
          rank: 1,
          url: "https://msci/ESG/re?id=3",
          key: 'SHDIWLKE293823-1',
          active: true
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
