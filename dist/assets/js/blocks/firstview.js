!function(){"use strict";var e,t,l,r={925:function(e,t,l){l(715)},204:function(e,t,l){l(925)},684:function(e,t,l){var r=l(427),n=l(715),i=l(87),o="/home/sato/sato/serve/www/brightring/wp-content/themes/origin/src/js/blocks/component/MediaUpload/ImageSelector.js";t.A=({...e})=>{let t=e.attributes;const l=e.index,m=e.setAttributes;let u=e.count;const s=e.slug,c=void 0===l,[a,_]=(0,i.useState)(c?t[s]:t[l][s]);console.log(c);const f=(e,l,r)=>{if(e&&e.url)if(c)_(e.url),m({[l]:e.url});else{let n=t;console.log(n),n[r][l]=e.url,_(e.url),m({blocksData:n,count:u++})}},p=(e,l)=>{if(c)_(""),m({[e]:""});else{let r=t;r[l][e]="",_(""),m({blocksData:r,count:u++})}};return c?wp.element.createElement(wp.element.Fragment,null,a&&wp.element.createElement("img",{className:"b-media__img",src:a,alt:"Uploaded Image",__self:void 0,__source:{fileName:o,lineNumber:88,columnNumber:22}}),wp.element.createElement(n.MediaUploadCheck,{__self:void 0,__source:{fileName:o,lineNumber:91,columnNumber:9}},wp.element.createElement(n.MediaUpload,{onSelect:e=>f(e,s),allowedTypes:["image"],value:t[s],render:({open:e})=>wp.element.createElement(r.Button,{onClick:e,isPrimary:!0,__self:void 0,__source:{fileName:o,lineNumber:97,columnNumber:15}},"画像を選択"),__self:void 0,__source:{fileName:o,lineNumber:92,columnNumber:11}})),""!==t[s]&&wp.element.createElement(n.MediaUploadCheck,{__self:void 0,__source:{fileName:o,lineNumber:104,columnNumber:11}},wp.element.createElement(r.Button,{onClick:()=>p(s),isLink:!0,isDestructive:!0,className:"removeImage",__self:void 0,__source:{fileName:o,lineNumber:105,columnNumber:13}},"画像を削除"))):wp.element.createElement(wp.element.Fragment,null,a&&wp.element.createElement("img",{src:a,alt:"Uploaded Image",__self:void 0,__source:{fileName:o,lineNumber:56,columnNumber:20}}),wp.element.createElement(n.MediaUploadCheck,{__self:void 0,__source:{fileName:o,lineNumber:59,columnNumber:7}},wp.element.createElement(n.MediaUpload,{onSelect:e=>f(e,s,l),allowedTypes:["image"],value:t[l][s],render:({open:e})=>wp.element.createElement(r.Button,{onClick:e,isPrimary:!0,__self:void 0,__source:{fileName:o,lineNumber:65,columnNumber:13}},"画像を選択"),__self:void 0,__source:{fileName:o,lineNumber:60,columnNumber:9}})),""!==t[s]&&wp.element.createElement(n.MediaUploadCheck,{__self:void 0,__source:{fileName:o,lineNumber:72,columnNumber:9}},wp.element.createElement(r.Button,{onClick:()=>p(s,l),isLink:!0,isDestructive:!0,className:"removeImage",__self:void 0,__source:{fileName:o,lineNumber:73,columnNumber:11}},"画像を削除")))}},760:function(e,t,l){l.d(t,{L:function(){return r.A}});var r=l(684);l(917)},917:function(e,t,l){l(87)},715:function(e){e.exports=window.wp.blockEditor},427:function(e){e.exports=window.wp.components},87:function(e){e.exports=window.wp.element}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={exports:{}};return r[e](l,l.exports,i),l.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var l in t)i.o(t,l)&&!i.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e=window.wp.blocks,i(427),i(715),i(204),t=i(760),l="/home/sato/sato/serve/www/brightring/wp-content/themes/origin/src/js/blocks/firstview.js",(0,e.registerBlockType)("portart/firstview",{title:"ファーストビュー",icon:"smiley",category:"layout",attributes:{sp:{type:"string",default:""},pc:{type:"string",default:""}},edit:({className:e,attributes:{kv0:r,kv1:n,kv2:i},attributes:o,setAttributes:m})=>wp.element.createElement("div",{__self:void 0,__source:{fileName:l,lineNumber:28,columnNumber:7}},wp.element.createElement(t.L,{attributes:o,setAttributes:m,slug:"pc",__self:void 0,__source:{fileName:l,lineNumber:29,columnNumber:9}}),wp.element.createElement(t.L,{attributes:o,setAttributes:m,slug:"sp",__self:void 0,__source:{fileName:l,lineNumber:30,columnNumber:9}})),save:({attributes:e,attributes:{header:t,pc:r,sp:n}})=>wp.element.createElement("div",{className:"c-fv__wrap",__self:void 0,__source:{fileName:l,lineNumber:36,columnNumber:7}},wp.element.createElement("div",{className:"c-fv__wrap--kv",__self:void 0,__source:{fileName:l,lineNumber:38,columnNumber:9}},wp.element.createElement("img",{className:"c-fv__img--kv pc",src:r,alt:"firstview イメージ画像",__self:void 0,__source:{fileName:l,lineNumber:39,columnNumber:11}}),wp.element.createElement("img",{className:"c-fv__img--kv sp",src:n,alt:"firstview イメージ画像",__self:void 0,__source:{fileName:l,lineNumber:40,columnNumber:11}})))})}();
//# sourceMappingURL=firstview.js.map