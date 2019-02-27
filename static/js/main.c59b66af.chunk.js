(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),l=a(3),s=a(4),i=a(6),m=a(5),u=a(7),p=a(8),h=a.n(p),d=a(12),b=a(67),f=a(33),E=a(17),v=a(13),y=a.n(v),g=r.a.createContext(),j=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(E.a)({},e,{contacts:[t.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return j(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),N=g.Consumer,O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(){a.setState({showContactInfo:!a.state.showContactInfo})},a.omDeleteClicked=function(){var e=Object(d.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo,s=r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Password: ",o));return r.a.createElement(N,null,function(t){var c=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.omDeleteClicked.bind(e,a,c)}),r.a.createElement(b.a,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?s:null)})}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"}," Contact")," List"),t.map(function(e){return r.a.createElement(O,{key:e.id,contact:e})}))})}}]),t}(n.Component),w=a(14),x=a(20),S=a.n(x),A=a(31),T=a.n(A),D=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"{name}"},t),r.a.createElement("input",{type:o,name:a,className:T()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};D.defaultProps={type:"text"};var P=D,q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{name:""}},a.onChange=function(e){return a.setState(Object(w.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(d.a)(h.a.mark(function e(t,n){var r,c,o,l,s;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={id:S()(),name:c,email:o,phone:l},e.next=14,y.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:e.sent,t({type:"ADD_CONTACT",payload:s}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(N,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header bg-dark"},r.a.createElement("h1",{className:"text-white"},"Add Contact")),r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",onChange:e.onChange,value:a,placeholder:"Enter name",name:"name",type:"text",error:o.name}),r.a.createElement(P,{label:"Email",onChange:e.onChange,value:n,placeholder:"Enter email",name:"email",type:"email",error:o.email}),r.a.createElement(P,{label:"Phone",onChange:e.onChange,value:c,placeholder:"Enter phone",name:"phone",type:"text",error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-dark btn-block"})))})}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{name:""}},a.onChange=function(e){return a.setState(Object(w.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(d.a)(h.a.mark(function e(t,n){var r,c,o,l,s,i,m;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t,a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(N,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header bg-dark"},r.a.createElement("h1",{className:"text-white"},"Edit Contact")),r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",onChange:e.onChange,value:a,placeholder:"Enter name",name:"name",type:"text",error:o.name}),r.a.createElement(P,{label:"Email",onChange:e.onChange,value:n,placeholder:"Enter email",name:"email",type:"email",error:o.email}),r.a.createElement(P,{label:"Phone",onChange:e.onChange,value:c,placeholder:"Enter phone",name:"phone",type:"text",error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update",className:"btn btn-dark btn-block"})))})}}]),t}(n.Component),I=(a(19),function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(b.a,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home "})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus "}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question "}),"About"))))))});I.defaultProps={branding:"My App"};var M=I,F=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},e.match.params.id),r.a.createElement("p",{className:"lead"},"Simple app for managing contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h6",null,t),r.a.createElement("br",null),r.a.createElement("h6",null,a))}}]),t}(n.Component),B=a(68),J=a(70),W=a(69),H=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(B.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(M,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(J.a,null,r.a.createElement(W.a,{exact:!0,path:"/",component:k}),r.a.createElement(W.a,{exact:!0,path:"/about",component:F}),r.a.createElement(W.a,{exact:!0,path:"/test",component:U}),r.a.createElement(W.a,{exact:!0,path:"/about/:id",component:F}),r.a.createElement(W.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(W.a,{exact:!0,path:"/contact/edit/:id",component:_}),r.a.createElement(W.a,{component:L}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.c59b66af.chunk.js.map