(this.webpackJsonpporto2=this.webpackJsonpporto2||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var r=n(1),s=n.n(r),a=n(4),i=n.n(a),c=n(2),l=n(0);var o=function(){return Object(l.jsx)("div",{className:"w-full h-full bg-gray-50 rounded-full"})},d=n.p+"static/media/picture.2d1e28ac.png";var u=function(){return Object(l.jsx)("div",{className:"w-full h-full bg-gray-300 rounded-full",children:Object(l.jsx)("img",{src:d,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"},alt:"profil picture"})})};var m=function(t){var e=t.section,n=Object(r.useState)({}),s=Object(c.a)(n,2),a=s[0],i=s[1],d=Object(r.useState)({}),m=Object(c.a)(d,2),f=m[0],j=m[1],x=Object(r.useState)({}),b=Object(c.a)(x,2),y=b[0],h=b[1],v=Object(r.useState)({}),g=Object(c.a)(v,2),w=g[0],p=g[1],O=Object(r.useState)(Object(l.jsx)(o,{})),L=Object(c.a)(O,2),N=L[0],R=L[1],E=Object(r.useRef)(),C=Object(r.useRef)(),B=Object(r.useRef)(),k=Object(r.useRef)(),T=Object(r.useRef)(),H=Object(r.useRef)();return Object(r.useEffect)((function(){setTimeout((function(){E.current.classList.remove("opacity-0")}),600);var t=50,e=10,n=33,r=6;window.innerWidth<=768?(t=60,n=18,r=4):(t=50,n=33,r=6);var s="vw",a={width:"".concat(t).concat(s),height:"".concat(t).concat(s),minWidth:"".concat(n,"rem"),minHeight:"".concat(n,"rem"),borderRadius:"50%"},c={width:"".concat(t+e).concat(s),height:"".concat(t+e).concat(s),minWidth:"".concat(n+r,"rem"),minHeight:"".concat(n+r,"rem"),borderRadius:"50%"},l={width:"".concat(t+20).concat(s),height:"".concat(t+20).concat(s),minWidth:"".concat(n+2*r,"rem"),minHeight:"".concat(n+2*r,"rem"),borderRadius:"50%",zIndex:"-1"},o={width:"".concat(t-e).concat(s),height:"".concat(t-e).concat(s),minWidth:"".concat(n-r,"rem"),minHeight:"".concat(n-r,"rem"),borderRadius:"50%"};i(a),j(c),h(l),p(o),window.innerWidth<768?E.current.classList.add("pulsing"):E.current.classList.remove("pulsing");var d=function(){T.current.style.transform="translate(0px, 0px)",C.current.style.transform="translate(0px, 0px)",B.current.style.transform="translate(0px, 0px)",window.innerWidth<768?(T.current.style.width="50vw",C.current.style.width="60vw",B.current.style.width="70vw",k.current.style.width="80vw",T.current.style.height="50vw",C.current.style.height="60vw",B.current.style.height="70vw",k.current.style.height="80vw",T.current.style.minWidth="14rem",C.current.style.minWidth="18rem",B.current.style.minWidth="22rem",k.current.style.minWidth="26rem",T.current.style.minHeight="14rem",C.current.style.minHeight="18rem",B.current.style.minHeight="22rem",k.current.style.minHeight="26rem",E.current.classList.add("pulsing")):window.innerWidth>=768&&(T.current.style.width="40vw",C.current.style.width="50vw",B.current.style.width="60vw",k.current.style.width="70vw",T.current.style.height="40vw",C.current.style.height="50vw",B.current.style.height="60vw",k.current.style.height="70vw",T.current.style.minWidth="".concat(n-r,"rem"),C.current.style.minWidth="".concat(n,"rem"),B.current.style.minWidth="".concat(n+r,"rem"),k.current.style.minWidth="".concat(n+2*r,"rem"),T.current.style.minHeight="".concat(n-r,"rem"),C.current.style.minHeight="".concat(n,"rem"),B.current.style.minHeight="".concat(n+r,"rem"),k.current.style.minHeight="".concat(n+2*r,"rem"),E.current.classList.remove("pulsing"))},u=function(t){if(window.innerWidth>=768){var e=window.innerWidth/3+window.innerWidth/4,n=window.innerHeight/2,r=0,s=0;t.clientX>e?r=-t.clientX/30:t.clientX<e&&(r=(e-t.clientX)/25),t.clientY>n?s=-t.clientY/25:t.clientY<n&&(s=(n-t.clientY)/25),T.current.style.transform="translate(".concat(r/4,"px, ").concat(s/4,"px)"),C.current.style.transform="translate(".concat(r/5,"px, ").concat(s/5,"px)"),B.current.style.transform="translate(".concat(r/6,"px, ").concat(s/6,"px)")}};return window.addEventListener("resize",d),window.addEventListener("mousemove",u),function(){window.removeEventListener("resize",d),window.removeEventListener("mousemove",u)}}),[]),Object(r.useEffect)((function(){var t=function(){var t=document.getElementById(e);t.getBoundingClientRect().top<window.innerHeight/4&&t.getBoundingClientRect().top>=0&&H.current.classList.remove("scale-50","opacity-0"),(t.getBoundingClientRect().top<-100||t.getBoundingClientRect().bottom>window.innerHeight)&&H.current.classList.add("scale-50","opacity-0")},n=function(){switch(e){case"home":R(Object(l.jsx)(o,{}));break;case"about":R(Object(l.jsx)(u,{}));break;default:R(null)}};return window.addEventListener("transitionend",t),window.addEventListener("transitionend",n),function(){window.removeEventListener("transitionend",t),window.removeEventListener("transitionend",n)}}),[e]),Object(l.jsx)("div",{ref:E,style:{transitionDuration:"1200ms"},className:"w-full h-96 mt-20 fixed flex justify-center items-center md:left-1/3 md:block md:mt-0 md:h-screen transform ease-in-out opacity-0",children:Object(l.jsx)("div",{style:y,ref:k,className:"bg-gray-700 absolute flex justify-center items-center transform -translate-y-1/2 top-1/2 ease-out duration-300",children:Object(l.jsx)("div",{style:f,ref:B,className:"bg-gray-600 absolute flex justify-center items-center transform ease-out duration-300",children:Object(l.jsx)("div",{style:a,ref:C,className:"bg-gray-500 absolute flex justify-center items-center transform transitionease-out duration-300",children:Object(l.jsx)("div",{style:w,ref:T,className:"transform ease-out duration-300",children:Object(l.jsx)("div",{ref:H,className:"h-full w-full absolute flex justify-center items-center transform duration-500",children:N})})})})})})};var f=function(t){var e=t.sendClickState,n=Object(r.useRef)(),s=Object(r.useRef)(),a=Object(r.useRef)(),i=Object(r.useState)(!1),o=Object(c.a)(i,2),d=o[0],u=o[1],m=Object(r.useState)(!1),f=Object(c.a)(m,2),j=f[0],x=f[1];return Object(r.useEffect)((function(){var t=function(){window.innerWidth<768?(n.current.style.width="3.2rem",s.current.style.width="3.2rem",a.current.style.width="3.2rem"):window.innerWidth>=768&&(n.current.style.width="2rem",a.current.style.width="2rem")};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),Object(r.useEffect)((function(){x(!1),d?(window.innerWidth>=768?(n.current.style.transform="rotate(-45deg) translate(-0.67rem,0.67rem)",a.current.style.transform="rotate(45deg) translate(-0.67rem,-0.67rem)"):(n.current.style.transform="rotate(-45deg) translate(-0.48rem,0.48rem)",a.current.style.transform="rotate(45deg) translate(-0.48rem,-0.48rem)"),n.current.style.width="3.2rem",s.current.style.width="3.2rem",a.current.style.width="3.2rem",s.current.style.opacity="0"):(window.innerWidth>=768&&(n.current.style.width="2rem",a.current.style.width="2rem"),n.current.style.transform="rotate(0)",a.current.style.transform="rotate(0)",s.current.style.opacity="1"),e(d)}),[d]),Object(r.useEffect)((function(){j?window.innerWidth>=768&&(d?d&&(n.current.style.width="3.5rem",a.current.style.width="3.5rem"):(n.current.style.transform="translate(-0.78rem, -0.25rem)",a.current.style.transform="translate(-0.78rem, 0.25rem)",s.current.style.transform="translateX(-1.2rem)")):j||window.innerWidth>=768&&(d?d&&(n.current.style.width="3.2rem",a.current.style.width="3.2rem"):(n.current.style.transform="translate(0)",s.current.style.transform="translate(0)",a.current.style.transform="translate(0)"))}),[j,d]),Object(l.jsxs)("div",{className:"flex flex-col m-4 h-10 md:h-14 w-max justify-evenly md:mx-16 md:my-auto md:items-end cursor-pointer",style:{pointerEvents:"auto"},onClick:function(){return u(!d)},onMouseOver:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:[Object(l.jsx)("div",{className:"h-1 md:h-1.5 w-12 bg-gray-200 shadow-lg transition-all duration-500",ref:n}),Object(l.jsx)("div",{className:"h-1 md:h-1.5 w-12 bg-gray-200 shadow-lg transition-all duration-500",ref:s}),Object(l.jsx)("div",{className:"h-1 md:h-1.5 w-12 bg-gray-200 shadow-lg transition-all duration-500",ref:a})]})},j=n.p+"static/media/ico.addaee34.jpg";var x=function(t){var e=t.clicked,n=Object(r.useRef)(),s=Object(r.useRef)(),a=Object(r.useRef)(),i=Object(r.useRef)();Object(r.useEffect)((function(){e?(n.current.classList.remove("opacity-0"),s.current.classList.remove("-translate-y-8"),a.current.classList.remove("-translate-y-10"),i.current.classList.remove("-translate-y-12"),setTimeout((function(){s.current.style.transitionDuration="300ms",a.current.style.transitionDuration="300ms",i.current.style.transitionDuration="300ms"}),500)):(n.current.classList.add("opacity-0"),s.current.classList.add("-translate-y-8"),a.current.classList.add("-translate-y-10"),i.current.classList.add("-translate-y-12"),s.current.style.transitionDuration="1200ms",a.current.style.transitionDuration="1200ms",i.current.style.transitionDuration="1200ms")}),[e]);var c=function(t){var e=document.getElementById("app"),n=document.getElementById(t);e.style.transform="translateY(-".concat(n.offsetTop,"px)")};return Object(l.jsx)("div",{className:"flex h-screen w-3/4 bg-gray-900 bg-opacity-95",children:Object(l.jsxs)("div",{className:"font-roboto-slab text-center w-52 text-2xl my-14 sm:text-4xl sm:w-72 md:my-auto lg:w-80 mx-auto lg:text-5xl",children:[Object(l.jsx)("div",{ref:n,onClick:function(){return c("home")},className:"cursor-pointer w-full flex justify-center mb-5 transition-all transform opacity-0",style:{pointerEvents:"all",transitionDuration:"2000ms"},children:Object(l.jsx)("img",{src:j,style:{width:"20%",borderRadius:"50%"},alt:"home icon"})}),Object(l.jsx)("div",{ref:s,onClick:function(){return c("about")},className:"text-gray-300 font-roboto-mono cursor-pointer font-semibold w-full py-5 px-12 transition-all transform -translate-y-8 nav-item-hover",style:{pointerEvents:"all",transitionDuration:"1200ms"},children:"ABOUT"}),Object(l.jsx)("div",{ref:a,onClick:function(){return c("project")},className:"text-gray-300 font-roboto-mono cursor-pointer font-semibold w-full py-5 px-12 transition-all transform -translate-y-10 nav-item-hover",style:{pointerEvents:"all",transitionDuration:"1200ms"},children:"PROJECT"}),Object(l.jsx)("div",{ref:i,onClick:function(){return c("contact")},className:"text-gray-300 font-roboto-mono cursor-pointer font-semibold w-full py-5 px-12 transition-all transform -translate-y-12 nav-item-hover",style:{pointerEvents:"all",transitionDuration:"1200ms"},children:"CONTACT"})]})})};var b=function(){var t=Object(r.useRef)(),e=Object(r.useState)(!1),n=Object(c.a)(e,2),s=n[0],a=n[1];return Object(r.useEffect)((function(){t.current.classList.remove("translate-x-full"),t.current.classList.add("translate-x-3/4"),setTimeout((function(){t.current.classList.remove("opacity-0","duration-1000"),t.current.classList.add("duration-700")}),500)}),[]),Object(r.useEffect)((function(){s?t.current.classList.remove("translate-x-3/4"):t.current.classList.add("translate-x-3/4")}),[s]),Object(l.jsxs)("div",{className:"z-10 w-full flex justify-end fixed md:h-screen transition-all transform duration-500 translate-x-full ease-in-out opacity-0",ref:t,style:{pointerEvents:"none"},children:[Object(l.jsx)(f,{sendClickState:function(t){a(t)}}),Object(l.jsx)(x,{clicked:s})]})};var y=function(){var t=Object(r.useState)(["Basil Kaffi Ar Rahman  ","Fullstack Developer  "]),e=Object(c.a)(t,1)[0],n=Object(r.useState)(""),s=Object(c.a)(n,2),a=s[0],i=s[1],o=Object(r.useState)(!0),d=Object(c.a)(o,2),u=d[0],m=d[1];return Object(r.useEffect)((function(){var t=0,n=0,r="",s="";t===e.length&&(t=0),function a(){t===e.length&&(t=0),r=e[t],(s=r.slice(0,n++)).length===r.length-2?m(!1):0===s.length&&m(!0),i(s),s.length===r.length&&(t++,n=0),setTimeout(a,400)}()}),[e]),Object(l.jsxs)("div",{style:{lineHeight:"1.2"},className:"my-auto font-roboto-slab text-gray-200 max-w-max text-3xl md:text-5xl",children:[Object(l.jsx)("p",{children:"Hello.."}),Object(l.jsx)("p",{children:"I am"}),Object(l.jsxs)("p",{children:[a,u&&Object(l.jsx)("span",{children:"|"})]})]})};var h=function(){return Object(l.jsx)("div",{className:"text-gray-200 text-base font-roboto md:text-xl lg:text-2xl md:w-2/3",children:"Quick learner, passionate in problem solving and design. Primarily working with javascript."})};var v=function(){return Object(l.jsxs)("div",{className:"h-full flex flex-col justify-evenly items-center pt-10 md:py-0 font-roboto-slab",children:[Object(l.jsx)("div",{className:"text-gray-200 text-xs m-1 animate-bounce md:hidden",children:"scroll down"}),Object(l.jsx)("div",{className:"text-gray-200 m-1 text-lg px-10 hidden md:block",style:{writingMode:"vertical-rl"},children:"scroll down"}),Object(l.jsx)("div",{className:"h-8 w-0.5 bg-gray-200 sm:h-5 md:w-1 md:h-20 md:animate-bounce"})]})};var g=function(t){t.setChild;var e=Object(r.useRef)(),n=Object(r.useRef)(),s=Object(r.useRef)();return Object(r.useEffect)((function(){e.current.classList.remove("-translate-x-full");var t=function(){var t=document.getElementById("home");e.current.classList.remove("duration-1000"),s.current.classList.remove("duration-1000"),e.current.classList.add("duration-700"),s.current.classList.add("duration-700"),t.getBoundingClientRect().bottom>window.innerHeight/2&&(e.current.classList.remove("-translate-x-24","opacity-0"),n.current.classList.remove("-translate-x-24","opacity-0")),t.getBoundingClientRect().bottom>window.innerHeight-10&&setTimeout((function(){window.innerWidth>=768?s.current.classList.remove("-translate-y-28"):s.current.classList.remove("-translate-y-12"),s.current.classList.remove("opacity-0")}),200)},r=function(){var t=document.getElementById("home");e.current.classList.remove("duration-1000"),s.current.classList.remove("duration-1000"),e.current.classList.add("duration-700"),s.current.classList.add("duration-700"),t.getBoundingClientRect().bottom<100&&(e.current.classList.add("-translate-x-24","opacity-0"),n.current.classList.add("-translate-x-24","opacity-0")),t.getBoundingClientRect().bottom<window.innerHeight&&(window.innerWidth>=768?s.current.classList.add("-translate-y-28"):s.current.classList.add("-translate-y-12"),s.current.classList.add("opacity-0"))};return window.addEventListener("transitionstart",t),window.addEventListener("transitionend",r),function(){window.removeEventListener("transitionstart",t),window.removeEventListener("transitionend",r)}}),[]),Object(l.jsx)("div",{id:"home",className:"w-full h-screen relative flex justify-left",style:{minHeight:"625px",textShadow:"0 0 5px #11182777"},children:Object(l.jsxs)("div",{className:"z-0 flex flex-col justify-evenly pt-11 h-1/2 mt-auto w-full md:w-max md:flex-row-reverse",children:[Object(l.jsxs)("div",{className:"px-8vw md:px-0 md:transform md:-translate-y-2/3",children:[Object(l.jsx)("div",{ref:e,className:"transform duration-1000 md:-translate-y-1/3 -translate-x-24 opacity-0",children:Object(l.jsx)(y,{})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{ref:n,className:"transform duration-1000 md:translate-y-full -translate-x-24 opacity-0",children:Object(l.jsx)(h,{})})]}),Object(l.jsx)("div",{ref:s,className:"transform duration-1000 opacity-0",children:Object(l.jsx)(v,{})})]})})};var w=function(t){t.setChild;var e=Object(r.useRef)(),n=Object(r.useRef)(),s=Object(r.useRef)(),a=Object(r.useRef)(),i=Object(r.useRef)(),c=Object(r.useRef)();return Object(r.useEffect)((function(){var t=function(){var t=document.getElementById("about");(t.getBoundingClientRect().top<window.innerHeight/2||t.getBoundingClientRect().bottom>150)&&(e.current.classList.remove("-translate-x-24","opacity-0"),n.current.classList.remove("-translate-x-24","opacity-0"),s.current.classList.remove("translate-y-full","opacity-0"),a.current.classList.remove("opacity-0"),i.current.classList.remove("translate-y-full","opacity-0"),c.current.classList.remove("opacity-0"),n.current.classList.add("md:translate-x-10")),(t.getBoundingClientRect().top>window.innerHeight/2||t.getBoundingClientRect().bottom<50)&&(n.current.classList.remove("md:translate-x-10"),n.current.classList.add("-translate-x-24","opacity-0"),e.current.classList.add("-translate-x-24","opacity-0"),s.current.classList.add("translate-y-full","opacity-0"),a.current.classList.add("opacity-0"),i.current.classList.add("translate-y-full","opacity-0"),c.current.classList.add("opacity-0"))};return window.addEventListener("transitionend",t),function(){window.removeEventListener("transitionend",t)}}),[]),Object(l.jsxs)("div",{id:"about",style:{minHeight:"625px",textShadow:"0 0 5px #11182777"},className:"text-gray-200 h-screen w-full z-0 flex flex-col md:flex-row md:items-center",children:[Object(l.jsxs)("div",{className:"flex flex-col mt-auto h-1/3 transform -translate-y-3 md:-translate-y-12 md:mt-0 md:ml-6",children:[Object(l.jsx)("div",{ref:e,className:"font-roboto-slab text-4xl pl-6 sm:text-7xl md:text-8xl mb-8 md:mb-0 transform duration-700 md:-translate-y-3/4 -translate-x-24 opacity-0",children:"Who Am I.."}),Object(l.jsx)("div",{ref:n,className:"text-base font-roboto px-6 md:w-1/2 md:text-xl lg:text-2xl transform duration-1000 -translate-x-24 opacity-0",children:"My name is Basil Kaffi Ar Rahman. I am a fullstack developer. Experienced developing website and apps using stacks such as reactjs, express, sequelize, tailwind, sass, vue, postgres, mongodb, graphql, redis, etc."})]}),Object(l.jsx)("div",{className:"hidden absolute md:block w-full transform translate-y-56 -translate-x-20",children:Object(l.jsxs)("div",{className:"flex font-roboto-slab justify-end items-baseline",children:[Object(l.jsx)("div",{ref:s,className:"md:text-5xl lg:text-6xl transform duration-1000 translate-y-full opacity-0",children:"ABOUT"}),Object(l.jsx)("div",{ref:a,className:"md:text-8xl lg:text-9xl ml-3 transform -translate-y-4 duration-1000 opacity-0",children:"01"})]})}),Object(l.jsxs)("div",{className:"flex font-roboto-slab justify-end items-baseline p-4 transform -translate-y-6 md:hidden",children:[Object(l.jsx)("div",{ref:i,className:"text-3xl transform duration-1000 translate-y-full opacity-0",children:"ABOUT"}),Object(l.jsx)("div",{ref:c,className:"text-5xl ml-2 transform -translate-y-2 duration-1000 opacity-0",children:"01"})]})]})};var p=function(t){var e=t.image,n=Object(r.useRef)(),s=Object(r.useRef)(),a=Object(r.useRef)(),i=Object(r.useRef)(),o=Object(r.useState)(),d=Object(c.a)(o,2),u=d[0],m=d[1];return Object(r.useEffect)((function(){n.current.classList.remove("translate-x-full"),s.current.classList.remove("translate-x-full"),a.current.classList.remove("translate-x-full"),i.current.classList.remove("translate-x-full"),setTimeout((function(){m(e)}),710),setTimeout((function(){s.current.classList.add("translate-x-full"),i.current.classList.add("translate-x-full")}),750),setTimeout((function(){n.current.classList.add("translate-x-full"),a.current.classList.add("translate-x-full")}),800)}),[e]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"absolute overflow-x-hidden hidden md:block bg-gray-800 transform md:scale-x-125 md:-translate-y-48 lg:-translate-y-60 lg:-translate-x-8",style:{width:"40vw",height:"30vw",minWidth:"27rem",minHeight:"20rem",marginLeft:"50vw",zIndex:"-10"},children:[Object(l.jsx)("div",{ref:n,className:"absolute w-full h-full bg-gray-700 transform duration-700 z-20"}),Object(l.jsx)("div",{ref:s,className:"absolute w-full h-full bg-gray-900 transform duration-500 z-20"}),u]}),Object(l.jsx)("div",{className:"md:hidden w-full flex justify-center",style:{marginTop:"22vh"},children:Object(l.jsxs)("div",{className:"absolute overflow-x-hidden bg-gray-800 w-full",style:{width:"90vw",height:"45vw",minWidth:"14rem",minHeight:"11rem"},children:[Object(l.jsx)("div",{ref:a,className:"absolute w-full h-full bg-gray-700 transform duration-700"}),Object(l.jsx)("div",{ref:i,className:"absolute w-full h-full bg-gray-900 transform duration-500"}),u]})})]})};var O=function(){var t=Object(r.useRef)(),e=Object(r.useRef)(),n=Object(r.useRef)(),s=Object(r.useRef)(),a=Object(r.useRef)(),i=Object(r.useRef)(),o=Object(r.useRef)(),d=Object(r.useRef)(),m=Object(r.useRef)(),f=Object(r.useRef)(),j=Object(r.useRef)(),x=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"w-10 md:w-14 bg-gray-300 text-gray-700 rounded-full transform duration-300 hover:scale-110 cursor-pointer",onClick:function(){return R("left")},children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),Object(l.jsx)("div",{className:"w-10 md:w-14 bg-gray-300 text-gray-700 rounded-full transform duration-300 hover:scale-110 cursor-pointer",onClick:function(){return R("right")},children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},b=[{title:"Kanban-Qu",description:"Kanban-qu is digital management tool designed to help visualize work progress. Developed using reactjs as frontend and Expressjs as backend.",image:Object(l.jsx)(u,{})},{title:"Toko-Qu",description:"Toko-qu is a webstore developed using Reactjs as frontend and Expressjs backend.",image:null},{title:"CMS Toko-Qu",description:"Toko-qu is a CMS for toko-qu webstore developed using Vuejs as frontend and Expressjs backend.",image:null}],y=Object(r.useState)(0),h=Object(c.a)(y,2),v=h[0],g=h[1],w=Object(r.useState)(b[v]),O=Object(c.a)(w,2),L=O[0],N=O[1],R=function(t){"right"===t?(g(0===v?1:2),2===v&&g(0),n.current.style.opacity="0",setTimeout((function(){n.current.style.opacity="1"}),200)):"left"===t&&(g(2===v?1:0),0===v&&g(2),n.current.style.opacity="0",setTimeout((function(){n.current.style.opacity="1"}),200))};return Object(r.useEffect)((function(){setTimeout((function(){N(b[v])}),150)}),[v]),Object(r.useEffect)((function(){var n=function(){var n=document.getElementById("project");(n.getBoundingClientRect().top<window.innerHeight/2||n.getBoundingClientRect().bottom>150)&&(t.current.classList.remove("-translate-x-24","opacity-0"),e.current.classList.remove("-translate-x-24","opacity-0"),s.current.classList.remove("translate-y-full","opacity-0"),a.current.classList.remove("opacity-0"),i.current.classList.remove("opacity-0"),o.current.classList.remove("translate-y-full","opacity-0"),d.current.classList.remove("opacity-0"),m.current.classList.remove("opacity-0"),f.current.classList.add("delay-500"),j.current.classList.add("delay-500"),f.current.classList.remove("opacity-0"),j.current.classList.remove("opacity-0"),e.current.classList.add("md:translate-x-10")),(n.getBoundingClientRect().top>window.innerHeight-100||n.getBoundingClientRect().bottom<50)&&(e.current.classList.remove("md:translate-x-10"),f.current.classList.remove("delay-500"),j.current.classList.remove("delay-500"),e.current.classList.add("-translate-x-24","opacity-0"),t.current.classList.add("-translate-x-24","opacity-0"),s.current.classList.add("translate-y-full","opacity-0"),a.current.classList.add("opacity-0"),i.current.classList.add("opacity-0"),o.current.classList.add("translate-y-full","opacity-0"),d.current.classList.add("opacity-0"),m.current.classList.add("opacity-0"),f.current.classList.add("opacity-0"),j.current.classList.add("opacity-0"))};return window.addEventListener("transitionend",n),function(){window.removeEventListener("transitionend",n)}}),[]),Object(l.jsxs)("div",{id:"project",style:{minHeight:"625px",textShadow:"0 0 5px #11182777"},className:"text-gray-200 h-screen w-full z-0 flex flex-col md:flex-row md:items-center",children:[Object(l.jsx)("div",{ref:j,className:"md:hidden absolute w-full h-full transform duration-1000 opacity-0",children:Object(l.jsx)(p,{image:L.image})}),Object(l.jsxs)("div",{ref:n,className:"flex flex-col w-full mt-auto h-1/4 md:h-1/3 transform duration-100 md:-translate-y-12 md:mt-0 md:ml-6",children:[Object(l.jsx)("div",{ref:t,className:"font-roboto-slab text-4xl pl-6 sm:text-7xl md:text-8xl mb-8 md:mb-0 transform duration-700 md:-translate-y-3/4 -translate-x-24 opacity-0",children:L.title}),Object(l.jsxs)("div",{ref:e,className:"text-base font-roboto px-6 md:w-1/2 md:text-xl lg:text-2xl transform duration-1000 -translate-x-24 opacity-0",children:[Object(l.jsx)("div",{children:L.description}),Object(l.jsx)("div",{className:"px-4 py-1 font-roboto-slab inline-block text-gray-100 bg-red-600 hover:bg-red-500 duration-200 mt-6 md:mt-10 cursor-pointer",children:"visit site"})]})]}),Object(l.jsx)("div",{ref:f,style:{zIndex:"-10",transitionDuration:"1000ms"},className:"absolute hidden md:block opacity-0",children:Object(l.jsx)(p,{image:L.image})}),Object(l.jsx)("div",{ref:m,className:"w-full flex justify-center md:hidden transform duration-1000 my-10",children:Object(l.jsx)("div",{className:"flex justify-between",style:{width:"88vw"},children:x()})}),Object(l.jsx)("div",{ref:i,className:"hidden absolute md:w-1/3 md:flex justify-between z-10 transform duration-1000",style:{marginLeft:"5vw",marginTop:"80vh"},children:x()}),Object(l.jsx)("div",{className:"hidden absolute md:block w-full transform translate-y-56 -translate-x-20",children:Object(l.jsxs)("div",{className:"flex font-roboto-slab justify-end items-baseline",children:[Object(l.jsx)("div",{ref:s,className:"md:text-5xl lg:text-6xl transform duration-1000 translate-y-full opacity-0",children:"PROJECT"}),Object(l.jsx)("div",{ref:a,className:"md:text-8xl lg:text-9xl ml-3 transform -translate-y-4 duration-1000 opacity-0",children:"02"})]})}),Object(l.jsxs)("div",{className:"flex font-roboto-slab justify-end items-baseline p-4 transform -translate-y-6 md:hidden",children:[Object(l.jsx)("div",{ref:o,className:"text-3xl transform duration-1000 translate-y-full opacity-0",children:"PROJECT"}),Object(l.jsx)("div",{ref:d,className:"text-5xl ml-2 transform -translate-y-2 duration-1000 opacity-0",children:"02"})]})]})};var L=function(){var t=Object(r.useRef)(),e=Object(r.useRef)(),n=Object(r.useRef)(),s=Object(r.useRef)(),a=Object(r.useRef)();return Object(r.useEffect)((function(){var r=function(){var r=document.getElementById("contact");(r.getBoundingClientRect().top<window.innerHeight/2||r.getBoundingClientRect().bottom>150)&&(t.current.classList.remove("-translate-x-24","opacity-0"),e.current.classList.remove("translate-y-full","opacity-0"),n.current.classList.remove("opacity-0"),s.current.classList.remove("translate-y-full","opacity-0"),a.current.classList.remove("opacity-0")),(r.getBoundingClientRect().top>window.innerHeight-100||r.getBoundingClientRect().bottom<50)&&(t.current.classList.add("-translate-x-24","opacity-0"),e.current.classList.add("translate-y-full","opacity-0"),n.current.classList.add("opacity-0"),s.current.classList.add("translate-y-full","opacity-0"),a.current.classList.add("opacity-0"))};return window.addEventListener("transitionend",r),function(){window.removeEventListener("transitionend",r)}}),[]),Object(l.jsxs)("div",{id:"contact",style:{minHeight:"625px",textShadow:"0 0 5px #11182777"},className:"text-gray-200 h-screen w-full z-0 flex flex-col md:flex-row md:items-center",children:[Object(l.jsx)("div",{className:"flex flex-col mt-auto h-1/3 transform -translate-y-3 md:-translate-y-12 md:mt-0 md:ml-6",children:Object(l.jsx)("div",{ref:t,className:"font-roboto-slab text-4xl pl-6 sm:text-7xl md:text-8xl mb-8 md:mb-0 transform duration-700 md:-translate-y-3/4 -translate-x-24 opacity-0",children:"Get In Touch"})}),Object(l.jsx)("div",{className:"hidden absolute md:block w-full transform translate-y-56 -translate-x-20",children:Object(l.jsxs)("div",{className:"flex font-roboto-slab justify-end items-baseline",children:[Object(l.jsx)("div",{ref:e,className:"md:text-5xl lg:text-6xl transform duration-1000 translate-y-full opacity-0",children:"CONTACT"}),Object(l.jsx)("div",{ref:n,className:"md:text-8xl lg:text-9xl ml-3 transform -translate-y-4 duration-1000 opacity-0",children:"03"})]})}),Object(l.jsxs)("div",{className:"flex font-roboto-slab justify-end items-baseline p-4 transform -translate-y-6 md:hidden",children:[Object(l.jsx)("div",{ref:s,className:"text-3xl transform duration-1000 translate-y-full opacity-0",children:"CONTACT"}),Object(l.jsx)("div",{ref:a,className:"text-5xl ml-2 transform -translate-y-2 duration-1000 opacity-0",children:"03"})]})]})};var N=function(){return Object(l.jsx)("div",{className:"flex justify-center",children:Object(l.jsxs)("div",{className:"flex w-28 justify-evenly",children:[Object(l.jsx)("div",{className:"w-4 h-4 rounded-lg bg-gray-100"}),Object(l.jsx)("div",{className:"w-4 h-4 rounded-lg bg-gray-100"}),Object(l.jsx)("div",{className:"w-4 h-4 rounded-lg bg-gray-100"})]})})};n(10);var R=function(){var t=Object(r.useRef)(),e=Object(r.useState)("home"),n=Object(c.a)(e,2),s=n[0],a=n[1];return Object(r.useEffect)((function(){t.current.style.transform="translateY(-100vh)";var e=document.getElementById("app"),n=document.getElementById("home"),r=document.getElementById("about"),s=document.getElementById("project"),i=document.getElementById("contact"),c=0,l=0,o=0,d=function(t){c=t.touches[0].clientY},u=function(t){l=t.touches[0].clientY,o=c-l},m=function(t){t.deltaY>0||o>10?r.getBoundingClientRect().top>10?e.style.transform="translateY(-".concat(r.offsetTop,"px)"):s.getBoundingClientRect().top>10?e.style.transform="translateY(-".concat(s.offsetTop,"px)"):i.getBoundingClientRect().top>10&&(e.style.transform="translateY(-".concat(i.offsetTop,"px)")):(t.deltaY<0||o<-10)&&(s.getBoundingClientRect().top<0?e.style.transform="translateY(-".concat(s.offsetTop,"px)"):r.getBoundingClientRect().top<0?e.style.transform="translateY(-".concat(r.offsetTop,"px)"):n.getBoundingClientRect().top<0&&(e.style.transform="translateY(-".concat(n.offsetTop,"px)")))},f=function(){n.getBoundingClientRect().top<=window.innerHeight/2&&a("home"),r.getBoundingClientRect().top<=window.innerHeight/2&&a("about"),s.getBoundingClientRect().top<=window.innerHeight/2&&a("project"),i.getBoundingClientRect().top<=window.innerHeight/2&&a("contact")};return window.addEventListener("wheel",m),window.addEventListener("transitionstart",f),e.addEventListener("touchstart",d,{passive:!1,capture:!0}),e.addEventListener("touchmove",u,{passive:!1,capture:!0}),e.addEventListener("touchend",m,{passive:!1,capture:!0}),function(){window.removeEventListener("wheel",m),window.removeEventListener("transitionend",f),e.removeEventListener("touchstart",d,{passive:!1,capture:!0}),e.removeEventListener("touchmove",u,{passive:!1,capture:!0}),e.removeEventListener("touchend",m,{passive:!1,capture:!0})}}),[]),Object(l.jsxs)("div",{className:"bg-gray-900 h-screen overflow-y-hidden overflow-x-hidden w-full flex flex-col",children:[Object(l.jsx)("div",{ref:t,style:{zIndex:"1000"},className:"bg-gray-800 absolute h-screen w-full transform duration-1000"}),Object(l.jsx)(m,{section:s}),Object(l.jsx)(b,{}),Object(l.jsxs)("div",{id:"app",className:"transform duration-700",children:[Object(l.jsx)(g,{}),Object(l.jsx)(N,{}),Object(l.jsx)(w,{}),Object(l.jsx)(N,{}),Object(l.jsx)(O,{}),Object(l.jsx)(N,{}),Object(l.jsx)(L,{})]})]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f7785658.chunk.js.map