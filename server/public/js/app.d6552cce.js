(function(e){function t(t){for(var a,i,c=t[0],l=t[1],o=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1f41":function(e,t,n){"use strict";var a=n("7a14"),s=n.n(a);s.a},"21bb":function(e,t,n){"use strict";var a=n("2dad"),s=n.n(a);s.a},"2b8f":function(e,t,n){},"2dad":function(e,t,n){},"4d12":function(e,t,n){},5452:function(e,t,n){"use strict";var a=n("af35"),s=n.n(a);s.a},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},6286:function(e,t,n){"use strict";var a=n("2b8f"),s=n.n(a);s.a},"7a14":function(e,t,n){},"86b4":function(e,t,n){},"8fca":function(e,t,n){e.exports=n.p+"img/micad_prelauncher_logo.e9eaadb6.svg"},"9c0c":function(e,t,n){},a4e1:function(e,t,n){"use strict";var a=n("4d12"),s=n.n(a);s.a},af35:function(e,t,n){},b351:function(e,t,n){"use strict";var a=n("f2a3"),s=n.n(a);s.a},c4e7:function(e,t,n){"use strict";var a=n("86b4"),s=n.n(a);s.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header",{staticClass:"header"}),n("div",{staticClass:"grid__wrapper"},[n("app-nav",{staticClass:"grid__item grid__item--menu"}),n("app-content",{staticClass:"grid__item grid__item--view"})],1)],1)},r=[],i=(n("b0c0"),n("96cf"),n("1da1")),c=n("5530"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("div",{staticClass:"header__title"},[e.$store.getters.clientConfig?n("div",{staticClass:"header__title--main"},[e._v(" "+e._s(e.$store.getters.clientConfig.header)+" ")]):n("div",{staticClass:"header__title--main"},[e._v(" Pre-launch, Client not Identified ")]),n("div",{staticClass:"header__title--sub"},[e._v(" Our place is your new space ")])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header__logo"},[a("img",{attrs:{src:n("8fca"),alt:""}})])}],u={},d=u,f=(n("5452"),n("2877")),m=Object(f["a"])(d,l,o,!1,null,null,null),p=m.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.getters.clientConfig?n("div",{staticClass:"nav__wrapper"},[n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"welcome"==e.$route.name},attrs:{to:"/",tag:"a"}},[n("span",[e._v("Welcome")])]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"details"==e.$route.name},attrs:{to:"/details",tag:"a"}},[e._v("Your Details")]),n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"instructions"==e.$route.name},attrs:{to:"/instructions",tag:"a"}},[e._v("Instructions")]),n("a",{staticClass:"nav__link",attrs:{href:e.$store.getters.clientConfig.releaseNotes}},[e._v("Release Notes")]),n("a",{staticClass:"nav__link",attrs:{href:"https://micad.co.uk/"}},[e._v("micad Website")]),n("a",{staticClass:"nav__link",attrs:{href:"https://support.zoho.com/portal/micad/en/signin"}},[e._v("Contact Support")]),n("a",{staticClass:"nav__link",attrs:{href:"#"},on:{click:e.removeClientID}},[e._v("Change Client")])],1):n("div",{staticClass:"nav__wrapper"},[n("router-link",{staticClass:"nav__link",class:{"nav__link-current":"identify client"==e.$route.name},attrs:{to:"/login",tag:"a"}},[e._v("Identify Client")])],1)])},v=[],h=n("2f62"),g={methods:Object(c["a"])({},Object(h["b"])(["removeClientID"]))},b=g,C=(n("a4e1"),Object(f["a"])(b,_,v,!1,null,null,null)),w=C.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"heading-primary--sub-big u-margin-bottom-medium"},[e._v(" "+e._s(e.$route.name)+" ")]),n("router-view")],1)},x=[],I={},O=I,D=Object(f["a"])(O,y,x,!1,null,null,null),j=D.exports,k=a["a"].extend({name:"App",components:{appHeader:p,appNav:w,appContent:j},methods:Object(c["a"])({},Object(h["b"])(["fetchClient"])),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$store.getters.isClientIdentified){t.next=5;break}return t.next=3,e.fetchClient(e.$store.getters.clientID);case 3:t.next=6;break;case 5:"identify client"!==e.$route.name&&e.$router.push({name:"identify client"});case 6:case"end":return t.stop()}}),t)})))()}}),$=k,P=(n("5c0b"),Object(f["a"])($,s,r,!1,null,null,null)),S=P.exports,E=n("bc3a"),U=n.n(E),R=n("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$store.state.Client.clientConfig?n("div",[n("h1",[e._v("Hello "),n("span",{staticClass:"client-name"},[e._v(e._s(e.$store.getters.clientConfig.clientName))]),e._v(" user")]),n("p",{staticClass:"message"},[e._v(e._s(e.$store.getters.clientConfig.welcomeText))]),e.$store.state.Client.clientConfig?n("app-countdown",{attrs:{launchDate:new Date(e.$store.state.Client.clientConfig.launchDate),urls:e.$store.state.Client.clientConfig.urls}}):e._e()],1):e._e()},A=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-countdown"},[e.isLaunched?n("h1",{staticClass:"countdown"},[e._v("Your micad system was Launched on "),n("span",{staticClass:"countdown__date"},[e._v(e._s(e.prettyLaunchDate))])]):n("h1",{staticClass:"countdown"},[n("span",{staticClass:"countdown__days"},[e._v(e._s(e.remainingDays))]),e._v(" days to launch date on "),n("span",{staticClass:"countdown__date"},[e._v(e._s(e.prettyLaunchDate))])]),n("div",{staticClass:"url-grid-auth u-margin-bottom-small"},[n("div",{staticClass:"url-grid__item url-grid__item--title"},[e._v("auth URL:")]),n("a",{staticClass:"url-grid__item url-grid__item--url",attrs:{href:e.$store.getters.clientConfig.authUrl}},[e._v(e._s(e.$store.getters.clientConfig.authUrl))]),n("div",{staticClass:"verify"},[e._v("Verify "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.verified,expression:"verified"}],staticClass:"form__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.verified)?e._i(e.verified,null)>-1:e.verified},on:{change:function(t){var n=e.verified,a=t.target,s=!!a.checked;if(Array.isArray(n)){var r=null,i=e._i(n,r);a.checked?i<0&&(e.verified=n.concat([r])):i>-1&&(e.verified=n.slice(0,i).concat(n.slice(i+1)))}else e.verified=s}}})])]),n("div",[e.isLaunched?n("h3",{staticClass:"heading-primary--sub"},[e._v("Your URLs are:")]):n("h3",{staticClass:"heading-primary--sub"},[e._v("Your URLs will be:")])]),e._l(e.urls,(function(t,a){return n("div",{key:a,staticClass:"url-grid"},[n("div",{staticClass:"url-grid__item url-grid__item--title"},[e._v(e._s(t.title)+":")]),n("a",{staticClass:"url-grid__item url-grid__item--url"},[e._v(e._s(t.url))])])}))],2)},L=[],N=(n("99af"),n("b680"),n("ac1f"),n("5319"),a["a"].extend({props:["launchDate","urls"],data:function(){return{verified:!1}},computed:{prettyLaunchDate:function(){return"".concat(this.monthOfLaunchDate," ").concat(this.launchDate.getDate(),", ").concat(this.launchDate.getFullYear())},monthOfLaunchDate:function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e[this.launchDate.getMonth()]},remainingDays:function(){var e=864e5,t=new Date;t.setMilliseconds(0),t.setSeconds(0),t.setHours(0),this.launchDate.setMilliseconds(0),this.launchDate.setSeconds(0),this.launchDate.setHours(0);var n=(Math.round(this.launchDate.getTime()-t.getTime())/e).toFixed(0);return n},isLaunched:function(){return this.remainingDays<1}},filters:{shortenUrl:function(e){return e.replace("https://","").replace(".micadipr.net/","")}}})),F=N,T=(n("b351"),Object(f["a"])(F,V,L,!1,null,null,null)),Y=T.exports,J=a["a"].extend({components:{appCountdown:Y}}),H=J,z=(n("21bb"),Object(f["a"])(H,M,A,!1,null,null,null)),B=z.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",attrs:{action:"#"}},[n("div",{staticClass:"form__group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.clientID,expression:"clientID"}],staticClass:"form__input",attrs:{type:"text",placeholder:"Client ID",id:"clientID",required:""},domProps:{value:e.clientID},on:{input:function(t){t.target.composing||(e.clientID=t.target.value)}}})]),n("button",{staticClass:"form__btn form__btn-submit",on:{click:function(t){return t.preventDefault(),e.fetchClient(e.clientID)}}},[e._v(" Submit ")])])])},q=[],Z={data:function(){return{clientID:""}},methods:Object(c["a"])({},Object(h["b"])(["fetchClient"]))},G=Z,K=Object(f["a"])(G,W,q,!1,null,null,null),Q=K.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-broswer-detail",{staticClass:"u-margin-bottom-medium"}),n("app-form"),n("div",{staticClass:"message"},[e._v(" Type your email to see if you have recorded this IP in our system. Press submit if you want to have your current IP recorded. ")])],1)},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form",attrs:{action:"#"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"form__group"},[n("input",{staticClass:"form__input",attrs:{type:"email",placeholder:"Email address",id:"email",disabled:e.submitSuccess,required:""},domProps:{value:e.email},on:{input:function(t){return e.setEmail(t.target.value)}}})]),e.ipAlreadyRecorded||e.submitSuccess?n("div",{staticClass:"form__group"},[n("div",{staticClass:"alert alert--success",class:{"alert--invalid":e.ipAlreadyRecorded}},[e._v(e._s(e.message))])]):n("div",{staticClass:"form__group"},[e.fetchedUser?n("div",[n("button",{staticClass:"button button-add",on:{click:function(t){return e.updateUser(!1)}}},[e._v(" Add IP ")]),n("button",{staticClass:"button button-overwrite",on:{click:function(t){return e.updateUser(!0)}}},[e._v(" Overwrite IPS ")])]):n("button",{staticClass:"button",on:{click:e.createUser}},[e._v(" Submit ")])])])])},ne=[],ae=(n("caad"),n("2532"),a["a"].extend({computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(h["e"])({email:function(e){return e.User.email}})),Object(h["c"])(["fetchedUser","currentIP","submitSuccess","isEmailValid","message"])),{},{ipAlreadyRecorded:function(){return!!this.fetchedUser&&this.fetchedUser.ips.includes(this.currentIP)}}),watch:{"$store.state.User.email":function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isEmailValid){t.next=8;break}return console.log("valid email"),t.next=4,U.a.get("/api/users/".concat(e.$store.getters.clientID,"/").concat(e.email));case 4:n=t.sent,e.setFetchedUser(n.data.user),t.next=10;break;case 8:console.log("email not valid"),e.setFetchedUser(null);case 10:case"end":return t.stop()}}),t)})))()},ipAlreadyRecorded:function(e,t){e&&this.setMessage("This IP has already been recorded!")}},methods:Object(c["a"])(Object(c["a"])({},Object(h["d"])(["setEmail","setFetchedUser","setMessage"])),Object(h["b"])(["createUser","updateUser"]))})),se=ae,re=(n("c4e7"),Object(f["a"])(se,te,ne,!1,null,null,null)),ie=re.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"detail"},[""==e.currentIP||e.submitSuccess?e._e():n("h4",{staticClass:"detail__text"},[e._v("Your IP: "),n("span",{staticClass:"detail__text-value"},[e._v(e._s(e.currentIP))])]),e._m(0),e._m(1),e._m(2)])])},le=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",{staticClass:"detail__text"},[e._v("Browser: "),n("span",{staticClass:"detail__text-value"},[e._v('"Chrome"')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",{staticClass:"detail__text"},[e._v("Browser Version: "),n("span",{staticClass:"detail__text-value"},[e._v('"Version"')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",{staticClass:"detail__text"},[e._v("OS: "),n("span",{staticClass:"detail__text-value"},[e._v('"Windows 10"')])])}],oe={computed:Object(c["a"])(Object(c["a"])({},Object(h["c"])(["currentIP","submitSuccess"])),{},{browserDetails:function(){return{nVer:navigator.appVersion,nAgt:navigator.userAgent,browserName:navigator.appName,fullVersion:""+parseFloat(navigator.appVersion),majorVersion:parseInt(navigator.appVersion,10)}}}),methods:Object(c["a"])({},Object(h["d"])(["setCurrentIP"])),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U.a.get("https://api.ipify.org/?format=json");case 2:n=t.sent,console.log(n),e.setCurrentIP(n.data.ip);case 5:case"end":return t.stop()}}),t)})))()}},ue=oe,de=(n("6286"),Object(f["a"])(ue,ce,le,!1,null,null,null)),fe=de.exports,me=a["a"].extend({components:{appForm:ie,appBroswerDetail:fe}}),pe=me,_e=Object(f["a"])(pe,X,ee,!1,null,null,null),ve=_e.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"message"},[e._v(e._s(e.$store.getters.clientConfig.instructionsText))])])},ge=[],be=a["a"].extend({}),Ce=be,we=Object(f["a"])(Ce,he,ge,!1,null,null,null),ye=we.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-information")},Ie=[],Oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},De=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"paragraph"},[e._v(" Preparing you for a smooth transition into our new system! ")]),n("a",{staticClass:"link",attrs:{href:"http://www.updates.micadipr.net/ReleaseNotes/IPR/iprGAReleaseNotes_3_6_0.pdf"}},[n("span",{staticClass:"link__ipr"},[e._v("ipr 3.6")]),e._v(" release notes ")])])}],je={},ke=je,$e=(n("1f41"),Object(f["a"])(ke,Oe,De,!1,null,null,null)),Pe=$e.exports,Se=a["a"].extend({components:{appInformation:Pe}}),Ee=Se,Ue=Object(f["a"])(Ee,xe,Ie,!1,null,null,null),Re=Ue.exports;a["a"].use(R["a"]);var Me=[{path:"/",name:"welcome",component:B},{path:"/login",name:"identify client",component:Q},{path:"/details",name:"details",component:ve},{path:"/instructions",name:"instructions",component:ye},{path:"/releasenotes",name:"release notes",component:Re}],Ae=new R["a"]({base:"/",routes:Me});Ae.beforeEach((function(e,t,n){"identify client"===e.name||qe.getters.isClientIdentified||(console.log("client id not identified"),n({name:"identify client"})),n()}));var Ve=Ae,Le={clientConfig:null,clientID:localStorage.getItem("clientID")||""},Ne={clientID:function(e){return e.clientID},clientConfig:function(e){return e.clientConfig},isClientIdentified:function(e){return""!=e.clientID}},Fe={setClientConfig:function(e,t){e.clientConfig=t},setClientID:function(e,t){e.clientID=t}},Te={fetchClient:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.prev=1,n.next=4,U.a.get("api/admin/".concat(t));case 4:s=n.sent,console.log(s.data),s.data.success&&s.data.client&&(a("setClientConfig",s.data.client),a("setClientID",s.data.client._id),localStorage.setItem("clientID",s.data.client._id),"/"!=Ve.currentRoute.path&&Ve.push("/")),n.next=13;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log("this client id is invalid"),a("setErrorMessage","Client ID is invalid");case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()},removeClientID:function(e){var t=e.commit;e.state;localStorage.removeItem("clientID"),t("setClientID",""),t("setClientConfig",null),Ve.push({name:"identify client"})}},Ye={state:Le,getters:Ne,mutations:Fe,actions:Te},Je={email:"",currentIP:"",fetchedUser:null,submitSuccess:!1,message:""},He={email:function(e){return e.email},currentIP:function(e){return e.currentIP},fetchedUser:function(e){return e.fetchedUser},submitSuccess:function(e){return e.submitSuccess},isEmailValid:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e.email)},message:function(e){return e.message}},ze={setEmail:function(e,t){e.email=t},setCurrentIP:function(e,t){e.currentIP=t},setFetchedUser:function(e,t){e.fetchedUser=t},setSubmitSuccess:function(e,t){e.submitSuccess=t},setMessage:function(e,t){e.message=t}},Be={createUser:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,a=e.state,s=e.getters,console.log("getters.isEmailValid",s.isEmailValid),s.isEmailValid){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,U.a.post("/api/users/".concat(s.clientID),{email:a.email,ip:a.currentIP});case 6:r=t.sent,console.log(r.headers),console.log(r.data),n("setSubmitSuccess",r.data.success),n("setMessage",r.data.msg);case 11:case"end":return t.stop()}}),t)})))()},updateUser:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,s,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,s=e.state,r=e.getters,n.next=3,U.a.put("/api/users/".concat(r.clientID),{email:s.email,ip:s.currentIP,overwriteIP:t});case 3:i=n.sent,console.log(i.data),a("setSubmitSuccess",i.data.success),a("setMessage",i.data.msg);case 7:case"end":return n.stop()}}),n)})))()}},We={state:Je,getters:He,mutations:ze,actions:Be};a["a"].use(h["a"]);var qe=new h["a"].Store({state:{success:!0,errorMessage:""},getters:{isSuccess:function(e){return e.success},errorMessage:function(e){return e.errorMessage}},mutations:{setSuccess:function(e,t){e.success=t},setErrorMessage:function(e,t){e.errorMessage=t}},modules:{Client:Ye,User:We}});a["a"].config.productionTip=!1,new a["a"]({router:Ve,store:qe,render:function(e){return e(S)}}).$mount("#app")},f2a3:function(e,t,n){}});
//# sourceMappingURL=app.d6552cce.js.map