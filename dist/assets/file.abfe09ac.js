import{m as a}from"./index.dcc0ffaa.js";function c(t){return a.get({url:"/file/get",params:{path:t},responseType:"blob"})}function i(t){return new Promise((r,n)=>{c(t).then(e=>{r(URL.createObjectURL(e))}).catch(e=>n(e))})}function u(t){return"/file/get?path="+t}function s(t){return new Promise((r,n)=>{a.post({url:"/file/upload",data:t}).then(e=>{r(typeof e=="string"?JSON.parse(("["+e+"]").replace("}{","},{"))[0]:e)}).catch(e=>{n()})})}export{u as c,i as g,s as u};