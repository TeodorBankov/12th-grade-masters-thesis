(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06a14ac0"],{"029d":function(e,t,n){"use strict";n("a256")},"1a6d":function(e,t,n){},"977d":function(e,t,n){"use strict";n("1a6d")},a256:function(e,t,n){},a55b:function(e,t,n){"use strict";n.r(t);var r=n("277e"),s={key:0,id:"align"},a={class:"credentials"},c={class:"login"},o={key:1,id:"login"};function i(e,t,n,i,u,l){var d=this,b=Object(r["y"])("Credentials"),p=Object(r["y"])("Register");return Object(r["r"])(),Object(r["f"])("span",null,[e.createAcc?(Object(r["r"])(),Object(r["f"])("div",s,[Object(r["g"])("div",a,[Object(r["h"])(b)]),Object(r["g"])("div",c,[Object(r["h"])(p)])])):(Object(r["r"])(),Object(r["f"])("div",o,[Object(r["h"])(b,{onCreateAcc:t[0]||(t[0]=function(e){return d.createAcc=!0})})]))])}var u=function(e){return Object(r["u"])("data-v-35d0d1c8"),e=e(),Object(r["s"])(),e},l={id:"parent"},d={class:"child"},b={class:"form"},p=u((function(){return Object(r["g"])("label",{for:"username"},"Username",-1)})),O=u((function(){return Object(r["g"])("br",null,null,-1)})),j={class:"form"},f=u((function(){return Object(r["g"])("div",{class:"hstack"},[Object(r["g"])("label",{for:"password"},"Password")],-1)})),g=u((function(){return Object(r["g"])("div",{class:"form"},[Object(r["g"])("input",{class:"submitbtn",type:"submit",value:"Sign in"})],-1)})),m={class:"container"},w={class:"hstack"},h=u((function(){return Object(r["g"])("span",null,"No Account? ",-1)})),v=u((function(){return Object(r["g"])("span",{class:"link"},"Create one!",-1)})),k=[v];function P(e,t,n,s,a,c){var o=Object(r["y"])("Bar");return Object(r["r"])(),Object(r["f"])("div",l,[Object(r["g"])("div",d,[Object(r["h"])(o)]),Object(r["g"])("form",{class:"container",onSubmit:t[2]||(t[2]=Object(r["G"])((function(){return e.login&&e.login.apply(e,arguments)}),["prevent"]))},[Object(r["g"])("div",b,[p,Object(r["F"])(Object(r["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t})},null,512),[[r["C"],e.username]])]),O,Object(r["g"])("div",j,[f,Object(r["F"])(Object(r["g"])("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[r["C"],e.password]])]),g],32),Object(r["g"])("span",null,Object(r["A"])(e.labelTextUser),1),Object(r["g"])("div",m,[Object(r["g"])("div",w,[h,Object(r["g"])("button",{class:"linkbutton",onClick:t[3]||(t[3]=function(t){return e.$emit("createAcc")})},k)])])])}var y=n("db0a"),x=(n("833b"),n("1dba")),C=n.n(x),U=n("3daa"),A=n("793e"),R=Object(r["i"])({components:{Bar:A["a"]},data:function(){return{username:"",isLogging:!1,labelTextUser:"",password:"",res:"",router:Object(U["c"])()}},methods:{login:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.username&&""!=e.password){t.next=3;break}return e.labelTextUser="Enter valid credentials",t.abrupt("return",null);case 3:return e.labelTextUser="Please wait!",t.prev=4,t.next=7,C.a.post("http://localhost:3000/login",{username:e.username,password:e.password});case 7:return t.next=9,t.sent.data;case 9:e.res=t.sent,window.localStorage.setItem("token",e.res),e.router.push({path:"/main",replace:!0}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](4),e.labelTextUser="Wrong credentials";case 17:case"end":return t.stop()}}),t,null,[[4,14]])})))()}}}),S=(n("029d"),n("85dd")),T=n.n(S);const E=T()(R,[["render",P],["__scopeId","data-v-35d0d1c8"]]);var F=E,M=function(e){return Object(r["u"])("data-v-0e601b89"),e=e(),Object(r["s"])(),e},V={id:"parent"},W=M((function(){return Object(r["g"])("div",{class:"header"},[Object(r["g"])("h2",null,"Join us now:")],-1)})),I={class:"form"},_=M((function(){return Object(r["g"])("span",{class:"label"},"Username",-1)})),J={class:"form"},B=M((function(){return Object(r["g"])("span",{class:"label"},"E-mail ",-1)})),G={class:"input-spacing"},z={class:"form"},D=M((function(){return Object(r["g"])("span",{class:"label"},"Password ",-1)})),L={class:"form"},N={class:"hstack"},Z=M((function(){return Object(r["g"])("span",{class:"label"},"Confirm Password ",-1)})),$={key:0,class:"warn-text"},q={key:0,class:"warn-text"},H=M((function(){return Object(r["g"])("span",null,"The password should contain at least 8 symbols, including one number and uppercase character!",-1)})),K=M((function(){return Object(r["g"])("div",{class:"form"},[Object(r["g"])("input",{class:"submitbtn",type:"submit",value:"Create Account"})],-1)}));function Q(e,t){return Object(r["r"])(),Object(r["f"])("div",V,[W,Object(r["g"])("form",{class:"container",onSubmit:t[5]||(t[5]=Object(r["G"])((function(){return e.register&&e.register.apply(e,arguments)}),["prevent"]))},[Object(r["g"])("div",I,[_,Object(r["F"])(Object(r["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t})},null,512),[[r["C"],e.username]])]),Object(r["g"])("div",J,[B,Object(r["F"])(Object(r["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.email=t})},null,512),[[r["C"],e.email]])]),Object(r["g"])("div",G,[Object(r["g"])("div",z,[D,Object(r["F"])(Object(r["g"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.password=t}),onClick:t[3]||(t[3]=function(t){return e.displayPasswordWarning=!0})},null,512),[[r["C"],e.password]])]),Object(r["g"])("div",L,[Object(r["g"])("div",N,[Z,e.showPasswordMatchError?(Object(r["r"])(),Object(r["f"])("span",$," Passwords don't match!")):Object(r["e"])("",!0)]),Object(r["F"])(Object(r["g"])("input",{type:"password","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.confirmPassword=t})},null,512),[[r["C"],e.confirmPassword]])]),e.displayPasswordWarning?(Object(r["r"])(),Object(r["f"])("div",q,[H,Object(r["g"])("h1",null,Object(r["A"])(e.msg),1)])):Object(r["e"])("",!0)]),K],32)])}var X=Object(r["i"])({data:function(){return{username:"",email:"",password:"",confirmPassword:"",showPasswordMatchError:!1,displayPasswordWarning:!1,router:Object(U["c"])(),msg:""}},methods:{checkMatchingPasswords:function(){var e=this;setTimeout((function(){e.password!=e.confirmPassword?e.showPasswordMatchError=!0:e.showPasswordMatchError=!1}),500)},validatePassword:function(){this.password.contains(/[a-z]/)&&this.password.contains(/[A-Z]/)&&this.password.contains(/\d/)&&console.log("PASSWORD is weak!")},register:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={email:e.email,username:e.username,password:e.password},console.log(n),t.prev=2,t.next=5,C.a.post("http://localhost:3000/register",n);case 5:r=t.sent.data,window.localStorage.setItem("token",r),e.router.push({path:"/main",replace:!0}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),e.msg="Profile already exists";case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()}},watch:{confirmPassword:function(){this.checkMatchingPasswords()}}});n("977d");const Y=T()(X,[["render",Q],["__scopeId","data-v-0e601b89"]]);var ee=Y,te=Object(r["i"])({components:{Credentials:F,Register:ee},data:function(){return{createAcc:!1}},methods:{}});n("fdc8");const ne=T()(te,[["render",i]]);t["default"]=ne},ad79:function(e,t,n){},fdc8:function(e,t,n){"use strict";n("ad79")}}]);
//# sourceMappingURL=chunk-06a14ac0.f7c5b474.js.map