(function(e){function t(t){for(var i,s,l=t[0],c=t[1],o=t[2],p=0,d=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0108":function(e,t,n){"use strict";var i=n("914a"),r=n.n(i);r.a},"1bc7":function(e,t,n){"use strict";var i=n("8ebf"),r=n.n(i);r.a},"4cab":function(e,t,n){"use strict";var i=n("9267"),r=n.n(i);r.a},"4d12":function(e,t,n){},5452:function(e,t,n){"use strict";var i=n("af35"),r=n.n(i);r.a},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},7782:function(e,t,n){"use strict";var i=n("d921"),r=n.n(i);r.a},"86b4":function(e,t,n){},"8ebf":function(e,t,n){},"8fca":function(e,t,n){e.exports=n.p+"img/micad_prelauncher_logo.e9eaadb6.svg"},"914a":function(e,t,n){},9267:function(e,t,n){},"9c0c":function(e,t,n){},a4e1:function(e,t,n){"use strict";var i=n("4d12"),r=n.n(i);r.a},af35:function(e,t,n){},c4e7:function(e,t,n){"use strict";var i=n("86b4"),r=n.n(i);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header",{staticClass:"header"}),n("div",{staticClass:"grid__wrapper"},[n("app-nav",{staticClass:"grid__item grid__item--menu"}),n("app-content",{staticClass:"grid__item grid__item--view"})],1)],1)},a=[],s=(n("b0c0"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticClass:"header__logo"},[i("img",{attrs:{src:n("8fca"),alt:""}})]),i("div",{staticClass:"header__title"},[i("div",{staticClass:"header__title--main"},[e._v(" Micad Admin ")]),i("div",{staticClass:"header__title--sub"},[e._v(" Our place is your new space ")])])])}],c={},o=c,u=(n("5452"),n("2877")),p=Object(u["a"])(o,s,l,!1,null,null,null),d=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav__wrapper"},[n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"Select Client"===e.$route.name},attrs:{to:"/",tag:"a"}},[e._v("Select Client")]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"New Client"===e.$route.name},attrs:{to:"/newclient",tag:"a"}},[e._v("New Client")]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"Admin Settings"===e.$route.name,"nav__link-disabled":!e.$store.getters.clientSelected},attrs:{to:"/settings",tag:"a"}},[e._v("Settings")]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"Visitors IPs"===e.$route.name,"nav__link-disabled":!e.$store.getters.clientSelected},attrs:{to:"/users",tag:"a"}},[e._v("Visitors")]),n("a",{staticClass:"nav__link",attrs:{href:"https://micad-prelaunch.herokuapp.com/client"}},[e._v("Client View")])],1)},f=[],v={},_=v,h=(n("a4e1"),Object(u["a"])(_,m,f,!1,null,null,null)),b=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"current-client"},[e._v(e._s(e.clientDisplay))]),n("div",{staticClass:"heading-primary--sub-big u-margin-bottom-small"},[e._v(" "+e._s(e.contentTitle)+" ")]),n("keep-alive",{attrs:{include:"SelectClient"}},[n("router-view")],1)],1)},C=[],w=i["a"].extend({computed:{contentTitle:function(){return"Admin Settings"==this.$route.name?"Settings for ".concat(this.clientName):"Visitors IPs"==this.$route.name?"".concat(this.clientName," Visitors IPs"):this.$route.name},clientDisplay:function(){return""},clientName:function(){return this.$store.getters.clientSelected.clientName}}}),x=w,k=(n("0108"),Object(u["a"])(x,g,C,!1,null,null,null)),y=k.exports,O=i["a"].extend({name:"App",components:{appHeader:d,appNav:b,appContent:y},computed:{appHref:function(){return window.location.href}},created:function(){console.log(this.$route.name)}}),N=O,j=(n("5c0b"),Object(u["a"])(N,r,a,!1,null,null,null)),S=j.exports,$=n("2f62"),P=(n("96cf"),n("1da1")),U=n("bc3a"),R=n.n(U),I=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0==e.users.length?n("h3",[e._v("No visitors have registered")]):e._e(),n("div",{staticClass:"visitors u-margin-bottom-medium"},[e._m(0),e._l(e.users,(function(t,i){return n("div",{key:i,staticClass:"visitor"},[n("div",{staticClass:"visitor-email"},[e._v(" "+e._s(t.email)+" ")]),n("div",{staticClass:"visitor-ips"},e._l(t.ips,(function(i){return n("a",{key:i.ip,staticClass:"visitor-ip",on:{click:function(n){return e.selectIp(i,t)}}},[e._v(" "+e._s(i.ip)+" ")])})),0),n("div",{staticClass:"visitor-verified"},e._l(t.ips,(function(e){return n("input",{key:e.ip,staticClass:"form__checkbox",staticStyle:{display:"block"},attrs:{readonly:"",type:"checkbox"},domProps:{checked:e.authUrlVerified}})})),0)])}))],2),n("button",{staticClass:"button",on:{click:function(t){return e.fetchUsers(e.$store.getters.clientSelected._id)}}},[e._v(" Refresh ")]),n("app-ip-info-popup",{attrs:{ipInfo:e.ipSelected,hidePopup:e.hidePopup},on:{"hide-popup":function(t){e.hidePopup=!0}}})],1)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"visitor visitor--title"},[n("div",[e._v(" Email ")]),n("div",[e._v(" IPS ")]),n("div",[e._v(" Auth Verified ")])])}],A=(n("99af"),n("d81d"),n("2909")),D=n("5530"),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ipInfo?n("div",{staticClass:"popup",class:[{"popup--hide":e.hidePopup}],attrs:{id:"popup"}},[n("div",{staticClass:"popup__content"},[n("div",{staticClass:"heading-primary--main"},[e._v("IP Information")]),e._l(e.formattedInfo,(function(t){return n("div",{key:t.title,staticClass:"popup__table"},[n("div",{staticClass:"popup__table-left"},[e._v(e._s(t.title))]),n("div",{staticClass:"popup__table-right"},[e._v(e._s(t.content))])])})),n("button",{staticClass:"button u-margin-top-small",on:{click:function(t){return e.$emit("hide-popup")}}},[e._v("Go back")])],2)]):e._e()},F=[],L=i["a"].extend({props:["ipInfo","hidePopup"],computed:{formattedInfo:function(){var e=this.ipInfo.platform.product||"unknown";return[{title:"IP",content:this.ipInfo.ip},{title:"User",content:this.ipInfo.email},{title:"Device",content:e},{title:"OS",content:"".concat(this.ipInfo.platform.os.family," ").concat(this.ipInfo.platform.os.version)},{title:"Browser",content:"".concat(this.ipInfo.platform.name," ").concat(this.ipInfo.platform.version)},{title:"Auth Verified",content:this.ipInfo.authUrlVerified}]}},methods:{}}),q=L,B=(n("7782"),Object(u["a"])(q,V,F,!1,null,null,null)),M=B.exports,H=i["a"].extend({components:{appIpInfoPopup:M},data:function(){return{ipSelected:null,hidePopup:!0}},methods:Object(D["a"])(Object(D["a"])({},Object($["b"])(["fetchUsers"])),{},{selectIp:function(e,t){this.ipSelected=Object(D["a"])(Object(D["a"])({},e),{},{email:t.email}),this.hidePopup=!1}}),computed:Object(D["a"])(Object(D["a"])({},Object($["c"])(["users"])),{},{ips:function(){var e;return(e=[]).concat.apply(e,Object(A["a"])(this.users.map((function(e){var t;return(t=[]).concat.apply(t,Object(A["a"])(e.ips.map((function(t){return{ip:t,email:e.email}}))))}))))}}),created:function(){return Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("created");case 1:case"end":return e.stop()}}),e)})))()}}),W=H,J=(n("4cab"),Object(u["a"])(W,E,T,!1,null,null,null)),Q=J.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showForm?n("app-form",{on:{submitted:e.submitted}}):n("div",[n("h2",{staticClass:"alert u-margin-bottom-small",class:[{"alert--success":e.success},{"alert--invalid":!e.success}]},[e._v(e._s(e.message))]),n("button",{staticClass:"button",on:{click:function(t){e.showForm=!0}}},[e._v("Show Form Again")])])],1)},z=[],K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form"},[n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"header"}},[e._v("Header")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.header,expression:"client.header"}],staticClass:"form__input",attrs:{type:"text",placeholder:"Welcome Title",id:"header"},domProps:{value:e.client.header},on:{input:function(t){t.target.composing||e.$set(e.client,"header",t.target.value)}}})]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"welcomeText"}},[e._v("Welcome Text")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.client.welcomeText,expression:"client.welcomeText"}],staticClass:"form__input",attrs:{placeholder:"Welcome text",id:"welcomeText",rows:"4"},domProps:{value:e.client.welcomeText},on:{input:function(t){t.target.composing||e.$set(e.client,"welcomeText",t.target.value)}}})]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"instructions"}},[e._v("Instructions Text")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.client.instructionsText,expression:"client.instructionsText"}],staticClass:"form__input",attrs:{placeholder:"Instructions",id:"instructions",rows:"4"},domProps:{value:e.client.instructionsText},on:{input:function(t){t.target.composing||e.$set(e.client,"instructionsText",t.target.value)}}})]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"faq"}},[e._v("On-boarding FAQ link")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.faq,expression:"client.faq"}],staticClass:"form__input",attrs:{type:"url",placeholder:"FAQ Link",id:"faq"},domProps:{value:e.client.faq},on:{input:function(t){t.target.composing||e.$set(e.client,"faq",t.target.value)}}})]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label form__label-date",attrs:{for:"date"}},[e._v("Launch date")]),n("input",{staticClass:"form__input",attrs:{type:"date",id:"date"},domProps:{value:e.toDateString},on:{input:e.setClientLaunchDate}})]),n("div",{staticClass:"form__group form__group--switch"},[n("label",{staticClass:"form__label",attrs:{for:"enable"}},[e._v("Authentication")]),n("div",{staticClass:"form__switch-container"},[n("label",{staticClass:"form__switch",attrs:{for:"ssoEnable"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.ssoEnable,expression:"client.ssoEnable"}],staticClass:"form__switch-input",attrs:{type:"checkbox",id:"ssoEnable"},domProps:{checked:Array.isArray(e.client.ssoEnable)?e._i(e.client.ssoEnable,null)>-1:e.client.ssoEnable},on:{change:function(t){var n=e.client.ssoEnable,i=t.target,r=!!i.checked;if(Array.isArray(n)){var a=null,s=e._i(n,a);i.checked?s<0&&e.$set(e.client,"ssoEnable",n.concat([a])):s>-1&&e.$set(e.client,"ssoEnable",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.client,"ssoEnable",r)}}}),n("span",{staticClass:"form__switch-slider"})])])]),e.client.ssoEnable?n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"authUrl"}},[e._v("Authentication URL")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.authUrl,expression:"client.authUrl"}],staticClass:"form__input",attrs:{type:"url",placeholder:"URL",id:"authUrl"},domProps:{value:e.client.authUrl},on:{input:function(t){t.target.composing||e.$set(e.client,"authUrl",t.target.value)}}})]):e._e(),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"urls"}},[e._v("Future URLs")]),e._l(e.client.urls,(function(t,i){return n("ul",{key:i,staticClass:"form__url-list",attrs:{id:"urls"}},[n("li",{staticClass:"form__url-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.urls[i].title,expression:"client.urls[i].title"}],staticClass:"form__input form__url-title",attrs:{type:"text",placeholder:"Title",id:"url"},domProps:{value:e.client.urls[i].title},on:{input:function(t){t.target.composing||e.$set(e.client.urls[i],"title",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.urls[i].url,expression:"client.urls[i].url"}],staticClass:"form__input form__url-path",attrs:{type:"text",placeholder:"Edit URL",id:"url"},domProps:{value:e.client.urls[i].url},on:{input:function(t){t.target.composing||e.$set(e.client.urls[i],"url",t.target.value)}}}),n("button",{staticClass:"button button-url button-url--remove",on:{click:function(t){return t.preventDefault(),e.removeUrl(i)}}},[e._v(" - ")])])])})),n("li",{staticClass:"form__url-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUrl.title,expression:"newUrl.title"}],staticClass:"form__input form__url-title form__url-title-add",attrs:{type:"text",placeholder:"Title",id:"url"},domProps:{value:e.newUrl.title},on:{input:function(t){t.target.composing||e.$set(e.newUrl,"title",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUrl.url,expression:"newUrl.url"}],staticClass:"form__input form__url-path form__url-path-add",attrs:{type:"text",placeholder:"Add URL",id:"url"},domProps:{value:e.newUrl.url},on:{input:function(t){t.target.composing||e.$set(e.newUrl,"url",t.target.value)}}}),n("button",{staticClass:"button button-url button-url--add",on:{click:function(t){return t.preventDefault(),e.addUrl()}}},[e._v(" + ")])])],2),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"verifications"}},[e._v("Verifications")]),n("div",{staticClass:"form__input-list"},e._l(Object.keys(e.client.verifications),(function(t,i){return n("div",{key:i,staticClass:"form__checkbox-container"},[n("label",{staticClass:"form__label form__label--sub"},[e._v(e._s(e.client.verifications[t].label))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.verifications[t].verify,expression:"client.verifications[key].verify"}],staticClass:"form__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.client.verifications[t].verify)?e._i(e.client.verifications[t].verify,null)>-1:e.client.verifications[t].verify},on:{change:function(n){var i=e.client.verifications[t].verify,r=n.target,a=!!r.checked;if(Array.isArray(i)){var s=null,l=e._i(i,s);r.checked?l<0&&e.$set(e.client.verifications[t],"verify",i.concat([s])):l>-1&&e.$set(e.client.verifications[t],"verify",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(e.client.verifications[t],"verify",a)}}})])})),0)]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"releaseNotes"}},[e._v("Release Notes link")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.releaseNotes,expression:"client.releaseNotes"}],staticClass:"form__input",attrs:{type:"url",placeholder:"Release Notes link",id:"releaseNotes"},domProps:{value:e.client.releaseNotes},on:{input:function(t){t.target.composing||e.$set(e.client,"releaseNotes",t.target.value)}}})]),n("div",{staticClass:"form__group"},[n("button",{staticClass:"button",on:{click:e.submitForm}},[e._v(" Save ")])])])])},X=[],Y=(n("a434"),i["a"].extend({data:function(){return{newUrl:{title:"",url:""},client:{}}},computed:{toDateString:function(){if(this.client.launchDate)return this.client.launchDate.substring(0,10)}},methods:Object(D["a"])(Object(D["a"])({removeUrl:function(e){this.client.urls.splice(e,1)},addUrl:function(){""!=this.newUrl.url&&(this.client.urls.push(this.newUrl),this.newUrl="")}},Object($["b"])(["updateClient"])),{},{submitForm:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateClient(e.client);case 2:n=t.sent,e.$emit("submitted",n);case 4:case"end":return t.stop()}}),t)})))()},setClientLaunchDate:function(e){this.client.launchDate=e.target.value}}),created:function(){console.log("created"),this.client=this.$store.getters.clientSelected}})),Z=Y,ee=(n("c4e7"),Object(u["a"])(Z,K,X,!1,null,null,null)),te=ee.exports,ne=i["a"].extend({data:function(){return{showForm:!0,message:"",success:!1}},methods:{submitted:function(e){this.showForm=!1,this.message=e?"Successfully submitted":"Server Error: failed to submit",this.success=e}},components:{appForm:te}}),ie=ne,re=Object(u["a"])(ie,G,z,!1,null,null,null),ae=re.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"form__group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedIndex,expression:"selectedIndex"}],staticClass:"form__select",attrs:{name:"",id:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedIndex=t.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",value:"default"}},[e._v("Select Client")]),e._l(e.clients,(function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(e._s(t.clientName))])}))],2)])]),e.seletectedClient?n("div",{staticClass:"client-selection"},[n("h2",{staticClass:"client-selection__heading"},[e._v("Client ID to share with users:")]),n("div",{staticClass:"client-selection__display"},[n("h2",{staticClass:"client-selection__id"},[e._v(e._s(e.seletectedClient._id))]),n("button",{staticClass:"button button-copy-to-clipboard",on:{click:function(t){return e.copyToClipBoard(e.seletectedClient._id)}}},[e._v("Copy to Clipboard")])]),n("button",{staticClass:"button button--delete u-margin-top-small",on:{click:function(t){return e.alertBeforeDeleting(e.seletectedClient)}}},[e._v("Delete Client")])]):e._e()])},le=[],ce=i["a"].extend({name:"SelectClient",data:function(){return{selectedIndex:"default"}},computed:Object(D["a"])(Object(D["a"])({},Object($["c"])(["clients"])),{},{seletectedClient:function(){return"default"!=this.selectedIndex?this.clients[this.selectedIndex]:null}}),watch:{selectedIndex:function(e,t){var n=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("default"===e){t.next=6;break}return i=n.clients[e],t.next=4,n.chooseClient(i);case 4:t.next=8;break;case 6:console.log("cant set client"),n.deselectClient();case 8:case"end":return t.stop()}}),t)})))()}},methods:Object(D["a"])(Object(D["a"])({},Object($["b"])(["fetchClients","chooseClient","deselectClient","deleteClient"])),{},{goToSettings:function(){this.$router.push("/settings")},copyToClipBoard:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.navigator.clipboard.writeText(e);case 1:case"end":return t.stop()}}),t)})))()},alertBeforeDeleting:function(e){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=confirm("Are you sure you want to delete the client ".concat(e.clientName,"? This will also delete all of ").concat(e.clientName,"'s users.")),!i){n.next=4;break}return n.next=4,t.deleteClient(e._id);case 4:case"end":return n.stop()}}),n)})))()}}),created:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchClients();case 2:e.deselectClient();case 3:case"end":return t.stop()}}),t)})))()}}),oe=ce,ue=(n("1bc7"),Object(u["a"])(oe,se,le,!1,null,null,null)),pe=ue.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"form__group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.clientName,expression:"clientName"}],staticClass:"form__input",attrs:{type:"text",placeholder:"Client Name",id:"clientName"},domProps:{value:e.clientName},on:{input:function(t){t.target.composing||(e.clientName=t.target.value)}}})]),e.isNameValid?e._e():n("div",{staticClass:"form__group"},[n("div",{staticClass:"alert alert--invalid"},[e._v("Name already exists")])]),n("div",{staticClass:"form__group"},[n("button",{staticClass:"button",class:[{"button--disabled":!e.isNameValid}],attrs:{disabled:!e.isNameValid},on:{click:function(t){return e.createClient(e.clientName)}}},[e._v(" Create ")])])])])},me=[],fe=i["a"].extend({name:"NewClient",data:function(){return{clientName:"",isNameValid:!0}},methods:Object(D["a"])({},Object($["b"])(["createClient","doesClientNameExist","deselectClient"])),watch:{clientName:function(e,t){var n=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.doesClientNameExist(e);case 4:i=t.sent,i?n.isNameValid=!0:(console.log("client Name already exists"),n.isNameValid=!1);case 6:case"end":return t.stop()}}),t)})))()}},created:function(){this.deselectClient(),console.log("deselct client")}}),ve=fe,_e=Object(u["a"])(ve,de,me,!1,null,null,null),he=_e.exports;i["a"].use(I["a"]);var be=[{path:"/",name:"Select Client",component:pe},{path:"/newclient",name:"New Client",component:he},{path:"/settings",name:"Admin Settings",component:ae,beforeEnter:function(e,t,n){Ne.getters.clientSelected?n():(console.log("must select client first"),n({name:"Select Client"}))}},{path:"/users",name:"Visitors IPs",component:Q,beforeEnter:function(e,t,n){Ne.getters.clientSelected?n():(console.log("must select client first"),n({name:"Select Client"}))}}],ge=new I["a"]({base:"/",routes:be}),Ce=ge,we={clientSelected:null,clients:[],users:[]},xe={clientSelected:function(e){return e.clientSelected},clients:function(e){return e.clients},users:function(e){return e.users}},ke={setClientSelected:function(e,t){e.clientSelected=t},setClients:function(e,t){e.clients=t},setUsers:function(e,t){e.users=t}},ye={fetchClients:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,R.a.get("/api/admin/clients");case 4:i=t.sent,i.data.success&&n("setClients",i.data.clients),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},createClient:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.commit,i=e.dispatch,n.prev=1,""!=t){n.next=5;break}return console.log("name is empty"),n.abrupt("return");case 5:return n.next=7,R.a.post("/api/admin/",{clientName:t});case 7:if(r=n.sent,!r.data.success){n.next=12;break}return n.next=11,i("fetchClients");case 11:Ce.push("/");case 12:n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](1),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))()},doesClientNameExist:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,R.a.get("/api/admin/nameValid/".concat(t));case 4:return i=n.sent,n.abrupt("return",i.data.unique);case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},updateClient:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.dispatch,e.commit,e.getters,n.prev=1,n.next=4,R.a.put("/api/admin/".concat(t._id),t);case 4:if(r=n.sent,!r.data.success){n.next=9;break}return n.next=8,i("fetchClients");case 8:return n.abrupt("return",!0);case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n["catch"](1),console.log(n.t0),n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()},fetchUsers:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.commit,n.prev=1,i("setUsers",[]),n.next=5,R.a.get("/api/admin/".concat(t,"/users"));case 5:r=n.sent,r.data.success&&i("setUsers",r.data.users),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},chooseClient:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.commit,r=e.dispatch,i("setClientSelected",t),n.next=4,r("fetchUsers",t._id);case 4:case"end":return n.stop()}}),n)})))()},deselectClient:function(e){var t=e.commit;t("setClientSelected",null)},deleteClient:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,R.a.delete("api/admin/".concat(t));case 4:i=n.sent,console.log(i.data.msg),location.reload(),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}},Oe={state:we,getters:xe,mutations:ke,actions:ye};i["a"].use($["a"]);var Ne=new $["a"].Store({modules:{Client:Oe}});i["a"].config.productionTip=!1,new i["a"]({router:Ce,store:Ne,render:function(e){return e(S)}}).$mount("#app")},d921:function(e,t,n){}});
//# sourceMappingURL=app.d542b72d.js.map