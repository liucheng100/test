import{_ as g,E as t,aK as _,aL as f,A as w,z as v,o as d,c as u,d as n,a,aM as p,t as k,w as y,f as C,C as V,p as N,i as T,aN as E}from"./index.b6fd4dc1.js";import{E as b}from"./el-button.e6527c0e.js";import{E as I}from"./el-input.62d293a6.js";/* empty css                   */import{v as A,r as B,a as L,s as O}from"./login.9e231921.js";import"./index.dcc0ffaa.js";const K={data(){return{ON:!1,account:"",password:"",authcode:"",restTime:0,waitTime:2,sendable:!0,loginLoading:!1,interval:0}},methods:{signUp(){if(!this.account){t.warning("\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1\u5E76\u9A8C\u8BC1");return}if(!this.authcode){t.warning("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801");return}if(!this.password){t.warning("\u8BF7\u8BBE\u7F6E\u5BC6\u7801");return}if(!this.ON){t.warning("\u8BF7\u9605\u8BFB\u5E76\u540C\u610F\u9690\u79C1\u653F\u7B56");return}A({code:this.authcode,email:this.account}).then(e=>{console.log(e),e.code?t.error("\u9A8C\u8BC1\u7801\u6821\u9A8C\u5931\u8D25:"+e.msg):B({password:this.password,email:this.account}).then(s=>{s.code?t.error("\u6CE8\u518C\u5931\u8D25: "+s.description):(t.success("\u6CE8\u518C\u6210\u529F\uFF01"),this.toLogin())})})},toLogin(){L({username:this.account,password:this.password}).then(({data:e,...s})=>{e.code===0?(_(e.data.userId),f(e.data.isAdmin),w(s.headers.token),this.$router.push(this.$route.query.from||"/")):t.error(e.description+": "+e.msg)}).catch(()=>{t.error("\u767B\u5F55\u5931\u8D25")})},checkMobile(){!/^[1][3|4|5|6|7|8|9][0-9]{9}$/.test(this.account)&&this.account!=""&&t.warning("\u624B\u673A\u683C\u5F0F\u4E0D\u6B63\u786E")},checkEmail(){return!!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.account)},sendCode(){if(!this.checkEmail()){t.warning("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F");return}this.sendable=!1,this.restTime=this.waitTime,setTimeout(()=>{this.sendable=!0,clearInterval(this.interval)},this.waitTime*1e3),this.interval=setInterval(()=>{this.restTime--},1e3),O(this.account).then(e=>{e.code?t.error(e.msg):t.success("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u81F3\u90AE\u7BB1")})}},created(){v()&&this.$router.push(this.$route.query.from||"/")}},l=e=>(N("data-v-5ccbf44a"),e=e(),T(),e),U={class:"login"},x=l(()=>n("p",{class:"title"},"\u6CE8\u518C\u65B9\u5BF8 \xB7 \u6D41\u5E74",-1)),z={class:"content"},S=l(()=>n("p",{class:"tag"},"\u90AE\u7BB1",-1)),M=l(()=>n("p",{class:"tag"},"\u9A8C\u8BC1\u7801",-1)),P={class:"flex"},Z={class:"left-input"},q={key:1,class:"right-sender resend"},D=l(()=>n("p",{class:"tag"},"\u5BC6\u7801",-1)),j=E("\u6CE8\u518C"),F={class:"other-bar"};function G(e,s,H,J,o,i){const c=I,h=V,m=b;return d(),u("div",U,[x,n("div",z,[n("form",null,[S,a(c,{modelValue:o.account,"onUpdate:modelValue":s[0]||(s[0]=r=>o.account=r),onBlur:i.checkEmail,placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1...",class:"input"},null,8,["modelValue","onBlur"]),M,n("div",P,[n("div",Z,[a(c,{modelValue:o.authcode,"onUpdate:modelValue":s[1]||(s[1]=r=>o.authcode=r),placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801...",class:"input code-input",onKeypress:p(i.toLogin,["enter"])},null,8,["modelValue","onKeypress"])]),o.sendable?(d(),u("div",{key:0,onClick:s[2]||(s[2]=(...r)=>i.sendCode&&i.sendCode(...r)),class:"right-sender"},"\u53D1\u9001\u9A8C\u8BC1\u7801")):(d(),u("div",q,"\u91CD\u53D1: "+k(o.restTime)+"s",1))]),D,a(c,{modelValue:o.password,"onUpdate:modelValue":s[3]||(s[3]=r=>o.password=r),type:"password","show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801...",class:"input",onKeypress:p(i.toLogin,["enter"])},null,8,["modelValue","onKeypress"])]),a(h,{class:"proto",onCheck:s[4]||(s[4]=r=>o.ON=!o.ON),ON:o.ON},null,8,["ON"]),a(m,{"auto-insert-space":"",class:"loginBtn redBtn",onClick:i.signUp,loading:o.loginLoading},{default:y(()=>[j]),_:1},8,["onClick","loading"]),C("",!0),n("div",F,[n("div",{onClick:s[6]||(s[6]=r=>e.$router.replace("login")),class:"other-way"}," \u5929\u5916\u5929\u8D26\u53F7\u767B\u9646 "),n("div",{onClick:s[7]||(s[7]=r=>e.$router.replace("loginA")),class:"forget"},"\u8FD4\u56DE\u90AE\u7BB1\u767B\u9646")])])])}var ee=g(K,[["render",G],["__scopeId","data-v-5ccbf44a"]]);export{ee as default};
