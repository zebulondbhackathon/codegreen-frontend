<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }" :class="item.row === 1 ? 'row-color' : ''">
        <md-table-cell md-label="Data Source Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Data Type">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="Rank">{{ item.rank }}</md-table-cell>
        <md-table-cell md-label="URL">{{ item.url }}</md-table-cell>
        <md-table-cell md-label="Key">{{ item.key }}</md-table-cell>
        <md-table-cell md-label="Active">{{ item.active }}</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon >edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<style scoped>
  .row-color {
    /* background-color: orange !important; */
  }
</style>

<script>
export default {
  name: "configure-sources-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "orange"
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          row: 0,
          name: "NordicExchange",
          type: "Fin, ESG",
          rank: 1,
          url: "https://msci/ESG/re?id=3",
          key: 'SHDIWLKE293823-1',
          active: true
        },
        {
          row: 1,
          name: "CSRHub",
          type: "ESG",
          rank: 2,
          url: "https://csrhub/data/get",
          key: '',
          active: false
        }
      ]
    };
  }
};
</script>
