(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0vKm":function(t){t.exports={active:"active__188m8",disabled:"disabled__2CpK8"}},"1KBa":function(t,s,e){"use strict";(function(t){e.d(s,"a",(function(){return r}));var i=e("hosL"),a=e("0vKm"),n=e.n(a);class r extends i.Component{render(){return this.props.pathname===this.props.href?t("span",{class:n.a.active,title:this.props.title},this.props.children):this.props.disabled?t("span",{class:n.a.disabled,title:this.props.title},this.props.children):t("a",{href:this.props.href,class:n.a.inactive,title:this.props.title},this.props.children)}}}).call(this,e("hosL").h)},EZm7:function(t,s,e){"use strict";e.r(s),function(t){e.d(s,"default",(function(){return r}));var i=e("hosL"),a=e("HMtF"),n=e("wVM7");class r extends i.Component{render(){return t("div",null,t(n.a,{pageId:"7337189e-ab4a-4487-bc8c-3a2285c6b4b3"}),t(a.a,null))}}}.call(this,e("hosL").h)},EwGp:function(t){t.exports={list:"list__3oQ8J"}},HMtF:function(t,s,e){"use strict";(function(t){e.d(s,"a",(function(){return p}));var i=e("hosL"),a=e("EwGp"),n=e.n(a),r=e("PLZj"),l=e("HdoS"),o=e("1KBa");class p extends i.Component{constructor(){super(),this.getData=()=>{fetch("https://rygapi.steffo.eu/api/wiki/list/v1").then(t=>t.json()).then(t=>{this.setState({data:t.data})})},this.state={data:null}}componentDidMount(){this.getData()}render(){let s;s=null===this.state.data?t(r.a,null):this.state.data.map(s=>t("li",null,t(o.a,{href:"/wiki/"+s.page_id},s.title)));let e=t("a",{href:"/wiki/new"},"Nuova");return t(l.a,{left:"Indice Wiki",right:e},t("ul",{class:n.a.list},s))}}}).call(this,e("hosL").h)}}]);
//# sourceMappingURL=route-wikilist.chunk.aedc5.esm.js.map