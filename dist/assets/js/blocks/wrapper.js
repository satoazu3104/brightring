!function(){"use strict";var e=window.wp.blocks,l=window.wp.blockEditor,t=window.wp.components,n=window.wp.element,r="/home/sato/sato/serve/www/brightring/wp-content/themes/origin/src/js/blocks/wrapper.js";function m(){return m=Object.assign?Object.assign.bind():function(e){for(var l,t=1;t<arguments.length;t++)for(var n in l=arguments[t])Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);return e},m.apply(this,arguments)}(0,e.registerBlockType)("portart/wrapper",{title:"wrapper",icon:"smiley",category:"layout",attributes:{wrapToggle:{type:"boolean",default:!1},addClassName:{type:"string",default:""},addId:{type:"string",default:""},addAttr:{type:"string",default:""},linkUrl:{type:"string",default:""},isChecked:{type:"boolean",default:!1},display:{type:"string",default:""}},edit:({attributes:e,attributes:{addClassName:m,addId:a,addAttr:o,linkUrl:s,wrapToggle:i,isChecked:u,display:c},setAttributes:_})=>{const[d,p]=(0,n.useState)(i);return wp.element.createElement("div",{className:"b-wrapper__box",__self:void 0,__source:{fileName:r,lineNumber:67,columnNumber:7}},wp.element.createElement("div",{className:"b-wrapper__box__tool",__self:void 0,__source:{fileName:r,lineNumber:68,columnNumber:9}},wp.element.createElement("span",{className:"c-text__med b-wrapper__class",__self:void 0,__source:{fileName:r,lineNumber:69,columnNumber:11}},"Class名: ",m),wp.element.createElement(t.Button,{isSecondary:!0,onClick:()=>{_(""==c?{display:"pc"}:"pc"==c?{display:"sp"}:{display:""})},__self:void 0,__source:{fileName:r,lineNumber:70,columnNumber:11}},c?c+"のみ表示":"両方表示"),wp.element.createElement(t.Button,{isSecondary:!0,onClick:()=>{p(!d),_({wrapToggle:!d})},__self:void 0,__source:{fileName:r,lineNumber:84,columnNumber:11}},d?"開く":"折りたたむ")),wp.element.createElement(l.InspectorControls,{__self:void 0,__source:{fileName:r,lineNumber:91,columnNumber:9}},wp.element.createElement(t.TextareaControl,{label:"追加class",value:m,onChange:e=>{_({addClassName:e})},__self:void 0,__source:{fileName:r,lineNumber:92,columnNumber:11}}),wp.element.createElement(t.TextControl,{label:"追加Id",value:a,onChange:e=>{_({addId:e})},__self:void 0,__source:{fileName:r,lineNumber:97,columnNumber:11}}),wp.element.createElement(t.TextControl,{label:"追加Attr",value:o,onChange:e=>{_({addAttr:e})},__self:void 0,__source:{fileName:r,lineNumber:102,columnNumber:11}}),wp.element.createElement(l.URLInput,{label:"リンクURL",value:s,onChange:e=>{_({linkUrl:e})},__self:void 0,__source:{fileName:r,lineNumber:107,columnNumber:11}}),s&&wp.element.createElement(t.CheckboxControl,{label:"別タブでリンクを開く",checked:u,onChange:e=>_({isChecked:e}),__self:void 0,__source:{fileName:r,lineNumber:113,columnNumber:13}})),wp.element.createElement("div",{style:{height:d?"0px":"auto",overflow:d?"hidden":"unset"},__self:void 0,__source:{fileName:r,lineNumber:120,columnNumber:9}},wp.element.createElement(l.InnerBlocks,{__self:void 0,__source:{fileName:r,lineNumber:124,columnNumber:11}})))},save:({className:e,attributes:{addClassName:t,addId:n,addAttr:a,linkUrl:o,isChecked:s,display:i}})=>{const u=a.split(" ");let c={};for(let e=0;e<u.length;e++){const l=u[e].substr(0,u[e].indexOf("=")),t=u[e].substr(u[e].indexOf("=")+1).replace(/"/g,"");c[l]=t}let _=t.replace(/\n/g," ");return _+=" "+i,o&&s?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("a",m({id:n,className:_},c,{href:o,target:"_blank",rel:"noopener noreferrer",__self:void 0,__source:{fileName:r,lineNumber:145,columnNumber:11}}),wp.element.createElement("object",{__self:void 0,__source:{fileName:r,lineNumber:146,columnNumber:13}},wp.element.createElement(l.InnerBlocks.Content,{__self:void 0,__source:{fileName:r,lineNumber:147,columnNumber:15}})))):o?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("a",m({id:n,className:_},c,{href:o,__self:void 0,__source:{fileName:r,lineNumber:155,columnNumber:11}}),wp.element.createElement("object",{__self:void 0,__source:{fileName:r,lineNumber:156,columnNumber:13}},wp.element.createElement(l.InnerBlocks.Content,{__self:void 0,__source:{fileName:r,lineNumber:157,columnNumber:15}})))):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",m({id:n,className:_},c,{__self:void 0,__source:{fileName:r,lineNumber:165,columnNumber:11}}),wp.element.createElement(l.InnerBlocks.Content,{__self:void 0,__source:{fileName:r,lineNumber:166,columnNumber:13}})))}})}();
//# sourceMappingURL=wrapper.js.map