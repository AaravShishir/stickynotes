(this.webpackJsonpstickynotes=this.webpackJsonpstickynotes||[]).push([[0],{106:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),o=a.n(r),c=(a(94),a(95),a(31)),i=a(84),s=a.n(i),m=a(6),d=a(7),u=a(9),p=a(8),h=a(131),E=a(137),b=a(138),N=a(80),f=a(136),v=a(29),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={showSignup:!1},n}return Object(d.a)(a,[{key:"LoginUser",value:function(){this.setState({showSignup:!0}),this.nextPath("/login")}},{key:"SignUpUser",value:function(){this.setState({showSignup:!0}),this.nextPath("/signup")}},{key:"SignOutUser",value:function(){this.setState({showSignup:!1}),this.nextPath("/")}},{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"GetUserProfile",value:function(){this.nextPath("/myprofile")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"pt-4"},l.a.createElement(h.a,null,l.a.createElement(E.a,{className:"rounded",sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"light ",variant:"light "},l.a.createElement(E.a.Brand,{as:c.b,to:"/",title:"Home"},l.a.createElement("img",{src:"/images/BrandLogo.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"Sticky Notes"})),l.a.createElement(E.a.Collapse,null,l.a.createElement(b.a,{className:"mr-auto brandName"},"Sticky Notes")),l.a.createElement(b.a,{className:"ml-auto nav-buttons"},l.a.createElement(N.a,{hidden:this.state.showSignup,className:"mr-2",variant:"outline-primary",onClick:function(){return e.SignUpUser()}},"Sign Up"),l.a.createElement(N.a,{hidden:this.state.showSignup,variant:"outline-success",onClick:function(){return e.LoginUser()}},"Login"),l.a.createElement(f.a,{title:" Hi, Shishir ",hidden:!this.state.showSignup},l.a.createElement("div",{className:"px-2"},l.a.createElement(N.a,{variant:"success",className:" mb-2",onClick:function(){return e.GetUserProfile()}},"Profile"),l.a.createElement(N.a,{variant:"danger",onClick:function(){return e.SignOutUser()}},"Logout")))))))}}]),a}(l.a.Component),w=Object(v.f)(g),y=a(17),O=a.n(y),S=a(27),j=a(57),k=a(139),x=a(81),P=a.n(x);var C={FormatDate:function(e){return P()(e).fromNow()}},T=a(55),V=a(56),U=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:" col-xs-12 col-sm-12 col-md-4 mb-3"},l.a.createElement(k.a,{className:this.props.Data.background},l.a.createElement(k.a.Body,{className:"py-3"},l.a.createElement(k.a.Title,null,this.props.Data.title),l.a.createElement(k.a.Text,null,this.props.Data.body),l.a.createElement(k.a.Link,{className:"text-success",onClick:function(){return e.props.setShowViewNotes(!0,e.props.Data.title,e.props.Data.body)}},l.a.createElement(T.a,{title:"View",icon:V.b})),l.a.createElement(k.a.Link,{className:"text-primary",onClick:function(){return e.props.setShowEditNotes(!0,e.props.Data.title,e.props.Data.body)}},l.a.createElement(T.a,{title:"Edit",icon:V.a})),l.a.createElement(k.a.Link,{className:"text-danger",href:"#"},l.a.createElement(T.a,{title:"Delete",icon:V.c})),l.a.createElement(k.a.Link,{className:"text-muted time-card-text"},C.FormatDate(this.props.Data.createdOn)))))}}]),a}(l.a.Component),I=(a(106),a(53)),L=a.n(I),Z="https://us-central1-stickynotesapi.cloudfunctions.net/api/",F="alltodo";L.a.create();function H(){return(H=Object(S.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z+F,t=[{todoId:"4R0hPLg4LvKTzYwxRAt0",title:"Hello India",body:"We are writing this awesome API India",createdOn:"2020-05-01T16:37:36.172Z",modifiedOn:"2020-05-01T16:37:36.172Z",background:"bg-snwarning"},{todoId:"l4ViPvPjZePuFcnKM4Ux",title:"Hello World",body:"We are writing this awesome API World",createdOn:"2020-05-01T16:04:09.574Z",modifiedOn:"2020-05-01T16:04:09.574Z",background:"bg-sndanger"},{todoId:"l4ViPvPjZePuFcnKM4U3",title:"Hello US",body:"We are writing this awesome API USA",createdOn:"2020-05-01T16:04:09.574Z",modifiedOn:"2020-05-01T16:04:09.574Z",background:"bg-snprimary"},{todoId:"l4ViPvPjZePuFcnKM4U4",title:"Hello Bengaluru",body:"We are writing this awesome API Bengaluru",createdOn:"2020-02-01T16:04:09.574Z",modifiedOn:"2020-02-01T16:04:09.574Z",background:"bg-sninfo"},{todoId:"l4ViPvPjZePuFcnKM4U8",title:"Hello Patna",body:"We are writing this awesome API Patna",createdOn:"2020-05-01T16:04:09.574Z",modifiedOn:"2020-05-01T16:04:09.574Z",background:"bg-snwarning"},{todoId:"l4ViPvPjZePzFcnKM4U3",title:"Hello US",body:"We are writing this awesome API USA",createdOn:"2020-05-01T16:04:09.574Z",modifiedOn:"2020-05-01T16:04:09.574Z",background:"bg-sninfo"},{todoId:"l4ViPvPjZfPuFcnKM4U4",title:"Hello Bengaluru",body:"We are writing this awesome API Bengaluru",createdOn:"2020-02-01T16:04:09.574Z",modifiedOn:"2020-02-01T16:04:09.574Z",background:"bg-sndanger"},{todoId:"l4ViPvPjZePurcnKM4U8",title:"Hello Patna",body:"We are writing this awesome API Patna",createdOn:"2020-05-01T16:04:09.574Z",modifiedOn:"2020-05-01T16:04:09.574Z",background:"bg-snprimary"}],e.abrupt("return",t);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var D={getToDos:function(){return H.apply(this,arguments)}},A=a(134),B=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(A.a,{show:this.props.ShowViewNotes.show,size:"md","aria-labelledby":"contained-modal-title-vcenter",animation:!1,centered:!0},l.a.createElement(A.a.Header,null,l.a.createElement(A.a.Title,{id:"contained-modal-title-vcenter"},this.props.ShowViewNotes.title)),l.a.createElement(A.a.Body,null,l.a.createElement("p",{className:"my-2"},this.props.ShowViewNotes.description)),l.a.createElement(A.a.Footer,null,l.a.createElement(N.a,{onClick:function(){return e.props.setShowViewNotes(!1,e.props.ShowViewNotes.title,e.props.ShowViewNotes.description)}},"Close")))}}]),a}(l.a.Component),z=a(135),W=a(132),R=a(83),K=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(A.a,{show:this.props.ShowEditNotes.show,size:"md","aria-labelledby":"contained-modal-title-vcenter",animation:!1,centered:!0},l.a.createElement(A.a.Header,null,l.a.createElement(A.a.Title,{id:"contained-modal-title-vcenter"},"Edit Notes")),l.a.createElement(A.a.Body,null,l.a.createElement(z.a,null,l.a.createElement(z.a.Group,{as:W.a,controlId:"Form.Title"},l.a.createElement(z.a.Label,{column:!0,sm:"3"},l.a.createElement("strong",null,"Title")),l.a.createElement(R.a,{sm:"9"},l.a.createElement(z.a.Control,{type:"text",placeholder:"Title",className:"py-0 txt-editcontent",defaultValue:this.props.ShowEditNotes.title}))),l.a.createElement(z.a.Group,{as:W.a,controlId:"Form.Description"},l.a.createElement(z.a.Label,{column:!0,sm:"3"},l.a.createElement("strong",null,"Description")),l.a.createElement(R.a,{sm:"9"},l.a.createElement(z.a.Control,{as:"textarea",rows:"2",className:"py-2 txt-editcontent",defaultValue:this.props.ShowEditNotes.description}))),l.a.createElement(z.a.Group,{as:W.a,controlId:"Form.Color"},l.a.createElement(z.a.Label,{column:!0,sm:"3",className:"py-0"},l.a.createElement("strong",null,"Background")),l.a.createElement(R.a,{sm:9},l.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Grey",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),l.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Yellow",name:"formHorizontalRadios",id:"formHorizontalRadios2"}),l.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Blue",name:"formHorizontalRadios",id:"formHorizontalRadios3"}),l.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Green",name:"formHorizontalRadios",id:"formHorizontalRadios4"}))))),l.a.createElement(A.a.Footer,null,l.a.createElement(N.a,{onClick:function(){return e.props.setShowEditNotes(!1,e.props.ShowEditNotes.title,e.props.ShowEditNotes.description)}},"Cancel"),l.a.createElement(N.a,null,"Update")))}}]),a}(l.a.Component),M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).setShowViewNotes=function(e,t,a){n.setState(Object(j.a)({},n.state,{ShowViewNotes:{show:e,title:t,description:a}}))},n.setShowEditNotes=function(e,t,a){n.setState(Object(j.a)({},n.state,{ShowEditNotes:{show:e,title:t,description:a}}))},n.state={AllTodos:[],ShowViewNotes:{show:!1,title:"",description:""},ShowEditNotes:{show:!1,title:"",description:""},ShowDeleteNotes:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getToDos();case 2:t=e.sent,this.setState(Object(j.a)({},this.state,{AllTodos:t}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.AllTodos.length>0?l.a.createElement("div",{className:"light"},l.a.createElement("div",{className:"row"},this.state.AllTodos.map((function(t){return l.a.createElement(U,{setShowViewNotes:e.setShowViewNotes.bind(e),setShowEditNotes:e.setShowEditNotes.bind(e),key:t.todoId,Data:t})}))),l.a.createElement(B,{ShowViewNotes:this.state.ShowViewNotes,setShowViewNotes:this.setShowViewNotes.bind(this)}),l.a.createElement(K,{ShowEditNotes:this.state.ShowEditNotes,setShowEditNotes:this.setShowEditNotes.bind(this)})):"Loading..."}}]),a}(l.a.Component),G=a(133),_=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(G.a,{src:"./images/NotFound.png",width:"inherit",fluid:!0}))}}]),a}(l.a.Component),J=(a(58),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row justify-content-center my-4"},l.a.createElement("div",{className:"col-md-6 col-xs-6 login_box"},l.a.createElement("div",{className:"col-md-12 col-xs-12",align:"center"},l.a.createElement("div",{className:"outter my-3"},l.a.createElement("img",{src:"/images/BrandLogo.png",alt:"Sticky Notes",className:"image-circle"}))),l.a.createElement("div",{className:"col-md-12 col-xs-12 follow line text-white",align:"center"},l.a.createElement("h3",null,"Join Sticky Notes")),l.a.createElement("div",{className:"col-md-12 col-xs-12 login_control mb-3"},l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"First Name"})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last Name"})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"E-mail"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"E-mail"})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"Phone Number"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Phone Number"})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password"})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"Confirm Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password"})),l.a.createElement("div",{align:"center"},l.a.createElement("button",{className:"btn btn-outline-danger"},"Sign Up"))))))}}]),a}(n.Component)),Y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row justify-content-center my-4"},l.a.createElement("div",{className:"col-md-6 col-xs-6 login_box"},l.a.createElement("div",{className:"col-md-12 col-xs-12",align:"center"},l.a.createElement("div",{className:"outter my-3"},l.a.createElement("img",{src:"/images/BrandLogo.png",alt:"Sticky Notes",className:"image-circle"}))),l.a.createElement("div",{className:"col-md-12 col-xs-12 follow line text-white",align:"center"},l.a.createElement("h3",null,"Explore Sticky Notes")),l.a.createElement("div",{className:"col-md-12 col-xs-12 login_control mb-3"},l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"Email Address"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"E-mail"})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password"})),l.a.createElement("div",{align:"center"},l.a.createElement("button",{className:"btn btn-outline-danger"},"Login"),l.a.createElement("button",{className:"btn btn-outline-primary ml-2"},"Forgot Password?"))))))}}]),a}(n.Component),$=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row justify-content-center my-4"},l.a.createElement("div",{className:"col-md-6 col-xs-6 login_box"},l.a.createElement("div",{className:"col-md-12 col-xs-12",align:"center"},l.a.createElement("div",{className:"outter my-3"},l.a.createElement("img",{src:"/images/BrandLogo.png",alt:"Shishir",title:"Upload Image",className:"image-circle update-image"}))),l.a.createElement("div",{className:"col-md-12 col-xs-12 follow line text-white",align:"center"},l.a.createElement("h3",null,"Hi, Shishir")),l.a.createElement("div",{className:"col-md-12 col-xs-12 login_control mb-3"},l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"First Name",defaultValue:"Shishir"})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last Name",defaultValue:"Kumar"})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"E-mail"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"E-mail",value:"xyz@gmail.com",disabled:!0})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"Phone Number"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Phone Number",value:"+91-1234567890",disabled:!0})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",defaultValue:"*******"})),l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"label"},"Confirm Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",defaultValue:"*******"})),l.a.createElement("div",{align:"center"},l.a.createElement("button",{className:"btn btn-danger"},"Update Profile"))))))}}]),a}(n.Component),q=a(64),Q=a(87);L.a.create();function X(){return(X=Object(S.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return","dfdfdgsg");case 4:e.prev=4,e.t0=e.catch(0),console.log(e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}var ee={authenticate:function(){return X.apply(this,arguments)}},te=function(){return l.a.createElement("div",null,l.a.createElement("span",null,"You are Not Authorized"))},ae=function(e){var t=e.component,a=Object(Q.a)(e,["component"]),r=Object(n.useState)(!1),o=Object(q.a)(r,2),c=o[0],i=o[1],s=Object(n.useState)(!0),m=Object(q.a)(s,2),d=m[0],u=m[1];return Object(n.useEffect)((function(){Object(S.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.authenticate().then((function(e){i(e),u(!1)})).catch((function(e){console.log(e),u(!1)}));case 2:case"end":return e.stop()}}),e)})))()}),[]),d?null:l.a.createElement(v.a,Object.assign({},a,{component:c?t:te}))},ne=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container my-3"},l.a.createElement("div",{className:"px-2 light home-content"},l.a.createElement(v.c,null,l.a.createElement(ae,{exact:!0,path:"/",component:M}),l.a.createElement(ae,{exact:!0,path:"/myprofile",component:$}),l.a.createElement(v.a,{exact:!0,path:"/signup",component:J}),l.a.createElement(v.a,{exact:!0,path:"/login",component:Y}),l.a.createElement(v.a,{path:"*",component:_}))))}}]),a}(l.a.Component),le=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container mb-1"},l.a.createElement("div",{className:"card shadow-lg p-2 bg-light"},l.a.createElement("label",{className:"text-right mb-0"},"Copyright @ Sticky Notes - 2020")))}}]),a}(l.a.Component);var re=function(){var e=s()();return l.a.createElement("div",{className:"bg-white"},l.a.createElement(c.a,{history:e},l.a.createElement(w,null),l.a.createElement(ne,null),l.a.createElement(le,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){},89:function(e,t,a){e.exports=a(126)},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.d4800d54.chunk.js.map