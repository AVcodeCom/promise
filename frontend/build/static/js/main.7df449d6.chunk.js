(this["webpackJsonpdo-list"]=this["webpackJsonpdo-list"]||[]).push([[0],{135:function(e,t,a){e.exports=a(151)},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=a(24),l=a(25),u=a(27),s=a(26),p=a(28),d=a(21),m="OPEN_NEW_CARD",g="CLOSE_TOP_CARD",f="IMPORTANCE_CHANGE",E="DEADLINE_CHANGE",h="DEADLINE_TIME_CHANGE",b="OPEN_NEW_CATEGORY";function y(){return{type:b}}var O=a(114),C=a(93),v=a(6),w=a(113),j=a(190),x=a(12),R=a.n(x),N=a(195),A=a(29),T=a(112),k=a(20),_=a(202),I=a(152),S=a(186),L=a(204),D=a(198),P=a(107),M=a.n(P),z=Object(_.a)("div")({padding:"15px",width:"350px"}),G=Object(_.a)("div")({border:"1px solid #bdbdbd",borderRadius:"4px",padding:"10px"}),U=Object(_.a)(I.a)({position:"absolute",right:0,top:0}),H=Object(_.a)(I.a)({color:R.a[600],background:R.a[50]}),F=Object(_.a)("span")({color:R.a[400],fontSize:"19px"}),W=Object(_.a)("p")({color:R.a[300],fontSize:"16px",marginBottom:"5px"}),V=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(S.a,Object.assign({variant:"contained"},t))}))({margin:"20px 0 10px",background:R.a[400],color:R.a[50],width:"100%"}),B=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(S.a,Object.assign({variant:"outlined"},t))}))({margin:"10px 0",fontSize:"12px",color:R.a[500],width:"100%"}),Y=Object(_.a)(L.a)({color:R.a[500],border:"1px solid ".concat(R.a[500]),borderRadius:"5px",width:"100%",padding:"10px"}),K=Object(_.a)("div")({display:"flex",flexDirection:"column",alignItems:"center"}),Q=Object(_.a)("div")({width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center","& span":{fontSize:"14px",color:R.a[400]}}),J=Object(_.a)(S.a)({color:R.a[400]}),X=Object(_.a)(M.a)({fontSize:"17px",textAlign:"center",border:"1px solid ".concat(R.a[500]),borderRadius:"5px",width:"130px",padding:"5px 10px",outline:"none"}),q=Object(_.a)(L.a)({fontSize:"15px",textAlign:"center",border:"1px solid ".concat(R.a[500]),borderRadius:"5px",width:"80%",padding:"5px 10px",outline:"none",margin:"10px 0"}),Z=function(e){return r.a.createElement(D.a,Object.assign({disableRipple:!0,color:"default"},e))},$=Object(w.a)({palette:{primary:R.a}}),ee=Object(v.a)({root:{width:"100%",margin:"10px 0 25px",fontSize:"17px","& label.Mui-focused":{color:R.a[400]},"& .MuiInput-underline:after":{borderBottomColor:R.a[400]},"&:hover .MuiInput-underline:after":{borderBottomColor:R.a[400]},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:R.a[400]},"&:hover fieldset":{borderColor:R.a[400]},"&.Mui-focused fieldset":{borderColor:R.a[400]}}}})(N.a),te=function(e){var t=e.deadline,a=e.deadlineChange,n=e.deadlineTimeChange,c=e.deadlineTime,o=function(e){a(Object(O.a)(e,"yyyy-MM-dd"))};return r.a.createElement(K,null,r.a.createElement(Q,null,r.a.createElement(J,{onClick:function(){return o(new Date)}},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"),r.a.createElement(J,{onClick:function(){return o(Object(C.a)(new Date,1))}},"\u0417\u0430\u0432\u0442\u0440\u0430"),r.a.createElement(J,{onClick:function(){return o(Object(C.a)(new Date,7))}},"\u0427\u0435\u0440\u0435\u0437 \u043d\u0435\u0434\u0435\u043b\u044e")),r.a.createElement(j.a,{theme:$},r.a.createElement(A.a,{utils:T.a},r.a.createElement(ee,{disableToolbar:!0,variant:"inline",format:"yyyy.MM.dd",label:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0432\u043e\u044e \u0434\u0430\u0442\u0443",value:t,onChange:function(e){a(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(Q,null,r.a.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f:"),r.a.createElement(X,{initTime:c,onTimeChange:function(e){n(e)}})))},ae=a(206),ne=a(191),re=a(83),ce=a.n(re),oe=function(e){var t=e.newCategory,a=e.openNewCategory,n=e.putNewCategory,c=e.categoryList,o=e.category,i=e.categoryChange,l=r.a.createRef();return console.log(o),r.a.createElement("div",null,r.a.createElement(ae.a,{name:"category",value:o,onChange:function(e){var t=e.target.value;i(t)}},c.map((function(e){return r.a.createElement(ne.a,{key:e.name,value:String(e.id),control:r.a.createElement(Z,null),label:e.name})}))),r.a.createElement(B,{onClick:function(){return a()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),r.a.createElement("div",null,t?r.a.createElement(Q,null,r.a.createElement(q,{inputRef:l}),r.a.createElement(H,{onClick:function(){return n(l.current.value)}},r.a.createElement(ce.a,null))):null))},ie=a(205),le=a(9),ue=a.n(le),se="35.208.239.109",pe=function(e){return function(t){var a,n;return ue.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ue.a.awrap(t({type:"PUT_NEW_CATEGORY",payload:{name:e,color:"#ffffff"}}));case 2:return(a=new FormData).append("name",e),a.append("color","#ffffff"),n={body:a,headers:{Authorization:localStorage.getItem("Authorization")},method:"POST"},r.next=8,ue.a.awrap(fetch("http://".concat(se,"/api/v1/data/category/new/"),n));case 8:case"end":return r.stop()}}))}},de=a(43),me=a.n(de),ge=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).inputDescription=Object(n.createRef)(),a.inputName=Object(n.createRef)(),a.handleChangeImportance=function(e){var t=e.target.value;a.props.importanceChange(t)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isOpenNewCard,n=t.closeNewCard,c=t.newPointList,o=t.importance,i=t.deadline,l=t.deadlineTime,u=t.deadlineChange,s=t.deadlineTimeChange,p=t.newCategory,d=t.openNewCategory,m=t.putNewCategory,g=t.categoryList,f=t.category,E=t.categoryChange;return r.a.createElement(ie.a,{anchor:"right",open:a,onClose:function(){n()}},r.a.createElement(z,null,r.a.createElement(F,null,"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"),r.a.createElement(U,{onClick:function(){return n()}},r.a.createElement(me.a,null)),r.a.createElement(W,null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "),r.a.createElement(Y,{inputRef:this.inputName}),r.a.createElement(W,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),r.a.createElement(Y,{inputRef:this.inputDescription,multiline:!0,rows:"5"}),r.a.createElement(W,null,"\u0414\u0435\u0434\u043b\u0430\u0439\u043d: "),r.a.createElement(G,null,r.a.createElement(te,{deadline:i,deadlineChange:u,deadlineTimeChange:s,deadlineTime:l})),r.a.createElement(W,null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438: "),r.a.createElement(G,null,r.a.createElement(oe,{newCategory:p,openNewCategory:d,putNewCategory:m,categoryList:g,category:f,categoryChange:E})),r.a.createElement(W,null,"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u0441\u0442\u0438: "),r.a.createElement(G,null,r.a.createElement(ae.a,{name:"importance",value:o,onChange:this.handleChangeImportance},r.a.createElement(ne.a,{value:"L",control:r.a.createElement(Z,null),label:"\u041d\u0435 \u0432\u0430\u0436\u043d\u043e"}),r.a.createElement(ne.a,{value:"M",control:r.a.createElement(Z,null),label:"\u0412\u0430\u0436\u043d\u043e"}),r.a.createElement(ne.a,{value:"H",control:r.a.createElement(Z,null),label:"\u041e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e"}))),r.a.createElement(V,{onClick:function(){c(e.inputName.current.value,e.inputDescription.current.value,o,i,l,f),n()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}}]),t}(n.Component),fe=Object(d.b)((function(e){return{isOpenNewCard:e.newCardReducer.isOpenNewCard,importance:e.newCardReducer.importance,deadline:e.newCardReducer.deadline,deadlineTime:e.newCardReducer.deadlineTime,newCategory:e.newCardReducer.newCategory,categoryList:e.categoryListReducer.categoryList,category:e.categoryListReducer.category}}),(function(e){return{closeNewCard:function(){return e({type:g,payload:!1})},putNewCategory:function(t){return e(pe(t))},openNewCategory:function(){return e(y())},importanceChange:function(t){return e(function(e){return{type:f,payload:e}}(t))},categoryChange:function(t){return e(function(e){return{type:"CATEGORY_CHANGE",payload:e}}(t))},deadlineChange:function(t){return e(function(e){return{type:E,payload:e}}(t))},deadlineTimeChange:function(t){return e(function(e){return{type:h,payload:e}}(t))},newPointList:function(t,a,n,r,c,o){return e(function(e,t,a,n,r,c){return function(o){var i,l,u;return ue.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,ue.a.awrap(o({type:"PUT_NEW_POINT_LIST",payload:{id:Date.now(),name:e,description:t,status:"N",importance:a,deadline:n+" "+r,category:c}}));case 2:return console.log(r),i=new FormData,l=Object(O.a)(new Date(n+" "+r),"yyyy-MM-dd HH:mm"),i.append("name",e),i.append("description",t),i.append("status","N"),i.append("importance",a),i.append("deadline",l),i.append("category",c),u={body:i,headers:{Authorization:localStorage.getItem("Authorization")},method:"POST"},s.next=14,ue.a.awrap(fetch("http://".concat(se,"/api/v1/data/promise/new/"),u));case 14:case"end":return s.stop()}}))}}(t,a,n,r,c,o))}}}))(ge),Ee="OPEN_ChangES_CARD",he="CLOSE_ChangES_CARD",be="PUT_ITEM_ChangE",ye="NEW_ITEM_NAME",Oe="NEW_ITEM_DESCRIPTION",Ce="PUT_NEW_CHANGE_CATEGORY",ve="PUT_HANDLE_CHANGE_IMPORTANCE";var we=a(155),je=a(200),xe=a(192),Re=a(193),Ne=Object(_.a)("div")({width:"80%"}),Ae=Object(_.a)("div")({width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-start",marginTop:"20px"}),Te=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(S.a,Object.assign({variant:"contained"},t))}))({background:R.a[400],color:R.a[50],width:"50%"}),ke=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(we.a,Object.assign({component:"h6",variant:"body1"},t))}))({color:R.a[400]}),_e=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(we.a,Object.assign({component:"p",variant:"body1"},t))}))({flexGrow:1}),Ie=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(we.a,Object.assign({component:"h6",variant:"body1"},t))}))({color:R.a[400]}),Se=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(we.a,Object.assign({component:"p",variant:"body1"},t))}))({color:R.a[400],"& span":{color:"#000"}}),Le=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(je.a,t)}))({margin:"10px 0",width:"100%"}),De=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(xe.a,t)}))({paddingLeft:15,borderBottom:"1px solid rgba(0, 0, 0, .125)",display:"flex",justifyContent:"space-between",margin:"0px"}),Pe=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(Re.a,t)}))({display:"flex",flexDirection:"row",alignItems:"stretch",justifyContent:"space-between"}),Me=Object(_.a)("div")({width:"50%",minWidth:300,display:"flex",flexDirection:"column",justifyContent:"space-between"}),ze=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.list,a=e.newStatus,n=e.openChangesCard,c=e.putItemChanges,o=e.categoryList;return r.a.createElement(Ne,null,t.map((function(e){return r.a.createElement(Le,{key:e.id},r.a.createElement(De,null,r.a.createElement("div",null,r.a.createElement(Ie,null,e.name))),r.a.createElement(Pe,null,r.a.createElement(Me,null,r.a.createElement(ke,null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438:"),r.a.createElement(_e,null,"".concat(e.description)),r.a.createElement(Ae,null,"Y"===e.status?null:r.a.createElement(Te,{onClick:function(){return a(e)}},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e"))),r.a.createElement(Me,null,r.a.createElement(Se,null,"\u0421\u0442\u0430\u0442\u0443\u0441:",r.a.createElement("span",null,"Y"===e.status?"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e":" \u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e")),r.a.createElement(Se,null,"\u0412\u0430\u0436\u043d\u043e\u0441\u0442\u044c:",r.a.createElement("span",null,"L"===e.importance?" \u041d\u0435 \u0432\u0430\u0436\u043d\u043e":"M"===e.importance?" \u0412\u0430\u0436\u043d\u043e":" \u041e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e")),r.a.createElement(Se,null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f:",r.a.createElement("span",null," ",o.map((function(t){return String(e.category)===String(t.id)?t.name:null})))),r.a.createElement(Se,null,"\u0414\u0435\u0434\u043b\u0430\u0439\u043d:",r.a.createElement("span",null,e.deadline)),r.a.createElement(Ae,null,r.a.createElement(Te,{onClick:function(){n(),c(e)}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))))})))}}]),t}(n.Component),Ge=Object(d.b)((function(e){return{list:e.listReducer.list,categoryList:e.categoryListReducer.categoryList}}),(function(e){return{putItemChanges:function(t){return e(function(e){return{type:be,payload:e}}(t))},openChangesCard:function(){return e({type:Ee,payload:!0})},newStatus:function(t){return e(function(e){return function(t){var a,n;return ue.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ue.a.awrap(t({type:"NEW_STATUS",payload:e}));case 2:return(a=new FormData).append("status","Y"),n={body:a,headers:{Authorization:localStorage.getItem("Authorization")},method:"PATCH"},r.next=7,ue.a.awrap(fetch("http://".concat(se,"/api/v1/data/promise/").concat(e.slug,"/"),n));case 7:case"end":return r.stop()}}))}}(t))}}}))(ze),Ue=function(e){var t=e.newCategory,a=e.openNewCategory,n=e.putNewCategory,c=e.categoryList,o=e.category,i=e.putNewChangeCategory,l=r.a.createRef();return r.a.createElement("div",null,r.a.createElement(ae.a,{name:"category",value:o,onChange:function(e){var t=e.target.value;i(t)}},c.map((function(e){return r.a.createElement(ne.a,{key:e.id,value:String(e.id),control:r.a.createElement(Z,null),label:e.name})}))),r.a.createElement(B,{onClick:function(){return a()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),r.a.createElement("div",null,t?r.a.createElement(Q,null,r.a.createElement(q,{inputRef:l}),r.a.createElement(H,{onClick:function(){return n(l.current.value)}},r.a.createElement(ce.a,null))):null))},He=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).Change=function(e){var t=e.target,n=t.name,r=t.value;a.props.putNewItem(n,r)},a.handleChangeImportance=function(e){var t=e.target.value;a.props.putHandleChangeImportance(t)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.closeChangesCard,a=e.isOpenChangesCard,n=e.itemChange,c=e.changeItem,o=e.openNewCategory,i=e.newCategory,l=e.putNewCategory,u=e.categoryList,s=e.putNewChangeCategory;return r.a.createElement(ie.a,{anchor:"right",open:a,onClose:function(){t()}},r.a.createElement(z,null,r.a.createElement(F,null,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),r.a.createElement(U,{onClick:function(){return t()}},r.a.createElement(me.a,null)),r.a.createElement(W,null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "),r.a.createElement(Y,{name:"name",value:n.name,onChange:this.Change}),r.a.createElement(W,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),r.a.createElement(Y,{name:"description",value:n.description,onChange:this.Change,multiline:!0,rows:"5"}),r.a.createElement(W,null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438: "),r.a.createElement(G,null,r.a.createElement(Ue,{newCategory:i,openNewCategory:o,putNewCategory:l,categoryList:u,category:n.category,putNewChangeCategory:s})),r.a.createElement(W,null,"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u0441\u0442\u0438: "),r.a.createElement(G,null,r.a.createElement(ae.a,{name:"importance",value:n.importance,onChange:this.handleChangeImportance},r.a.createElement(ne.a,{value:"L",control:r.a.createElement(Z,null),label:"\u041d\u0435 \u0432\u0430\u0436\u043d\u043e"}),r.a.createElement(ne.a,{value:"M",control:r.a.createElement(Z,null),label:"\u0412\u0430\u0436\u043d\u043e"}),r.a.createElement(ne.a,{value:"H",control:r.a.createElement(Z,null),label:"\u041e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e"}))),r.a.createElement(V,{onClick:function(){c(n),t()}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))}}]),t}(n.Component),Fe=Object(d.b)((function(e){return{isOpenChangesCard:e.changesCardReducer.isOpenChangesCard,itemChange:e.changesCardReducer.itemChange,newCategory:e.newCardReducer.newCategory,categoryList:e.categoryListReducer.categoryList}}),(function(e){return{putNewCategory:function(t){return e(pe(t))},putNewChangeCategory:function(t){return e({type:Ce,payload:t})},putHandleChangeImportance:function(t){return e({type:ve,payload:t})},openNewCategory:function(){return e(y())},closeChangesCard:function(){return e({type:he,payload:!1})},changeItem:function(t){return e(function(e){return function(t){var a,n;return ue.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ue.a.awrap(t({type:"NEW_CHANGE",payload:e}));case 2:return(a=new FormData).append("name",e.name),a.append("description",e.description),a.append("category",e.category),a.append("importance",e.importance),n={body:a,headers:{Authorization:localStorage.getItem("Authorization")},method:"PATCH"},r.next=10,ue.a.awrap(fetch("http://".concat(se,"/api/v1/data/promise/").concat(e.slug,"/"),n));case 10:case"end":return r.stop()}}))}}(t))},putNewItem:function(t,a){return e(function(e,t){switch(e){case"name":return{type:ye,payload:t};case"description":return{type:Oe,payload:t}}}(t,a))}}}))(He),We=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(S.a,Object.assign({variant:"contained"},t))}))({background:R.a[400],color:R.a[50],minWwidth:"280px",margin:"20px 10%"}),Ve=Object(_.a)("div")({display:"flex",flexDirection:"column",alignItems:"center"}),Be=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.openNewCard;return r.a.createElement("main",null,r.a.createElement(fe,null),r.a.createElement(Fe,null),r.a.createElement(We,{onClick:function(){e()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c"),r.a.createElement(Ve,null,r.a.createElement(Ge,null)))}}]),t}(n.Component),Ye=Object(d.b)(null,(function(e){return{openNewCard:function(){return e({type:m,payload:!0})}}}))(Be),Ke=a(189),Qe=a(203),Je=a(115),Xe="OPEN_AUTORISATION",qe="OPEN_REGISTRATION",Ze="OPEN_ACCAUNT_MENU",$e="CLOSE_ACCAUNT_MENU";var et="EXIT_ACCAUNT",tt="CLOSE_ERROR";var at=a(194),nt=a(109),rt=a.n(nt),ct=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(we.a,Object.assign({variant:"h4"},t))}))({color:"#ffffff",flexGrow:1}),ot=Object(_.a)(S.a)({color:"#ffffff"}),it=Object(_.a)(at.a)({background:"#607d8b",position:"static"}),lt=Object(_.a)(rt.a)({color:"#ffffff",width:"30px",height:"30px",borderRadius:"50%"}),ut=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isAutorisation,a=e.entrance,c=e.openAuterisation,o=e.openRegistration,i=e.openAccauntMenu,l=e.closeAccauntMenu,u=e.accauntMenu,s=e.exitAccaunt;return r.a.createElement(it,null,r.a.createElement(Ke.a,{variant:"dense"},r.a.createElement(ct,null,"Promise"),t?r.a.createElement(n.Fragment,null,r.a.createElement(I.a,{onClick:function(){return i()}},r.a.createElement(lt,null)),r.a.createElement(Je.a,{getContentAnchorEl:null,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"left"},open:u,onClick:function(){return l()}},r.a.createElement(Qe.a,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(Qe.a,{onClick:function(){s()}},"\u0412\u044b\u0439\u0442\u0438"))):r.a.createElement(n.Fragment,null,a?r.a.createElement(ot,{onClick:function(){return o()}},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"):r.a.createElement(ot,{onClick:function(){return c()}},"\u0412\u0445\u043e\u0434"))))}}]),t}(n.Component),st=Object(d.b)((function(e){return{accauntMenu:e.changeEntranceReduser.accauntMenu}}),(function(e){return{openAuterisation:function(){return e({type:Xe,payload:!0})},openRegistration:function(){return e({type:qe,payload:!1})},openAccauntMenu:function(){return e({type:Ze,payload:!0})},closeAccauntMenu:function(){return e({type:$e,payload:!1})},exitAccaunt:function(){return e((localStorage.clear(),{type:et}))}}}))(ut),pt=a(201),dt=a(197);var mt=Object(_.a)((function(e){return r.a.createElement(dt.a,Object.assign({elevation:6,variant:"filled"},e))}))({background:"#e57373"}),gt=function(e){var t=e.registerError,a=e.closeErrorRegistration;return r.a.createElement("span",null,r.a.createElement(pt.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:t.error,autoHideDuration:6e3},r.a.createElement(mt,{severity:"error",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{onClick:function(){return a()},size:"small","aria-label":"close",color:"inherit"},r.a.createElement(me.a,{fontSize:"small"})))},r.a.createElement("span",null,t.errorLoginValue),r.a.createElement("span",null,t.errorEmailValue),r.a.createElement("span",null,t.errorPasswordValue))),r.a.createElement(pt.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:t.inputError,autoHideDuration:6e3},r.a.createElement(mt,{severity:"error",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{onClick:function(){return a()},size:"small","aria-label":"close",color:"inherit"},r.a.createElement(me.a,{fontSize:"small"})))},"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u044b \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438")))},ft=Object(_.a)(L.a)({border:"1px solid ".concat(R.a[300]),borderRadius:"5px",width:"320px",padding:"10px",marginBottom:"15px"}),Et=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(S.a,Object.assign({variant:"contained"},t))}))({background:R.a[400],color:R.a[50],width:"320px"}),ht=Object(_.a)((function(e){var t=Object(k.a)({},e);return r.a.createElement(we.a,Object.assign({variant:"h2",gutterBottom:!0},t))}))({margin:"20px 0 10px",color:R.a[400],fontSize:"54px"}),bt=Object(_.a)("div")({maxWidth:"400px",width:"100%",height:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),yt=function(e){var t=e.registration,a=e.registerError,c=e.closeErrorRegistration,o=Object(n.createRef)(),i=Object(n.createRef)(),l=Object(n.createRef)(),u=function(){t(o.current.value,i.current.value,l.current.value)};return r.a.createElement("div",null,r.a.createElement(bt,{onKeyUp:function(e){"Enter"===e.key&&u()}},r.a.createElement(ht,null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement(ft,{placeholder:"\u041b\u043e\u0433\u0438\u043d",inputRef:i}),r.a.createElement(ft,{placeholder:"\u041f\u043e\u0447\u0442\u0430",type:"email",inputRef:o}),r.a.createElement(ft,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",inputRef:l}),r.a.createElement(Et,{onClick:u},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")),r.a.createElement(gt,{registerError:a,closeErrorRegistration:c}))},Ot=function(){return r.a.createElement(bt,null,r.a.createElement(ht,null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e..."),r.a.createElement(ht,null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c"))},Ct=a(110),vt=a.n(Ct),wt="CLOSE_ERROR";var jt=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.registration,a=e.registerError,n=e.closeErrorRegistration;return r.a.createElement(r.a.Fragment,null,this.props.okRegistration?r.a.createElement(Ot,null):r.a.createElement(yt,{registration:t,registerError:a,closeErrorRegistration:n}))}}]),t}(n.Component),xt=Object(d.b)((function(e){return{registerError:e.registrationReducer.errors,okRegistration:e.registrationReducer.okRegistration}}),(function(e){return{registration:function(t,a,n){return e(function(e,t,a){return function(n){var r,c,o,i;return ue.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(!(""!==e&&vt()(e)&&""!==t&&""!==a&&a.length>8&&e!==t!==a)){l.next=23;break}return(r=new FormData).append("username",t),r.append("password",a),r.append("email",e),c={method:"POST",body:r},l.next=8,ue.a.awrap(fetch("http://".concat(se,"/api/v1/data/auth/users/"),c));case 8:return o=l.sent,l.next=11,ue.a.awrap(o.json());case 11:if(i=l.sent,!o.ok){l.next=17;break}return l.next=15,ue.a.awrap(n({type:"OK_REGISTRATION"}));case 15:l.next=21;break;case 17:if(o.ok){l.next=21;break}return l.next=20,ue.a.awrap(n({type:"ERROR",login:i.username,email:i.email,password:i.password}));case 20:console.log(i);case 21:l.next=25;break;case 23:return l.next=25,ue.a.awrap(n({type:"INPUT_ERROR"}));case 25:case"end":return l.stop()}}))}}(t,a,n))},closeErrorRegistration:function(){return e({type:wt})}}}))(jt);var Rt=Object(_.a)((function(e){return r.a.createElement(dt.a,Object.assign({elevation:6,variant:"filled"},e))}))({background:"#e57373"}),Nt=function(e){var t=e.errorAutorisation,a=e.closeError;return r.a.createElement("span",null,r.a.createElement(pt.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:t,autoHideDuration:6e3},r.a.createElement(Rt,{severity:"error",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{onClick:function(){return a()},size:"small","aria-label":"close",color:"inherit"},r.a.createElement(me.a,{fontSize:"small"})))},"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")))},At=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).loginValue=Object(n.createRef)(),a.passwordValue=Object(n.createRef)(),a.toAutrosation=function(){var e,t,n;return ue.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.props,t=e.autorisation,n=e.newList,r.next=3,ue.a.awrap(t(a.loginValue.current.value,a.passwordValue.current.value));case 3:return r.next=5,ue.a.awrap(n());case 5:case"end":return r.stop()}}))},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.errorAutorisation,n=t.closeError;return r.a.createElement("div",null,r.a.createElement(bt,{onKeyUp:function(t){"Enter"===t.key&&e.toAutrosation()}},r.a.createElement(ht,null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement(ft,{placeholder:"\u041b\u043e\u0433\u0438\u043d",inputRef:this.loginValue}),r.a.createElement(ft,{placeholder:"Password",type:"password",autoComplete:"current-password",inputRef:this.passwordValue}),r.a.createElement(Et,{onClick:this.toAutrosation},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),r.a.createElement(Nt,{errorAutorisation:a,closeError:n}))}}]),t}(n.Component),Tt=Object(d.b)((function(e){return{errorAutorisation:e.tokenReducer.errorAutorisation}}),(function(e){return{autorisation:function(t,a){return e(function(e,t){return function(a){var n,r,c,o;return ue.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return(n=new FormData).append("username",e),n.append("password",t),r={method:"POST",body:n},i.next=6,ue.a.awrap(fetch("http://".concat(se,"/api/v1/data/auth/jwt/create/"),r));case 6:return c=i.sent,i.next=9,ue.a.awrap(c.json());case 9:if(o=i.sent,!c.ok){i.next=23;break}return i.next=13,ue.a.awrap(localStorage.setItem("Authorization","Bearer ".concat(o.access)));case 13:return i.next=15,ue.a.awrap(localStorage.setItem("remember","true"));case 15:return i.next=17,ue.a.awrap(localStorage.setItem("tokenData",Date.now()));case 17:return i.next=19,ue.a.awrap(localStorage.setItem("refresh",o.refresh));case 19:return i.next=21,ue.a.awrap(a({type:"PUT_NEW_TOKEN",payload:"Bearer ".concat(o.access)}));case 21:i.next=27;break;case 23:return i.next=25,ue.a.awrap(localStorage.clear());case 25:return i.next=27,ue.a.awrap(a({type:"ERROR_REQUEST"}));case 27:case"end":return i.stop()}}))}}(t,a))},closeError:function(){return e({type:tt})}}}))(At),kt=Object(_.a)("div")({minHeight:"100vh"}),_t=Object(_.a)("div")({width:"100%",height:"90vh",display:"flex",alignItems:"center",justifyContent:"center"}),It=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isAutorisation,a=e.newTokenFromRefresh,n=e.newList,r=e.newCategoryList,c="true"===localStorage.getItem("remember"),o=localStorage.getItem("tokenData");c&&(a(),Date.now()>=5e3*o&&a()),t&&(r(),n())}},{key:"render",value:function(){var e=this.props,t=e.isAutorisation,a=e.newList,c=e.entrance;return r.a.createElement(kt,null,r.a.createElement(st,{isAutorisation:t,entrance:c}),t?r.a.createElement(n.Fragment,null,r.a.createElement(Ye,null)):r.a.createElement(_t,null,c?r.a.createElement(Tt,{newList:a}):r.a.createElement(xt,null)))}}]),t}(n.Component),St=Object(d.b)((function(e){return{isAutorisation:e.tokenReducer.isAutorisation,entrance:e.changeEntranceReduser.entrance}}),(function(e){return{newList:function(){return e((function(e){var t,a,n;return ue.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t={method:"GET",headers:{Authorization:localStorage.getItem("Authorization")}},r.next=3,ue.a.awrap(fetch("http://".concat(se,"/api/v1/data/promise/"),t));case 3:return a=r.sent,r.next=6,ue.a.awrap(a.json());case 6:return n=r.sent,r.next=9,ue.a.awrap(e({type:"GET_LIST",payload:n.results}));case 9:case"end":return r.stop()}}))}))},newTokenFromRefresh:function(){return e((function(e){var t,a,n,r,c;return ue.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=localStorage.getItem("refresh"),(a=new FormData).append("refresh",t),n={body:a,method:"POST"},o.next=6,ue.a.awrap(fetch("http://".concat(se,"/api/v1/data/auth/jwt/refresh/"),n));case 6:if(!(r=o.sent).ok){o.next=17;break}return o.next=10,ue.a.awrap(r.json());case 10:return c=o.sent,o.next=13,ue.a.awrap(localStorage.setItem("Authorization","Bearer ".concat(c.access)));case 13:return o.next=15,ue.a.awrap(e({type:"PUT_NEW_TOKEN_FROM_REFRESH",payload:"Bearer ".concat(c.access)}));case 15:o.next=21;break;case 17:return o.next=19,ue.a.awrap(localStorage.clear());case 19:return o.next=21,ue.a.awrap(e({type:"ERROR_REQUEST"}));case 21:case"end":return o.stop()}}))}))},newCategoryList:function(){return e((function(e){var t,a,n;return ue.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t={method:"GET",headers:{Authorization:localStorage.getItem("Authorization")}},r.next=3,ue.a.awrap(fetch(" http://".concat(se,"/api/v1/data/category/"),t));case 3:return a=r.sent,r.next=6,ue.a.awrap(a.json());case 6:return n=r.sent,r.next=9,ue.a.awrap(e({type:"GET_CATEGORY_LIST",payload:n}));case 9:case"end":return r.stop()}}))}))}}}))(It),Lt=(a(150),a(51)),Dt=a(111),Pt=a(10),Mt=localStorage.getItem("remember"),zt={token:Mt,isAutorisation:Mt,errorAutorisation:!1},Gt=a(86),Ut={list:[]},Ht={completedList:[]},Ft={isOpenNewCard:!1,importance:"L",deadline:Object(O.a)(new Date,"yyyy-MM-dd"),deadlineTime:"00:00",newCategory:!1,getCategory:""},Wt={entrance:!0,accauntMenu:!1},Vt={isOpenChangesCard:!1,itemChange:""},Bt={token:"",okRegistration:!1,errors:{inputError:!1,error:!1,errorLoginValue:"",errorEmailValue:"",errorPasswordValue:""}},Yt={categoryList:[],category:""},Kt=Object(Lt.c)({tokenReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_NEW_TOKEN":case"PUT_NEW_TOKEN_FROM_REFRESH":return Object(Pt.a)({},e,{token:t.payload,isAutorisation:!0});case et:return Object(Pt.a)({},e,{isAutorisation:!1});case"ERROR_REQUEST":return Object(Pt.a)({},e,{isAutorisation:!1,errorAutorisation:!0});case tt:return Object(Pt.a)({},e,{errorAutorisation:!1});default:return e}},listReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LIST":return Object(Pt.a)({},e,{list:t.payload});case"PUT_NEW_POINT_LIST":return Object(Pt.a)({},e,{list:[t.payload].concat(Object(Gt.a)(e.list))});case"NEW_STATUS":var a=t.payload;return Object(Pt.a)({},e,{list:e.list.map((function(e){return e.id===a.id?Object(Pt.a)({},e,{status:"Y"}):e}))});case"NEW_CHANGE":var n=t.payload;return Object(Pt.a)({},e,{list:e.list.map((function(e){return e.id===n.id?Object(Pt.a)({},e,{name:n.name,description:n.description,category:n.category,importance:n.importance}):e}))});default:return e}},completedListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht;arguments.length>1&&arguments[1];return e},newCardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:case g:return Object(Pt.a)({},e,{isOpenNewCard:t.payload});case f:return Object(Pt.a)({},e,{importance:t.payload});case E:return Object(Pt.a)({},e,{deadline:t.payload});case h:return Object(Pt.a)({},e,{deadlineTime:t.payload});case b:return Object(Pt.a)({},e,{newCategory:!e.newCategory});default:return e}},changeEntranceReduser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe:case qe:return Object(Pt.a)({},e,{entrance:t.payload});case Ze:case $e:return Object(Pt.a)({},e,{accauntMenu:t.payload});default:return e}},changesCardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:case he:return Object(Pt.a)({},e,{isOpenChangesCard:t.payload});case be:return Object(Pt.a)({},e,{itemChange:t.payload});case ye:return Object(Pt.a)({},e,{itemChange:Object(Pt.a)({},e.itemChange,{name:t.payload})});case Oe:return Object(Pt.a)({},e,{itemChange:Object(Pt.a)({},e.itemChange,{description:t.payload})});case Ce:return Object(Pt.a)({},e,{itemChange:Object(Pt.a)({},e.itemChange,{category:t.payload})});case ve:return Object(Pt.a)({},e,{itemChange:Object(Pt.a)({},e.itemChange,{importance:t.payload})});default:return e}},registrationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION":return Object(Pt.a)({},e,{token:t.payload});case"INPUT_ERROR":return Object(Pt.a)({},e,{errors:Object(Pt.a)({},e.errors,{inputError:!0})});case"ERROR":return Object(Pt.a)({},e,{errors:Object(Pt.a)({},e.errors,{error:!0,errorLoginValue:t.login,errorEmailValue:t.email,errorPasswordValue:t.password})});case"OK_REGISTRATION":return Object(Pt.a)({},e,{okRegistration:!0});case wt:return Object(Pt.a)({},e,{errors:Object(Pt.a)({},e.errors,{error:!1,inputError:!1})});default:return e}},categoryListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORY_LIST":return Object(Pt.a)({},e,{categoryList:t.payload});case"PUT_NEW_CATEGORY":return Object(Pt.a)({},e,{categoryList:[].concat(Object(Gt.a)(e.categoryList),[t.payload])});case"CATEGORY_CHANGE":return Object(Pt.a)({},e,{category:t.payload});default:return e}}}),Qt=Object(Lt.d)(Kt,Object(Lt.a)(Dt.a));o.a.render(r.a.createElement(d.a,{store:Qt},r.a.createElement(St,null)),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.7df449d6.chunk.js.map