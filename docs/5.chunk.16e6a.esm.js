(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+Ogi":function(s){s.exports={label:"label__27Ou6",text:"text__23o12",button:"button__1RPJ4"}},"3n8a":function(s){s.exports={label:"label__1bOQ9",text:"text__VeEJL",input:"input__3QDx6"}},"6b8A":function(s){s.exports={errorcolor:"errorcolor__2pLmg"}},HdoS:function(s,t,e){"use strict";(function(s){e.d(t,"a",(function(){return i}));var n=e("hosL"),a=e("Mw/3"),o=e.n(a);class i extends n.Component{render(){let t=null;return t=void 0!==this.props.left||void 0!==this.props.center||void 0!==this.props.right?[s("div",{class:o.a.top},void 0!==this.props.left?s("div",{className:o.a.left},this.props.left):null,void 0!==this.props.center?s("div",{class:o.a.center},this.props.center):null,void 0!==this.props.right?s("div",{class:o.a.right},this.props.right):null),s("div",{class:o.a.bottom},this.props.children)]:s("div",{class:o.a.single},this.props.children),s("div",{class:o.a.box},t)}}}).call(this,e("hosL").h)},"Mw/3":function(s){s.exports={box:"box__2NdQS",single:"single__1Lrvl",top:"top__mNBcY",bottom:"bottom__1LEQj",left:"left__3v69C",center:"center__2w2JR",right:"right__3mYf_"}},PLZj:function(s,t,e){"use strict";(function(s){e.d(t,"a",(function(){return i}));var n=e("hosL"),a=(e("vXjt"),e("GAEk")),o=e("WOcO");class i extends n.Component{render(){return s("span",null,s(a.a,{icon:o.g,pulse:!0})," ",this.props.text?this.props.text:"Loading...")}}}).call(this,e("hosL").h)},Qu3A:function(s,t,e){"use strict";(function(s){e.d(t,"a",(function(){return i}));var n=e("hosL"),a=e("+Ogi"),o=e.n(a);class i extends n.Component{render(){let t;return t=s("button",this.state.disabled?{className:o.a.button,disabled:!0}:{className:o.a.button,onClick:this.props.onClick},this.props.label),s("label",{className:o.a.label},s("div",{className:o.a.text}),t)}}}).call(this,e("hosL").h)},SwdI:function(s,t,e){"use strict";(function(s){e.d(t,"a",(function(){return i}));var n=e("hosL"),a=e("3n8a"),o=e.n(a);class i extends n.Component{render(){return s("label",{class:o.a.label},s("div",{class:o.a.text},this.props.label),s("input",{class:o.a.input,type:this.props.type,value:this.props.value,onChange:this.props.onChange,disabled:this.props.disabled}))}}}).call(this,e("hosL").h)},WACb:function(s){s.exports={title:"title__2PYT8",image:"image__2zge7",text:"text__2ez1X"}},YoeK:function(){},aWx2:function(s,t,e){"use strict";(function(s){e.d(t,"a",(function(){return l}));var n=e("hosL"),a=(e("bNDl"),e("Qu3A")),o=e("GAEk"),i=e("WOcO"),r=e("eYWD");class l extends n.Component{render(){return"waiting"===this.props.status?s(a.a,{label:s("span",null,this.props.label),onClick:this.props.onClick}):"running"===this.props.status?s(a.a,{label:s("span",null,s(o.a,{icon:i.g,pulse:!0})," ",this.props.label),disabled:!0}):"done"===this.props.status?s(a.a,{label:s("span",null,s(o.a,{icon:i.a})," ",this.props.label),disabled:!0}):s(r.a,null,"Invalid status for HButtonOnce: ",this.props.status.toString())}}}).call(this,e("hosL").h)},bNDl:function(){},eYWD:function(s,t,e){"use strict";(function(s){e.d(t,"a",(function(){return l}));var n=e("hosL"),a=e("6b8A"),o=e.n(a),i=e("GAEk"),r=e("WOcO");class l extends n.Component{render(){return s("div",{class:o.a.errorcolor},s(i.a,{icon:r.e})," ",this.props.children)}}}).call(this,e("hosL").h)},iexX:function(s,t,e){"use strict";(function(s){e.d(t,"a",(function(){return l}));var n=e("hosL"),a=e("uBMG"),o=e.n(a),i=e("GAEk"),r=e("WOcO");class l extends n.Component{render(){return s("div",{class:o.a.successcolor},s(i.a,{icon:r.b})," ",this.props.children)}}}).call(this,e("hosL").h)},lJdf:function(s,t,e){"use strict";(function(s){e.d(t,"a",(function(){return i}));var n=e("hosL"),a=e("WACb"),o=e.n(a);class i extends n.Component{render(){return s("div",{class:o.a.title},s("img",{class:o.a.image,src:this.props.imgsrc,alt:this.props.imgalt}),s("span",{class:o.a.text}," ",this.props.text))}}}).call(this,e("hosL").h)},uBMG:function(s){s.exports={successcolor:"successcolor__1EkSB"}},vXjt:function(){},vb2E:function(s,t,e){"use strict";e.r(t),function(s){e.d(t,"default",(function(){return p}));var n=e("hosL"),a=(e("YoeK"),e("PLZj")),o=e("HdoS"),i=e("lJdf"),r=e("SwdI"),l=(e("aWx2"),e("Qu3A")),c=e("iexX");class p extends n.Component{constructor(){super(),this.getData=()=>{fetch("https://rygapi.steffo.eu/api/user/get/v1?id="+this.props.user_id).then(s=>s.json()).then(s=>{this.setState({data:s.data})})},this.onNewPasswordChange=s=>{this.setState({password_change_new_password:s.target.value})},this.onPasswordChangeClick=()=>{this.setState({password_change_status:"running"}),fetch("https://rygapi.steffo.eu/api/token/passwd/v1",{method:"POST",body:JSON.stringify({token:this.props.loggedIn.token,new_password:this.state.password_change_new_password})}).then(s=>s.json()).then(s=>{this.setState({password_change_status:"done",password_change_revoked_tokens:s.data.revoked_tokens})})},this.state={data:null,password_change_new_password:null,password_change_status:"waiting",password_change_revoked_tokens:null}}componentDidMount(){this.getData()}render(){if(null===this.state.data)return s(a.a,null);let t="";if(this.props.loggedIn&&this.props.loggedIn.user.uid===this.props.user_id){let e;"waiting"===this.state.password_change_status?e=s("div",null,s(r.a,{label:"Nuova password",type:"password",value:this.state.password_change_new_password,onChange:this.onNewPasswordChange}),s(l.a,{label:"Cambia password",onClick:this.onPasswordChangeClick})):"running"===this.state.password_change_status?e=s(a.a,{text:"Cambio password in corso..."}):"done"===this.state.password_change_status&&(e=s(c.a,null,"Password cambiata con successo! E' stato automaticamente effettuato il logoff da ",this.state.password_change_revoked_tokens," accessi.")),t=s(o.a,{left:"Cambia password"},e)}return s("div",null,s(i.a,{imgsrc:"https://combo.steffo.eu/open/ryg/GenericUser.png",imgalt:"👤",text:this.state.data.username}),t)}}}.call(this,e("hosL").h)}}]);
//# sourceMappingURL=5.chunk.16e6a.esm.js.map