import{e as j,aO as Ke,aP as We,y as me,bn as Ue,b7 as qe,l as I,r as E,V as oe,bb as ge,bf as J,h as f,b8 as Ge,ay as ke,aQ as ue,bk as Ye,bo as ze,o as Be,c as H,s as _,b as V,u as Fe,f as q,bp as Xe,b1 as Ze,i as ye,bq as Qe,z as P,A as xe,U as Ne,br as Ce,R as Oe,T as Je,a as O,Y as Z,ag as eo,t as $,bs as oo,w as we,bt as fe,p as be,B as pe,bg as no,bc as to,aw as io,aC as lo,bu as ro,aX as so,av as Re,bv as ao,d as co,bw as uo,a3 as fo}from"./index-def0b482.js";import{d as ho,h as Se}from"./Dropdown-dfd73963.js";function he(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(i=>{i&&i(o)})}}function Te(e){return e&-e}class vo{constructor(n,o){this.l=n,this.min=o;const i=new Array(n+1);for(let l=0;l<n+1;++l)i[l]=0;this.ft=i}add(n,o){if(o===0)return;const{l:i,ft:l}=this;for(n+=1;n<=i;)l[n]+=o,n+=Te(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:i,l}=this;if(n>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let a=n*i;for(;n>0;)a+=o[n],n-=Te(n);return a}getBound(n){let o=0,i=this.l;for(;i>o;){const l=Math.floor((o+i)/2),a=this.sum(l);if(a>n){i=l;continue}else if(a<n){if(o===l)return this.sum(o+1)<=n?o+1:l;o=l}else return l}return o}}let ee;function go(){return typeof document>"u"?!1:(ee===void 0&&("matchMedia"in window?ee=window.matchMedia("(pointer:coarse)").matches:ee=!1),ee)}let ve;function Me(){return typeof document>"u"?1:(ve===void 0&&(ve="chrome"in window?window.devicePixelRatio:1),ve)}const bo=ue(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[ue("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[ue("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),po=j({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Ke();bo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:We,ssr:n}),me(()=>{const{defaultScrollIndex:r,defaultScrollKey:c}=e;r!=null?u({index:r}):c!=null&&u({key:c})});let o=!1,i=!1;Ue(()=>{if(o=!1,!i){i=!0;return}u({top:b.value,left:v})}),qe(()=>{o=!0,i||(i=!0)});const l=I(()=>{const r=new Map,{keyField:c}=e;return e.items.forEach((p,S)=>{r.set(p[c],S)}),r}),a=E(null),d=E(void 0),h=new Map,C=I(()=>{const{items:r,itemSize:c,keyField:p}=e,S=new vo(r.length,c);return r.forEach((T,M)=>{const m=T[p],F=h.get(m);F!==void 0&&S.add(M,F)}),S}),y=E(0);let v=0;const b=E(0),z=oe(()=>Math.max(C.value.getBound(b.value-ge(e.paddingTop))-1,0)),g=I(()=>{const{value:r}=d;if(r===void 0)return[];const{items:c,itemSize:p}=e,S=z.value,T=Math.min(S+Math.ceil(r/p+1),c.length-1),M=[];for(let m=S;m<=T;++m)M.push(c[m]);return M}),u=(r,c)=>{if(typeof r=="number"){R(r,c,"auto");return}const{left:p,top:S,index:T,key:M,position:m,behavior:F,debounce:t=!0}=r;if(p!==void 0||S!==void 0)R(p,S,F);else if(T!==void 0)x(T,F,t);else if(M!==void 0){const s=l.value.get(M);s!==void 0&&x(s,F,t)}else m==="bottom"?R(0,Number.MAX_SAFE_INTEGER,F):m==="top"&&R(0,0,F)};let w,B=null;function x(r,c,p){const{value:S}=C,T=S.sum(r)+ge(e.paddingTop);if(!p)a.value.scrollTo({left:0,top:T,behavior:c});else{w=r,B!==null&&window.clearTimeout(B),B=window.setTimeout(()=>{w=void 0,B=null},16);const{scrollTop:M,offsetHeight:m}=a.value;if(T>M){const F=S.get(r);T+F<=M+m||a.value.scrollTo({left:0,top:T+F-m,behavior:c})}else a.value.scrollTo({left:0,top:T,behavior:c})}}function R(r,c,p){a.value.scrollTo({left:r,top:c,behavior:p})}function L(r,c){var p,S,T;if(o||e.ignoreItemResize||U(c.target))return;const{value:M}=C,m=l.value.get(r),F=M.get(m),t=(T=(S=(p=c.borderBoxSize)===null||p===void 0?void 0:p[0])===null||S===void 0?void 0:S.blockSize)!==null&&T!==void 0?T:c.contentRect.height;if(t===F)return;t-e.itemSize===0?h.delete(r):h.set(r,t-e.itemSize);const k=t-F;if(k===0)return;M.add(m,k);const N=a.value;if(N!=null){if(w===void 0){const A=M.sum(m);N.scrollTop>A&&N.scrollBy(0,k)}else if(m<w)N.scrollBy(0,k);else if(m===w){const A=M.sum(m);t+A>N.scrollTop+N.offsetHeight&&N.scrollBy(0,k)}W()}y.value++}const D=!go();let K=!1;function G(r){var c;(c=e.onScroll)===null||c===void 0||c.call(e,r),(!D||!K)&&W()}function Y(r){var c;if((c=e.onWheel)===null||c===void 0||c.call(e,r),D){const p=a.value;if(p!=null){if(r.deltaX===0&&(p.scrollTop===0&&r.deltaY<=0||p.scrollTop+p.offsetHeight>=p.scrollHeight&&r.deltaY>=0))return;r.preventDefault(),p.scrollTop+=r.deltaY/Me(),p.scrollLeft+=r.deltaX/Me(),W(),K=!0,Ye(()=>{K=!1})}}}function X(r){if(o||U(r.target)||r.contentRect.height===d.value)return;d.value=r.contentRect.height;const{onResize:c}=e;c!==void 0&&c(r)}function W(){const{value:r}=a;r!=null&&(b.value=r.scrollTop,v=r.scrollLeft)}function U(r){let c=r;for(;c!==null;){if(c.style.display==="none")return!0;c=c.parentElement}return!1}return{listHeight:d,listStyle:{overflow:"auto"},keyToIndex:l,itemsStyle:I(()=>{const{itemResizable:r}=e,c=J(C.value.sum());return y.value,[e.itemsStyle,{boxSizing:"content-box",height:r?"":c,minHeight:r?c:"",paddingTop:J(e.paddingTop),paddingBottom:J(e.paddingBottom)}]}),visibleItemsStyle:I(()=>(y.value,{transform:`translateY(${J(C.value.sum(z.value))})`})),viewportItems:g,listElRef:a,itemsElRef:E(null),scrollTo:u,handleListResize:X,handleListScroll:G,handleListWheel:Y,handleItemResize:L}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:i}=this;return f(ke,{onResize:this.handleListResize},{default:()=>{var l,a;return f("div",Ge(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?f("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[f(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(d=>{const h=d[n],C=o.get(h),y=this.$slots.default({item:d,index:C})[0];return e?f(ke,{key:h,onResize:v=>this.handleItemResize(h,v)},{default:()=>y}):(y.key=h,y)})})]):(a=(l=this.$slots).empty)===null||a===void 0?void 0:a.call(l)])}})}});function mo(e,n){n&&(me(()=>{const{value:o}=e;o&&ze.registerHandler(o,n)}),Be(()=>{const{value:o}=e;o&&ze.unregisterHandler(o)}))}const yo=j({name:"Checkmark",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},f("g",{fill:"none"},f("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),xo=j({name:"Empty",render(){return f("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),f("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Co=j({props:{onFocus:Function,onBlur:Function},setup(e){return()=>f("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),ko=H("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[_("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[V("+",[_("description",`
 margin-top: 8px;
 `)])]),_("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),_("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),zo=Object.assign(Object.assign({},q.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),wo=j({name:"Empty",props:zo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=Fe(e),i=q("Empty","-empty",ko,Xe,e,n),{localeRef:l}=Ze("Empty"),a=ye(Qe,null),d=I(()=>{var v,b,z;return(v=e.description)!==null&&v!==void 0?v:(z=(b=a==null?void 0:a.mergedComponentPropsRef.value)===null||b===void 0?void 0:b.Empty)===null||z===void 0?void 0:z.description}),h=I(()=>{var v,b;return((b=(v=a==null?void 0:a.mergedComponentPropsRef.value)===null||v===void 0?void 0:v.Empty)===null||b===void 0?void 0:b.renderIcon)||(()=>f(xo,null))}),C=I(()=>{const{size:v}=e,{common:{cubicBezierEaseInOut:b},self:{[P("iconSize",v)]:z,[P("fontSize",v)]:g,textColor:u,iconColor:w,extraTextColor:B}}=i.value;return{"--n-icon-size":z,"--n-font-size":g,"--n-bezier":b,"--n-text-color":u,"--n-icon-color":w,"--n-extra-text-color":B}}),y=o?xe("empty",I(()=>{let v="";const{size:b}=e;return v+=b[0],v}),C,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:h,localizedDescription:I(()=>d.value||l.value.description),cssVars:o?void 0:C,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),f("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?f("div",{class:`${n}-empty__icon`},e.icon?e.icon():f(Ne,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?f("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?f("div",{class:`${n}-empty__extra`},e.extra()):null)}});function Ro(e,n){return f(Je,{name:"fade-in-scale-up-transition"},{default:()=>e?f(Ne,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>f(yo)}):null})}const Pe=j({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:i,valueSetRef:l,renderLabelRef:a,renderOptionRef:d,labelFieldRef:h,valueFieldRef:C,showCheckmarkRef:y,nodePropsRef:v,handleOptionClick:b,handleOptionMouseEnter:z}=ye(Ce),g=oe(()=>{const{value:x}=o;return x?e.tmNode.key===x.key:!1});function u(x){const{tmNode:R}=e;R.disabled||b(x,R)}function w(x){const{tmNode:R}=e;R.disabled||z(x,R)}function B(x){const{tmNode:R}=e,{value:L}=g;R.disabled||L||z(x,R)}return{multiple:i,isGrouped:oe(()=>{const{tmNode:x}=e,{parent:R}=x;return R&&R.rawNode.type==="group"}),showCheckmark:y,nodeProps:v,isPending:g,isSelected:oe(()=>{const{value:x}=n,{value:R}=i;if(x===null)return!1;const L=e.tmNode.rawNode[C.value];if(R){const{value:D}=l;return D.has(L)}else return x===L}),labelField:h,renderLabel:a,renderOption:d,handleMouseMove:B,handleMouseEnter:w,handleClick:u}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:i,isGrouped:l,showCheckmark:a,nodeProps:d,renderOption:h,renderLabel:C,handleClick:y,handleMouseEnter:v,handleMouseMove:b}=this,z=Ro(o,e),g=C?[C(n,o),a&&z]:[Oe(n[this.labelField],n,o),a&&z],u=d==null?void 0:d(n),w=f("div",Object.assign({},u,{class:[`${e}-base-select-option`,n.class,u==null?void 0:u.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:a}],style:[(u==null?void 0:u.style)||"",n.style||""],onClick:he([y,u==null?void 0:u.onClick]),onMouseenter:he([v,u==null?void 0:u.onMouseenter]),onMousemove:he([b,u==null?void 0:u.onMousemove])}),f("div",{class:`${e}-base-select-option__content`},g));return n.render?n.render({node:w,option:n,selected:o}):h?h({node:w,option:n,selected:o}):w}}),Ie=j({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:i}=ye(Ce);return{labelField:o,nodeProps:i,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:i,tmNode:{rawNode:l}}=this,a=i==null?void 0:i(l),d=n?n(l,!1):Oe(l[this.labelField],l,!1),h=f("div",Object.assign({},a,{class:[`${e}-base-select-group-header`,a==null?void 0:a.class]}),d);return l.render?l.render({node:h,option:l}):o?o({node:h,option:l,selected:!1}):h}}),So=H("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[H("scrollbar",`
 max-height: var(--n-height);
 `),H("virtual-list",`
 max-height: var(--n-height);
 `),H("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[_("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),H("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),H("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),_("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),_("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),_("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),H("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),H("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[O("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),V("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),V("&:active",`
 color: var(--n-option-text-color-pressed);
 `),O("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),O("pending",[V("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),O("selected",`
 color: var(--n-option-text-color-active);
 `,[V("&::before",`
 background-color: var(--n-option-color-active);
 `),O("pending",[V("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),O("disabled",`
 cursor: not-allowed;
 `,[Z("selected",`
 color: var(--n-option-text-color-disabled);
 `),O("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),_("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[eo({enterScale:"0.5"})])])]),No=j({name:"InternalSelectMenu",props:Object.assign(Object.assign({},q.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=q("InternalSelectMenu","-internal-select-menu",So,oo,e,$(e,"clsPrefix")),o=E(null),i=E(null),l=E(null),a=I(()=>e.treeMate.getFlattenedNodes()),d=I(()=>ho(a.value)),h=E(null);function C(){const{treeMate:t}=e;let s=null;const{value:k}=e;k===null?s=t.getFirstAvailableNode():(e.multiple?s=t.getNode((k||[])[(k||[]).length-1]):s=t.getNode(k),(!s||s.disabled)&&(s=t.getFirstAvailableNode())),r(s||null)}function y(){const{value:t}=h;t&&!e.treeMate.getNode(t.key)&&(h.value=null)}let v;we(()=>e.show,t=>{t?v=we(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?C():y(),lo(c)):y()},{immediate:!0}):v==null||v()},{immediate:!0}),Be(()=>{v==null||v()});const b=I(()=>ge(n.value.self[P("optionHeight",e.size)])),z=I(()=>fe(n.value.self[P("padding",e.size)])),g=I(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),u=I(()=>{const t=a.value;return t&&t.length===0});function w(t){const{onToggle:s}=e;s&&s(t)}function B(t){const{onScroll:s}=e;s&&s(t)}function x(t){var s;(s=l.value)===null||s===void 0||s.sync(),B(t)}function R(){var t;(t=l.value)===null||t===void 0||t.sync()}function L(){const{value:t}=h;return t||null}function D(t,s){s.disabled||r(s,!1)}function K(t,s){s.disabled||w(s)}function G(t){var s;Se(t,"action")||(s=e.onKeyup)===null||s===void 0||s.call(e,t)}function Y(t){var s;Se(t,"action")||(s=e.onKeydown)===null||s===void 0||s.call(e,t)}function X(t){var s;(s=e.onMousedown)===null||s===void 0||s.call(e,t),!e.focusable&&t.preventDefault()}function W(){const{value:t}=h;t&&r(t.getNext({loop:!0}),!0)}function U(){const{value:t}=h;t&&r(t.getPrev({loop:!0}),!0)}function r(t,s=!1){h.value=t,s&&c()}function c(){var t,s;const k=h.value;if(!k)return;const N=d.value(k.key);N!==null&&(e.virtualScroll?(t=i.value)===null||t===void 0||t.scrollTo({index:N}):(s=l.value)===null||s===void 0||s.scrollTo({index:N,elSize:b.value}))}function p(t){var s,k;!((s=o.value)===null||s===void 0)&&s.contains(t.target)&&((k=e.onFocus)===null||k===void 0||k.call(e,t))}function S(t){var s,k;!((s=o.value)===null||s===void 0)&&s.contains(t.relatedTarget)||(k=e.onBlur)===null||k===void 0||k.call(e,t)}be(Ce,{handleOptionMouseEnter:D,handleOptionClick:K,valueSetRef:g,pendingTmNodeRef:h,nodePropsRef:$(e,"nodeProps"),showCheckmarkRef:$(e,"showCheckmark"),multipleRef:$(e,"multiple"),valueRef:$(e,"value"),renderLabelRef:$(e,"renderLabel"),renderOptionRef:$(e,"renderOption"),labelFieldRef:$(e,"labelField"),valueFieldRef:$(e,"valueField")}),be(ro,o),me(()=>{const{value:t}=l;t&&t.sync()});const T=I(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:s},self:{height:k,borderRadius:N,color:A,groupHeaderTextColor:te,actionDividerColor:ie,optionTextColorPressed:le,optionTextColor:Q,optionTextColorDisabled:re,optionTextColorActive:se,optionOpacityDisabled:ae,optionCheckColor:ce,actionTextColor:Le,optionColorPending:$e,optionColorActive:He,loadingColor:Ee,loadingSize:Ve,optionColorActivePending:je,[P("optionFontSize",t)]:De,[P("optionHeight",t)]:Ae,[P("optionPadding",t)]:de}}=n.value;return{"--n-height":k,"--n-action-divider-color":ie,"--n-action-text-color":Le,"--n-bezier":s,"--n-border-radius":N,"--n-color":A,"--n-option-font-size":De,"--n-group-header-text-color":te,"--n-option-check-color":ce,"--n-option-color-pending":$e,"--n-option-color-active":He,"--n-option-color-active-pending":je,"--n-option-height":Ae,"--n-option-opacity-disabled":ae,"--n-option-text-color":Q,"--n-option-text-color-active":se,"--n-option-text-color-disabled":re,"--n-option-text-color-pressed":le,"--n-option-padding":de,"--n-option-padding-left":fe(de,"left"),"--n-option-padding-right":fe(de,"right"),"--n-loading-color":Ee,"--n-loading-size":Ve}}),{inlineThemeDisabled:M}=e,m=M?xe("internal-select-menu",I(()=>e.size[0]),T,e):void 0,F={selfRef:o,next:W,prev:U,getPendingTmNode:L};return mo(o,e.onResize),Object.assign({mergedTheme:n,virtualListRef:i,scrollbarRef:l,itemSize:b,padding:z,flattenedNodes:a,empty:u,virtualListContainer(){const{value:t}=i;return t==null?void 0:t.listElRef},virtualListContent(){const{value:t}=i;return t==null?void 0:t.itemsElRef},doScroll:B,handleFocusin:p,handleFocusout:S,handleKeyUp:G,handleKeyDown:Y,handleMouseDown:X,handleVirtualListResize:R,handleVirtualListScroll:x,cssVars:M?void 0:T,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender},F)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:i,themeClass:l,onRender:a}=this;return a==null||a(),f("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,l,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?f("div",{class:`${o}-base-select-menu__loading`},f(no,{clsPrefix:o,strokeWidth:20})):this.empty?f("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},io(e.empty,()=>[f(wo,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):f(to,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?f(po,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:d})=>d.isGroup?f(Ie,{key:d.key,clsPrefix:o,tmNode:d}):d.ignored?null:f(Pe,{clsPrefix:o,key:d.key,tmNode:d})}):f("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(d=>d.isGroup?f(Ie,{key:d.key,clsPrefix:o,tmNode:d}):f(Pe,{clsPrefix:o,key:d.key,tmNode:d})))}),pe(e.action,d=>d&&[f("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},d),f(Co,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),To={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Mo=H("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[O("strong",`
 font-weight: var(--n-font-weight-strong);
 `),_("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),_("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),_("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),_("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),O("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[_("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),_("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),O("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),O("icon, avatar",[O("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),O("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),O("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Z("disabled",[V("&:hover","background-color: var(--n-color-hover-checkable);",[Z("checked","color: var(--n-text-color-hover-checkable);")]),V("&:active","background-color: var(--n-color-pressed-checkable);",[Z("checked","color: var(--n-text-color-pressed-checkable);")])]),O("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Z("disabled",[V("&:hover","background-color: var(--n-color-checked-hover);"),V("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Po=Object.assign(Object.assign(Object.assign({},q.props),To),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Io=co("n-tag"),Oo=j({name:"Tag",props:Po,setup(e){const n=E(null),{mergedBorderedRef:o,mergedClsPrefixRef:i,inlineThemeDisabled:l,mergedRtlRef:a}=Fe(e),d=q("Tag","-tag",Mo,uo,e,i);be(Io,{roundRef:$(e,"round")});function h(g){if(!e.disabled&&e.checkable){const{checked:u,onCheckedChange:w,onUpdateChecked:B,"onUpdate:checked":x}=e;B&&B(!u),x&&x(!u),w&&w(!u)}}function C(g){if(e.triggerClickOnClose||g.stopPropagation(),!e.disabled){const{onClose:u}=e;u&&fo(u,g)}}const y={setTextContent(g){const{value:u}=n;u&&(u.textContent=g)}},v=so("Tag",a,i),b=I(()=>{const{type:g,size:u,color:{color:w,textColor:B}={}}=e,{common:{cubicBezierEaseInOut:x},self:{padding:R,closeMargin:L,closeMarginRtl:D,borderRadius:K,opacityDisabled:G,textColorCheckable:Y,textColorHoverCheckable:X,textColorPressedCheckable:W,textColorChecked:U,colorCheckable:r,colorHoverCheckable:c,colorPressedCheckable:p,colorChecked:S,colorCheckedHover:T,colorCheckedPressed:M,closeBorderRadius:m,fontWeightStrong:F,[P("colorBordered",g)]:t,[P("closeSize",u)]:s,[P("closeIconSize",u)]:k,[P("fontSize",u)]:N,[P("height",u)]:A,[P("color",g)]:te,[P("textColor",g)]:ie,[P("border",g)]:le,[P("closeIconColor",g)]:Q,[P("closeIconColorHover",g)]:re,[P("closeIconColorPressed",g)]:se,[P("closeColorHover",g)]:ae,[P("closeColorPressed",g)]:ce}}=d.value;return{"--n-font-weight-strong":F,"--n-avatar-size-override":`calc(${A} - 8px)`,"--n-bezier":x,"--n-border-radius":K,"--n-border":le,"--n-close-icon-size":k,"--n-close-color-pressed":ce,"--n-close-color-hover":ae,"--n-close-border-radius":m,"--n-close-icon-color":Q,"--n-close-icon-color-hover":re,"--n-close-icon-color-pressed":se,"--n-close-icon-color-disabled":Q,"--n-close-margin":L,"--n-close-margin-rtl":D,"--n-close-size":s,"--n-color":w||(o.value?t:te),"--n-color-checkable":r,"--n-color-checked":S,"--n-color-checked-hover":T,"--n-color-checked-pressed":M,"--n-color-hover-checkable":c,"--n-color-pressed-checkable":p,"--n-font-size":N,"--n-height":A,"--n-opacity-disabled":G,"--n-padding":R,"--n-text-color":B||ie,"--n-text-color-checkable":Y,"--n-text-color-checked":U,"--n-text-color-hover-checkable":X,"--n-text-color-pressed-checkable":W}}),z=l?xe("tag",I(()=>{let g="";const{type:u,size:w,color:{color:B,textColor:x}={}}=e;return g+=u[0],g+=w[0],B&&(g+=`a${Re(B)}`),x&&(g+=`b${Re(x)}`),o.value&&(g+="c"),g}),b,e):void 0;return Object.assign(Object.assign({},y),{rtlEnabled:v,mergedClsPrefix:i,contentRef:n,mergedBordered:o,handleClick:h,handleCloseClick:C,cssVars:l?void 0:b,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender})},render(){var e,n;const{mergedClsPrefix:o,rtlEnabled:i,closable:l,color:{borderColor:a}={},round:d,onRender:h,$slots:C}=this;h==null||h();const y=pe(C.avatar,b=>b&&f("div",{class:`${o}-tag__avatar`},b)),v=pe(C.icon,b=>b&&f("div",{class:`${o}-tag__icon`},b));return f("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:i,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:d,[`${o}-tag--avatar`]:y,[`${o}-tag--icon`]:v,[`${o}-tag--closable`]:l}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},v||y,f("span",{class:`${o}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&l?f(ao,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:d,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?f("div",{class:`${o}-tag__border`,style:{borderColor:a}}):null)}});function ne(e){return e.type==="group"}function _e(e){return e.type==="ignored"}function _o(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Lo(e,n){return{getIsGroup:ne,getIgnored:_e,getKey(i){return ne(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[n]}}}function $o(e,n,o,i){if(!n)return e;function l(a){if(!Array.isArray(a))return[];const d=[];for(const h of a)if(ne(h)){const C=l(h[i]);C.length&&d.push(Object.assign({},h,{[i]:C}))}else{if(_e(h))continue;n(o,h)&&d.push(h)}return d}return l(e)}function Ho(e,n,o){const i=new Map;return e.forEach(l=>{ne(l)?l[o].forEach(a=>{i.set(a[n],a)}):i.set(l[n],l)}),i}export{No as N,po as V,Oo as a,Ho as b,Lo as c,wo as d,$o as f,he as m,_o as p,Io as t,mo as u};
