(this.webpackJsonpadmin_panel=this.webpackJsonpadmin_panel||[]).push([[0],{30:function(e,a,t){e.exports=t(52)},35:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),c=t.n(l),s=t(4),m=(t(35),t(8)),i=t.n(m),o=t(14),u=t(10),d=t(16),p=t(17),E=t(19),h=t(18),b=t(2),v=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header card-header-primary"},r.a.createElement("h4",{className:"card-title "},"Simple Table"),r.a.createElement("p",{className:"card-category"}," ","Here is a subtitle for this table")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:" text-primary"},r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"City"),r.a.createElement("th",null,"Salary"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,"Dakota Rice"),r.a.createElement("td",null,"Niger"),r.a.createElement("td",null,"Oud-Turnhout"),r.a.createElement("td",{className:"text-primary"},"$36,738")),r.a.createElement("tr",null,r.a.createElement("td",null,"2"),r.a.createElement("td",null,"Minerva Hooper"),r.a.createElement("td",null,"Cura\xe7ao"),r.a.createElement("td",null,"Sinaai-Waas"),r.a.createElement("td",{className:"text-primary"},"$23,789")),r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,"Sage Rodriguez"),r.a.createElement("td",null,"Netherlands"),r.a.createElement("td",null,"Baileux"),r.a.createElement("td",{className:"text-primary"},"$56,142")),r.a.createElement("tr",null,r.a.createElement("td",null,"4"),r.a.createElement("td",null,"Philip Chaney"),r.a.createElement("td",null,"Korea, South"),r.a.createElement("td",null,"Overland Park"),r.a.createElement("td",{className:"text-primary"},"$38,735")),r.a.createElement("tr",null,r.a.createElement("td",null,"5"),r.a.createElement("td",null,"Doris Greene"),r.a.createElement("td",null,"Malawi"),r.a.createElement("td",null,"Feldkirchen in K\xe4rnten"),r.a.createElement("td",{className:"text-primary"},"$63,542")),r.a.createElement("tr",null,r.a.createElement("td",null,"6"),r.a.createElement("td",null,"Mason Porter"),r.a.createElement("td",null,"Chile"),r.a.createElement("td",null,"Gloucester"),r.a.createElement("td",{className:"text-primary"},"$78,616")))))))))))},N=t(11),f=t.n(N),g=(t(40),t(44),function(){var e=Object(u.a)(i.a.mark((function e(a,t){var n,r,l,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return n=w.doc("user/".concat(a.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=a.displayName,l=a.email,c=new Date,e.prev=9,e.next=12,n.set(Object(o.a)({displayName:r,email:l,createdAt:c},t));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(a,t){return e.apply(this,arguments)}}());f.a.initializeApp({apiKey:"AIzaSyBPv4m53bvA-xdzn_Whf1oCMoSFWgLsK3k",authDomain:"e-commerce-db-355bb.firebaseapp.com",databaseURL:"https://e-commerce-db-355bb.firebaseio.com",projectId:"e-commerce-db-355bb",storageBucket:"e-commerce-db-355bb.appspot.com",messagingSenderId:"989641903243",appId:"1:989641903243:web:6c825c34428500cda2588e",measurementId:"G-QJ8ZBTN9W1"});var y=f.a.auth(),w=f.a.firestore(),k=new f.a.auth.GoogleAuthProvider;k.setCustomParameters({prompt:"select_account"});var x=function(){return y.signInWithPopup(k)},S=f.a,j=function(){var e,a=S.auth().currentUser;return null!=a&&(e=a.email),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card card-profile"},r.a.createElement("div",{className:"card-avatar"},r.a.createElement(s.b,{to:"/javascript:;"},r.a.createElement("img",{className:"img",src:"assets/img/faces/marc.jpg",alt:""}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-category text-gray"},"Email:"),r.a.createElement("p",{className:"card-description"},e),r.a.createElement(s.b,{to:"/javascript:;",className:"btn btn-primary btn-round"},"Follow")))))))},O=function(){return r.a.createElement("div",{className:"main-panel"},r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/user",component:j}),r.a.createElement(b.a,{path:"/etherscan",component:v})))},C=t(15),A=(t(50),function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).handleSubmit=function(){var e=Object(u.a)(i.a.mark((function e(a){var t,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,r=t.email,l=t.password,n.props.history.push("/etherscan"),a.preventDefault(),e.prev=3,e.next=6,y.signInWithEmailAndPassword(r,l);case 6:n.setState({email:"",password:""}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(a){return e.apply(this,arguments)}}(),n.handleChange=function(e){var a=e.target,t=a.value,r=a.name;n.setState(Object(C.a)({},r,t))},n.state={email:"",password:""},n}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"Sign In First Please"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"email",type:"email",value:this.state.email,onChange:this.handleChange,placeholder:"email",required:!0}),r.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange,placeholder:"password",required:!0}),r.a.createElement("div",{className:"button"},r.a.createElement("button",{className:"buttonSignIn",type:"submit"},"Sign in"),r.a.createElement("button",{className:"google-sign-in",type:"button",onClick:x},"Sign in with Google"))),r.a.createElement("br",null),r.a.createElement("p",null,"teat user name: cy@example.com"),r.a.createElement("p",null,"password: 123456"))}}]),t}(n.Component)),I=Object(b.f)(A),P=function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement(I,null))},U=(t(51),function(e){var a=e.currentUser;return r.a.createElement("div",{className:"sidebar","data-color":"purple","data-background-color":"white","data-image":"assets/img/sidebar-1.jpg"},r.a.createElement("div",{className:"logo"},r.a.createElement(s.b,{to:"/",className:"simple-text logo-normal"},"Mock Admin")),r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item "},a?r.a.createElement(s.b,{className:"nav-link",to:"/user"},r.a.createElement("i",{className:"material-icons"},"person"),r.a.createElement("p",null,"User Profile")):r.a.createElement(s.b,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"material-icons"},"person"),r.a.createElement("p",null,"User Profile"))),r.a.createElement("li",{className:"nav-item "},a?r.a.createElement(s.b,{className:"nav-link",to:"/etherscan"},r.a.createElement("i",{className:"material-icons"},"content_paste"),r.a.createElement("p",null,"Etherscan")):r.a.createElement(s.b,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"material-icons"},"content_paste"),r.a.createElement("p",null,"Etherscan"))),r.a.createElement("li",{className:"nav-item active-pro "},a?r.a.createElement(s.b,{className:"signout",to:"/",onClick:function(){return y.signOut()}},r.a.createElement("i",{className:"material-icons"},"unarchive"),"Sign Out"):r.a.createElement(s.b,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"material-icons"},"unarchive"),"Login")))))}),W=function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).unsubscribeFromAuth=null,e.state={currentUser:null},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=y.onAuthStateChanged(function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=7;break}return a.next=3,g(t);case 3:a.sent.onSnapshot((function(a){e.setState({currentUser:Object(o.a)({id:a.id},a.data())})})),a.next=8;break;case 7:e.setState({currentUser:t});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(U,{currentUser:this.state.currentUser}),r.a.createElement(O,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:P})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.7b350c1c.chunk.js.map