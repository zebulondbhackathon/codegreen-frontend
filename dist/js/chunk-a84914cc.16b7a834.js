(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a84914cc"],{"20f6":function(t,e,i){},"2fa4":function(t,e,i){"use strict";i("20f6");var s=i("80d2");e["a"]=Object(s["h"])("spacer","div","v-spacer")},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var s=i("fe6c"),a=i("58df");function o(t,e=[]){return Object(a["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"602c":function(t,e,i){"use strict";var s=i("b6ab"),a=i.n(s);a.a},"7a74":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{id:"core-footer",absolute:"",height:"82"}},[i("div",{staticClass:"footer-items"},t._l(t.links,(function(e){return i("span",{key:e.name},[i("a",{staticClass:"tertiary--text footer-links",attrs:{href:e.Link}},[t._v(t._s(e.name))])])})),0),i("v-spacer"),i("span",{staticClass:"font-weight-light copyright"},[i("a",{attrs:{href:"https://www.db.com/",target:"_blank"}},[t._v("Code Green Hack Team")]),t._v(", made with\n    "),i("v-icon",{attrs:{color:"tertiary",size:"17"}},[t._v("mdi-heart")]),t._v("\n    for a better World\n  ")],1)],1)},a=[],o={data:function(){return{links:[{name:"Home",Link:"/#"},{name:"About Us",Link:"https://www.db.com"}]}}},n=o,r=(i("602c"),i("2877")),p=i("6544"),c=i.n(p),l=(i("b5b6"),i("3a66")),h=i("8dd9"),u=i("d10f"),d=i("58df"),f=i("80d2"),b=Object(d["a"])(h["a"],Object(l["a"])("footer",["height","inset"]),u["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...h["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...h["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(f["f"])(t),left:Object(f["f"])(this.computedLeft),right:Object(f["f"])(this.computedRight),bottom:Object(f["f"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),m=i("132d"),v=i("2fa4"),y=Object(r["a"])(n,s,a,!1,null,null,null);e["default"]=y.exports;c()(y,{VFooter:b,VIcon:m["a"],VSpacer:v["a"]})},b5b6:function(t,e,i){},b6ab:function(t,e,i){},d10f:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})}}]);
//# sourceMappingURL=chunk-a84914cc.16b7a834.js.map