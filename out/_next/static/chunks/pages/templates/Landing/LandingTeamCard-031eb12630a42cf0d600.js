(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6043],{39931:function(e){e.exports=class{constructor(){this.x=0,this.y=0,this.z=0}findFurthestPoint(e,r,t,n,o,l){return this.x=e-t>r/2?0:r,this.y=n-l>o/2?0:o,this.z=Math.hypot(this.x-(e-t),this.y-(n-l)),this.z}appyStyles(e,r,t,n,o){e.classList.add("ripple"),e.style.backgroundColor="dark"===r?"rgba(0,0,0, 0.2)":"rgba(255,255,255, 0.3)",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.position="absolute",e.style.left=o.clientX-t.left-n+"px",e.style.top=o.clientY-t.top-n+"px",e.style.width=e.style.height=2*n+"px"}applyAnimation(e){e.animate([{transform:"scale(0)",opacity:1},{transform:"scale(1.5)",opacity:0}],{duration:500,easing:"linear"})}create(e,r){const t=e.currentTarget;t.style.position="relative",t.style.overflow="hidden";const n=t.getBoundingClientRect(),o=this.findFurthestPoint(e.clientX,t.offsetWidth,n.left,e.clientY,t.offsetHeight,n.top),l=document.createElement("span");this.appyStyles(l,r,n,o,e),this.applyAnimation(l),t.appendChild(l),setTimeout((()=>l.remove()),500)}}},96086:function(e){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},46445:function(e,r,t){"use strict";var n=t(26265),o=t(85893),l=t(59999),i=t(38347),a=t(67294),g=t(39931),b=t.n(g);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p={blueGray:"bg-blue-gray-500",gray:"bg-gray-500",brown:"bg-brown-500",deepOrange:"bg-deep-orange-500",orange:"bg-orange-500",amber:"bg-amber-500",yellow:"bg-yellow-600",lime:"bg-lime-500",lightGreen:"bg-light-green-500",green:"bg-green-500",teal:"bg-teal-500",cyan:"bg-cyan-500",lightBlue:"bg-light-blue-500",blue:"bg-blue-500",indigo:"bg-indigo-500",deepPurple:"bg-deep-purple-500",purple:"bg-purple-500",pink:"bg-pink-500",red:"bg-red-500"},d={blueGray:"hover:bg-blue-gray-700",gray:"hover:bg-gray-700",brown:"hover:bg-brown-700",deepOrange:"hover:bg-deep-orange-700",orange:"hover:bg-orange-700",amber:"hover:bg-amber-700",yellow:"hover:bg-yellow-700",lime:"hover:bg-lime-700",lightGreen:"hover:bg-light-green-700",green:"hover:bg-green-700",teal:"hover:bg-teal-700",cyan:"hover:bg-cyan-700",lightBlue:"hover:bg-light-blue-700",blue:"hover:bg-blue-700",indigo:"hover:bg-indigo-700",deepPurple:"hover:bg-deep-purple-700",purple:"hover:bg-purple-700",pink:"hover:bg-pink-700",red:"hover:bg-red-700"},s={blueGray:"focus:bg-blue-gray-400",gray:"focus:bg-gray-400",brown:"focus:bg-brown-400",deepOrange:"focus:bg-deep-orange-400",orange:"focus:bg-orange-400",amber:"focus:bg-amber-400",yellow:"focus:bg-yellow-500",lime:"focus:bg-lime-400",lightGreen:"focus:bg-light-green-400",green:"focus:bg-green-400",teal:"focus:bg-teal-400",cyan:"focus:bg-cyan-400",lightBlue:"focus:bg-light-blue-400",blue:"focus:bg-blue-400",indigo:"focus:bg-indigo-400",deepPurple:"focus:bg-deep-purple-400",purple:"focus:bg-purple-400",pink:"focus:bg-pink-400",red:"focus:bg-red-400"},y={blueGray:"active:bg-blue-gray-800",gray:"active:bg-gray-800",brown:"active:bg-brown-800",deepOrange:"active:bg-deep-orange-800",orange:"active:bg-orange-800",amber:"active:bg-amber-800",yellow:"active:bg-yellow-800",lime:"active:bg-lime-800",lightGreen:"active:bg-light-green-800",green:"active:bg-green-800",teal:"active:bg-teal-800",cyan:"active:bg-cyan-800",lightBlue:"active:bg-light-blue-800",blue:"active:bg-blue-800",indigo:"active:bg-indigo-800",deepPurple:"active:bg-deep-purple-800",purple:"active:bg-purple-800",pink:"active:bg-pink-800",red:"active:bg-red-800"},h={blueGray:"text-blue-gray-500",gray:"text-gray-500",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"},f={blueGray:"border-blue-gray-500",gray:"border-gray-500",brown:"border-brown-500",deepOrange:"border-deep-orange-500",orange:"border-orange-500",amber:"border-amber-500",yellow:"border-yellow-600",lime:"border-lime-500",lightGreen:"border-light-green-500",green:"border-green-500",teal:"border-teal-500",cyan:"border-cyan-500",lightBlue:"border-light-blue-500",blue:"border-blue-500",indigo:"border-indigo-500",deepPurple:"border-deep-purple-500",purple:"border-purple-500",pink:"border-pink-500",red:"border-red-500"},v={blueGray:"hover:bg-blue-gray-50",gray:"hover:bg-gray-50",brown:"hover:bg-brown-50",deepOrange:"hover:bg-deep-orange-50",orange:"hover:bg-orange-50",amber:"hover:bg-amber-50",yellow:"hover:bg-yellow-50",lime:"hover:bg-lime-50",lightGreen:"hover:bg-light-green-50",green:"hover:bg-green-50",teal:"hover:bg-teal-50",cyan:"hover:bg-cyan-50",lightBlue:"hover:bg-light-blue-50",blue:"hover:bg-blue-50",indigo:"hover:bg-indigo-50",deepPurple:"hover:bg-deep-purple-50",purple:"hover:bg-purple-50",pink:"hover:bg-pink-50",red:"hover:bg-red-50"},x={blueGray:"hover:border-blue-gray-700",gray:"hover:border-gray-700",brown:"hover:border-brown-700",deepOrange:"hover:border-deep-orange-700",orange:"hover:border-orange-700",amber:"hover:border-amber-700",yellow:"hover:border-yellow-700",lime:"hover:border-lime-700",lightGreen:"hover:border-light-green-700",green:"hover:border-green-700",teal:"hover:border-teal-700",cyan:"hover:border-cyan-700",lightBlue:"hover:border-light-blue-700",blue:"hover:border-blue-700",indigo:"hover:border-indigo-700",deepPurple:"hover:border-deep-purple-700",purple:"hover:border-purple-700",pink:"hover:border-pink-700",red:"hover:border-red-700"},m={blueGray:"hover:text-blue-gray-700",gray:"hover:text-gray-700",brown:"hover:text-brown-700",deepOrange:"hover:text-deep-orange-700",orange:"hover:text-orange-700",amber:"hover:text-amber-700",yellow:"hover:text-yellow-700",lime:"hover:text-lime-700",lightGreen:"hover:text-light-green-700",green:"hover:text-green-700",teal:"hover:text-teal-700",cyan:"hover:text-cyan-700",lightBlue:"hover:text-light-blue-700",blue:"hover:text-blue-700",indigo:"hover:text-indigo-700",deepPurple:"hover:text-deep-purple-700",purple:"hover:text-purple-700",pink:"hover:text-pink-700",red:"hover:text-red-700"},w={blueGray:"active:bg-blue-gray-100",gray:"active:bg-gray-100",brown:"active:bg-brown-100",deepOrange:"active:bg-deep-orange-100",orange:"active:bg-orange-100",amber:"active:bg-amber-100",yellow:"active:bg-yellow-100",lime:"active:bg-lime-100",lightGreen:"active:bg-light-green-100",green:"active:bg-green-100",teal:"active:bg-teal-100",cyan:"active:bg-cyan-100",lightBlue:"active:bg-light-blue-100",blue:"active:bg-blue-100",indigo:"active:bg-indigo-100",deepPurple:"active:bg-deep-purple-100",purple:"active:bg-purple-100",pink:"active:bg-pink-100",red:"active:bg-red-100"},O=(0,a.forwardRef)((function(e,r){var t,n,a=e.children,g=e.color,c=e.buttonType,O=e.size,j=void 0===O?"regular":O,P=e.rounded,k=e.iconOnly,Z=e.ripple,G=(0,i.Z)(e,["children","color","buttonType","size","rounded","iconOnly","ripple"]),D=new(b()),E=[],S=["flex","items-center","gap-1","font-bold","outline-none","uppercase","tracking-wider","focus:outline-none","focus:shadow-none","transition-all","duration-300",P=P?"rounded-full":"rounded-lg"],B=[p[g],d[g],s[g],y[g],"text-white","shadow-md","hover:shadow-xl"],N=["bg-transparent","border","border-solid","shadow-none",h[g],f[g],v[g],x[g],m[g],v[g],w[g]],T=["bg-transparent",h[g],v[g],m[g],v[g],w[g]],_=[].concat(S,[k?"w-8 h-8 p-0 grid place-items-center":"py-1.5 px-4","text-xs","leading-normal"]),z=[].concat(S,[k?"w-10 h-10 p-0 grid place-items-center":"py-2.5 px-6","text-xs","leading-normal"]),A=[].concat(S,[k?"w-12 h-12 p-0 grid place-items-center":"py-3 px-7","text-sm","leading-relaxed"]);if("sm"===j)(t=E).push.apply(t,(0,l.Z)(_));else if("lg"===j){var C;(C=E).push.apply(C,(0,l.Z)(A))}else{var I;(I=E).push.apply(I,(0,l.Z)(z))}if("outline"===c)(n=E).push.apply(n,N);else if("link"===c){var R;(R=E).push.apply(R,T)}else{var X;(X=E).push.apply(X,B)}return E=E.join(" "),(0,o.jsx)("button",u(u({},G),{},{className:E,ref:r,onMouseUp:function(e){"dark"===Z&&D.create(e,"dark"),"light"===Z&&D.create(e,"light")},children:a}))}));r.Z=O},28300:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(26265),o=t(85893),l=t(38347),i=(t(67294),t(45697)),a=t.n(i);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var c={white:"text-white",blueGray:"text-blue-gray-500",gray:"text-gray-500",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"};function u(e){var r,t=e.family,n=void 0===t?"material-icons":t,i=e.name,a=e.color,g=e.size,u=(0,l.Z)(e,["family","name","color","size"]);return"material-icons"===n?r=(0,o.jsx)("span",b(b({},u),{},{className:"".concat(n," ").concat(c[a]," ").concat(g?"text-".concat(g):"text-base"," leading-none"),children:i})):"font-awesome"===n&&(r=(0,o.jsx)("i",b(b({},u),{},{className:"".concat(i," ").concat(c[a]," text-").concat(g)}))),r}u.propTypes={family:a().string,name:a().string.isRequired,color:a().string,size:a().string}},91066:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var n=t(85893),o=t(26265),l=t(38347);t(67294);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e){var r=e.src,t=e.raised,o=e.rounded,i=(0,l.Z)(e,["src","raised","rounded"]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("img",a(a({},i),{},{src:r,className:"".concat(o?"rounded-full":"rounded-xl"," ").concat(t?"shadow-xl":""," max-w-full h-auto align-middle border-none")}))})}},74023:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var n=t(26265),o=t(85893),l=t(38347);t(67294);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g={white:"text-white",blueGray:"text-blue-gray-500",gray:"text-gray-900",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"};function b(e){var r=e.children,t=e.color,n=(0,l.Z)(e,["children","color"]);return(0,o.jsx)("h1",a(a({},n),{},{className:"".concat(g[t]," text-xl font-serif font-bold leading-normal mt-0 mb-2"),children:r}))}},67954:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var n=t(26265),o=t(85893),l=t(38347);t(67294);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g={white:"text-gray-200",blueGray:"text-blue-gray-700",gray:"text-gray-700",brown:"text-brown-700",deepOrange:"text-deep-orange-700",orange:"text-orange-700",amber:"text-amber-700",yellow:"text-yellow-700",lime:"text-lime-700",lightGreen:"text-light-green-700",green:"text-green-700",teal:"text-teal-700",cyan:"text-cyan-700",lightBlue:"text-light-blue-700",blue:"text-blue-700",indigo:"text-indigo-700",deepPurple:"text-deep-purple-700",purple:"text-purple-700",pink:"text-pink-700",red:"text-red-700"};function b(e){var r=e.children,t=e.color,n=(0,l.Z)(e,["children","color"]);return(0,o.jsx)("p",a(a({},n),{},{className:"".concat(g[t]," text-base font-light leading-relaxed mt-0 mb-4"),children:r}))}},82008:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var n=t(85893),o=(t(67294),t(91066)),l=t(74023),i=t(67954),a=t(46445),g=t(28300);function b(e){var r=e.img,t=e.name,b=e.position;return(0,n.jsx)("div",{className:"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4",children:(0,n.jsxs)("div",{className:"px-6",children:[(0,n.jsx)(o.Z,{src:r,alt:t,raised:!0}),(0,n.jsxs)("div",{className:"pt-6 text-center",children:[(0,n.jsx)(l.Z,{color:"gray",children:t}),(0,n.jsx)(i.Z,{color:"blueGray",children:b}),(0,n.jsxs)("div",{className:"flex items-center justify-center",children:[(0,n.jsx)(a.Z,{color:"lightBlue",buttonType:"link",ripple:"dark",rounded:!0,iconOnly:!0,children:(0,n.jsx)(g.Z,{family:"font-awesome",name:"fab fa-twitter",size:"lg"})}),(0,n.jsx)(a.Z,{color:"blue",buttonType:"link",ripple:"dark",rounded:!0,iconOnly:!0,children:(0,n.jsx)(g.Z,{family:"font-awesome",name:"fab fa-facebook-f",size:"lg"})}),(0,n.jsx)(a.Z,{color:"pink",buttonType:"link",ripple:"dark",rounded:!0,iconOnly:!0,children:(0,n.jsx)(g.Z,{family:"font-awesome",name:"fab fa-dribbble",size:"lg"})})]})]})]})})}},37622:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/templates/Landing/LandingTeamCard",function(){return t(82008)}])},75093:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.d(r,{Z:function(){return n}})},26265:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,{Z:function(){return n}})},38347:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(r,{Z:function(){return n}})},59999:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(75093);var o=t(40355);function l(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40355:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(75093);function o(e,r){if(e){if("string"===typeof e)return(0,n.Z)(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,n.Z)(e,r):void 0}}}},function(e){e.O(0,[9774],(function(){return r=37622,e(e.s=r);var r}));var r=e.O();_N_E=r}]);