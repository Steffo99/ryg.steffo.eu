(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{HgM2:function(s,t,e){"use strict";e.r(t),function(s){e.d(t,"default",(function(){return i}));var n=e("hosL"),a=e("muVr"),o=e("HdoS");class i extends n.Component{render(){return s("div",null,s(a.a,{onSuccessfulLogin:this.props.onSuccessfulLogin}),s(o.a,{left:"Biscotti"},s("p",null,"Effettuando il login, verranno salvati alcuni dati nel ",s("code",null,"localStorage")," del tuo browser per identificare il tuo account."),s("p",null,"Non sono esattamente cookie, ma penso che ti potrebbe interessare saperlo in ogni caso.")))}}}.call(this,e("hosL").h)},aWx2:function(s,t,e){"use strict";(function(s){e.d(t,"a",(function(){return l}));var n=e("hosL"),a=e("Qu3A"),o=e("GAEk"),i=e("WOcO"),r=e("eYWD");class l extends n.Component{render(){return"waiting"===this.props.status?s(a.a,{label:s("span",null,this.props.label),onClick:this.props.onClick}):"running"===this.props.status?s(a.a,{label:s("span",null,s(o.a,{icon:i.g,pulse:!0})," ",this.props.label),disabled:!0}):"done"===this.props.status?s(a.a,{label:s("span",null,s(o.a,{icon:i.a})," ",this.props.label),disabled:!0}):"error"===this.props.status?s(a.a,{label:s("span",null,s(o.a,{icon:i.e})," ",this.props.label),onClick:this.props.onClick}):s(r.a,null,"Invalid status for HButtonOnce: ",this.props.status.toString())}}}).call(this,e("hosL").h)},muVr:function(s,t,e){"use strict";(function(s){e.d(t,"a",(function(){return r}));var n=e("hosL"),a=e("HdoS"),o=e("SwdI"),i=e("aWx2");e("Y3FI");class r extends n.Component{constructor(){super(),this.onUsernameChange=s=>{this.setState({username:s.target.value})},this.onPasswordChange=s=>{this.setState({password:s.target.value})},this.onLoginClick=()=>{this.setState({status:"running"}),console.log("Trying to login..."),fetch("https://rygapi.steffo.eu/api/login/royalnet/v1",{method:"POST",headers:{},body:JSON.stringify({username:this.state.username,password:this.state.password})}).then(s=>s.json()).then(s=>{s.success?(this.setState({status:"done"}),this.props.onSuccessfulLogin(s.data)):(this.setState({status:"error"}),console.error(s))})},this.state={username:"",password:"",status:"waiting"}}render(){let t=!("waiting"===this.state.status||"error"===this.state.status);return s(a.a,{left:"Login"},s(o.a,{label:"Username",type:"text",value:this.state.username,onChange:this.onUsernameChange,disabled:t,name:"username"}),s(o.a,{label:"Password",type:"password",value:this.state.password,onChange:this.onPasswordChange,disabled:t}),s(i.a,{label:"Login",onClick:this.onLoginClick,status:this.state.status}))}}}).call(this,e("hosL").h)}}]);
//# sourceMappingURL=8.chunk.3b23b.esm.js.map