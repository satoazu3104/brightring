!function(){"use strict";var e=window.wp.blocks,l=window.wp.blockEditor,t=window.wp.components,n=window.wp.element,r="/home/sato/sato/serve/www/brightring/wp-content/themes/origin/src/js/blocks/splide.js";(0,e.registerBlockType)("portart/splide",{title:"splide",icon:"smiley",category:"layout",attributes:{wrapToggle:{type:"boolean",default:!1},addClassName:{type:"string",default:""},display:{type:"string",default:""}},edit:({attributes:e,attributes:{wrapToggle:s,addClassName:m,display:o},setAttributes:a})=>{const[i,u]=(0,n.useState)(s);return wp.element.createElement("div",{className:"b-wrapper__box",__self:void 0,__source:{fileName:r,lineNumber:29,columnNumber:7}},wp.element.createElement("div",{className:"b-wrapper__box__tool",__self:void 0,__source:{fileName:r,lineNumber:30,columnNumber:9}},wp.element.createElement(t.Button,{isSecondary:!0,onClick:()=>{a(""==o?{display:"pc"}:"pc"==o?{display:"sp"}:{display:""})},__self:void 0,__source:{fileName:r,lineNumber:31,columnNumber:11}},o?o+"のみ表示":"両方表示"),wp.element.createElement(t.Button,{isSecondary:!0,onClick:()=>{u(!i),a({wrapToggle:!i})},__self:void 0,__source:{fileName:r,lineNumber:45,columnNumber:11}},i?"開く":"折りたたむ")),wp.element.createElement("h3",{__self:void 0,__source:{fileName:r,lineNumber:53,columnNumber:9}},"スプライドボックス"),wp.element.createElement(l.InspectorControls,{__self:void 0,__source:{fileName:r,lineNumber:55,columnNumber:9}},wp.element.createElement(t.TextControl,{label:"追加class",value:m,onChange:e=>{a({addClassName:e})},__self:void 0,__source:{fileName:r,lineNumber:56,columnNumber:11}})),wp.element.createElement("div",{style:{height:i?"0px":"auto",overflow:i?"hidden":"unset"},__self:void 0,__source:{fileName:r,lineNumber:67,columnNumber:9}},wp.element.createElement(l.InnerBlocks,{__self:void 0,__source:{fileName:r,lineNumber:71,columnNumber:11}})))},save:({className:e,attributes:{addClassName:t,display:n}})=>{let s=t.replace(/\n/g," ");return s+=" "+n,wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("section",{class:"splide "+s,"aria-label":"",__self:void 0,__source:{fileName:r,lineNumber:85,columnNumber:9}},wp.element.createElement("div",{class:"splide__track",__self:void 0,__source:{fileName:r,lineNumber:86,columnNumber:11}},wp.element.createElement("ul",{class:"splide__list",__self:void 0,__source:{fileName:r,lineNumber:87,columnNumber:13}},wp.element.createElement(l.InnerBlocks.Content,{__self:void 0,__source:{fileName:r,lineNumber:88,columnNumber:15}})))))}})}();
//# sourceMappingURL=splide.js.map