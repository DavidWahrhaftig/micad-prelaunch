(function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);o&&o(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var o=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0ad1":function(e,t,n){},"2b8f":function(e,t,n){},"4c06":function(e,t,n){"use strict";var r=n("0ad1"),a=n.n(r);a.a},"4d12":function(e,t,n){},5452:function(e,t,n){"use strict";var r=n("af35"),a=n.n(r);a.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},6286:function(e,t,n){"use strict";var r=n("2b8f"),a=n.n(r);a.a},"86b4":function(e,t,n){},"8fca":function(e,t,n){e.exports=n.p+"img/micad_prelauncher_logo.174f579d.svg"},"9c0c":function(e,t,n){},a4e1:function(e,t,n){"use strict";var r=n("4d12"),a=n.n(r);a.a},af35:function(e,t,n){},b351:function(e,t,n){"use strict";var r=n("f2a3"),a=n.n(r);a.a},c4e7:function(e,t,n){"use strict";var r=n("86b4"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header",{staticClass:"header"}),n("router-view")],1)},s=[],i=(n("96cf"),n("1da1")),c=n("5530"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("div",{staticClass:"header__title"},[e.$store.getters.clientConfig?n("div",{staticClass:"header__title--main"},[e._v(" "+e._s(e.$store.getters.clientConfig.header)+" ")]):n("div",{staticClass:"header__title--main"},[e._v(" Pre-launch, Client not Identified ")]),n("div",{staticClass:"header__title--sub"},[e._v(" Our place is your new space ")])])])},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header__logo"},[r("img",{attrs:{src:n("8fca"),alt:""}})])}],o={},d=o,f=(n("5452"),n("2877")),m=Object(f["a"])(d,u,l,!1,null,null,null),p=m.exports,v=n("2f62"),_=r["a"].extend({name:"App",components:{appHeader:p},methods:Object(c["a"])({},Object(v["b"])(["fetchClient"])),created:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}),h=_,g=(n("5c0b"),Object(f["a"])(h,a,s,!1,null,null,null)),b=g.exports,C=n("bc3a"),w=n.n(C),y=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$store.getters.clientConfig?n("div",[n("h1",[e._v("Hello "),n("span",{staticClass:"client-name"},[e._v(e._s(e.$store.getters.clientConfig.clientName))]),e._v(" user")]),n("p",{staticClass:"message"},[e._v(e._s(e.$store.getters.clientConfig.welcomeText))]),e.$store.getters.clientConfig?n("app-countdown",{attrs:{launchDate:e.launchDate,urls:e.$store.getters.clientConfig.urls}}):e._e()],1):e._e()},I=[],D=(n("a15b"),n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-countdown"},[e.launchDate?n("div",[e.isLaunched?n("h1",{staticClass:"countdown"},[e._v("Your micad system was Launched on "),n("span",{staticClass:"countdown__date"},[e._v(e._s(e.prettyLaunchDate))])]):n("h1",{staticClass:"countdown"},[n("span",{staticClass:"countdown__days"},[e._v(e._s(e.remainingDays))]),e._v(" day"),e.isOneDayLeft?e._e():n("span",[e._v("s")]),e._v(" to launch date on "),n("span",{staticClass:"countdown__date"},[e._v(e._s(e.prettyLaunchDate))])])]):n("h1",{staticClass:"countdown"},[e._v("Launch date hasn't been set yet")]),e.launchDate&&e.isLaunched?n("h3",{staticClass:"heading-primary--sub"},[e._v("Your URLs are:")]):n("h3",{staticClass:"heading-primary--sub"},[e._v("Your URLs will be:")]),e._l(e.urls,(function(t,r){return n("div",{key:r,staticClass:"url-grid"},[n("div",{staticClass:"url-grid__item url-grid__item--title"},[e._v(e._s(t.title)+":")]),n("a",{staticClass:"url-grid__item url-grid__item--url",attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.url))])])}))],2)}),O=[],k=(n("99af"),n("b680"),n("5319"),r["a"].extend({props:["launchDate","urls"],data:function(){return{verified:!1,urlsValidation:[]}},computed:{prettyLaunchDate:function(){return"".concat(this.monthOfLaunchDate," ").concat(this.launchDate.getDate(),", ").concat(this.launchDate.getFullYear())},monthOfLaunchDate:function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e[this.launchDate.getMonth()]},remainingDays:function(){var e=864e5,t=new Date;t.setMilliseconds(0),t.setSeconds(0),t.setHours(0),this.launchDate.setMilliseconds(0),this.launchDate.setSeconds(0),this.launchDate.setHours(0);var n=(Math.round(this.launchDate.getTime()-t.getTime())/e).toFixed(0);return n},isOneDayLeft:function(){return 1==this.remainingDays},isLaunched:function(){return this.remainingDays<1}},filters:{shortenUrl:function(e){return e.replace("https://","").replace(".micadipr.net/","")}},methods:{validateUrl:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.a.get(e);case 3:return n=t.sent,console.log(n),t.abrupt("return",!0);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},openTab:function(e){window.open(e,"_blank")}}})),j=k,S=(n("b351"),Object(f["a"])(j,D,O,!1,null,null,null)),P=S.exports,U=r["a"].extend({components:{appCountdown:P},computed:{launchDate:function(){if(this.$store.state.Client.clientConfig.launchDate){var e=this.$store.state.Client.clientConfig.launchDate.split("-").join("/");return new Date(e)}return null}}}),$=U,R=(n("4c06"),Object(f["a"])($,x,I,!1,null,null,null)),E=R.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-broswer-detail",{staticClass:"u-margin-bottom-medium"}),""!=e.$store.getters.currentIP?n("app-form"):e._e(),n("div",{staticClass:"message"},[e._v(" Type your email to see if you have recorded this IP in our system. Press submit if you want to have your current IP recorded. ")])],1)},A=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",attrs:{action:"#"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"form__group"},[n("input",{staticClass:"form__input form__input--email",attrs:{type:"email",placeholder:"Email address",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){return e.setEmail(t.target.value)}}})]),e.ipAlreadyRecorded||e.submitSuccess?e._e():n("div",{staticClass:"form__group"},[e.fetchedUser?n("div",[n("button",{staticClass:"button button-add",on:{click:function(t){return e.updateUser(!1)}}},[e._v(" Add IP ")]),n("button",{staticClass:"button button-overwrite",on:{click:function(t){return e.updateUser(!0)}}},[e._v(" Overwrite IPS ")])]):n("button",{staticClass:"button",on:{click:e.createUser}},[e._v(" Submit ")])]),n("div",{staticClass:"form__group"},[e.ipAlreadyRecorded&&!e.submitSuccess?n("div",{staticClass:"alert alert--invalid"},[e._v("This IP has already been recorded!")]):e._e(),e.submitSuccess?n("div",{staticClass:"alert alert--success"},[e._v(e._s(e.message))]):e._e()]),e.$store.getters.clientConfig.ssoEnable&&(e.submitSuccess||e.ipAlreadyRecorded)?n("div",{staticClass:"auth-verify u-margin-bottom-small"},[n("div",{staticClass:"auth-verify__url"},[n("span",{staticClass:"auth-verify__url--title"},[e._v(" Auth URL: ")]),n("a",{staticClass:"auth-verify__url--path",attrs:{href:e.$store.getters.clientConfig.authUrl}},[e._v(e._s(e.$store.getters.clientConfig.authUrl))])]),n("div",{staticClass:"auth-verify__verification"},[n("span",{staticClass:"auth-verify__verification--text"},[e._v("Verify: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.verify,expression:"verify"}],staticClass:"auth-verify__verification--input form__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.verify)?e._i(e.verify,null)>-1:e.verify},on:{change:function(t){var n=e.verify,r=t.target,a=!!r.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);r.checked?i<0&&(e.verify=n.concat([s])):i>-1&&(e.verify=n.slice(0,i).concat(n.slice(i+1)))}else e.verify=a}}})])]):e._e()])])},F=[],V=(n("c740"),r["a"].extend({data:function(){return{loadedUser:!1,verify:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(v["c"])(["email","fetchedUser","currentIP","submitSuccess","isEmailValid","message"])),{},{ipAlreadyRecorded:function(){var e=this;if(!this.fetchedUser)return!1;var t=this.fetchedUser.ips.findIndex((function(t){return t.ip==e.currentIP}));return-1!=t}}),methods:Object(c["a"])(Object(c["a"])({},Object(v["d"])(["setEmail","setFetchedUser","setMessage","setSubmitSuccess"])),Object(v["b"])(["createUser","updateUser","verifyAuthUrl"])),watch:{"$store.state.User.email":function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.setSubmitSuccess(!1),!e.isEmailValid){t.next=10;break}return console.log("valid email"),t.next=5,w.a.get("/api/users/".concat(e.$store.getters.clientID,"/").concat(e.email));case 5:n=t.sent,e.setFetchedUser(n.data.user),n.data.user&&(r=e.fetchedUser.ips.findIndex((function(t){return t.ip==e.currentIP})),console.log("index",r),-1==r?e.verify=!1:(console.log("setting to: ",e.fetchedUser.ips[r].authUrlVerified),e.verify=e.fetchedUser.ips[r].authUrlVerified),e.loadedUser=!0),t.next=14;break;case 10:console.log("email not valid"),e.setFetchedUser(null),e.loadedUser=!1,e.verify=!1;case 14:case"end":return t.stop()}}),t)})))()},verify:function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,console.log("newVal",e),console.log("oldVal",t),null==t){r.next=10;break}if(console.log("verification changed"),!n.loadedUser&&!n.submitSuccess){r.next=10;break}return r.next=8,n.verifyAuthUrl(e);case 8:a=r.sent,console.log(a);case 10:r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log(r.t0),n.verify=!1;case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}})),T=V,z=(n("c4e7"),Object(f["a"])(T,L,F,!1,null,null,null)),N=z.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"details"},[e.currentIP?n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Your IP:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.currentIP))])]):e._e(),n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("OS:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.platform.os.family)+" "+e._s(e.platform.os.version))])]),e.platform.product?n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Device:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.platform.product))])]):e._e(),n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Browser:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.platform.name)+" "+e._s(e.platform.version))])]),n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Screen Size:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.screenSize))])])])])},J=[],H=n("0a64"),q=n.n(H),B={computed:Object(c["a"])(Object(c["a"])({},Object(v["c"])(["currentIP","submitSuccess","currentPlatform"])),{},{platform:function(){return Object(c["a"])({},q.a)},screenSize:function(){return"".concat(window.screen.width," x ").concat(window.screen.height)}}),methods:Object(c["a"])({},Object(v["d"])(["setCurrentIP","setCurrentPlatform"])),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.a.get("https://api.ipify.org/?format=json");case 3:n=t.sent,console.log(n),e.setCurrentIP(n.data.ip),e.setCurrentPlatform(Object(c["a"])({},q.a)),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0),e.setCurrentPlatform(Object(c["a"])({},q.a));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},W=B,Z=(n("6286"),Object(f["a"])(W,Y,J,!1,null,null,null)),Q=Z.exports,G=r["a"].extend({components:{appForm:N,appBroswerDetail:Q}}),K=G,X=Object(f["a"])(K,M,A,!1,null,null,null),ee=X.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"message"},[e._v(e._s(e.$store.getters.clientConfig.instructionsText))])])},ne=[],re=r["a"].extend({}),ae=re,se=Object(f["a"])(ae,te,ne,!1,null,null,null),ie=se.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid__wrapper"},[n("app-nav",{staticClass:"grid__item grid__item--menu"}),n("app-content",{staticClass:"grid__item grid__item--view"})],1)},ue=[],le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.getters.clientConfig?n("div",{staticClass:"nav__wrapper"},[n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"welcome"==e.$route.name},attrs:{to:{name:"welcome",params:{clientID:e.$store.getters.clientID}},tag:"a"}},[n("span",[e._v("Welcome")])]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"details"==e.$route.name},attrs:{to:{name:"details",params:{clientID:e.$store.getters.clientID}},tag:"a"}},[e._v("Your Details")]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"instructions"==e.$route.name},attrs:{to:{name:"instructions",params:{clientID:e.$store.getters.clientID}},tag:"a"}},[e._v("Instructions")]),n("a",{staticClass:"nav__link",attrs:{href:e.$store.getters.clientConfig.faq,target:"_blank"}},[e._v("On-boarding FAQ")]),n("a",{staticClass:"nav__link",attrs:{href:e.$store.getters.clientConfig.releaseNotes,target:"_blank"}},[e._v("Release Notes")]),n("a",{staticClass:"nav__link",attrs:{href:"https://micad.co.uk/",target:"_blank"}},[e._v("micad Website")]),n("a",{staticClass:"nav__link",attrs:{href:"https://support.zoho.com/portal/micad/en/signin",target:"_blank"}},[e._v("Contact Support")])],1):n("div",{staticClass:"nav__wrapper"},[n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"identify client"==e.$route.name},attrs:{to:"/login",tag:"a"}},[e._v("Identify Client")])],1)])},oe=[],de={methods:Object(c["a"])({},Object(v["b"])(["removeClientID"]))},fe=de,me=(n("a4e1"),Object(f["a"])(fe,le,oe,!1,null,null,null)),pe=me.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"heading-primary--sub-big u-margin-bottom-medium"},[e._v(" "+e._s(e.$route.name)+" ")]),n("router-view")],1)},_e=[],he={},ge=he,be=Object(f["a"])(ge,ve,_e,!1,null,null,null),Ce=be.exports,we=r["a"].extend({name:"App",components:{appNav:pe,appContent:Ce},methods:Object(c["a"])({},Object(v["b"])(["fetchClient"])),created:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}),ye=we,xe=(n("d90c"),Object(f["a"])(ye,ce,ue,!1,null,null,null)),Ie=xe.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"u-margin-top-medium"},[e.message?n("h1",[e._v(e._s(e.message))]):n("h1",[e._v("Invalid Client ID: "+e._s(e.$route.params.clientID))])])},Oe=[],ke=r["a"].extend({name:"InvalidClient",props:["message"]}),je=ke,Se=Object(f["a"])(je,De,Oe,!1,null,null,null),Pe=Se.exports;r["a"].use(y["a"]);var Ue=[{path:"/:clientID",component:Ie,beforeEnter:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!Je.getters.clientConfig){e.next=4;break}r(),e.next=10;break;case 4:return a=t.params.clientID,console.log("clientID from params ",a),e.next=8,Je.dispatch("fetchClient",a);case 8:s=e.sent,s?(console.log("found client and set its config"),r({name:"welcome",params:{clientID:a}})):(console.log("failed to fetch client"),r({name:"Invalid Client",params:{clientID:a}}));case 10:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}(),children:[{path:"",name:"welcome",component:E},{path:"details",name:"details",component:ee},{path:"instructions",name:"instructions",component:ie},{path:"*",redirect:""}]},{path:"/invalid/:clientID",name:"Invalid Client",component:Pe},{path:"*",name:"Error",component:Pe,props:{message:"Path Error: Path must be in the form 'url/:clientID'"}}],$e=new y["a"]({mode:"history",routes:Ue}),Re=$e,Ee={clientConfig:null,clientID:""},Me={clientID:function(e){return e.clientID},clientConfig:function(e){return e.clientConfig},isClientIdentified:function(e){return""!=e.clientID}},Ae={setClientConfig:function(e,t){e.clientConfig=t},setClientID:function(e,t){e.clientID=t}},Le={fetchClient:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,w.a.get("/api/admin/".concat(t));case 4:return a=n.sent,console.log(a.data),r("setClientConfig",a.data.client),r("setClientID",a.data.client._id),n.abrupt("return",!0);case 11:return n.prev=11,n.t0=n["catch"](1),console.log("this client id is invalid"),r("setErrorMessage","Client ID is invalid"),n.abrupt("return",!1);case 16:case"end":return n.stop()}}),n,null,[[1,11]])})))()},removeClientID:function(e){var t=e.commit;e.state;localStorage.removeItem("clientID"),t("setClientID",""),t("setClientConfig",null),Re.push({name:"identify client"})}},Fe={state:Ee,getters:Me,mutations:Ae,actions:Le},Ve={email:"",currentIP:"",currentPlatform:null,fetchedUser:null,submitSuccess:!1,message:""},Te={email:function(e){return e.email},currentIP:function(e){return e.currentIP},currentPlatform:function(e){return e.currentPlatform},fetchedUser:function(e){return e.fetchedUser},submitSuccess:function(e){return e.submitSuccess},isEmailValid:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e.email)},message:function(e){return e.message}},ze={setEmail:function(e,t){e.email=t},setCurrentIP:function(e,t){e.currentIP=t},setCurrentPlatform:function(e,t){e.currentPlatform=t},setFetchedUser:function(e,t){e.fetchedUser=t},setSubmitSuccess:function(e,t){e.submitSuccess=t},setMessage:function(e,t){e.message=t}},Ne={createUser:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.getters,t.prev=1,console.log("getters.isEmailValid",r.isEmailValid),r.isEmailValid){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,w.a.post("/api/users/".concat(r.clientID),{email:r.email,ip:r.currentIP,platform:r.currentPlatform});case 7:return a=t.sent,n("setSubmitSuccess",a.data.success),n("setMessage",a.data.msg),n("setFetchedUser",a.data.user),t.abrupt("return",!0);case 14:return t.prev=14,t.t0=t["catch"](1),console.log(t.t0),n("setSubmitSuccess",!1),n("setMessage",t.t0.message),t.abrupt("return",!1);case 20:case"end":return t.stop()}}),t,null,[[1,14]])})))()},updateUser:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.getters,n.prev=1,n.next=4,w.a.put("/api/users/".concat(a.clientID),{email:a.email,ip:a.currentIP,platform:a.currentPlatform,overwriteIP:t});case 4:return s=n.sent,console.log(s.data),r("setSubmitSuccess",s.data.success),r("setMessage",s.data.msg),r("setFetchedUser",s.data.user),n.abrupt("return",!0);case 12:return n.prev=12,n.t0=n["catch"](1),console.log(n.t0),r("setSubmitSuccess",!1),r("setMessage",n.t0.message),n.abrupt("return",!1);case 18:case"end":return n.stop()}}),n,null,[[1,12]])})))()},verifyAuthUrl:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.getters,n.prev=1,n.next=4,w.a.put("/api/users/verifyAuthURL/".concat(a.fetchedUser._id),{ip:a.currentIP,verification:t});case 4:if(s=n.sent,!s.data.success){n.next=10;break}return r("setSubmitSuccess",s.data.success),r("setMessage",s.data.msg),r("setFetchedUser",s.data.user),n.abrupt("return",!0);case 10:return n.abrupt("return",!1);case 13:return n.prev=13,n.t0=n["catch"](1),console.log(n.t0),r("setSubmitSuccess",!1),n.abrupt("return",!1);case 18:case"end":return n.stop()}}),n,null,[[1,13]])})))()}},Ye={state:Ve,getters:Te,mutations:ze,actions:Ne};r["a"].use(v["a"]);var Je=new v["a"].Store({state:{success:!0,errorMessage:""},getters:{isSuccess:function(e){return e.success},errorMessage:function(e){return e.errorMessage}},mutations:{setSuccess:function(e,t){e.success=t},setErrorMessage:function(e,t){e.errorMessage=t}},modules:{Client:Fe,User:Ye}});r["a"].config.productionTip=!1,w.a.defaults.baseURL="http://localhost:5000",new r["a"]({router:Re,store:Je,render:function(e){return e(b)}}).$mount("#app")},d90c:function(e,t,n){"use strict";var r=n("ef57"),a=n.n(r);a.a},ef57:function(e,t,n){},f2a3:function(e,t,n){}});
//# sourceMappingURL=app.c5e6e967.js.map