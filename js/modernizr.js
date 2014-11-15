window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&y[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+S.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+w.join(r+" ")+r).split(" "),c(i,t,n))}var u,s,f,d="2.8.3",p={},m=!0,h=t.documentElement,g="modernizr",v=t.createElement(g),y=v.style,b=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),E="Webkit Moz O ms",S=E.split(" "),w=E.toLowerCase().split(" "),C={svg:"http://www.w3.org/2000/svg"},j={},x=[],N=x.slice,M=function(e,n,r,o){var i,a,c,l,u=t.createElement("div"),s=t.body,f=s||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:g+(r+1),u.appendChild(c);return i=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),u.id=g,(s?u:f).innerHTML+=i,f.appendChild(u),s||(f.style.background="",f.style.overflow="hidden",l=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),a=n(u,e),s?u.parentNode.removeChild(u):(f.parentNode.removeChild(f),h.style.overflow=l),!!a},T=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return M("@media "+t+" { #"+g+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},k={}.hasOwnProperty;f=o(k,"undefined")||o(k.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return k.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=N.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(N.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(N.call(arguments)))};return r}),j.flexbox=function(){return l("flexWrap")},j.flexboxlegacy=function(){return l("boxDirection")},j.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:M(["@media (",b.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},j.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(y.backgroundColor,"rgba")},j.backgroundsize=function(){return l("backgroundSize")},j.svg=function(){return!!t.createElementNS&&!!t.createElementNS(C.svg,"svg").createSVGRect};for(var z in j)f(j,z)&&(s=z.toLowerCase(),p[s]=j[z](),x.push((p[s]?"":"no-")+s));return p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(h.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),v=u=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function i(e,n,r){if(n||(n=t),s)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||p.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),s)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),l=c.length;l>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var r=o(e);return y.shivCSS&&!u&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||c(e,r),e}var u,s,f="3.7.0",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,s=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:s,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:a};e.html5=y,l(t)}(this,t),p._version=d,p._prefixes=b,p._domPrefixes=w,p._cssomPrefixes=S,p.mq=T,p.testProp=function(e){return a([e])},p.testAllProps=l,p.testStyles=M,h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+x.join(" "):""),p}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function l(e,n,r,o,i,l,u){function s(t){if(!p&&a(f.readyState)&&(b.r=p=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&m(function(){S.removeChild(f)},50);for(var r in N[n])N[n].hasOwnProperty(r)&&N[n][r].onload()}}var u=u||d.errorTimeout,f=t.createElement(e),p=0,g=0,b={t:r,s:n,e:i,a:l,x:u};1===N[n]&&(g=1,N[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){s.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===N[n]?(S.insertBefore(f,E?null:h),m(s,u)):N[n].push(f))}function u(e,t,n,r,i){return y=0,t=t||"j",o(e)?l("c"==t?C:w,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function s(){var e=d;return e.loader={load:u,i:0},e}var f,d,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,S=E?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,w=b?"object":p?"script":"img",C=p?"script":w,j=Array.isArray||function(e){return"[object Array]"==g.call(e)},x=[],N={},M={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=x.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=M[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=x[n](i);return i}function a(e,o,i,a,c){var l=t(e),u=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,i,a,c):(N[l.url]?l.noexec=!0:N[l.url]=1,i.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(u))&&i.load(function(){s(),o&&o(l.origUrl,c,a),u&&u(l.origUrl,c,a),N[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,u);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[l])),a(e[l],f,t,l,u))}else!n&&p()}var c,l,u=!!e.test,s=e.load||e.both,f=e.callback||i,d=f,p=e.complete||i;n(u?e.yep:e.nope,!!s),s&&n(s)}var l,u,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(j(e))for(l=0;l<e.length;l++)u=e[l],o(u)?a(u,0,f,0):j(u)?d(u):Object(u)===u&&c(u,f);else Object(e)===e&&c(e,f)},d.addPrefix=function(e,t){M[e]=t},d.addFilter=function(e){x.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=s(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,u){var s,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=u?c:n||i,p.onreadystatechange=p.onload=function(){!s&&a(p.readyState)&&(s=1,n(),p.onload=p.onreadystatechange=null)},m(function(){s||(s=1,n(1))},o),l?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,l){var u,o=t.createElement("link"),n=l?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(u in r)o.setAttribute(u,r[u]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("cssvhunit",function(){var e;return Modernizr.testStyles("#modernizr { height: 50vh; }",function(t){var n=parseInt(window.innerHeight/2,10),r=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);e=r==n}),e});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIj8iXSwibmFtZXMiOlsid2luZG93IiwiTW9kZXJuaXpyIiwiYSIsImIiLCJjIiwiQiIsImoiLCJjc3NUZXh0IiwiRCIsIkUiLCJpbmRleE9mIiwiRiIsImQiLCJlIiwiRyIsImYiLCJiaW5kIiwiSCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJvIiwiam9pbiIsInNwbGl0IiwicCIsImsiLCJ3IiwiQSIsImciLCJkb2N1bWVudEVsZW1lbnQiLCJoIiwiaSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm0iLCJ0b1N0cmluZyIsIm4iLCJ0b0xvd2VyQ2FzZSIsInEiLCJzdmciLCJyIiwidSIsInYiLCJ4IiwibCIsImJvZHkiLCJwYXJzZUludCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJiYWNrZ3JvdW5kIiwib3ZlcmZsb3ciLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ5IiwibWF0Y2hNZWRpYSIsIm1zTWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwiY3VycmVudFN0eWxlIiwieiIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiRnVuY3Rpb24iLCJ0aGlzIiwiVHlwZUVycm9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJjb25jYXQiLCJPYmplY3QiLCJmbGV4Ym94IiwiZmxleGJveGxlZ2FjeSIsInRvdWNoIiwiRG9jdW1lbnRUb3VjaCIsIm9mZnNldFRvcCIsInJnYmEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kc2l6ZSIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZVNWR1JlY3QiLCJJIiwicHVzaCIsImFkZFRlc3QiLCJjbGFzc05hbWUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluc2VydEJlZm9yZSIsImxhc3RDaGlsZCIsImZpcnN0Q2hpbGQiLCJzIiwiZWxlbWVudHMiLCJjYWNoZSIsImNsb25lTm9kZSIsInRlc3QiLCJjcmVhdGVFbGVtIiwiY2FuSGF2ZUNoaWxkcmVuIiwidGFnVXJuIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJsZW5ndGgiLCJjcmVhdGVGcmFnIiwic2hpdk1ldGhvZHMiLCJyZXBsYWNlIiwic2hpdkNTUyIsImhhc0NTUyIsImh0bWw1IiwiY2hpbGROb2RlcyIsInZlcnNpb24iLCJzdXBwb3J0c1Vua25vd25FbGVtZW50cyIsInR5cGUiLCJzaGl2RG9jdW1lbnQiLCJfdmVyc2lvbiIsIl9wcmVmaXhlcyIsIl9kb21QcmVmaXhlcyIsIl9jc3NvbVByZWZpeGVzIiwibXEiLCJ0ZXN0UHJvcCIsInRlc3RBbGxQcm9wcyIsInRlc3RTdHlsZXMiLCJkb2N1bWVudCIsInNoaWZ0IiwidCIsImluamVjdENzcyIsImluamVjdEpzIiwicmVhZHlTdGF0ZSIsIm9ubG9hZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImVycm9yVGltZW91dCIsImRhdGEiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm9uZXJyb3IiLCJzcGxpY2UiLCJsb2FkZXIiLCJsb2FkIiwic2V0VGltZW91dCIsImNyZWF0ZVJhbmdlIiwiY29tcGFyZU5vZGUiLCJvcGVyYSIsImF0dGFjaEV2ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwidGltZW91dCIsInBvcCIsInVybCIsIm9yaWdVcmwiLCJwcmVmaXhlcyIsImF1dG9DYWxsYmFjayIsImJ5cGFzcyIsImluc3RlYWQiLCJub2V4ZWMiLCJmb3JjZUNTUyIsImZvcmNlSlMiLCJhdHRycyIsImJvdGgiLCJjYWxsYmFjayIsImNvbXBsZXRlIiwieWVwIiwibm9wZSIsInllcG5vcGUiLCJhZGRQcmVmaXgiLCJhZGRGaWx0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV4ZWN1dGVTdGFjayIsInNldEF0dHJpYnV0ZSIsImhyZWYiLCJyZWwiLCJpbm5lckhlaWdodCJdLCJtYXBwaW5ncyI6IkFBR0NBLE9BQU9DLFVBQVUsU0FBU0MsRUFBRUMsRUFBRUMsR0FB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