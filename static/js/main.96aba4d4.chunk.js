(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{14:function(t,n,e){},9:function(t,n,e){"use strict";e.r(n);var a=e(1),s=e(4),r=e(5),i=e(8),u=e(7),o=e(2),c=e.n(o),l=e(6),m=e.n(l),b=(e(14),e(0));function p(t){return Object(b.jsx)("div",{className:t.className,onClick:t.onClick,children:t.buttonDisplay})}function j(t){return Object(b.jsx)("div",{className:"lcdDisplay",children:t.display})}function y(t){return Object(b.jsx)("div",{className:t.className,children:t.history})}var O=function(t){Object(i.a)(e,t);var n=Object(u.a)(e);function e(t){var r;return Object(s.a)(this,e),(r=n.call(this,t)).operations={"*":function(t,n){return t*n},"/":function(t,n){return t/n},"+":function(t,n){return t+n},"-":function(t,n){return t-n}},r.clear=function(){r.setState({num1:[],num2:[],numDisplay:[0],result:[],isAwaitingNextNumber:!0,isFloat:!1,currentOperator:"",history:[]})},r.mathOperation=function(t){var n=r.state.numDisplay.join(""),e=parseFloat(n),s={history:r.state.history.concat(t)};if(r.state.isAwaitingNextNumber)return r.state.result.length>=1?r.setState(Object(a.a)({currentOperator:t,num1:[e],isAwaitingNextNumber:!0,isFloat:!1,result:[]},s)):r.setState(Object(a.a)({currentOperator:t},s));if(!r.state.isAwaitingNextNumber){if(r.state.currentOperator.length<=0)return r.setState(Object(a.a)({currentOperator:t,num1:[e],isAwaitingNextNumber:!0,isFloat:!1},s));var i=r.operations[r.state.currentOperator](r.state.num1[0],e);return i.toString().length>8&&(i=i.toExponential(8)),r.setState(Object(a.a)({numDisplay:[i],num1:[i],currentOperator:t,isAwaitingNextNumber:!0},s))}},r.equals=function(){var t={history:r.state.history.concat("=")};if(r.state.isAwaitingNextNumber){if(r.state.result.length<=0)return;var n=r.operations[r.state.currentOperator](r.state.result[0],r.state.num2[0]);n.toString().length>8&&(n=n.toExponential(8)),r.setState(Object(a.a)({num1:r.state.result,numDisplay:[n],result:[n],isAwaitingNextNumber:!0},t))}if(!r.state.isAwaitingNextNumber&&r.state.currentOperator.length>0){var e=r.state.num1.join(""),s=parseFloat(e),i=r.state.numDisplay.join(""),u=parseFloat(i),o=r.operations[r.state.currentOperator](s,u);o.toString().length>8&&(o=o.toExponential(8)),r.setState(Object(a.a)({num1:[s],num2:[u],numDisplay:[o],result:[o],isAwaitingNextNumber:!0},t))}},r.numpad=function(t){var n={history:r.state.history.concat(t)},e=r.state.isAwaitingNextNumber?[]:r.state.numDisplay,s={};r.state.numDisplay.length<=8&&(e=e.concat(t)),r.state.result.length>0&&(s={num1:[],num2:[],result:[],isFloat:!1,currentOperator:""}),r.setState(Object(a.a)(Object(a.a)({numDisplay:e,isAwaitingNextNumber:!1},s),n))},r.decimal=function(){var t={history:r.state.history.concat(".")};if(!r.state.isFloat&&!(r.state.numDisplay.length>=8))return r.state.isAwaitingNextNumber?r.setState(Object(a.a)({numDisplay:["."],isFloat:!0,isAwaitingNextNumber:!1},t)):void r.setState(Object(a.a)({numDisplay:r.state.numDisplay.concat("."),isFloat:!0},t))},r.state={num1:[],num2:[],numDisplay:[0],result:[],isAwaitingNextNumber:!0,isFloat:!1,currentOperator:"",history:[]},r}return Object(r.a)(e,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(j,{display:this.state.numDisplay}),Object(b.jsx)(p,{className:"buttonClear",buttonDisplay:"clear",onClick:this.clear}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"1",onClick:function(){return t.numpad(1)}}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"2",onClick:function(){return t.numpad(2)}}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"3",onClick:function(){return t.numpad(3)}}),Object(b.jsx)(p,{className:"buttonSecondary",buttonDisplay:"\xf7",onClick:function(n){return t.mathOperation("/",n)}}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"4",onClick:function(){return t.numpad(4)}}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"5",onClick:function(){return t.numpad(5)}}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"6",onClick:function(){return t.numpad(6)}}),Object(b.jsx)(p,{className:"buttonSecondary",buttonDisplay:"x",onClick:function(n){return t.mathOperation("*",n)}}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"7",onClick:function(){return t.numpad(7)}}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"8",onClick:function(){return t.numpad(8)}}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"9",onClick:function(){return t.numpad(9)}}),Object(b.jsx)(p,{className:"buttonSecondary",buttonDisplay:"-",onClick:function(n){return t.mathOperation("-",n)}}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:".",onClick:this.decimal}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"0",onClick:function(){return t.numpad(0)}}),Object(b.jsx)(p,{className:"buttonPrimary",buttonDisplay:"=",onClick:this.equals}),Object(b.jsx)(p,{className:"buttonSecondary",buttonDisplay:"+",onClick:function(n){return t.mathOperation("+",n)}})]}),Object(b.jsx)("br",{}),Object(b.jsx)(y,{className:"history",history:this.state.history})]})}}]),e}(c.a.Component);m.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.96aba4d4.chunk.js.map