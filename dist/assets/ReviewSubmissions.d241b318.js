import{_ as w}from"./WorkCard.bc558ae6.js";import{_ as N,av as T,P as e,aw as v,Q as P,o as d,c as y,d as t,ax as W,ae as _,af as p,ay as x,az as $,n,F as C,e as B,ac as I,a as R,p as E,i as z}from"./index.b6fd4dc1.js";import{m as g}from"./index.dcc0ffaa.js";function F(){return g.get({url:"/contest/running",responseType:"json"})}function M(i){return g.get({url:`/examine/list?contestId=${i.contestId}&pageNum=${i.pageNum}&pageSize=${i.pageSize}`,responseType:"json"})}const j=i=>(E("data-v-3436ce34"),i=i(),z(),i),H={class:"review-submissions"},q=j(()=>t("p",{class:"page-title"},"\u5BA1\u6838\u6295\u7A3F",-1)),D={class:"multi-panel"},L={__name:"ReviewSubmissions",setup(i){F().then(l=>{console.log(l)}),M({contestId:16,pageNum:1,pageSize:8}).then(l=>{console.log(l)});const h=T(),m=e(),r=v({marginTop:0}),a=v([!1,!1,!1]),u=[{WorkName:"\u57CE\u5E02\u753B\u4F5C",PublishTime:"2023/02/20",Status:0,is_multiply:e(!1),is_choose:e(!1),ViewVolume:100},{WorkName:"\u57CE\u5E02\u753B\u4F5C",PublishTime:"2023/02/20",Status:0,is_multiply:e(!1),is_choose:e(!1),ViewVolume:100},{WorkName:"\u57CE\u5E02\u753B\u4F5C",PublishTime:"2023/02/20",Status:0,is_multiply:e(!1),is_choose:e(!1),ViewVolume:100},{WorkName:"\u57CE\u5E02\u753B\u4F5C",PublishTime:"2023/02/20",Status:0,is_multiply:e(!1),is_choose:e(!1),ViewVolume:100},{WorkName:"\u57CE\u5E02\u753B\u4F5C",PublishTime:"2023/02/20",Status:0,is_multiply:e(!1),is_choose:e(!1),ViewVolume:100},{WorkName:"\u57CE\u5E02\u753B\u4F5C",PublishTime:"2023/02/20",Status:0,is_multiply:e(!1),is_choose:e(!1),ViewVolume:100},{WorkName:"\u57CE\u5E02\u753B\u4F5C",PublishTime:"2023/02/20",Status:0,is_multiply:e(!1),is_choose:e(!1),ViewVolume:100},{WorkName:"\u57CE\u5E02\u753B\u4F5C",PublishTime:"2023/02/20",Status:0,is_multiply:e(!1),is_choose:e(!1),ViewVolume:100}];P(()=>{r.marginTop=m.value.offsetHeight+"px"});function f(){u.forEach(l=>{l.is_multiply.value=!l.is_multiply.value}),I(()=>{r.marginTop=m.value.offsetHeight+"px"})}function c(l){for(let s=0;s<a.length;s++)a[s]=!1;a[l]=!0}function k(){f()}function b(){h.push("/admin/RecycleBin")}return(l,s)=>{const V=w;return d(),y("div",H,[t("div",{class:"float-panel",ref_key:"FloatPanel",ref:m},[q,t("img",{src:W,class:"icon-title",onClick:s[0]||(s[0]=o=>b())}),_(t("img",{src:x,class:"icon-title",onClick:s[1]||(s[1]=o=>f())},null,512),[[p,!u[0].is_multiply.value]]),_(t("img",{src:$,class:"icon-title",onClick:s[2]||(s[2]=o=>k())},null,512),[[p,u[0].is_multiply.value]]),_(t("div",D,[t("button",{class:"multi-button",style:n({background:a[0]?"#4E46B4":"#444444"}),onClick:s[3]||(s[3]=o=>c(0))},"\u901A\u8FC7",4),t("button",{class:"multi-button",style:n({background:a[1]?"#4E46B4":"#444444"}),onClick:s[4]||(s[4]=o=>c(1))},"\u4E0D\u901A\u8FC7",4),t("button",{class:"multi-button",style:n({background:a[2]?"#4E46B4":"#444444"}),onClick:s[5]||(s[5]=o=>c(2))},"\u4E0B\u8F7D",4)],512),[[p,u[0].is_multiply.value]])],512),t("div",{class:"all-works",style:n(r)},[(d(),y(C,null,B(u,(o,S)=>R(V,{key:o.WorkName,WorkName:o.WorkName,PublishTime:o.PublishTime,Status:o.Status,is_choose:o.is_choose.value,ViewVolume:o.ViewVolume,is_multiply:o.is_multiply.value,onMulti:Q=>u[S].is_choose.value=!o.is_choose.value},null,8,["WorkName","PublishTime","Status","is_choose","ViewVolume","is_multiply","onMulti"])),64))],4)])}}};var J=N(L,[["__scopeId","data-v-3436ce34"]]);export{J as default};