<template>
 <!--<div id="home"></div>-->
   <div class="content">
   <div id="home">
     <div class="logo">
       <a href="#" class="simple-text logo-mini">
         <div align="center">
           <img src="@/assets/img/Caelimetrixlogo2.png" alt="" height="350px" width="350px" />
         </div>
         <span><h1 align="center">Welcome to Caelimetrix</h1></span>
       </a>
     </div>
   </div>
     <div>
     </div>
   <v-container>
     <v-row>
       <v-col sm="4">
         <div>
           <template>
             <v-card
                     max-width="400"
                     class="mx-auto"
             >
               <v-system-bar color="pink darken-2"></v-system-bar>
               <v-app-bar dark color="pink">
                 <v-app-bar-nav-icon></v-app-bar-nav-icon>
                 <div>ESG Data Sourcing Challenges</div>
                 <div class="flex-grow-1"></div>
                 <v-btn icon>
                   <v-icon>mdi-magnify</v-icon>
                 </v-btn>
               </v-app-bar>
               <v-container
                       class="pa-2"
                       fluid
               >
                 <v-row>
                   <v-col sm="12"
                           v-for="(item, i) in items"
                           :key="i"
                   >
                     <v-card
                             :color="item.color"
                             dark
                             height="100px;"
                     >
                       <v-list-item>
                         <v-list-item-content class="align-self-start">
                           <v-list-item-title
                                   class="headline mb-2"
                                   v-text="item.title"
                           ></v-list-item-title>
                         </v-list-item-content>
                       </v-list-item>
                     </v-card>
                   </v-col>
                 </v-row>
               </v-container>
             </v-card>
           </template>
         </div>
       </v-col>
       <v-col sm="8">
         <img src="@/assets/img/arc.png" alt="" style="width: 100%; height: 100%;" />
       </v-col>
     </v-row>
   </v-container>
   </div>
</template>
<script>
 export default {
   data: () => ({
     items: [
       {
         color: '#385F73',
         title: 'Nonstandard data',
       },
       {
         color: '#225F73',
         title: 'Multiple vendors',
       },
       {
         color: '#652175',
         title: 'Data accuracy and Bias',
       },
       {
         color: '#952175',
         title: 'Data volumes',
       },
     ],
   }),
 }
</script>