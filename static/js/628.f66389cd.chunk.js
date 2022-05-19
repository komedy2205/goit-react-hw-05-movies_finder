"use strict";(self.webpackChunkgoit_react_hw_05_movies_finder=self.webpackChunkgoit_react_hw_05_movies_finder||[]).push([[628],{5628:function(n,e,r){r.r(e),r.d(e,{MovieDetailsPage:function(){return q}});var t,i,o,a,s,l,d,c,p,x,h,u,v,g=r(5861),f=r(885),m=r(7757),b=r.n(m),_=r(2791),j=r(6871),Z=r(577),w=(r(5462),r(4234)),k=r(6269),P=r(168),y=r(1242),U=y.ZP.section(t||(t=(0,P.Z)(["\n  display: flex;\n  padding-left: 20px;\n"]))),z=y.ZP.h1(i||(i=(0,P.Z)(["\n  margin: 0;\n"]))),C=y.ZP.p(o||(o=(0,P.Z)(["\n  margin-bottom: 0px;\n  padding-bottom: 10px;\n"]))),F=y.ZP.div(a||(a=(0,P.Z)(["\n  margin-right: 20px;\n"]))),O=y.ZP.img(s||(s=(0,P.Z)(["\n  object-fit: cover;\n  width: 200px;\n"]))),S=r(184),A=function(n){var e,r=n.dataVideo,t=n.imageUrl,i=r.poster_path,o=r.name,a=r.original_title,s=r.release_date,l=r.first_air_date,d=r.vote_average,c=r.overview,p=r.genres;e=void 0!==s?s:l,s||l||(e="");var x;return(0,S.jsxs)(U,{children:[(0,S.jsx)(F,{children:(0,S.jsx)(O,{src:(x=i,null!==x?"".concat(t).concat(x):"".concat(k)),alt:""})}),(0,S.jsxs)("div",{children:[(0,S.jsxs)(z,{children:[a||o," (",e.slice(0,4),")"]}),(0,S.jsxs)("p",{children:["User score: ",Math.round(100*d/10),"%"]}),(0,S.jsx)("h2",{children:"Overviev"}),(0,S.jsx)("p",{children:c}),(0,S.jsx)("h3",{children:"Genres"}),p&&(0,S.jsx)(C,{children:p.map((function(n){return n.name})).join(", ")})]})]})},G=r(501),M=r(6036),T=r(828),V=y.ZP.section(l||(l=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border-bottom: black solid 1px;\n"]))),D=(0,y.ZP)(M.wFh)(d||(d=(0,P.Z)(["\n  width: 20px;\n  height: 15px;\n\n  margin-right: 2px;\n"]))),E=y.ZP.button(c||(c=(0,P.Z)(["\n  margin: 5px 20px;\n  padding: 5px 10px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  font-size: 14px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  font-weight: 400;\n  background-color: #ff7777;\n\n  :hover {\n    background-color: #ff5555;\n    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),H=(0,y.ZP)(G.rU)(p||(p=(0,P.Z)(["\n  color: black;\n  text-decoration: none;\n"]))),I=y.ZP.ul(x||(x=(0,P.Z)(["\n  padding-bottom: 10px;\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border-bottom: black solid 1px;\n"]))),J=y.ZP.h3(h||(h=(0,P.Z)(["\n  margin: 0;\n  padding-top: 10px;\n  padding-left: 20px;\n"]))),L=(0,y.ZP)(G.OL)(u||(u=(0,P.Z)(["\n  display: block;\n  color: black;\n  text-decoration: none;\n  padding-left: 5px;\n  &.active {\n    color: red;\n  }\n  :hover {\n    color: #1e90ff;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),R=(0,y.ZP)(T.Fjg)(v||(v=(0,P.Z)(["\n  width: 20px;\n  height: 15px;\n\n  margin-right: 2px;\n"]))),q=function(){var n,e,r,t,i=(0,_.useState)([]),o=(0,f.Z)(i,2),a=o[0],s=o[1],l=(0,_.useState)(""),d=(0,f.Z)(l,2),c=d[0],p=d[1],x=(0,j.UO)().movieId,h=(0,j.TH)();(0,_.useEffect)((function(){function n(){return(n=(0,g.Z)(b().mark((function n(){var e,r,t,i,o;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,w.eS)(x);case 3:return e=n.sent,s(e),n.next=7,(0,w.CJ)();case 7:r=n.sent,t=r.images.base_url,i=r.images.poster_sizes,o=i[i.length-1],p(t+o),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),Z.Am.error("There is no review of the video and the cast");case 18:case"end":return n.stop()}}),n,null,[[0,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[x]);var u=a.backdrop_path,v=a.poster_path,m=a.name,k=a.original_title,P=a.release_date,y=a.first_air_date,U=a.vote_average,z=a.overview,C=a.genres;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(V,{children:[(0,S.jsxs)(E,{type:"button",children:[(0,S.jsx)(D,{}),(0,S.jsx)(H,{to:null!==(n=null===h||void 0===h||null===(e=h.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"})]}),(0,S.jsx)(A,{dataVideo:{backdrop_path:u,poster_path:v,name:m,original_title:k,release_date:P,first_air_date:y,vote_average:U,overview:z,genres:C},imageUrl:c})]}),(0,S.jsx)(J,{children:"Additional information"}),(0,S.jsxs)(I,{children:[(0,S.jsx)("li",{children:(0,S.jsxs)(L,{to:"cast",state:{from:null===h||void 0===h||null===(r=h.state)||void 0===r?void 0:r.from},children:["Cast ",(0,S.jsx)(R,{})]})}),(0,S.jsx)("li",{children:(0,S.jsxs)(L,{to:"reviews",state:{from:null===h||void 0===h||null===(t=h.state)||void 0===t?void 0:t.from},children:["Reviews ",(0,S.jsx)(R,{})]})})]}),(0,S.jsx)(j.j3,{})]})}}}]);
//# sourceMappingURL=628.f66389cd.chunk.js.map