(function(t){function e(e){for(var n,r,l=e[0],o=e[1],u=e[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,l=1;l<i.length;l++){var o=i[l];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0723":function(t,e,i){"use strict";var n=i("fd24"),a=i.n(n);a.a},"11ef":function(t,e,i){"use strict";var n=i("b85d"),a=i.n(n);a.a},1963:function(t,e,i){"use strict";var n=i("3e5c"),a=i.n(n);a.a},"1b9b":function(t,e,i){"use strict";var n=i("b055"),a=i.n(n);a.a},"23e6":function(t,e,i){"use strict";var n=i("cf8e"),a=i.n(n);a.a},"302e":function(t,e,i){},"33d2":function(t,e,i){"use strict";var n=i("e3e6"),a=i.n(n);a.a},"38d3":function(t,e,i){},"3c18":function(t,e,i){"use strict";var n=i("418e"),a=i.n(n);a.a},"3e5c":function(t,e,i){},"418e":function(t,e,i){},4688:function(t,e,i){"use strict";var n=i("38d3"),a=i.n(n);a.a},"4a65":function(t,e,i){},"4b64":function(t,e,i){},"50d5":function(t,e,i){"use strict";var n=i("fbeb"),a=i.n(n);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{attrs:{id:"app"}},[t.app&&t.messages.length>0?i("TopHead",{attrs:{app:t.app}},[i("button",{staticClass:"audio-toggle",attrs:{title:t.muted?t.translations[t.lang()]&&t.translations[t.lang()].unMuteTitle||t.translations[t.config.fallback_lang].unMuteTitle:t.translations[t.lang()]&&t.translations[t.lang()].muteTitle||t.translations[t.config.fallback_lang].muteTitle,"aria-label":t.muted?t.translations[t.lang()]&&t.translations[t.lang()].unMuteTitle||t.translations[t.config.fallback_lang].unMuteTitle:t.translations[t.lang()]&&t.translations[t.lang()].muteTitle||t.translations[t.config.fallback_lang].muteTitle},on:{click:function(e){t.muted=!t.muted}}},[i("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.muted?"volume_off":"volume_up"))])])]):t._e(),i("section",{staticClass:"container chat-container"},[t.error?i("Error",{attrs:{error:t.error}}):t._e(),t.app&&0==t.messages.length?i("Welcome",{attrs:{app:t.app}}):i("section",{attrs:{"aria-live":"polite"}},[t._l(t.messages,(function(e){return i("div",{key:e.responseId,attrs:{id:"message"}},[i("BubbleWrapper",[e.queryResult.queryText?i("Bubble",{attrs:{text:e.queryResult.queryText,me:""}}):t._e()],1),t._l(e.queryResult.fulfillmentMessages,(function(e,n){return i("RichComponent",{key:n},[e.text?i("Bubble",{attrs:{text:e.text.text[0]}}):t._e(),e.simpleResponses?i("Bubble",{attrs:{text:e.simpleResponses.simpleResponses[0].displayText||e.simpleResponses.simpleResponses[0].textToSpeech}}):t._e(),e.rbmText?i("div",[i("Bubble",{attrs:{text:e.rbmText.text}}),t._l(e.rbmText.rbmSuggestion,(function(e,n){return i("div",{key:n},[e.reply?i("CardButton",{attrs:{title:e.reply.text},nativeOn:{click:function(i){return t.send({text:e.reply.text.postbackData})}}}):t._e(),e.action?i("CardButton",{attrs:{title:e.action.text,uri:e.action.openUrl.uri}}):t._e()],1)}))],2):t._e(),e.card?i("Card",{attrs:{title:e.card.title,subtitle:e.card.subtitle,"image-uri":e.card.imageUri}},t._l(e.card.buttons,(function(t,e){return i("CardButton",{key:e,attrs:{uri:t.postback,title:t.text}})})),1):t._e(),e.basicCard?i("Card",{attrs:{title:e.basicCard.title,subtitle:e.basicCard.subtitle,"image-uri":e.basicCard.image.imageUri,"image-title":e.basicCard.image.accessibilityText,text:e.basicCard.formattedText}},t._l(e.basicCard.buttons,(function(t,e){return i("CardButton",{key:e,attrs:{uri:t.openUriAction.uri,title:t.title}})})),1):t._e(),e.rbmStandaloneRichCard?i("Card",{attrs:{title:e.rbmStandaloneRichCard.cardContent.title,"image-uri":e.rbmStandaloneRichCard.cardContent.media.fileUri,text:e.rbmStandaloneRichCard.cardContent.description}},t._l(e.rbmStandaloneRichCard.cardContent.suggestions,(function(e,n){return i("div",{key:n},[e.reply?i("CardButton",{attrs:{title:e.reply.text},nativeOn:{click:function(i){return t.send({text:e.reply.text.postbackData})}}}):t._e(),e.action?i("CardButton",{attrs:{title:e.action.text,uri:e.action.openUrl.uri}}):t._e()],1)})),0):t._e(),e.carouselSelect?i("Carousel",t._l(e.carouselSelect.items,(function(e){return i("Card",{key:e.info.key,attrs:{title:e.title,"image-uri":e.image.imageUri,"image-title":e.image.accessibilityText,text:e.description},nativeOn:{click:function(i){return t.send({text:e.info.key})}}})})),1):t._e(),e.rbmCarouselRichCard?i("Carousel",t._l(e.rbmCarouselRichCard.cardContents,(function(e,n){return i("Card",{key:n,attrs:{title:e.title,"image-uri":e.media.fileUri,text:e.description}},t._l(e.suggestions,(function(e,n){return i("div",{key:n},[e.reply?i("CardButton",{attrs:{title:e.reply.text},nativeOn:{click:function(i){return t.send({text:e.reply.text.postbackData})}}}):t._e(),e.action?i("CardButton",{attrs:{title:e.action.text,uri:e.action.openUrl.uri}}):t._e()],1)})),0)})),1):t._e(),e.listSelect?i("List",{attrs:{title:e.listSelect.title,subtitle:e.listSelect.subtitle}},t._l(e.listSelect.items,(function(e){return i("ListItem",{key:e.info.key,attrs:{title:e.title,description:e.description,"image-uri":e.image.imageUri,"image-title":e.image.accessibilityText},nativeOn:{click:function(i){return t.send({text:e.info.key})}}})})),1):t._e(),e.image?i("Picture",{attrs:{uri:e.image.imageUri,title:e.image.accessibilityText}}):t._e(),e.mediaContent&&e.mediaContent.mediaObjects?i("div",t._l(e.mediaContent.mediaObjects,(function(t,e){return i("Media",{key:e,attrs:{name:t.name,description:t.description,"icon-uri":t.icon?t.icon.imageUri:t.largeImage.imageUri,"icon-title":t.icon?t.icon.accessibilityText:t.largeImage.accessibilityText,uri:t.contentUrl}})})),1):t._e(),e.tableCard?i("TableCard",{attrs:{title:e.tableCard.title,subtitle:e.tableCard.subtitle,"image-uri":e.tableCard.image.imageUri,"image-title":e.tableCard.image.accessibilityText,header:e.tableCard.columnProperties,rows:e.tableCard.rows}},t._l(e.tableCard.buttons,(function(t,e){return i("CardButton",{key:e,attrs:{uri:t.openUriAction.uri,title:t.title}})})),1):t._e()],1)})),e.queryResult.webhookPayload&&e.queryResult.webhookPayload.google?i("section",[t._l(e.queryResult.webhookPayload.google.richResponse.items,(function(e,n){return i("RichComponent",{key:n},[e.simpleResponse?i("Bubble",{attrs:{text:e.simpleResponse.displayText||e.simpleResponse.textToSpeech}}):t._e(),e.basicCard?i("Card",{attrs:{title:e.basicCard.title,subtitle:e.basicCard.subtitle,"image-uri":e.basicCard.image.url,"image-title":e.basicCard.image.accessibilityText,text:e.basicCard.formattedText}},t._l(e.basicCard.buttons,(function(t,e){return i("CardButton",{key:e,attrs:{uri:t.openUrlAction.url,title:t.title}})})),1):t._e(),e.carouselBrowse?i("List",t._l(e.carouselBrowse.items,(function(t,e){return i("ListItem",{key:e,attrs:{uri:t.openUrlAction.url,title:t.title,description:t.description,footer:t.footer,"image-uri":t.image.url,"image-title":t.image.accessibilityText}})})),1):t._e(),e.mediaResponse&&e.mediaResponse.mediaObjects?i("div",t._l(e.mediaResponse.mediaObjects,(function(t,e){return i("Media",{key:e,attrs:{name:t.name,description:t.description,"icon-uri":t.icon.url,"icon-title":t.icon.accessibilityText,uri:t.contentUrl}})})),1):t._e(),e.tableCard?i("TableCard",{attrs:{title:e.tableCard.title,subtitle:e.tableCard.subtitle,"image-uri":e.tableCard.image.url,"image-title":e.tableCard.image.accessibilityText,header:e.tableCard.columnProperties,rows:e.tableCard.rows}},t._l(e.tableCard.buttons,(function(t,e){return i("CardButton",{key:e,attrs:{uri:t.openUrlAction.url,title:t.title}})})),1):t._e()],1)})),t._l(e.queryResult.webhookPayload.google.systemIntent,(function(e,n){return i("RichComponent",{key:n},[e.listSelect?i("List",{attrs:{title:e.listSelect.title,subtitle:e.listSelect.subtitle}},t._l(e.listSelect.items,(function(e){return i("ListItem",{key:e.optionInfo.key,attrs:{title:e.title,description:e.description,"image-uri":e.image.url,"image-title":e.image.accessibilityText},nativeOn:{click:function(i){return t.send({text:e.optionInfo.key})}}})})),1):t._e(),e.carouselSelect?i("Carousel",t._l(e.carouselSelect.items,(function(e){return i("Card",{key:e.optionInfo.key,attrs:{title:e.title,"image-uri":e.image.url,"image-title":e.image.accessibilityText,text:e.description},nativeOn:{click:function(i){return t.send({text:e.optionInfo.key})}}})})),1):t._e()],1)}))],2):t._e()],2)})),t.loading?i("div",{attrs:{id:"message"}},[i("BubbleWrapper",[i("Bubble",{attrs:{me:"",loading:"","aria-hidden":"true"}})],1),i("Bubble",{attrs:{loading:"","aria-hidden":"true"}})],1):t._e()],2)],1),i("ChatInput",{ref:"input",on:{submit:t.send}},[t._l(t.suggestions.text_suggestions,(function(e,n){return i("Suggestion",{key:n,attrs:{title:e},nativeOn:{click:function(i){return t.send({text:e})}}})})),t.suggestions.link_suggestion?i("Suggestion",{attrs:{title:t.suggestions.link_suggestion.destinationName,uri:t.suggestions.link_suggestion.uri||t.suggestions.link_suggestion.url}}):t._e()],2)],1)},s=[],r=(i("d81d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overlay"},[t.app.avatarUri?i("img",{staticClass:"app-icon",attrs:{alt:t.app.displayName,src:t.app.avatarUri}}):i("img",{staticClass:"app-icon",attrs:{src:"/public/img/apple-touch-icon.png",alt:t.app.displayName}}),i("h1",{staticClass:"app-title"},[t._v(t._s(t.app.displayName))]),i("p",{staticClass:"app-description"},[t._v(t._s(t.app.description))]),t.app.supportedLanguageCodes&&t.app.supportedLanguageCodes.length>0?i("div",{staticClass:"language-picker"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.sel_lang,expression:"sel_lang"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sel_lang=e.target.multiple?i:i[0]}}},[i("option",{domProps:{value:t.app.defaultLanguageCode}},[t._v(t._s(t._f("toLang")(t.app.defaultLanguageCode)))]),t._l(t.app.supportedLanguageCodes,(function(e){return i("option",{key:e,domProps:{value:e}},[t._v(t._s(t._f("toLang")(e)))])}))],2),i("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v("arrow_drop_down")])]):t._e()])}),l=[],o=i("e13d"),u={name:"Welcome",filters:{toLang:function(t){return o["where"]("1",t).local}},props:{app:{type:Object,required:!0}},data:function(){return{sel_lang:""}},watch:{sel_lang:function(t){this.history()?sessionStorage.setItem("lang",t):this.config.fallback_lang=t}},created:function(){this.app&&this.app.defaultLanguageCode?this.sel_lang=this.app.defaultLanguageCode:this.sel_lang=this.config.fallback_lang}},c=u,d=(i("11ef"),i("2877")),p=Object(d["a"])(c,r,l,!1,null,"ade8184a",null),g=p.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overlay"},[i("i",{staticClass:"material-icons error-icon",attrs:{"aria-hidden":"true"}},[t._v("error")]),i("pre",{staticClass:"error-description"},[t._v(t._s(t.error))])])},m=[],b={name:"Error",props:{error:{type:String,default:null}}},h=b,_=(i("1963"),Object(d["a"])(h,f,m,!1,null,"59516455",null)),y=_.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"app-head"},[t.app.avatarUri?i("img",{staticClass:"app-icon",attrs:{alt:t.app.displayName,src:t.app.avatarUri}}):i("img",{staticClass:"app-icon",attrs:{src:"/public/img/apple-touch-icon.png",alt:t.app.displayName}}),i("div",{staticClass:"app-info"},[i("div",{staticClass:"app-name"},[t._v(t._s(t.app.displayName))]),i("div",{staticClass:"app-poweredby"},[t._v("COVID-19 Rapid Response Virtual Agent")])]),t._t("default")],2)},C=[],x={name:"TopHead",props:{app:{type:Object,default:null}}},k=x,S=(i("1b9b"),Object(d["a"])(k,v,C,!1,null,"c12775f2",null)),w=S.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottomchat"},[i("div",{staticClass:"container"},[i("div",{staticClass:"suggestions"},[t._t("default")],2),i("div",{staticClass:"flexible"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text",autofocus:"",placeholder:t.translations[t.lang()]&&t.translations[t.lang()].inputTitle||t.translations[t.config.fallback_lang].inputTitle,"aria-label":t.translations[t.lang()]&&t.translations[t.lang()].inputTitle||t.translations[t.config.fallback_lang].inputTitle},domProps:{value:t.query},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit({text:t.query})},focus:function(e){t.microphone=!1,t.should_listen=!1},input:function(e){e.target.composing||(t.query=e.target.value)}}}),!t.microphone&&t.query.length>0||!t.microphone_supported?i("button",{staticClass:"button",attrs:{title:t.translations[t.lang()]&&t.translations[t.lang()].sendTitle||t.translations[t.config.fallback_lang].sendTitle,"aria-label":t.translations[t.lang()]&&t.translations[t.lang()].sendTitle||t.translations[t.config.fallback_lang].sendTitle},on:{click:function(e){return t.submit({text:t.query})}}},[i("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v("arrow_upward")])]):i("button",{staticClass:"button",class:{mic_active:t.microphone},attrs:{"aria-label":t.translations[t.lang()]&&t.translations[t.lang()].microphoneTitle||t.translations[t.config.fallback_lang].microphoneTitle,title:t.translations[t.lang()]&&t.translations[t.lang()].microphoneTitle||t.translations[t.config.fallback_lang].microphoneTitle},on:{click:function(e){t.microphone=!t.microphone}}},[i("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v("mic")])])])])])},R=[],q=(i("ac1f"),i("5319"),i("1eaa")),O=i("68cb");window.MediaRecorder=q["a"];var U={name:"ChatInput",data:function(){return{query:"",microphone:!1,recognition:null,recorder:null,should_listen:!1}},computed:{microphone_supported:function(){return window.webkitSpeechRecognition||window.SpeechRecognition||!window.MediaRecorder.notSupported}},watch:{microphone:function(t){var e=this;t?(this.should_listen=!0,window.webkitSpeechRecognition||window.SpeechRecognition?(this.recognition=new window.webkitSpeechRecognition||new window.SpeechRecognition,this.recognition.interimResults=!0,this.recognition.lang=this.lang(),this.recognition.onresult=function(t){for(var i=t.resultIndex;i<t.results.length;++i)e.query=t.results[i][0].transcript},this.recognition.onend=function(){e.recognition.stop(),e.microphone=!1,e.submit({text:e.query})},this.recognition.onerror=function(){return e.microphone=!1},this.recognition.start()):window.MediaRecorder&&window.MediaRecorder&&navigator.mediaDevices.getUserMedia({audio:!0}).then((function(t){e.recorder=new window.MediaRecorder(t),e.recorder.addEventListener("dataavailable",(function(t){var i=new FileReader;i.readAsDataURL(t.data),i.onloadend=function(){e.submit({audio:i.result.replace(/^data:.+;base64,/,"")})}})),O(e.recorder.stream).on("stopped_speaking",(function(){return e.microphone=!1})),e.recorder.start()})).catch((function(){return e.microphone=!1}))):this.recognition?this.recognition.abort():this.recorder&&this.recorder.stop()}},methods:{listen:function(){this.should_listen&&(this.microphone=!0)},submit:function(t){t.text&&t.text.length>0?(this.$emit("submit",t),this.query=""):t.audio&&this.$emit("submit",t)}}},M=U,I=(i("8b50"),Object(d["a"])(M,T,R,!1,null,"f698ceee",null)),j=I.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"component"},[t._t("default")],2)},B=[],E={name:"RichComponent"},L=E,N=(i("a935"),Object(d["a"])(L,P,B,!1,null,"5907eff9",null)),$=N.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bubble",class:{me:t.me,loading:t.loading},attrs:{tabindex:"0"}},[t._v(t._s(t.text))])},D=[],J={name:"Bubble",props:{text:{type:String,required:!1,default:""},me:{type:Boolean},loading:{type:Boolean}}},W=J,F=(i("4688"),Object(d["a"])(W,A,D,!1,null,"113872d6",null)),H=F.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bubble-wrapper"},[t._t("default")],2)},G=[],z={name:"BubbleWrapper"},K=z,Q=(i("5c97"),Object(d["a"])(K,V,G,!1,null,"41157d82",null)),X=Q.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card",attrs:{tabindex:"0"}},[t.imageUri?i("img",{staticClass:"card-image",attrs:{src:t.imageUri,alt:t.imageTitle||t.title}}):t._e(),i("div",{staticClass:"card-content"},[t.title?i("div",{staticClass:"card-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?i("div",{staticClass:"card-subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t.text?i("div",{staticClass:"card-text"},[t._v(t._s(t.text))]):t._e(),t._t("default")],2)])},Z=[],tt={name:"Card",props:{text:{type:String,default:null},imageUri:{type:String,default:null},imageTitle:{type:String,default:null},subtitle:{type:String,default:null},title:{type:String,default:null}}},et=tt,it=(i("7a71"),Object(d["a"])(et,Y,Z,!1,null,"031d5d5e",null)),nt=it.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"card-button",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.uri}},[i("i",{staticClass:"material-icons card-button-icon",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.uri?"arrow_forward":"reply"))]),i("span",{staticClass:"card-button-title"},[t._v(t._s(t.title))])])},st=[],rt={name:"CardButton",props:{uri:{type:String,default:null},title:{type:String,default:null}}},lt=rt,ot=(i("6836"),Object(d["a"])(lt,at,st,!1,null,"230113d7",null)),ut=ot.exports,ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"carousel"},[t._t("default")],2)},dt=[],pt={name:"CarouselSelect"},gt=pt,ft=(i("3c18"),Object(d["a"])(gt,ct,dt,!1,null,"712e16d0",null)),mt=ft.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[t.title?i("div",{staticClass:"list-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?i("div",{staticClass:"list-subtitle"},[t._v("Subtitle")]):t._e(),i("ul",{staticClass:"list-content",attrs:{"aria-label":t.title}},[t._t("default")],2)])},ht=[],_t={name:"List",props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},yt=_t,vt=(i("e925"),Object(d["a"])(yt,bt,ht,!1,null,"8bb611ba",null)),Ct=vt.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"list-item",attrs:{tabindex:"0"}},[t.imageUri?i("img",{staticClass:"list-item-image",attrs:{src:t.imageUri,alt:t.imageTitle}}):t._e(),i("a",{staticClass:"list-item-content",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.uri}},[i("div",{staticClass:"list-item-title"},[t._v(t._s(t.title))]),i("span",{staticClass:"list-item-description"},[t._v(t._s(t.description))]),i("span",{staticClass:"list-item-footer"},[t._v(t._s(t.footer))])])])},kt=[],St={name:"ListItem",props:{imageUri:{type:String,default:null},imageTitle:{type:String,default:null},title:{type:String,default:null},description:{type:String,default:null},footer:{type:String,default:null},uri:{type:String,default:null}}},wt=St,Tt=(i("fecb"),Object(d["a"])(wt,xt,kt,!1,null,"a16c4226",null)),Rt=Tt.exports,qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("img",{staticClass:"picture",attrs:{src:t.uri,alt:t.title}})},Ot=[],Ut={name:"Picture",props:{uri:{type:String,default:null},title:{type:String,default:null}}},Mt=Ut,It=(i("de00"),Object(d["a"])(Mt,qt,Ot,!1,null,"4c1ac47f",null)),jt=It.exports,Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"media"},[t.iconUri?i("img",{staticClass:"media-image",attrs:{src:t.iconUri,alt:t.iconTitle}}):t._e(),i("div",{staticClass:"media-content"},[t.name?i("div",{staticClass:"media-title"},[t._v(t._s(t.name))]):t._e(),t.description?i("div",{staticClass:"media-subtitle"},[t._v(t._s(t.description))]):t._e()]),i("audio",{staticClass:"media-controls",attrs:{controls:"",src:t.uri}})])},Bt=[],Et={name:"Media",props:{name:{type:String,default:null},description:{type:String,default:null},iconUri:{type:String,default:null},iconTitle:{type:String,default:null},uri:{type:String,default:null}}},Lt=Et,Nt=(i("0723"),Object(d["a"])(Lt,Pt,Bt,!1,null,"01d78b83",null)),$t=Nt.exports,At=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-card"},[t.imageUri?i("img",{staticClass:"table-card-image",attrs:{src:t.imageUri,alt:t.imageTitle}}):t._e(),i("div",{staticClass:"table-card-content"},[t.title?i("div",{staticClass:"table-card-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?i("div",{staticClass:"table-card-subtitle"},[t._v(t._s(t.subtitle))]):t._e()]),i("div",{staticClass:"table-card-scrollable"},[i("table",{staticClass:"table-card-table",attrs:{cellspacing:"0",cellpadding:"0"}},[i("tr",t._l(t.header,(function(e,n){return i("th",{key:n},[t._v(t._s(e.header))])})),0),t._l(t.rows,(function(e,n){return i("tr",{key:n},t._l(e.cells,(function(e,n){return i("td",{key:n},[t._v(t._s(e.text))])})),0)}))],2)]),t._t("default")],2)},Dt=[],Jt={name:"TableCard",props:{title:{type:String,default:null},subtitle:{type:String,default:null},imageUri:{type:String,default:null},imageTitle:{type:String,default:null},header:{type:Array,default:null},rows:{type:Array,default:null}}},Wt=Jt,Ft=(i("33d2"),Object(d["a"])(Wt,At,Dt,!1,null,"1a3160d2",null)),Ht=Ft.exports,Vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.uri?i("a",{staticClass:"suggestion",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.uri}},[t._v(" "+t._s(t.title)+" ")]):i("button",{staticClass:"suggestion"},[t._v(t._s(t.title))])},Gt=[],zt={name:"Suggestion",props:{uri:{type:String,default:null},title:{type:String,default:null}}},Kt=zt,Qt=(i("50d5"),Object(d["a"])(Kt,Vt,Gt,!1,null,"40ac8eef",null)),Xt=Qt.exports,Yt=i("c437"),Zt=i("b183"),te={name:"App",components:{Welcome:g,Error:y,TopHead:w,ChatInput:j,RichComponent:$,Bubble:H,BubbleWrapper:X,Card:nt,CardButton:ut,Carousel:mt,List:Ct,ListItem:Rt,Picture:jt,Media:$t,TableCard:Ht,Suggestion:Xt},data:function(){return{app:null,messages:[],language:"",session:"",muted:this.config.muted,loading:!1,error:null,client:new Zt["Client"](this.config.endpoint).connect()}},computed:{suggestions:function(){if(this.messages.length>0){var t=this.messages[this.messages.length-1],e=[];for(var i in t.queryResult.fulfillmentMessages)t.queryResult.fulfillmentMessages[i].suggestions&&(e.text_suggestions=t.queryResult.fulfillmentMessages[i].suggestions.suggestions.map((function(t){return t.title}))),t.queryResult.fulfillmentMessages[i].linkOutSuggestion&&(e.link_suggestion=t.queryResult.fulfillmentMessages[i].linkOutSuggestion),t.queryResult.fulfillmentMessages[i].quickReplies&&(e.text_suggestions=t.queryResult.fulfillmentMessages[i].quickReplies.quickReplies);if(t.queryResult.webhookPayload&&t.queryResult.webhookPayload.google)for(var n in t.queryResult.webhookPayload.google)t.queryResult.webhookPayload.google[n].suggestions&&(e.text_suggestions=t.queryResult.webhookPayload.google[n].suggestions.map((function(t){return t.title}))),t.queryResult.webhookPayload.google[n].linkOutSuggestion&&(e.link_suggestion=t.queryResult.webhookPayload.google[n].linkOutSuggestion);return e}return{text_suggestions:this.config.start_suggestions}}},watch:{messages:function(t){this.history()&&sessionStorage.setItem("message_history",JSON.stringify(t))},loading:function(){setTimeout((function(){var t=document.querySelector("#app");if(t.querySelector("#message")){var e=t.querySelectorAll("#message")[t.querySelectorAll("#message").length-1].offsetTop-68;window.scrollTo({top:e,behavior:"smooth"})}}),2)}},created:function(){var t=this;this.history()&&null!==sessionStorage.getItem("message_history")&&(this.messages=JSON.parse(sessionStorage.getItem("message_history"))),this.history()&&null!==sessionStorage.getItem("session")?this.session=sessionStorage.getItem("session"):(this.session=Yt(),this.history()&&sessionStorage.setItem("session",this.session)),this.history()&&null!==sessionStorage.getItem("agent")?this.app=JSON.parse(sessionStorage.getItem("agent")):this.client.get().then((function(e){t.app=e,t.history()&&sessionStorage.setItem("agent",JSON.stringify(e))})).catch((function(e){t.error=e.message}))},methods:{send:function(t){var e,i=this;t.text?e={session:this.session,queryInput:{text:{text:t.text,languageCode:this.lang()}}}:t.audio&&(e={session:this.session,queryInput:{audioConfig:{audioEncoding:"AUDIO_ENCODING_UNSPECIFIED",languageCode:this.lang()}},inputAudio:t.audio}),this.loading=!0,this.error=null,this.client.send(e).then((function(t){i.messages.push(t),i.handle(t)})).catch((function(t){i.error=t.message})).then((function(){return i.loading=!1}))},handle:function(t){var e=this;if(t.outputAudio){var i=new Audio("data:audio/mp3;base64,".concat(t.outputAudio));i.onended=function(){return e.$refs.input.listen()},this.muted||i.play()}else{var n;for(var a in t.queryResult.fulfillmentMessages)t.queryResult.fulfillmentMessages[a].text&&(n=t.queryResult.fulfillmentMessages[a].text.text[0]),t.queryResult.fulfillmentMessages[a].simpleResponses&&(n=t.queryResult.fulfillmentMessages[a].simpleResponses.simpleResponses[0].textToSpeech),t.queryResult.fulfillmentMessages[a].rbmText&&(n=t.queryResult.fulfillmentMessages[a].rbmText.text);if(t.queryResult.webhookPayload&&t.queryResult.webhookPayload.google)for(var s in t.queryResult.webhookPayload.google)t.queryResult.webhookPayload.google[s].simpleResponse&&(n=t.queryResult.webhookPayload.google[s].simpleResponse.textToSpeech);var r=new SpeechSynthesisUtterance(n);r.voiceURI=this.config.voice,r.lang=this.lang(),r.onend=function(){return e.$refs.input.listen()},this.muted||window.speechSynthesis.speak(r)}}}},ee=te,ie=(i("6933"),i("23e6"),Object(d["a"])(ee,a,s,!1,null,"b4349666",null)),ne=ie.exports,ae={endpoint:"<>",muted:!1,start_suggestions:[],fallback_lang:"en",voice:"native"},se=i("e3e6a"),re=i("9483"),le=function(){Object(re["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}})};le(),n["a"].config.productionTip=!1,n["a"].prototype.config=ae,n["a"].prototype.translations=se,n["a"].prototype.history=function(){try{return sessionStorage.getItem("check"),!0}catch(t){return!1}},n["a"].prototype.lang=function(){return n["a"].prototype.history()&&sessionStorage.getItem("lang")||ae.fallback_lang},new n["a"]({render:function(t){return t(ne)}}).$mount("#app")},"5c97":function(t,e,i){"use strict";var n=i("302e"),a=i.n(n);a.a},"5e5c":function(t,e,i){},6836:function(t,e,i){"use strict";var n=i("8e41"),a=i.n(n);a.a},6933:function(t,e,i){"use strict";var n=i("4a65"),a=i.n(n);a.a},"7a71":function(t,e,i){"use strict";var n=i("89e5"),a=i.n(n);a.a},"89e5":function(t,e,i){},"8b50":function(t,e,i){"use strict";var n=i("d21f"),a=i.n(n);a.a},"8e41":function(t,e,i){},a935:function(t,e,i){"use strict";var n=i("e09d"),a=i.n(n);a.a},acb4:function(t,e,i){},b055:function(t,e,i){},b85d:function(t,e,i){},cf8e:function(t,e,i){},d21f:function(t,e,i){},de00:function(t,e,i){"use strict";var n=i("5e5c"),a=i.n(n);a.a},e09d:function(t,e,i){},e3e6:function(t,e,i){},e3e6a:function(t){t.exports=JSON.parse('{"en":{"muteTitle":"Mute","unMuteTitle":"Unmute","inputTitle":"Message","sendTitle":"Send","microphoneTitle":"Voice Input","recognitionUnavailable":"Speech recognition is not available"},"ru":{"muteTitle":"Звук","unMuteTitle":"Без звука","inputTitle":"Сообщение","sendTitle":"Отправить","microphoneTitle":"Голосовой ввод"},"de":{"muteTitle":"Stumm","unMuteTitle":"Nicht stumm","inputTitle":"Nachricht","sendTitle":"Senden","microphoneTitle":"Spracheingabe"},"fr":{"muteTitle":"Son","unMuteTitle":"Silent","inputTitle":"Message","sendTitle":"Envoyer","microphoneTitle":"Entrée vocale"}}')},e925:function(t,e,i){"use strict";var n=i("4b64"),a=i.n(n);a.a},fbeb:function(t,e,i){},fd24:function(t,e,i){},fecb:function(t,e,i){"use strict";var n=i("acb4"),a=i.n(n);a.a}});