import{r as c,j as e,S as I,M as P,u as O,b as U}from"./react-vendor-BfwM7Uik.js";import{i as f,j as u,k as z,l as H,n as J,o as B,q as R,t as W,v as G,w as M,x as Y}from"./vendor-ja6tDjzs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const _=""+new URL("bgm-D1IDZxSf.mp3",import.meta.url).href,X=""+new URL("volume_on-DE3Uf7bL.png",import.meta.url).href,Q=""+new URL("volume_off-JnS9VYRc.png",import.meta.url).href,K=()=>{const[s,r]=c.useState(!1),t=c.useRef(null);c.useEffect(()=>{const i=new Audio(_);t.current=i,t.current.load(),t.current.addEventListener("ended",()=>r(!1)),t.current.play().then(()=>{console.log("silence autoplay success"),console.log(s),i.src=_,i.play(),r(!0)}).catch(()=>{console.log("autoplay.blocked")});const n=()=>{s||(t.current.play().catch(()=>{}),r(!s),window.removeEventListener("scroll",n),console.log("scroll detect"),window.removeEventListener("gesture",n),console.log("gesture detect"),window.removeEventListener("touchstart",n),console.log("touch detect"))};return window.addEventListener("scroll",n),window.addEventListener("gesture",n),window.addEventListener("touchstart",n),()=>{window.removeEventListener("scroll",n),window.removeEventListener("gesture",n),window.removeEventListener("touchstart",n)}},[]);const l=()=>{s?(t.current.pause(),console.log("audio pause")):(t.current.play(),console.log("audio start"),console.log(t.current.play())),r(!s)};return c.useEffect(()=>()=>{t.current&&(t.current.pause(),t.current=null)},[]),e.jsx(e.Fragment,{children:e.jsx("img",{src:s?X:Q,width:"20px",style:{marginRight:"10px",marginTop:"10px"},onClick:()=>l()})})},q=()=>e.jsx("div",{style:{marginTop:"2rem",marginBottom:"2rem"},children:e.jsx("p",{style:{marginBottom:"2rem",fontSize:"2rem",fontFamily:"MaruBuriBold"},children:"강 경 보     &     장 유 진"})}),F=""+new URL("DSC07876-CLYrAWDD.jpg",import.meta.url).href,Z=()=>e.jsx("div",{style:{position:"relative"},children:e.jsx("img",{src:F,width:"100%",style:{display:"block",margin:"auto"}})}),V=()=>e.jsxs("div",{style:{marginTop:"2rem",marginBottom:"2rem"},children:[e.jsxs("div",{style:{marginBottom:"1rem",fontFamily:"Maruburi",fontSize:"1.6rem"},children:[e.jsx("span",{className:"sub-title",children:" INVITATION "}),e.jsx("br",{}),e.jsxs("span",{className:"div-title",style:{fontFamily:"MaruburiBold"},children:["소중한 분들을 초대합니다 ",e.jsx("br",{}),e.jsx("br",{})]}),e.jsxs("span",{style:{lineHeight:"3rem"},children:["살랑이는 바람결에",e.jsx("br",{}),"사랑이 묻어나는 계절입니다",e.jsx("br",{}),"여기 곱고 예쁜 두 사람이 사랑을 맺어",e.jsx("br",{}),"인생의 반려자가 되려 합니다",e.jsx("br",{}),"새 인생을 시작하는 이 자리에 오셔서",e.jsx("br",{}),"축복해 주시면 감사하겠습니다"]})]}),e.jsxs("div",{style:{marginBottom:"1rem",marginTop:"2.5rem",fontFamily:"MaruburiBold",fontSize:"1.6rem"},children:["강대원 · 노신조",e.jsx("span",{style:{fontFamily:"Maruburi"},children:" 의 아들"}),e.jsx("span",{style:{fontFamily:"MaruburiBold"},children:" 경보 "}),e.jsx("br",{})]}),e.jsxs("div",{style:{marginBottom:"1rem",marginTop:"1rem",fontFamily:"MaruburiBold",fontSize:"1.6rem"},children:["장상문 · 한현순",e.jsx("span",{style:{fontFamily:"Maruburi"},children:" 의 딸"}),e.jsx("span",{style:{fontFamily:"MaruburiBold"},children:" 유진"}),e.jsx("br",{})]})]}),$=()=>{f.locale("ko");const[s,r]=c.useState({days:0,hours:0,minutes:0,seconds:0,past:!1});return c.useEffect(()=>{const t=()=>{const i=f(),n=f("2026-05-09 13:00:00"),o=f.duration(n.diff(i));o.asMilliseconds()<=0?r({days:Math.floor(-o.asDays()),hours:-o.hours(),minutes:-o.minutes(),seconds:-o.seconds(),past:!0}):r({days:Math.floor(o.asDays()),hours:o.hours(),minutes:o.minutes(),seconds:o.seconds(),past:!1})};t();const l=setInterval(t,1e3);return()=>clearInterval(l)},[]),e.jsx("div",{style:{width:"40%",margin:"auto",fontSize:"1.6rem",marginTop:"1.0rem"},children:s.past===!0?e.jsxs("div",{style:{display:"flex"},children:[e.jsxs("div",{className:"dday-box",children:[e.jsx("p",{className:"dday-idx",children:" 일 "}),e.jsxs("p",{className:"dday-num",children:[" ",s.days," "]})]}),e.jsxs("div",{className:"dday-div",children:[e.jsx("p",{className:"dday-idx",children:"   "}),e.jsx("p",{className:"dday-div",children:":"})]}),e.jsxs("div",{className:"dday-box",children:[e.jsx("p",{className:"dday-idx",children:" 시간 "}),e.jsxs("p",{className:"dday-num",children:[" ",s.hours," "]})]}),e.jsxs("div",{className:"dday-div",children:[e.jsx("p",{className:"dday-idx",children:"   "}),e.jsx("p",{className:"dday-div",children:":"})]}),e.jsxs("div",{className:"dday-box",children:[e.jsx("p",{className:"dday-idx",children:" 분 "}),e.jsxs("p",{className:"dday-num",children:[" ",s.minutes," "]})]}),e.jsxs("div",{className:"dday-div",children:[e.jsx("p",{className:"dday-idx",children:"   "}),e.jsx("p",{className:"dday-div",children:":"})]}),e.jsxs("div",{className:"dday-box",children:[e.jsx("p",{className:"dday-idx",children:" 초 "}),e.jsxs("p",{className:"dday-num",children:[" ",s.seconds," "]})]})]}):e.jsxs("div",{style:{display:"flex"},children:[e.jsxs("div",{className:"dday-box",children:[e.jsx("p",{className:"dday-idx",children:" 일 "}),e.jsxs("p",{className:"dday-num",children:[" ",s.days," "]})]}),e.jsxs("div",{className:"dday-div",children:[e.jsx("p",{className:"dday-idx",children:"   "}),e.jsx("p",{className:"dday-div",children:":"})]}),e.jsxs("div",{className:"dday-box",children:[e.jsx("p",{className:"dday-idx",children:" 시간 "}),e.jsxs("p",{className:"dday-num",children:[" ",s.hours," "]})]}),e.jsxs("div",{className:"dday-div",children:[e.jsx("p",{className:"dday-idx",children:"   "}),e.jsx("p",{className:"dday-div",children:":"})]}),e.jsxs("div",{className:"dday-box",children:[e.jsx("p",{className:"dday-idx",children:" 분 "}),e.jsxs("p",{className:"dday-num",children:[" ",s.minutes," "]})]}),e.jsxs("div",{className:"dday-div",children:[e.jsx("p",{className:"dday-idx",children:"   "}),e.jsx("p",{className:"dday-div",children:":"})]}),e.jsxs("div",{className:"dday-box",children:[e.jsx("p",{className:"dday-idx",children:" 초 "}),e.jsxs("p",{className:"dday-num",children:[" ",s.seconds," "]})]})]})})},ee=()=>{f.locale("ko");const s=new Date,r=new Date(2026,4,9,13,0,0),t=["일","월","화","수","목","금","토"],l=31,i=new Date(2026,4,1).getDay(),n=9,o=[];for(let a=0;a<i;a++)o.push(e.jsx("td",{},`empty-${a}`));for(let a=1;a<=l;a++)o.push(e.jsx("td",{children:a},a));const g=[];for(let a=0;a<o.length;a+=7){const p=o.slice(a,a+7);g.push(e.jsx("tr",{children:p.map((v,w)=>e.jsx("td",{className:v.props.children===n?"special-day":w===0?"sunday":"",children:v.props.children},w))},`row-${a}`))}const m=Math.floor((S(r)-S(s))/(1e3*60*60*24));return e.jsxs("div",{style:{fontSize:"1.6rem",marginTop:"2.0rem",marginBottom:"2.0rem"},children:[e.jsx("p",{style:{fontSize:"2rem",fontFamily:"MaruBuriBold",marginBottom:"0rem"},children:"2026. 5. 9."}),e.jsxs("p",{style:{fontSize:"1.4rem",marginTop:"0.0rem",marginBottom:"0rem"},children:["토요일 오후 1시",e.jsx("br",{})]}),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"2rem"},children:e.jsxs("table",{className:"calendar",children:[e.jsx("thead",{children:e.jsx("tr",{children:t.map((a,p)=>e.jsx("th",{className:p===0?"sunday":"",children:a},p))})}),e.jsx("tbody",{children:g})]})}),e.jsx($,{}),e.jsxs("p",{style:{marginTop:"1rem"},children:["경보와 유진의 결혼식이  ",m>0?e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{fontFamily:"maruburibold"},children:m}),e.jsx("span",{style:{fontFamily:"maruburi"},children:"일 남았습니다."})]}):m<0?e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{fontFamily:"maruburibold"},children:-m}),e.jsx("span",{style:{fontFamily:"maruburi"},children:"일 지났습니다."})]}):e.jsx(e.Fragment,{children:e.jsx("span",{style:{fontFamily:"maruburi"},children:"오늘입니다."})})]})]})};function S(s){return new Date(s.getFullYear(),s.getMonth(),s.getDate())}const se=""+new URL("DSC08450-B75phto_.jpg",import.meta.url).href,te=""+new URL("DSC08855-Cw7ZJJLb.jpg",import.meta.url).href,ne=""+new URL("DSC09021-Dv6KCXUS.jpg",import.meta.url).href,ie=""+new URL("DSC09044-C5ZusSGM.jpg",import.meta.url).href,re=""+new URL("DSC09137-CXJeoC5y.jpg",import.meta.url).href,oe=""+new URL("DSC09189-DnCRVhgv.jpg",import.meta.url).href,ae=""+new URL("IMG_0247-C44fSWKs.JPG",import.meta.url).href,le=""+new URL("IMG_0248-DIwtR74N.JPG",import.meta.url).href,de=""+new URL("IMG_0249-DjnMHa7o.JPG",import.meta.url).href,ce=""+new URL("IMG_0250-Chby0id3.JPG",import.meta.url).href,me=""+new URL("IMG_0251-D3ZlPlmE.JPG",import.meta.url).href,he=""+new URL("IMG_0252-BLyc7XFP.JPG",import.meta.url).href,pe=""+new URL("IMG_0253-C1GW66BF.JPG",import.meta.url).href,ge=""+new URL("IMG_0254-CJ_GUgLH.JPG",import.meta.url).href,ue=""+new URL("IMG_0255-kQG-payQ.JPG",import.meta.url).href,xe=""+new URL("IMG_0256-BDReYL6n.JPG",import.meta.url).href;u.div`
	

`;u.div`
	width: 200px;
	height: 20px;
	font-size: 15;
	padding: 6px 12px;
	align-items: center;
	textAlign: center;
`;const fe=u.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	width: 90%;
	background-color: grey;
	border-radius: 1.5rem;
`,ye=u.textarea`
	display: inline-block;
	font-size: 1.4rem;	
	width: 8rem;
	height: 1.5rem;
	line-height: 1.5rem;
	padding: 0.5rem;
	border: 1px solid green;
	border-radius: 0.8rem;
	margin-bottom: 0rem;
	margin-left: 0.5rem;
	&:focus {
		outline: none;
	}
`,je=u.textarea`
	display: inline-block;
	font-size: 1.4rem;
	padding: 0.5rem;
	margin: 0rem 0.2rem 0.5rem 0.5rem;
	width: 29rem;
	field-sizing: content;
	min-height: 1.5rem;
	max-height: 7rem;
	border: 1px solid navy;
	border-radius: 0.8rem;
	background-color: none;
	color: black;
	&:focus {
		outline: none;
	}
`,ve=u.div`
	display: inline-block;
	width: 1.5rem;
	font-size: 1.4rem;
	height: 1.5rem;
	line-height: 1.5rem;
	padding: 0.5rem;
	margin: 0.5rem;
	margin-top: 0rem;
	border: 1px solid black;
	border-radius: 35%;
	background-color: white;
`,we=u.div`
	padding: 0.5rem;
	width: auto;
	heigth: auto;
	display: inline-block;
	margin: 0rem;
	text-align: left;
	
`,be=u.div`
	height: 1.5rem;
	max-width: 10rem;
	font-size: 1.2rem;
	font-family: maruburibold;
	line-height: 1.5rem;
	padding: 0.1rem 0.5rem 0.1rem 0.5rem;
	text-align: left;
	margin: 0.5rem 0.5rem 0rem 0.8rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`,Ae=u.div`
	min-width: 4.5rem;	
	height: 1.5rem;
	padding: 0.1rem 0.5rem  0.1rem 0.5rem;
	text-align: left;
	line-height: 1.2rem;
	font-size: 1.rem;
	margin: 0.5rem 0.5rem 0.8rem 0.2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`,Ne=u.div`
	display: inline-block;
	float: left;
	min-height: 1.5rem;
	font-size: 1.4rem;
	margin: 0.1rem 0.2rem 0.8rem 0.8rem;
	padding: 0.5rem;
	text-align: left;
	border-radius: 1.0rem;
	background-color: rgb(168,239,233);
`;u.div`
	display: flex
	flexDirection: column-reverse;
	overflowY: scroll;
	width: 300px;
	height: 400px;
	border: 1px solid red;
`;u.div`
	border: 1px solid rgb(230,224,255);
	boarderRadius: 12px;
	margin: auto;
	width: 98%;
	height: auto;
	background-color: white;
	display: block;
	border: none;
	margin-top: 1.5rem;
	margin-bottom: 2.0rem;
	`;u(I)`


	img {
		width: 95%;
		margin: auto;
	}


	//arrows
	.slick-arrow {
		display: block;
		position: absolute;
		width: 10px;
		z-index: 5;
		height: 10px;			
	}
	
	.slick-prev {
		top: 101%;
		left: 5%;
	}				 
	
	.slick-next {
		top: 101%;
		right: 8%;
	}
				
	 //dots
	.slick-dots {
		left: 50%;
		bottom: -2.0rem;
		width: auto;
		padding: 0px 10px;
		background-color: none;
		border-radius: 10.5px;
		transform: translate(-50%,0);

		li {
			width: 15px;
			height: 15px;
			margin: 0;

			&: last-of-type {
				margin-left: 0px;
			}

		button {
			width: 100%
			height: 100%
			padding: 0;
				
				&::before {
					width: 100%;
					height: 100%;
					position: static;
					top: auto;
					left: auto;
					right: auto;
				}
			}
		}
	}
`;const Ce=""+new URL("test-C7uxtFNP.mov",import.meta.url).href,ke=Object.assign({"./assets/images/DSC07876.jpg":F,"./assets/images/DSC08450.jpg":se,"./assets/images/DSC08855.jpg":te,"./assets/images/DSC09021.jpg":ne,"./assets/images/DSC09044.jpg":ie,"./assets/images/DSC09137.jpg":re,"./assets/images/DSC09189.jpg":oe,"./assets/images/IMG_0247.JPG":ae,"./assets/images/IMG_0248.JPG":le,"./assets/images/IMG_0249.JPG":de,"./assets/images/IMG_0250.JPG":ce,"./assets/images/IMG_0251.JPG":me,"./assets/images/IMG_0252.JPG":he,"./assets/images/IMG_0253.JPG":pe,"./assets/images/IMG_0254.JPG":ge,"./assets/images/IMG_0255.JPG":ue,"./assets/images/IMG_0256.JPG":xe});P.setAppElement("#root");const Me=()=>{const[s,r]=c.useState(!1),[t,l]=c.useState(0),i=c.useMemo(()=>Object.values(ke),[]);c.useEffect(()=>{document.body.style.overflow=s?"hidden":"auto"},[s]);const n=m=>{console.log("index",m),l(m),r(!0)},o={dots:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:2,rows:2,arrows:!1},g=m=>({initialSlide:m,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0});return e.jsxs("div",{style:{border:"1px solid black"},children:[e.jsx(I,{...o,children:i.map((m,a)=>e.jsx("div",{onClick:p=>{n(a)},children:e.jsx("div",{className:"grid-item",children:e.jsx("img",{src:m,style:{width:"100%"}})})},a))}),e.jsx(P,{isOpen:s,onRequestClose:()=>r(!1),style:{overlay:{backgroundColor:"rgba(100,100,100,0.8)",zIndex:1e3},content:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"black",width:"80vw",height:"80vh",margin:"0 auto",padding:"10px",border:"none",overflow:"hidden"}},children:e.jsxs("div",{className:"modal-container",children:[c.createElement(I,{...g(t),key:t},i.map((m,a)=>e.jsx("div",{className:"modal-slide",children:e.jsx("img",{src:m,alt:"",className:"modal-image"})},a))),e.jsx("button",{onClick:()=>r(!1),style:{position:"absolute",top:"10px",right:"10px",background:"transparent",color:"white",fontSize:"1.6rem",border:"none",cursor:"pointer"},children:"x"})]})})]})},L=({tr_type:s})=>{var r=s,t="";return s==="bus"?(r="셔틀버스",t="12시 부산역 토요코인호텔1"):s==="metro"?(r="대중교통으",t=`지하철 남포역 6번 출구 하차 <br/>
		영도대교에서 버스 환승7, 71, 508번 > 75광장 하차<br/>
		부산역 맞은편 버스 508번 > 75광장`):s==="car"&&(r="자가용으",t=`남해고속도로이용시: 남해고속도로>사상IC>구덕터널>부산대교>목장원<br/>
		경부고속도로 이용시: 경부고속도로>구서톨게이트>부두길>목장원`),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"1.6rem",fontFamily:"MaruBuriBold"},children:[r,"로 오시는 분들"]}),e.jsx("div",{style:{fontSize:"1.4rem"},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t}})}),e.jsx("br",{})]})},Le=""+new URL("nmap-WU6Qqe3x.png",import.meta.url).href,De=""+new URL("kmap-CvoyUqkF.png",import.meta.url).href,Ie=""+new URL("tmap-D2-m6050.jpeg",import.meta.url).href,Be=()=>{f.locale("ko");const[s,r]=c.useState({lat:"null",lng:"null"}),[t,l]=c.useState(""),i=()=>new Promise((h,k)=>{if(!navigator.geolocation){alert("위치 정보가 지원되지 않음");return}navigator.geolocation.getCurrentPosition(y=>{const d={lat:y.coords.latitude,lng:y.coords.longitude};h(d),console.log("Get position")},y=>k(y))}),n=35.0716472,o=129.0573867,g="영도목장원",m=/iPhone|iPad|Android/i.test(navigator.userAgent),a=/iPhone|iPad/i.test(navigator.userAgent),p=/Android/i.test(navigator.userAgent),v=async()=>{try{const h=await i()}catch(h){console.error(h)}if(console.log({locat:s}),m){const h=`nmap://route/car?dlat=${n}&dlng=${o}&dname=${g}&appname=com.my.app`;window.location.href=h,setTimeout(()=>{document.hidden||(a?window.location.href="https://itunes.apple.com/app/id311867728?mt=8":p?window.location.href="market://details?id=com.nhn.android.nmap":window.location.href="https://map.naver.com/")},3e3)}else window.open("https:/map.naver.com/","_blank")},w=()=>{if(m){const h=`kakaomap://route?ep=${n},${o}&by=car`;console.log("try open kakao"),window.location.href=h,setTimeout(()=>{document.hidden||(console.log("no kakaomap"),a?(console.log("ios"),window.open("https://itunes.apple.com/app/id304608425?mt=8")):p?(console.log("android"),window.open("market://details?id=net.daum.android.map")):(console.log("else"),window.location.href="https://map.kakao.com/"))},3e3)}else window.open("https://map.kakao.com/","_blank")},N=()=>{if(m){const h=`tmap://route?goalname=${g}&goalx=${o}&goaly=${n}`;window.location.href=h,setTimeout(()=>{document.hidden||(a?window.location.href="https://itunes.apple.com/app/id431589174?mt=8":p?window.location.href="market://details?id=com.skt.tmap.ku":window.location.href="https://google.com/")},3e3)}else window.open("https://google.com","_blank")};return e.jsxs("div",{style:{fontSize:"1.5rem",display:"flex",justifyContent:"space-between",width:"80%",margin:"auto",marginTop:"1rem"},children:[e.jsxs("div",{style:{fontSize:"1.5rem",lineHeight:"3rem",display:"flex",alignItems:"center",width:"9rem",textAlign:"center"},onClick:v,children:[e.jsx("img",{src:Le,style:{height:"3rem",display:"inline-block",marginRight:"1rem"}}),"네이버"]}),e.jsxs("div",{style:{fontSize:"1.5rem",lineHeight:"3rem",display:"flex",alignItems:"center",width:"9rem",textAlign:"left"},onClick:w,children:[e.jsx("img",{src:De,style:{height:"3rem",display:"inline-block",marginRight:"1rem"}}),"카카오"]}),e.jsxs("div",{style:{fontSize:"1.5rem",lineHeight:"3rem",display:"flex",alignItems:"center",width:"9rem",justifyContent:"center",textAlign:"left"},onClick:N,children:[e.jsx("img",{src:Ie,style:{height:"3rem",display:"inline-block",marginRight:"1rem"}}),e.jsx("span",{children:" 티맵"})]})]})},{naver:A}=window,Re=()=>(c.useEffect(()=>{const s=document.getElementById("map");O();const r=129.0573867,t=35.0716472,l=new A.maps.LatLng(t,r),i={center:l,zoom:18,minZoom:6,zoomControl:!1,scaleControl:!1},n=new A.maps.Map(s,i),o={position:l.destinationPoint(90,15),map:n},g=new A.maps.Marker(o),m=['<div class="iw_inner">',"	<h3> 목장원 </h3>","	<p> 부산시 영도구 목장원 </p>","</div>"].join(""),a=new A.maps.InfoWindow({content:m});A.maps.Event.addListener(g,"click",function(p){a.getMap()?a.close():a.open(n,g)})},[]),e.jsxs("div",{children:[e.jsx("div",{id:"map",style:{width:"90%",height:"250px",margin:"auto"},children:" "}),e.jsx(Be,{})]})),Ge=()=>e.jsxs("div",{style:{marginTop:"2rem",marginBottom:"2rem"},children:[e.jsx("div",{className:"sub-title",children:" Location "}),e.jsx("div",{className:"div-title",style:{marginBottom:"1.5rem"},children:"오시는 길"}),e.jsx("span",{style:{fontSize:"1.6rem",fontFamily:"maruburibold"},children:"영도 목장원"}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"1.4rem"},children:"부산광역시 영도구 절영로 355"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"1.1rem"},children:"051-404-5011"}),e.jsx("div",{style:{marginTop:"1.5rem",marginBottom:"1.5rem"},children:e.jsx(Re,{})}),e.jsx(L,{tr_type:"bus"}),e.jsx(L,{tr_type:"car"}),e.jsx(L,{tr_type:"metro"})]}),_e=({isOpen:s,onClose:r,children:t,mystyle:l})=>s.isopen?e.jsx("div",{className:"modal-overlay",onClick:r,style:{zIndex:10},children:e.jsx("div",{style:l,className:"modal-content",onClick:i=>i.stopPropagation(),children:t})}):null,Se=""+new URL("Copy-CKMa0SkC.png",import.meta.url).href,Pe=({src:s})=>{const r=l=>{navigator.clipboard.writeText(l),alert("계좌번호가 복사되었습니다")},t=s==="W"?{Mother:["신부측 어머님","한현순","우리은행","111-1111-11111"],Father:["신부측 아버님"," 장상문","우리은행","222-2222-22222"],Me:["신부","장유진","우리은행","333-3333-33333"]}:{Mother:["신랑측 어머님","노신조","우리은행","111-1111-11111"],Father:["신랑측 아버님"," 강대원","우리은행","222-2222-22222"],Me:["신랑","강경보","우리은행","333-3333-33333"]};return e.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},children:["Mother","Father","Me"].map((l,i)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",textAlign:"left",borderRadius:"12px",padding:"12px",margin:"12px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"MaruBuriLight",fontSize:"18px",marginTop:"0px"},children:t[l][0]}),t[l][1]," ",t[l][2]," ",t[l][3]]}),e.jsx("div",{style:{width:"3vw"},children:" "}),e.jsxs("button",{onClick:()=>r(t[l][2]),style:{backgroundColor:"rgb(249,245,242)",color:"black",border:"1px solid rgb(197,219,238)",padding:"6px",borderRadius:"5px"},children:[e.jsx("img",{src:Se,width:"12px"}),e.jsx("span",{style:{marginLeft:"10px",marginRight:"5px"},children:"COPY"})]})]},i))})},Fe=()=>{const[s,r]=c.useState({isopen:!1,src:null});return e.jsxs("div",{style:{marginTop:"2rem",marginBottom:"2rem"},children:[e.jsx("div",{className:"sub-title",children:"Account"}),e.jsx("div",{className:"div-title",children:"마음 전하실 곳"}),e.jsxs("p",{style:{fontSize:"1.4rem",marginBottom:"1.5rem"},children:["참석이 어려우신 분들을 위해",e.jsx("br",{}),"계좌번호를 기재하였습니다",e.jsx("br",{}),"너그러운 마음으로 양해 부탁드립니다"]}),e.jsx("div",{onClick:()=>{r({isopen:!0,src:"M"}),document.body.classList.add("modal-open")},style:{backgroundColor:"rgb(242,238,238)",padding:"12px",margin:"12px",marginLeft:"20%",marginRight:"20%",fontSize:"1.4rem"},children:"신랑측 계좌번호"}),e.jsx("div",{onClick:()=>{r({isopen:!0,src:"W"}),document.body.classList.add("modal-open")},style:{backgroundColor:"rgb(242,238,238)",padding:"12px",margin:"12px",marginLeft:"20%",marginRight:"20%",fontSize:"1.4rem"},children:"신부측 계좌번호"}),e.jsx(_e,{isOpen:s,onClose:()=>{r({isopen:!1,src:null}),document.body.classList.remove("modal-open")},mystyle:{backgroundColor:"rgb(255,246,246)"},children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(Pe,{src:s.src})})})]})},x=({children:s,...r})=>{const t=c.useRef(),[l,i]=c.useState(!1),n=new IntersectionObserver(([o])=>{o.isIntersecting&&(i(!0),n.disconnect())},{threshold:.3});return c.useEffect(()=>(n.observe(t.current),()=>n.disconnect()),[]),e.jsx(e.Fragment,{children:e.jsx("div",{ref:t,...l?r:{style:{visibility:"hidden"}},children:s})})},Ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOwAAADsAEnxA+tAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACzpJREFUeJztnXuwVlUVwH/3cgkQMR7TgHpFMUBSLEkwUhnLwhrMKCOmsTRrekzThFk0NeVUU+MUOalN08iU00N7OExOko2Yjq+kKXlEDwSFMsTLw1KQx1Xetz/WPfHx8Z37rf06+7x+M3sY4Jy11/7W2nufs/fa63RQUwQ6gdcBFwDTganAFOAEYCjwX2ALsAJ4HLgX6I2iaY0XTgPeBywCHgF2A30GZS/wQ+CMjPWusWAUcBlwA7AU2IaZsQcq+4EbgVdl1pqaARkKzAQWAHcCTwNH8GfwtLIGGVWOo8N7E2sSknl7BjJ3XwC8HhgcSZ8twDuAJxv/sXYAf5wCnN9QLgRGR9XoeLYiej2b/EPtAHaMRHr0jIY/T46qkZ41yDR0ILYiRSHWvB2yfDNpXD0CHM+ZwMUcO5wPjaqRfw4Ck4FNVXeAbo4+oCWLLCOiapQdi4FPVckBRgBv4GivvhiYEFWjuPQCY7tiaxGIIcA0jn1Im0xxp7wdwEpkqfcl4BvAcEeZw4E5ZXGAMs3bB4GNwHLgj8BqYB3y8DYJWRp2NX7CrCI6QPO8fT5wUlSN7DkMrEd69krgCWAt4gTNJMY/1WP9M/I+JJZt3t6G9OikLAd2Ku4LYXyAnjw5wBDgPI5dYCnLvJ38+byFnFDGB3gl5hRQlXnbhZDGBziUlQN0c+ymyHSqMW+7ENr4AHtCOMBIxNiNr2CnBKgnK55FjJ0YfDUScBESF+P3on9L2GghvyVnIevL6yn2OvmLwDLkPfsKYKyvH8iASUCPUt/msgW43uD677uMAJ3Ah4BPIz29aLyC7Iw1Pqh56xGWuPT8rcBbgQ8a3PMXi3oAeDvwV+L3WG05hARC3AFchzx8DrFtfCBcev524Ox+OcsM7kvuUXMa4qGxDdqubAKWAAuBS4ATTRuaMa7D/uR+OR3AC8r7diOjuJr3InNkbOM2l13I69f3gPcTZ952wVfPB5hocO9DWgU7gO9aKui7vIy8Z98KXNXf4CLjq+cnfMDg/kUaBQcBt1sq6FqKMG+74GL8bUjAaTO3GMi4sp2CXcBdlgralE0Ua952wXfPT1huIGd8OyVDDvtFn7ddCNHzQTpsr4GcAbnKUsFWpZdyzdsuhOr5IBtpWllLB1LyXPSe1Krs66/gGuQA46B2v0pFCGl8gI8byLshTUgHZvNIY9mDnEMbo/gxqoaL8Xv672/HjwxkXpYm5GpLJZdRnIMRWZOF8QH+ppR5BDmQehwjkPVkEwWPAF+guEEbocnK+MOR7WiN3A1pQhYYKngIuFapYBXJyvgAswxk/zxNyFpDJT9voGDVCPWql8ZCA/kLWgm41FDJJYYKVokse36CyYLdm1sJuMNAwEtUa+HGhBjGB3hGWccBWsRddmD28LfQUsmyE8v4rzGoZ1UrAecYCOgl5RWi4mQ95zdyuUFdP2i+uQuZ/7X8Ct1BhirhEsa1BQnjcglFm25wbcsRwGS7910OipaRmD0/4T6DOluGgN2vvHk/5d6iNSXWnN/Mf5R1poaArVMKWO9J4TKQh54PcrpKW+/DrQR0oV/Df7b9JZUg9pzfyAyDa1e2+sdO9Ov49cNfvowPZg6wIu0/tHPIr63VLAd5GfYbedxAh5aZQkHfqAcCNKAo5OWBr5Eu5Iyi1gFT0W4CbQ7QiCKQR+ODpJ3V6pEaAtYJPKWssJvqRfvkbc5vxOQ8ZssHQBAHWKcU0gHMMai06LgYfzswm7CHTU0c4ImB/tPkNMk9NpoWkLwO+42sUeqTGgKWMBbJeqERdpj20alFJ49P+82cgD4E7GmNwD8rhfUBP/PXjtzh2vOzOvNwkYFeqSFgjXzZQOARBggrLjAuxn+ObA+8fM5At5YhYM1MRj8N9AH/RgIRykKRjA/wSwP9WoaAteI3BkL7kKVFXylLY1I04wP8S6nfAWCYVuhMpdDGcj/Fze0HxTT+GPSJuFoGgAzEw0rBZXCCIhof4J1KHfuA20yFT0GyZ5n+IA9gMNTkgKIaH+BrKXq1KtfaVPBVgwqK6ARFNj7A79Dra5wFDOQrk9qDhs3l9+TbCYpufJCE0xp9d+NwNH8Csp5dppGgDMafgF7nliFgJkxHv9+cdycog/EB5qPX+9s+KnwP+jXnvDrBRMphfICb0Os+z1el87B3gseIu1hUlp6f8Bh6/VNDwGyYj70TLCPOB5PL1PNBHuj2oNO/bRYwG1yc4CchFBqAshkfJHmXtg2/DaWEixN8OJRSTZTR+AAfRd+O1CxgPpiHbDKY/rg7CL+DWLY5v5HF6NsSfLvediS4KaBOExEjltH4IJ+q0bTlCDA6C4VsnGA3YT7OXHbjD0M/6qZmAQuBjRNc7VmHshsf4EL0bVKFgPlkPpIyTqvgXR7rroLxQdLla9t1XQwFv2igYI+nOqtifIBfoG+bOgTMJ4ORo2NaJV2fA1yN/1rH+rNmA7q2tcwClhW3KRRMisvBiaoZfzT6ELDVpsKNvhrVBpPDo7apZiYix7W6Le7tAd6CBFQWiRnoczik5gBIw+enYw8ZXGvjeBOBR7E7q9eDHNQsmvHB7AygsQP4HAFCkvR8F+P/06tG2eElC0gaRXAA12G/yMYH/QiwB/1R//+TdweouvFPR5+XeRVyusuIPDuAi/Gfo/jGh8DzP/h9CPSJD+MX8YGvGec0cO3I4whQG/8owUeAvDlAbfyjdALTlNduR9pvVUleqI1/LGcDJymvter9kB8HqI1/PF6ygLUjDw5QG781QReAEmI7QG38dLQjgNUmUEJMB6iNn85QYKry2o3Ai7YVxXKAM4AHqY2fxjTklLYG6+Ef4i0E3YnducEqGB88fAdIS6wRoDb+wLzJ4NoB08C2w6cDGG9EGFAl44P+DeAgkszDGp8OsMejrEaqZvyR6EPm/o7kdLLGpwNs9ygroWrGB7MQMOsFoASfDvCkR1lQTeOD2fzv9Abgmw7so3Wby2aKF73ri6Xof6dzXCvTDjVaFgOfdJTxMpLf7hnL+/chCRJ2OOoRi63oPuW3F3leCPnwbcx0/IwAPsrzwN3AR4BXh2y0R7rRt++RSDq25VHiG7+57AVuJv8Zzq9E36bvRNKxLedin0UkdNmBjAh55Vvo2+ItC1gITNKZxSg/Rb/WniUPoW/D+Eg6qhiMWWNilGXkI49hQiewC53uIdZcvDMK+AfxDT1QyUsyS5BXOq3e3rKAhdwM2gnMQrZ988ps5L07D04w0+DaXC0AtaMLuBHYT/wen+eR4D70+s6OpKMTZyHp5GMbO49OMA79m9NhirOu0ZKpwC3Isa3YRs+LE9xsoONanxX7Xgo25WTEIcbh54cfhoSbXYH9XsKDwFwct1kNOB051atN7bII+FI4dcrBICRblk1G0yxHgk5kSddEN6vPwFSVudg/fGbhBF831Mkp/q+quDpBqO8dfMZCn08E0qX0uDjBKnTbs1o6kE+/aTN/JWUDcb67UBpcnGAL8G4POnQD91rqMN9D/ZXHxQn6kO8rm8TsJ4wCvoL9R7j+RPw3ttLg6gR9wB+AzyLRu2mGGYPs7/8Y6HWoazcB09pW1avmAkvwsyXci7zH7+z/+3Dk3X4cfvZarkFOUtV4xsdIELrcHqz1NQDMQYJIYxu6Vbmb/CbxKhWX4zZHhyj3UL/yZcpFSLxgbMP3IaH1eQxXKz3jkdetWIbfB3wseCtrBmQIEm5tu4lkW1YAb8ygfTVKpmK+S2dTtiMfhIydq6kmhUsIE8X0FHA9+jyANZGZhGzdrsfe6C8gn3R7GzlagMuNIgXiVOBS4DxgCnAmsux7IvIMsQtZvt2MhL2tQdK4rCZnBzkB/gdWT7ABCZl7nAAAAABJRU5ErkJggg==",Te={apiKey:"AIzaSyBNSish8RmhjLNgdahQtduMZGG6LuikkJE",authDomain:import.meta.VITE_REACT_APP_AUTH_DOMAIN,projectId:"reactest2-472b7",storageBucket:"reactest2-472b7.firebasestorage.app",messagingSenderId:"699117146096",appId:"1:699117146096:web:ee23e808d4ae120ac59735",measurementId:"G-1DESWE331J"},E=z(Te);H(E);const D=J(E),Oe=()=>{f.locale("ko");const[s,r]=c.useState(""),[t,l]=c.useState(""),[i,n]=c.useState([]),[o,g]=c.useState(null),[m,a]=c.useState(!1),p=c.useRef(null),v=d=>{r(d.target.value)},w=d=>{l(d.target.value)},N=async d=>{a(!0);const j=await B(R(M(D,"comment"),G("createdAt","desc"),W(d)));g(j),a(!1)},h=()=>{if(!m){const d=o.docs.length+5;N(d)}};c.useEffect(()=>{N(10)},[]),c.useEffect(()=>{const d=p.current;if(d)return d.addEventListener("scroll",y),()=>{d.removeEventListener("scroll",y)}},[o]);const k=async()=>{const d=new Date,j=s.trim().length>0,b=t.trim().length>0;if(!j&&!b)alert("이름과 메세지를 모두 입력해주세요");else if(!j)alert("이름을 입력해주세요");else if(!b)alert("메세지를 입력해주세요");else{await Y(M(D,"comment"),{name:s,content:t,createdAt:d});const C={id:i.length,name:s,content:t,createdAt:d};n([...i,C]);const T=await B(R(M(D,"comment"),G("createdAt","desc")));g(T),r(""),l("")}},y=()=>{const d=p.current;if(!d)return;const j=d.scrollTop,b=d.clientHeight,C=d.scrollHeight;-j+b>=C-50&&(console.log(d.scrollBottom),console.log(j),console.log(b),console.log(C),h())};return e.jsxs("div",{style:{maginTop:"2.0rem",marginBottom:"2.0rem",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("div",{className:"sub-title",children:"Gusetbook"}),e.jsx("div",{className:"div-title",children:"방명록"}),e.jsxs(fe,{children:[e.jsxs(we,{children:[e.jsx(ye,{placeholder:"이름",onChange:v,value:s}),e.jsxs("span",{style:{display:"flex",marginTop:"0",alignItems:"flex-end"},children:[e.jsx(je,{rows:"1",placeholder:"메세지를 작성해주세요",onChange:w,value:t}),e.jsx(ve,{onClick:k,children:e.jsx("img",{src:Ee,width:"100%"})})]})]}),e.jsx("div",{ref:p,style:{display:"flex",flexDirection:"column-reverse",overflowY:"scroll",width:"100%",height:"399px"},children:o&&[...o.docs].map(d=>e.jsxs("div",{children:[e.jsxs(be,{children:[" ",d.data().name," "]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-end"},children:[e.jsxs(Ne,{children:[" ",d.data().content," "]}),e.jsxs(Ae,{children:[f(d.data().createdAt.toDate()).format("YY.MM.DD"),e.jsx("br",{}),f(d.data().createdAt.toDate()).format("a h:mm")]})]})]},d.id))})]})]})},Ue=()=>e.jsxs("div",{style:{marginTop:"2rem",marginBottom:"2rem"},children:[e.jsx("div",{className:"sub-title",children:"Notice"}),e.jsx("div",{className:"div-title",children:"안내사항"}),e.jsx("div",{style:{fontFamily:"maruburi",fontSize:"1.4rem"},children:"안녕하세요"})]}),ze=()=>{const s=c.useRef(null);return e.jsxs("div",{style:{marginTop:"2rem",marginBottom:"2rem"},children:[e.jsx("div",{className:"sub-title",children:"Video"}),e.jsx("div",{className:"div-title",children:"웨딩비디오"}),e.jsx("div",{children:e.jsx("video",{ref:s,id:"myVideo",width:"90%",src:Ce,controls:!0})})]})};function He(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"main-frame",children:[e.jsxs("div",{style:{fontSize:"8px"},children:["build time : ","251219 23:01"]}),e.jsx("div",{style:{textAlign:"right",position:"sticky",top:0,zIndex:9},children:e.jsx(K,{})}),e.jsx(x,{className:"fade-in",style:{},children:e.jsx(Z,{})}),e.jsx(x,{className:"fade-in",style:{},children:e.jsx(q,{})}),e.jsx("hr",{style:{width:"90%"}}),e.jsx(x,{className:"fade-in",style:{},children:e.jsx(V,{})}),e.jsx("hr",{style:{width:"90%"}}),e.jsx(x,{className:"fade-in",style:{},children:e.jsx(ee,{})}),e.jsx("hr",{style:{width:"90%"}}),e.jsx(x,{className:"fade-in",style:{},children:e.jsx(Me,{})}),e.jsx(x,{className:"fade-in",style:{},children:e.jsx(ze,{})}),e.jsx("hr",{style:{width:"90%"}}),e.jsx(x,{className:"fade-in",style:{},children:e.jsx(Ge,{})}),e.jsx("hr",{style:{width:"90%"}}),e.jsx(x,{className:"fade-in",style:{},children:e.jsx(Fe,{})}),e.jsx("hr",{style:{width:"90%"}}),e.jsx(x,{className:"fade-in",style:{},children:e.jsx(Oe,{})}),e.jsx("hr",{style:{width:"90%"}}),e.jsx(x,{calssName:"fade-in",style:{},children:e.jsx(Ue,{})}),e.jsx("hr",{style:{width:"90%"}}),e.jsx(x,{className:"fade-in",style:{},children:"Share"})]})})}U.createRoot(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(He,{})}));
