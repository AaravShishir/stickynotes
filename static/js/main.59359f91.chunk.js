(this.webpackJsonpstickynotes=this.webpackJsonpstickynotes||[]).push([[0],{103:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(26),r=a.n(l),c=(a(91),a(92),a(32)),s=a(6),i=a(7),m=a(9),d=a(8),u=a(125),p=a(131),h=a(132),E=a(78),N=a(130),b=a(29),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={showSignup:!1},n}return Object(i.a)(a,[{key:"LoginUser",value:function(){this.setState({showSignup:!0}),this.nextPath("/login")}},{key:"SignUpUser",value:function(){this.setState({showSignup:!0}),this.nextPath("/signup")}},{key:"SignOutUser",value:function(){this.setState({showSignup:!1}),this.nextPath("/")}},{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"GetUserProfile",value:function(){this.nextPath("/myprofile")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"pt-4"},o.a.createElement(u.a,null,o.a.createElement(p.a,{className:"rounded",sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"light ",variant:"light "},o.a.createElement(p.a.Brand,{as:c.b,to:"/",title:"Home"},o.a.createElement("img",{src:"/stickynotes/images/BrandLogo.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"Sticky Notes"})),o.a.createElement(p.a.Collapse,null,o.a.createElement(h.a,{className:"mr-auto brandName"},"Sticky Notes")),o.a.createElement(h.a,{className:"ml-auto nav-buttons"},o.a.createElement(E.a,{hidden:this.state.showSignup,className:"mr-2",variant:"outline-primary",onClick:function(){return e.SignUpUser()}},"Sign Up"),o.a.createElement(E.a,{hidden:this.state.showSignup,variant:"outline-success",onClick:function(){return e.LoginUser()}},"Login"),o.a.createElement(N.a,{title:" Hi, Shishir ",hidden:!this.state.showSignup},o.a.createElement("div",{className:"px-2"},o.a.createElement(E.a,{variant:"success",className:" mb-2",onClick:function(){return e.GetUserProfile()}},"Profile"),o.a.createElement(E.a,{variant:"danger",onClick:function(){return e.SignOutUser()}},"Logout")))))))}}]),a}(o.a.Component),f=Object(b.f)(w),v=a(17),g=a.n(v),y=a(27),S=a(37),O=a(133),k=a(79),j=a.n(k);var x={FormatDate:function(e){return j()(e).fromNow()}},P=a(35),C=a(36),D=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:" col-xs-12 col-sm-12 col-md-4 mb-3"},o.a.createElement(O.a,{className:this.props.Data.background},o.a.createElement(O.a.Body,{className:"py-3"},o.a.createElement(O.a.Title,null,this.props.Data.title),o.a.createElement(O.a.Text,null,this.props.Data.body),o.a.createElement(O.a.Link,{className:"text-success",onClick:function(){return e.props.setShowViewNotes(!0,e.props.Data.title,e.props.Data.body)}},o.a.createElement(P.a,{title:"View",icon:C.b})),o.a.createElement(O.a.Link,{className:"text-primary",onClick:function(){return e.props.setShowEditNotes(!0,e.props.Data.title,e.props.Data.body)}},o.a.createElement(P.a,{title:"Edit",icon:C.a})),o.a.createElement(O.a.Link,{className:"text-danger",onClick:function(){return e.props.setShowDeleteNotes(!0,e.props.Data.title)}},o.a.createElement(P.a,{title:"Delete",icon:C.d})),o.a.createElement(O.a.Link,{className:"text-muted time-card-text"},x.FormatDate(this.props.Data.createdOn)))))}}]),a}(o.a.Component),T=(a(103),a(55)),A=a.n(T),V="https://us-central1-stickynotesapi.cloudfunctions.net/api/",H="alltodo";A.a.create();function F(){return(F=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,V+H,t=[{todoId:"4R0hPLg4LvKTzYwxRAt0",title:"Hello India",body:"We are writing this awesome API India",createdOn:"2020-05-01T16:37:36.172Z",modifiedOn:"2020-05-01T16:37:36.172Z",background:"bg-snwarning"},{todoId:"l4ViPvPjZePuFcnKM4Ux",title:"Hello World",body:"We are writing this awesome API World",createdOn:"2020-05-01T16:04:09.574Z",modifiedOn:"2020-05-01T16:04:09.574Z",background:"bg-sndanger"},{todoId:"l4ViPvPjZePuFcnKM4U3",title:"Hello US",body:"We are writing this awesome API USA",createdOn:"2020-05-01T16:04:09.574Z",modifiedOn:"2020-05-01T16:04:09.574Z",background:"bg-snprimary"},{todoId:"l4ViPvPjZePuFcnKM4U4",title:"Hello Bengaluru",body:"We are writing this awesome API Bengaluru",createdOn:"2020-02-01T16:04:09.574Z",modifiedOn:"2020-02-01T16:04:09.574Z",background:"bg-sninfo"},{todoId:"l4ViPvPjZePuFcnKM4U8",title:"Hello Patna",body:"We are writing this awesome API Patna",createdOn:"2020-05-01T16:04:09.574Z",modifiedOn:"2020-05-01T16:04:09.574Z",background:"bg-snwarning"},{todoId:"l4ViPvPjZePzFcnKM4U3",title:"Hello US",body:"We are writing this awesome API USA",createdOn:"2020-05-01T16:04:09.574Z",modifiedOn:"2020-05-01T16:04:09.574Z",background:"bg-sninfo"},{todoId:"l4ViPvPjZfPuFcnKM4U4",title:"Hello Bengaluru",body:"We are writing this awesome API Bengaluru",createdOn:"2020-02-01T16:04:09.574Z",modifiedOn:"2020-02-01T16:04:09.574Z",background:"bg-sndanger"},{todoId:"l4ViPvPjZePurcnKM4U8",title:"Hello Patna",body:"We are writing this awesome API Patna",createdOn:"2020-05-01T16:04:09.574Z",modifiedOn:"2020-05-01T16:04:09.574Z",background:"bg-snprimary"}],e.abrupt("return",t);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var I={getToDos:function(){return F.apply(this,arguments)}},L=a(128),U=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(L.a,{show:this.props.ShowViewNotes.show,size:"md","aria-labelledby":"contained-modal-title-vcenter",animation:!1,centered:!0},o.a.createElement(L.a.Header,null,o.a.createElement(L.a.Title,{id:"contained-modal-title-vcenter"},this.props.ShowViewNotes.title)),o.a.createElement(L.a.Body,null,o.a.createElement("p",{className:"my-2"},this.props.ShowViewNotes.description)),o.a.createElement(L.a.Footer,null,o.a.createElement(E.a,{onClick:function(){return e.props.setShowViewNotes(!1,e.props.ShowViewNotes.title,e.props.ShowViewNotes.description)}},"Close")))}}]),a}(o.a.Component),z=a(129),Z=a(126),B=a(81),R=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(L.a,{show:this.props.ShowEditNotes.show,size:"md","aria-labelledby":"contained-modal-title-vcenter",animation:!1,centered:!0},o.a.createElement(L.a.Header,null,o.a.createElement(L.a.Title,{id:"contained-modal-title-vcenter"},"Edit Notes")),o.a.createElement(L.a.Body,null,o.a.createElement(z.a,null,o.a.createElement(z.a.Group,{as:Z.a,controlId:"Form.Title"},o.a.createElement(z.a.Label,{column:!0,sm:"3"},o.a.createElement("strong",null,"Title")),o.a.createElement(B.a,{sm:"9"},o.a.createElement(z.a.Control,{type:"text",placeholder:"Title",className:"py-0 txt-editcontent",defaultValue:this.props.ShowEditNotes.title}))),o.a.createElement(z.a.Group,{as:Z.a,controlId:"Form.Description"},o.a.createElement(z.a.Label,{column:!0,sm:"3"},o.a.createElement("strong",null,"Description")),o.a.createElement(B.a,{sm:"9"},o.a.createElement(z.a.Control,{as:"textarea",rows:"2",className:"py-2 txt-editcontent",defaultValue:this.props.ShowEditNotes.description}))),o.a.createElement(z.a.Group,{as:Z.a,controlId:"Form.Color"},o.a.createElement(z.a.Label,{column:!0,sm:"3",className:"py-0"},o.a.createElement("strong",null,"Background")),o.a.createElement(B.a,{sm:9},o.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Grey",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),o.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Yellow",name:"formHorizontalRadios",id:"formHorizontalRadios2"}),o.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Blue",name:"formHorizontalRadios",id:"formHorizontalRadios3"}),o.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Green",name:"formHorizontalRadios",id:"formHorizontalRadios4"}))))),o.a.createElement(L.a.Footer,null,o.a.createElement(E.a,{onClick:function(){return e.props.setShowEditNotes(!1,e.props.ShowEditNotes.title,e.props.ShowEditNotes.description)}},"Cancel"),o.a.createElement(E.a,{className:"btn btn-success"},"Update")))}}]),a}(o.a.Component),G=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(L.a,{show:this.props.ShowAddNotes.show,size:"md","aria-labelledby":"contained-modal-title-vcenter",animation:!1,centered:!0},o.a.createElement(L.a.Header,null,o.a.createElement(L.a.Title,{id:"contained-modal-title-vcenter"},"Add Notes")),o.a.createElement(L.a.Body,null,o.a.createElement(z.a,null,o.a.createElement(z.a.Group,{as:Z.a,controlId:"Form.Title"},o.a.createElement(z.a.Label,{column:!0,sm:"3"},o.a.createElement("strong",null,"Title")),o.a.createElement(B.a,{sm:"9"},o.a.createElement(z.a.Control,{type:"text",placeholder:"Enter Title",className:"py-0 txt-editcontent",defaultValue:this.props.ShowAddNotes.title}))),o.a.createElement(z.a.Group,{as:Z.a,controlId:"Form.Description"},o.a.createElement(z.a.Label,{column:!0,sm:"3"},o.a.createElement("strong",null,"Description")),o.a.createElement(B.a,{sm:"9"},o.a.createElement(z.a.Control,{placeholder:"Enter Description",as:"textarea",rows:"2",className:"py-2 txt-editcontent",defaultValue:this.props.ShowAddNotes.description}))),o.a.createElement(z.a.Group,{as:Z.a,controlId:"Form.Color"},o.a.createElement(z.a.Label,{column:!0,sm:"3",className:"py-0"},o.a.createElement("strong",null,"Background")),o.a.createElement(B.a,{sm:9},o.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Grey",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),o.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Yellow",name:"formHorizontalRadios",id:"formHorizontalRadios2"}),o.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Blue",name:"formHorizontalRadios",id:"formHorizontalRadios3"}),o.a.createElement(z.a.Check,{inline:!0,type:"radio",label:"Green",name:"formHorizontalRadios",id:"formHorizontalRadios4"}))))),o.a.createElement(L.a.Footer,null,o.a.createElement(E.a,{onClick:function(){return e.props.setShowAddNotes(!1)}},"Cancel"),o.a.createElement(E.a,null,"Add")))}}]),a}(o.a.Component),W=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(L.a,{show:this.props.ShowDeleteNotes.show,size:"md","aria-labelledby":"contained-modal-title-vcenter",animation:!1,centered:!0},o.a.createElement(L.a.Header,null,o.a.createElement(L.a.Title,{id:"contained-modal-title-vcenter"},"Delete Notes")),o.a.createElement(L.a.Body,null,o.a.createElement("p",{className:"my-2"},'Are you sure you want to delete "',o.a.createElement("strong",null,this.props.ShowDeleteNotes.title),'" note?')),o.a.createElement(L.a.Footer,null,o.a.createElement(E.a,{onClick:function(){return e.props.setShowDeleteNotes(!1,e.props.ShowDeleteNotes.noteName)}},"Close"),o.a.createElement(E.a,{className:"btn btn-danger",onClick:function(){return e.props.setShowDeleteNotes(!1,e.props.ShowDeleteNotes.noteName)}},"Delete")))}}]),a}(o.a.Component),K=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setShowViewNotes=function(e,t,a){n.setState(Object(S.a)({},n.state,{ShowViewNotes:{show:e,title:t,description:a}}))},n.setShowEditNotes=function(e,t,a){n.setState(Object(S.a)({},n.state,{ShowEditNotes:{show:e,title:t,description:a}}))},n.setShowAddNotes=function(e){n.setState(Object(S.a)({},n.state,{ShowAddNotes:{show:e,title:"",description:""}}))},n.setShowDeleteNotes=function(e,t){n.setState(Object(S.a)({},n.state,{ShowDeleteNotes:{show:e,title:t}}))},n.state={AllTodos:[],ShowViewNotes:{show:!1,title:"",description:""},ShowEditNotes:{show:!1,title:"",description:""},ShowAddNotes:{show:!1,title:"",description:""},ShowDeleteNotes:{show:!1,title:""}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getToDos();case 2:t=e.sent,this.setState(Object(S.a)({},this.state,{AllTodos:t}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.AllTodos.length>0?o.a.createElement("div",{className:"light"},o.a.createElement("div",{className:"row"},this.state.AllTodos.map((function(t){return o.a.createElement(D,{setShowViewNotes:e.setShowViewNotes.bind(e),setShowEditNotes:e.setShowEditNotes.bind(e),setShowDeleteNotes:e.setShowDeleteNotes.bind(e),key:t.todoId,Data:t})}))),o.a.createElement(U,{ShowViewNotes:this.state.ShowViewNotes,setShowViewNotes:this.setShowViewNotes.bind(this)}),o.a.createElement(R,{ShowEditNotes:this.state.ShowEditNotes,setShowEditNotes:this.setShowEditNotes.bind(this)}),o.a.createElement(G,{ShowAddNotes:this.state.ShowAddNotes,setShowAddNotes:this.setShowAddNotes.bind(this)}),o.a.createElement(W,{ShowDeleteNotes:this.state.ShowDeleteNotes,setShowDeleteNotes:this.setShowDeleteNotes.bind(this)}),o.a.createElement("div",{title:"Add Notes",className:"add-notes",onClick:function(){return e.setShowAddNotes(!0)}},o.a.createElement(P.a,{icon:C.c}))):o.a.createElement("div",{className:"light"},o.a.createElement("div",{className:"row"},"Loading..."))}}]),a}(o.a.Component),M=a(127),_=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(M.a,{src:"./images/NotFound.png",width:"inherit",fluid:!0}))}}]),a}(o.a.Component),Y=(a(58),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row justify-content-center my-4"},o.a.createElement("div",{className:"col-md-6 col-xs-6 login_box"},o.a.createElement("div",{className:"col-md-12 col-xs-12",align:"center"},o.a.createElement("div",{className:"outter my-3"},o.a.createElement("img",{src:"/stickynotes/images/BrandLogo.png",alt:"Sticky Notes",className:"image-circle"}))),o.a.createElement("div",{className:"col-md-12 col-xs-12 follow line text-white",align:"center"},o.a.createElement("h3",null,"Join Sticky Notes")),o.a.createElement("div",{className:"col-md-12 col-xs-12 login_control mb-3"},o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"First Name"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"First Name"})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"Last Name"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last Name"})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"E-mail"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"E-mail"})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"Phone Number"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Phone Number"})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"Password"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password"})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"Confirm Password"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password"})),o.a.createElement("div",{align:"center"},o.a.createElement("button",{className:"btn btn-outline-danger"},"Sign Up"))))))}}]),a}(n.Component)),J=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row justify-content-center my-4"},o.a.createElement("div",{className:"col-md-6 col-xs-6 login_box"},o.a.createElement("div",{className:"col-md-12 col-xs-12",align:"center"},o.a.createElement("div",{className:"outter my-3"},o.a.createElement("img",{src:"/stickynotes/images/BrandLogo.png",alt:"Sticky Notes",className:"image-circle"}))),o.a.createElement("div",{className:"col-md-12 col-xs-12 follow line text-white",align:"center"},o.a.createElement("h3",null,"Explore Sticky Notes")),o.a.createElement("div",{className:"col-md-12 col-xs-12 login_control mb-3"},o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"Email Address"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"E-mail"})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"Password"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password"})),o.a.createElement("div",{align:"center"},o.a.createElement("button",{className:"btn btn-outline-danger"},"Login"),o.a.createElement("button",{className:"btn btn-outline-primary ml-2"},"Forgot Password?"))))))}}]),a}(n.Component),$=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row justify-content-center my-4"},o.a.createElement("div",{className:"col-md-6 col-xs-6 login_box"},o.a.createElement("div",{className:"col-md-12 col-xs-12",align:"center"},o.a.createElement("div",{className:"outter my-3"},o.a.createElement("img",{src:"/stickynotes/images/BrandLogo.png",alt:"Shishir",title:"Upload Image",className:"image-circle update-image"}))),o.a.createElement("div",{className:"col-md-12 col-xs-12 follow line text-white",align:"center"},o.a.createElement("h3",null,"Hi, Shishir")),o.a.createElement("div",{className:"col-md-12 col-xs-12 login_control mb-3"},o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"First Name"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"First Name",defaultValue:"Shishir"})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"Last Name"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last Name",defaultValue:"Kumar"})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"E-mail"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"E-mail",value:"xyz@gmail.com",disabled:!0})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"Phone Number"),o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Phone Number",value:"+91-1234567890",disabled:!0})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"Password"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",defaultValue:"*******"})),o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"label"},"Confirm Password"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",defaultValue:"*******"})),o.a.createElement("div",{align:"center"},o.a.createElement("button",{className:"btn btn-danger"},"Update Profile"))))))}}]),a}(n.Component),q=a(62),Q=a(84);A.a.create();function X(){return(X=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return","dfdfdgsg");case 4:e.prev=4,e.t0=e.catch(0),console.log(e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}var ee={authenticate:function(){return X.apply(this,arguments)}},te=function(){return o.a.createElement("div",null,o.a.createElement("span",null,"You are Not Authorized"))},ae=function(e){var t=e.component,a=Object(Q.a)(e,["component"]),l=Object(n.useState)(!1),r=Object(q.a)(l,2),c=r[0],s=r[1],i=Object(n.useState)(!0),m=Object(q.a)(i,2),d=m[0],u=m[1];return Object(n.useEffect)((function(){Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.authenticate().then((function(e){s(e),u(!1)})).catch((function(e){console.log(e),u(!1)}));case 2:case"end":return e.stop()}}),e)})))()}),[]),d?null:o.a.createElement(b.a,Object.assign({},a,{component:c?t:te}))},ne=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container my-3"},o.a.createElement("div",{className:"px-2 light home-content"},o.a.createElement(b.c,null,o.a.createElement(ae,{exact:!0,path:"/",component:K}),o.a.createElement(ae,{exact:!0,path:"/myprofile",component:$}),o.a.createElement(b.a,{exact:!0,path:"/signup",component:Y}),o.a.createElement(b.a,{exact:!0,path:"/login",component:J}),o.a.createElement(b.a,{path:"*",component:_}))))}}]),a}(o.a.Component),oe=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container mb-1"},o.a.createElement("div",{className:"card shadow-lg p-2 bg-light"},o.a.createElement("label",{className:"text-right mb-0"},"Copyright @ Sticky Notes - 2020")))}}]),a}(o.a.Component);var le=function(){return o.a.createElement("div",{className:"bg-white"},o.a.createElement(c.a,{basename:"/stickynotes"},o.a.createElement(f,null),o.a.createElement(ne,null),o.a.createElement(oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){},86:function(e,t,a){e.exports=a(120)},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.59359f91.chunk.js.map