(function(e){function t(t){for(var a,i,c=t[0],l=t[1],u=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);o&&o(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var o=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1f41":function(e,t,n){"use strict";var a=n("7a14"),r=n.n(a);r.a},"21bb":function(e,t,n){"use strict";var a=n("2dad"),r=n.n(a);r.a},"2b8f":function(e,t,n){},"2dad":function(e,t,n){},"4d12":function(e,t,n){},5452:function(e,t,n){"use strict";var a=n("af35"),r=n.n(a);r.a},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},6286:function(e,t,n){"use strict";var a=n("2b8f"),r=n.n(a);r.a},"7a14":function(e,t,n){},"86b4":function(e,t,n){},"8fca":function(e,t,n){e.exports=n.p+"img/micad_prelauncher_logo.e9eaadb6.svg"},"9c0c":function(e,t,n){},a4e1:function(e,t,n){"use strict";var a=n("4d12"),r=n.n(a);r.a},af35:function(e,t,n){},b351:function(e,t,n){"use strict";var a=n("f2a3"),r=n.n(a);r.a},c4e7:function(e,t,n){"use strict";var a=n("86b4"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header",{staticClass:"header"}),n("div",{staticClass:"grid__wrapper"},[n("app-nav",{staticClass:"grid__item grid__item--menu"}),n("app-content",{staticClass:"grid__item grid__item--view"})],1)],1)},s=[],i=(n("b0c0"),n("96cf"),n("1da1")),c=n("5530"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("div",{staticClass:"header__title"},[e.$store.getters.clientConfig?n("div",{staticClass:"header__title--main"},[e._v(" "+e._s(e.$store.getters.clientConfig.header)+" ")]):n("div",{staticClass:"header__title--main"},[e._v(" Pre-launch, Client not Identified ")]),n("div",{staticClass:"header__title--sub"},[e._v(" Our place is your new space ")])])])},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header__logo"},[a("img",{attrs:{src:n("8fca"),alt:""}})])}],o={},d=o,f=(n("5452"),n("2877")),m=Object(f["a"])(d,l,u,!1,null,null,null),p=m.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.getters.clientConfig?n("div",{staticClass:"nav__wrapper"},[n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"welcome"==e.$route.name},attrs:{to:"/",tag:"a"}},[n("span",[e._v("Welcome")])]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"details"==e.$route.name},attrs:{to:"/details",tag:"a"}},[e._v("Your Details")]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"instructions"==e.$route.name},attrs:{to:"/instructions",tag:"a"}},[e._v("Instructions")]),n("a",{staticClass:"nav__link",attrs:{href:e.$store.getters.clientConfig.releaseNotes}},[e._v("Release Notes")]),n("a",{staticClass:"nav__link",attrs:{href:"https://micad.co.uk/"}},[e._v("micad Website")]),n("a",{staticClass:"nav__link",attrs:{href:"https://support.zoho.com/portal/micad/en/signin"}},[e._v("Contact Support")]),n("a",{staticClass:"nav__link",attrs:{href:"#"},on:{click:e.removeClientID}},[e._v("Change Client")])],1):n("div",{staticClass:"nav__wrapper"},[n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"identify client"==e.$route.name},attrs:{to:"/login",tag:"a"}},[e._v("Identify Client")])],1)])},v=[],h=n("2f62"),g={methods:Object(c["a"])({},Object(h["b"])(["removeClientID"]))},b=g,C=(n("a4e1"),Object(f["a"])(b,_,v,!1,null,null,null)),w=C.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"heading-primary--sub-big u-margin-bottom-medium"},[e._v(" "+e._s(e.$route.name)+" ")]),n("router-view")],1)},y=[],I={},O=I,U=Object(f["a"])(O,x,y,!1,null,null,null),D=U.exports,j=a["a"].extend({name:"App",components:{appHeader:p,appNav:w,appContent:D},methods:Object(c["a"])({},Object(h["b"])(["fetchClient"])),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$store.getters.isClientIdentified){t.next=5;break}return t.next=3,e.fetchClient(e.$store.getters.clientID);case 3:t.next=6;break;case 5:"identify client"!==e.$route.name&&e.$router.push({name:"identify client"});case 6:case"end":return t.stop()}}),t)})))()}}),k=j,S=(n("5c0b"),Object(f["a"])(k,r,s,!1,null,null,null)),$=S.exports,P=n("bc3a"),R=n.n(P),E=n("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$store.state.Client.clientConfig?n("div",[n("h1",[e._v("Hello "),n("span",{staticClass:"client-name"},[e._v(e._s(e.$store.getters.clientConfig.clientName))]),e._v(" user")]),n("p",{staticClass:"message"},[e._v(e._s(e.$store.getters.clientConfig.welcomeText))]),e.$store.state.Client.clientConfig?n("app-countdown",{attrs:{launchDate:new Date(e.$store.state.Client.clientConfig.launchDate),urls:e.$store.state.Client.clientConfig.urls}}):e._e()],1):e._e()},V=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-countdown"},[e.isLaunched?n("h1",{staticClass:"countdown"},[e._v("Your micad system was Launched on "),n("span",{staticClass:"countdown__date"},[e._v(e._s(e.prettyLaunchDate))])]):n("h1",{staticClass:"countdown"},[n("span",{staticClass:"countdown__days"},[e._v(e._s(e.remainingDays))]),e._v(" days to launch date on "),n("span",{staticClass:"countdown__date"},[e._v(e._s(e.prettyLaunchDate))])]),n("div",[e.isLaunched?n("h3",{staticClass:"heading-primary--sub"},[e._v("Your URLs are:")]):n("h3",{staticClass:"heading-primary--sub"},[e._v("Your URLs will be:")])]),e._l(e.urls,(function(t,a){return n("div",{key:a,staticClass:"url-grid"},[n("div",{staticClass:"url-grid__item url-grid__item--title"},[e._v(e._s(t.title)+":")]),n("a",{staticClass:"url-grid__item url-grid__item--url"},[e._v(e._s(t.url))])])}))],2)},L=[],F=(n("99af"),n("b680"),n("ac1f"),n("5319"),a["a"].extend({props:["launchDate","urls"],data:function(){return{verified:!1}},computed:{prettyLaunchDate:function(){return"".concat(this.monthOfLaunchDate," ").concat(this.launchDate.getDate(),", ").concat(this.launchDate.getFullYear())},monthOfLaunchDate:function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e[this.launchDate.getMonth()]},remainingDays:function(){var e=864e5,t=new Date;t.setMilliseconds(0),t.setSeconds(0),t.setHours(0),this.launchDate.setMilliseconds(0),this.launchDate.setSeconds(0),this.launchDate.setHours(0);var n=(Math.round(this.launchDate.getTime()-t.getTime())/e).toFixed(0);return n},isLaunched:function(){return this.remainingDays<1}},filters:{shortenUrl:function(e){return e.replace("https://","").replace(".micadipr.net/","")}}})),N=F,T=(n("b351"),Object(f["a"])(N,A,L,!1,null,null,null)),z=T.exports,Y=a["a"].extend({components:{appCountdown:z}}),J=Y,H=(n("21bb"),Object(f["a"])(J,M,V,!1,null,null,null)),q=H.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",attrs:{action:"#"}},[n("div",{staticClass:"form__group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.clientID,expression:"clientID"}],staticClass:"form__input",attrs:{type:"text",placeholder:"Client ID",id:"clientID",required:""},domProps:{value:e.clientID},on:{input:function(t){t.target.composing||(e.clientID=t.target.value)}}})]),n("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.fetchClient(e.clientID)}}},[e._v(" Submit ")])])])},W=[],Z={data:function(){return{clientID:""}},methods:Object(c["a"])({},Object(h["b"])(["fetchClient"]))},G=Z,K=Object(f["a"])(G,B,W,!1,null,null,null),Q=K.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-broswer-detail",{staticClass:"u-margin-bottom-medium"}),""!=e.$store.getters.currentIP?n("app-form"):e._e(),n("div",{staticClass:"message"},[e._v(" Type your email to see if you have recorded this IP in our system. Press submit if you want to have your current IP recorded. ")])],1)},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",attrs:{action:"#"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"form__group"},[n("input",{staticClass:"form__input",attrs:{type:"email",placeholder:"Email address",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){return e.setEmail(t.target.value)}}})]),e.ipAlreadyRecorded||e.submitSuccess?e._e():n("div",{staticClass:"form__group"},[e.fetchedUser?n("div",[n("button",{staticClass:"button button-add",on:{click:function(t){return e.updateUser(!1)}}},[e._v(" Add IP ")]),n("button",{staticClass:"button button-overwrite",on:{click:function(t){return e.updateUser(!0)}}},[e._v(" Overwrite IPS ")])]):n("button",{staticClass:"button",on:{click:e.createUser}},[e._v(" Submit ")])]),n("div",{staticClass:"form__group"},[e.ipAlreadyRecorded&&!e.submitSuccess?n("div",{staticClass:"alert alert--invalid"},[e._v("This IP has already been recorded!")]):e._e(),e.submitSuccess?n("div",{staticClass:"alert alert--success"},[e._v(e._s(e.message))]):e._e()]),e.fetchedUser&&e.$store.getters.clientConfig.ssoEnable?n("div",{staticClass:"url-grid--auth u-margin-bottom-small"},[n("div",{staticClass:"url-grid__item url-grid__item--title"},[e._v("auth URL:")]),n("a",{staticClass:"url-grid__item url-grid__item--url",attrs:{href:e.$store.getters.clientConfig.authUrl}},[e._v(e._s(e.$store.getters.clientConfig.authUrl))]),n("div",{staticClass:"verify"},[e._v("Verify: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchedUser.authUrlVerified,expression:"fetchedUser.authUrlVerified"}],staticClass:"form__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.fetchedUser.authUrlVerified)?e._i(e.fetchedUser.authUrlVerified,null)>-1:e.fetchedUser.authUrlVerified},on:{change:function(t){var n=e.fetchedUser.authUrlVerified,a=t.target,r=!!a.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);a.checked?i<0&&e.$set(e.fetchedUser,"authUrlVerified",n.concat([s])):i>-1&&e.$set(e.fetchedUser,"authUrlVerified",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.fetchedUser,"authUrlVerified",r)}}})])]):e._e()])])},ne=[],ae=(n("caad"),n("2532"),a["a"].extend({computed:Object(c["a"])(Object(c["a"])({},Object(h["c"])(["email","fetchedUser","currentIP","submitSuccess","isEmailValid","message"])),{},{ipAlreadyRecorded:function(){return!!this.fetchedUser&&this.fetchedUser.ips.includes(this.currentIP)}}),methods:Object(c["a"])(Object(c["a"])({},Object(h["d"])(["setEmail","setFetchedUser","setMessage"])),Object(h["b"])(["createUser","updateUser","verifyAuthUrl"])),watch:{"$store.state.User.email":function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isEmailValid){t.next=8;break}return console.log("valid email"),t.next=4,R.a.get("/api/users/".concat(e.$store.getters.clientID,"/").concat(e.email));case 4:n=t.sent,e.setFetchedUser(n.data.user),t.next=10;break;case 8:console.log("email not valid"),e.setFetchedUser(null);case 10:case"end":return t.stop()}}),t)})))()},"fetchedUser.authUrlVerified":function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(console.log("newVal",e),console.log("oldVal",t),null==t){a.next=9;break}return console.log("verification changed"),n.setMessage(""),a.next=7,n.verifyAuthUrl(e);case 7:r=a.sent,console.log(r);case 9:case"end":return a.stop()}}),a)})))()}}})),re=ae,se=(n("c4e7"),Object(f["a"])(re,te,ne,!1,null,null,null)),ie=se.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"details"},[e.currentIP?n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Your IP:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.currentIP))])]):e._e(),n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("OS:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.platform.os.family)+" "+e._s(e.platform.os.version))])]),e.platform.product?n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Device:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.platform.product))])]):e._e(),n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Browser:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.platform.name)+" "+e._s(e.platform.version))])]),n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Screen Size:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.screenSize))])])])])},le=[],ue=n("e04c"),oe=n.n(ue),de={computed:Object(c["a"])(Object(c["a"])({},Object(h["c"])(["currentIP","submitSuccess"])),{},{platform:function(){return Object(c["a"])({},oe.a)},screenSize:function(){return"".concat(window.screen.width," x ").concat(window.screen.height)}}),methods:Object(c["a"])({},Object(h["d"])(["setCurrentIP"])),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R.a.get("https://api.ipify.org/?format=json");case 2:n=t.sent,console.log(n),e.setCurrentIP(n.data.ip);case 5:case"end":return t.stop()}}),t)})))()}},fe=de,me=(n("6286"),Object(f["a"])(fe,ce,le,!1,null,null,null)),pe=me.exports,_e=a["a"].extend({components:{appForm:ie,appBroswerDetail:pe}}),ve=_e,he=Object(f["a"])(ve,X,ee,!1,null,null,null),ge=he.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"message"},[e._v(e._s(e.$store.getters.clientConfig.instructionsText))])])},Ce=[],we=a["a"].extend({}),xe=we,ye=Object(f["a"])(xe,be,Ce,!1,null,null,null),Ie=ye.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-information")},Ue=[],De=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},je=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"paragraph"},[e._v(" Preparing you for a smooth transition into our new system! ")]),n("a",{staticClass:"link",attrs:{href:"http://www.updates.micadipr.net/ReleaseNotes/IPR/iprGAReleaseNotes_3_6_0.pdf"}},[n("span",{staticClass:"link__ipr"},[e._v("ipr 3.6")]),e._v(" release notes ")])])}],ke={},Se=ke,$e=(n("1f41"),Object(f["a"])(Se,De,je,!1,null,null,null)),Pe=$e.exports,Re=a["a"].extend({components:{appInformation:Pe}}),Ee=Re,Me=Object(f["a"])(Ee,Oe,Ue,!1,null,null,null),Ve=Me.exports;a["a"].use(E["a"]);var Ae=[{path:"/",name:"welcome",component:q},{path:"/login",name:"identify client",component:Q},{path:"/details",name:"details",component:ge},{path:"/instructions",name:"instructions",component:Ie},{path:"/releasenotes",name:"release notes",component:Ve}],Le=new E["a"]({base:"/",routes:Ae});Le.beforeEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"identify client"===t.name||Ge.getters.isClientIdentified||(console.log("client id not identified"),a({name:"identify client"})),a();case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}());var Fe=Le,Ne={clientConfig:null,clientID:localStorage.getItem("clientID")||""},Te={clientID:function(e){return e.clientID},clientConfig:function(e){return e.clientConfig},isClientIdentified:function(e){return""!=e.clientID}},ze={setClientConfig:function(e,t){e.clientConfig=t},setClientID:function(e,t){e.clientID=t}},Ye={fetchClient:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.prev=1,n.next=4,R.a.get("api/admin/".concat(t));case 4:r=n.sent,console.log(r.data),r.data.success&&r.data.client&&(a("setClientConfig",r.data.client),a("setClientID",r.data.client._id),localStorage.setItem("clientID",r.data.client._id),"/"!=Fe.currentRoute.path&&Fe.push("/")),n.next=13;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log("this client id is invalid"),a("setErrorMessage","Client ID is invalid");case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()},removeClientID:function(e){var t=e.commit;e.state;localStorage.removeItem("clientID"),t("setClientID",""),t("setClientConfig",null),Fe.push({name:"identify client"})}},Je={state:Ne,getters:Te,mutations:ze,actions:Ye},He={email:"",currentIP:"",fetchedUser:null,submitSuccess:!1,message:""},qe={email:function(e){return e.email},currentIP:function(e){return e.currentIP},fetchedUser:function(e){return e.fetchedUser},submitSuccess:function(e){return e.submitSuccess},isEmailValid:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e.email)},message:function(e){return e.message}},Be={setEmail:function(e,t){e.email=t},setCurrentIP:function(e,t){e.currentIP=t},setFetchedUser:function(e,t){e.fetchedUser=t},setSubmitSuccess:function(e,t){e.submitSuccess=t},setMessage:function(e,t){e.message=t}},We={createUser:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,a=e.getters,t.prev=1,console.log("getters.isEmailValid",a.isEmailValid),a.isEmailValid){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,R.a.post("/api/users/".concat(a.clientID),{email:a.email,ip:a.currentIP});case 7:return r=t.sent,n("setSubmitSuccess",r.data.success),n("setMessage",r.data.msg),n("setFetchedUser",r.data.user),t.abrupt("return",!0);case 14:return t.prev=14,t.t0=t["catch"](1),console.log(t.t0),n("setSubmitSuccess",!1),n("setMessage",t.t0.message),t.abrupt("return",!1);case 20:case"end":return t.stop()}}),t,null,[[1,14]])})))()},updateUser:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.state,s=e.getters,n.prev=1,n.next=4,R.a.put("/api/users/".concat(s.clientID),{email:r.email,ip:r.currentIP,overwriteIP:t});case 4:return i=n.sent,console.log(i.data),a("setSubmitSuccess",i.data.success),a("setMessage",i.data.msg),a("setFetchedUser",i.data.user),n.abrupt("return",!0);case 12:return n.prev=12,n.t0=n["catch"](1),console.log(n.t0),a("setSubmitSuccess",!1),a("setMessage",n.t0.message),n.abrupt("return",!1);case 18:case"end":return n.stop()}}),n,null,[[1,12]])})))()},verifyAuthUrl:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.state,n.prev=1,n.next=4,R.a.put("/api/users/verifyAuthURL/".concat(r.fetchedUser._id),{verification:t});case 4:if(s=n.sent,!s.data.success){n.next=9;break}return a("setSubmitSuccess",s.data.success),a("setMessage",s.data.msg),n.abrupt("return",!0);case 9:return n.abrupt("return",!1);case 12:return n.prev=12,n.t0=n["catch"](1),console.log(n.t0),a("setSubmitSuccess",!1),n.abrupt("return",!1);case 17:case"end":return n.stop()}}),n,null,[[1,12]])})))()}},Ze={state:He,getters:qe,mutations:Be,actions:We};a["a"].use(h["a"]);var Ge=new h["a"].Store({state:{success:!0,errorMessage:""},getters:{isSuccess:function(e){return e.success},errorMessage:function(e){return e.errorMessage}},mutations:{setSuccess:function(e,t){e.success=t},setErrorMessage:function(e,t){e.errorMessage=t}},modules:{Client:Je,User:Ze}});a["a"].config.productionTip=!1,new a["a"]({router:Fe,store:Ge,render:function(e){return e($)}}).$mount("#app")},f2a3:function(e,t,n){}});
//# sourceMappingURL=app.eaaf0e9a.js.map