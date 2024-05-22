!function(){"use strict";var e,t,l,n,o,r,i={925:function(e,t,l){var n=l(715),o="/home/sato/sato/serve/www/brightring/wp-content/themes/origin/src/js/blocks/component/CustomInner/CustomInnerButton.js";t.A=({attributes:e,setAttributes:t})=>{const l=l=>{const n=window.getSelection().toString(),o=window.getSelection().focusNode.parentElement.closest(".rich-text");if(!o)return;const r=o.id.replace("attr-",""),i=((e,t)=>({dot:'<span class="c-text--dot">'+e+"</span>",mainColor:'<span class="c-text--main">'+e+"</span>",subColor:'<span class="c-text--main2">'+e+"</span>",accentColor:'<span class="c-text--accent">'+e+"</span>",backColor:'<span class="c-text--back">'+e+"</span>",backBlackColor:'<span class="c-text--back--black">'+e+"</span>"}[t]))(n,l),c=e[r].replace(n,i);t({[r]:c})},r=e=>{const l=window.getSelection().focusNode.parentElement.closest(".rich-text").id.replace("attr-","");let n=window.getSelection().getRangeAt(0);console.log(n);const o=document.createElement("br");o.classList.add(e),n.insertNode(o);const r=n.commonAncestorContainer.innerHTML;console.log(l,r),t({[l]:r})};return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(n.RichTextToolbarButton,{icon:"editor-code",title:"上付きドットタグ",onClick:()=>l("dot"),__self:void 0,__source:{fileName:o,lineNumber:51,columnNumber:7}}),wp.element.createElement(n.RichTextToolbarButton,{icon:"editor-code",title:"メインカラータグ",onClick:()=>l("mainColor"),__self:void 0,__source:{fileName:o,lineNumber:56,columnNumber:7}}),wp.element.createElement(n.RichTextToolbarButton,{icon:"editor-code",title:"サブカラータグ",onClick:()=>l("subColor"),__self:void 0,__source:{fileName:o,lineNumber:61,columnNumber:7}}),wp.element.createElement(n.RichTextToolbarButton,{icon:"editor-code",title:"アクセントカラータグ",onClick:()=>l("accentColor"),__self:void 0,__source:{fileName:o,lineNumber:66,columnNumber:7}}),wp.element.createElement(n.RichTextToolbarButton,{icon:"editor-code",title:"背景カラータグ",onClick:()=>l("backColor"),__self:void 0,__source:{fileName:o,lineNumber:71,columnNumber:7}}),wp.element.createElement(n.RichTextToolbarButton,{icon:"editor-code",title:"背景黒タグ",onClick:()=>l("backBlackColor"),__self:void 0,__source:{fileName:o,lineNumber:76,columnNumber:7}}),wp.element.createElement(n.RichTextToolbarButton,{icon:"editor-code",title:"PCサイズにbrタグを挿入",onClick:()=>r("pc"),__self:void 0,__source:{fileName:o,lineNumber:81,columnNumber:7}}),wp.element.createElement(n.RichTextToolbarButton,{icon:"editor-code",title:"スマホサイズにbrタグを挿入",onClick:()=>r("sp"),__self:void 0,__source:{fileName:o,lineNumber:86,columnNumber:7}}),wp.element.createElement(n.RichTextToolbarButton,{icon:"editor-code",title:"brタグを挿入",onClick:r,__self:void 0,__source:{fileName:o,lineNumber:91,columnNumber:7}}))}},204:function(e,t,l){l.d(t,{K:function(){return n.A}});var n=l(925)},715:function(e){e.exports=window.wp.blockEditor}},c={};function m(e){var t=c[e];if(void 0!==t)return t.exports;var l=c[e]={exports:{}};return i[e](l,l.exports,m),l.exports}m.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(t,{a:t}),t},m.d=function(e,t){for(var l in t)m.o(t,l)&&!m.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},m.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e=window.wp.blocks,t=m(715),l=m(204),n=window.wp.components,o=window.wp.element,r="/home/sato/sato/serve/www/brightring/wp-content/themes/origin/src/js/blocks/title.js",(0,e.registerBlockType)("portart/title",{title:"セクションタイトル",icon:"smiley",category:"layout",attributes:{titleEn:{type:"string",default:""},titleJp:{type:"string",default:""},addClassName:{type:"string",default:""},addId:{type:"string",default:""},linkUrl:{type:"string",default:""},isChecked:{type:"boolean",default:!1}},edit:({className:e,attributes:i,attributes:{titleEn:c,titleJp:m,addClassName:a,addId:s,linkUrl:u,wrapToggle:_,isChecked:d},setAttributes:N})=>{const[b,p]=(0,o.useState)(_);return wp.element.createElement("div",{__self:void 0,__source:{fileName:r,lineNumber:58,columnNumber:7}},wp.element.createElement(t.RichText,{value:c,onChange:e=>N({titleEn:e}),tagName:"p",id:"attr-titleEn",placeholder:"英語のタイトルを入力してください。",keepPlaceholderOnFocus:!0,inlineToolbar:!0,__self:void 0,__source:{fileName:r,lineNumber:59,columnNumber:9}}),wp.element.createElement(t.RichText,{value:m,onChange:e=>N({titleJp:e}),tagName:"h3",id:"attr-titleJp",placeholder:"日本語のタイトルを入力してください。",keepPlaceholderOnFocus:!0,inlineToolbar:!0,__self:void 0,__source:{fileName:r,lineNumber:68,columnNumber:9}}),wp.element.createElement(t.BlockControls,{__self:void 0,__source:{fileName:r,lineNumber:77,columnNumber:9}},wp.element.createElement(l.K,{attributes:i,setAttributes:N,__self:void 0,__source:{fileName:r,lineNumber:78,columnNumber:11}})),wp.element.createElement(t.InspectorControls,{__self:void 0,__source:{fileName:r,lineNumber:81,columnNumber:9}},wp.element.createElement(n.TextControl,{label:"追加class",value:a,onChange:e=>{N({addClassName:e})},__self:void 0,__source:{fileName:r,lineNumber:82,columnNumber:11}}),wp.element.createElement(n.TextControl,{label:"追加Id",value:s,onChange:e=>{N({addId:e})},__self:void 0,__source:{fileName:r,lineNumber:87,columnNumber:11}}),wp.element.createElement(t.URLInput,{label:"リンクURL",value:u,onChange:e=>{N({linkUrl:e})},__self:void 0,__source:{fileName:r,lineNumber:92,columnNumber:11}}),u&&wp.element.createElement(n.CheckboxControl,{label:"別タブでリンクを開く",checked:d,onChange:e=>N({isChecked:e}),__self:void 0,__source:{fileName:r,lineNumber:98,columnNumber:13}})))},save:({attributes:{titleEn:e,titleJp:l,addClassName:n,addId:o,linkUrl:i,isChecked:c}})=>{const m=()=>{if(l)return wp.element.createElement("div",{className:"p-title__wrap--jp",__self:void 0,__source:{fileName:r,lineNumber:112,columnNumber:11}},wp.element.createElement(t.RichText.Content,{value:l,tagName:"p",className:"c-text__section-title-jp animation c-text--bold js-blocks-text",__self:void 0,__source:{fileName:r,lineNumber:113,columnNumber:13}}))},a=()=>{if(e)return wp.element.createElement("div",{className:i?"p-title__wrap--en link":"p-title__wrap--en",__self:void 0,__source:{fileName:r,lineNumber:126,columnNumber:11}},wp.element.createElement(t.RichText.Content,{className:"c-text__section-title c-text--med c-text--en animation",value:e,tagName:"h3",__self:void 0,__source:{fileName:r,lineNumber:127,columnNumber:13}}))};return i&&c?wp.element.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"",__self:void 0,__source:{fileName:r,lineNumber:139,columnNumber:9}},wp.element.createElement("div",{className:n+" p-title__wrap",id:o,__self:void 0,__source:{fileName:r,lineNumber:140,columnNumber:11}},wp.element.createElement(a,{__self:void 0,__source:{fileName:r,lineNumber:141,columnNumber:13}}),wp.element.createElement(m,{__self:void 0,__source:{fileName:r,lineNumber:143,columnNumber:13}}))):i?wp.element.createElement("a",{href:i,className:"",__self:void 0,__source:{fileName:r,lineNumber:150,columnNumber:9}},wp.element.createElement("div",{className:n+" p-title__wrap",id:o,__self:void 0,__source:{fileName:r,lineNumber:151,columnNumber:11}},wp.element.createElement(a,{__self:void 0,__source:{fileName:r,lineNumber:152,columnNumber:13}}),wp.element.createElement(m,{__self:void 0,__source:{fileName:r,lineNumber:154,columnNumber:13}}))):wp.element.createElement("div",{className:"",__self:void 0,__source:{fileName:r,lineNumber:161,columnNumber:9}},wp.element.createElement("div",{className:n+" p-title__wrap",id:o,__self:void 0,__source:{fileName:r,lineNumber:162,columnNumber:11}},wp.element.createElement(a,{__self:void 0,__source:{fileName:r,lineNumber:163,columnNumber:13}}),wp.element.createElement(m,{__self:void 0,__source:{fileName:r,lineNumber:165,columnNumber:13}})))}})}();
//# sourceMappingURL=title.js.map