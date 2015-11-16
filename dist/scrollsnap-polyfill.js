!function(n,o,l){"use strict";function t(n){n.each(function(n){var l=o.querySelectorAll(n.getSelectors()),t=n.getDeclaration();[].forEach.call(l,function(n){r(n,t)})})}function e(n){n.each(function(n){var l=o.querySelectorAll(n.getSelectors());[].forEach.call(l,function(n){c(n)})})}function r(n,l){T&&console.log("[Scrollsnap] setting up object: "+n,l);var t=n.tagName;("body"==t.toLowerCase()||"html"==t.toLowerCase())&&(n=o),n.addEventListener("scroll",A,!1),n.snapLengthUnit=f(l)}function c(n){T&&console.log("[Scrollsnap] tearing down object: "+n,declaration);var l=n.tagName;("body"==l.toLowerCase()||"html"==l.toLowerCase())&&(n=o),n.removeEventListener("scroll",A,!1),n.snapLengthUnit=null}function a(n,o,l){var t={y:h(o,o.snapLengthUnit.y),x:p(o,o.snapLengthUnit.x)},e=n.scrollTop,r=n.scrollLeft,c={y:e/t.y,x:r/t.x},a={y:q.y/t.y,x:q.x/t.x},f={y:0,x:0};f.y=s(l.y,c.y),f.x=s(l.x,c.x),f.y=i(a.y,c.y,f.y,q.y,e),f.x=i(a.x,c.x,f.x,q.x,r);var g={y:f.y*t.y,x:f.x*t.x};return g.y=u(0,y(n),g.y),g.x=u(0,m(n),g.x),T&&console.log("[Scrollsnap] should scroll to:",g,e,r,c,f,t),g}function s(n,o){return-1===n?Math.floor(o):Math.ceil(o)}function i(n,o,l,t,e){return Math.abs(n-o)>=M&&Math.abs(l-o)>S?Math.round(o):Math.abs(t-e)<5&&Math.abs(n-o)<M&&Math.abs(l-o)>L?(T&&console.log("[Scrollsnap] round because of first constraint: ",e,t),Math.round(o)):l}function u(n,o,l){return Math.max(Math.min(l,o),n)}function f(n){var o,l=/repeat\((\d+)(px|vh|vw|%)\)/g,t={y:{value:"%",unit:1},x:{value:"%",unit:1}};return"undefined"!==n["scroll-snap-points-y"]&&(o=l.exec(n["scroll-snap-points-y"]),null!==o&&(t.y={value:o[1],unit:o[2]})),"undefined"!==n["scroll-snap-points-x"]&&(o=l.exec(n["scroll-snap-points-x"]),null!==o&&(t.x={value:o[1],unit:o[2]})),T&&console.log("[Scrollsnap] parse declaration:",n,t),t}function h(l,t){return"vh"==t.unit?Math.max(o.documentElement.clientHeight,n.innerHeight||1)/100*t.value:"%"==t.unit?g(l)/100*t.value:g(l)/t.value}function p(l,t){return"vw"==t.unit?Math.max(o.documentElement.clientWidth,n.innerWidth||1)/100*t.value:"%"==t.unit?x(l)/100*t.value:x(l)/t.value}function y(n){return T&&console.log("[Scrollsnap] scrollheight:"+n.scrollHeight),n.scrollHeight}function m(n){return T&&console.log("[Scrollsnap] scrollheight:"+n.scrollWidth),n.scrollWidth}function g(n){return n.offsetHeight}function x(n){return n.offsetWidth}function d(l){return l==o||l==n?o.querySelector("body"):l}function v(l,t){var e=Math.abs(l-t),r=100/Math.max(o.documentElement.clientHeight,n.innerHeight||1)*e,c=100/b*r;return T&&console.log("[Scrollsnap] duration:"+c,e,r),isNaN(c)?0:Math.max(b/1.5,Math.min(c,b))}var S=1-.18,L=.95,M=2,w=45,b=768,T=!0;if("scrollSnapType"in o.documentElement.style||"webkitScrollSnapType"in o.documentElement.style)return void(T&&console.log("[Scrollsnap] native support."));var E,N,H=null,q=null,A=function(n){E=n.target,N=d(E),F&&(cancelAnimationFrame(F)||clearTimeout(F)),H?clearTimeout(H):(q={y:N.scrollTop,x:N.scrollLeft},T&&console.log("[Scrollsnap] saving new scroll start: "+q)),H=setTimeout(U,w)},U=function(){if(q.y==N.scrollTop&&q.x==N.scrollLeft)return void(T&&console.log("[Scrollsnap] ignore scroll timeout because not actually moving.",q,N.scrollTop,N.scrollLeft));var n={y:q.y-N.scrollTop>0?-1:1,x:q.x-N.scrollLeft>0?-1:1},o=a(N,E,n);E.removeEventListener("scroll",A,!1),T&&console.log("[Scrollsnap] called scroll timeout. direction: ",n,"snap point: ",o,"removed event listener. now smooth scrolling."),D(N,o,function(){E.addEventListener("scroll",A,!1),T&&console.log("[Scrollsnap] re-adding event listener on "+E)}),q=o,T&&console.log("[Scrollsnap] saving scroll start:",q)},W=function(n){return n*n*n},C=function(n,o,l,t){return l>t?o:n+(o-n)*W(l/t)},F=null,D=function(o,l,t){var e={y:o.scrollTop,x:o.scrollLeft},r=Date.now(),c=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(o){n.setTimeout(o,15)},a=Math.max(v(e.y,l.y),v(e.x,l.x));T&&console.log("[Scrollsnap] smooth scroll:",l,a);var s=function(){var n=Date.now()-r;if(isNaN(l.y)||(T&&console.log("[Scrollsnap] smooth scroll Y:",l.y),o.scrollTop=C(e.y,l.y,n,a)),isNaN(l.x)||(T&&console.log("[Scrollsnap] smooth scroll X:",l.x),o.scrollLeft=C(e.x,l.x,n,a)),n>a){if("function"==typeof t)return t(l)}else F=c(s)};s()};new Polyfill({declarations:["*scroll-snap-type:*","*scroll-snap-point-y:*"]}).doMatched(t).undoUnmatched(e)}(window,document);