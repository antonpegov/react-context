(this["webpackJsonpcontext-api"]=this["webpackJsonpcontext-api"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),c=a(9),i=a.n(c),l=(a(17),a(2)),m=a(3),u=a(5),s=a(6),d=a(7);!function(e){e.Light="Light",e.Dark="Dark"}(n||(n={}));var h={isLightTheme:!0,theme:n.Light},f=Object(o.createContext)(Object(d.a)({},h,{},{toggleTheme:function(){},addTodo:function(e){}})),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=h,e.toggleTheme=function(){e.setState({isLightTheme:!e.state.isLightTheme,theme:e.state.isLightTheme?n.Dark:n.Light})},e.addTodo=function(e){console.log(e)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(f.Provider,{value:Object(d.a)({},this.state,{toggleTheme:this.toggleTheme,addTodo:this.addTodo})},this.props.children)}}]),a}(o.Component),p=(a(18),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(f.Consumer,null,(function(t){var a=t.isLightTheme,o=t.toggleTheme,c=t.theme,i=a?n.Dark:n.Light;return r.a.createElement("nav",{className:"Navbar ".concat(c,"Theme")},r.a.createElement("h1",null,e.props.appName),r.a.createElement("ul",{className:"Navbar-Menu"},r.a.createElement("li",{className:"Navbar-MenuItem"},"Home"),r.a.createElement("li",{className:"Navbar-MenuItem"},"About"),r.a.createElement("li",{className:"Navbar-MenuItem",onClick:o},i," Theme")))}))}}]),a}(o.Component)),b=a(10),g=a(11),E=a(24),T=(a(19),a(20),function(e){var t=e.addTodo,a=r.a.createRef();return r.a.createElement(f.Consumer,null,(function(e){return r.a.createElement("form",{onSubmit:function(e){var n;e.preventDefault(),t(null===a||void 0===a||null===(n=a.current)||void 0===n?void 0:n.value)}},r.a.createElement("label",{htmlFor:""},"Add new:"),r.a.createElement("input",{type:"text",name:"todo",ref:a,required:!0}),r.a.createElement("input",{type:"submit"}))}))}),j=(a(21),function(e){var t=e.todo;return r.a.createElement("div",{className:"TodoItem"},t.name)}),N=function(){var e=Object(o.useState)([{id:"1",name:"Wake up"},{id:"2",name:"Go to run"},{id:"3",name:"Take breakfast"}]),t=Object(g.a)(e,2),a=t[0],n=t[1],c=Object(o.useContext)(f).theme;return Object(o.useEffect)((function(){console.log("UseEffect",a)}),[a]),r.a.createElement("div",{className:"Todo ".concat(c,"Theme")},r.a.createElement("ul",{className:"Todo-List"},a.map((function(e){return r.a.createElement("li",{key:e.id,className:"Todo-ListItem"},r.a.createElement(j,{todo:e}))}))),r.a.createElement(T,{addTodo:function(e){n([].concat(Object(b.a)(a),[{id:Object(E.a)(),name:e}]))}}))};var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null,r.a.createElement(p,{appName:"Context API"}),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.0ca7a707.chunk.js.map