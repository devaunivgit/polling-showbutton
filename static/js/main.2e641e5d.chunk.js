(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},30:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=a(9),s=a(6),o=a(5);const u={questions:[{id:1,qn:"1.\tWhat is the current Year",options:[{value:"2020",description:"2020"},{value:"2021",description:"2021"},{value:"2022",description:"2022"},{value:"2023",description:"2023"}],active:!1},{id:2,qn:"2.\tWhat is the current Month",options:[{value:7,description:"July"},{value:5,description:"May"},{value:6,description:"June"},{value:4,description:"April"}],active:!0}],answers:[{id:"1",answer:"2020"},{id:"2",answer:"6"}],showAnswer:!1,actualAnswer:!1};var m=(e=u,t)=>{const a=Object(o.a)({},e),n=a.questions.length;switch(t.type){case"PREVIOUS":let r=e.questions.findIndex(e=>e.active);return 0===r&&1===n?a:(0===r?(e.questions[r].active=!1,e.questions[++r].active=!0):(e.questions[r].active=!1,e.questions[--r].active=!0),Object(o.a)(Object(o.a)({},a),{},{showAnswer:!1,actualAnswer:!1,questions:[...e.questions]}));case"ANSWER":let l=!1;return t.value.length>0&&(l=!0),Object(o.a)(Object(o.a)({},a),{},{showAnswer:!0,actualAnswer:l});case"NEXT":let c=e.questions.findIndex(e=>e.active);return 0===c&&1===n?a:(0===c?(e.questions[c].active=!1,e.questions[++c].active=!0):(e.questions[c].active=!1,e.questions[--c].active=!0),Object(o.a)(Object(o.a)({},a),{},{showAnswer:!1,actualAnswer:!1,questions:[...e.questions]}));case"FormValid":return Object(o.a)(Object(o.a)({},a),{},{validated:!0});default:return a}},d=(a(30),a(31),a(34)),p=a(35),v=a(18),E=a(36),w=a(37);var b=e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a.Group,{controlId:"exampleForm.choice"},e.options.map((e,t)=>r.a.createElement(E.a.Check,{key:t,type:"radio",label:e.description,id:"answer",name:"answer",defaultChecked:"",defaultValue:e.value,required:!0})),r.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Please choose option")));function h(){const e=Object(s.c)(e=>e.validated),t=Object(s.c)(e=>e.questions),a=Object(s.c)(e=>e.showAnswer),n=Object(s.c)(e=>e.actualAnswer),l=Object(s.c)(e=>e.answers),c=Object(s.b)(),i=e=>{const t=e.currentTarget;if(!1===t.checkValidity())e.preventDefault(),e.stopPropagation(),c({type:"FormValid"});else{e.preventDefault(),e.stopPropagation();const a=l.filter(e=>{let a=!1;return e.id===t.qn.value&&e.answer===t.answer.value&&(a=!0),a});c({type:"ANSWER",value:a})}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement("h1",null,"Polling Show button"))),t.map(t=>r.a.createElement(r.a.Fragment,{key:t.id},r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement("h3",null,t.active&&t.qn))),r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement(E.a,{noValidate:!0,validated:e,onSubmit:i},t.active&&r.a.createElement(E.a.Group,{controlId:"exampleForm.questionId"},r.a.createElement(E.a.Control,{type:"hidden",name:"qn",defaultValue:t.id})),t.active&&r.a.createElement(b,{options:t.options}),t.active&&r.a.createElement(E.a.Group,{as:p.a},r.a.createElement(v.a,{xs:"4"},r.a.createElement(w.a,{variant:"primary",type:"button",onClick:()=>c({type:"PREVIOUS"})},"Previous")),r.a.createElement(v.a,{xs:"4"},r.a.createElement(w.a,{variant:"primary",type:"submit"},"Submit")),r.a.createElement(v.a,{xs:"4"},r.a.createElement(w.a,{variant:"primary",onClick:()=>c({type:"NEXT"}),type:"button"},"Next")))))))),a&&r.a.createElement(p.a,null,r.a.createElement(v.a,null,n?r.a.createElement("h4",null,"Right Answer"):r.a.createElement("h4",null,"Wrong Answer")))))}const q=Object(i.b)(m),y=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:q},r.a.createElement(h,null))),y)}},[[20,1,2]]]);
//# sourceMappingURL=main.2e641e5d.chunk.js.map