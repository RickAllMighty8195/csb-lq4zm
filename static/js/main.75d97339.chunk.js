(this["webpackJsonpredux-essentials-counter-example"]=this["webpackJsonpredux-essentials-counter-example"]||[]).push([[0],[,function(e,t,n){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.be622899.svg"},,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),l=n.n(o),c=(n(15),n(7)),u=n.n(c),s=n(9),i=n(2),m=n(4),p=Object(m.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),d=p.actions,b=d.increment,f=d.decrement,E=d.incrementByAmount,v=function(e){return e.counter.value},_=p.reducer,x=n(1),h=n.n(x);function g(){var e=Object(i.c)(v),t=Object(i.b)(),n=Object(a.useState)("2"),o=Object(s.a)(n,2),l=o[0],c=o[1];return r.a.createElement("div",null,r.a.createElement("div",{className:h.a.row},r.a.createElement("button",{className:h.a.button,"aria-label":"Increment value",onClick:function(){return t(b())}},"+"),r.a.createElement("span",{className:h.a.value},e),r.a.createElement("button",{className:h.a.button,"aria-label":"Decrement value",onClick:function(){return t(f())}},"-")),r.a.createElement("div",{className:h.a.row},r.a.createElement("input",{className:h.a.textbox,"aria-label":"Set increment amount",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:h.a.button,onClick:function(){return t(E(Number(l)||0))}},"Add Amount"),r.a.createElement("button",{className:h.a.asyncButton,onClick:function(){return t((e=Number(l)||0,function(t){setTimeout((function(){t(E(e))}),1e3)}));var e}},"Add Async")))}n(19);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),r.a.createElement(g,null),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("span",null,r.a.createElement("span",null,"Learn "),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),r.a.createElement("span",null,", "),r.a.createElement("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux"),r.a.createElement("span",null,", "),r.a.createElement("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux Toolkit"),",",r.a.createElement("span",null," and "),r.a.createElement("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"React Redux"))))},N=Object(m.a)({reducer:{counter:_}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.75d97339.chunk.js.map