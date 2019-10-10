<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="RIC">{{ item.ric }}</md-table-cell>
        <md-table-cell md-label="Company Name">{{ item.companyName }}</md-table-cell>
        <md-table-cell md-label="Sector">{{ item.sector }}</md-table-cell>
        <md-table-cell md-label="ESG Rating">{{ item.csgRating }}</md-table-cell>
        <md-table-cell md-label="ESG Score">{{ item.csgScore }}</md-table-cell>
        <md-table-cell md-label="Carbon Emissions">{{ item.carbonEmissions }}</md-table-cell>
        <md-table-cell md-label="GHG Emission">{{ item.ghgEmission }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ESGData-table",
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
          ric: "QEP.N",
          companyName: "QEP RESOURCES INC",
          sector: "Energy",
          csgRating: "CCC",
          csgScore: "23",
          carbonEmissions: "3,768,000",
          ghgEmission: "9,510,000"
        },
        {
          ric: "CRZO.O",
          companyName: "CARRIZO OIL & GAS INC",
          sector: "Energy",
          csgRating: "CCC",
          csgScore: "23",
          carbonEmissions: "1,861,000",
          ghgEmission: "12,022,000"
        },
        {
          ric: "RICE.N",
          companyName: "RICE ENERGY INC",
          sector: "Energy",
          csgRating: "CCC",
          csgScore: "23",
          carbonEmissions: "5,358,000",
          ghgEmission: "12,029,039"
        },
        {
          ric: "RRC.N",
          companyName: "RANGE RESOURCES CORP",
          sector: "Energy",
          csgRating: "CCC",
          csgScore: "24",
          carbonEmissions: "6,000,000",
          ghgEmission: "14,778,000"
        },
        {
          ric: "NGL.N",
          companyName: "NGL ENERGY PARTNERS LP",
          sector: "Energy",
          csgRating: "CCC",
          csgScore: "25",
          carbonEmissions: "7,578,000",
          ghgEmission: "16,011,576"
        },
        {
          ric: "RMP.TO",
          companyName: "RMP ENERGY INC",
          sector: "Energy",
          csgRating: "CCC",
          csgScore: "25",
          carbonEmissions: "7,635,000",
          ghgEmission: "16,163,000"
        }
      ]
    };
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`https://codegreen-backend.eastus.cloudapp.azure.com:8060/esgdata/all`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.users = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
};
</script>
