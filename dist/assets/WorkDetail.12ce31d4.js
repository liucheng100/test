import{_ as m,E as p,m as v,o as n,c as d,d as o,t as i,n as k,a as f,x as h,p as w,i as g}from"./index.b6fd4dc1.js";/* empty css                   */import{w as D}from"./work.7d305944.js";import{c as S,g as y}from"./file.abfe09ac.js";import{i as I}from"./common.eb3c7a8c.js";import"./index.dcc0ffaa.js";const b={name:"WorkDetail",data(){return{zoomOn:!1,workId:-1,workData:{},testVideo:"http://photo.twtstudio.com/file/get?path=media/2023_04/265e2dd0-805d-4c28-b9aa-dcc1ec48e8a9.flv",testVideo:"http://photo.twtstudio.com/file/get?path=media/2023_04/c5352d51-e028-4dae-864f-c0161e590181.mp4",isSafari:!0}},computed:{videoSrc(){return S(this.workData.workFile)}},methods:{groupType(s){return s==1?"\u5355\u53CD\u7EC4":s==2?"\u968F\u624B\u62CD\u7EC4":s==3?"\u77ED\u89C6\u9891\u7EC4":"AI\u7EC4"},replaceBlob(s,t){t.forEach(r=>{y(s[r]).then(c=>{s[r]=c}).catch(c=>{p.error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")}),s[r]=v("loading.gif")})}},mounted(){this.isSafari=I(),this.workId=this.$route.query.workId,D(this.workId).then(s=>{console.log(71,s),s.code||(this.workData=s.data,this.workData.contestGroup==3?p.info("\u89C6\u9891\u5DF2\u4E3A\u60A8\u9759\u97F3"):this.replaceBlob(this.workData,["workFile"]))})}},_=s=>(w("data-v-502e92d8"),s=s(),g(),s),x=["src"],z={key:1,class:"video-box"},N=["src"],O=["href"],B={class:"info-mask"},E={class:"bar"},F={class:"title"},T={class:"flex"},V=_(()=>o("div",{class:"eye"},null,-1)),G={class:"info"},W={class:"bar"},A={class:"flex"},C={class:"info"},q={class:"groupType info"},H={class:"psg"},M={class:"back"},U=_(()=>o("div",{class:"backIcon"},null,-1)),Z=_(()=>o("div",{class:"backInfo"},"\u8FD4\u56DE\u5217\u8868",-1)),J=[U,Z];function K(s,t,r,c,e,l){const u=h;return n(),d("div",{class:"work-detail",style:k({maxHeight:e.isSafari?"calc(100% - 100px)":""})},[e.workData.contestGroup!=3?(n(),d("div",{key:0,onClick:t[0]||(t[0]=a=>e.zoomOn=!0),class:"cover-box"},[o("img",{class:"img",src:e.workData.workFile,alt:""},null,8,x)])):(n(),d("div",z,[o("video",{controls:"",muted:"",class:"video",src:l.videoSrc},null,8,N),o("a",{href:l.videoSrc,class:"videoErr"},"\u65E0\u6CD5\u64AD\u653E?\u70B9\u6211\u4E0B\u8F7D\u5230\u672C\u5730",8,O)])),o("div",B,[o("div",E,[o("div",F,i(e.workData.workTitle),1),o("div",T,[V,o("div",G,i(e.workData.views),1)])]),o("div",W,[o("div",A,[o("div",{class:"avatar",style:k({backgroundImage:`url('${e.workData.makerAvatar}')`})},null,4),o("div",C,i(e.workData.makerName),1)]),o("div",q,i(l.groupType(e.workData.contestGroup)),1)]),o("div",H,i(e.workData.description),1),o("div",M,[o("div",{onClick:t[1]||(t[1]=a=>s.$router.back()),class:"flex"},J)])]),f(u,{src:e.workData.workFile,ON:e.zoomOn,"onUpdate:ON":[t[2]||(t[2]=a=>e.zoomOn=a),t[3]||(t[3]=a=>e.zoomOn=!1)]},null,8,["src","ON"])],4)}var j=m(b,[["render",K],["__scopeId","data-v-502e92d8"]]);export{j as default};