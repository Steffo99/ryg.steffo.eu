(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0Mu8":function(t,o,a){"use strict";(function(t){a.d(o,"a",(function(){return i}));var n=a("hosL"),r=a("RI49"),e=a.n(r),s=a("cZkd"),i=function(o){function a(){return o.apply(this,arguments)||this}var n,r;return r=o,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,a.prototype.render=function(){var o=e.a.diarioentry;!0===this.props.data.spoiler&&(o+=" "+e.a.spoiler);var a,n="";null!==this.props.data.media_url&&(n=t("a",{href:this.props.data.media_url},t("img",{src:this.props.data.media_url,alt:"[immagine]"}))),a=null===this.props.data.quoted_account?null!==this.props.data.quoted?t("span",{className:e.a.author},this.props.data.quoted):"":t(s.a,{class:e.a.author,data:this.props.data.quoted_account});var r="";null!==this.props.data.context&&(r=t("span",null,", ",t("span",{class:e.a.context},this.props.data.context)));var i="";""===a&&""===r||(i=t("div",{className:e.a.info},"— ",a,r));var p="";return null!==this.props.data.creator&&(p=t("span",null,t(s.a,{class:e.a.creator,data:this.props.data.creator})," | ")),t("blockquote",{class:o},t("div",{class:e.a.contents},t("div",{className:e.a.topleft},t("div",{className:e.a.media},n),t("div",{className:e.a.text},this.props.data.text)),t("div",{className:e.a.bottomleft},i),t("div",{className:e.a.topright},t("div",{className:e.a.save},p,t("time",{className:e.a.timestamp},new Date(this.props.data.timestamp).toLocaleString()))),t("div",{className:e.a.bottomright},t("span",{className:e.a.diarioid},"#",this.props.data.diario_id))))},a}(n.Component)}).call(this,a("hosL").h)},"4DnB":function(t,o,a){"use strict";a.r(o),function(t){a.d(o,"default",(function(){return p}));var n=a("hosL"),r=(a("ZVFn"),a("7bXG"),a("0Mu8")),e=a("PLZj"),s=a("kJlA"),i=a("HdoS"),p=function(o){function a(){var t;return(t=o.call(this)||this).getData=function(o){fetch("https://rygapi.steffo.eu/api/diario/list/v1?page=-"+o).then((function(t){return t.json()})).then((function(a){t.setState((function(t){return t.page!==o?{}:{page:o,data:a.data}}))}))},t.previousPage=function(){t.getData(t.state.page-1),t.setState({page:t.state.page-1,data:null})},t.nextPage=function(){t.getData(t.state.page+1),t.setState({page:t.state.page+1,data:null})},t.state={page:1,data:null},t}var n,p;p=o,(n=a).prototype=Object.create(p.prototype),n.prototype.constructor=n,n.__proto__=p;var c=a.prototype;return c.componentDidMount=function(){this.getData(this.state.page)},c.render=function(){var o;o=null==this.state.data?t(e.a,null):0===this.state.data.length?t("span",null,"Nessuna riga trovata."):this.state.data.map((function(o){return t(r.a,{data:o,key:o.diario_id})}));var a=t("span",null,t("span",null,"Pagina ",this.state.page," ",t(s.a,{onPreviousClick:this.previousPage,onNextClick:this.nextPage})));return t("div",null,t(i.a,{left:"Diario Royal Games",right:a},o))},a}(n.Component)}.call(this,a("hosL").h)},"7bXG":function(t,o,a){"use strict";(function(t){a.d(o,"a",(function(){return s}));var n=a("hosL"),r=a("r2mi"),e=a.n(r),s=function(o){function a(){return o.apply(this,arguments)||this}var n,r;return r=o,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,a.prototype.render=function(){return t("span",{class:e.a.todo},this.props.children)},a}(n.Component)}).call(this,a("hosL").h)},CSzM:function(t){t.exports={button:"button__3hNSc"}},HdoS:function(t,o,a){"use strict";(function(t){a.d(o,"a",(function(){return s}));var n=a("hosL"),r=a("Mw/3"),e=a.n(r),s=function(o){function a(){return o.apply(this,arguments)||this}var n,r;return r=o,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,a.prototype.render=function(){var o=null;return o=void 0!==this.props.left||void 0!==this.props.center||void 0!==this.props.right?[t("div",{class:e.a.top},void 0!==this.props.left?t("div",{className:e.a.left},this.props.left):null,void 0!==this.props.center?t("div",{class:e.a.center},this.props.center):null,void 0!==this.props.right?t("div",{class:e.a.right},this.props.right):null),t("div",{class:e.a.bottom},this.props.children)]:t("div",{class:e.a.single},this.props.children),t("div",{class:e.a.box},o)},a}(n.Component)}).call(this,a("hosL").h)},"Mw/3":function(t){t.exports={box:"box__2NdQS",single:"single__1Lrvl",top:"top__mNBcY",bottom:"bottom__1LEQj",left:"left__3v69C",center:"center__2w2JR",right:"right__3mYf_"}},PLZj:function(t,o,a){"use strict";(function(t){a.d(o,"a",(function(){return s}));var n=a("hosL"),r=(a("vXjt"),a("GAEk")),e=a("WOcO"),s=function(o){function a(){return o.apply(this,arguments)||this}var n,s;return s=o,(n=a).prototype=Object.create(s.prototype),n.prototype.constructor=n,n.__proto__=s,a.prototype.render=function(){return t("span",null,t(r.a,{icon:e.e,pulse:!0})," Loading...")},a}(n.Component)}).call(this,a("hosL").h)},RI49:function(t){t.exports={diarioentry:"diarioentry__3aXha",contents:"contents__zpZ_v",topleft:"topleft__kni0j",bottomleft:"bottomleft__AnasA",topright:"topright__3F6pU",bottomright:"bottomright__3OwnG",info:"info__2Zyzk",save:"save__4onQt",context:"context__2PEdt",media:"media__3d3IE",diarioid:"diarioid__3sBOl",spoiler:"spoiler__cKUHv"}},ZVFn:function(){},cZkd:function(t,o,a){"use strict";(function(t){a.d(o,"a",(function(){return s}));var n=a("hosL"),r=(a("whvH"),a("GAEk")),e=a("WOcO"),s=function(o){function a(){return o.apply(this,arguments)||this}var n,s;return s=o,(n=a).prototype=Object.create(s.prototype),n.prototype.constructor=n,n.__proto__=s,a.prototype.render=function(){var o="";return"Bot"===this.props.data.role&&(o=t(r.a,{icon:e.d})),t("a",{href:"/user/"+this.props.data.uid},o,this.props.data.username)},a}(n.Component)}).call(this,a("hosL").h)},kJlA:function(t,o,a){"use strict";(function(t){a.d(o,"a",(function(){return p}));var n=a("hosL"),r=a("CSzM"),e=a.n(r),s=a("GAEk"),i=a("WOcO"),p=function(o){function a(){return o.apply(this,arguments)||this}var n,r;return r=o,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,a.prototype.render=function(){return t("span",null,t("button",{class:e.a.button,onClick:this.props.onPreviousClick},t(s.a,{icon:i.b})),t("button",{class:e.a.button,onClick:this.props.onNextClick},t(s.a,{icon:i.c})))},a}(n.Component)}).call(this,a("hosL").h)},r2mi:function(t){t.exports={todo:"todo__2OgLQ"}},vXjt:function(){},whvH:function(){}}]);
//# sourceMappingURL=5.chunk.c4567.js.map