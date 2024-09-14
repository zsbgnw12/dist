import{e as H,h as u,d as W,i as k,l as b,p as L,R as E,S as xe,U as ge,r as B,V as q,W as be,X as U,k as Z,b as x,c as p,a as z,s,Y as _,Z as Ce,u as ze,f as ce,$ as ye,a0 as te,t as ne,a1 as re,a2 as Ie,a3 as T,A as we,a4 as Se,a5 as Re,y as Ae,F as Ne,H as ie,J as He,a6 as G,K as Pe,a7 as Te}from"./index-def0b482.js";import{N as Me,a as ke,c as Fe}from"./Dropdown-dfd73963.js";const Ke=H({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),$=W("n-menu"),J=W("n-submenu"),X=W("n-menu-item-group"),V=8;function Y(e){const r=k($),{props:n,mergedCollapsedRef:i}=r,l=k(J,null),a=k(X,null),c=b(()=>n.mode==="horizontal"),v=b(()=>c.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=b(()=>{var m;return Math.max((m=n.collapsedIconSize)!==null&&m!==void 0?m:n.iconSize,n.iconSize)}),I=b(()=>{var m;return!c.value&&e.root&&i.value&&(m=n.collapsedIconSize)!==null&&m!==void 0?m:n.iconSize}),A=b(()=>{if(c.value)return;const{collapsedWidth:m,indent:w,rootIndent:R}=n,{root:S,isGroup:N}=e,P=R===void 0?w:R;if(S)return i.value?m/2-d.value/2:P;if(a)return w/2+a.paddingLeftRef.value;if(l)return(N?w/2:w)+l.paddingLeftRef.value}),y=b(()=>{const{collapsedWidth:m,indent:w,rootIndent:R}=n,{value:S}=d,{root:N}=e;return c.value||!N||!i.value?V:(R===void 0?w:R)+S+V-(m+S)/2});return{dropdownPlacement:v,activeIconSize:I,maxIconSize:d,paddingLeft:A,iconMarginRight:y,NMenu:r,NSubmenu:l}}const Q={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},de=Object.assign(Object.assign({},Q),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ee=H({name:"MenuOptionGroup",props:de,setup(e){L(J,null);const r=Y(e);L(X,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:n,props:i}=k($);return function(){const{value:l}=n,a=r.paddingLeft.value,{nodeProps:c}=i,v=c==null?void 0:c(e.tmNode.rawNode);return u("div",{class:`${l}-menu-item-group`,role:"group"},u("div",Object.assign({},v,{class:[`${l}-menu-item-group-title`,v==null?void 0:v.class],style:[(v==null?void 0:v.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),E(e.title),e.extra?u(xe,null," ",E(e.extra)):null),u("div",null,e.tmNodes.map(d=>ee(d,i))))}}}),se=H({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:r}=k($);return{menuProps:r,style:b(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:b(()=>{const{maxIconSize:n,activeIconSize:i,iconMarginRight:l}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${i}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:n,renderLabel:i,renderExtra:l,expandIcon:a}}=this,c=n?n(r.rawNode):E(this.icon);return u("div",{onClick:v=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,v)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(r.rawNode):E(this.title),this.extra||l?u("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(r.rawNode):E(this.extra)):null),this.showArrow?u(ge,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(r.rawNode):u(Ke,null)}):null)}}),ue=Object.assign(Object.assign({},Q),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Oe=H({name:"Submenu",props:ue,setup(e){const r=Y(e),{NMenu:n,NSubmenu:i}=r,{props:l,mergedCollapsedRef:a,mergedThemeRef:c}=n,v=b(()=>{const{disabled:m}=e;return i!=null&&i.mergedDisabledRef.value||l.disabled?!0:m}),d=B(!1);L(J,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:v}),L(X,null);function I(){const{onClick:m}=e;m&&m()}function A(){v.value||(a.value||n.toggleExpand(e.internalKey),I())}function y(m){d.value=m}return{menuProps:l,mergedTheme:c,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:d,paddingLeft:r.paddingLeft,mergedDisabled:v,mergedValue:n.mergedValueRef,childActive:q(()=>n.activePathRef.value.includes(e.internalKey)),collapsed:b(()=>l.mode==="horizontal"?!1:a.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!v.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:y,handleClick:A}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:n,renderLabel:i}}=this,l=()=>{const{isHorizontal:c,paddingLeft:v,collapsed:d,mergedDisabled:I,maxIconSize:A,activeIconSize:y,title:m,childActive:w,icon:R,handleClick:S,menuProps:{nodeProps:N},dropdownShow:P,iconMarginRight:D,tmNode:O,mergedClsPrefix:j}=this,F=N==null?void 0:N(O.rawNode);return u("div",Object.assign({},F,{class:[`${j}-menu-item`,F==null?void 0:F.class],role:"menuitem"}),u(se,{tmNode:O,paddingLeft:v,collapsed:d,disabled:I,iconMarginRight:D,maxIconSize:A,activeIconSize:y,title:m,extra:this.extra,showArrow:!c,childActive:w,clsPrefix:j,icon:R,hover:P,onClick:S}))},a=()=>u(be,null,{default:()=>{const{tmNodes:c,collapsed:v}=this;return v?null:u("div",{class:`${r}-submenu-children`,role:"menu"},c.map(d=>ee(d,this.menuProps)))}});return this.root?u(Me,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:i}),{default:()=>u("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):u("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),ve=Object.assign(Object.assign({},Q),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Le=H({name:"MenuOption",props:ve,setup(e){const r=Y(e),{NSubmenu:n,NMenu:i}=r,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:c}=i,v=n?n.mergedDisabledRef:{value:!1},d=b(()=>v.value||e.disabled);function I(y){const{onClick:m}=e;m&&m(y)}function A(y){d.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),I(y))}return{mergedClsPrefix:a,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:l,dropdownEnabled:q(()=>e.root&&c.value&&l.mode!=="horizontal"&&!d.value),selected:q(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:A}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:n,menuProps:{renderLabel:i,nodeProps:l}}=this,a=l==null?void 0:l(n.rawNode);return u("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),u(ke,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(n.rawNode):E(this.title),trigger:()=>u(se,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),$e=H({name:"MenuDivider",setup(){const e=k($),{mergedClsPrefixRef:r,isHorizontalRef:n}=e;return()=>n.value?null:u("div",{class:`${r.value}-menu-divider`})}}),je=Z(de),_e=Z(ve),Ve=Z(ue);function me(e){return e.type==="divider"||e.type==="render"}function Be(e){return e.type==="divider"}function ee(e,r){const{rawNode:n}=e,{show:i}=n;if(i===!1)return null;if(me(n))return Be(n)?u($e,Object.assign({key:e.key},n.props)):null;const{labelField:l}=r,{key:a,level:c,isGroup:v}=e,d=Object.assign(Object.assign({},n),{title:n.title||n[l],extra:n.titleExtra||n.extra,key:a,internalKey:a,level:c,root:c===0,isGroup:v});return e.children?e.isGroup?u(Ee,U(d,je,{tmNode:e,tmNodes:e.children,key:a})):u(Oe,U(d,Ve,{key:a,rawNodes:n[r.childrenField],tmNodes:e.children,tmNode:e})):u(Le,U(d,_e,{key:a,tmNode:e}))}const le=[x("&::before","background-color: var(--n-item-color-hover);"),s("arrow",`
 color: var(--n-arrow-color-hover);
 `),s("icon",`
 color: var(--n-item-icon-color-hover);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),s("extra",`
 color: var(--n-item-text-color-hover);
 `)])],ae=[s("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],De=x([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[z("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),z("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[z("selected",[s("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),s("extra","color: var(--n-item-text-color-active-horizontal);")])]),z("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),s("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),_("disabled",[_("selected, child-active",[x("&:focus-within",ae)]),z("selected",[M(null,[s("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),z("child-active",[M(null,[s("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),M("border-bottom: 2px solid var(--n-border-color-horizontal);",ae)]),p("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),z("collapsed",[p("menu-item-content",[z("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),p("menu-item-content-header","opacity: 0;"),s("arrow","opacity: 0;"),s("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),p("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("> *","z-index: 1;"),x("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),z("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),z("collapsed",[s("arrow","transform: rotate(0);")]),z("selected",[x("&::before","background-color: var(--n-item-color-active);"),s("arrow","color: var(--n-arrow-color-active);"),s("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),s("extra","color: var(--n-item-text-color-active);")])]),z("child-active",[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),s("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),s("arrow",`
 color: var(--n-arrow-color-child-active);
 `),s("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),_("disabled",[_("selected, child-active",[x("&:focus-within",le)]),z("selected",[M(null,[s("arrow","color: var(--n-arrow-color-active-hover);"),s("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),s("extra","color: var(--n-item-text-color-active-hover);")])])]),z("child-active",[M(null,[s("arrow","color: var(--n-arrow-color-child-active-hover);"),s("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),s("extra","color: var(--n-item-text-color-child-active-hover);")])])]),z("selected",[M(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),M(null,le)]),s("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),s("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),p("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[x("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[x("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),s("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),p("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[p("menu-item-content",`
 height: var(--n-item-height);
 `),p("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ce({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),p("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),p("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function M(e,r){return[z("hover",e,r),x("&:hover",e,r)]}const Ue=Object.assign(Object.assign({},ce.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Ge=H({name:"Menu",props:Ue,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=ze(e),i=ce("Menu","-menu",De,Se,e,r),l=k(ye,null),a=b(()=>{var h;const{collapsed:g}=e;if(g!==void 0)return g;if(l){const{collapseModeRef:o,collapsedRef:f}=l;if(o.value==="width")return(h=f.value)!==null&&h!==void 0?h:!1}return!1}),c=b(()=>{const{keyField:h,childrenField:g,disabledField:o}=e;return Fe(e.items||e.options,{getIgnored(f){return me(f)},getChildren(f){return f[g]},getDisabled(f){return f[o]},getKey(f){var C;return(C=f[h])!==null&&C!==void 0?C:f.name}})}),v=b(()=>new Set(c.value.treeNodes.map(h=>h.key))),{watchProps:d}=e,I=B(null);d!=null&&d.includes("defaultValue")?te(()=>{I.value=e.defaultValue}):I.value=e.defaultValue;const A=ne(e,"value"),y=re(A,I),m=B([]),w=()=>{m.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(y.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?te(w):w();const R=Ie(e,["expandedNames","expandedKeys"]),S=re(R,m),N=b(()=>c.value.treeNodes),P=b(()=>c.value.getPath(y.value).keyPath);L($,{props:e,mergedCollapsedRef:a,mergedThemeRef:i,mergedValueRef:y,mergedExpandedKeysRef:S,activePathRef:P,mergedClsPrefixRef:r,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:ne(e,"inverted"),doSelect:D,toggleExpand:j});function D(h,g){const{"onUpdate:value":o,onUpdateValue:f,onSelect:C}=e;f&&T(f,h,g),o&&T(o,h,g),C&&T(C,h,g),I.value=h}function O(h){const{"onUpdate:expandedKeys":g,onUpdateExpandedKeys:o,onExpandedNamesChange:f,onOpenNamesChange:C}=e;g&&T(g,h),o&&T(o,h),f&&T(f,h),C&&T(C,h),m.value=h}function j(h){const g=Array.from(S.value),o=g.findIndex(f=>f===h);if(~o)g.splice(o,1);else{if(e.accordion&&v.value.has(h)){const f=g.findIndex(C=>v.value.has(C));f>-1&&g.splice(f,1)}g.push(h)}O(g)}const F=h=>{const g=c.value.getPath(h??y.value,{includeSelf:!1}).keyPath;if(!g.length)return;const o=Array.from(S.value),f=new Set([...o,...g]);e.accordion&&v.value.forEach(C=>{f.has(C)&&!g.includes(C)&&f.delete(C)}),O(Array.from(f))},oe=b(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:g},self:o}=i.value,{borderRadius:f,borderColorHorizontal:C,fontSize:he,itemHeight:pe,dividerColor:fe}=o,t={"--n-divider-color":fe,"--n-bezier":g,"--n-font-size":he,"--n-border-color-horizontal":C,"--n-border-radius":f,"--n-item-height":pe};return h?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),K=n?we("menu",b(()=>e.inverted?"a":"b"),oe,e):void 0;return{mergedClsPrefix:r,controlledExpandedKeys:R,uncontrolledExpanededKeys:m,mergedExpandedKeys:S,uncontrolledValue:I,mergedValue:y,activePath:P,tmNodes:N,mergedTheme:i,mergedCollapsed:a,cssVars:n?void 0:oe,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender,showOption:F}},render(){const{mergedClsPrefix:e,mode:r,themeClass:n,onRender:i}=this;return i==null||i(),u("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${r}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>ee(l,this.$props)))}}),qe={class:"w-full h-full"},Je=H({__name:"index",setup(e){const r=Re(),n=[{label:()=>u(G,{to:{path:"/main/home"}},{default:()=>"首页"}),key:"home"},{label:()=>u(G,{to:{path:"/main/chat"}},{default:()=>"GPT"}),key:"chat"},{label:()=>u(G,{to:{path:"/main/detail"}},{default:()=>"结果"}),key:"detail"}],i=B(null);return Ae(()=>{i.value=r.name}),(l,a)=>{const c=Te("RouterView");return Pe(),Ne("div",qe,[ie(He(Ge),{value:i.value,"onUpdate:value":a[0]||(a[0]=v=>i.value=v),mode:"horizontal",options:n},null,8,["value"]),ie(c)])}}});export{Je as default};
