(this["webpackJsonpparallel-twitch"]=this["webpackJsonpparallel-twitch"]||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=a(19),i=a.n(o),s=a(139),m=a(141),h=a(140);var u=function(){var e=i()((function(e){return{root:{height:"100vh",textAlign:"center",alignItems:"center"},disclaimer:{width:"35vw",color:"#b9a3e3",fontSize:"1rem"},disclaimerLink:{color:"#b9a3e3","&:hover":{color:"#6441a5"}},guideStep:{color:"#6441a5",fontSize:"1.5rem"},guideStepContent:{color:"#b9a3e3",fontSize:"1rem",width:"50vw",marginTop:e.spacing(2)}}}))();return r.a.createElement("div",null,r.a.createElement(s.a,{container:!0,direction:"column",justify:"space-evenly",alignItems:"center",className:e.root},r.a.createElement(h.a,{component:"h1",variant:"h4",className:e.disclaimer},"Hello, this is a web app built by Conrado Remon for educational purposes and not for commercial use, however, you are able to use it if you want and you can access the source code in my ",r.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/darn0C/parallel-twitch",target:"_blank",className:e.disclaimerLink},"GitHub"),".",r.a.createElement("br",null),"This isn't built for mobile devices since viewport is not wide enough, but you shouldn't have any problems using it on bigger devices. It also has a limit of 4 streams for the sake of maintaining reasonable sizes."),r.a.createElement(h.a,{component:"h1",variant:"h3",className:e.guideStep},"1. Search the streams you want to watch",r.a.createElement(h.a,{component:"h1",variant:"h6",className:e.guideStepContent},"Let's say you want to watch both Caps and Faker at the same time, but they are not group streaming.")),r.a.createElement(h.a,{component:"h1",variant:"h3",className:e.guideStep},"2. Copy to your clipboard their Twitch names",r.a.createElement(h.a,{component:"h1",variant:"h6",className:e.guideStepContent},'For example, if you want to watch Caps, writing or copying the "caps" part will suffice.',r.a.createElement("br",null),r.a.createElement("strong",null,"twitch.tv/caps"))),r.a.createElement(h.a,{component:"h1",variant:"h3",className:e.guideStep},"3. Paste it into the stream input",r.a.createElement(h.a,{component:"h1",variant:"h6",className:e.guideStepContent},'Once you have the twitch streamer name, click the button to open the input and paste it in there, click "SET", then you can close it.')),r.a.createElement(h.a,{component:"h1",variant:"h3",className:e.guideStep},"4. Initiate the streams",r.a.createElement(h.a,{component:"h1",variant:"h6",className:e.guideStepContent},'Once you have all the streams set, click the "STREAM" button to start watching.'))))},d=a(10),g=a(143),p=a(40),w=a.n(p),b=a(39),E=a.n(b),f=a(144),S=a(145),v=a(142);var y=function(e){var t=Object(n.useState)(e.firstStream),a=Object(d.a)(t,2),c=a[0],l=a[1],o=i()((function(){return{root:{height:"100vh",width:"100vw",backgroundColor:"#262626"},streamSection:{height:"100vh",width:"85vw"},streamContainer:{height:"50vh",width:"42.5vw",display:"inline-block",padding:"0"},chatSection:{height:"100vh",width:"15vw"},chatContainer:{height:"100vh",width:"15vw",display:"inline-block",padding:"0"},chatButton:{backgroundColor:"#6441a5",color:"#b9a3e3",height:"5vh",fontWeight:"900",fontSize:"11px",overflow:"hidden","&:hover":{backgroundColor:"#b9a3e3",color:"#6441a5"}}}}))();function h(){l(e.firstStream)}function u(){l(e.secondStream)}function g(){l(e.thirdStream)}function p(){l(e.fourthStream)}return r.a.createElement("div",null,1===e.howManyStreams?r.a.createElement(s.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:o.root},r.a.createElement(m.a,null),r.a.createElement("iframe",{title:"First stream",src:"https://player.twitch.tv/?channel="+e.firstStream+"&parent=darn0c.github.io",height:"100%",width:"85%",frameBorder:"0",scrolling:"no",allowFullScreen:"true"}),r.a.createElement("div",{className:o.chatContainer},r.a.createElement("iframe",{title:"Chat window",frameBorder:"0",scrolling:"no",id:"chat_embed",src:"https://www.twitch.tv/embed/"+e.firstStream+"/chat?parent=darn0c.github.io",height:"100%",width:"100%"}))):2===e.howManyStreams?r.a.createElement(s.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:o.root},r.a.createElement(m.a,null),r.a.createElement("div",{className:o.streamContainer},r.a.createElement("iframe",{title:"First stream",src:"https://player.twitch.tv/?channel="+e.firstStream+"&parent=darn0c.github.io",height:"100%",width:"100%",frameBorder:"0",scrolling:"no",allowFullScreen:"true"})),r.a.createElement("div",{className:o.streamContainer},r.a.createElement("iframe",{title:"Second stream",src:"https://player.twitch.tv/?channel="+e.secondStream+"&parent=darn0c.github.io",height:"100%",width:"100%",frameBorder:"0",scrolling:"no",allowFullScreen:"true"})),r.a.createElement(s.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:o.chatSection},r.a.createElement("div",{className:o.chatContainer},r.a.createElement(v.a,{className:o.chatButton,onClick:h,style:{width:"50%"}},e.firstStream),r.a.createElement(v.a,{className:o.chatButton,onClick:u,style:{width:"50%"}},e.secondStream),r.a.createElement("iframe",{title:"Chat window",frameBorder:"0",scrolling:"no",id:"chat_embed",src:"https://www.twitch.tv/embed/"+c+"/chat?parent=darn0c.github.io",height:"95%",width:"100%"})))):3===e.howManyStreams?r.a.createElement(s.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:o.root},r.a.createElement(m.a,null),r.a.createElement(s.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:o.streamSection},r.a.createElement("div",{className:o.streamContainer},r.a.createElement("iframe",{title:"First stream",src:"https://player.twitch.tv/?channel="+e.firstStream+"&parent=darn0c.github.io",height:"100%",width:"100%",frameBorder:"0",scrolling:"no",allowFullScreen:"true"})),r.a.createElement("div",{className:o.streamContainer},r.a.createElement("iframe",{title:"Second stream",src:"https://player.twitch.tv/?channel="+e.secondStream+"&parent=darn0c.github.io",height:"100%",width:"100%",frameBorder:"0",scrolling:"no",allowFullScreen:"true"})),r.a.createElement("div",{className:o.streamContainer},r.a.createElement("iframe",{title:"Third stream",src:"https://player.twitch.tv/?channel="+e.thirdStream+"&parent=darn0c.github.io",height:"100%",width:"100%",frameBorder:"0",scrolling:"no",allowFullScreen:"true"}))),r.a.createElement(s.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:o.chatSection},r.a.createElement("div",{className:o.chatContainer},r.a.createElement(v.a,{className:o.chatButton,onClick:h,style:{width:"50%"}},e.firstStream),r.a.createElement(v.a,{className:o.chatButton,onClick:u,style:{width:"50%"}},e.secondStream),r.a.createElement(v.a,{className:o.chatButton,onClick:g,style:{width:"100%"}},e.thirdStream),r.a.createElement("iframe",{title:"Chat window",frameBorder:"0",scrolling:"no",id:"chat_embed",src:"https://www.twitch.tv/embed/"+c+"/chat?parent=darn0c.github.io",height:"90%",width:"100%"})))):4===e.howManyStreams?r.a.createElement(s.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:o.root},r.a.createElement(m.a,null),r.a.createElement(s.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:o.streamSection},r.a.createElement("div",{className:o.streamContainer},r.a.createElement("iframe",{title:"First stream",src:"https://player.twitch.tv/?channel="+e.firstStream+"&parent=darn0c.github.io",height:"100%",width:"100%",frameBorder:"0",scrolling:"no",allowFullScreen:"true"})),r.a.createElement("div",{className:o.streamContainer},r.a.createElement("iframe",{title:"Second stream",src:"https://player.twitch.tv/?channel="+e.secondStream+"&parent=darn0c.github.io",height:"100%",width:"100%",frameBorder:"0",scrolling:"no",allowFullScreen:"true"})),r.a.createElement("div",{className:o.streamContainer},r.a.createElement("iframe",{title:"Third stream",src:"https://player.twitch.tv/?channel="+e.thirdStream+"&parent=darn0c.github.io",height:"100%",width:"100%",frameBorder:"0",scrolling:"no",allowFullScreen:"true"})),r.a.createElement("div",{className:o.streamContainer},r.a.createElement("iframe",{title:"Fourth stream",src:"https://player.twitch.tv/?channel="+e.fourthStream+"&parent=darn0c.github.io",height:"100%",width:"100%",frameBorder:"0",scrolling:"no",allowFullScreen:"true"}))),r.a.createElement(s.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:o.chatSection},r.a.createElement("div",{className:o.chatContainer},r.a.createElement(v.a,{className:o.chatButton,onClick:h,style:{width:"50%"}},e.firstStream),r.a.createElement(v.a,{className:o.chatButton,onClick:u,style:{width:"50%"}},e.secondStream),r.a.createElement(v.a,{className:o.chatButton,onClick:g,style:{width:"50%"}},e.thirdStream),r.a.createElement(v.a,{className:o.chatButton,onClick:p,style:{width:"50%"}},e.fourthStream),r.a.createElement("iframe",{title:"Chat window",frameBorder:"0",scrolling:"no",id:"chat_embed",src:"https://www.twitch.tv/embed/"+c+"/chat?parent=darn0c.github.io",height:"90%",width:"100%"})))):void 0)};var C=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),m=Object(d.a)(o,2),u=m[0],p=m[1],b=Object(n.useState)(""),C=Object(d.a)(b,2),N=C[0],j=C[1],k=Object(n.useState)(!1),O=Object(d.a)(k,2),B=O[0],I=O[1],F=Object(n.useState)(!1),T=Object(d.a)(F,2),H=T[0],M=T[1],x=Object(n.useState)(!1),z=Object(d.a)(x,2),Y=z[0],_=z[1],A=Object(n.useState)(""),L=Object(d.a)(A,2),R=L[0],J=L[1],W=Object(n.useState)(!1),G=Object(d.a)(W,2),P=G[0],q=G[1],D=Object(n.useState)(!1),K=Object(d.a)(D,2),Q=K[0],U=K[1],V=Object(n.useState)(!1),X=Object(d.a)(V,2),Z=X[0],$=X[1],ee=Object(n.useState)(""),te=Object(d.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(!1),ce=Object(d.a)(re,2),le=ce[0],oe=ce[1],ie=Object(n.useState)(!1),se=Object(d.a)(ie,2),me=se[0],he=se[1],ue=Object(n.useState)(!1),de=Object(d.a)(ue,2),ge=de[0],pe=de[1],we=Object(n.useState)(""),be=Object(d.a)(we,2),Ee=be[0],fe=be[1],Se=Object(n.useState)(!1),ve=Object(d.a)(Se,2),ye=ve[0],Ce=ve[1],Ne=Object(n.useState)(0),je=Object(d.a)(Ne,2),ke=je[0],Oe=je[1],Be=i()((function(){return{root:{height:"100vh",width:"25vw"},streamInputHeader:{color:"#b9a3e3"},addStreamIcon:{backgroundColor:"#6441a5",color:"#b9a3e3","&:hover":{backgroundColor:"#b9a3e3",color:"#6441a5"}},streamInput:{backgroundColor:"#b9a3e3"},inputButton:{backgroundColor:"#6441a5",color:"#b9a3e3",fontWeight:"400",height:"32px","&:hover":{backgroundColor:"#b9a3e3",color:"#6441a5"}},streamButton:{backgroundColor:"#6441a5",color:"#f1f1f1","&:hover":{backgroundColor:"#f1f1f1",color:"#6441a5"}}}}))();return r.a.createElement(s.a,{container:!0,direction:"column",justify:"space-evenly",alignItems:"center",className:Be.root},r.a.createElement(h.a,{component:"h1",variant:"h5",className:Be.streamInputHeader},"First Stream"),r.a.createElement(g.a,{onClick:function(e){l(!a),p(e.currentTarget)},className:Be.addStreamIcon},a?r.a.createElement(E.a,null):r.a.createElement(w.a,null)),r.a.createElement(f.a,{open:a,anchorEl:u},r.a.createElement(S.a,{disabled:B,onChange:function(e){j(e.target.value)},value:N,className:Be.streamInput}),r.a.createElement(v.a,{disabled:B,onClick:function(){0===N.length?alert("You have to input something before you want to set it"):N.length>=1&&(I(!0),Oe(ke+1),l(!1))},className:Be.inputButton},"SET")),r.a.createElement(h.a,{component:"h1",variant:"h5",className:Be.streamInputHeader},"Second Stream"),r.a.createElement(g.a,{onClick:function(e){M(!H),_(e.currentTarget)},className:Be.addStreamIcon},H?r.a.createElement(E.a,null):r.a.createElement(w.a,null)),r.a.createElement(f.a,{open:H,anchorEl:Y},r.a.createElement(S.a,{disabled:P,onChange:function(e){J(e.target.value)},value:R,className:Be.streamInput}),r.a.createElement(v.a,{disabled:P,onClick:function(){0===R.length?alert("You have to input something before you want to set it"):R.length>=1&&(q(!0),Oe(ke+1),M(!1))},className:Be.inputButton},"SET")),r.a.createElement(h.a,{component:"h1",variant:"h5",className:Be.streamInputHeader},"Third Stream"),r.a.createElement(g.a,{onClick:function(e){U(!Q),$(e.currentTarget)},className:Be.addStreamIcon},Q?r.a.createElement(E.a,null):r.a.createElement(w.a,null)),r.a.createElement(f.a,{open:Q,anchorEl:Z},r.a.createElement(S.a,{disabled:le,onChange:function(e){ne(e.target.value)},value:ae,className:Be.streamInput}),r.a.createElement(v.a,{disabled:le,onClick:function(){0===ae.length?alert("You have to input something before you want to set it"):ae.length>=1&&(oe(!0),Oe(ke+1),U(!1))},className:Be.inputButton},"SET")),r.a.createElement(h.a,{component:"h1",variant:"h5",className:Be.streamInputHeader},"Fourth Stream"),r.a.createElement(g.a,{onClick:function(e){he(!me),pe(e.currentTarget)},className:Be.addStreamIcon},me?r.a.createElement(E.a,null):r.a.createElement(w.a,null)),r.a.createElement(f.a,{open:me,anchorEl:ge},r.a.createElement(S.a,{disabled:ye,onChange:function(e){fe(e.target.value)},value:Ee,className:Be.streamInput}),r.a.createElement(v.a,{disabled:ye,onClick:function(){0===Ee.length?alert("You have to input something before you want to set it"):Ee.length>=1&&(Ce(!0),Oe(ke+1),he(!1))},className:Be.inputButton},"SET")),r.a.createElement(v.a,{onClick:function(){0===ke?alert("You have to set a minimum of one stream to watch"):ke>=1&&Object(c.render)(r.a.createElement(y,{howManyStreams:ke,firstStream:N,secondStream:R,thirdStream:ae,fourthStream:Ee}),document.getElementById("root"))},className:Be.streamButton},"STREAM"))};var N=function(){var e=i()((function(){return{root:{height:"100vh",backgroundColor:"#262626"}}}))();return r.a.createElement("div",null,r.a.createElement(s.a,{container:!0,direction:"column",justify:"space-evenly",alignItems:"center",className:e.root},r.a.createElement(m.a,null),r.a.createElement(u,null),r.a.createElement(C,null)))};var j=function(){return r.a.createElement("div",null,r.a.createElement(N,null))};l.a.render(r.a.createElement(j,null),document.getElementById("root"))},83:function(e,t,a){e.exports=a(113)}},[[83,1,2]]]);
//# sourceMappingURL=main.972f4dd5.chunk.js.map