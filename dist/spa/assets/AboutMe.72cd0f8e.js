import{e as S,Q,d as f}from"./dom.2b138118.js";import{e as b,t as x,v as m,d as r,h as t,Z as q,V as $,l as k,o as T,L as C,M as i,b as a,a as l,N as y}from"./index.81453ede.js";import{u as B,a as V,d as D,c as E}from"./QLayout.98dccb49.js";import{Q as N}from"./QPage.05ebf945.js";var n=b({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:s}){const o=x(q,m);if(o===m)return console.error("QTimelineEntry needs to be child of QTimeline"),m;const c=r(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),d=r(()=>`q-timeline__dot text-${e.color||o.color}`),g=r(()=>o.layout==="comfortable"&&o.side==="left");return()=>{const u=S(s.default,[]);if(e.body!==void 0&&u.unshift(e.body),e.heading===!0){const h=[t("div"),t("div"),t(e.tag,{class:"q-timeline__heading-title"},u)];return t("div",{class:"q-timeline__heading"},g.value===!0?h.reverse():h)}let _;e.icon!==void 0?_=[t(Q,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(_=[t("img",{class:"q-timeline__dot-img",src:e.avatar})]);const v=[t("div",{class:"q-timeline__subtitle"},[t("span",{},f(s.subtitle,[e.subtitle]))]),t("div",{class:d.value},_),t("div",{class:"q-timeline__content"},[t("h6",{class:"q-timeline__title"},f(s.title,[e.title]))].concat(u))];return t("li",{class:c.value},g.value===!0?v.reverse():v)}}}),P=b({name:"QTimeline",props:{...B,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:s}){const o=k(),c=V(e,o.proxy.$q);$(q,e);const d=r(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(c.value===!0?" q-timeline--dark":""));return()=>t("ul",{class:d.value},f(s.default))}});const j={class:"q-px-lg q-pb-md"},I=l("p",{class:"title"},"About Me",-1),M=l("p",{class:"sub-title"},"Career",-1),p=l("div",null,[y(" \uD55C\uAD6D\uD654\uC7AC\uBCF4\uD5D8\uD611\uD68C \uC77C\uBC18 \uBCF4\uD5D8 \uD50C\uB7AB\uD3FC"),l("br"),y(" \uBC18\uC751\uD615 \uC6F9 \uC0AC\uC774\uD2B8 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C ")],-1),w=l("div",null," \uC5EC\uD589\uC0AC \uD56D\uACF5 \uC608\uC57D/\uBCC0\uACBD/\uB2F4\uB2F9 \uC9C1\uBB34 \uC218\uD589 ",-1),A=l("p",{class:"sub-title"},"Education",-1),L=l("div",null," \uD504\uB85C\uC81D\uD2B8\uAE30\uBC18 \uD504\uB860\uD2B8\uC5D4\uB4DC(React, Vue) \uC6F9&\uC571 SW\uAC1C\uBC1C\uC790 \uC591\uC131 \uACFC\uC815 \uC218\uB8CC ",-1),R=l("p",{class:"sub-title"},"BirthDay",-1),W=Object.assign({name:"IndexPage",computed:{layout(){return this.$q.screen.lt.sm?"dense":this.$q.screen.lt.md?"comfortable":"loose"}}},{__name:"AboutMe",setup(e){return(s,o)=>(T(),C(D,null,{default:i(()=>[a(E,{class:"container page-container"},{default:i(()=>[a(N,{class:"flex flex-center"},{default:i(()=>[l("div",j,[a(P,{layout:s.layout,color:"orange"},{default:i(()=>[a(n,{heading:""},{default:i(()=>[I]),_:1}),a(n,{heading:""},{default:i(()=>[M]),_:1}),a(n,{title:"(\uC8FC)\uAC00\uC774\uB7A9",subtitle:"2023. 03. ~ 2024. 03. (12\uAC1C\uC6D4)",side:"left",icon:"code"},{default:i(()=>[p]),_:1}),a(n,{title:"(\uC8FC)\uD0C0\uC774\uB4DC\uC2A4\uD018\uC5B4",subtitle:"2014. 08. ~ 2022. 05. (7\uB144 10\uAC1C\uC6D4)",side:"left",icon:"flight_takeoff"},{default:i(()=>[w]),_:1}),a(n,{heading:""},{default:i(()=>[A]),_:1}),a(n,{title:"\uAC15\uB0A8 \uADF8\uB9B0 \uCEF4\uD4E8\uD130 \uC544\uCE74\uB370\uBBF8",subtitle:"2022. 07. ~ 2023. 01. (6\uAC1C\uC6D4)",side:"right",icon:"local_library"},{default:i(()=>[L]),_:1}),a(n,{heading:""},{default:i(()=>[R]),_:1}),a(n,{title:"\uC724\uC9C0\uC5F0",subtitle:"1993. 01. 27.",side:"left",icon:"celebration"})]),_:1},8,["layout"])])]),_:1})]),_:1})]),_:1}))}});export{W as default};