(function(e){function t(t){for(var r,i,c=t[0],o=t[1],u=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1f41":function(e,t,n){"use strict";var r=n("7a14"),a=n.n(r);a.a},"206d":function(e,t,n){"use strict";var r=n("4413"),a=n.n(r);a.a},"21bb":function(e,t,n){"use strict";var r=n("2dad"),a=n.n(r);a.a},"2b8f":function(e,t,n){},"2dad":function(e,t,n){},4413:function(e,t,n){},"4d12":function(e,t,n){},5452:function(e,t,n){"use strict";var r=n("af35"),a=n.n(r);a.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},6286:function(e,t,n){"use strict";var r=n("2b8f"),a=n.n(r);a.a},"7a14":function(e,t,n){},"86b4":function(e,t,n){},"8fca":function(e,t,n){e.exports=n.p+"img/micad_prelauncher_logo.174f579d.svg"},"9c0c":function(e,t,n){},a4e1:function(e,t,n){"use strict";var r=n("4d12"),a=n.n(r);a.a},af35:function(e,t,n){},b351:function(e,t,n){"use strict";var r=n("f2a3"),a=n.n(r);a.a},c4e7:function(e,t,n){"use strict";var r=n("86b4"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header",{staticClass:"header"}),n("div",{staticClass:"grid__wrapper"},[n("app-nav",{staticClass:"grid__item grid__item--menu"}),n("app-content",{staticClass:"grid__item grid__item--view"})],1)],1)},s=[],i=(n("b0c0"),n("96cf"),n("1da1")),c=n("5530"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("div",{staticClass:"header__title"},[e.$store.getters.clientConfig?n("div",{staticClass:"header__title--main"},[e._v(" "+e._s(e.$store.getters.clientConfig.header)+" ")]):n("div",{staticClass:"header__title--main"},[e._v(" Pre-launch, Client not Identified ")]),n("div",{staticClass:"header__title--sub"},[e._v(" Our place is your new space ")])])])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header__logo"},[r("img",{attrs:{src:n("8fca"),alt:""}})])}],l={},d=l,f=(n("5452"),n("2877")),p=Object(f["a"])(d,o,u,!1,null,null,null),m=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.getters.clientConfig?n("div",{staticClass:"nav__wrapper"},[n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"welcome"==e.$route.name},attrs:{to:"/",tag:"a"}},[n("span",[e._v("Welcome")])]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"details"==e.$route.name},attrs:{to:"/details",tag:"a"}},[e._v("Your Details")]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"instructions"==e.$route.name},attrs:{to:"/instructions",tag:"a"}},[e._v("Instructions")]),n("a",{staticClass:"nav__link",on:{click:function(t){return e.openWindow(e.$store.getters.clientConfig.faq)}}},[e._v("On-boarding FAQ")]),n("a",{staticClass:"nav__link",on:{click:function(t){return e.openWindow(e.$store.getters.clientConfig.releaseNotes)}}},[e._v("Release Notes")]),n("a",{staticClass:"nav__link",on:{click:function(t){return e.openWindow("https://micad.co.uk/")}}},[e._v("micad Website")]),n("a",{staticClass:"nav__link",on:{click:function(t){return e.openWindow("https://support.zoho.com/portal/micad/en/signin")}}},[e._v("Contact Support")]),n("a",{staticClass:"nav__link",attrs:{href:"#"},on:{click:e.removeClientID}},[e._v("Change Client")])],1):n("div",{staticClass:"nav__wrapper"},[n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"identify client"==e.$route.name},attrs:{to:"/login",tag:"a"}},[e._v("Identify Client")])],1)])},_=[],h=n("2f62"),g={methods:Object(c["a"])(Object(c["a"])({},Object(h["b"])(["removeClientID"])),{},{openWindow:function(e){window.open(e,"_blank")}})},b=g,C=(n("a4e1"),Object(f["a"])(b,v,_,!1,null,null,null)),w=C.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"heading-primary--sub-big u-margin-bottom-medium"},[e._v(" "+e._s(e.$route.name)+" ")]),n("router-view")],1)},x=[],O={},D=O,I=Object(f["a"])(D,y,x,!1,null,null,null),k=I.exports,j=r["a"].extend({name:"App",components:{appHeader:m,appNav:w,appContent:k},methods:Object(c["a"])({},Object(h["b"])(["fetchClient"])),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$store.getters.isClientIdentified){t.next=5;break}return t.next=3,e.fetchClient(e.$store.getters.clientID);case 3:t.next=6;break;case 5:"identify client"!==e.$route.name&&e.$router.push({name:"identify client"});case 6:case"end":return t.stop()}}),t)})))()}}),S=j,P=(n("5c0b"),Object(f["a"])(S,a,s,!1,null,null,null)),U=P.exports,$=n("bc3a"),R=n.n($),E=n("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$store.state.Client.clientConfig?n("div",[n("h1",[e._v("Hello "),n("span",{staticClass:"client-name"},[e._v(e._s(e.$store.getters.clientConfig.clientName))]),e._v(" user")]),n("p",{staticClass:"message"},[e._v(e._s(e.$store.getters.clientConfig.welcomeText))]),e.$store.state.Client.clientConfig?n("app-countdown",{attrs:{launchDate:e.launchDate,urls:e.$store.state.Client.clientConfig.urls}}):e._e()],1):e._e()},A=[],L=(n("a15b"),n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-countdown"},[e.launchDate?n("div",[e.isLaunched?n("h1",{staticClass:"countdown"},[e._v("Your micad system was Launched on "),n("span",{staticClass:"countdown__date"},[e._v(e._s(e.prettyLaunchDate))])]):n("h1",{staticClass:"countdown"},[n("span",{staticClass:"countdown__days"},[e._v(e._s(e.remainingDays))]),e._v(" day"),e.isOneDayLeft?e._e():n("span",[e._v("s")]),e._v(" to launch date on "),n("span",{staticClass:"countdown__date"},[e._v(e._s(e.prettyLaunchDate))])])]):n("h1",{staticClass:"countdown"},[e._v("Launch date hasn't been set yet")]),e.launchDate&&e.isLaunched?n("h3",{staticClass:"heading-primary--sub"},[e._v("Your URLs are:")]):n("h3",{staticClass:"heading-primary--sub"},[e._v("Your URLs will be:")]),e._l(e.urls,(function(t,r){return n("div",{key:r,staticClass:"url-grid"},[n("div",{staticClass:"url-grid__item url-grid__item--title"},[e._v(e._s(t.title)+":")]),n("a",{staticClass:"url-grid__item url-grid__item--url",attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.url))])])}))],2)}),F=[],V=(n("99af"),n("b680"),n("5319"),r["a"].extend({props:["launchDate","urls"],data:function(){return{verified:!1,urlsValidation:[]}},computed:{prettyLaunchDate:function(){return"".concat(this.monthOfLaunchDate," ").concat(this.launchDate.getDate(),", ").concat(this.launchDate.getFullYear())},monthOfLaunchDate:function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e[this.launchDate.getMonth()]},remainingDays:function(){var e=864e5,t=new Date;t.setMilliseconds(0),t.setSeconds(0),t.setHours(0),this.launchDate.setMilliseconds(0),this.launchDate.setSeconds(0),this.launchDate.setHours(0);var n=(Math.round(this.launchDate.getTime()-t.getTime())/e).toFixed(0);return n},isOneDayLeft:function(){return 1==this.remainingDays},isLaunched:function(){return this.remainingDays<1}},filters:{shortenUrl:function(e){return e.replace("https://","").replace(".micadipr.net/","")}},methods:{validateUrl:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.get(e);case 3:return n=t.sent,console.log(n),t.abrupt("return",!0);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},openTab:function(e){window.open(e,"_blank")}}})),T=V,N=(n("b351"),Object(f["a"])(T,L,F,!1,null,null,null)),W=N.exports,z=r["a"].extend({components:{appCountdown:W},computed:{launchDate:function(){if(this.$store.state.Client.clientConfig.launchDate){var e=this.$store.state.Client.clientConfig.launchDate.split("-").join("/");return new Date(e)}return null}}}),Y=z,J=(n("21bb"),Object(f["a"])(Y,M,A,!1,null,null,null)),H=J.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",attrs:{action:"#"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"form__group client-selection client-selection__display"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.clientID,expression:"clientID"}],staticClass:"form__input client-selection__input",attrs:{type:"text",placeholder:"Client ID",id:"clientID",required:""},domProps:{value:e.clientID},on:{input:function(t){t.target.composing||(e.clientID=t.target.value)}}}),n("button",{staticClass:"button button-copy-to-clipboard",on:{click:function(t){return t.preventDefault(),e.pasteFromClipboard(t)}}},[e._v("paste from clipboard")])]),n("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.fetchClient(e.clientID)}}},[e._v(" Submit ")])])])},B=[],Z={data:function(){return{clientID:""}},methods:Object(c["a"])(Object(c["a"])({},Object(h["b"])(["fetchClient"])),{},{pasteFromClipboard:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.clipboard.readText();case 2:e.clientID=t.sent;case 3:case"end":return t.stop()}}),t)})))()}})},G=Z,Q=(n("206d"),Object(f["a"])(G,q,B,!1,null,null,null)),K=Q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-broswer-detail",{staticClass:"u-margin-bottom-medium"}),""!=e.$store.getters.currentIP?n("app-form"):e._e(),n("div",{staticClass:"message"},[e._v(" Type your email to see if you have recorded this IP in our system. Press submit if you want to have your current IP recorded. ")])],1)},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",attrs:{action:"#"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"form__group"},[n("input",{staticClass:"form__input form__input--email",attrs:{type:"email",placeholder:"Email address",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){return e.setEmail(t.target.value)}}})]),e.ipAlreadyRecorded||e.submitSuccess?e._e():n("div",{staticClass:"form__group"},[e.fetchedUser?n("div",[n("button",{staticClass:"button button-add",on:{click:function(t){return e.updateUser(!1)}}},[e._v(" Add IP ")]),n("button",{staticClass:"button button-overwrite",on:{click:function(t){return e.updateUser(!0)}}},[e._v(" Overwrite IPS ")])]):n("button",{staticClass:"button",on:{click:e.createUser}},[e._v(" Submit ")])]),n("div",{staticClass:"form__group"},[e.ipAlreadyRecorded&&!e.submitSuccess?n("div",{staticClass:"alert alert--invalid"},[e._v("This IP has already been recorded!")]):e._e(),e.submitSuccess?n("div",{staticClass:"alert alert--success"},[e._v(e._s(e.message))]):e._e()]),e.submitSuccess||e.ipAlreadyRecorded?n("div",{staticClass:"auth-verify u-margin-bottom-small"},[n("div",{staticClass:"auth-verify__url"},[n("span",{staticClass:"auth-verify__url--title"},[e._v(" Auth URL: ")]),n("a",{staticClass:"auth-verify__url--path",attrs:{href:e.$store.getters.clientConfig.authUrl}},[e._v(e._s(e.$store.getters.clientConfig.authUrl))])]),n("div",{staticClass:"auth-verify__verification"},[n("span",{staticClass:"auth-verify__verification--text"},[e._v("Verify: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.verify,expression:"verify"}],staticClass:"auth-verify__verification--input form__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.verify)?e._i(e.verify,null)>-1:e.verify},on:{change:function(t){var n=e.verify,r=t.target,a=!!r.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);r.checked?i<0&&(e.verify=n.concat([s])):i>-1&&(e.verify=n.slice(0,i).concat(n.slice(i+1)))}else e.verify=a}}})])]):e._e()])])},ne=[],re=(n("c740"),r["a"].extend({data:function(){return{loadedUser:!1,verify:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(h["c"])(["email","fetchedUser","currentIP","submitSuccess","isEmailValid","message"])),{},{ipAlreadyRecorded:function(){var e=this;if(!this.fetchedUser)return!1;var t=this.fetchedUser.ips.findIndex((function(t){return t.ip==e.currentIP}));return-1!=t}}),methods:Object(c["a"])(Object(c["a"])({},Object(h["d"])(["setEmail","setFetchedUser","setMessage","setSubmitSuccess"])),Object(h["b"])(["createUser","updateUser","verifyAuthUrl"])),watch:{"$store.state.User.email":function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.setSubmitSuccess(!1),!e.isEmailValid){t.next=10;break}return console.log("valid email"),t.next=5,R.a.get("/api/users/".concat(e.$store.getters.clientID,"/").concat(e.email));case 5:n=t.sent,e.setFetchedUser(n.data.user),n.data.user&&(r=e.fetchedUser.ips.findIndex((function(t){return t.ip==e.currentIP})),console.log("index",r),-1==r?e.verify=!1:(console.log("setting to: ",e.fetchedUser.ips[r].authUrlVerified),e.verify=e.fetchedUser.ips[r].authUrlVerified),e.loadedUser=!0),t.next=14;break;case 10:console.log("email not valid"),e.setFetchedUser(null),e.loadedUser=!1,e.verify=!1;case 14:case"end":return t.stop()}}),t)})))()},verify:function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,console.log("newVal",e),console.log("oldVal",t),null==t){r.next=10;break}if(console.log("verification changed"),!n.loadedUser&&!n.submitSuccess){r.next=10;break}return r.next=8,n.verifyAuthUrl(e);case 8:a=r.sent,console.log(a);case 10:r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log(r.t0),n.verify=!1;case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}})),ae=re,se=(n("c4e7"),Object(f["a"])(ae,te,ne,!1,null,null,null)),ie=se.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"details"},[e.currentIP?n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Your IP:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.currentIP))])]):e._e(),n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("OS:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.platform.os.family)+" "+e._s(e.platform.os.version))])]),e.platform.product?n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Device:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.platform.product))])]):e._e(),n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Browser:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.platform.name)+" "+e._s(e.platform.version))])]),n("div",{staticClass:"detail"},[n("h4",{staticClass:"detail__text"},[e._v("Screen Size:")]),n("h4",{staticClass:"detail__text detail__text-value"},[e._v(e._s(e.screenSize))])])])])},oe=[],ue=n("e04c"),le=n.n(ue),de={computed:Object(c["a"])(Object(c["a"])({},Object(h["c"])(["currentIP","submitSuccess","currentPlatform"])),{},{platform:function(){return Object(c["a"])({},le.a)},screenSize:function(){return"".concat(window.screen.width," x ").concat(window.screen.height)}}),methods:Object(c["a"])({},Object(h["d"])(["setCurrentIP","setCurrentPlatform"])),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.get("https://api.ipify.org/?format=json");case 3:n=t.sent,console.log(n),e.setCurrentIP(n.data.ip),e.setCurrentPlatform(Object(c["a"])({},le.a)),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0),e.setCurrentPlatform(Object(c["a"])({},le.a));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},fe=de,pe=(n("6286"),Object(f["a"])(fe,ce,oe,!1,null,null,null)),me=pe.exports,ve=r["a"].extend({components:{appForm:ie,appBroswerDetail:me}}),_e=ve,he=Object(f["a"])(_e,X,ee,!1,null,null,null),ge=he.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"message"},[e._v(e._s(e.$store.getters.clientConfig.instructionsText))])])},Ce=[],we=r["a"].extend({}),ye=we,xe=Object(f["a"])(ye,be,Ce,!1,null,null,null),Oe=xe.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-information")},Ie=[],ke=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},je=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"paragraph"},[e._v(" Preparing you for a smooth transition into our new system! ")]),n("a",{staticClass:"link",attrs:{href:"http://www.updates.micadipr.net/ReleaseNotes/IPR/iprGAReleaseNotes_3_6_0.pdf"}},[n("span",{staticClass:"link__ipr"},[e._v("ipr 3.6")]),e._v(" release notes ")])])}],Se={},Pe=Se,Ue=(n("1f41"),Object(f["a"])(Pe,ke,je,!1,null,null,null)),$e=Ue.exports,Re=r["a"].extend({components:{appInformation:$e}}),Ee=Re,Me=Object(f["a"])(Ee,De,Ie,!1,null,null,null),Ae=Me.exports;r["a"].use(E["a"]);var Le=[{path:"/",name:"welcome",component:H},{path:"/login",name:"identify client",component:K},{path:"/details",name:"details",component:ge},{path:"/instructions",name:"instructions",component:Oe},{path:"/releasenotes",name:"release notes",component:Ae}],Fe=new E["a"]({base:"/",routes:Le});Fe.beforeEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"identify client"===t.name||Ge.getters.isClientIdentified||(console.log("client id not identified"),r({name:"identify client"})),r();case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var Ve=Fe,Te={clientConfig:null,clientID:localStorage.getItem("clientID")||""},Ne={clientID:function(e){return e.clientID},clientConfig:function(e){return e.clientConfig},isClientIdentified:function(e){return""!=e.clientID}},We={setClientConfig:function(e,t){e.clientConfig=t},setClientID:function(e,t){e.clientID=t}},ze={fetchClient:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,R.a.get("api/admin/".concat(t));case 4:a=n.sent,console.log(a.data),a.data.success&&a.data.client&&(r("setClientConfig",a.data.client),r("setClientID",a.data.client._id),localStorage.setItem("clientID",a.data.client._id),"/"!=Ve.currentRoute.path&&Ve.push("/")),n.next=13;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log("this client id is invalid"),r("setErrorMessage","Client ID is invalid");case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()},removeClientID:function(e){var t=e.commit;e.state;localStorage.removeItem("clientID"),t("setClientID",""),t("setClientConfig",null),Ve.push({name:"identify client"})}},Ye={state:Te,getters:Ne,mutations:We,actions:ze},Je={email:"",currentIP:"",currentPlatform:null,fetchedUser:null,submitSuccess:!1,message:""},He={email:function(e){return e.email},currentIP:function(e){return e.currentIP},currentPlatform:function(e){return e.currentPlatform},fetchedUser:function(e){return e.fetchedUser},submitSuccess:function(e){return e.submitSuccess},isEmailValid:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e.email)},message:function(e){return e.message}},qe={setEmail:function(e,t){e.email=t},setCurrentIP:function(e,t){e.currentIP=t},setCurrentPlatform:function(e,t){e.currentPlatform=t},setFetchedUser:function(e,t){e.fetchedUser=t},setSubmitSuccess:function(e,t){e.submitSuccess=t},setMessage:function(e,t){e.message=t}},Be={createUser:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.getters,t.prev=1,console.log("getters.isEmailValid",r.isEmailValid),r.isEmailValid){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,R.a.post("/api/users/".concat(r.clientID),{email:r.email,ip:r.currentIP,platform:r.currentPlatform});case 7:return a=t.sent,n("setSubmitSuccess",a.data.success),n("setMessage",a.data.msg),n("setFetchedUser",a.data.user),t.abrupt("return",!0);case 14:return t.prev=14,t.t0=t["catch"](1),console.log(t.t0),n("setSubmitSuccess",!1),n("setMessage",t.t0.message),t.abrupt("return",!1);case 20:case"end":return t.stop()}}),t,null,[[1,14]])})))()},updateUser:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.getters,n.prev=1,n.next=4,R.a.put("/api/users/".concat(a.clientID),{email:a.email,ip:a.currentIP,platform:a.currentPlatform,overwriteIP:t});case 4:return s=n.sent,console.log(s.data),r("setSubmitSuccess",s.data.success),r("setMessage",s.data.msg),r("setFetchedUser",s.data.user),n.abrupt("return",!0);case 12:return n.prev=12,n.t0=n["catch"](1),console.log(n.t0),r("setSubmitSuccess",!1),r("setMessage",n.t0.message),n.abrupt("return",!1);case 18:case"end":return n.stop()}}),n,null,[[1,12]])})))()},verifyAuthUrl:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.getters,n.prev=1,n.next=4,R.a.put("/api/users/verifyAuthURL/".concat(a.fetchedUser._id),{ip:a.currentIP,verification:t});case 4:if(s=n.sent,!s.data.success){n.next=10;break}return r("setSubmitSuccess",s.data.success),r("setMessage",s.data.msg),r("setFetchedUser",s.data.user),n.abrupt("return",!0);case 10:return n.abrupt("return",!1);case 13:return n.prev=13,n.t0=n["catch"](1),console.log(n.t0),r("setSubmitSuccess",!1),n.abrupt("return",!1);case 18:case"end":return n.stop()}}),n,null,[[1,13]])})))()}},Ze={state:Je,getters:He,mutations:qe,actions:Be};r["a"].use(h["a"]);var Ge=new h["a"].Store({state:{success:!0,errorMessage:""},getters:{isSuccess:function(e){return e.success},errorMessage:function(e){return e.errorMessage}},mutations:{setSuccess:function(e,t){e.success=t},setErrorMessage:function(e,t){e.errorMessage=t}},modules:{Client:Ye,User:Ze}});r["a"].config.productionTip=!1,new r["a"]({router:Ve,store:Ge,render:function(e){return e(U)}}).$mount("#app")},f2a3:function(e,t,n){}});
//# sourceMappingURL=app.69aeb6ab.js.map