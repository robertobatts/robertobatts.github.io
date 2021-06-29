(this["webpackJsonprobertobatts.github.io"]=this["webpackJsonprobertobatts.github.io"]||[]).push([[0],{22:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),c=a.n(o),i=(a(27),a(28),a(1)),s=a(2),l=a(3),m=a(4),u=(a(29),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer",className:"button flat-shadow-in-out",style:{backgroundColor:this.props.color}},this.props.content)}}]),a}(n.a.Component)),p=a(19),g=(a(40),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{class:"arrow-container"},n.a.createElement(p.Link,{activeClass:"active",to:this.props.scrollto,smooth:!0,duration:500,class:"arrow-inner vertical-center"},n.a.createElement("div",{class:"bounce"},n.a.createElement("div",{class:"arrow down"}))))}}]),a}(r.Component)),h=a(60),d=(a(41),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"intro-section-container horizontal-center"},n.a.createElement("div",{class:"intro-absolute-wrapper"},n.a.createElement("div",{className:"intro-section-inner"},n.a.createElement(h.a,{variant:"h2"},"Roberto Battaglia"),n.a.createElement(h.a,{variant:"h5",gutterBottom:!0},"BACKEND DEVELOPER"),n.a.createElement(u,{content:n.a.createElement(h.a,{variant:"button"},"Open Resume"),color:"#1da1f2",link:"/resume.pdf"})),n.a.createElement("div",{class:"scroll-down-arrow-container"},n.a.createElement(g,{scrollto:"skills"}))))}}]),a}(n.a.Component)),v=(a(44),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"skills",className:"wave-bar-wrapper"},n.a.createElement("div",{className:"wave-bar-inner"},n.a.createElement("img",{className:"wave-bar",src:"/wavebar-1.svg",alt:"wave-bar-1"}))),n.a.createElement("div",{className:"skills-section-container"},n.a.createElement("div",{className:"p-grid skills-section-grid p-justify-center"},n.a.createElement("div",{className:"p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center"},n.a.createElement(h.a,{style:{height:"64px"},variant:"h5",gutterBottom:!0},"BACK END"),this.getBackendLogos()),n.a.createElement("div",{className:"p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center"},n.a.createElement(h.a,{style:{height:"64px"},variant:"h5",gutterBottom:!0},"CI/CD AND CLOUD"),this.getCiCdCloudLogos()),n.a.createElement("div",{className:"p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center"},n.a.createElement(h.a,{style:{height:"64px"},variant:"h5",gutterBottom:!0},"OTHER TOOLS"),this.getOtherLogos()))),n.a.createElement("div",{className:"wave-bar-wrapper"},n.a.createElement("div",{className:"wave-bar-inner"},n.a.createElement("img",{className:"wave-bar",src:"/wavebar-2.svg",alt:"wave-bar-2"}))))}},{key:"getBackendLogos",value:function(){return this.getLogos(["java","mongodb","spring-framework","golang","apache-kafka","maven","sql-generic","ibm-mq"])}},{key:"getCiCdCloudLogos",value:function(){return this.getLogos(["jenkins","jfrog-artifactory","aws","aws-ec2","aws-lambda"])}},{key:"getOtherLogos",value:function(){return this.getLogos(["git","react","bash","intellij","vs-code"])}},{key:"getLogos",value:function(e){var t=[];return e.forEach((function(e){t.push(n.a.createElement("div",{key:e,className:"p-col-6 p-sm-3 p-md-6 p-lg-6 p-xl-4 horizontal-center"},n.a.createElement("img",{className:"skill-logo-sm",alt:e,src:"/logos/"+e+".svg"})))})),n.a.createElement("div",{className:"p-grid p-justify-center"},t)}}]),a}(n.a.Component)),b=(a(45),a(46),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"project-card-container flat-shadow-in-out"},n.a.createElement("div",{className:"project-card-background",style:{backgroundImage:this.props.imageSrc}}),n.a.createElement("div",{className:"project-card-wrapper vertical-center"},n.a.createElement("div",{className:"project-card-content horizontal-center"},n.a.createElement(h.a,{variant:"h5"},this.props.title),n.a.createElement("div",{className:"project-card-description vertical-center"},this.props.description),n.a.createElement("div",{className:"project-card-link-section"},this.props.website&&n.a.createElement(u,{link:this.props.website,content:"Website",color:"#1da1f2"}),this.props.demo&&n.a.createElement(u,{link:this.props.demo,content:"Demo",color:"#1da1f2"}),this.props.github&&n.a.createElement(u,{link:this.props.github,content:"GitHub",color:"#1da1f2"})))))}}]),a}(r.Component)),E=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"projects",className:"projects-section-container horizontal-center"},n.a.createElement(h.a,{variant:"h5",style:{paddingBottom:"30px"}},"PROJECTS"),n.a.createElement(b,{title:"golexa",description:"An SDK to develop skills for Alexa",github:"https://github.com/robertobatts/golexa",imageSrc:'url("/projects/golexa.png")'}),n.a.createElement(b,{title:"ker-e-bians",description:"ker-e-bians calculates the optimized path that guides you through the roads with the most parking spots possible in London",demo:"https://www.youtube.com/watch?v=gGzA_BMI9EQ",github:"https://github.com/robertobatts/ker-e-bians",imageSrc:'url("/projects/ker-e-bians.png")'}),n.a.createElement(b,{title:"magic sorter",description:"A tool to visualize sorting algorithms",website:"https://magic-sorter.netlify.com/",github:"https://github.com/robertobatts/magic-sorter",imageSrc:'url("/projects/magic-sorter.png")'})))}}]),a}(r.Component),f=(a(47),{linkedin:"https://www.linkedin.com/in/robertobatts",gitHub:"https://github.com/robertobatts",stackoverflow:"https://stackoverflow.com/users/10342150/robertobatts",gmail:"mailto:battaroberto@gmail.com?Subject=I want to hire you"}),w=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"wave-footer-wrapper"},n.a.createElement("div",{className:"wave-footer-inner"},n.a.createElement("img",{className:"wave-footer",src:"/wavefooter.svg",alt:"wave-footer"}))),n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{className:"horizontal-center"},n.a.createElement(h.a,{variant:"h5"},"Contact me"),this.getSocialLogos())))}},{key:"getSocialLogos",value:function(){var e=[];return Object.keys(f).forEach((function(t){e.push(n.a.createElement("a",{key:t,href:f[t],target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"social-logo-sm",alt:t,src:"/logos/"+t+".svg"})))})),e}}]),a}(r.Component);var k=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement(v,null),n.a.createElement(E,null),n.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.29601dd0.chunk.js.map