<template>
    <div>
        <md-table v-model="users" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Client">{{ item.client }}</md-table-cell>
                <md-table-cell md-label="Change">{{ item.change }}</md-table-cell>
                <md-table-cell md-label="Quantity">{{ item.quantity }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
export default {
    name: "green-insights-table",
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
                    client: "NLP Inc",
                    change: "BUY",
                    quantity: "4899"
                },
                {
                    client: "Jupiter Asset Mgmt",
                    change: "BUY",
                    quantity: "3017"
                },
                {
                    client: "Fidel Inv",
                    change: "BUY",
                    quantity: "1104"
                },
                {
                    client: "Sawyer Asset",
                    change: "SELL",
                    quantity: "1081"
                },
                {
                    client: "Canara Capital",
                    change: "SELL",
                    quantity: "1311"
                },
                {
                    client: "Paragon finance",
                    change: "SELL",
                    quantity: "1978"
                },
                {
                    client: "Fidel Inv",
                    change: "SELL",
                    quantity: "4434"
                },
                {
                    client: "Realty Capital",
                    change: "SELL",
                    quantity: "5071"
                },
                {
                    client: "Lucas Management",
                    change: "SELL",
                    quantity: "31411"
                }
            ]
        };
    }
};
</script>
