(function(e){function t(t){for(var a,s,l=t[0],c=t[1],o=t[2],p=0,m=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0108":function(e,t,n){"use strict";var a=n("914a"),r=n.n(a);r.a},"1bc7":function(e,t,n){"use strict";var a=n("8ebf"),r=n.n(a);r.a},"4cab":function(e,t,n){"use strict";var a=n("9267"),r=n.n(a);r.a},"4d12":function(e,t,n){},5452:function(e,t,n){"use strict";var a=n("af35"),r=n.n(a);r.a},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"86b4":function(e,t,n){},"8ebf":function(e,t,n){},"8fca":function(e,t,n){e.exports=n.p+"img/micad_prelauncher_logo.e9eaadb6.svg"},"914a":function(e,t,n){},9267:function(e,t,n){},"9c0c":function(e,t,n){},a4e1:function(e,t,n){"use strict";var a=n("4d12"),r=n.n(a);r.a},af35:function(e,t,n){},c4e7:function(e,t,n){"use strict";var a=n("86b4"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header",{staticClass:"header"}),n("div",{staticClass:"grid__wrapper"},[n("app-nav",{staticClass:"grid__item grid__item--menu"}),n("app-content",{staticClass:"grid__item grid__item--view"})],1)],1)},i=[],s=(n("b0c0"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"header__logo"},[a("img",{attrs:{src:n("8fca"),alt:""}})]),a("div",{staticClass:"header__title"},[a("div",{staticClass:"header__title--main"},[e._v(" Micad Admin ")]),a("div",{staticClass:"header__title--sub"},[e._v(" Our place is your new space ")])])])}],c={},o=c,u=(n("5452"),n("2877")),p=Object(u["a"])(o,s,l,!1,null,null,null),m=p.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav__wrapper"},[n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"Select Client"===e.$route.name},attrs:{to:"/",tag:"a"}},[e._v("Select Client")]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"New Client"===e.$route.name},attrs:{to:"/newclient",tag:"a"}},[e._v("New Client")]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"Admin Settings"===e.$route.name,"nav__link-disabled":!e.$store.getters.clientSelected},attrs:{to:"/settings",tag:"a"}},[e._v("Settings")]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"Visitors IPs"===e.$route.name,"nav__link-disabled":!e.$store.getters.clientSelected},attrs:{to:"/users",tag:"a"}},[e._v("Visitors")]),n("a",{staticClass:"nav__link",attrs:{href:"https://micad-prelaunch.herokuapp.com/client"}},[e._v("Client View")])],1)},f=[],_={},v=_,h=(n("a4e1"),Object(u["a"])(v,d,f,!1,null,null,null)),b=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"current-client"},[e._v(e._s(e.clientDisplay))]),n("div",{staticClass:"heading-primary--sub-big u-margin-bottom-small"},[e._v(" "+e._s(e.contentTitle)+" ")]),n("router-view")],1)},C=[],x=a["a"].extend({computed:{contentTitle:function(){return"Admin Settings"==this.$route.name?"Settings for ".concat(this.clientName):"Visitors IPs"==this.$route.name?"".concat(this.clientName," Visitors IPs"):this.$route.name},clientDisplay:function(){return""},clientName:function(){return this.$store.getters.clientSelected.clientName}}}),w=x,k=(n("0108"),Object(u["a"])(w,g,C,!1,null,null,null)),y=k.exports,N=a["a"].extend({name:"App",components:{appHeader:m,appNav:b,appContent:y},computed:{appHref:function(){return window.location.href}},created:function(){console.log(this.$route.name)}}),O=N,j=(n("5c0b"),Object(u["a"])(O,r,i,!1,null,null,null)),S=j.exports,$=n("2f62"),E=(n("96cf"),n("1da1")),U=n("bc3a"),P=n.n(U),R=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0==e.users.length?n("h3",[e._v("No visitors have registered")]):e._e(),n("ul",{staticClass:"ip__list u-margin-bottom-big"},e._l(e.ips,(function(t,a){var r=t.ip,i=t.email;return n("li",{key:a,staticClass:"ip__item"},[e._v(e._s(r)+" "),n("span",{staticClass:"ip__item--email"},[e._v(e._s(i))])])})),0)])},A=[],D=(n("99af"),n("d81d"),n("2909")),I=n("5530"),V=a["a"].extend({computed:Object(I["a"])(Object(I["a"])({},Object($["c"])(["users"])),{},{ips:function(){var e;return(e=[]).concat.apply(e,Object(D["a"])(this.users.map((function(e){var t;return(t=[]).concat.apply(t,Object(D["a"])(e.ips.map((function(t){return{ip:t,email:e.email}}))))}))))}})}),L=V,M=(n("4cab"),Object(u["a"])(L,T,A,!1,null,null,null)),H=M.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-form")],1)},F=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form"},[n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"header"}},[e._v("Header")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.header,expression:"client.header"}],staticClass:"form__input",attrs:{type:"text",placeholder:"Welcome Title",id:"header"},domProps:{value:e.client.header},on:{input:function(t){t.target.composing||e.$set(e.client,"header",t.target.value)}}})]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"welcomeText"}},[e._v("Welcome text")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.welcomeText,expression:"client.welcomeText"}],staticClass:"form__input",attrs:{type:"text",placeholder:"Welcome Title",id:"welcomeText"},domProps:{value:e.client.welcomeText},on:{input:function(t){t.target.composing||e.$set(e.client,"welcomeText",t.target.value)}}})]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"instructions"}},[e._v("Instructions Text")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.instructionsText,expression:"client.instructionsText"}],staticClass:"form__input",attrs:{type:"text",placeholder:"Instructions",id:"instructions"},domProps:{value:e.client.instructionsText},on:{input:function(t){t.target.composing||e.$set(e.client,"instructionsText",t.target.value)}}})]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label form__label-date",attrs:{for:"date"}},[e._v("Launchdate")]),n("input",{staticClass:"form__input",attrs:{type:"date",id:"date"},domProps:{value:e.toDateString},on:{input:function(t){e.client.launchDate=t.target.value}}})]),n("div",{staticClass:"form__group form__group--switch"},[n("label",{staticClass:"form__label",attrs:{for:"enable"}},[e._v("Client page public")]),n("div",{staticClass:"form__switch-container"},[n("label",{staticClass:"form__switch",attrs:{for:"publicEnable"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.publicEnable,expression:"client.publicEnable"}],staticClass:"form__switch-input",attrs:{type:"checkbox",id:"publicEnable"},domProps:{checked:Array.isArray(e.client.publicEnable)?e._i(e.client.publicEnable,null)>-1:e.client.publicEnable},on:{change:function(t){var n=e.client.publicEnable,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);a.checked?s<0&&e.$set(e.client,"publicEnable",n.concat([i])):s>-1&&e.$set(e.client,"publicEnable",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.client,"publicEnable",r)}}}),n("span",{staticClass:"form__switch-slider"})])])]),n("div",{staticClass:"form__group form__group--switch"},[n("label",{staticClass:"form__label",attrs:{for:"enable"}},[e._v("SSO (on/off)")]),n("div",{staticClass:"form__switch-container"},[n("label",{staticClass:"form__switch",attrs:{for:"ssoEnable"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.ssoEnable,expression:"client.ssoEnable"}],staticClass:"form__switch-input",attrs:{type:"checkbox",id:"ssoEnable"},domProps:{checked:Array.isArray(e.client.ssoEnable)?e._i(e.client.ssoEnable,null)>-1:e.client.ssoEnable},on:{change:function(t){var n=e.client.ssoEnable,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);a.checked?s<0&&e.$set(e.client,"ssoEnable",n.concat([i])):s>-1&&e.$set(e.client,"ssoEnable",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.client,"ssoEnable",r)}}}),n("span",{staticClass:"form__switch-slider"})])])]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"releaseNotes"}},[e._v("Release Notes link")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.releaseNotes,expression:"client.releaseNotes"}],staticClass:"form__input",attrs:{type:"url",placeholder:"Release Notes link",id:"releaseNotes"},domProps:{value:e.client.releaseNotes},on:{input:function(t){t.target.composing||e.$set(e.client,"releaseNotes",t.target.value)}}})]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"authUrl"}},[e._v("Authentication URL")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.authUrl,expression:"client.authUrl"}],staticClass:"form__input",attrs:{type:"url",placeholder:"URL",id:"authUrl"},domProps:{value:e.client.authUrl},on:{input:function(t){t.target.composing||e.$set(e.client,"authUrl",t.target.value)}}})]),n("div",{staticClass:"form__group"},[n("label",{staticClass:"form__label",attrs:{for:"urls"}},[e._v("Future URLs")]),e._l(e.client.urls,(function(t,a){return n("ul",{key:a,staticClass:"form__url-list",attrs:{id:"urls"}},[n("li",{staticClass:"form__url-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.urls[a].title,expression:"client.urls[i].title"}],staticClass:"form__input form__input-url-title",attrs:{type:"text",placeholder:"Title",id:"url"},domProps:{value:e.client.urls[a].title},on:{input:function(t){t.target.composing||e.$set(e.client.urls[a],"title",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.client.urls[a].url,expression:"client.urls[i].url"}],staticClass:"form__input form__input-url",attrs:{type:"text",placeholder:"Edit URL",id:"url"},domProps:{value:e.client.urls[a].url},on:{input:function(t){t.target.composing||e.$set(e.client.urls[a],"url",t.target.value)}}}),n("div",{staticClass:"form__input form__input-control"},[n("button",{staticClass:"form__input-control-btn form__input-control-btn--remove",on:{click:function(t){return t.preventDefault(),e.removeUrl(a)}}},[e._v(" - ")])])])])})),n("li",{staticClass:"form__url-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUrl.title,expression:"newUrl.title"}],staticClass:"form__input form__input-url form__input-url-title-add",attrs:{type:"text",placeholder:"Title",id:"url"},domProps:{value:e.newUrl.title},on:{input:function(t){t.target.composing||e.$set(e.newUrl,"title",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUrl.url,expression:"newUrl.url"}],staticClass:"form__input form__input-url form__input-url-add",attrs:{type:"text",placeholder:"Add URL",id:"url"},domProps:{value:e.newUrl.url},on:{input:function(t){t.target.composing||e.$set(e.newUrl,"url",t.target.value)}}}),n("div",{staticClass:"form__input form__input-control"},[n("button",{staticClass:"form__input-control-btn form__input-control-btn--add",on:{click:function(t){return t.preventDefault(),e.addUrl()}}},[e._v(" + ")])])])],2),n("div",{staticClass:"form__group"},[n("button",{staticClass:"form__btn",on:{click:function(t){return e.updateClient(e.client)}}},[e._v(" Save ")])])])])},G=[],q=(n("a434"),a["a"].extend({data:function(){return{settings:{enable:!1,title:"Default",launchDate:null,urls:[]},newUrl:{title:"",url:""},client:{}}},computed:{toDateString:function(){if(this.client.launchDate)return this.client.launchDate.substring(0,10)}},methods:Object(I["a"])({removeUrl:function(e){this.client.urls.splice(e,1)},addUrl:function(){""!=this.newUrl.url&&(this.client.urls.push(this.newUrl),this.newUrl="")}},Object($["b"])(["updateClient"])),created:function(){console.log("created"),this.client=this.$store.getters.clientSelected}})),z=q,B=(n("c4e7"),Object(u["a"])(z,J,G,!1,null,null,null)),K=B.exports,Q=a["a"].extend({components:{appForm:K}}),X=Q,Y=Object(u["a"])(X,W,F,!1,null,null,null),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"form__group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedIndex,expression:"selectedIndex"}],staticClass:"form__select",attrs:{name:"",id:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedIndex=t.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",value:"default"}},[e._v("Select Client")]),e._l(e.clients,(function(t,a){return n("option",{key:a,domProps:{value:a}},[e._v(e._s(t.clientName))])}))],2)]),e.seletectedClient?n("div",[n("h2",[e._v("Client ID to share with users:")]),n("h2",{staticClass:"highlight"},[e._v(e._s(e.seletectedClient._id))])]):e._e(),e.$store.getters.clientSelected?n("div",{staticClass:"form__group u-margin-top-small"},[n("button",{staticClass:"form__btn",on:{click:e.goToSettings}},[e._v(" Go to Settings ")])]):e._e()])])},te=[],ne=a["a"].extend({name:"SelectClient",data:function(){return{selectedIndex:"default"}},computed:Object(I["a"])(Object(I["a"])({},Object($["c"])(["clients"])),{},{seletectedClient:function(){return"default"!=this.selectedIndex?this.clients[this.selectedIndex]:null}}),watch:{selectedIndex:function(e,t){var n=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("default"===e){t.next=6;break}return a=n.clients[e],t.next=4,n.chooseClient(a);case 4:t.next=8;break;case 6:console.log("cant set client"),n.deselectClient();case 8:case"end":return t.stop()}}),t)})))()}},methods:Object(I["a"])(Object(I["a"])({},Object($["b"])(["fetchClients","chooseClient","deselectClient"])),{},{goToSettings:function(){this.$router.push("/settings")}}),created:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchClients();case 2:e.deselectClient();case 3:case"end":return t.stop()}}),t)})))()}}),ae=ne,re=(n("1bc7"),Object(u["a"])(ae,ee,te,!1,null,null,null)),ie=re.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"form__group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.clientName,expression:"clientName"}],staticClass:"form__input",attrs:{type:"text",placeholder:"Client Name",id:"clientName"},domProps:{value:e.clientName},on:{input:function(t){t.target.composing||(e.clientName=t.target.value)}}})]),e.isNameValid?e._e():n("div",{staticClass:"form__group"},[n("div",{staticClass:"form__message form__message--invalid"},[e._v("Name already exists")])]),n("div",{staticClass:"form__group"},[n("button",{staticClass:"form__btn",on:{click:function(t){return e.createClient(e.clientName)}}},[e._v(" Create ")])])])])},le=[],ce=a["a"].extend({name:"NewClient",data:function(){return{clientName:"",isNameValid:!0}},methods:Object(I["a"])({},Object($["b"])(["createClient","doesClientNameExist","deselectClient"])),watch:{clientName:function(e,t){var n=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.doesClientNameExist(e);case 2:a=t.sent,a?(console.log("client Name already exists"),n.isNameValid=!1):n.isNameValid=!0;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.deselectClient(),console.log("deselct client")}}),oe=ce,ue=Object(u["a"])(oe,se,le,!1,null,null,null),pe=ue.exports;a["a"].use(R["a"]);var me=[{path:"/",name:"Select Client",component:ie},{path:"/newclient",name:"New Client",component:pe},{path:"/settings",name:"Admin Settings",component:Z,beforeEnter:function(e,t,n){Ce.getters.clientSelected?n():(console.log("must select client first"),n({name:"Select Client"}))}},{path:"/users",name:"Visitors IPs",component:H,beforeEnter:function(e,t,n){Ce.getters.clientSelected?n():(console.log("must select client first"),n({name:"Select Client"}))}}],de=new R["a"]({base:"/",routes:me}),fe=de,_e={clientSelected:null,clients:[],users:[]},ve={clientSelected:function(e){return e.clientSelected},clients:function(e){return e.clients},users:function(e){return e.users}},he={setClientSelected:function(e,t){e.clientSelected=t},setClients:function(e,t){e.clients=t},setUsers:function(e,t){e.users=t}},be={fetchClients:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,P.a.get("/api/admin/clients");case 4:a=t.sent,a.data.success&&n("setClients",a.data.clients),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},createClient:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=e.dispatch,n.prev=1,n.next=4,P.a.post("/api/admin/",{clientName:t});case 4:if(r=n.sent,!r.data.success){n.next=9;break}return n.next=8,a("fetchClients");case 8:fe.push("/");case 9:n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()},doesClientNameExist:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,P.a.get("/api/admin/nameExist/".concat(t));case 4:if(a=n.sent,!a.data.success){n.next=9;break}if(!a.data.client){n.next=8;break}return n.abrupt("return",!0);case 8:return n.abrupt("return",!1);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()},updateClient:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,n.prev=1,n.next=4,P.a.put("/api/admin/".concat(t._id),t);case 4:if(r=n.sent,!r.data.success){n.next=8;break}return n.next=8,a("fetchClients");case 8:n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()},fetchUsers:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.prev=1,n.next=4,P.a.get("/api/admin/".concat(t,"/users"));case 4:r=n.sent,r.data.success&&a("setUsers",r.data.users),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},chooseClient:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.dispatch,a("setClientSelected",t),n.next=4,r("fetchUsers",t._id);case 4:case"end":return n.stop()}}),n)})))()},deselectClient:function(e){var t=e.commit;t("setClientSelected",null)}},ge={state:_e,getters:ve,mutations:he,actions:be};a["a"].use($["a"]);var Ce=new $["a"].Store({modules:{Client:ge}});a["a"].config.productionTip=!1,new a["a"]({router:fe,store:Ce,render:function(e){return e(S)}}).$mount("#app")}});
//# sourceMappingURL=app.0b432835.js.map