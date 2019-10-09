<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >

    <v-row justify="center">
      <v-col cols="12" sm="4">
        <v-overflow-btn
          class="my-2"
          :items="Client_Names"
          label="Client Name"
          target="#dropdown-example"
        ></v-overflow-btn>
        
         <v-overflow-btn
          class="my-2"
          :items="Sector_Names"
          label="Sector"
          target="#dropdown-example"
        ></v-overflow-btn>
        
          <v-overflow-btn
          class="my-2"
          :items="Symbol"
          label="Symbol"
          target="#dropdown-example"
        ></v-overflow-btn>

        <v-btn small class="white--text"  color='blue' >Analyze</v-btn>

      </v-col>
      
      <v-col cols="12">
        
        <material-card
          color="green"
          title="Client Holdings"
          text="Client Holdings in Hot Stocks"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
          />
        </material-card>
      </v-col>

      <v-col cols="12">
        <material-card
          color="green"
          flat
          full-width
          title="Table on Plain Background"
          text="Here is a subtitle for this table"
        >
          <v-data-table
            :headers="headers"
            :items="items.slice(0, 7)"
            hide-default-footer
          />
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      headers: [
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Country',
          value: 'country'
        },
        {
          sortable: false,
          text: 'City',
          value: 'city'
        },
        {
          sortable: false,
          text: 'Salary',
          value: 'salary',
          align: 'right'
        }
      ],
      items: [
        {
          name: 'Dakota Rice',
          country: 'Niger',
          city: 'Oud-Tunrhout',
          salary: '$35,738'
        },
        {
          name: 'Minerva Hooper',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
          salary: '$23,738'
        }, {
          name: 'Sage Rodriguez',
          country: 'Netherlands',
          city: 'Overland Park',
          salary: '$56,142'
        }, {
          name: 'Philip Chanley',
          country: 'Korea, South',
          city: 'Gloucester',
          salary: '$38,735'
        }, {
          name: 'Doris Greene',
          country: 'Malawi',
          city: 'Feldkirchen in Kārnten',
          salary: '$63,542'
        }, {
          name: 'Mason Porter',
          country: 'Chile',
          city: 'Gloucester',
          salary: '$78,615'
        }
      ],
      Client_Names: [
         'All','Blackrock Asset Management', 'Capital One Investments', 'Boston Color Hedge Fund', 'Milleninum Venture Capital'
      ],
      Sector_Names: [
        'All','Automobiles', 'Renewables','Utility', 'Banks', 'Mining'
      ],
      Symbol: [
        'All','MSFT','IBM','APPL','GOOG'
      ]
    })
  }
</script>
