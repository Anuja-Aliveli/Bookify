(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{59:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),r=s(5),c=s(31),i=s.n(c),o=s(6),l=s(11),u=s(14),j=s(15),d=s(16),b=s(17),h=s(4),m=s(18),p=s.n(m),g=s(22),O=s.n(g),x=(s(59),s(1)),f=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",username:"",password:"",gender:"male",errorMsg:"",isLoading:!1},e.onUsername=function(t){e.setState({username:t.target.value,errorMsg:""})},e.onName=function(t){e.setState({name:t.target.value,errorMsg:""})},e.onPassword=function(t){e.setState({password:t.target.value,errorMsg:""})},e.onRegister=function(){var t=Object(l.a)(Object(o.a)().mark((function t(s){var n,a,r,c,i,l,u,j,d,b,h;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),e.setState({isLoading:!0,errorMsg:""}),n="https://bookifyserver.cyclic.cloud/register/",a=e.state,r=a.username,c=a.name,i=a.gender,l=a.password,u={username:r,password:l,name:c,gender:i},r&&l&&c&&i){t.next=8;break}return e.setState({errorMsg:"Please fill in all the details",isLoading:!1}),t.abrupt("return");case 8:return j={method:"POST",body:JSON.stringify(u),headers:{"content-type":"application/json"}},t.next=11,fetch(n,j);case 11:return d=t.sent,t.next=14,d.json();case 14:b=t.sent,d.ok?(h=e.props.history,e.setState({username:"",name:"",password:"",gender:"male",errorMsg:b.message,isLoading:!1}),setTimeout((function(){h.replace("/login")}),2e3)):e.setState({errorMsg:b.error,isLoading:!1});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onRadio=function(t){e.setState({gender:t.target.value,errorMsg:""})},e}return Object(j.a)(s,[{key:"render",value:function(){var e=this.state,t=e.name,s=e.password,n=e.username,a=e.errorMsg,c=e.isLoading;return Object(x.jsxs)("div",{className:"register-container",children:[Object(x.jsx)("img",{src:"https://res.cloudinary.com/dgkw0cxnh/image/upload/v1690355531/Book1_yn60zj.jpg",alt:"logo",className:"logo-image"}),Object(x.jsxs)("p",{className:"logo-text",children:["Book",Object(x.jsx)("span",{children:"ify"})]}),Object(x.jsxs)("form",{className:"register",onSubmit:this.onRegister,children:[Object(x.jsx)("input",{className:"name",type:"text",placeholder:"Username",onChange:this.onUsername,value:n}),Object(x.jsx)("input",{className:"name",type:"text",placeholder:"Enter Name",onChange:this.onName,value:t}),Object(x.jsx)("input",{className:"name",type:"password",placeholder:"Enter Password",onChange:this.onPassword,value:s}),Object(x.jsxs)("div",{className:"radio",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"radio",name:"gender",value:"male",checked:!0,id:"male",className:"radio-type",onChange:this.onRadio}),Object(x.jsx)("label",{htmlFor:"male",children:"Male"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"radio",name:"gender",value:"female",id:"female",className:"radio-type",onChange:this.onRadio}),Object(x.jsx)("label",{htmlFor:"male",children:"Female"})]})]}),Object(x.jsx)("button",{type:"submit",className:"register-button",children:c?Object(x.jsx)(O.a,{type:"Oval",width:25,height:25,color:"#ffffff"}):"Register"}),""!==a&&Object(x.jsxs)("p",{className:"error",children:["*",a]}),Object(x.jsx)(r.b,{to:"/login",className:"space",children:"Login"})]})]})}}]),s}(n.Component),v=f,k=(s(64),function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",isLoading:!1,errorMsg:""},e.onUsername=function(t){e.setState({username:t.target.value,errorMsg:""})},e.onPassword=function(t){e.setState({password:t.target.value,errorMsg:""})},e.onForm=function(){var t=Object(l.a)(Object(o.a)().mark((function t(s){var n,a,r,c,i,l,u,j,d,b;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),e.setState({isLoading:!0,errorMsg:""}),n="https://bookifyserver.cyclic.cloud/login",a=e.state,r=a.username,c=a.password,i={username:r,password:c},r&&c){t.next=8;break}return e.setState({errorMsg:"Please fill in all the details",isLoading:!1}),t.abrupt("return");case 8:return l={method:"POST",body:JSON.stringify(i),headers:{"content-type":"application/json"}},t.next=11,fetch(n,l);case 11:return u=t.sent,t.next=14,u.json();case 14:j=t.sent,u.ok?(d=e.props.history,b=j.jwtToken,p.a.set("jwt_token",b,{expires:30}),d.replace("/"),e.setState({username:"",password:"",isLoading:!1})):e.setState({errorMsg:j.error,isLoading:!1});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(s,[{key:"render",value:function(){var e=this.state,t=e.username,s=e.password,n=e.isLoading,a=e.errorMsg;return void 0!==p.a.get("jwt_token")?Object(x.jsx)(h.a,{to:"/"}):Object(x.jsxs)("div",{className:"login-container",children:[Object(x.jsx)("img",{src:"https://res.cloudinary.com/dgkw0cxnh/image/upload/v1690355531/Book1_yn60zj.jpg",alt:"logo",className:"logo-image"}),Object(x.jsxs)("p",{className:"logo-text",children:["Book",Object(x.jsx)("span",{children:"ify"})]}),Object(x.jsxs)("form",{className:"login",onSubmit:this.onForm,children:[Object(x.jsx)("p",{className:"text-login",children:"Login"}),Object(x.jsx)("input",{className:"name-login",type:"text",placeholder:"Username",onChange:this.onUsername,value:t}),Object(x.jsx)("input",{className:"name-login",type:"password",placeholder:"Enter Password",onChange:this.onPassword,value:s}),Object(x.jsx)("button",{type:"submit",className:"register-button",children:n?Object(x.jsx)(O.a,{type:"Oval",width:25,height:25,color:"#ffffff"}):"Login"}),""!==a&&Object(x.jsxs)("p",{className:"error",children:["*",a]}),Object(x.jsx)(r.b,{to:"/register",className:"space",children:"Register"})]})]})}}]),s}(n.Component)),N=k,w=s(9),y=function(e){return void 0===p.a.get("jwt_token")?Object(x.jsx)(h.a,{to:"/login"}):Object(x.jsx)(h.b,Object(w.a)({},e))},S=s(7),L=(s(27),s(21)),C=s(29),A=s(34),I=(s(65),Object(h.g)((function(e){var t=e.history,s=function(){p.a.remove("jwt_token"),t.replace("/login")},n=t.location.pathname,a="/"===n?"active link-item":"link-item",c="/books"===n?"active link-item":"link-item";return Object(x.jsxs)("nav",{className:"nav-container",children:[Object(x.jsxs)("div",{className:"image-container",children:[Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("img",{src:"https://res.cloudinary.com/dgkw0cxnh/image/upload/v1690355531/Book1_yn60zj.jpg",alt:"logo",className:"logo-image-header"})}),Object(x.jsx)("p",{className:"logo-text-header",children:"Bookify"})]}),Object(x.jsxs)("div",{className:"link-container-desktop",children:[Object(x.jsx)(r.b,{to:"/register",className:"link-item",children:"Register"}),Object(x.jsx)(r.b,{to:"/",className:a,children:"Home"}),Object(x.jsx)(r.b,{to:"/books",className:c,children:"Books"}),Object(x.jsx)("button",{type:"button",className:"register-button",onClick:s,children:"Logout"})]}),Object(x.jsxs)("div",{className:"link-container-mobile",children:[Object(x.jsx)(r.b,{to:"/register",className:"link-item",children:Object(x.jsx)(C.b,{size:30})}),Object(x.jsx)(r.b,{to:"/",className:a,children:Object(x.jsx)(L.b,{size:30})}),Object(x.jsx)(r.b,{to:"/books",className:c,children:Object(x.jsx)(A.a,{size:30})}),Object(x.jsx)(C.a,{size:30,color:"#ffffff",onClick:s})]})]})}))),P=(s(66),[{name:"All",id:0},{name:"Historical",id:1},{name:"Romance",id:2},{name:"Fantasy",id:3}]),M="INITIAL",R="PROGRESS",D="SUCCESS",E="FAILURE",T=[0,1,2,3,4,5,6,7,8,9],U=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={searchInput:"",bookslist:[],apiStatus:M,activeId:0},e.componentDidMount=function(){e.getDetails()},e.getDetails=Object(l.a)(Object(o.a)().mark((function t(){var s,n,a,r,c,i,l,u;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:R}),s=e.state,n=s.activeId,a=s.searchInput,r=0===n?"j":P[n].name.toLowerCase(),c="https://example-data.draftbit.com/books?_limit=10&q=".concat(""===a?r:a),t.next=7,fetch(c);case 7:return i=t.sent,t.next=10,i.json();case 10:l=t.sent,!0===i.ok?(u=l.map((function(e){return{bookId:e.id,title:e.title,authors:e.authors,imageUrl:e.image_url,numPages:e.num_pages,isPopup:!1}})),setTimeout((function(){e.setState({bookslist:u,apiStatus:D})}),800)):e.setState({apiStatus:E});case 12:case"end":return t.stop()}}),t)}))),e.onSearch=function(t){e.setState({searchInput:t.target.value})},e.onEnter=function(t){"Enter"===t.key&&e.setState(e.getDetails)},e.onActive=function(t){e.setState({activeId:t,searchInput:""},e.getDetails)},e.renderFailure=function(t){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("p",{children:t}),Object(x.jsx)("button",{className:"tab active-tab",type:"button",onClick:e.getDetails,children:"Try Again"})]})},e.renderProgress=function(){return Object(x.jsxs)(S.a,{highlightColor:"rgb(217, 180, 252)",children:[Object(x.jsx)("div",{className:"book-list view-lg",children:T.map((function(e){return Object(x.jsx)("li",{className:"book-item",children:Object(x.jsx)(S.b,{width:"180px",height:"160px"})},e)}))}),Object(x.jsx)("div",{className:"book-list view-sm",children:T.map((function(e){return Object(x.jsx)("li",{className:"book-item",children:Object(x.jsx)(S.b,{width:"100%",height:"200px"})},e)}))})]})},e.mouseEnter=function(t){e.setState((function(e){return{bookslist:e.bookslist.map((function(e){return e.bookId===t.bookId?Object(w.a)(Object(w.a)({},e),{},{isPopup:!0}):e}))}}))},e.mouseLeave=function(t){e.setState((function(e){return{bookslist:e.bookslist.map((function(e){return e.bookId===t.bookId?Object(w.a)(Object(w.a)({},e),{},{isPopup:!1}):e}))}}))},e.onClose=function(t){e.setState((function(e){return{bookslist:e.bookslist.map((function(e){return e.imageId===t.imageId?Object(w.a)(Object(w.a)({},e),{},{isPopup:!1}):e}))}}))},e.renderSuccess=function(){var t=e.state.bookslist;if(0===t.length){return e.renderFailure("Search Not Found")}return Object(x.jsx)("ul",{className:"book-list",children:t.map((function(t){return Object(x.jsxs)("li",{className:"book-item ".concat(t.isPopup?"show-details":""),onMouseEnter:function(){return e.mouseEnter(t)},onMouseLeave:function(){return e.mouseLeave(t)},children:[Object(x.jsx)("img",{className:"image",src:t.imageUrl,alt:t.title}),Object(x.jsxs)("div",{className:"book-details",children:[Object(x.jsx)(L.c,{className:"close",onClick:function(){return e.onClose(t)}}),Object(x.jsxs)("p",{className:"text",children:[Object(x.jsx)("span",{children:"Title: "}),t.title]}),Object(x.jsxs)("p",{className:"text place",children:[Object(x.jsx)("span",{children:"Author: "}),t.authors]}),Object(x.jsx)(r.b,{to:"/books/".concat(t.bookId),className:"link",children:"View Book"})]})]},t.bookId)}))})},e.renderResult=function(){switch(e.state.apiStatus){case R:return e.renderProgress();case D:return e.renderSuccess();case E:return e.renderFailure("Something went wrong.");default:return null}},e.getTabs=function(t){var s=e.state.activeId;return Object(x.jsx)("button",{className:s===t.id?"active-tab tab":"tab",type:"button",id:t.id,onClick:function(){return e.onActive(t.id)},children:t.name},t.id)},e}return Object(j.a)(s,[{key:"render",value:function(){var e=this,t=this.state.searchInput;return Object(x.jsxs)("div",{className:"home-container",children:[Object(x.jsx)(I,{}),Object(x.jsxs)("div",{className:"input-container",children:[Object(x.jsx)("input",{className:"input",placeholder:"Search Book and Press Enter",type:"search",value:t,onChange:this.onSearch,onKeyDown:this.onEnter}),Object(x.jsx)(L.d,{className:"icon"})]}),Object(x.jsx)("div",{className:"tab-container",children:P.map((function(t){return e.getTabs(t)}))}),Object(x.jsx)("div",{className:"books-container",children:this.renderResult()})]})}}]),s}(n.Component),_=U,B=(s(67),a.a.createContext({message:"",isLoading:!1,onBookKist:function(){},onMessage:function(){}})),F="INITIAL",z="PROGRESS",J="SUCCESS",G="FAILURE",H=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={bookDetails:{},apiStatus:F},e.componentDidMount=function(){e.getDetails()},e.getDetails=Object(l.a)(Object(o.a)().mark((function t(){var s,n,a,r,c,i;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:z}),s=e.props.match,n=s.params.id,a="https://example-data.draftbit.com/books/".concat(n),t.next=6,fetch(a);case 6:if(!0!==(r=t.sent).ok){t.next=15;break}return t.next=10,r.json();case 10:c=t.sent,i={id:c.id,title:c.title,authors:c.authors,description:c.description,totalPages:c.num_pages,rating:c.rating,ratingCount:c.rating_count,reviewCount:c.review_count,imageUrl:c.image_url},setTimeout((function(){e.setState({bookDetails:i,apiStatus:J})}),2e3),t.next=16;break;case 15:e.setState({apiStatus:G});case 16:case"end":return t.stop()}}),t)}))),e.renderProgress=function(){var e=Array.from({length:15},(function(e,t){return t}));return Object(x.jsx)(S.a,{highlightColor:"rgb(217, 180, 252)",children:Object(x.jsxs)("div",{className:"book-view-container",children:[Object(x.jsx)("div",{className:"left-container",children:Object(x.jsx)(S.b,{height:"100%",width:"100%"})}),Object(x.jsxs)("div",{className:"right-container",children:[Object(x.jsxs)("div",{className:"first",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:Object(x.jsx)(S.b,{width:200})}),Object(x.jsx)("p",{children:Object(x.jsx)(S.b,{width:200})}),Object(x.jsx)("p",{children:Object(x.jsx)(S.b,{width:200})}),Object(x.jsx)("p",{children:Object(x.jsx)(S.b,{width:200})}),Object(x.jsx)("p",{children:Object(x.jsx)(S.b,{width:200})})]}),Object(x.jsx)(S.b,{width:100,height:40,className:"first-button"})]}),Object(x.jsx)("p",{className:"content-details",children:e.map((function(e){return Object(x.jsx)(S.b,{width:"100%"},e)}))})]})]})})},e.renderFailure=function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("p",{children:"Something went wrong."}),Object(x.jsx)("button",{className:"tab active-tab",type:"button",onClick:e.getDetails,children:"Try Again"})]})},e.renderSuccess=function(){var t=e.state.bookDetails;return Object(x.jsx)(B.Consumer,{children:function(e){var s=e.onBookList,n=e.message,a=e.isLoading,r=""!==n?n:"",c="A"===r.charAt(0)||"I"===r.charAt(0)?"success-msg":"error-msg";return Object(x.jsxs)("div",{className:"book-view-container",children:[Object(x.jsx)("div",{className:"left-container",children:Object(x.jsx)("img",{src:t.imageUrl,alt:t.image_url})}),Object(x.jsxs)("div",{className:"right-container",children:[Object(x.jsxs)("div",{className:"first",children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("b",{children:"Title: "}),t.title]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("b",{children:"Authors: "}),t.authors]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("b",{children:"Total Pages: "}),t.totalPages]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("b",{children:"Ratings: "}),t.rating," (",t.ratingCount,")"]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("b",{children:"Reviews: "}),t.reviewCount]})]}),Object(x.jsxs)("div",{className:"first-button",children:[Object(x.jsx)("button",{type:"button",className:"register-button",onClick:function(){s(t)},children:a?Object(x.jsx)(O.a,{type:"Oval",color:"#ffffff",height:30,width:30}):"Add to List"}),Object(x.jsx)("p",{className:c,children:r})]})]}),Object(x.jsxs)("p",{className:"content-details",children:[Object(x.jsx)("b",{children:"Description: "}),t.description]})]})]})}})},e.renderResult=function(){switch(e.state.apiStatus){case z:return e.renderProgress();case J:return e.renderSuccess();case G:return e.renderFailure();default:return null}},e}return Object(j.a)(s,[{key:"componentWillUnmount",value:function(){(0,this.context.onMessage)()}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"book-bg-container",children:[Object(x.jsx)(I,{}),this.renderResult()]})}}]),s}(n.Component);H.contextType=B;var K=H,q=(s(68),"INITIAL"),V="PROGRESS",W="SUCCESS",Q="FAILURE",X=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={savedList:[],apiStatus:q},e.componentDidMount=function(){e.getListDetails()},e.getListDetails=Object(l.a)(Object(o.a)().mark((function t(){var s,n,a,r,c;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({apiStatus:V}),s=p.a.get("jwt_token"),"https://bookifyserver.cyclic.cloud/books/",n={method:"GET",headers:{Authorization:"Bearer ".concat(s)}},t.next=7,fetch("https://bookifyserver.cyclic.cloud/books/",n);case 7:if(a=t.sent,console.log(a),!0!==a.ok){t.next=17;break}return t.next=12,a.json();case 12:r=t.sent,c=r.list.map((function(e){return{imageUrl:e.book_img_url,rating:e.rating,authors:e.authors,id:e.book_id}})),setTimeout((function(){e.setState({savedList:c,apiStatus:W})}),1e3),t.next=18;break;case 17:e.setState({apiStatus:Q});case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),console.log(t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,20]])}))),e.onDelete=function(){var t=Object(l.a)(Object(o.a)().mark((function t(s){var n,a,r;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.a.get("jwt_token"),a="https://bookifyserver.cyclic.cloud/books/".concat(s,"/"),r={method:"DELETE",headers:{Authorization:"Bearer ".concat(n)}},t.prev=3,t.next=6,fetch(a,r);case 6:!0===t.sent.ok&&e.getListDetails(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),e.renderList=function(){var t=e.state.savedList;return Object(x.jsx)("ul",{className:"saved-list",children:t.map((function(t){return Object(x.jsxs)("li",{className:"saved-item",children:[Object(x.jsx)(r.b,{to:"/books/".concat(t.id),children:Object(x.jsx)("img",{className:"saved-img",src:t.imageUrl,alt:t.title})}),Object(x.jsxs)("div",{className:"saved-container",children:[Object(x.jsxs)("p",{className:"saved",children:[Object(x.jsx)("b",{children:"Authors: "}),t.authors]}),Object(x.jsxs)("p",{className:"saved",children:[Object(x.jsx)("b",{children:"Rating: "}),t.rating]}),Object(x.jsx)(L.a,{color:"#000000",size:25,className:"saved-icon-container",onClick:function(){return e.onDelete(t.id)}})]})]},t.id)}))})},e.renderProgress=function(){return Object(x.jsx)(S.a,{highlightColor:"rgb(217, 180, 252)",children:Object(x.jsx)("ul",{className:"saved-list",children:Array.from({length:8}).map((function(e,t){return Object(x.jsxs)("li",{className:"saved-item",children:[Object(x.jsx)(S.b,{height:160}),Object(x.jsxs)("div",{className:"saved-container",children:[Object(x.jsx)("p",{className:"saved",children:Object(x.jsx)(S.b,{width:130})}),Object(x.jsx)("p",{className:"saved",children:Object(x.jsx)(S.b,{width:100})}),Object(x.jsx)("div",{className:"saved-icon-container",children:Object(x.jsx)(S.b,{circle:!0,height:25,width:25})})]})]},t)}))})})},e.renderNotFound=function(e,t){return Object(x.jsxs)("div",{className:"not-container",children:[Object(x.jsx)("p",{className:"not-text",children:e}),Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("button",{type:"button",className:"register-button",children:t})})]})},e.renderSuccess=function(){var t=e.state.savedList;return Object(x.jsx)(x.Fragment,{children:0===t.length?e.renderNotFound("No Books are Added","Add Books"):e.renderList()})},e.renderResult=function(){switch(e.state.apiStatus){case V:return e.renderProgress();case W:return e.renderSuccess();case Q:return e.renderNotFound("Something went wrong.","Try Again");default:return null}},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"list-bg-container",children:[Object(x.jsx)(I,{}),this.renderResult()]})}}]),s}(n.Component),Y=X,Z=(s(69),function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={message:"",isLoading:!1},e.onBookList=function(){var t=Object(l.a)(Object(o.a)().mark((function t(s){var n,a,r,c,i;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),n=p.a.get("jwt_token"),"https://bookifyserver.cyclic.cloud/bookitem/",a={bookId:s.id,title:s.title,authors:s.authors,rating:s.rating,ratingCount:s.ratingCount,reviewCount:s.reviewCount,imageUrl:s.imageUrl},r={method:"POST",headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify(a)},t.next=7,fetch("https://bookifyserver.cyclic.cloud/bookitem/",r);case 7:if(!0!==(c=t.sent).ok){t.next=15;break}return t.next=11,c.json();case 11:i=t.sent,e.setState({message:i.message,isLoading:!1}),t.next=16;break;case 15:e.setState({message:"Try Again",isLoading:!1});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onMessage=function(){e.setState({message:""})},e}return Object(j.a)(s,[{key:"render",value:function(){var e=this.state,t=e.message,s=e.isLoading;return Object(x.jsx)(B.Provider,{value:{message:t,isLoading:s,onBookList:this.onBookList,onMessage:this.onMessage},children:Object(x.jsxs)(h.d,{children:[Object(x.jsx)(h.b,{exact:!0,path:"/register",component:v}),Object(x.jsx)(h.b,{exact:!0,path:"/login",component:N}),Object(x.jsx)(y,{exact:!0,path:"/",component:_}),Object(x.jsx)(y,{exact:!0,path:"/books/:id",component:K}),Object(x.jsx)(y,{exact:!0,path:"/books",component:Y})]})})}}]),s}(n.Component)),$=Z;i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(r.a,{children:Object(x.jsx)($,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.39f46ceb.chunk.js.map