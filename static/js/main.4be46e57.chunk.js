(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{44:function(t,n,e){t.exports=e(54)},49:function(t,n,e){},50:function(t,n,e){},51:function(t,n,e){},52:function(t,n,e){},54:function(t,n,e){"use strict";e.r(n);var o=e(12),a=e.n(o),i=e(24),r=e.n(i),c=(e(49),e(25)),l=e(26),s=e(41),u=e(42),p=e(2),d=e(56),g=(e(50),e(51),function(t){return a.a.createElement("div",{className:"screen"},a.a.createElement("div",{className:"screenUp"},t.operationUp),a.a.createElement("div",{className:"screenDown"},t.operationDown))}),S=(e(52),function(t){var n=t.btnSign,e=t.id,o=t.operationSign;return a.a.createElement("li",null,a.a.createElement("button",{id:"btn".concat(e),onClick:o,name:n},n))}),b=function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(c.a)(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n.call.apply(n,[this].concat(i))).state={operationUp:"",operationDown:"0",result:0,flag:!1,forDot:"",dotCounter:0,buttons:[{id:1,btnSign:"ON/C"},{id:2,btnSign:"7"},{id:3,btnSign:"8"},{id:4,btnSign:"9"},{id:5,btnSign:"/"},{id:6,btnSign:"4"},{id:7,btnSign:"5"},{id:8,btnSign:"6"},{id:9,btnSign:"x"},{id:10,btnSign:"1"},{id:11,btnSign:"2"},{id:12,btnSign:"3"},{id:13,btnSign:"-"},{id:14,btnSign:"0"},{id:15,btnSign:"."},{id:16,btnSign:"="},{id:17,btnSign:"+"}]},t.addSign=function(n){var e=n.target.name;"0"!==t.state.operationDown&&0!==t.state.operationDown||("/"===e||"x"===e?t.setState((function(t){return{operationDown:"0"}})):t.setState((function(t){return{operationDown:""}}))),"/"!==e&&"x"!==e||!1!==t.state.flag?t.state.dotCounter>=1&&"."===e?(console.log("2"),t.setState((function(t){return{operationDown:t.operationDown,result:t.result}}))):"/"===e||"x"===e||"+"===e||"-"===e?t.setState((function(t){return{operationDown:t.operationDown+e,result:t.result+("x"===e?"*":e),flag:!1,dotCounter:0}})):"."===e?t.setState((function(t){return{operationDown:t.operationDown+e,result:t.result+e,flag:!1,dotCounter:t.dotCounter+1}})):(console.log("ccc"),t.setState((function(t){return{operationDown:t.operationDown+e,result:t.result+e,flag:!0}}))):(console.log("aaa"),t.setState((function(t){return{operationDown:t.operationDown,result:t.result}})))},t.makeOperation=function(){t.state.operationDown.endsWith("/")||t.state.operationDown.endsWith("x")||t.state.operationDown.endsWith("+")||t.state.operationDown.endsWith("-")||t.state.operationDown.endsWith(".")||(t.state.operationDown.includes(".")?t.setState((function(t){return{operationUp:t.operationDown+"=",operationDown:Object(p.ee)(Object(d.a)(t.result),10).toString(),result:Object(p.ee)(Object(d.a)(t.result),10),dotCounter:1}})):t.setState((function(t){return{operationUp:t.operationDown+"=",operationDown:Object(p.ee)(Object(d.a)(t.result),10).toString(),result:Object(p.ee)(Object(d.a)(t.result),10),dotCounter:0}})))},t.handleClearScreen=function(){t.setState({operationUp:"",operationDown:0,result:0,flag:!1,dotCounter:0})},t.createButtons=function(){return t.state.buttons.map((function(n){return"ON/C"===n.btnSign?a.a.createElement(S,{key:n.id,id:n.id,btnSign:n.btnSign,operationSign:t.handleClearScreen}):"="===n.btnSign?a.a.createElement(S,{key:n.id,id:n.id,btnSign:n.btnSign,operationSign:t.makeOperation}):a.a.createElement(S,{key:n.id,id:n.id,btnSign:n.btnSign,operationSign:t.addSign})}))},t}return Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement("h1",null,"KASIO"),a.a.createElement(g,{operationDown:this.state.operationDown,operationUp:this.state.operationUp}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null)),this.createButtons()))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.4be46e57.chunk.js.map