_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"+QRC":function(e,r,t){"use strict";var n=t("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,r){var t,l,a,i,c,b,u=!1;r||(r={}),t=r.debug||!1;try{if(a=n(),i=document.createRange(),c=document.getSelection(),(b=document.createElement("span")).textContent=e,b.style.all="unset",b.style.position="fixed",b.style.top=0,b.style.clip="rect(0, 0, 0, 0)",b.style.whiteSpace="pre",b.style.webkitUserSelect="text",b.style.MozUserSelect="text",b.style.msUserSelect="text",b.style.userSelect="text",b.addEventListener("copy",(function(n){if(n.stopPropagation(),r.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var l=o[r.format]||o.default;window.clipboardData.setData(l,e)}else n.clipboardData.clearData(),n.clipboardData.setData(r.format,e);r.onCopy&&(n.preventDefault(),r.onCopy(n.clipboardData))})),document.body.appendChild(b),i.selectNodeContents(b),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(s){t&&console.error("unable to copy using execCommand: ",s),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(r.format||"text",e),r.onCopy&&r.onCopy(window.clipboardData),u=!0}catch(s){t&&console.error("unable to copy using clipboardData: ",s),t&&console.error("falling back to prompt"),l=function(e){var r=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,r)}("message"in r?r.message:"Copy to clipboard: #{key}, Enter"),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),b&&document.body.removeChild(b),a()}return u}},"/CqR":function(e,r,t){"use strict";t.d(r,"a",(function(){return b}));var n=t("nKUr"),o=t("cpVT"),l=t("dhJC");t("q1tI");function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){Object(o.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var c={blueGray:"bg-blue-gray-500",gray:"bg-gray-500",brown:"bg-brown-500",deepOrange:"bg-deep-orange-500",orange:"bg-orange-500",amber:"bg-amber-500",yellow:"bg-yellow-600",lime:"bg-lime-500",lightGreen:"bg-light-green-500",green:"bg-green-500",teal:"bg-teal-500",cyan:"bg-cyan-500",lightBlue:"bg-light-blue-500",blue:"bg-blue-500",indigo:"bg-indigo-500",deepPurple:"bg-deep-purple-500",purple:"bg-purple-500",pink:"bg-pink-500",red:"bg-red-500"};function b(e){var r=e.children,t=e.color,o=Object(l.a)(e,["children","color"]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",i(i({},o),{},{className:"flex items-center gap-3 text-white p-4 pr-12 border-0 rounded-lg relative mb-4 ".concat(c[t]," transition-all duration-300"),children:r}))})}},"/UQq":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/react/alerts",function(){return t("jaez")}])},"7ItQ":function(e,r,t){"use strict";t.d(r,"a",(function(){return b}));var n=t("nKUr"),o=(t("q1tI"),t("uUdh")),l=t("c2c2"),a=t("P5Jw"),i=["blue-gray","gray","brown","deep-orange","orange","amber","yellow","lime","light-green","green","teal","cyan","light-blue","blue","indigo","deep-purple","purple","pink","red"],c=["blueGray","gray","brown","deepOrange","orange","amber","yellow","lime","lightGreen","green","teal","cyan","lightBlue","blue","indigo","deepPurple","purple","pink","red"];function b(e){var r=e.children,t=e.activeColor,b=(e.activeFramework,e.onColorClick),u=(e.onFrameworkClick,e.onCopy),s=e.codeToShow,g=e.copyText;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"border border-solid border-gray-200 rounded my-4 p-4 relative",children:[t?Object(n.jsx)("div",{id:"colors",className:"flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",style:{width:"100%",bottom:"-14px"},children:Object(n.jsx)("div",{className:"flex flew-wrap justify-center items-center bg-white px-2",children:i.map((function(e,r){return Object(n.jsx)("span",{className:"cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-".concat(e).concat(t===c[r]?"".concat("yellow"===e?"-600":"-500"," shadow-md"):"-200"),onClick:function(){b(c[r]),u(!1)}},r)}))})}):null,r,Object(n.jsxs)("div",{className:"relative mt-4",children:[Object(n.jsx)(a.CopyToClipboard,{text:s,onCopy:function(){return u(!0)},children:Object(n.jsx)("button",{className:"text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",type:"button",children:g})}),Object(n.jsx)(o.a,{language:"jsx",style:l.a11yDark,children:s})]})]})})}},"8wsC":function(e,r,t){"use strict";var n=t("cpVT"),o=t("nKUr"),l=t("z7pX"),a=t("dhJC"),i=t("q1tI"),c=t("FESb"),b=t.n(c);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){Object(n.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g={blueGray:"bg-blue-gray-500",gray:"bg-gray-500",brown:"bg-brown-500",deepOrange:"bg-deep-orange-500",orange:"bg-orange-500",amber:"bg-amber-500",yellow:"bg-yellow-600",lime:"bg-lime-500",lightGreen:"bg-light-green-500",green:"bg-green-500",teal:"bg-teal-500",cyan:"bg-cyan-500",lightBlue:"bg-light-blue-500",blue:"bg-blue-500",indigo:"bg-indigo-500",deepPurple:"bg-deep-purple-500",purple:"bg-purple-500",pink:"bg-pink-500",red:"bg-red-500"},p={blueGray:"hover:bg-blue-gray-700",gray:"hover:bg-gray-700",brown:"hover:bg-brown-700",deepOrange:"hover:bg-deep-orange-700",orange:"hover:bg-orange-700",amber:"hover:bg-amber-700",yellow:"hover:bg-yellow-700",lime:"hover:bg-lime-700",lightGreen:"hover:bg-light-green-700",green:"hover:bg-green-700",teal:"hover:bg-teal-700",cyan:"hover:bg-cyan-700",lightBlue:"hover:bg-light-blue-700",blue:"hover:bg-blue-700",indigo:"hover:bg-indigo-700",deepPurple:"hover:bg-deep-purple-700",purple:"hover:bg-purple-700",pink:"hover:bg-pink-700",red:"hover:bg-red-700"},d={blueGray:"focus:bg-blue-gray-400",gray:"focus:bg-gray-400",brown:"focus:bg-brown-400",deepOrange:"focus:bg-deep-orange-400",orange:"focus:bg-orange-400",amber:"focus:bg-amber-400",yellow:"focus:bg-yellow-500",lime:"focus:bg-lime-400",lightGreen:"focus:bg-light-green-400",green:"focus:bg-green-400",teal:"focus:bg-teal-400",cyan:"focus:bg-cyan-400",lightBlue:"focus:bg-light-blue-400",blue:"focus:bg-blue-400",indigo:"focus:bg-indigo-400",deepPurple:"focus:bg-deep-purple-400",purple:"focus:bg-purple-400",pink:"focus:bg-pink-400",red:"focus:bg-red-400"},h={blueGray:"active:bg-blue-gray-800",gray:"active:bg-gray-800",brown:"active:bg-brown-800",deepOrange:"active:bg-deep-orange-800",orange:"active:bg-orange-800",amber:"active:bg-amber-800",yellow:"active:bg-yellow-800",lime:"active:bg-lime-800",lightGreen:"active:bg-light-green-800",green:"active:bg-green-800",teal:"active:bg-teal-800",cyan:"active:bg-cyan-800",lightBlue:"active:bg-light-blue-800",blue:"active:bg-blue-800",indigo:"active:bg-indigo-800",deepPurple:"active:bg-deep-purple-800",purple:"active:bg-purple-800",pink:"active:bg-pink-800",red:"active:bg-red-800"},f={blueGray:"text-blue-gray-500",gray:"text-gray-500",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"},y={blueGray:"border-blue-gray-500",gray:"border-gray-500",brown:"border-brown-500",deepOrange:"border-deep-orange-500",orange:"border-orange-500",amber:"border-amber-500",yellow:"border-yellow-600",lime:"border-lime-500",lightGreen:"border-light-green-500",green:"border-green-500",teal:"border-teal-500",cyan:"border-cyan-500",lightBlue:"border-light-blue-500",blue:"border-blue-500",indigo:"border-indigo-500",deepPurple:"border-deep-purple-500",purple:"border-purple-500",pink:"border-pink-500",red:"border-red-500"},m={blueGray:"hover:bg-blue-gray-50",gray:"hover:bg-gray-50",brown:"hover:bg-brown-50",deepOrange:"hover:bg-deep-orange-50",orange:"hover:bg-orange-50",amber:"hover:bg-amber-50",yellow:"hover:bg-yellow-50",lime:"hover:bg-lime-50",lightGreen:"hover:bg-light-green-50",green:"hover:bg-green-50",teal:"hover:bg-teal-50",cyan:"hover:bg-cyan-50",lightBlue:"hover:bg-light-blue-50",blue:"hover:bg-blue-50",indigo:"hover:bg-indigo-50",deepPurple:"hover:bg-deep-purple-50",purple:"hover:bg-purple-50",pink:"hover:bg-pink-50",red:"hover:bg-red-50"},v={blueGray:"hover:border-blue-gray-700",gray:"hover:border-gray-700",brown:"hover:border-brown-700",deepOrange:"hover:border-deep-orange-700",orange:"hover:border-orange-700",amber:"hover:border-amber-700",yellow:"hover:border-yellow-700",lime:"hover:border-lime-700",lightGreen:"hover:border-light-green-700",green:"hover:border-green-700",teal:"hover:border-teal-700",cyan:"hover:border-cyan-700",lightBlue:"hover:border-light-blue-700",blue:"hover:border-blue-700",indigo:"hover:border-indigo-700",deepPurple:"hover:border-deep-purple-700",purple:"hover:border-purple-700",pink:"hover:border-pink-700",red:"hover:border-red-700"},x={blueGray:"hover:text-blue-gray-700",gray:"hover:text-gray-700",brown:"hover:text-brown-700",deepOrange:"hover:text-deep-orange-700",orange:"hover:text-orange-700",amber:"hover:text-amber-700",yellow:"hover:text-yellow-700",lime:"hover:text-lime-700",lightGreen:"hover:text-light-green-700",green:"hover:text-green-700",teal:"hover:text-teal-700",cyan:"hover:text-cyan-700",lightBlue:"hover:text-light-blue-700",blue:"hover:text-blue-700",indigo:"hover:text-indigo-700",deepPurple:"hover:text-deep-purple-700",purple:"hover:text-purple-700",pink:"hover:text-pink-700",red:"hover:text-red-700"},j={blueGray:"active:bg-blue-gray-100",gray:"active:bg-gray-100",brown:"active:bg-brown-100",deepOrange:"active:bg-deep-orange-100",orange:"active:bg-orange-100",amber:"active:bg-amber-100",yellow:"active:bg-yellow-100",lime:"active:bg-lime-100",lightGreen:"active:bg-light-green-100",green:"active:bg-green-100",teal:"active:bg-teal-100",cyan:"active:bg-cyan-100",lightBlue:"active:bg-light-blue-100",blue:"active:bg-blue-100",indigo:"active:bg-indigo-100",deepPurple:"active:bg-deep-purple-100",purple:"active:bg-purple-100",pink:"active:bg-pink-100",red:"active:bg-red-100"},w=Object(i.forwardRef)((function(e,r){var t,n,i=e.children,c=e.color,u=e.buttonType,w=e.size,O=void 0===w?"regular":w,C=e.rounded,k=e.iconOnly,P=e.ripple,N=Object(a.a)(e,["children","color","buttonType","size","rounded","iconOnly","ripple"]),S=new b.a,T=[],E=["flex","items-center","gap-1","font-bold","outline-none","uppercase","tracking-wider","focus:outline-none","focus:shadow-none","transition-all","duration-300",C=C?"rounded-full":"rounded-lg"],A=[g[c],p[c],d[c],h[c],"text-white","shadow-md","hover:shadow-xl"],D=["bg-transparent","border","border-solid","shadow-none",f[c],y[c],m[c],v[c],x[c],m[c],j[c]],G=["bg-transparent",f[c],m[c],x[c],m[c],j[c]],_=[].concat(E,[k?"w-8 h-8 p-0 grid place-items-center":"py-1.5 px-4","text-xs","leading-normal"]),R=[].concat(E,[k?"w-10 h-10 p-0 grid place-items-center":"py-2.5 px-6","text-xs","leading-normal"]),B=[].concat(E,[k?"w-12 h-12 p-0 grid place-items-center":"py-3 px-7","text-sm","leading-relaxed"]);if("sm"===O)(t=T).push.apply(t,Object(l.a)(_));else if("lg"===O){var F;(F=T).push.apply(F,Object(l.a)(B))}else{var U;(U=T).push.apply(U,Object(l.a)(R))}if("outline"===u)(n=T).push.apply(n,D);else if("link"===u){var I;(I=T).push.apply(I,G)}else{var z;(z=T).push.apply(z,A)}return T=T.join(" "),Object(o.jsx)("button",s(s({},N),{},{className:T,ref:r,onMouseUp:function(e){"dark"===P&&S.create(e,"dark"),"light"===P&&S.create(e,"light")},children:i}))}));r.a=w},E7Xt:function(e,r,t){"use strict";t.d(r,"a",(function(){return o}));var n=t("nKUr");t("q1tI");function o(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{className:"font-serif font-medium text-xl mb-2 text-gray-900",children:e.title}),Object(n.jsx)("p",{className:"text-gray-700 mb-4 font-light",children:e.description})]})}},E9nw:function(e,r){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var r=document.activeElement,t=[],n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(r){e.addRange(r)})),r&&r.focus()}}},P5Jw:function(e,r,t){"use strict";var n=t("rHrb").CopyToClipboard;n.CopyToClipboard=n,e.exports=n},"bn+Z":function(e,r,t){"use strict";function n(e,r,t){switch(e){case"react":case"angular":case"html":case"vue":case"javascript":break;default:r(!0),t(e)}}t.d(r,"a",(function(){return n}))},jaez:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return y}));var n=t("nKUr"),o=t("q1tI"),l=t("wEh6"),a=t("Blfr"),i=t("uCv7"),c=t("zQxQ"),b=t("E7Xt"),u=t("7ItQ"),s=t("bn+Z"),g=t("/CqR");function p(e){var r=e.copyText,t=e.onCopy,l=Object(o.useState)("lightBlue"),a=l[0],i=l[1],c=Object(o.useState)("react")[0],b=Object(o.useState)(!1),p=b[0],d=b[1],h=Object(o.useState)(),f=h[0],y=h[1],m=Object(s.a)(c,d,y),v='import React from "react";\nimport Alert from "@material-tailwind/react/Alert";\n\nexport default function Alert() {\n  return (\n    <Alert color="'.concat(a,'">Material Tailwind Alerts</Alert>\n  );\n}');return Object(n.jsxs)(n.Fragment,{children:[p?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",onClick:function(){return d(!1)},children:Object(n.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:Object(n.jsxs)("div",{className:"border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(n.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",children:[Object(n.jsx)("h5",{className:"text-2xl font-normal mt-0 mb-0 ",children:"Component not supported"}),Object(n.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return d(!1)},children:Object(n.jsx)("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),Object(n.jsx)("div",{className:"relative p-6 flex-auto",children:Object(n.jsxs)("p",{className:"text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",children:["At the moment we do not support the choosen framework (",f,") for this component."]})})]})})}),Object(n.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,Object(n.jsx)(u.a,{copyText:r,onCopy:t,activeColor:a,activeFramework:c,codeToShow:v,onColorClick:function(e){return i(e)},onFrameworkClick:m,children:Object(n.jsxs)(g.a,{color:a,children:[Object(n.jsxs)("span",{className:"font-medium uppercase",children:[a,"!"]})," This is a"," ",a.toLowerCase()," alert - check it out!"]})})]})}var d=t("8wsC"),h={blueGray:"bg-blue-gray-500",gray:"bg-gray-500",brown:"bg-brown-500",deepOrange:"bg-deep-orange-500",orange:"bg-orange-500",amber:"bg-amber-500",yellow:"bg-yellow-600",lime:"bg-lime-500",lightGreen:"bg-light-green-500",green:"bg-green-500",teal:"bg-teal-500",cyan:"bg-cyan-500",lightBlue:"bg-light-blue-500",blue:"bg-blue-500",indigo:"bg-indigo-500",deepPurple:"bg-deep-purple-500",purple:"bg-purple-500",pink:"bg-pink-500",red:"bg-red-500"};function f(e){var r=e.copyText,t=e.onCopy,l=Object(o.useState)("lightBlue"),a=l[0],i=l[1],c=Object(o.useState)("react")[0],b=Object(o.useState)(!0),g=b[0],p=b[1],f=Object(o.useState)(!1),y=f[0],m=f[1],v=Object(o.useState)(),x=v[0],j=v[1],w=Object(s.a)(c,m,j),O='import React from "react";\nimport ClosingAlert from "@material-tailwind/react/ClosingAlert";\n\nexport default function ClosingAlert() {\n  return (\n    <ClosingAlert color="'.concat(a,'">Material Tailwind Tailwind Closing Alerts</ClosingAlert>\n  );\n}');return Object(n.jsxs)(n.Fragment,{children:[y?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",onClick:function(){return m(!1)},children:Object(n.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:Object(n.jsxs)("div",{className:"border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(n.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",children:[Object(n.jsx)("h5",{className:"text-2xl font-normal mt-0 mb-0 ",children:"Component not supported"}),Object(n.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return m(!1)},children:Object(n.jsx)("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),Object(n.jsx)("div",{className:"relative p-6 flex-auto",children:Object(n.jsxs)("p",{className:"text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",children:["At the moment we do not support the choosen framework (",x,") for this component."]})})]})})}),Object(n.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,Object(n.jsx)(u.a,{copyText:r,onCopy:t,activeColor:a,activeFramework:c,codeToShow:O,onColorClick:function(e){return i(e)},onFrameworkClick:w,children:g?Object(n.jsxs)("div",{className:"flex items-center gap-3 text-white p-4 pr-12 border-0 rounded-lg relative mb-4 ".concat(h[a]," transition-all duration-300"),children:[Object(n.jsxs)("span",{className:"font-medium uppercase",children:[a,"!"]})," This is a"," ",a.toLowerCase()," closing alert - check it out!",Object(n.jsx)("button",{className:"absolute right-4 top-1/3 transform -translate-y-1/3 w-6 h-6 bg-transparent text-2xl outline-none focus:outline-none",onClick:function(e){return function(e){var r,t=e.target.parentNode.parentNode;t.classList.add("opacity-0"),Array.from(t.classList).map((function(e){return e.includes("duration")?r=e.split("-")[1]:null})),setTimeout((function(){return p(!1)}),r?parseInt(r,10)+100:250)}(e)},children:Object(n.jsx)("span",{className:"leading-none text-4xl",children:"\xd7"})})]}):Object(n.jsx)("div",{className:"flex justify-center",children:Object(n.jsx)(d.a,{color:a,onClick:function(){return p(!0)},children:"Revert Changes"})})})]})}function y(){var e=Object(o.useState)(null),r=e[0],t=e[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.a,{title:"React Alerts"}),Object(n.jsx)(i.a,{}),Object(n.jsxs)(a.a,{children:[Object(n.jsx)(c.a,{title:"React Alerts",description:"Provide contextual feedback messages for typical user actions with the handful of available and flexible Material Tailwind alerts."}),Object(n.jsx)(b.a,{title:"Simple Alert"}),Object(n.jsx)(p,{copyText:"Alerts"===r?"Copied":"Copy",onCopy:function(e){return t(e?"Alerts":"")}}),Object(n.jsx)("div",{className:"h-20",children:"\xa0"}),Object(n.jsx)(b.a,{title:"Closing Alert"}),Object(n.jsx)(f,{copyText:"Alerts"===r?"Copied":"Copy",onCopy:function(e){return t(e?"Alerts":"")}})]})]})}},rHrb:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.CopyToClipboard=void 0;var n=l(t("q1tI")),o=l(t("+QRC"));function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function b(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function u(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,r){return!r||"object"!==a(r)&&"function"!==typeof r?p(e):r}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,r){return(d=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var f=function(e){function r(){var e,t;b(this,r);for(var l=arguments.length,a=new Array(l),i=0;i<l;i++)a[i]=arguments[i];return h(p(t=s(this,(e=g(r)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var r=t.props,l=r.text,a=r.onCopy,i=r.children,c=r.options,b=n.default.Children.only(i),u=(0,o.default)(l,c);a&&a(l,u),b&&b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e)})),t}var t,l,a;return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&d(e,r)}(r,e),t=r,(l=[{key:"render",value:function(){var e=this.props,r=(e.text,e.onCopy,e.options,e.children),t=c(e,["text","onCopy","options","children"]),o=n.default.Children.only(r);return n.default.cloneElement(o,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(t,!0).forEach((function(r){h(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},t,{onClick:this.onClick}))}}])&&u(t.prototype,l),a&&u(t,a),r}(n.default.PureComponent);r.CopyToClipboard=f,h(f,"defaultProps",{onCopy:void 0,options:void 0})}},[["/UQq",0,1,2,3,4,5]]]);