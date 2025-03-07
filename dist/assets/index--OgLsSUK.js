(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ka(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const st={},qi=[],vn=()=>{},Of=()=>!1,Bs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ga=n=>n.startsWith("onUpdate:"),Ut=Object.assign,Wa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Bf=Object.prototype.hasOwnProperty,Je=(n,e)=>Bf.call(n,e),Be=Array.isArray,Yi=n=>Hs(n)==="[object Map]",qc=n=>Hs(n)==="[object Set]",Ve=n=>typeof n=="function",gt=n=>typeof n=="string",ii=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",Yc=n=>(at(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),Kc=Object.prototype.toString,Hs=n=>Kc.call(n),Hf=n=>Hs(n).slice(8,-1),Zc=n=>Hs(n)==="[object Object]",Xa=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ar=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zf=/-(\w)/g,$t=zs(n=>n.replace(zf,(e,t)=>t?t.toUpperCase():"")),Vf=/\B([A-Z])/g,wi=zs(n=>n.replace(Vf,"-$1").toLowerCase()),Vs=zs(n=>n.charAt(0).toUpperCase()+n.slice(1)),eo=zs(n=>n?`on${Vs(n)}`:""),yi=(n,e)=>!Object.is(n,e),to=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Jc=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},kf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Al;const ks=()=>Al||(Al=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ja(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=gt(i)?jf(i):ja(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(gt(n)||at(n))return n}const Gf=/;(?![^(]*\))/g,Wf=/:([^]+)/,Xf=/\/\*[^]*?\*\//g;function jf(n){const e={};return n.replace(Xf,"").split(Gf).forEach(t=>{if(t){const i=t.split(Wf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qa(n){let e="";if(gt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=qa(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const qf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yf=ka(qf);function Qc(n){return!!n||n===""}const $c=n=>!!(n&&n.__v_isRef===!0),pn=n=>gt(n)?n:n==null?"":Be(n)||at(n)&&(n.toString===Kc||!Ve(n.toString))?$c(n)?pn(n.value):JSON.stringify(n,eu,2):String(n),eu=(n,e)=>$c(e)?eu(n,e.value):Yi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[no(i,s)+" =>"]=r,t),{})}:qc(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>no(t))}:ii(e)?no(e):at(e)&&!Be(e)&&!Zc(e)?String(e):e,no=(n,e="")=>{var t;return ii(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class Kf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Xt;try{return Xt=this,e()}finally{Xt=t}}}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Zf(){return Xt}let rt;const io=new WeakSet;class tu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&Xt.active&&Xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,io.has(this)&&(io.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||iu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ml(this),ru(this);const e=rt,t=cn;rt=this,cn=!0;try{return this.fn()}finally{su(this),rt=e,cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Za(e);this.deps=this.depsTail=void 0,Ml(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?io.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ko(this)&&this.run()}get dirty(){return ko(this)}}let nu=0,Mr,yr;function iu(n,e=!1){if(n.flags|=8,e){n.next=yr,yr=n;return}n.next=Mr,Mr=n}function Ya(){nu++}function Ka(){if(--nu>0)return;if(yr){let e=yr;for(yr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Mr;){let e=Mr;for(Mr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ru(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function su(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Za(i),Jf(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ko(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ou(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ou(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===wr))return;n.globalVersion=wr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ko(n)){n.flags&=-3;return}const t=rt,i=cn;rt=n,cn=!0;try{ru(n);const r=n.fn(n._value);(e.version===0||yi(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{rt=t,cn=i,su(n),n.flags&=-3}}function Za(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Za(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Jf(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let cn=!0;const au=[];function ri(){au.push(cn),cn=!1}function si(){const n=au.pop();cn=n===void 0?!0:n}function Ml(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=rt;rt=void 0;try{e()}finally{rt=t}}}let wr=0;class Qf{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!rt||!cn||rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==rt)t=this.activeLink=new Qf(rt,this),rt.deps?(t.prevDep=rt.depsTail,rt.depsTail.nextDep=t,rt.depsTail=t):rt.deps=rt.depsTail=t,cu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=rt.depsTail,t.nextDep=void 0,rt.depsTail.nextDep=t,rt.depsTail=t,rt.deps===t&&(rt.deps=i)}return t}trigger(e){this.version++,wr++,this.notify(e)}notify(e){Ya();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ka()}}}function cu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)cu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Go=new WeakMap,Ti=Symbol(""),Wo=Symbol(""),Cr=Symbol("");function Rt(n,e,t){if(cn&&rt){let i=Go.get(n);i||Go.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new lu),r.map=i,r.key=t),r.track()}}function In(n,e,t,i,r,s){const o=Go.get(n);if(!o){wr++;return}const a=l=>{l&&l.trigger()};if(Ya(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&Xa(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Cr||!ii(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Cr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ti)),Yi(n)&&a(o.get(Wo)));break;case"delete":l||(a(o.get(Ti)),Yi(n)&&a(o.get(Wo)));break;case"set":Yi(n)&&a(o.get(Ti));break}}Ka()}function Ii(n){const e=tt(n);return e===n?e:(Rt(e,"iterate",Cr),un(n)?e:e.map(Ot))}function Gs(n){return Rt(n=tt(n),"iterate",Cr),n}const $f={__proto__:null,[Symbol.iterator](){return ro(this,Symbol.iterator,Ot)},concat(...n){return Ii(this).concat(...n.map(e=>Be(e)?Ii(e):e))},entries(){return ro(this,"entries",n=>(n[1]=Ot(n[1]),n))},every(n,e){return An(this,"every",n,e,void 0,arguments)},filter(n,e){return An(this,"filter",n,e,t=>t.map(Ot),arguments)},find(n,e){return An(this,"find",n,e,Ot,arguments)},findIndex(n,e){return An(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return An(this,"findLast",n,e,Ot,arguments)},findLastIndex(n,e){return An(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return An(this,"forEach",n,e,void 0,arguments)},includes(...n){return so(this,"includes",n)},indexOf(...n){return so(this,"indexOf",n)},join(n){return Ii(this).join(n)},lastIndexOf(...n){return so(this,"lastIndexOf",n)},map(n,e){return An(this,"map",n,e,void 0,arguments)},pop(){return hr(this,"pop")},push(...n){return hr(this,"push",n)},reduce(n,...e){return yl(this,"reduce",n,e)},reduceRight(n,...e){return yl(this,"reduceRight",n,e)},shift(){return hr(this,"shift")},some(n,e){return An(this,"some",n,e,void 0,arguments)},splice(...n){return hr(this,"splice",n)},toReversed(){return Ii(this).toReversed()},toSorted(n){return Ii(this).toSorted(n)},toSpliced(...n){return Ii(this).toSpliced(...n)},unshift(...n){return hr(this,"unshift",n)},values(){return ro(this,"values",Ot)}};function ro(n,e,t){const i=Gs(n),r=i[e]();return i!==n&&!un(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const ed=Array.prototype;function An(n,e,t,i,r,s){const o=Gs(n),a=o!==n&&!un(n),l=o[e];if(l!==ed[e]){const f=l.apply(n,s);return a?Ot(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Ot(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function yl(n,e,t,i){const r=Gs(n);let s=t;return r!==n&&(un(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ot(a),l,n)}),r[e](s,...i)}function so(n,e,t){const i=tt(n);Rt(i,"iterate",Cr);const r=i[e](...t);return(r===-1||r===!1)&&el(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function hr(n,e,t=[]){ri(),Ya();const i=tt(n)[e].apply(n,t);return Ka(),si(),i}const td=ka("__proto__,__v_isRef,__isVue"),uu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ii));function nd(n){ii(n)||(n=String(n));const e=tt(this);return Rt(e,"has",n),e.hasOwnProperty(n)}class fu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?dd:mu:s?pu:hu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!r){let l;if(o&&(l=$f[t]))return l;if(t==="hasOwnProperty")return nd}const a=Reflect.get(e,t,Dt(e)?e:i);return(ii(t)?uu.has(t):td(t))||(r||Rt(e,"get",t),s)?a:Dt(a)?o&&Xa(t)?a:a.value:at(a)?r?gu(a):Qa(a):a}}class du extends fu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=tr(s);if(!un(i)&&!tr(i)&&(s=tt(s),i=tt(i)),!Be(e)&&Dt(s)&&!Dt(i))return l?!1:(s.value=i,!0)}const o=Be(e)&&Xa(t)?Number(t)<e.length:Je(e,t),a=Reflect.set(e,t,i,Dt(e)?e:r);return e===tt(r)&&(o?yi(i,s)&&In(e,"set",t,i):In(e,"add",t,i)),a}deleteProperty(e,t){const i=Je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&In(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ii(t)||!uu.has(t))&&Rt(e,"has",t),i}ownKeys(e){return Rt(e,"iterate",Be(e)?"length":Ti),Reflect.ownKeys(e)}}class id extends fu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const rd=new du,sd=new id,od=new du(!0);const Xo=n=>n,Xr=n=>Reflect.getPrototypeOf(n);function ad(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=Yi(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Xo:e?jo:Ot;return!e&&Rt(s,"iterate",l?Wo:Ti),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function jr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ld(n,e){const t={get(r){const s=this.__v_raw,o=tt(s),a=tt(r);n||(yi(r,a)&&Rt(o,"get",r),Rt(o,"get",a));const{has:l}=Xr(o),c=e?Xo:n?jo:Ot;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Rt(tt(r),"iterate",Ti),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=tt(s),a=tt(r);return n||(yi(r,a)&&Rt(o,"has",r),Rt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=tt(a),c=e?Xo:n?jo:Ot;return!n&&Rt(l,"iterate",Ti),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ut(t,n?{add:jr("add"),set:jr("set"),delete:jr("delete"),clear:jr("clear")}:{add(r){!e&&!un(r)&&!tr(r)&&(r=tt(r));const s=tt(this);return Xr(s).has.call(s,r)||(s.add(r),In(s,"add",r,r)),this},set(r,s){!e&&!un(s)&&!tr(s)&&(s=tt(s));const o=tt(this),{has:a,get:l}=Xr(o);let c=a.call(o,r);c||(r=tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?yi(s,u)&&In(o,"set",r,s):In(o,"add",r,s),this},delete(r){const s=tt(this),{has:o,get:a}=Xr(s);let l=o.call(s,r);l||(r=tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&In(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,o=r.clear();return s&&In(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ad(r,n,e)}),t}function Ja(n,e){const t=ld(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Je(t,r)&&r in i?t:i,r,s)}const cd={get:Ja(!1,!1)},ud={get:Ja(!1,!0)},fd={get:Ja(!0,!1)};const hu=new WeakMap,pu=new WeakMap,mu=new WeakMap,dd=new WeakMap;function hd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pd(n){return n.__v_skip||!Object.isExtensible(n)?0:hd(Hf(n))}function Qa(n){return tr(n)?n:$a(n,!1,rd,cd,hu)}function md(n){return $a(n,!1,od,ud,pu)}function gu(n){return $a(n,!0,sd,fd,mu)}function $a(n,e,t,i,r){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=pd(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Ki(n){return tr(n)?Ki(n.__v_raw):!!(n&&n.__v_isReactive)}function tr(n){return!!(n&&n.__v_isReadonly)}function un(n){return!!(n&&n.__v_isShallow)}function el(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function gd(n){return!Je(n,"__v_skip")&&Object.isExtensible(n)&&Jc(n,"__v_skip",!0),n}const Ot=n=>at(n)?Qa(n):n,jo=n=>at(n)?gu(n):n;function Dt(n){return n?n.__v_isRef===!0:!1}function _d(n){return Dt(n)?n.value:n}const vd={get:(n,e,t)=>e==="__v_raw"?n:_d(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Dt(r)&&!Dt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _u(n){return Ki(n)?n:new Proxy(n,vd)}class xd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return iu(this,!0),!0}get value(){const e=this.dep.track();return ou(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ed(n,e,t=!1){let i,r;return Ve(n)?i=n:(i=n.get,r=n.set),new xd(i,r,t)}const qr={},ws=new WeakMap;let gi;function Sd(n,e=!1,t=gi){if(t){let i=ws.get(t);i||ws.set(t,i=[]),i.push(n)}}function Ad(n,e,t=st){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=M=>r?M:un(M)||r===!1||r===0?Zn(M,1):Zn(M);let u,f,h,p,v=!1,S=!1;if(Dt(n)?(f=()=>n.value,v=un(n)):Ki(n)?(f=()=>c(n),v=!0):Be(n)?(S=!0,v=n.some(M=>Ki(M)||un(M)),f=()=>n.map(M=>{if(Dt(M))return M.value;if(Ki(M))return c(M);if(Ve(M))return l?l(M,2):M()})):Ve(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ri();try{h()}finally{si()}}const M=gi;gi=u;try{return l?l(n,3,[p]):n(p)}finally{gi=M}}:f=vn,e&&r){const M=f,U=r===!0?1/0:r;f=()=>Zn(M(),U)}const m=Zf(),d=()=>{u.stop(),m&&m.active&&Wa(m.effects,u)};if(s&&e){const M=e;e=(...U)=>{M(...U),d()}}let w=S?new Array(n.length).fill(qr):qr;const b=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const U=u.run();if(r||v||(S?U.some((L,I)=>yi(L,w[I])):yi(U,w))){h&&h();const L=gi;gi=u;try{const I=[U,w===qr?void 0:S&&w[0]===qr?[]:w,p];l?l(e,3,I):e(...I),w=U}finally{gi=L}}}else u.run()};return a&&a(b),u=new tu(f),u.scheduler=o?()=>o(b,!1):b,p=M=>Sd(M,!1,u),h=u.onStop=()=>{const M=ws.get(u);if(M){if(l)l(M,4);else for(const U of M)U();ws.delete(u)}},e?i?b(!0):w=u.run():o?o(b.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Zn(n,e=1/0,t){if(e<=0||!at(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Dt(n))Zn(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)Zn(n[i],e,t);else if(qc(n)||Yi(n))n.forEach(i=>{Zn(i,e,t)});else if(Zc(n)){for(const i in n)Zn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Zn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nr(n,e,t,i){try{return i?n(...i):n()}catch(r){Ws(r,e,t)}}function En(n,e,t,i){if(Ve(n)){const r=Nr(n,e,t,i);return r&&Yc(r)&&r.catch(s=>{Ws(s,e,t)}),r}if(Be(n)){const r=[];for(let s=0;s<n.length;s++)r.push(En(n[s],e,t,i));return r}}function Ws(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||st;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ri(),Nr(s,null,10,[n,l,c]),si();return}}Md(n,t,r,i,o)}function Md(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Lt=[];let hn=-1;const Zi=[];let Yn=null,Xi=0;const vu=Promise.resolve();let Cs=null;function yd(n){const e=Cs||vu;return n?e.then(this?n.bind(this):n):e}function Td(n){let e=hn+1,t=Lt.length;for(;e<t;){const i=e+t>>>1,r=Lt[i],s=Ir(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function tl(n){if(!(n.flags&1)){const e=Ir(n),t=Lt[Lt.length-1];!t||!(n.flags&2)&&e>=Ir(t)?Lt.push(n):Lt.splice(Td(e),0,n),n.flags|=1,xu()}}function xu(){Cs||(Cs=vu.then(Su))}function bd(n){Be(n)?Zi.push(...n):Yn&&n.id===-1?Yn.splice(Xi+1,0,n):n.flags&1||(Zi.push(n),n.flags|=1),xu()}function Tl(n,e,t=hn+1){for(;t<Lt.length;t++){const i=Lt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Lt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Eu(n){if(Zi.length){const e=[...new Set(Zi)].sort((t,i)=>Ir(t)-Ir(i));if(Zi.length=0,Yn){Yn.push(...e);return}for(Yn=e,Xi=0;Xi<Yn.length;Xi++){const t=Yn[Xi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Yn=null,Xi=0}}const Ir=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Su(n){try{for(hn=0;hn<Lt.length;hn++){const e=Lt[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Nr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<Lt.length;hn++){const e=Lt[hn];e&&(e.flags&=-2)}hn=-1,Lt.length=0,Eu(),Cs=null,(Lt.length||Zi.length)&&Su()}}let an=null,Au=null;function Is(n){const e=an;return an=n,Au=n&&n.type.__scopeId||null,e}function Rd(n,e=an,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Nl(-1);const s=Is(e);let o;try{o=n(...r)}finally{Is(s),i._d&&Nl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function li(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ri(),En(l,t,8,[n.el,a,n,e]),si())}}const wd=Symbol("_vte"),Cd=n=>n.__isTeleport;function nl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,nl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Mu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ps(n,e,t,i,r=!1){if(Be(n)){n.forEach((v,S)=>Ps(v,e&&(Be(e)?e[S]:e),t,i,r));return}if(Tr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ps(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?sl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,f=a.setupState,h=tt(f),p=f===st?()=>!1:v=>Je(h,v);if(c!=null&&c!==l&&(gt(c)?(u[c]=null,p(c)&&(f[c]=null)):Dt(c)&&(c.value=null)),Ve(l))Nr(l,a,12,[o,u]);else{const v=gt(l),S=Dt(l);if(v||S){const m=()=>{if(n.f){const d=v?p(l)?f[l]:u[l]:l.value;r?Be(d)&&Wa(d,s):Be(d)?d.includes(s)||d.push(s):v?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else v?(u[l]=o,p(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Wt(m,t)):m()}}}ks().requestIdleCallback;ks().cancelIdleCallback;const Tr=n=>!!n.type.__asyncLoader,yu=n=>n.type.__isKeepAlive;function Id(n,e){Tu(n,"a",e)}function Pd(n,e){Tu(n,"da",e)}function Tu(n,e,t=wt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Xs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)yu(r.parent.vnode)&&Ld(i,e,t,r),r=r.parent}}function Ld(n,e,t,i){const r=Xs(e,n,i,!0);bu(()=>{Wa(i[e],r)},t)}function Xs(n,e,t=wt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ri();const a=Fr(t),l=En(e,t,n,o);return a(),si(),l});return i?r.unshift(s):r.push(s),s}}const Bn=n=>(e,t=wt)=>{(!Dr||n==="sp")&&Xs(n,(...i)=>e(...i),t)},Dd=Bn("bm"),Ud=Bn("m"),Nd=Bn("bu"),Fd=Bn("u"),Od=Bn("bum"),bu=Bn("um"),Bd=Bn("sp"),Hd=Bn("rtg"),zd=Bn("rtc");function Vd(n,e=wt){Xs("ec",n,e)}const kd="components";function Vn(n,e){return Wd(kd,n,!0,e)||n}const Gd=Symbol.for("v-ndc");function Wd(n,e,t=!0,i=!1){const r=an||wt;if(r){const s=r.type;{const a=Lh(s,!1);if(a&&(a===e||a===$t(e)||a===Vs($t(e))))return s}const o=bl(r[n]||s[n],e)||bl(r.appContext[n],e);return!o&&i?s:o}}function bl(n,e){return n&&(n[e]||n[$t(e)]||n[Vs($t(e))])}function Ls(n,e,t,i){let r;const s=t,o=Be(n);if(o||gt(n)){const a=o&&Ki(n);let l=!1;a&&(l=!un(n),n=Gs(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?Ot(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(at(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const qo=n=>n?Yu(n)?sl(n):qo(n.parent):null,br=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>qo(n.parent),$root:n=>qo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>wu(n),$forceUpdate:n=>n.f||(n.f=()=>{tl(n.update)}),$nextTick:n=>n.n||(n.n=yd.bind(n.proxy)),$watch:n=>dh.bind(n)}),oo=(n,e)=>n!==st&&!n.__isScriptSetup&&Je(n,e),Xd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(oo(i,e))return o[e]=1,i[e];if(r!==st&&Je(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Je(c,e))return o[e]=3,s[e];if(t!==st&&Je(t,e))return o[e]=4,t[e];Yo&&(o[e]=0)}}const u=br[e];let f,h;if(u)return e==="$attrs"&&Rt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==st&&Je(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Je(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return oo(r,e)?(r[e]=t,!0):i!==st&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==st&&Je(n,o)||oo(e,o)||(a=s[0])&&Je(a,o)||Je(i,o)||Je(br,o)||Je(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Rl(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Yo=!0;function jd(n){const e=wu(n),t=n.proxy,i=n.ctx;Yo=!1,e.beforeCreate&&wl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:S,deactivated:m,beforeDestroy:d,beforeUnmount:w,destroyed:b,unmounted:M,render:U,renderTracked:L,renderTriggered:I,errorCaptured:O,serverPrefetch:y,expose:A,inheritAttrs:P,components:$,directives:j,filters:ne}=e;if(c&&qd(c,i,null),o)for(const Q in o){const H=o[Q];Ve(H)&&(i[Q]=H.bind(t))}if(r){const Q=r.call(t,t);at(Q)&&(n.data=Qa(Q))}if(Yo=!0,s)for(const Q in s){const H=s[Q],fe=Ve(H)?H.bind(t,t):Ve(H.get)?H.get.bind(t,t):vn,Ee=!Ve(H)&&Ve(H.set)?H.set.bind(t):vn,Te=Uh({get:fe,set:Ee});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Pe=>Te.value=Pe})}if(a)for(const Q in a)Ru(a[Q],i,t,Q);if(l){const Q=Ve(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(H=>{$d(H,Q[H])})}u&&wl(u,n,"c");function J(Q,H){Be(H)?H.forEach(fe=>Q(fe.bind(t))):H&&Q(H.bind(t))}if(J(Dd,f),J(Ud,h),J(Nd,p),J(Fd,v),J(Id,S),J(Pd,m),J(Vd,O),J(zd,L),J(Hd,I),J(Od,w),J(bu,M),J(Bd,y),Be(A))if(A.length){const Q=n.exposed||(n.exposed={});A.forEach(H=>{Object.defineProperty(Q,H,{get:()=>t[H],set:fe=>t[H]=fe})})}else n.exposed||(n.exposed={});U&&n.render===vn&&(n.render=U),P!=null&&(n.inheritAttrs=P),$&&(n.components=$),j&&(n.directives=j),y&&Mu(n)}function qd(n,e,t=vn){Be(n)&&(n=Ko(n));for(const i in n){const r=n[i];let s;at(r)?"default"in r?s=vs(r.from||i,r.default,!0):s=vs(r.from||i):s=vs(r),Dt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function wl(n,e,t){En(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ru(n,e,t,i){let r=i.includes(".")?ku(t,i):()=>t[i];if(gt(n)){const s=e[n];Ve(s)&&lo(r,s)}else if(Ve(n))lo(r,n.bind(t));else if(at(n))if(Be(n))n.forEach(s=>Ru(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&lo(r,s,n)}}function wu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ds(l,c,o,!0)),Ds(l,e,o)),at(e)&&s.set(e,l),l}function Ds(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ds(n,s,t,!0),r&&r.forEach(o=>Ds(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Yd[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Yd={data:Cl,props:Il,emits:Il,methods:Er,computed:Er,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Er,directives:Er,watch:Zd,provide:Cl,inject:Kd};function Cl(n,e){return e?n?function(){return Ut(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function Kd(n,e){return Er(Ko(n),Ko(e))}function Ko(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function Er(n,e){return n?Ut(Object.create(null),n,e):e}function Il(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Ut(Object.create(null),Rl(n),Rl(e??{})):e}function Zd(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const i in e)t[i]=It(n[i],e[i]);return t}function Cu(){return{app:null,config:{isNativeTag:Of,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jd=0;function Qd(n,e){return function(i,r=null){Ve(i)||(i=Ut({},i)),r!=null&&!at(r)&&(r=null);const s=Cu(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Jd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Nh,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...f)):Ve(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||bt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,sl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(En(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Ji;Ji=c;try{return u()}finally{Ji=f}}};return c}}let Ji=null;function $d(n,e){if(wt){let t=wt.provides;const i=wt.parent&&wt.parent.provides;i===t&&(t=wt.provides=Object.create(i)),t[n]=e}}function vs(n,e,t=!1){const i=wt||an;if(i||Ji){const r=Ji?Ji._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const Iu={},Pu=()=>Object.create(Iu),Lu=n=>Object.getPrototypeOf(n)===Iu;function eh(n,e,t,i=!1){const r={},s=Pu();n.propsDefaults=Object.create(null),Du(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:md(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function th(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(js(n.emitsOptions,h))continue;const p=e[h];if(l)if(Je(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=$t(h);r[v]=Zo(l,a,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Du(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Je(e,f)&&((u=wi(f))===f||!Je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Zo(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Je(e,f))&&(delete s[f],c=!0)}c&&In(n.attrs,"set","")}function Du(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ar(l))continue;const c=e[l];let u;r&&Je(r,u=$t(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:js(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||st;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Zo(r,l,f,c[f],n,!Je(c,f))}}return o}function Zo(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Fr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===wi(t))&&(i=!0))}return i}const nh=new WeakMap;function Uu(n,e,t=!1){const i=t?nh:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[h,p]=Uu(f,e,!0);Ut(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return at(n)&&i.set(n,qi),qi;if(Be(s))for(let u=0;u<s.length;u++){const f=$t(s[u]);Pl(f)&&(o[f]=st)}else if(s)for(const u in s){const f=$t(u);if(Pl(f)){const h=s[u],p=o[f]=Be(h)||Ve(h)?{type:h}:Ut({},h),v=p.type;let S=!1,m=!0;if(Be(v))for(let d=0;d<v.length;++d){const w=v[d],b=Ve(w)&&w.name;if(b==="Boolean"){S=!0;break}else b==="String"&&(m=!1)}else S=Ve(v)&&v.name==="Boolean";p[0]=S,p[1]=m,(S||Je(p,"default"))&&a.push(f)}}const c=[o,a];return at(n)&&i.set(n,c),c}function Pl(n){return n[0]!=="$"&&!Ar(n)}const Nu=n=>n[0]==="_"||n==="$stable",il=n=>Be(n)?n.map(mn):[mn(n)],ih=(n,e,t)=>{if(e._n)return e;const i=Rd((...r)=>il(e(...r)),t);return i._c=!1,i},Fu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Nu(r))continue;const s=n[r];if(Ve(s))e[r]=ih(r,s,i);else if(s!=null){const o=il(s);e[r]=()=>o}}},Ou=(n,e)=>{const t=il(e);n.slots.default=()=>t},Bu=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},rh=(n,e,t)=>{const i=n.slots=Pu();if(n.vnode.shapeFlag&32){const r=e._;r?(Bu(i,e,t),t&&Jc(i,"_",r,!0)):Fu(e,i)}else e&&Ou(n,e)},sh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=st;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Bu(r,e,t):(s=!e.$stable,Fu(e,r)),o=e}else e&&(Ou(n,e),o={default:1});if(s)for(const a in r)!Nu(a)&&o[a]==null&&delete r[a]},Wt=xh;function oh(n){return ah(n)}function ah(n,e){const t=ks();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=vn,insertStaticContent:v}=n,S=(T,R,x,ie=null,q=null,Y=null,K=void 0,re=null,X=!!R.dynamicChildren)=>{if(T===R)return;T&&!pr(T,R)&&(ie=pe(T),Pe(T,q,Y,!0),T=null),R.patchFlag===-2&&(X=!1,R.dynamicChildren=null);const{type:_,ref:g,shapeFlag:C}=R;switch(_){case qs:m(T,R,x,ie);break;case Pr:d(T,R,x,ie);break;case xs:T==null&&w(R,x,ie,K);break;case jt:$(T,R,x,ie,q,Y,K,re,X);break;default:C&1?U(T,R,x,ie,q,Y,K,re,X):C&6?j(T,R,x,ie,q,Y,K,re,X):(C&64||C&128)&&_.process(T,R,x,ie,q,Y,K,re,X,we)}g!=null&&q&&Ps(g,T&&T.ref,Y,R||T,!R)},m=(T,R,x,ie)=>{if(T==null)i(R.el=a(R.children),x,ie);else{const q=R.el=T.el;R.children!==T.children&&c(q,R.children)}},d=(T,R,x,ie)=>{T==null?i(R.el=l(R.children||""),x,ie):R.el=T.el},w=(T,R,x,ie)=>{[T.el,T.anchor]=v(T.children,R,x,ie,T.el,T.anchor)},b=({el:T,anchor:R},x,ie)=>{let q;for(;T&&T!==R;)q=h(T),i(T,x,ie),T=q;i(R,x,ie)},M=({el:T,anchor:R})=>{let x;for(;T&&T!==R;)x=h(T),r(T),T=x;r(R)},U=(T,R,x,ie,q,Y,K,re,X)=>{R.type==="svg"?K="svg":R.type==="math"&&(K="mathml"),T==null?L(R,x,ie,q,Y,K,re,X):y(T,R,q,Y,K,re,X)},L=(T,R,x,ie,q,Y,K,re)=>{let X,_;const{props:g,shapeFlag:C,transition:B,dirs:k}=T;if(X=T.el=o(T.type,Y,g&&g.is,g),C&8?u(X,T.children):C&16&&O(T.children,X,null,ie,q,ao(T,Y),K,re),k&&li(T,null,ie,"created"),I(X,T,T.scopeId,K,ie),g){for(const ce in g)ce!=="value"&&!Ar(ce)&&s(X,ce,null,g[ce],Y,ie);"value"in g&&s(X,"value",null,g.value,Y),(_=g.onVnodeBeforeMount)&&dn(_,ie,T)}k&&li(T,null,ie,"beforeMount");const z=lh(q,B);z&&B.beforeEnter(X),i(X,R,x),((_=g&&g.onVnodeMounted)||z||k)&&Wt(()=>{_&&dn(_,ie,T),z&&B.enter(X),k&&li(T,null,ie,"mounted")},q)},I=(T,R,x,ie,q)=>{if(x&&p(T,x),ie)for(let Y=0;Y<ie.length;Y++)p(T,ie[Y]);if(q){let Y=q.subTree;if(R===Y||Wu(Y.type)&&(Y.ssContent===R||Y.ssFallback===R)){const K=q.vnode;I(T,K,K.scopeId,K.slotScopeIds,q.parent)}}},O=(T,R,x,ie,q,Y,K,re,X=0)=>{for(let _=X;_<T.length;_++){const g=T[_]=re?Kn(T[_]):mn(T[_]);S(null,g,R,x,ie,q,Y,K,re)}},y=(T,R,x,ie,q,Y,K)=>{const re=R.el=T.el;let{patchFlag:X,dynamicChildren:_,dirs:g}=R;X|=T.patchFlag&16;const C=T.props||st,B=R.props||st;let k;if(x&&ci(x,!1),(k=B.onVnodeBeforeUpdate)&&dn(k,x,R,T),g&&li(R,T,x,"beforeUpdate"),x&&ci(x,!0),(C.innerHTML&&B.innerHTML==null||C.textContent&&B.textContent==null)&&u(re,""),_?A(T.dynamicChildren,_,re,x,ie,ao(R,q),Y):K||H(T,R,re,null,x,ie,ao(R,q),Y,!1),X>0){if(X&16)P(re,C,B,x,q);else if(X&2&&C.class!==B.class&&s(re,"class",null,B.class,q),X&4&&s(re,"style",C.style,B.style,q),X&8){const z=R.dynamicProps;for(let ce=0;ce<z.length;ce++){const oe=z[ce],de=C[oe],Le=B[oe];(Le!==de||oe==="value")&&s(re,oe,de,Le,q,x)}}X&1&&T.children!==R.children&&u(re,R.children)}else!K&&_==null&&P(re,C,B,x,q);((k=B.onVnodeUpdated)||g)&&Wt(()=>{k&&dn(k,x,R,T),g&&li(R,T,x,"updated")},ie)},A=(T,R,x,ie,q,Y,K)=>{for(let re=0;re<R.length;re++){const X=T[re],_=R[re],g=X.el&&(X.type===jt||!pr(X,_)||X.shapeFlag&70)?f(X.el):x;S(X,_,g,null,ie,q,Y,K,!0)}},P=(T,R,x,ie,q)=>{if(R!==x){if(R!==st)for(const Y in R)!Ar(Y)&&!(Y in x)&&s(T,Y,R[Y],null,q,ie);for(const Y in x){if(Ar(Y))continue;const K=x[Y],re=R[Y];K!==re&&Y!=="value"&&s(T,Y,re,K,q,ie)}"value"in x&&s(T,"value",R.value,x.value,q)}},$=(T,R,x,ie,q,Y,K,re,X)=>{const _=R.el=T?T.el:a(""),g=R.anchor=T?T.anchor:a("");let{patchFlag:C,dynamicChildren:B,slotScopeIds:k}=R;k&&(re=re?re.concat(k):k),T==null?(i(_,x,ie),i(g,x,ie),O(R.children||[],x,g,q,Y,K,re,X)):C>0&&C&64&&B&&T.dynamicChildren?(A(T.dynamicChildren,B,x,q,Y,K,re),(R.key!=null||q&&R===q.subTree)&&Hu(T,R,!0)):H(T,R,x,g,q,Y,K,re,X)},j=(T,R,x,ie,q,Y,K,re,X)=>{R.slotScopeIds=re,T==null?R.shapeFlag&512?q.ctx.activate(R,x,ie,K,X):ne(R,x,ie,q,Y,K,X):se(T,R,X)},ne=(T,R,x,ie,q,Y,K)=>{const re=T.component=Rh(T,ie,q);if(yu(T)&&(re.ctx.renderer=we),wh(re,!1,K),re.asyncDep){if(q&&q.registerDep(re,J,K),!T.el){const X=re.subTree=bt(Pr);d(null,X,R,x)}}else J(re,T,R,x,q,Y,K)},se=(T,R,x)=>{const ie=R.component=T.component;if(_h(T,R,x))if(ie.asyncDep&&!ie.asyncResolved){Q(ie,R,x);return}else ie.next=R,ie.update();else R.el=T.el,ie.vnode=R},J=(T,R,x,ie,q,Y,K)=>{const re=()=>{if(T.isMounted){let{next:C,bu:B,u:k,parent:z,vnode:ce}=T;{const ge=zu(T);if(ge){C&&(C.el=ce.el,Q(T,C,K)),ge.asyncDep.then(()=>{T.isUnmounted||re()});return}}let oe=C,de;ci(T,!1),C?(C.el=ce.el,Q(T,C,K)):C=ce,B&&to(B),(de=C.props&&C.props.onVnodeBeforeUpdate)&&dn(de,z,C,ce),ci(T,!0);const Le=Dl(T),ae=T.subTree;T.subTree=Le,S(ae,Le,f(ae.el),pe(ae),T,q,Y),C.el=Le.el,oe===null&&vh(T,Le.el),k&&Wt(k,q),(de=C.props&&C.props.onVnodeUpdated)&&Wt(()=>dn(de,z,C,ce),q)}else{let C;const{el:B,props:k}=R,{bm:z,m:ce,parent:oe,root:de,type:Le}=T,ae=Tr(R);ci(T,!1),z&&to(z),!ae&&(C=k&&k.onVnodeBeforeMount)&&dn(C,oe,R),ci(T,!0);{de.ce&&de.ce._injectChildStyle(Le);const ge=T.subTree=Dl(T);S(null,ge,x,ie,T,q,Y),R.el=ge.el}if(ce&&Wt(ce,q),!ae&&(C=k&&k.onVnodeMounted)){const ge=R;Wt(()=>dn(C,oe,ge),q)}(R.shapeFlag&256||oe&&Tr(oe.vnode)&&oe.vnode.shapeFlag&256)&&T.a&&Wt(T.a,q),T.isMounted=!0,R=x=ie=null}};T.scope.on();const X=T.effect=new tu(re);T.scope.off();const _=T.update=X.run.bind(X),g=T.job=X.runIfDirty.bind(X);g.i=T,g.id=T.uid,X.scheduler=()=>tl(g),ci(T,!0),_()},Q=(T,R,x)=>{R.component=T;const ie=T.vnode.props;T.vnode=R,T.next=null,th(T,R.props,ie,x),sh(T,R.children,x),ri(),Tl(T),si()},H=(T,R,x,ie,q,Y,K,re,X=!1)=>{const _=T&&T.children,g=T?T.shapeFlag:0,C=R.children,{patchFlag:B,shapeFlag:k}=R;if(B>0){if(B&128){Ee(_,C,x,ie,q,Y,K,re,X);return}else if(B&256){fe(_,C,x,ie,q,Y,K,re,X);return}}k&8?(g&16&&Ae(_,q,Y),C!==_&&u(x,C)):g&16?k&16?Ee(_,C,x,ie,q,Y,K,re,X):Ae(_,q,Y,!0):(g&8&&u(x,""),k&16&&O(C,x,ie,q,Y,K,re,X))},fe=(T,R,x,ie,q,Y,K,re,X)=>{T=T||qi,R=R||qi;const _=T.length,g=R.length,C=Math.min(_,g);let B;for(B=0;B<C;B++){const k=R[B]=X?Kn(R[B]):mn(R[B]);S(T[B],k,x,null,q,Y,K,re,X)}_>g?Ae(T,q,Y,!0,!1,C):O(R,x,ie,q,Y,K,re,X,C)},Ee=(T,R,x,ie,q,Y,K,re,X)=>{let _=0;const g=R.length;let C=T.length-1,B=g-1;for(;_<=C&&_<=B;){const k=T[_],z=R[_]=X?Kn(R[_]):mn(R[_]);if(pr(k,z))S(k,z,x,null,q,Y,K,re,X);else break;_++}for(;_<=C&&_<=B;){const k=T[C],z=R[B]=X?Kn(R[B]):mn(R[B]);if(pr(k,z))S(k,z,x,null,q,Y,K,re,X);else break;C--,B--}if(_>C){if(_<=B){const k=B+1,z=k<g?R[k].el:ie;for(;_<=B;)S(null,R[_]=X?Kn(R[_]):mn(R[_]),x,z,q,Y,K,re,X),_++}}else if(_>B)for(;_<=C;)Pe(T[_],q,Y,!0),_++;else{const k=_,z=_,ce=new Map;for(_=z;_<=B;_++){const he=R[_]=X?Kn(R[_]):mn(R[_]);he.key!=null&&ce.set(he.key,_)}let oe,de=0;const Le=B-z+1;let ae=!1,ge=0;const be=new Array(Le);for(_=0;_<Le;_++)be[_]=0;for(_=k;_<=C;_++){const he=T[_];if(de>=Le){Pe(he,q,Y,!0);continue}let Ue;if(he.key!=null)Ue=ce.get(he.key);else for(oe=z;oe<=B;oe++)if(be[oe-z]===0&&pr(he,R[oe])){Ue=oe;break}Ue===void 0?Pe(he,q,Y,!0):(be[Ue-z]=_+1,Ue>=ge?ge=Ue:ae=!0,S(he,R[Ue],x,null,q,Y,K,re,X),de++)}const De=ae?ch(be):qi;for(oe=De.length-1,_=Le-1;_>=0;_--){const he=z+_,Ue=R[he],Oe=he+1<g?R[he+1].el:ie;be[_]===0?S(null,Ue,x,Oe,q,Y,K,re,X):ae&&(oe<0||_!==De[oe]?Te(Ue,x,Oe,2):oe--)}}},Te=(T,R,x,ie,q=null)=>{const{el:Y,type:K,transition:re,children:X,shapeFlag:_}=T;if(_&6){Te(T.component.subTree,R,x,ie);return}if(_&128){T.suspense.move(R,x,ie);return}if(_&64){K.move(T,R,x,we);return}if(K===jt){i(Y,R,x);for(let C=0;C<X.length;C++)Te(X[C],R,x,ie);i(T.anchor,R,x);return}if(K===xs){b(T,R,x);return}if(ie!==2&&_&1&&re)if(ie===0)re.beforeEnter(Y),i(Y,R,x),Wt(()=>re.enter(Y),q);else{const{leave:C,delayLeave:B,afterLeave:k}=re,z=()=>i(Y,R,x),ce=()=>{C(Y,()=>{z(),k&&k()})};B?B(Y,z,ce):ce()}else i(Y,R,x)},Pe=(T,R,x,ie=!1,q=!1)=>{const{type:Y,props:K,ref:re,children:X,dynamicChildren:_,shapeFlag:g,patchFlag:C,dirs:B,cacheIndex:k}=T;if(C===-2&&(q=!1),re!=null&&Ps(re,null,x,T,!0),k!=null&&(R.renderCache[k]=void 0),g&256){R.ctx.deactivate(T);return}const z=g&1&&B,ce=!Tr(T);let oe;if(ce&&(oe=K&&K.onVnodeBeforeUnmount)&&dn(oe,R,T),g&6)ue(T.component,x,ie);else{if(g&128){T.suspense.unmount(x,ie);return}z&&li(T,null,R,"beforeUnmount"),g&64?T.type.remove(T,R,x,we,ie):_&&!_.hasOnce&&(Y!==jt||C>0&&C&64)?Ae(_,R,x,!1,!0):(Y===jt&&C&384||!q&&g&16)&&Ae(X,R,x),ie&&Ye(T)}(ce&&(oe=K&&K.onVnodeUnmounted)||z)&&Wt(()=>{oe&&dn(oe,R,T),z&&li(T,null,R,"unmounted")},x)},Ye=T=>{const{type:R,el:x,anchor:ie,transition:q}=T;if(R===jt){ee(x,ie);return}if(R===xs){M(T);return}const Y=()=>{r(x),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(T.shapeFlag&1&&q&&!q.persisted){const{leave:K,delayLeave:re}=q,X=()=>K(x,Y);re?re(T.el,Y,X):X()}else Y()},ee=(T,R)=>{let x;for(;T!==R;)x=h(T),r(T),T=x;r(R)},ue=(T,R,x)=>{const{bum:ie,scope:q,job:Y,subTree:K,um:re,m:X,a:_}=T;Ll(X),Ll(_),ie&&to(ie),q.stop(),Y&&(Y.flags|=8,Pe(K,T,R,x)),re&&Wt(re,R),Wt(()=>{T.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Ae=(T,R,x,ie=!1,q=!1,Y=0)=>{for(let K=Y;K<T.length;K++)Pe(T[K],R,x,ie,q)},pe=T=>{if(T.shapeFlag&6)return pe(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const R=h(T.anchor||T.el),x=R&&R[wd];return x?h(x):R};let Re=!1;const We=(T,R,x)=>{T==null?R._vnode&&Pe(R._vnode,null,null,!0):S(R._vnode||null,T,R,null,null,null,x),R._vnode=T,Re||(Re=!0,Tl(),Eu(),Re=!1)},we={p:S,um:Pe,m:Te,r:Ye,mt:ne,mc:O,pc:H,pbc:A,n:pe,o:n};return{render:We,hydrate:void 0,createApp:Qd(We)}}function ao({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ci({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function lh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hu(n,e,t=!1){const i=n.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Kn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Hu(o,a)),a.type===qs&&(a.el=o.el)}}function ch(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function zu(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zu(e)}function Ll(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const uh=Symbol.for("v-scx"),fh=()=>vs(uh);function lo(n,e,t){return Vu(n,e,t)}function Vu(n,e,t=st){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ut({},t),l=e&&i||!e&&s!=="post";let c;if(Dr){if(s==="sync"){const p=fh();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=vn,p.resume=vn,p.pause=vn,p}}const u=wt;a.call=(p,v,S)=>En(p,u,v,S);let f=!1;s==="post"?a.scheduler=p=>{Wt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():tl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Ad(n,e,a);return Dr&&(c?c.push(h):l&&h()),h}function dh(n,e,t){const i=this.proxy,r=gt(n)?n.includes(".")?ku(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=Fr(this),a=Vu(r,s.bind(i),t);return o(),a}function ku(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const hh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${$t(e)}Modifiers`]||n[`${wi(e)}Modifiers`];function ph(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||st;let r=t;const s=e.startsWith("update:"),o=s&&hh(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>gt(u)?u.trim():u)),o.number&&(r=t.map(kf)));let a,l=i[a=eo(e)]||i[a=eo($t(e))];!l&&s&&(l=i[a=eo(wi(e))]),l&&En(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(c,n,6,r)}}function Gu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=Gu(c,e,!0);u&&(a=!0,Ut(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(at(n)&&i.set(n,null),null):(Be(s)?s.forEach(l=>o[l]=null):Ut(o,s),at(n)&&i.set(n,o),o)}function js(n,e){return!n||!Bs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,wi(e))||Je(n,e))}function Dl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:S}=n,m=Is(n);let d,w;try{if(t.shapeFlag&4){const M=r||i,U=M;d=mn(c.call(U,M,u,f,p,h,v)),w=a}else{const M=e;d=mn(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),w=e.props?a:mh(a)}}catch(M){Rr.length=0,Ws(M,n,1),d=bt(Pr)}let b=d;if(w&&S!==!1){const M=Object.keys(w),{shapeFlag:U}=b;M.length&&U&7&&(s&&M.some(Ga)&&(w=gh(w,s)),b=nr(b,w,!1,!0))}return t.dirs&&(b=nr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&nl(b,t.transition),d=b,Is(m),d}const mh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Bs(t))&&((e||(e={}))[t]=n[t]);return e},gh=(n,e)=>{const t={};for(const i in n)(!Ga(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function _h(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ul(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!js(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ul(i,o,c):!0:!!o;return!1}function Ul(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!js(t,s))return!0}return!1}function vh({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Wu=n=>n.__isSuspense;function xh(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):bd(n)}const jt=Symbol.for("v-fgt"),qs=Symbol.for("v-txt"),Pr=Symbol.for("v-cmt"),xs=Symbol.for("v-stc"),Rr=[];let qt=null;function St(n=!1){Rr.push(qt=n?null:[])}function Eh(){Rr.pop(),qt=Rr[Rr.length-1]||null}let Lr=1;function Nl(n,e=!1){Lr+=n,n<0&&qt&&e&&(qt.hasOnce=!0)}function Sh(n){return n.dynamicChildren=Lr>0?qt||qi:null,Eh(),Lr>0&&qt&&qt.push(n),n}function At(n,e,t,i,r,s){return Sh(ft(n,e,t,i,r,s,!0))}function Xu(n){return n?n.__v_isVNode===!0:!1}function pr(n,e){return n.type===e.type&&n.key===e.key}const ju=({key:n})=>n??null,Es=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||Dt(n)||Ve(n)?{i:an,r:n,k:e,f:!!t}:n:null);function ft(n,e=null,t=null,i=0,r=null,s=n===jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ju(e),ref:e&&Es(e),scopeId:Au,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:an};return a?(rl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),Lr>0&&!o&&qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&qt.push(l),l}const bt=Ah;function Ah(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Gd)&&(n=Pr),Xu(n)){const a=nr(n,e,!0);return t&&rl(a,t),Lr>0&&!s&&qt&&(a.shapeFlag&6?qt[qt.indexOf(n)]=a:qt.push(a)),a.patchFlag=-2,a}if(Dh(n)&&(n=n.__vccOpts),e){e=Mh(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=qa(a)),at(l)&&(el(l)&&!Be(l)&&(l=Ut({},l)),e.style=ja(l))}const o=gt(n)?1:Wu(n)?128:Cd(n)?64:at(n)?4:Ve(n)?2:0;return ft(n,e,t,i,r,o,s,!0)}function Mh(n){return n?el(n)||Lu(n)?Ut({},n):n:null}function nr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?yh(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ju(c),ref:e&&e.ref?t&&s?Be(s)?s.concat(Es(e)):[s,Es(e)]:Es(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&nr(n.ssContent),ssFallback:n.ssFallback&&nr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&nl(u,l.clone(u)),u}function Jo(n=" ",e=0){return bt(qs,null,n,e)}function qu(n,e){const t=bt(xs,null,n);return t.staticCount=e,t}function mn(n){return n==null||typeof n=="boolean"?bt(Pr):Be(n)?bt(jt,null,n.slice()):Xu(n)?Kn(n):bt(qs,null,String(n))}function Kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:nr(n)}function rl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),rl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Lu(e)?e._ctx=an:r===3&&an&&(an.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:an},t=32):(e=String(e),i&64?(t=16,e=[Jo(e)]):t=8);n.children=e,n.shapeFlag|=t}function yh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=qa([e.class,i.class]));else if(r==="style")e.style=ja([e.style,i.style]);else if(Bs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function dn(n,e,t,i=null){En(n,e,7,[t,i])}const Th=Cu();let bh=0;function Rh(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Th,s={uid:bh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uu(i,r),emitsOptions:Gu(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ph.bind(null,s),n.ce&&n.ce(s),s}let wt=null,Us,Qo;{const n=ks(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Us=e("__VUE_INSTANCE_SETTERS__",t=>wt=t),Qo=e("__VUE_SSR_SETTERS__",t=>Dr=t)}const Fr=n=>{const e=wt;return Us(n),n.scope.on(),()=>{n.scope.off(),Us(e)}},Fl=()=>{wt&&wt.scope.off(),Us(null)};function Yu(n){return n.vnode.shapeFlag&4}let Dr=!1;function wh(n,e=!1,t=!1){e&&Qo(e);const{props:i,children:r}=n.vnode,s=Yu(n);eh(n,i,s,e),rh(n,r,t);const o=s?Ch(n,e):void 0;return e&&Qo(!1),o}function Ch(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xd);const{setup:i}=t;if(i){ri();const r=n.setupContext=i.length>1?Ph(n):null,s=Fr(n),o=Nr(i,n,0,[n.props,r]),a=Yc(o);if(si(),s(),(a||n.sp)&&!Tr(n)&&Mu(n),a){if(o.then(Fl,Fl),e)return o.then(l=>{Ol(n,l)}).catch(l=>{Ws(l,n,0)});n.asyncDep=o}else Ol(n,o)}else Ku(n)}function Ol(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=_u(e)),Ku(n)}function Ku(n,e,t){const i=n.type;n.render||(n.render=i.render||vn);{const r=Fr(n);ri();try{jd(n)}finally{si(),r()}}}const Ih={get(n,e){return Rt(n,"get",""),n[e]}};function Ph(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ih),slots:n.slots,emit:n.emit,expose:e}}function sl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_u(gd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in br)return br[t](n)},has(e,t){return t in e||t in br}})):n.proxy}function Lh(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function Dh(n){return Ve(n)&&"__vccOpts"in n}const Uh=(n,e)=>Ed(n,e,Dr),Nh="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $o;const Bl=typeof window<"u"&&window.trustedTypes;if(Bl)try{$o=Bl.createPolicy("vue",{createHTML:n=>n})}catch{}const Zu=$o?n=>$o.createHTML(n):n=>n,Fh="http://www.w3.org/2000/svg",Oh="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,Hl=Cn&&Cn.createElement("template"),Bh={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Cn.createElementNS(Fh,n):e==="mathml"?Cn.createElementNS(Oh,n):t?Cn.createElement(n,{is:t}):Cn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Cn.createTextNode(n),createComment:n=>Cn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Cn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Hl.innerHTML=Zu(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Hl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Hh=Symbol("_vtc");function zh(n,e,t){const i=n[Hh];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zl=Symbol("_vod"),Vh=Symbol("_vsh"),kh=Symbol(""),Gh=/(^|;)\s*display\s*:/;function Wh(n,e,t){const i=n.style,r=gt(t);let s=!1;if(t&&!r){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ss(i,a,"")}else for(const o in e)t[o]==null&&Ss(i,o,"");for(const o in t)o==="display"&&(s=!0),Ss(i,o,t[o])}else if(r){if(e!==t){const o=i[kh];o&&(t+=";"+o),i.cssText=t,s=Gh.test(t)}}else e&&n.removeAttribute("style");zl in n&&(n[zl]=s?i.display:"",n[Vh]&&(i.display="none"))}const Vl=/\s*!important$/;function Ss(n,e,t){if(Be(t))t.forEach(i=>Ss(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Xh(n,e);Vl.test(t)?n.setProperty(wi(i),t.replace(Vl,""),"important"):n[i]=t}}const kl=["Webkit","Moz","ms"],co={};function Xh(n,e){const t=co[e];if(t)return t;let i=$t(e);if(i!=="filter"&&i in n)return co[e]=i;i=Vs(i);for(let r=0;r<kl.length;r++){const s=kl[r]+i;if(s in n)return co[e]=s}return e}const Gl="http://www.w3.org/1999/xlink";function Wl(n,e,t,i,r,s=Yf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Gl,e.slice(6,e.length)):n.setAttributeNS(Gl,e,t):t==null||s&&!Qc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ii(t)?String(t):t)}function Xl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zu(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Qc(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function jh(n,e,t,i){n.addEventListener(e,t,i)}function qh(n,e,t,i){n.removeEventListener(e,t,i)}const jl=Symbol("_vei");function Yh(n,e,t,i,r=null){const s=n[jl]||(n[jl]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Kh(e);if(i){const c=s[e]=Qh(i,r);jh(n,a,c,l)}else o&&(qh(n,a,o,l),s[e]=void 0)}}const ql=/(?:Once|Passive|Capture)$/;function Kh(n){let e;if(ql.test(n)){e={};let i;for(;i=n.match(ql);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):wi(n.slice(2)),e]}let uo=0;const Zh=Promise.resolve(),Jh=()=>uo||(Zh.then(()=>uo=0),uo=Date.now());function Qh(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En($h(i,t.value),e,5,[i])};return t.value=n,t.attached=Jh(),t}function $h(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Yl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ep=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?zh(n,i,o):e==="style"?Wh(n,t,i):Bs(e)?Ga(e)||Yh(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tp(n,e,i,o))?(Xl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wl(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!gt(i))?Xl(n,$t(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wl(n,e,i,o))};function tp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Yl(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yl(e)&&gt(t)?!1:e in n}const np=Ut({patchProp:ep},Bh);let Kl;function ip(){return Kl||(Kl=oh(np))}const rp=(...n)=>{const e=ip().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=op(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,sp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function sp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function op(n){return gt(n)?document.querySelector(n):n}const Hn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},ap={name:"AboutSection"},lp={id:"about",class:"about"};function cp(n,e,t,i,r,s){return St(),At("section",lp,e[0]||(e[0]=[ft("h2",null,"About Me",-1),ft("p",null," With more than seven years of experience in software development, I specialize in designing and implementing smart factory applications. As Team Leader Smart Factory Applications at Röchling Automotive, I lead a team of software engineers to develop and deploy innovative solutions that optimize production processes, enhance product quality, and boost efficiency. I am deeply passionate about leveraging Python, JavaScript, and cutting-edge technologies like Django REST Framework, Vue.js, and PostgreSQL to create web applications that integrate seamlessly with factory systems, delivering real-time data and analytics to stakeholders. ",-1)]))}const up=Hn(ap,[["render",cp],["__scopeId","data-v-485c26a9"]]),fp={name:"ContactSection"},dp={id:"contact",class:"contact"};function hp(n,e,t,i,r,s){return St(),At("footer",dp,e[0]||(e[0]=[qu('<h2 data-v-d897eeb2>Contact</h2><div class="contact-links" data-v-d897eeb2><a href="mailto:dc.bert@outlook.com" data-v-d897eeb2><i class="fas fa-envelope" data-v-d897eeb2></i></a><a href="https://www.linkedin.com/in/davide-bert" target="_blank" data-v-d897eeb2><i class="fab fa-linkedin" data-v-d897eeb2></i></a><a href="https://github.com/dcbert" target="_blank" data-v-d897eeb2><i class="fab fa-github" data-v-d897eeb2></i></a></div>',2)]))}const pp=Hn(fp,[["render",hp],["__scopeId","data-v-d897eeb2"]]),mp={name:"ExperienceSection",data(){return{experiences:[{id:1,company:"Röchling Automotive",title:"Team Leader Smart Factory Systems & Applications",duration:"Jun 2024 - Present",location:"Laives, Italy (Hybrid)",description:"Leading development of smart factory applications.",skills:["Python","Django","JavaScript","Vue.js","Postgres","Linux"]},{id:2,company:"Röchling Automotive",title:"Team Leader Smart Factory Applications",duration:"Sep 2022 - Jul 2024 (1 year 11 months)",location:"Laives, Italy (Hybrid)",description:"Managed team efforts with Linux and Django.",skills:["Python","Django","JavaScript","Vue.js","Postgres"]},{id:3,company:"Röchling Automotive",title:"Specialist Smart Factory Applications",duration:"Aug 2020 - Sep 2022 - 2 years 2 months",location:"Laives, Italy (Hybrid)",description:"Managed team efforts with Linux and Django.",skills:["Python","Django","JavaScript","Vue.js","Postgres"]},{id:4,company:"Fercam S.p.A.",title:"Junior Software Developer",duration:"May 2018 - Jul 2020 - 2 years 3 months",location:"Bozen, Trentino-Alto Adige, Italy",description:"Managed team efforts with Linux and Django.",skills:["C#",".NET Core","Windows"]},{id:5,company:"QuattroGi Ltd",title:"Internship Student",duration:"Oct 2017 - Dec 2017 - 3 months",location:"Sofia, Bulgaria",description:"Managed team efforts with Linux and Django.",skills:["Wordpress","HTML","Javascript"]}]}}},gp={id:"experience",class:"experience"},_p={class:"timeline"},vp={class:"details"},xp={class:"skills"};function Ep(n,e,t,i,r,s){return St(),At("section",gp,[e[0]||(e[0]=ft("h2",null,"Experience",-1)),ft("div",_p,[(St(!0),At(jt,null,Ls(r.experiences,o=>(St(),At("div",{key:o.id,class:"experience-item"},[ft("div",vp,[ft("h3",null,pn(o.title),1),ft("p",null,pn(o.company)+" | "+pn(o.duration)+" | "+pn(o.location),1),ft("p",null,pn(o.description),1),ft("div",xp,[(St(!0),At(jt,null,Ls(o.skills,a=>(St(),At("span",{key:a,class:"skill-tag"},pn(a),1))),128))])])]))),128))])])}const Sp=Hn(mp,[["render",Ep],["__scopeId","data-v-ed8f10b8"]]),Ap={name:"NavBar"},Mp={class:"navbar"};function yp(n,e,t,i,r,s){return St(),At("nav",Mp,e[0]||(e[0]=[qu('<div class="brand" data-v-726f3c0f>Davide Bert</div><ul class="nav-links" data-v-726f3c0f><li data-v-726f3c0f><a href="#about" data-v-726f3c0f>About</a></li><li data-v-726f3c0f><a href="#experience" data-v-726f3c0f>Experience</a></li><li data-v-726f3c0f><a href="#projects" data-v-726f3c0f>Projects</a></li><li data-v-726f3c0f><a href="#skills" data-v-726f3c0f>Skills</a></li><li data-v-726f3c0f><a href="#contact" data-v-726f3c0f>Contact</a></li></ul>',2)]))}const Tp=Hn(Ap,[["render",yp],["__scopeId","data-v-726f3c0f"]]),bp={name:"PortfolioHeader"},Rp={class:"header"};function wp(n,e,t,i,r,s){return St(),At("header",Rp,e[0]||(e[0]=[ft("img",{class:"profile-pic",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAJYAlgDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAECAwQFBgcI/8QARBAAAQQBAwIEBAQEBAMHAwUAAQACAxEEBRIhMUEGE1FhByJxgRQykaEjQrHBFVLR8DNi4QgWcoKSovEkJVM0Q7LC0v/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMEBgUH/8QALREBAAICAQQCAgMAAgICAwAAAAECAxEEBRIhMRNBUWEGIjIUQnGBI1IkQ5H/2gAMAwEAAhEDEQA/APqlERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEUWPVNwRG4TSUqS4DuP1UeYz/OP1U6k7o/KtFTuB6Efqp3D1UG4Siix6qUSIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKD7K3LKyNhfI4NaBZcTQC4XxH8VfDGil0bcs504//AG8Qb/1d+X97VqY7XnVYY75K082l33ZUucGgkkAfVfO2v/G/WMouZouHj4EfZ8n8WT6/5f2K861rxLretuP+K6nl5LT/ACPkIZ/6R8q3sfTclv8AXhpZOo46/wCfL6o1jx54Z0guGbrOIHjrHG/zHA+hDbK4zVPjloWOS3Aws3McOhIETT9yb/ZfOSUt2nTMcf6nbTv1LJPrw9h1H466tIXf4fpWFjg9POe6Q/ttXOZvxb8YZNhmox44PaGBg/qCf3XBUlLYrxMVfVWvbl5be7OhyvHHijJvzde1EX2ZOWf/AMeFrJta1WfmfUs2W/8APkPP91g0lLNGKkeoYpzWn3K4/Infy+WRx93kq3uf/mP6qaSlbsj8Kd8/lcZkTsNslkafZxWVDrOqQG4NRzYyOmydw/usGkpOys+4TF7fl0OL428T4pHla9qNDoHTuf8A1W7wfi34wxSA7UWZDR2mgYb/AEAK4SkpY7cfFb3VevIyV9Wevad8ddXiI/xDS8LIaP8A8TnRE/ra6zS/jloc5Az8HNxHHu0CRo+4o/svnWkpYLdPw2+tM9efmr9vrzR/HvhjV6bhaxi73dGSu8pxPsHUSuna9rmgtIIPQr4cr6Lb6N4j1nRXA6VqeVjAc7GSHafq08fstXJ0v/6WbVOp/wD3h9ndkHRfOegfG3WsQtZrGJj6hH3e3+FIffi2/sF6b4c+KvhnWdscmWdPyDx5eYNgP/m/L+9rQycPLj9w3cXMxZPUvQEVqKRkrGvje17XCw5psH7q6tb02t7ERESIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCPsgWLnZ2Pp+LJk5uRFjwRi3SSODWge5K8c8a/GqKLfjeFYfNd0OXO35P/K3qfqa+hWXFgvlnVYYMuemKN2l69q2rYOkYjsnU8uHFgb1fK7aPp7ryTxZ8bsWAvh8NYn4l44/EZILY/qG/mI+u1eKa1rOo63mHK1bMmy5zdOkd+X6Do0fTha+l6+Hpta+cnl5ObqNreKeG88SeLdc8RyE6rqM0sZNiEHbGP/KOPubK0NKqlNL0a0rSNVh59slrzu0qaSlVSmlZTamkpVUlIjamlNKqkpSbU0lI1zXXtcD26qhs8TpCwPG4dlWb1j3K0VtP0rpTSbmf5h1UjkWKpTFon0iYmPcIpKVVJSlXamkpVUlIjamkpVUppDaikpV0lIbUUlKulFIdzdeHfFWt+HZAdJ1CeBl2Yt26M/Vp4+/X3XrvhT42wS7YfEuGYHdPxGMNzPuzqPta8IpKWtm4mPL7hs4eZkxT/WX2jpGr4Gs4rcnS8uHJgP8ANE669j6FbBfFmj6tqGjZYytKy5sWYfzRuqx6EdCPYghey+DPjQ15jxfFMPlngDMgbY+rmdR9r+gXk5+nXx+aeYevg6lTJ4v4l7d1CnssLTs/G1LEZk4M8WRjvFtkiduB+4WZwvOmJjxL0omJjcJRLREiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAnQJ2WDqeoYumYcuVnZEePjxDc6SR1AD/f6pEb8QiZiI3LNPC888e/E7SvDHmYuMW5+qNtphY75Yz/AM7ux9hz9Oq84+Inxay9WMuD4bdJh4B+V2R+WWX6d2t/f6cheUGyTd31Xq8bp02/tl9PJ5XUYr/XE3firxVq/ijLMurZTntBJZAy2xR/Rv8AfkrRUppTS9ilK0jVYeNfJN53ZTSmlNKaV1NqaSlVSmlKNqaSlVSs5WVDjMLppA1RaYrG7JrFrzqvldpY+ZlwYke+d4aP6rSap4jbC0nGc3kccWSuRy86fMldJkPLnE/QV9Oy87Pz618Y/MvV43TL385PEOrm8UReYWwREgdyVak8Q+ZjvaTsmsEC+PouPaaBIJPopMpdTrNjmvRedbmZre5erXgYK+obP/Epm5HmMkc2zdAkWRwqhmyST+buLSeRZ6n6rUjc59evzK4wjijRB791rTa0+5bPbWPUNyM952+W9zZSRdHv9fosjC1jLhmoPO2zbXg1279lzsrnNk3AFjT0A/1WbBOW0517gA3pYcD2P+qvTJevqVL46X8Wh1GXrc+O9j2sD4hw4Dn+nRbTC1XHyvyu2k+/W1yuPnQDYx5LaFB9cH6j1HrypiY5spfBUlmyxg/MLrcPdbOLm5aT5nbVy9Pw3jURp3XHUdEpaTTNUcC6PJIAHDCBVgLdxPbLG2RhtpFr28HIpmruPbn+Txr4LasUlKukpZtNTaikpV0lJo2opKVdJSG1FJSrpKTSdqKSlXSUh3Nx4X8T6t4ZyxPpOU6IEgvidzHJ/wCJv9xRXv3gT4oaX4j8rEzqwNTJoRvd8kh/5Hf2PPPdfNNIAtPkcPHmj8S3ONzsmGfHmH20OVK+dvh98VszRzHg6+ZM3T+jZruWIdv/ABN+vP16L3vS9RxNVw4svT548jGkFtkjdYP+h9uy8HPxr4J1aHQ8flUzxurPREWu2hERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQE+6hcX8RPHWF4QwQDtn1KVtw44P/ud6NH79B3q1KWvPbVjyZK4691my8Y+K9N8KaY7K1KX53WIoGG5JT6Aenv0H6L5n8b+M9U8XZvm5z/LxWG4cVhOyP3Pq73+tUOFq9f1nP17U5c/U53TZDz36Nb/AJQOgH/zybK11LoOLwa4Y7reZc9y+fbNPbXxCmlNKqlNLfeftTSUqqU0p0jamlNKqkpEbU0ppTSPLWtLnEAdUmdRuURuZ1CzkTMgZufdngAc2uR1aTJzcnbBG23HaNxv7LdZzjNO4NcNppp9vdaPKyCR5cDg10QqwOtGrHsue5/LnJbsr6dZ0zhRjp8lvcuYyI5GyVL+Y9VZAO8t591uM4Mla01TgADx3of6lYTsd2+2tc7nsLoV1PotLW27PhjMadlkG+yrfFtgjfZJL3Aj2ABtZUWO7aQQbaa+pKz3YX4jyI4A7Zv3bnHsQ3g+/BVoqrMtNHbJGuI4Bo/dXcfHMzy1vQuoH6//AAtzr2I7FiY0tDWS1K3aBZF7eR2Pyn7crK8KaeyZr5HduWH/AJmkOr06c/ZTFdomzRZGG5uNZad7C5r2ngij3TEY84xra5tbaI5NdwukzwfxM7muaHkuL77UD/UWPcrCwcX8OHWwF97dtChf9OK5SakWafKxXMYMiMHynAV9e4H6X9FvvC2NLmGMYcj97nFpMbgHCx79D09j+6pkAkwZoHMIlBLXD3B7D1A/rS0OniePMezDmezJA3MANGQj+W+xrke4SI1KYncOlDS3Kdj6hOMaYPAG9pa09fmvtzXHrythgao7BeYMpnyDo5vP3scEfqCtdl5c+tYkU2UC/JcWt80EAONVRvo729VqQJoXFjXksvjceDZ79lkx5bYrd1WHLhrmr23ekQyMmjbJE4Oa4WCOVXS4LTNaGkyeS9r2Dq6NxFcnqP8AdELs8TUcbJoNlbuI456/Q917nH5lMsat4lzfL6fkwTuvmGVSUq6Slu6eb3KKSlXSUpO5RSUq6SkNqKSlXSilGk7UUlKukpNG1FLofBni7U/CecJsCTfA4/xcd5OyT/R3v/UWDoaUUqZMdckdtoZMeW2Oe6svrTwb4s03xXp4yNPkqVledjv/ADxH39vQ9/1ro18b6JqubomoxZ2mTugyIzw4HqPQjuF9I/Dvx3heLMQRu24+qRi5ccu/N/zMvq3+n6E89zODbDPdXzV0nC6hXPHbf27hERee9QREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA7KOylcV8SPG2N4R0u27ZtSmBGPAT/wC53o0fqeg9RalLXtFaseTJXHXusx/ib48xvCOD5MGyfV5m3FCTwwf53+g9B3P3I+Z9Tz8rU86bMz53z5Mztz5H9T/YAdABwBQHCq1PNydUz583OmdPkzO3Pe7qT/QACgB0A4HCxaXS8TiVwV/bmOXzLci36RSmlNKaW20tqaU0qqSlKNopKVVKaRXamlNKaU0iNqaWq1mY0yNrw1pcA4gdP+iydTzBjM2MI85w+UX29VoMjN2MpsjZHu6t/sLXmdQ5UVj46+3udJ4M3n5r+kNuMO/jNb1J4vg82fSqWHNg/wAaRhcA4SDkf5T3v9FiZWo7WuDCwGixzfUHnqrI1J0kLoQRujf8rq5II/6Lw4h0l7+PDaZ+DsbiujDXOc0v4N3zQv8AQhWGs2NJkphILSB3J5A9uhVGVqe+SFo+V7YABx/M13dTn5DMna+K2yPfuez3A/YdVl0wTaWyg0mGWETFxBLSdpA620g+w56q3O38HjQObtsNdICOgIPf91kaLPsxnsnaGlzDHZPNlpr+gWBqOT+JjhhjjNAvBPsAOBXurRHhS0rOaX6jmDg7Y3EEDoAaNfqSVtNPcMTHYGtAa2QyOb1Jc2xQ96cVj4j2ROY2N48zcZDu6GwCAR9isXMy2vllMZ+ag4DtZ616FTqBRNIRJcgu7ZY/m6/9Fdxpmte2LawOkc3a4iyKFg/SjR9lqpsi2va5xa6N3HsQVm5DA6ZksZdtkYT9H8mvY8BRpPpfxpX5OSXkN3teQWn+Y+v6UPeloZxJHktkBERDzsceKI7fS+t/VdC+osfzYnhrRIHPNC7d/wBVhSRxTeXve0RS/wAzrIa4evt0v2KiYItpvBiQZEGHJE4ww5TLyG/ytfdE/Q9ViYEcGm6hLh6nJJE7cYHh3LWtcAQ4elCj6ELKwWv03Tjj5AEc0UjseeN/Pynof9D3BtafWmOzMtjI5WvniYGkHu1jflIvvtAr9CotEJrO5XNV08YkM0M1FzX/ACPbToz3oVyDVmuhWijnkxTGY3/L129uP7rYTZkmXhRRvhHmtG1pBoloNge55oHrXHThYUmREJSHw74Xi+tFtfsqevTJH4l13hzxMJwyHLcN4+Xd6rrhRFg8FeMNc2MlzHHeD2NUPUe677wlrgmhZDlyAPrawnjdyf8A4XrcLmTE9mSXg9T6dEx8uKP/AE6qkpVCiAQVNL2HOeY8KKSlVSUpRtRSUq6SkT3KKSlXSikO5RSUq6Sk0nailfwMvI0/MhysOZ8OTE7cx7DyCP8AdEHgjg8K3SilE1i0an0mLzWdw+lfhn47g8U4Yxsosh1aIfxI+0gH8zfb1HZd7S+NMDLyNPzIcvDmfDkRO3MezqCP90QeCODwvpX4beNYPFembJdsWpwAedED17bm+39OnoTzvP4PxT309On6d1CM0fHf27dERea9gREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQQpUeywtTzoNNwZ8zMkbFjwtL3vd0AH++iRG/EImdRuWr8a+JcPwrokudmHc78kMQPMjz0A9Pc9gvlbxBq+Zr2qz6hqMpknldfs0dmj0A/wDmzZW18f8AirJ8W64/Ll3MxY7Zjw9mMvr/AOI0L+w6ALmwF0nB4kYa90/6ly/P5s57dtfUIpSAppTS33m7U0ppVUlKyNopTSmlNKNK7RSUqqU0pRtTSkjglVUreRYhcR6FVt4iZTTzaIchrcgc3OmdYc35GO+nFLnZ3kYWPktYDIXEPbXSiKPstjrUr36bLyfmkEl+oJ5FLmsieQ45YHGm0DXcLls0915l3fGrFMUQrzpYZyTtMLyTfO4H+/8AVY2G97JyzcPnoXfQjm/9+qxnyOeb9qKpa4jiz1u1SITMtrqJc8QZIcC47mPF8hw9fsVscOeN8rHPcQXsdzXAptg/Sx9itXM8O3TbbjlFO7U+r/VWWvMYDJS9haCRx6+vt3U70iY23Euc9rQ8tNNcPa/92VscF8UkWRKDtfK4bB1odT+1LlXzvdA+MkljT/fqs7SZnHFd8xGwn91NbKzRk5ea7zg5pDSGtLfevX7ErGdOT5jxfyG+OeCOqsbnZDyxoG7p/Sv9FiskfHJQvu0t9UmdkRpsshzZTG9h+eb5nC+54/ra2EDi6MRudTmWK9COD9+B9lpoZGsjjLbJa+xx0o3SzPxLQHxvIuUAiS6IePX7fskSnTPly2HE8s/ztLXAnrZHH14HK10ExOE4F5cYZACw92kdVGTkSB7HzNIsbSSOCQKB+nt91iPkj5DN7XO+VwPQj/fKTJEN9qGpSZbIpDJueKxnH/M1o+Qn144talk27bIyUMyI3giQuPIHr/VYzZi2NzHcmhVeoWMJCNwddEc/VRMrRGm5hyWmQMkA88EtsOoAiqPHbqLWNqTm7rDCx57Hsa5WuLz8rwea29VkvnGRC0EkytFAlRsWWfMDxyP3V+Od8crXh3IAr7FYtgHj7Kprjtqz1scJpMeHoXhXxUyRzMXOIYTw1x9ff0C7cAHp06rwhrqeHC9wXpPg7Xp8+RuPO0bI4hcl9x3/ALfVetweZMT8WT/053qnTveXFH/l11KKVaUvac3tRSUq6SkTtRSilcpRSG1FJSrpRShO1FJSrpKQ2t0s7RdTy9F1KHO0+Ux5ER3AjofY+xWJSUq2rFomto9r0yWpPdD6q8E+J8XxTozMzHIbM2mzw3zG/wDuPQ9x+i6Me6+UPBPiXJ8La1HmY5c6F3yTw3xIz/Udv9CQvqHStQx9V0+DOwZBJjzNDmOB9f8Af2XMc3iTx7+PUuw6dzY5NNT7hnoiLSekIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIggmuq+e/jb4zOq6gdD0+QfgcV/wDGc0/8SUdv/C0/v9AV6J8XvF//AHc0I4+HJt1LMBZEQaMbf5n/AF7D3+hXzT1Js/Vev03i90/Lb08PqvM7Y+KqmlNKaU0vec9tACmlNKaREyilNKaU0iu0UppTSmkV2ppTSqpKUo2ilYzbbiSkA3tJ/ZZNKmdhfE9oqyFW9d1mIWxW1eJlwOPCMvAfjtkJkNtdGRzfJ47rmcrT5mukaWu3Nb8wog0O9LrsoRYefITQB7Hij62OVgZTmzOc6J8u6TqwW/p3sm1yV/F5iX0DHMTjiYcVKxzDVFWx7WulycPJDbMTwL9K49f92tcYJY3keRFIP+dtfuphWZU4MjWwuB3ej2j09ff6K1lkgMBl81jbDHegtRKx0J3BjGHnhrkEjJOHNIP0/wB0plMMcObRAB/VZeluIdK0Xy3cPelZfDRJDvsqsVrmTBwPTrff2/RVTpMjSzILjY/31WXNjsyG743ASdHgngk9D9P7q/JDvaHlgIqyeu4epHb0VnbHE/cGyAcbXAg7fb0pEalhAENIeAQ7jd05VyUsnisuPmg83/N9PdZj8XzHGXHeHk/ma5tX9uhVg4jW05zgKqm+pSZTFZWGyObGGkEDu2+v2VpzaJIJ+6yHxtcHANNjpR6FQMZ5AB3eybT2yx2k37d1UxoZK3c0bTzyOoWa3BkcDbDtA546fVVmDgNczsB6qdo1LXvYTK8gAAmx9FbLSHc3S2WPGxsm2Rw2dDuaeB6+yzfwOPIXCN7X0L69vZD00VdlS6waCz5sJzBbegPRYZjJLr6qBEfIN9f6LYaVqE+F5zYXBolbtdY6j/fP1WsAdZq6Ugm6vlI8TuCYiY1Pp7V4Z1L/ABLS4ZJL82qca4Nd1t6XmngrOmmmjxXTARA2AbPvx/T/AKcL05o4XScDPOXH5+nE9W4scbL49SopRSuUopbzy9qKSlXSUmja3SUq6SlGk7UUopV0lJpPcopRSrpKTSdqKXpPwd8XnR9SGk58n/0GU8bHE8RSfX0PH3r3XnFKKWDPgrmpNZbHG5NuPki9X2SCCLCUvP8A4ReLDr+jnDzJN2o4YDXEnmRn8rvr2Pvz3XoANjhcllx2xXmlvp3WDNXPSL1+1SIixswiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgg9FjZ+XDgYc+XlPEcELC97z2AFkrJPTqvGvj34n8uCHw/iP+eWpsmv8AKPyt+5F/YeqzcfDObJFYa/KzxgxzeXlXjLX5/EviDJ1GckNcdsTCb8uMXtH++5K0lKVIC6ylIpWKw4zJknJbulFKaU0ppXYplFKaUqQFKu0KQFNKaRXaKU0pAU0pV2ilNKaUgIjaKSlVSmlKu3H+I8QuzHARtIIsb+9+i4zPyHY0wOO90T23yw9ulL1bVcOLKxneZYLBYINLx/VGl2XJV7d1Cx1FrnOoYPjyd35dp0jl/Ph7PwuP1bImaBJPIQPUk/t0/qsvEdPllrIIIQ0fmc8c/UhaVvyvo3wewWzw3SCRpjja5xIA3c/p7rQ7tPXrTfiHTy6PiY2PGZZ45539Y2CgD9Tx07clc9quA5jnFkQjB6Uev6/6Le42HmW3cx5lApzjyWg9gP5R046rc6R4Qmz5NnlPY0nk+v1/0WO2ase2avGtP087hwZjJtiALne/X2WbFomY4k+S706dF73oHwywIGAzlz39TwP0XaYXhDAgY0RwA0Oruf0Wvbl+fDarwfHl8z4egZ4LXCF7SOfnHXjp+5vtX3U5Hh3KDg+GF4A/lLTwfYjqF9Vt8P4m1oMDCfoqX+Hccg1G1o6dFinl2/DLXiU9bfI50vJikHmslhN800m/utm3SJ8jaIcGR98B5fu+/AX043wnhvfYiBB68BZ2J4Uw8eUPjhax3sFaOXb8ItxKQ+bcL4f6jlRb48cB5PLHCv1PRbzS/hhkSuAywYz6NO6/0X0fBpcRHLAGjj/qsoYcTQQ1gtVtnvKYxY4h4hH8M2/wy5pe8cB4byB9O60+t/DeaN0k0G0kC9myhf0X0MMUNHPdW347HA2FT57Qt8NJ+nzXD4Cz2td5enggkOY94q/Y+yyMzwNn5HkNlwcWEN+V8kbSdwJ7r6Cfit6X8o7UsWXGZTmgDa41/sJ/yrJjiUs+WPE+hYeJOyKP8acir+Zu1po0SPUe64yXT5R5jgx1AEkkEdF9g5Wg4Tt5fjseXHu2+B2F9ly+v+A8PWix2Szy2R2AyOhuHWifT2WSvM/LHbp+/MPleSJwZyDSsBtH6D9l6D8RvCj9CmZ5bSIJHEMvtR/05XCzwSY8jmPBBIHHpa3cd4tHh5uXFbHbUtr4SynYuqMMYJcTwALJXseJKZoWvLXMJ7OFH9F4Xp7xFkxSOumkXR/3yvb9HfHPgxzQua5rxdt7/b1XtdJvPdNHL/yGkdlb6ZdJSrpRS91ye1NKKVdJSJ2opKVVJSaNqKSlVSUiVFKKVdJShO1FKKVdKKRO208K61P4e1zG1DGsmN1PZ/nYfzN/09xa+pdLzYdRwIMvFcHwzMD2EehXyNS9h+BniQ/xdByn3Vy41n/1N/v+q8fqvG76/LX3D3+iczsv8NvUvZURFzzrRERAREQEREBERAREQEREBERAREQEREBERBgaxqMGlaZlZ2U7bDjxmR30A7e6+SNd1KfWdYy9Qyzc2RIXnm6HQN+wAH0Xsnx+8QeVhYuhwPp058+cA/yA/KD9XC//ACrw4L3+l4O2nyT9uY6xye+/xx6gAUgJSles8SZFNKQFKlWZRSlSAppSjaAFICmlNIrMopSpAUqVZlAClTSmlKu0UppSppEbYupPbDgzSOra1hP7Lx7NmBc6Vw/PYavV/FNjQsqj/LRXjua/c9rY72NAaP62vC6rM98Q6z+PVj47W/bK0nTn5uQ0A3uPNcr03w34PLZcd+QzhwLgD2r+613wq0sTzvlkYCxo4+q9s07T2l7SBQB4XMcnNMTqHccTBGu6Wt0jw6xrbbE1jBdAcfr7rqdM0xuOytjeevA6lZ8EAYwNAFcLLiaKorRm0y3taTBC1lbGdPZZ0EYcfmVGPRdzVLOiaBZACyVUvOoS2IAja0UpfAHAgk8q+wAt6c91VXy8rJEba02nbFjj2igTX0V7ZtAJCuUBXRVlrTRJ7q0VRN9rMdbiD36KsAdrCrbGNxNkEdVURQJ6lW7VJljytsc2rDWcHjkchZZ60QfurUtB3AWK1V62+mJK3g1VrBczaenCz5x8xPSlhyDnkcrBadNzH6YslWQaVlwFAALIeAXHj25VBaOOf2VNstZcz4j8OYetY4ZlxhxaHFh67SRXC+afiNosmk69kx+W5jN1tPqOOi+t3NsleRfHfSPM0/G1COMO8px38ckH3W3xMsxftafNxRam4fO4G1wroQvUPhrnHI02TGeSXxGwbv5SvMXD56PAul2PwxlLNZliLyA5nDboGvb1tdDwL9maJcf1bF8vFtE/T1CkpV0opdY+e7U0oIVdJSg2opRSrpKRO1BCilXSUmk7W6SlXSilCdqKSlVSUidqKWVpOfNpep42dinbNA8Pb7+x9qsH2WPSilFqRas1n1LJS80tFo9w+stD1GHV9Jxc/GNxTxh456ex9+32WwXkHwK10uiytEnd+T+PACe1/MP1o/cr14HouN5OGcOWaPoPB5EcjDW6pERYG2IiICIiAiIgIiICIiAiIgIiICIiCOqtyyCNjnvIDWgkn0CuLh/jBrP+D+Cstsbts+WfwzP/ADfm/wDbuV8VJyXisfbFmyRipN5+ngPjTWXa/wCJs7UCSY5JCIgezG8N+nHJ9ytLSBSF2GOkUrFY+nC5bze02n7QFUAgCkK7FMikBSAppSrtAVSKQFKu0AKqkUgIrtKAKUpSrsU0ikBSrMpSkU0iu2o8UsLtCygBZ2WvIXtGxpA5JP1Xs3iBhfouY0Xfln+i8g2tLWgAjn9V4PVonuiXXfx628cx+3tHwmxPK0YSEDc91ivRes6fEAwX3XCfC/Fazw3ikiuCfqF6JigNb7rjM1t2l9F48apDKjror7RxYVgOF13KvQN4N9FSJhnmPC/CeePVbSFoDRytfExpo8ilsIfyhZKS18ksoUG2aAUtojjm1Q3qbqlPHZZ4advaoAHmuikAXx0UC6NE9KUOvdwPpypQuE8CyBZVLjXS1HO4FwVZsigRz6qYkUuuuCKVqT8vJFq6XVwa4Vh5PcClW0rV9sWZtgm+3RYzmmueyy5ODYHCsP5BNLWtDbpLFeBR45VvaBYIV2Q8gNA68qk0RSxzDLtjvb1XG/E3GbleEM8PBIY3d+/QfZdrJ046rkvHjh/3Z1EH/wDE77EBZMXi8SxZvNJfJupweVnyBpG27HPY8re+AXeV4hx9wPzgiwL7dFq9TYTkSP4IBAH0AW+8CM267j3xYII9wO47LpOLE/LWXJ9Qn/8AHv8A+HqdKKVdKKXYPmO1NJSqpKUp2opKVSUhtRSilXSikTtSopV0opFtqVFKpKVU7UEKCFWopExLZeFtVfomv4WoMJqGS3gd2dHD9L/ZfU8EjJomSxkOY8bmkcghfIpC+hvhDq/+J+EYIZHXNhnyHX6Dlv7UPsvD6xh8Rlh038f5OrThl3SIi8B1giIgIiICIiAiIgIiICIiAiIgIiIIXgPx81Y5XiDE01jjsw4t7x/zv9fsB+q98e7a0kkcDlfI/irUzrHiTUdQLtzZ53Oaf+UcN/YBen0rF3Ze+fp43Wc3ZiikfbVBSECldG5SRVUgUhSrMgUopAUqTIApRVAKVZkAUopRWZAqkRSrsUoFICKzIAqkSlKNrOWwSYsrSLBYR9eF4tk3DmFpHR36dV7gelLxnxLCMfxBPGL5kNLx+r1/rFnTfxvJ/e1X0N8P3k+H8FxI5j6ei7eAksbZ5pcD8O5D/gWIHAUG1S7/ABqPYchcHmn+0vqWD/ELrXfMeOiysVwddHoVj+WbFDus2KItHA5VKxLLa0aZMQ4WbFe3n1WFEaoFZcbvl9Cs1Ya1/LJB5Psqtw7nkq0xw7KHEbhXJ7+yyxOmv2r+6hwoJ4og/qrBBvqeVLZCHULJU7mEdq+HcDnoo3XfJtU7weoN/spAsigFMyrqEhzXNNXX91bIqutDqroPykAjvatub8nJVZWqsv7ALHeB6dVePF3atuaT2WGY2z1nTGe0dgqXAAEgLIe0V6H6K25tjmlEwyRZhyflJXI+OHMHh/P31XkuPXtS67Ipt0uR8asEnh3UgBbxA8t9zXT9kx+LQrk/zOnzHO1ryx5Ip3B/36cLfeBmOl8RGRriGhrnf+K+o/daLEHm4ctiyaa3npR/6rqfhtGXZmTIXAhjABx0uz/19l1PCr3ZaxDjerX7OPkn9O/pRSqRdbp8z2pRVUopE7U0opV0oRO1NKFWopE7U0oVVKFC21NKCFVSInahKVVKKRO1K9F+COqfhPEs2A93yZkfyj/nbyP2Ll52s7QM92l63hZzb/gStea7i+f2tavKxfLitRu8HPOHPS76vCFWoXh8bHNNtcARSu2uMmNeH0eJ3G4ERESIiICIiAiIgIiICIiAiIgIiIOa+Ieo/wCFeDNWyWna8QOYwg9HP+UH9SF8qBe/fH/P8jwziYbTTsnIBPu1oJP7lq8CC6HpOPWObflynW8vdmiv4SpCgKpes8SRVKApClWUgKUCkIrIAqkCBSrKQpChVBSpIFIRSEVmUgKUUhSrIERVBWRtC8n8fReT4lcdth5a4e9r1pec/EuJv+K4L65Ib/8AyXl9WrvBv8Pd/jt9cvt/L1rwJE6HRcQO67f0FL0DBa704K4/RvKwdIx3TvZFFFEHPe40GgDklcn4h+L8DXPxfDsJe1t3kycA+7Qea91wcYZyWmYfVpzVx1iHuDA0GiRf6rJhFuHK+ZtG+JmvRGTcyMsIsA9Sf6kc+y6XE+KmpCJrnmD562gNdyLHTsBfufqtmOLMempPLiZe6vI529Qrscjaog2ePVeMO+Jz5IQ5joo5QCXsl42gc2D6fsszE+LGnU05Ejmm6O1nTj16UonBMLxyK6ewEhtW43/voqo3N3NprlwOkePtNzz/AA8yHeCARIQ2rHHuO3NUus0zUmTkjo/0B3ceo7UqTSa+2StotDehrNtm7PAVtvF2BwqRO1zBxweD2VBlIHNX9VEyiImZZAp1Egc9FBprARdj0VtrhRrv79/ZYudk/h43PkvaAbPop2jtlmOIa1wBHAtYj8pm2t3A/wB8rSu1qCOKbIdLtawlt+p/17LhdV8eQ408oawve2yWtcA4V329bH6q0Um3otaKe3poymmwC3r27qt2VGOHA31HC8VZ8VYHh8jsYsib1NlpBHaqq/0IWFm/E7Jmik8hrMXY0PIyTRq+wHJPfsrxx5lhtyK/T3KXLjDdzfmPT5ef2WI/VcMnaZmBw681X19vdeCjxtJNCfxORkhjwDE/HYA5h9K6OHajytbquuapmskxjkx5bgTJFOwtaQP8o7g9OPX7q3/F/KteTH0+jMvaYw5pBBFgrQanEJ8aaJ1bXsLT9xS8f0/4lapoWPHjvH4zFBJJ2EOirtR7Xyu98HeLcPxXhvfjgx5MR/ixf5bHDh7Xx7FauXBbHO23iz1yR2vnmeF+DNlQm97JnMNDpTl1/wAMqd+NJA3g8Uex5/tYWN8R8NuL4qy2NaGNl/ij7i7/AFWb8M4w2PNoV8zSOfUf9F0nS57slXH/AMgjt42R26KVFLrHzXaKUUqkRO1KUppQidopRSqUUoShQQppETtRSKqlFKFtqUUqCESpKhVFQo9rVnT6V+HWcdS8GaZM429sXlO9bYdt/ta6WrJXmHwJzjLomdhONmCfePYOH+rSvUFxfLx/HmtV9I6fl+Xj0v8ApKIi126IiICIiAiIgIiICIiAiIgIiHog8F/7QeYZNe03D3cQ47pK93Or/wDovK123xkyTkeP89t22FscY/8ASD/Vy4kLrOFXtwVhw/UL9/ItKQpQKQttoSlSFCqClWRVBQFIUqpUqApRSUhSgUqVZSFIUBVKVZApQIFKEhVKApUqSBcH8Rmh+qaWw9XuAv8A8wXeriPGzfO8T6FjFjt7pGnkdQXf/K8zqtojjzG3t/x6lp5tZiPDt/iHHKfBWRDEHGmNL9vdrSLAr6LxTAw5p6GPXJ6ONH9l9JapADhtuPeNhDm/5gRVfouS0Tw/p+nZcxkhD4i7dHuBFA9r/ZcRgzRWJfU8uCbzEvNpdB8QHFY4YrjjNH542nke57+i1eYZzMQ6L8MAQ5zwwtPFdjxXf0J+q94wNfM2Q/F0rBE7YTT5A7y2N9iTxf2VrxJqmmeSItXdpEbjVtMu93X0a21t480y08vHirwzIcHzbmSNmDeRJIwN3Ee3PHqFaxMt0c+R5ZEUMnBEVix6V0pdnq0PhHJlLcfKwoZR/wDiMrbPuKr+i02JouPPO78K+LIYB/8Atyh335orNN/Hlgrh3PtfwMpsmXjse6PyywACqII7WevcgXX7L1zwh5+m5sLmTPfiSuDWg18hIsEHrXK82x9Fx5QyNjy0tcCWu+VxP36Hp6r0Lwrl7Wtx5mmN8VObTq3EcX7cc+i0s2as+Hq4OPar1/DyiQWkjg0ehV+UvNVdfVaPSH7oW/MCTyfqV1GKxrhe0XXRatZ2z5P6+WF5mytx68ALF1KQvxy3gjc2x9wtpmwjZxQoLQ50hia6/dRa3arWO/zDzPxRqUePqbIQ98mSHuf5TR1I7n26n07LzTxNkRsy2ubOfxTWW4w2CLvqfsOOV6L4rgbNkz/gqGRK0tc8A2Afdcvj+EIrcJzJkTH+Vrfp6Laxcivpjy8W1o28yfkOnleZYmmyLk28gAn7d7PHPRV4UGVlZxjgifkRg/ys+YcjmvTtXovWG+DcHChMurZGnYcTRu2zSuc4jnja3vQW7wPEfgjRsdj4NbhkeG8eXiEf16rajLM+nmXwVrOplwWnfDXXcxrpYyYoqv52Fu89eWnir4W/b4G1WAAZsuDlOIB8t0IOwAd3Dn9132J4u0HUomHF8Qhj3VQnibHdmuhVrUM/KwoW5LGwZ+KXm5YT8wriwOhHYnqsWTNeGxiwUt6l5Pr+gnTTIZYJgC026OQsiB46cXf6rbfA7AezUNUzNjmxmNsTXdnkm657r0qbZrWEHSxMdG6iB1H1AWTpOFFi7YcWIMjaD0HX60sV8/dTUs9OP2X28f8AjNG2LxHhU026GnduOir+HUDY9MlkbfzPDTfagth8ecSjpeWARZdGXehAulT4AgcPCuJKI3fxNzyaPNu/0C9zolqzaJmfTkv5VW8YZisb3LfJSIuufNkKKVShQIRSVCJQVCqREqVSVUoUJQoKkoiygopKhQtCFBUlEWej/A3LMfiLMxrps2Pu+pa4f/6K9zXzh8K8g4/jnTr/ACyF8Z97af7gL6OC5Xq1O3Pv8w7noGTv42vxKQiIvMe6IiICIiAiIgIiICIiAiIgFQ7opKh/5SiJ9PlDx5Ocnxprb7usqRv/AKTX9loQs7XJDNreoSnrJkSP/V5P91ghdlhr244hwHInuyTKoKQoCkLKwJCqHRUhVBSpKQqgqQqgpQkKpUhSFKkpUhQpCKyqClQFIVlJSpChSERKpAoHRSFKss/R2s/GCSVodGwbnD26Wtf45GPqPxK8L40W0vgiMztvYEmgT6fLa3fhZgmzJYiB80RA/Zc5omLKfijM2clxwsNrRf8Azf8AQri+t5bRyZrPrT6h/FsGP/gReI8zPl6m3CE2PTgOwC5zW8aLT4ZJMgOMYBJodV3OFGPLYCBwFi69hjIxnNa0Xz2u1z1ZdXPt87tk1TxDqE+laL52Hg3vkaBTnAmr9a5XrUPw50nQPBudqGLhMl1KLEe5ksg3uLg0816rEi0qXRdXOpYbi2YsLX2L3j09unZdng+LmNb+Gz8R+1zfmIFtN81/qt7FnrHhp8jjWt5h85aB/gej6lBN4k0mbUcJ7DbYifzHuQCDXXix6rsvhb4RwdX1+aPUMNr8LKbI9kJbTowD8prq00a6lb7M8F6LnZsj8XUn4uLI8OELo9zmg2aaf6ei7Dwri4XhuSaTAmfkTyUwyytFho9Arznhhji2n1DnPEPw7ytCyHf4VI/OwRycXIBe5gv+Vw5/VWsbQi/Cjy42yx87HRycOY4Dj6j3XpAlfkvEs+TL0IoCvb+i1eVEyIyNgBAkri+47rRz2je3p4K2pXtsseHN4gayQ8tNelrttOJ54HI4XM6RB5bRY5K6fDoBtGyQq4oOR6XMwfKD3XN6uLifQ9Qumyvy8nlc9njcXD3VsjHghzsemwY+JJlTADbyTXJJ449+y1OHpGoa3OIsdj9Ow3vqWSgZX+w616X/AFXUuh/EQiFxIZYcaP6LLihm05rZYZDQF0RusXf90xTq22fJ5pr7cr8SPBen6T4Tgh0yKP8AGZUoilyZiXyvYAbbuPIJ+3ovG9Wk0CbDwdH0zSMiHU4pyMnIkBLZGhpquwFkAjr3X0hqurYet6a7B1RvlBxBZICPlcO/2XnTvh7Ic3jW8F2NJ+ZxZT6/156/fst+uWJ9PFtxrx7hm/Cnwxha34J1DT9ahiyYIZnCDzGguaC26B619+F5p4m0fWfBGpyP06Sd2k7vL2OcSGgm69vY/qvfNLzNI8N6VHpmnXIRZP8AM57jwS4+q5XXWS+InnHniayCJwe0epHqfVRlzViNM/FwWiZmWH4F1DF1XSo3YriD/NEerT3Xb42IIo7o2sDQMD8K6mim8fb1XSbQW9loT5nbcvuPDx346YYl8H7w2zBMH/QGwu58NafBo/gvSYC1m0YkbnULsuANe/JWF8TMIZfhPWIaBLsdzh7kcrV+GtUzdS0HwjJAC/FjxYzOa5c5rdv3ohZu+a491ljphjJk1Mbhia/jjH1FwbGY2vAcGHta1q3vjBznaqHOBBLAtEvoXTrzfjUtb8Pi3W8VcXOy0r62IURbzy0KCpUFQkUFSoKJQhROyLIKhSVChMIKpP5lUVSUSKFKhQs23hGb8P4p0mS+mVGD93Af3X1Ez8oXydp8hi1DFkB/JKx30pw/0X1hH+Rv0XO9ar/esuw/jdt0vVWiIvEdOIiICIiAiIgIiICIiAiIgBUyfkP0VQVEv5HfRTHtW3qXxxku35Mrj3cT+pVsKX3vdfqVAXZ0/wAw+fZP9SqCkKApCuxykKoKlVBSrKQqgqFUFKqoIoUopKpSFAUqVZVBSqQqlKspUhQECsrKoKQoClFZbzwdf+PQNHcOH14V3Gw3x/EHVppGt+aKAMcP8oDuP1WJ4Xl8nXcR3q/b/ZbmSQ/9/wDJgLTtGOx7T62T/p/VcX/Iaf8Azbj8Ppn8Pyb4c1/Eu1g4Y2u4tX9gc35grEPICzGkbev6rnauumGrzdOZkNII6+3Ra7/BHeYNrhXPHPpS6YtvkA8qprB6KJiGSt9Q52PRQHNtwFURtbVEWLv7rPxtJjjIIJI68n+62hj46KdldbqrUxEHyT6hhSBkbKjaAaWuezzJQa4u1nZpF8etLGJAJPqq28yyUj7XovlIrsttiyENsdVomSEuW1xiaa1ponr3pZKSpkpuGblSbme491pcj5pDa2c17SD1tanI9T+ZTeVcVdKWtLXcdO62UFPiEbxddD/ZYEZDvssvGcWuBB7qtJ0m/lZ1DR4MhjiWhj3cFzR/ZaB/hhnnvkAadxAPFfKO30XbgBzO3KtiMB/N0smomPDHGSY8ORxdEcyZzuAASRfus6DThEOKLjZJ9VvpGAWAArJaO5Fqk1X72NBEI+iyb4pXWtG3taomaNttVojTHby5/wASsDsDJDvyuieD9C1ct4XbJH4H8Ly43yj8LGH2fzdv1XV69/8AoZSRdNNj16rXeCoW5XgLRXsHyDEjNehF3/QqdbqvintvtpfG0Yj1SMDvED1XPLovHLg7V2gdo2hc6vovS41xaf8Ah8S6/MT1DLP7EKKFvvHFCEooSKCpVKJEKKFCUFERFkFUqSoRaAqEKKEgNOBHY2vrXHNwsPqAvkgr61wv/wBJD/4B/ReB1v8A6S6z+M//ALP/AEvoiLwXViIiAiIgIiICIiAiIgIiIAVD/wAh+irCpf8AkKmFbepfGuQ0syJWn+Vzh+hKpWXrcZh1vPiPWPIkZ+jiP7LDC7LHO6w4DLGrzCoKVSFUFkYpVKQqQpUqyqUhQFUpUlKkKkKQisqgpVKqClVIVQVKkIqqUqEClVUFUqFIUqyzNLds1HHd3EjT+4XQ6iPJ+IeDKXGsnAc3b05jk6/+5ctE4skY4HlpB/QrtcqKPIlw855+aIhzXezuCP7rlf5HGprZ9A/hVu6mSn48ush/IPssuPmlgY79zQQfZbCI9guUh3K9uAAr1pXQ3kqiMe3dXSKIsK0QifaWtoi1ZyHUab0V9wto2qzJZNVwVMx4TWdS1s7bs1zdrXzyBrtt8rbZLQGk3xXVc+65MokVtBpYZidtik7Z0AsXS22DtaLFX9Vq8cbeeVs8Rtu5WSsTEmT/ACyZ3DZZ4tafL4Jo8LdTQdeTVXS02cwsNUaV8kMWKYljY0hDy3+q2MPJpaSZrm/M0mwLW60xzZYA8daorFWJZbR9s7G3tYGOcDQJJ6Ktxka42AWqWDnkK8wAgWFmirVtMQxHFxPQqk1fPVZxjB5KtOjF3QUTXSa3iVgWKIVL3dvZXJBya7Ky7guJSPSZc544k8jw9qEgPzCF9fXaVX8O2mH4faUyRoa4YUe4X3LVb8VRnKgZhg8TO2u9m9yP3W0hgjxcPGwsU/wmMa36NAr+iyVn6V19uC8XvvW5QP5Q0foAtJaz9fm87WMp4qi8gfQLXr6Nw6dmClf0+G9UyfJy8lv3KVCItpo6EUWoRIiKEWCoKIoToUFCVSiREUKFhQVKpKJgAsgDvS+t8du2Fg9AF8n6dH5ufjRgfmlY0D6n/qvrKP8AI36LnutT5pDrf43Hi8/+FYREXhupEREBERAREQEREBERAREQAod0UhD0REvk3x7B+G8aa3GRV5cjv/Ud391oQu1+MuN+G+IGoOqhM2OQf+gD+oXErr+NbeKs/pwnLr25rR+1akKkFSthrSqVSoBUorMKgqlSpBUqzCoKpUKQVKqsKpUKQikwqUqhVBSiYVAqpUKQVKswqClQgKK6VBdxiY8mT4fiAeQ94AHsuGXpXh3bkaHj7Ty1v7hc7/I43irLs/4Xbtz5I/SvRcvzoGbr3NG13Pcf9QV0ELr5XF4Unk6nmwD+SXnnpYBtdZhSFzGkfRcbHt9FbeKqB7K8QS2u6xYnClkA8LJE+FLRJfNd/op22ea6K0HgE36q+1wqyeOyRKLbhq9ccI8c0QD0C1MEbWsBNevVZPil0jsW4gS4c19lwGX4j1KBpGJityHNNFrpdvH6Kk+23jpM129BgewOANWVutPawEbyKXj2B43d+IEWrYcuA++Hl2+N30cOR96Xf6Xr0GRjNdHK0g8g31WSu6+ZYbxNv6w7HMdEYfkq+nC53NIJNdFjS61GwODngg+65XXfF2FhhzsicNd/IxhLnuPoB3PsptbvRixTj9umpm2zXoq9KkbFkmNrhseSQL6Feew6vr2qMEkWPHgYR53TG5Xj1ocN/ddV4QE2VkiZ9uij431+b6eyxepbM1/pMy7cNJqvqrrflHBRpptCrCoc4A89Vl20J3aVZdxStv6cFUF/SuiF3Pt2VZsmKa8rclCyViyv4JCuTP4N9SsKZ9NNqJZGoyH+dr0LG2THG9x70TwP6raZJdg6bLkEXTCT7LTaJc+u5sh52xho+5W08U5Hk+H8pr6FjaPqVscanflrX9tXm5Zxce94+oeWyuL5HvPVxv8AUqi1CWvpdY7YiHwu8915tP2m1Ci0tSrpKi1FoidFootQSidJtQSoRQtoRRaInQotQSotExCSoRQi2m28Iw/iPFOkxjocqMkewcD/AEBX1Mz8oXzf8K8b8T4602x8rC6Q+1NNfvS+kR2XM9Zt/wDLEfp2X8dprDa37SiIvIdEIiICIiAiIgIiICIiAiIgIiIPA/8AtCYZi8QabmAcTY5jv3Y6/wD+68pC99/7QOD53hnCzGi3Y+RR9muFf1DV4Eum6dfuwRH4cd1XH2cif2lVAqgKV6DzZhWpBVIKlSrMLiKgFSiswrBUqlAVKswrBVQVCqUqzCQVKpBUorMKgVKpU2pVmFVqoFUKUVmFa2+ia7PpRLWgPhPVpPT6FaYFTax58GPPXtyRuGxxeVl4mT5MM6l1GBqAztdyZmsc1szASLs2BS7LTZQAGk9V5x4fdt1Jg9ePqu9xGl45rg/oQVwPVeNXjciaU9Pq3QuZfm8WMuX26NjiBau+bxSxMdxMLS6t1K4DfRed3PYj9r+7mx1RshPosR76JHF9VU11Cx91NazMlrV0yZWtkFO9fra0Wo6Fp2UXPfA0PPVw+U/t1WzMtk7XEWrLtzmODuCb6Hss9cf5Y5y6jxLQN0DFl3RyRiRnSqBse60eV4Flx5L0nMlxgQaYBbTz6dF6BiM4cXEWaaK9PdZMEbtp3OHDqFEchZeyGG2WY8vMm+B9ZyAIpdSdFGTyWNtx+/ZbXSPAWn6Ud9OnyDZMkpLi6vft+y9Be4jgjr79PusXId8poEsuip7awp81pc/HpGMXtL2bif5XEkfot9gtbGzawBoA6CuFhGMB7C3dfRZMLi2gB79e6w2p+GzGfcalnFxAJvhUOdZtWZJDx157KS+r6UeVimsxG162javzOULuCrLnc8DqqmuBaQVSJ8r28R4W5Xc/usLKdUbie6zZxw2votPrL/JwsiQA7tlN+pV9bYptDA0LPxMJ+dNlzMjLyC0E81/sLQ+KfEA1RwixwWwNN8/zFaXUT/8AWSiyadR+o/2VjWu16X0rHjrXNbzL5l17+QZs1r8Wniu9JtLVNpa99yOlSi1TaKDSbS1FqLROkootRaJ0m0VNqLROlVqLUKLRbSVFootVTpKpJUWoKLRD0v4FYhm8SZeTXywY+2/QucP/APJXu3ReWfAbC8vRdQzHCjNP5Y9w0f6uK9TPVcl1G/fyLO96Pi+Pi1/aURFovUEREBERAREQEREBERAREQERCg5j4j6adV8FatjNFv8AJMjB6uZ8wH6hfKQK+0HtDmlpAIIor5C8U6adH8Rajp7hQgncxt923bT/AOkgr2ukZP8AVHPdaxf5yNcgVCqBXtvAmFSkFU2pUqTCtSCqAVUiswqtTaoBVVqVZhUpBUIpRMKlIKotVAorpXaWoQFSrpUptU2lorpXam1Ra12vZ/4LCttmWQ7W129z6cKuTJGOs2llwYJzXilfcsvStbgPieDBjcN4BLj9O31XrmC4NYHD1+tr5h0fUGYHiLAyH7gRLtfu5sONHn72vpLRckyYjL6kD7H0/RcH1S85c3fP2+p9Hw143HjDX6dRB+Xgg30Hok5IaQ3tyrGJKOLr5j69KWVKC6O2UT1r1C8+KPU72vfKC47iORz7fVSJy4gggE8/7/Ra/UMfIkcfIG2R3FHkD6rWOm1bSXOflYIyYRyXY7iS3/ynkrLFohWtLWnw6hxkksNbQPpX7rJhxnSMqQmlxeB43hzHuix4ix7TyJOCPqD0W4Zq+VLRD2C+OCB/RJyNqvDvMbl0mPhNaHbQQCbPPdZX4cQ8Amr4C5N2dmsdZl7rPg12VoAmDXDukZS/Bvrw3uwlwB79lM2GBRFccfT6LTy+IQ1tQwkvPNnstbJq+dI+76+h6KfkiFa8DJPvw38mNxxfXjnoVjOY6GmUNv70tYzVMtp+Zoce/f8AdW8nxE2CIuy4XMaO4KRk3KL8S9fMNuZmxkkk1Vj6K0zJa8cmiLsdO1rmI/F2BqTjFp0eVlytFERx9PazwOnqsmHIzpPnmw5ceM8HeWnn7JMx6a9sd6zuXRxHeL54/ZX2torG0uN3kEyfzEUPb3WY8CPr/VYZoyRk8aWZndye3C0msuaMZwkJr8x9q5Wymc5ztw4aBxz1XM+LMxsOn5Ur3bGxxOc76C/9Flx1ibRDDltqlphws0m+V7z/ADOv91RasQTx5ELJYnB0bxYI7hXLX0jDWIpEQ+Lcndstpt72qtLVNpaysOlVqLVNpajadKrUWqbS1KdKrUKLUWqp0m0tRai0TpNqLUWotE6TahRai1CdKrUX7KLWdoOA7VNawsFl/wAeZsZ9gTyf05Vb27azafplx0m9orD6N+G2n/4d4K0uIinvi853rb/m/vX2XUBW4Y2xxMY0ANaAAB6K4uJyX77zaft9Gw4/jxxSPpKIiqyiIiAiIgIiICIiAiIgIiICIiCF8+fH/SDieJMbUmN/h5sW1x9Xsoc/Yt/RfQa4P4y6L/i/gnKkjbunwj+JZx1Dfzf+0k/ZbXCy/HmiWj1DD8uCYfMwKkKkFSuqcfpUCqlRam1KswqtSqbUqVZhWCpVCm0VmFYKm1RalSjSu0tU2ptFZhVaqtUWlqUaVqbVFqbRXSu1zPiyQOmjbvaA0AEEnm7PH6LpLXN6xPK3U5I8cNEhAcHVuNj0BWl1CdYtPW6JTfI3+HFauPnIad55PBJr3X0J4PzHRsbBMSXNA5v81gG/0XiWswOc8SNJNkU3ddX2JqvsvTdNymsOj54eds+KxjhfAe3j+q5LmV3G30DhW1t6tDIA/aynE2R91uoDUdg9htK5nFmuKJ5Ydzm2Q0A0fqtviPEke2E2B17LQ9NyZ2zWAfMeNx9lTO0W5ruquN3XYFmuaCx8jlhffI/3Sx23DPjnUuN8ReH8eac5AhG+vzN4JWDjaVAAA3Lyo31+XzLsrtwWycO7rXZOlxlxewu3Xx9+30VIl7GDPXXbZzUeLrETS3HymTx9R5vUfQpJHrUjSXR499SS5w/ZbyGKXCstG9vpVLcaVksyWESRgNcaWWupbN8nZG4hwmLHrbpnMMUE3TaWSFtWOhtbkYWv+W0j8NDz1JLrXXtw8WNz5N5c1gaQ2+61up6i6UhrKpp4r6K81iPMsNeRbLOqw0f+Hal5ZdlagGN6nYwcfqsaLTIsl9SmXIG7rIeOPYcLOi8zKmuc0wH16reY0LGtaWgV9Vim0fScloxx5TouFDhwmOFrWMBshtdSL7LajHZLuoCxysHHj2SO23853O9ytm0Vz2U1eNmtudojDWxlrqB70rE0vFNu/Ujt0Vb3EbiB8wWLI7cS6Q0AOeeyvpq78sfJk2sJNEC7+/ZeVfFrWG42iSYzHgzZr/KA/wArRyfrxQ+69D1jLDIqa4DcSAa+6+fvGOqt8Q68TFIRBiXG1jj+ZwNmq+y2OLj7rxMsHJydtdQzPCmY0XjAkAjc0E3yAP25/wDldLa4zSI9s+M+MSkxuO6yCACefe+R/Zdha7Xp+WbY+2fp8163gjHn74+1dpaotLW+8bSq0tUWlonSq0tU2otQnSq0tU2otE6VWotRai02lVai1FqLUJ0m0tU2oROlVr0b4HaUczxRLnvbceFHYP8AzvsD9ty83tfRXwb0c6Z4PhyJG1Nmu8919mn8v7UfuvP6nm+PDMR9vV6Rx/l5ET+HfIiLlnbiIiAiIgIiICIiAiIgIiICIiAiIgdFaljbLE+N7Q5rwWuB7gq6iR4RMb8PkHxnor/D/ibP01wOyKS4ye7Dy0+/HX3WlBXuP/aE8PmXFxNdhZboT5E9f5T+U/Ykj/zBeGWuq4eb5cUS4/m4PhyzVcS1QpBW209K1Nqi1NoiYV2pBVFqQUV0rtTaoBUgqVdK7U2rdqbRGldqbVFqbRXSu1Nqi1NqUaV2udzWNOvPc5sQG1oLpWFzSTY5rkUDfVb5zqFkiu60WTOMrMljc9jYbaBZ5NXbvoBz7rz+oWjsiHtdExz8tra+mvzoJJKfO752DipXfl7cdK9uq6Lwufxmku04G3xfPC8+hsivusaXFbkYznuZLHEQdkbXhm0N557u45J/qsHwzkv0zVGOde1xAZtINA/5j0XgZqRarrMF5rL1XwZqTX47hI4xyMO14c69tVzXZdhhSNE5MZbdlvHFj1ruvL8tn+F6vFqMQDsbKDWS2arrTj7c/qu+wchr8UNZRkPBc35ufr6dV5k0+noxfxt0zJ9rgGn5h39VkO+aI8AHqVotPnY9vDyXnii0jv8AqStxE4bnAg0BXzev9D9VWaRML0yLEsDtwLa4Vlwmbfyk17LbMawANJPuVdELaPBN8dFgmupbkZfuHJZmZJCDuhcR7C7Wkl17LxgfIwI9oBNukLf7L0Z+GyrcwdFRJhRvYwGJlOHNtBtZK0/K/wDyrRGoeb5Gu55DQ2DGtwB4kJ/tSyMTIzpv+JjtANfkNrvRo+KCHDGiaR/yfusmLHYHN+Rp9eBwlscJjmWhxU0GUyDcyMMJ7v7LaaVHLNBGfmPayKtdS7HhcKIAs90jgYw01tBYvjTbld0eWFDDsaLHoPur4AaDzx2r1UzbX/KLG02eeqsvLWMvcflHHufdZK11LUyXjSzK6ml5J5N+ywMhwfGyqJB3H3CyJ5WCJ29ztvNn0+y5vXtXi0/FlMt2BYHUkHgV78ELJ2teLOc8balMIZ8XG2seyCSRzy3/AIbQOT9TdD3556LxHT8ZsL2meQglwd1s7jfNdD/Rer+KfMj8G6hLI4HNzzt+Y8tbQNDvQaOfdcHi4U1h+PteAwPc+gS+u1Dmufb1XocSPG2lyrTvS02cmNxL3Ne+nAiiSb9R29qsLsGn5QT1oLmpIcdz3udvhkYTuAi2g/QduvXuPddEw/KOQui6b/2cf16NzXa5ai1TaWvUc7pVaWqbUWhpVaWqbS0TpVai1TaWidKrUWqbUWoTpVaWqbUWm06VWotRai1G06bXwvpUmua/hadED/GkAcR/K0cuP6WvrDGhZBBFDE0NjY0NaB0AHAC8f+Amg/Ll63O3r/8ATwWO385/WhfsV7Kua6nn+TL2x6h1/RuN8WLvn3ZUiIvNeyIiICIiAiIgIiICIiAiIgIiICIiAiIUGu13TYNY0nK0/LFw5DDG72vuPdfIWt6bPo2rZen5bamx5DG73o9R7EUR7FfZlLxX/tAeF90cPiLEj5ZUOVXpfyO/U19x6L0encj479k+peV1Pj/JTvr7h4ham1TaWuic1pXam1Ram0RpXam1QptWV0rtLVNqbRGlQKm1Ram0V0rtSqLVDpmB+y7fV0BfBVLZK19yvTBe/isbX7VrJnMLGlrC9zjta2wLPosZ2oQctErRICWlhBJFd/T7XapwWyu8ycEVJYNvDS6ieAeo4paWfnViNY/b1eF0m17d2XxC1nF74nPnbKMd7i1lNIqvbv1WrljbjSl8bmzfLxQBsehH2C3L2Bsb4HMcI3Mt7Xg9bJ5J5r0JPP0WriEXmTMY2g5rt248Foqvvf6heRa9rzuzo8WOmKvbSF3Bf5rmSOkidkE2wPp4kJ4O7uBzVfZYzo3jMeHNdJZ2tIiLQ0A8UpwGZOLPKcZxhc1p2yg7XX0Av0q1m6hH+dxfJNPH/D3biGtAPQJrwrFu2Xd6OY9d0F+PO07omfKD1rn+4WP4e1J2HPJpeXu82JwdF820vbRF3/ULQ+BdR8rVIscuIklZtvigB2/+e667xhojpoYszHBbkxUWubxXsfauq869e2+pejW3dRv9IznDHO9oaGyEFhcLDfUFdbhTNkaHOoM5LfpXReIaX4klhkcyW4Zminhx/ML7X1XpHh7WoMiCJ7JXb3NAdu72OotUvX8FL+XZbj5VC7H5uKpZQfbWkkBn91rcaS21tFuonj68rPFU1vy8m/8AfdY+38s8XZrW7gOR1r6q9Gze22fMbPZYkW4bWgtq/fhZhmGwtHJq+9ppaJmV4RgQfO02DfVYxZRceeOnFWFIlds2tBHc2eypc8AkCr2/05pNbNqHbRVA3apLnBwFHn+iqINN5HNDhWjI10ha1xrp1ulMVhXvmFq/neYyKPBtYubJ5fBA3Hp3/VXZHhocSTVevdcf4h1qPDnghkcXPnd9m0O4+wUxVivkXdR1RkcUoLwCPzWe3quSwy/xBqckz3g6fjPDW3/M8D9xyPutP+Ln8TZ7saBp8gktmkaSLF1QP05K9B0XTodM0z5mhoYwkiuB70loiPCcczPl5/8AErOx2GKCXKpsLdoia0kvc6j1PQUOvdcbp2Y2MvmjBxo4iAQ6L+G+weruo4J7FZ/i+tQ1maSWVkYa5xA6WCOAa+5+iw2RGLTmBsWRDC4OLtkttlArijxfTm16GGvbRoZ77sytz34hiY7zAG+WCwk1R7kDn1+i2wJAo9Qufiy5oXjEw3PfvaCPLFbqHQ1yT79ltcHLbkQtJcPMA+Ye/dez07JFZmJ+3OdaxWvEWjzEMy1Fqm0tevtzelVpaptRaJ0qtLVNpajZpNpaptLROlVqLVNpaJ0m0tU2otQnSq1l6Vgz6pqWNhYrd008gjYPc9/oOT9FhWvZPgN4a3Pm1/KZwLhxbH2e4f0/Va3KzRhxTb7bfD408jLFPp6zoGlQaNpGJp+MP4WPGGD1J7n6k2Vsuiiv0CXyuSmdzuXcVrFYisKkREWEREBERAREQEREBERAREQEREBERAREQOFhaphQ6jgT4eWwSQTsMb2nuCKKzU7JE6ncImImNS+PPGGg5HhnxDlabk2RG643kf8AEjP5Xf2PuCtKvpf4y+D/APvJoP4vCj3anhAvYAOZGfzM+vce/wBSvmZdNw+RGfH+4ctzeNOG+o9SrtFTalbjR0qtTaljHPLQB+YhoJ4Fn68LJhxGyODDkRB5IG0WT/p+6x5M+PH7lnx8TLln+tWMqhZBoHjg8Kh+5kj4ptsEkUlVJuDnC+tdKVnN/wDtuTCY3F8bXEPa0muWg2R3rkWtK/UY/wCkPRxdHnW8ltKjlxecIjuBJqy2h9FbdkTj5hE3y9u4/MD0NFV50jZp53RteIYgyQlp21fFgHm7WuzHNErXtjLC6UkW6gwE3VfTstW3Ly3+9N7H0/Bj+tsiR+ZE+IxZEfmCRzA50fq0HkVVdR3KtwXK6Z8LiXx7PMo0SbvcBxu/YK7K6QmKF7C0PmdOJmN3uDWtAqhzV89OByL5UGcQ5crchxDd7WgAbtwALtxrtwPe/ZYZmbe21FYr6Y2ZDJCC6MseGgucQC0kE+p736c9ltNJnf5ewRzMdCzdbHD5gebN9P7LCyJIY5Ru3vohwLaHUE9+P6BXPD0cDmF080IG4Do9xod/l789FSYWiZZDmumj/hQZL7lHR3yEj26vNH6LW6nFP+N2Mkb5ZYd28j5LHc3we1etLpMWDKjmjmY0xtFhjncOcPWuo7/3XOaxhSObMYYXvkbLtbsbYN9Pm6XfCRCNscHH8+OEue5woSDni+4qrItZ0EUTWwwiN07ZbHl7nNLXE0T9OfUn9lrPKkhmG1ocGt29genJ+llZ+n5LHmJuZdsdRFkAngm6F11FWrRKJUSyfgGxZOPG2N0ZoiNxNV3Pfp9l7D4V1nB17TmOjcDI8Dcxx5BF9f7LyvLldMzJefw8UDi2ERNBc6yOLJ5/t2Wx+FeQ+PxAMVzWhxBN1V1X7dFrcjHuu2fjX1btlvfG3hUZLhJjs2TjkHbdj0K5XRPEM+i5Yxc2HY2M2HckWPovfsnEE0XDA7jjjoV554s8GxZzHvEYbJd7h15/ZamO8f5s274/uHTeG/EEGfDG6N5LS3cdzgSPbjqF1sGSwjk8mwQW1V8r5ckOreFc0uhc7yd3B68eldj79F6R4V+IWPnY/l5FRSl1GN3oe4I/optT7hSuTXt7QzKbYZtB72gmtw2WXV8x9D6LjI/FWG2INc9rHuojc7aQDzVdVkHxRiQgGSVrHOPQg/raxTWZbFbxp1bcp2+iQ4Hg1zQ90EzWyOLSCw0B2rlcfP4wwYA0GWFxcCG7aJLR3NdrWvm8a4Ucr3fiIAAPlYH2SbvkDupiklskfl3WRltjsNLQ427mzwrJzWCN0nAb+n9V5Zq/xHwYoax3sfbQRfLgb9AuS1j4kZc0ZjxYi0k008Dd711P9FkjHLDOT8PTPFnivF07HeHH+LZLfWyOgC8rZLqXirUXeQJWsBouaeC02DXp7nr6KNG8P6vrssWRqEhYx5LwHE/KB+391674a8ORafjxbI2gtF0Dy4n29FNprSEVpN52s+EtBj03DiZFA1gr5ronp3WZ4tyG4ukuhaQx0vyk8dOv+wukijbtG6m+3Sx9F5v8TNQghidFJI108oMcMe0mgbt59uFhpHfdntMUo8wz4QMubLZNLveDbmDcbBrkdhx14P2WRizRy+TDkvaA024t5aQQbeLNXZ9AKVzDblnDdmtki3sDWXI1zNxbfyg1Vc3d1fuKWPA2GSV4il8vHMEklEXVsdba6k2BXT+69aI8aeRM7ttJyIHYBeyBuPI1wYXA/nsdbFc8EKZZGxCKTEmbJGW7rkbyw9SA48kfrQVqJ2PHgtx5pnSmQudLTeh42kn069/qszTWtnmZDNEyfGjjLjvcAQSDRNdeo9qVo3WdqzWLRqVGDqDpdzXU8N53NaRx16f7K2NmrA4WkwJY4yBIxjWyEEDebFcVxx3vra2ORleWchsAJmO4OY40OAKdzxd2FuYubeni3l5efpOLJ/aniWVaWtVFJk42G+WYH/iEW42AT/Lf9uqvxZT5fIZE3zHkAyu/K2OyaJPp0W7TnY7e/DzL9JzV/wA+WbaWrORMzGkEc7msfwfUG+4I4pXA4EAiq6grZpkreP6y0cmC+PxaNKrUWqbS1kY9KrUWotRaJ0qtRai1FqqYhuPC2i5HiHXcXTcUU6V3zv8A8jf5nfp+p47r6u0jAg0vTsfCxGbIIGBjB7D191wvwb8I/wCBaKc/Oj26jmtBII5jj6hvt6n7DsvR1zXUOT82Ttr6h1nS+J8OPvt7lKIi0HqiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgp6jlfPXxg8Bu0/WP8X06Pbp+W4uma1pIhk6ngdj1+oPThfQxWLn4kOdiS42SwPhkbtc0i/8Af9llw57Ybd1WDNgpmjVnxrmYrsOXZMG1QcDzy01yO/2ICtvkZGdrI3OdQJds3br9B1Pp0Xb/ABF0Cbwrk5DMiETxE3j5BZyWnq7g8EWL/uCFxMEDRA98Qmfkt2ufM1/AY8iuDyenX1W9/wAm9o9sNeJip/1ZEM0ogdA4t2Nb5l/5ieNrge/PAWGxrH4jpg00w/JZ6cX1Pf2R+O6TIfixTH8SHtLd7fnBB4Id0AUahmahi5UkOXIJ/MJNSckPFih7H9PRYJ3PtsRqsahdOU7U8aNu5xaB5XG0HYOnzHk88n0HVa4hrcObFnLRsbw9gskjrZHB4P0V7AZFHlwtyG7mzv3ARuq2u9L6d1b1VzJtXEmOAGSupsbR+UtNWexPe+qmIiCZXNMdiyYcrHAMe7HcNzQeXAgjffIHrQWLk4uQ3TnSyHfFFIP4jS0tsdr79/sq8OOOP8dA55LWiVwc5u0PIaffr2HKxvxkj9BgxWyNEcsoe6NhI5I5Jb06d65VteVYln5zSZ8B00MUeQ87i1oJLQTVOrpwAa54VqJhc6WWaRhawlgpvymwR9utd1OM6WLUIWBjmDFgdyB2Ju76iwR3rhZsOOyTTwzzxMHxn5ia2kWdvPIPPXp2UjAkhbHFJDkOcxgL3kuaezaDQT25+iu6P5EOqvic6V8MjWu2Bwj5HWieL9O6utsYGSDBJ/DhAcwuvkknm+3AWrxoHPyGyU4si2uD+RtvvfVJ8o26rLllycl2KBBE7ywwRb9x+b0f2NcnpyVqM/DkimaYrjiD6G69jSe4PQm/0Wy0h8LMh8k0YfK/cXRwsLTus8m+BzQ9R79VclllzHvjyMdn4YOaCISS2Lk1tI6myCTRP3VNaRE7cfquJNCJAAI3ABxI9L4J+/sq45MjyGRhhdMHCg03Yod/2IW71Ly2wmMPLWhwDo5CbksEB3v29h+pOhyo5IpWva7ewWGFrhdC/wBuCrwTLoG5gzGvc5jWzvyG8kAWQyrNdBQ+ncq0Jzi6lj6jgZLZp8d480iwCD1LT36Eei0GLkzEug5bG7a9jTySfUnrfK67VceOTT3vL2l0bi1lCvNFDv1q7PoomImNSRMx5egfDXxXl6tk6hiatLEZmv347QKLmEdAB1pdxLiNmZdAt44Xgmk5QxcjCyZB5eTjuDo3AfkBP5j3I7Eei968P6nDqmG2WItD/wCeO723/blebyMXbO4enxsvdGpc7rXhyLKieJYQ9ju32XmHiD4dNaTLjAtb1G3t9V9CuhBJAoXfBWFlabG4uBjFO9+pWKuSYZ7Y6z7fLWV4d1fGmDYxNK4UQWuPIHbosKfG1BoLHjPFfmAcXVa+o5dFhdTQynX1roPqoOhY7uTExzr5c9vX9Fk+dhnB58PljycsxNY2LUdo47gV1sK7FomqZLaiwcp5Ju3kkfsvquLR8aNoDIGV/wCEFZbdLxY4w0RgbvThPnRPHn7fNWlfD7WMhofNsxWHgNaLJ/0Xe+HPh1jaRksmkH4mSrLpBfJ/6L1pmnwtFMjpo+/3UjFa5tE9Df3WO2aZZK4ohp8LS4ms2tha1o/LQs36/RbfHxtnIq77LMjxyGUO39FRK4QRlziAKPf0VNTMs0TEQ1+sZcWJjSSSPayNotznGh+/9V4d4j1vGy80zMilfKd0e1xDdtcEV6mj3ul0fxH8XRmdmLjvkc5p3ANA2gju71+nquCZM7UIZJZpzPLI0AF52gE2NoaO/N3/APK3+Ni1/aXncnNv+sKNVyshkMb8Vr42ucXws3CiRR5Pr1Fd1iQzxteMhlPnk3F8BHAPPy/TkKjOx54g3GDmcNje5jXXseXOG33N9evRURRPDC5uOywKJI5JJsn60txpsmSB77nxnOtpIe1pohvv7eynPe6HGhayRrHh7RI2uQ4gHnvVVx6Lf6NJG4ERsYxsrmvc4tH5m9gPT1C0UonOttmkixmwzSOkETX9ByLP+Ucmwn6FM2NHbhE8TZL3OLmtNbQ2jYHoQTx7K5FiVHM6WIuLGgNANWA4frwaPusyDD/FsbJOHSthhGySwC0tceAe4pxCycHDMc3leYZWMkfF5d3+ZpG4Duf2UTIwIHFjXTSvb5Wxs4jLru2dQOh7eqw3RNh3MwSTG9jWPbzySOlBZsj2YsET4g17ZIX0w1TaJFE+lVwrGVkvx5I2Q7WRvDJHlpve5o/p7KYR5XWxux9OcWbhOwghpIO8E0AL9+VVM/IxY2y5TJNx+VsZYW2K6iu3e1RrGZ+IxdL3uBBcXO2sDefr1qz9FkanKJsXGjLHMA312LT9fRTW9qTuFL4q5I1aGT5UvktkdGQx3fqP1+vH1Vu1nATQ6VjQYj2yAMbTZWhwO7kkdCOv6rF/CTtPLD8/LeR8w46HuvSwc6JjWR43K6VMf2xf/wAW7UK5NDJDGHytLGkWCeO/b7q0R6rfrkrf/MvLvhvj8WjSV6R8G/Bp1zVBqufGf8Nw3jaHDiWTsPoOCfeuvK5TwV4ayvFOuRYOKCyL8081cRMHU/U9h/ayPqjRtNxtI0vGwMCMR40DdrW/3PuTyvN6jy/jr8dfcvT6Zwfkt8l/UNgBQpERc+6cREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQc9408N4vijQ5tPzPlc4F0UoHMbu31HqF80a5iTeHDFiZmLWp4sn4aWN0hAfFZLC09xYv+vovrhcj488IweI8UTRxxt1OFhbDI4CnNu9jvYnv1Buu4N6X14VtXb5h8l7snEyDFTnNAcWgDm76jv145IWJrU2MGSGMZDbALRHW0EGyPWvfoVs3Y2Rj6xk4OrR+RlafIHmR9tJBJ4Hdx5HPNj25VzU4Ym48WO6RrmtEjPlPz8Hg04Vf0JsLZYtOd1PCnbBjTNIdIz5muLjYjNEUOg69OFGswtx8aB3nxxOE4vHY4OIDmg7rr6Ee6vCHLdpDcgObDBsMTqcC98jDZse1gXVDge6xcxgmwcmw+UztBMro+7Tx0PvRPborwiZ+mWY4cbXGtLHPinic9kRAa4tcwjfuHTk9Oh6/TWiCP8BivigLQJnMaaBc6uLAHNg/b0VelZETMxuQ1skm3BlY9nmCwA2jzd1wfsqcpkjcHEmc0hoe9zHRyDiwDto8X6qUbX8jGfDrDQxoex+G1hjHBdTRd1xdj1/ZZMUjJ45nGJzo2YrWtAdsDCXVuofc9eVZfCMvW8yDGpwZGPLcXUR8o967m+eVmaRjTxwTQQvjbL5D2SNkde4Egj7WPsm9G5V+XKzSsiNrnujcGtaZXtIoWLodBx15Kpwbl0/Lj82OF9NJjdVk9eCOS3of9VieXI7CY2W3ljDG0M4bbXUTxyBz1Ivv0WVlfi2kNmZFNEWx7HwstpoD5S71rt2Pqo2S0+JnZWLqE8gADGu2udJ0DnCr45HFX19e66zTcl5ZJNG2B0TiG/wAMu2sbyLcLJc4kChfPXouYljmjyp5DA18BJdW4Foo1+YGiBwLsq/p+oS4eRFFMS/T917LHAHPbkDn06CkmN+lYl0k2BhnT8afJMYG0/M4lrXNPFmz0q+egHbgLmdYw5jPFLE0MjfEQAXggDoQDV32/1XT4uPJNi4mRiMbLZLG0KG27JAdwTQPtYVeXi408e6BzpCxpDY2lrNjDfPzG662epKrHj2t7cDKYIc6RzoyWk8c9AB2rvfZX9PzY/wAVI6eWbcSWUSSGtLe3oeAL9FsNRw2+UHQYzt0jflBjLrFVXHFDaee3Vc3mxzYbW5ZDPKf0bdggHseoNeyv7R6dhjZMeRh744xJkRt2CN5ALq5uulV9/qVn6Lr0ui6rG8ZLg6ElhJ5a5vUDj0Jq+q4zSc4tMRxxvutxe6g6+x9Vu5Dj5mmR7tkbnvAe8AkiifTv3+irasWjUpraazuHu+geLMfUsow5TWY8gY1zHl9tkJ612u746rrWAOA5vvf+i+bNLzA3Elxs4NZEx7jHK41Tm8d65sGiLtdn4d8YalhY8cO+KaIML3MLtzg0c2O54F16LQvx5j09HHyotGrPXvJBeT3HS1bMIbLvbfv7/Zc/4d8XYuqYold8g4Bduu77kda9OF0DM6Gdp8qWNx9LWvasw2Yvv0qB2ggAfbiiqd7XGiDx+ygtLnCwLJ4rm1UyNrXkkD35CqvPpI+boKHTqrzI29aN/RWJNQxIBtdKywLocn9B/wBFzereNcSESNilihLflc6Qi2WO/cdRz0VorNvTFNoj26rImjx4i+Uho9z/AEXmvjzxQ4wT42D5ryGlxEJ2kVzbj1oj0F2uO13WsvUcif8A+4HIa9hc0xSVYHZpPU9a7WK9VoZcSKbGkmbn5G9rPMkMgcSB1oV1PX6d1tYsH3LUy8jxqGNFq0rWTlhbGHuB8qQCQH1s833JHWlrNSy8XFyXfhBEKcXENadl8HcL689OAAOFlz50EbTlwbmzSxbGRRPDaJFW6xVcdOo91z+QXyOl8toexr6c1xraT2H6dOi3oiI9NL35Z+NJ83mNNTF267PaiP6krosHEjc6bz43PjewPL3HZt9wb5PeupWh0nT3teySRriXVbX/AMwA/MB7C+/RbpkLZI5QMnyminR9/MAdVnvXI9fTlTMjG1jMdjYb4MUyzAgt84u4cBVEA9+QCL6dKWFjYkp05sZjEckJBe7dYO4nqft06gra5OFJqTMrGjnETInPLXuktpe1t8UPb3F8e6wtMw8qIfiJmNPmsO6F3zcEUCADXU8dD9E/YydOYYXZGPO5zaBe7a88kdG2Oxs/TurmS/IdqxO2WNj8u3W4O8u6FWOpo+o/ssuXSYocyaEEkCFr37mu+Vx5Ivs4NDjXce6aOwO/CskaXQunZJI3gGRpkFUO/SyOFWZGs1HHjcyXyTHvbUZY4n/KOK6A/wC+VjaiI434uJNG9r4XWaA+YEXd+nvVra6ZkQZ2bIA0EFxfRI/MARt+q1E5jlwsPJka85JmcWtHIew9h2uwbCmJGyyooH5WmRNcWQvBFkbiLN1xXqfsPsqtYdG2fEixnGeAfKBKaDiTdkdR25U5sLXahhwuLg2aNrmljiSAQTbewIA9R+6s6tmDGLYBAyQNYwtnADjXNA9r56dbT9DJ1+X8RJjuMcbXeWXHyY3NoAVdHgdlZz453NEZbcELbBDqLS4A/LfI7cUs7UGySZMTJXSmJnEUO25Bbe9dB7X2WDlRy+e0wNnPmR2fNBadwNcXzXbnhRr6TMtlrPnjSsfH+XyztaZHuHy2RYP378Wq9G0bM1XMw8PBjfkSTyGMAOugL+YX0aKJPallzadLqzcHB0+X8Tkve2N0DW1f830JFdaoL6D+G/grH8J6dch8zUZR/Fk7MF3sb7evr+lROWcX+ZVnHXL4tHhneA/CuL4U0RmJDUmQ+nZE1UZH/wCg6Af6ldOERalrTadyz0pFI7a+koiKq4iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIOI+IHgXE8TsGVGBDqUcZjbIDQkYR+R306g9fsV4Rl4c0OfiY2othiy8fdDO2RobyBxY6EEEEEL6uXG+PfBGF4qxTKGxw6nGP4c5b+audr65Lb9OR1HoslL68Sx2rt8667ix4WvyY2UA7DhnLRFQqPeBuDj1HNfW1ocVhknmc3yvw+KfkkeKaGO4cAD1J/ryOaXXeL9Jy9Kz5MbU/I/FR47aEjLLiC65Ae/Xl1k307BcpqGM9utz48Tw/zo3AkND7Bot/MSK7dq9uq2qzuNsUxprZY4Ixjy44dsgc6PYRdWSbcDyRXH7LJbjwDAxqkdsj8wNeQXcc/tyodDMyeOPUP4DJWtO1jQDTieb61f19lneFYXTzYMb4nOdEXteHSHaGgbiCOvYd1afyMGYGHMa8zMhgkiHzRs2g2Oorv/dZOkRGXEDA6OKEAtfMTbuDyb9TfWwOPqqcvT3w6lGyRzGRbQW2DVXe00bFkdLVzHmfHkZGLiYj5pTJuLb/AOHXykhvYUR15/qon0NxiuxcqZ2NhYTzB5zWReaWl4a8USTwSbb7CvVYkkkJn050cVlzWRkh+7a5oIvb/KKr19VdwMqB2RNiSteYp209+4gb2juOpPp/osfVWMfg5MsDmRPgexwaGhtNd+YAduf0CqleGHOdIx2/hXDELHF7925rpHF1uae547cdjzwuU1SFseewQRu2mLkSmutc8e9Lt8KXEZFFIRHlPxS6OFkg/PuO7eB128hoHIJvoOFh5OCGZk00kwyofwznB20ObCSezTx146Xx60kTpGoc9p+XNDgPgzKMADREWM3jffQkd6vmyV1uVmwOziXRCFzGtjY0MtzQG9x63+9ALmctmR5jsN0TzE75n0a4q+R6Xz25WJiGTAYMgytmhupC0HzGkn81nvx1UzBt1Wp744gJGxsmxwIo4qoPDgSKB7df3JXIarC7MYx0zXREOO+jdu46V26fra6vEfj6nDjZMEz9jLd/GkO5z+L681XHYA2qdTbtmY6Z8c72OD9hG1m5xNkhve/mvoQ2kRvbz7KwsqGNrWgsDzdkgbuvA7g9VYifPA4gzOjia+7Buu4NdvT7Luc6GM57cuSJogeze58LdrXOHIrdyRYHP6rVv0+HKlfTneZkOBNXZA4Lj6chx9Fb2aRpmoxz47sWaAOa9xla5gPzEA17EWenNLPgMLIHZUmSGZ5hHlsY+uCQ0E31Hva5rUNLyY2ZBZvdHE4NqqHJFkenzGvXhWmT5WPUcxkbDGC0WSQR6evcfdRMDvdLlm03NjllkMQca2kfK+z6/a/bqVn5+sZUebLnaRM5sDCGGMuuyOOnTsSuBg150ePtie5mx5IeXEGyCPsaNd1ssDWoJJGxHHibDKzbK4kEmrG4335JtUmkT9Mlckx6ejv8X5jsXCdjA7p2FwPmhodVdO/U10WC3xo/JZI05U8czWkCMkOa6ruvQ9fsuDi1qOOOPFyWsMMe6Nzw47/auwb347qy3WizBOO6USU5pEoaNzAPzAE88ixVkKPhqtOe/wCXc5GvZglifp+RM9rrB3UYxf8ANz0F0ue1TWMjIljnzqmDyYy3g8g1wRx26ei0mTrkrpWy4uSZGMP8NkjAOpv/AF9h2pa3L1zzsbFiEJ/gnduDySXepB4PfsrRjiqk3tb237MjHZlyFjoxBtBa+WxTnA2KPTlYs+rzDOkyIiyTGdE+MAO/hkltGge/otZIcnIjc0tlIJ3FpoCx/MQO3X9VmYOijKmimnc4MkG1vFjjnkngDobVtKMbGmdkSueQx+4Xwyhz1FLY4eI18cxYC10bw9l87gegJ6X7rPgjnLw2JrGRNfvaa5FUSa7joFmRYrMqKGHGa9+O9rmgNeWU8Ekk964v6+iJ2qw8WOXTRkB8pa53lU2j5b+O/p37DutHkaoYXNOKPnaPljv5Wj156ix7i1ssjKhwMXIxsLccnIewBgkO2zZs9rrtxdrR6Jk5DJ45ZMt0W6QAijbwHVyPT62K9kiJG18NCWQsa2R7ZRGXNa5lB5PJH9fqtrq0LXZAljfHtfslcwXJt3NqiDRPIuunKtYsIx5syUMlMrJQGmN5O5pHUdnH3Wx1GUOy4cIh0ePviG2iXBrGFwId2byPks8lJn6GHkSOifmS47y6NzGY21k28F5Av3I2tP0WTgyRP1/TN7pBAAI3HbsG2rsEcECif6KxBixz5elvmAgx/MMn8MXusBxHPAoDj0PCoyYnTStywGPMs7y87KcW1wPShd0KCjQyZcHEx4fxGO94DnuaCTt83kkUPWqPYrkXflgLHuYIslzGhpsAAenrd910ekZDjMTEd7mFroWll28Gxx03cei1WqxmTPZ5THMndlOEklVsJrgivWyff9kbNMjJa+TUdOhyQd4YAA9tcHgEEHpz1VuWF82dNH+HDDBGGPII+auL57noqs5rmalpseXue2JhYS0l2+n3XPf/AH1VDXTHUXhzTGZi3YbrqfX6fopG81/NiGoR+XFH5Di8AF+4WDXXr0/ZV4WmZ+oZMcOLG98skYbEOocXPJ2j06E30CxoNK1HWPE7NL0/HmkyWOMbY2gENYAOSaqzV2aX0n8P/h/geEi/KIGTqszdr8lw/K3/ACtHbryep/QLHe8Vj9rVrtb+HPgLH8NRNzMxrJ9Xe0gydRC09Wt/uf7LvUSlqTMz5lmiNCIiJEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREHPeL/C2neKNPOPnR7Zmtc2LIaPniv09R6joa9enz14u8JZ3hXWcR+p4z8vH/4MM0VMbJucLc41+a6AvpXpyfqZYOp6diaphyYmoY8eRjP/ADMeLH/z7jor0vNVLV2+MPEGOMWGOWCSZzmSuYxknLmBhBsjpfsDXNilXo2oSwYcjXY73tZk+bIA4+YGnmr7iuPVeq/FD4X5Om4D8vQvOyMNmR55hjYXyxCuXdbcOB0F/pa8a8Oumc/OjglDXuALiWkg1ZsDqR71wtqtotHhimJhvdaDM+SWfFhaySKQXH5lnoKDRdUbN9ePdUTMdJk4cjHxMzMgeXKxrh8rh2IHfgmv+iydTyos2HIdGwlwijMQiioAgBrqrvwKu/VYU4x8TBhbEyRuTDLvO6zvtodu3DgdCO3XupQ2GKZZs6Qxsga8Dyy7bXX5S4Ad+T9hSyMGN0DpnsDGYgmbC5jGjlpJvj974Ws1eeN0Ej8ItcY3Ne6IzAvp3VwA5NEcj0PdUNdOXRNMrWyZMLWOko0A3m6PQ+vXj1UDcZjsTTBlQ5EQgmjcWM3yXujJ6dLDQQTfJ5r0VnJYW6Zhv0nLZlxgbZ3hgc6LduLW9OlXR789CpEGNJjfjJjeNA3yMiWOM/xQ4A00u6kkHgWAsPJbE3CyMVsDp42MB82N1bIi7kk9D2HUm+ESCeVwb+DZYIERDnh7pQ496FDkkHutRkSMwXNngLHY798cke+uh60b4vp6hbzKxH6WRI/JER8pogjDCXSWOja4rnr1VnUsCPJ078TEyAPOQAGR38pADdpcf15oqYlEtTA1jHxlzvwUrP8AhSRtovBFVXSu98Hnm0wsuaGB8ufHNkYjON0bvlJPHQ8jjjv1Wd/h2QybCbK1oeIdzg83/mokdCeorkkcqgvzNOfLFlYzNkzzGGyFgc0gWDXVvX0tTuFWbmZzM+LSXxPZCadJJsNOhINgC+p4HFe3Cx8ZzMqWQ4kQicCxjPn3GwNpc7uQdpNc0f3tYkeDlZkglkcwhjj5sTtxY4d67jt62sInJw53ygx5P4Zz4nOvaeBXQ9epP3UoiZdXDhMnbjYsrBjx8OdkSfP8wBPzcf53E/T7LWa/oGK+HGh0y8tsszCZHOrfW5xAJ6D5RXXlatmvl+Q1zZzBNM0F/mMIaDuLi0A8EXt59AsueaaEspzZy94jjtwLeaBI7AgWUWhr9Q0GL8LC0tpzpgHE0Pm3AE+/Q+y148Osnxc3Jgfta1wa2R9DdwORXsei67/GXGF34l0T903nF35jY3EDjivYdlb3YpjgaANgaHVE2tzgGUA083SEuRm8MzeTO8FzCIQ9p5dvIcQXN77eD/1Rvh2UsDQybe+Gy4/lYS4DjuR8w912DZoWvmfkyMbJLCAYw88Evcdp7g0TY5Vo02I5BG9vlvjLHnkuphAo8AdDd9UlG3L4Wgwfi4GN2+dJbWukJDd4oduB3HothBo4xTJ5sYhlje6HcHBw3NBbXa+Wkf753D2wNyMrHwnVGA50T9wcXEtcOD2Hp7rKjxRFjSx5c0dMyHMO543AE7jf0LuvRPaYa2aCSHG06aWEDYwte0gDc4Esr35DSsnEc6JsltayIxmSKrtznENraKN7T0/5VZzMjBjOOY3BznPJLZH/ACgAckevQcqx/i2TNmQDDhb5Zc4fK4EvFV+vNfVESzcxginneJ8WOSWXe40a4HLQR0NglYWW7KzsKWfFkGLDIA97nOLbd/laOpJq79SsiHS9OZGzKyp5qrcfOHyk8g2O9UBdhY2raoyXEEbJ3TRt+a9pHJAFEHke1Ko18WY92dumZExke2mEVbmj9bq/7LexaUW+TkQxxlrJmMc1vq8mqHWuD6mrXPSRtkmgfjtaWPO1z3WA08gbr9eef09F05zJpNIhgzMZ0VyRyRSNAuRwIprT1BFEX3SZTDDxY34keRNtf+G3sc/yiOCCRx3Ioe3Ku5f4jP1MRz+ZBO5xEu1w4JDbIZ0AoVV9fe1djhk06VzomgvGQQIntJBLXfKXdgCTVXY7qrT53QZD8yM0WucHbjuLr/mDRz1Nj0P3RLIyIYseDyv+G1kcjo8oNFB4AaRz/L8x3ehqvay2ETZe1074xHASyPeGhzxRoUOhrrQJHH0wJch082RLNE4Ng2Ryl52kFxPO2ulHk+voeFlzwyyZM+QwxQ+S75XPO0gk/Lx6cUenXlRsXsHFEOqNaJoIZnbKYWuLGkG+O3Q9yCTytB5j25skrpJXxMynvfRB6k9B96+n2XQCIyzahPMTjuikG1jjw2mC2335C0zC2TQKdFM582TYdGflAofm9iCAO9q0SI1LJlk1bF/EFnkRuIYWgEkl1nd0JPIrpQ+y63wX4VzPEniSWPToZfwFtfJO4hzYqPr1ur46n0W98JfCDO8Rz4WbrTpNP0uP5yzdc+RdEVx8g468n0vqvoPSdMwtIwY8LTcZmPjRgbWMHt1Pqfc8rDfLEeIXrTftqPBvg/TfCmK9mBHvyZjc+Q8fPIf7D2/qbK6dEWtMzLLEaERESIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgFeceMvhXo+uZsupYTBgam4Hc+IVHNfXe0d/cc+tr0ekUxMx5hExEvk/P8L5fhrJONrGFMycul8p0ZG2QNILCHDqK6jrxyAVoc45OZHBO+wHs2eXRLi6N3zEg82Qa6H0C+w87Cx8/Hdj5kLJ4XdWSNsLyrxH8IYWjKydBnmlkltoxsqdxaxruoY7qDdVZ49a4WeuWJ8Sw2x69PEG7JdOM8umk47mfhwxx/mvrx3+nKxA5rYmzY7XebA4fO11+YAKr2/3a6PUMLUvDrZcHOc7HymbCxpjoktJ2kHpRN2eQtLh4Lxk5sXnMLBudFFZa6Q/mvjgCwf6LNExLH5hsM7FhnxJY8KKWRjSHPfIwk24A1f8vpyPdUzRyZ+kjzC4ylnkFrBtEz2kFrLHbjk9Lr2Vvw/qz3xGAiPe0ARRu7Psh28+vJodBXC2U5xM/wAPZmRiRBhErRIHuJc4giy2+gt3ajShZamjhdozZfw08jmhrHEfNRN/MCfuAPTlY+UXvwYYwHNe3I5j3Fo2hx5vpZ6E2eFRi48uTjuhgMUzI4nOkLDXzF/JIvk7eBxQB4WXNmzQ6XFM7BM+G3JfJHbSWhjt1NFcNIB6dB1SI0hhSukbi4WwMzIDLsEbWHgAuoA9S0UTf2VPiIiJ8wjp7ZM0Oe+Writreo61xVf0V/Ke3Ffph3sYHb3xsc0h7GkuNk9CP7rF1jKMcU8cTDFJO4OD9t04Fp6nkA7eSDyeVb0hgYOmvbnY0kTm1K1zCfLtpeOaHv07cK/qD3Mx5ptMyCx7mhk1geXLY5A4s9e9LYvLzpzJsOS8iJ5ZLIAHWHO6h3AHWvXseFY1CSH8HkSYsbcaeVkb5NtFsNAggHqDwOOvoq78kQ12ZjO8QSxMgxd8jIgyWSEdHNB7dL4AP1UZui4X+GNcZ242VC8uMYcbcAAOp4Js9Fm6Tjz42NNkukllLpy5tPFbnNaC8D07WOqtZGK5uYXOcWkQvlaJKeHAEA2Dx6n1pSSxtS0SLFxMebEnd50ga9znPa7cCOldByKWNi4+ZkTZDnyvuN9PkbAXU70LunUce4WRl6ex8WG50c7GeWHSXIdp62GA8A8j1o8reajjxTxFkD5sY5LgGhjiaaKrnuTzfTlW2Oc0hurZkRbF5AEUvl/luQuddWQL6A/2VqH8Rnfwg5jXkbWwtaS4GgOCep49uVnRYQxZPIjycp0zZdj3vft3CuhPUG/qti/AxZYiBLIZWHZF8oJ3k2L70AHEn/qm0T5aaDByYdbixG5TseYxjjb+UEHk39TytjqOhxmFji9+Rtia9xcS0UQPyDqRawZ8WARyvErpp2QB4k4NPq7J61yeOi2OBhB2n7c7LPmlrDHukcXvZW2wRyRwKF3QSZTWGDl4UEboJI2QSt2Mc+GNxc4As/MezRYPvayo5MR+JDjabjmaTaS+NxA9yb7j5R3oD7q9NokMOnDPxp5WSu3w+XI4Bz2g/qfp6LF0prHR5+9gosDo2UAA11h3PYdj9T3ULNY6dhgb5gdsjIfQJ4aT0B61az8zFaNGypYy+ZjX7t1cCx1FdSTR+nKxs6FsmkmaOMmGIbA0MB/KQaLh81V9aK2+h7PIbDBO5srwZWjyw7aR8vQ8ffnhSIxm4zdPLpxHEGMbOxwaNx2ii2ieR055o+yuvwXZg1Jk8E8PmBkkG8EiNjntbyfSu9deitBjMjTZPMZFuheHObEDv3EkWS667+1lZUflQ5zc57IoxBDHIPLsse4cUb+3PqqSK9ImvI8tjHjyS8kSOvY+/lJvseTX3WA+GN8ggix3Ne+AjfuoghxIs9LPI+4C2OKGNwZzl1E/zmxvLo2yElvFB3SySeeeFhR6nHJNmCSFzPKAiLLAtlDpXQ966WeUgYugeZLq0kL2w8vDiyUna5zD+UkduOnRbDHkjZm5kmdAyZk0wYIHuqm8XyeSKJo1VrJ8JYWXqLzHpenHMkjn3tY8F1hx5DqoUPXihfReo+Gvg9Ll5347xZkbY7+TT8Y/K1p/lc6uns39VFrxHtMV28/8K4Wf4knfp2j6eyWPzHySSbPlYSehceBwO1E1wvX/AIffCfTfDbGZGpubqOpbzJbm/wAKNx6bWnqRwNx9LoL0DS9Mw9Kw2Ymm40WLjM6RxNAHbr78deqzVr2yTPplrSISiIsa4iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgwNW0rB1fGONqWLFkwkH5ZG3X07g+4XmGvfCGI5MuZoOa6NzmgDGnALeOgDwLA5PW77levKOPVTW0x6RNYl8pQ+EdT0Wd7Na0wwQjzIw+R5Zuc+zTXt+U1t/r3Wu0/Z/wB3ZmAtDA0mTyjyaJ5JceprsKHHdfXU0TJonRysa+NwpzXCwR7hcTrXwv8ADmo75MbFGn5DgRvxgA3m/wCQ/KOp6ALNGb8sc0/D520BzojI7Kx3nHkLrZ5ZLnvcAQ0Fou+Ot0AsiQNkxcJofl/JNfyO8xpBafyt/KBx78r0HUfhNr+BKyTSs+DKLZNzZXW2RooithO3vRO5crneHczw9gYzMrHysfyZaaQy7LuaO7gsBsH9eVli0T6U1MNXrLZpX6e/Kx5zlyEyMdIWtiewgusAcniueKKo1KCLH0eWJmVBIx7GuLKL3hxa6uTZva0egrp6HIkwDNhu/FANDqbHkOyGvEFjceR0B9LPoFbjwcOTS87IHnPMQDA1lte0lrgC4Hqzqf8Ap0sqoZj5B0KKHHgaxjpBI4SADcaAIFHkenAVc8TJtFe2Jm8BhHm0GuJadu1w5senoPUkq3lxtjww/Fke3d5cb9pBYx7i0Hpy41fsVjxMgmzJTFm4r8cNeH7WEbXDinA9efTlShOmYcP+BZDJc50UhBn8tvNks2hm4jp8tkDjsrkeNE7AYccQnLAc22fmLaH5gTVXxQWHE50EObCJGta2GMOYGbjI7e4gtr8vX0PcrY4+Az8LiZMjXMZTxTnlw5YSHFvWrs+tCh3BCzk5mBPg4zZ8MgbHBwjO5rHtNkhoPPsb4PsrWWx0WgtnjfPLDF/wm7qdDuPPanGh9lOlwtGPG4wY0zHSSbpHAiNoDgQGt6jn7kKNVjfhwSNyXeWI3ODGtk/Md54c1vQ0FA14ihyZ2Oa4RENiPmNaWtcwEg8H5t19effor0GsY8LcnHbEPMa9zQ58ZO5xa4WOw4u/1VeXPDkRSmN7JZnHadriwNII7Ecn83TmxxzV5WLpLMmaSUTbQLY5roy7YK5cd3JFGr+1WpkY/lyaYyDyYoHt8na98oD2NaRdbhVmuyjUZW48TZZWxfxWcP27XNbZ+ZgaSD06+h4VT8N8uC8OaCBE9ge99xtA61XJPTlUafE7Kxhi5bnRjHiJeSW8BtfLYsEURyqymGCZHt0rGy8rHfNT2vY4tbtcSXiq6kcA3z0UMyJm4O6WKIMdC4N3ssDkEkDsOv34WaMjTn6TLDjyymbeNjXR3e0u6H15HoqNLb82O0TCUu3U1sZc0iuLJ4s3R/ZTCJY+I5uRjN2h5xnF1sqt7Q2nV0F8/oruhsbG2NxBL3RuhjkdQiaByAOp9eeB29SsqLTXRwyxSGRjRISzbX838pA5HXnhbDSNH1rUNNbBpWnzTzMmIftiPygdAb4Aojni+9cJMxELRDVZ0U+LhTSAxshEuyQwONv3ta7a4GzXB57ErMmkZkHy55pJHiFjXgRg0wAVTTVus0ew6r0DB+EGuatHju1bJhwY3Nb5zJP4klgk0A00R83d1/0Xofh/4VeHdLmORkRS6jlOILpMp1jjttHFdOtrHOWIWikvDPCvh7UNYnyY9P0qaZ4MTWOaC1kZaAbO/wCXvfUkdrC9L8NfBot1KXO8R6g2QyvDnY+KzaHVX5ndeT6fqvY4Yo4Y2xxMaxjRQa1tAfQK6sNssz6ZIpEe2t0bRtP0XG/D6Xhw4sRNkRtouPWyepPPdbLondCscztbQiIiRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERApW5I2SRlkjWvaRRa4WD9lcRBzWr+CvD2qwSxZOlY4bK5rnmEeUXFvAJLaJpczN8JdIZf4GeeMEOa5mRczXAgiqsHi16WitF5hWaxLw/U/hPrUcBbp2ZhyhtbNznRn5TxwLA6eq5bI+GvirC84QabLI4h1PZPGWvBHIq924m+eBQX0zSilaMtkfHD5R0zwn4j0zNyvP0rN+eFzXOkhdTgSOj+R69+nRaOOTVsR+I/IwszHMeQXF3lGMCNx200kdeevPuvsqkoK0Z5V+L8PjM42XJp8r25U/mslkkMZPoAa9NxC1c72xZEkTgTM0gAPbuBJ5uzyOKvpZX266GNwp0bHfUAqj8Jj3Zgiv8A8AVoz/pHxPkLNzpY8iRjX/iTNGXuqQOcwlxsk+gH3pVSMyc7Kyo8fFyadG1hpjnfKXD0HPAJ919ethjb+WJjfoAFcpROf9J+PT480bw54jPlCDw/qs+OQ4+Wcd7AL4qzQHC6nR/h54qypSRoz8CIsNOfM1lHjqLsn7L6aoJQVZzSn44fP+mfBPV/xTpczPwmNc/eCd0j2OPeqAvr3XXaP8IMDDxceLO1LJyTA7c0xxti5N8H8xq16mirOS0pikQ5fTPAfhvTpPMi0uGWXqX5BMxv233XXtS6VrGsaGsAaB0AFKrj1UqkzK2hEREiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD//Z"},null,-1),ft("h1",{class:"name"},"Davide Bert",-1),ft("h2",{class:"title"},[Jo("Software Developer "),ft("br"),Jo(" Team Leader")],-1),ft("p",{class:"tagline"},"Building Smart Solutions for the Future",-1)]))}const Cp=Hn(bp,[["render",wp],["__scopeId","data-v-f8aa8e10"]]),Ip={name:"ProjectsSection",data(){return{projects:[{id:1,title:"Smart Factory Platform",description:"A digitalized manufacturing system optimizing 22 plants and 400+ production lines through automation, real-time monitoring, and data-driven decisions."},{id:2,title:"EasyTransfer",description:"Web Platform that handles the transfer of tax credit deductions."}]}}},Pp={id:"projects",class:"projects"},Lp={class:"project-grid"};function Dp(n,e,t,i,r,s){return St(),At("section",Pp,[e[0]||(e[0]=ft("h2",null,"Projects",-1)),ft("div",Lp,[(St(!0),At(jt,null,Ls(r.projects,o=>(St(),At("div",{key:o.id,class:"project-card"},[ft("h3",null,pn(o.title),1),ft("p",null,pn(o.description),1)]))),128))])])}const Up=Hn(Ip,[["render",Dp],["__scopeId","data-v-13708ec5"]]),Np={name:"SkillsSection",data(){return{skills:["Python","Django","JavaScript","Vue.js","Postgres","Linux","C#",".NET Core","Windows","Wordpress","HTML","Responsive Web Design","Git","Team Leadership"]}}},Fp={id:"skills",class:"skills"},Op={class:"skill-list"};function Bp(n,e,t,i,r,s){return St(),At("section",Fp,[e[0]||(e[0]=ft("h2",null,"Skills",-1)),ft("div",Op,[(St(!0),At(jt,null,Ls(r.skills,o=>(St(),At("span",{key:o,class:"skill-tag"},pn(o),1))),128))])])}const Hp=Hn(Np,[["render",Bp],["__scopeId","data-v-ee92bb5a"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="174",zp=0,Zl=1,Vp=2,Ju=1,kp=2,wn=3,ti=0,Bt=1,Pn=2,Qn=0,Qi=1,Jl=2,Ql=3,$l=4,Gp=5,Ei=100,Wp=101,Xp=102,jp=103,qp=104,Yp=200,Kp=201,Zp=202,Jp=203,ea=204,ta=205,Qp=206,$p=207,em=208,tm=209,nm=210,im=211,rm=212,sm=213,om=214,na=0,ia=1,ra=2,ir=3,sa=4,oa=5,aa=6,la=7,Qu=0,am=1,lm=2,$n=0,cm=1,um=2,fm=3,dm=4,hm=5,pm=6,mm=7,$u=300,rr=301,sr=302,ca=303,ua=304,Ys=306,fa=1e3,Ai=1001,da=1002,fn=1003,gm=1004,Yr=1005,_n=1006,fo=1007,Mi=1008,Fn=1009,ef=1010,tf=1011,Ur=1012,al=1013,bi=1014,Ln=1015,Or=1016,ll=1017,cl=1018,or=1020,nf=35902,rf=1021,sf=1022,ln=1023,of=1024,af=1025,$i=1026,ar=1027,lf=1028,ul=1029,cf=1030,fl=1031,dl=1033,As=33776,Ms=33777,ys=33778,Ts=33779,ha=35840,pa=35841,ma=35842,ga=35843,_a=36196,va=37492,xa=37496,Ea=37808,Sa=37809,Aa=37810,Ma=37811,ya=37812,Ta=37813,ba=37814,Ra=37815,wa=37816,Ca=37817,Ia=37818,Pa=37819,La=37820,Da=37821,bs=36492,Ua=36494,Na=36495,uf=36283,Fa=36284,Oa=36285,Ba=36286,_m=3200,vm=3201,xm=0,Em=1,Jn="",Jt="srgb",lr="srgb-linear",Ns="linear",et="srgb",Pi=7680,ec=519,Sm=512,Am=513,Mm=514,ff=515,ym=516,Tm=517,bm=518,Rm=519,tc=35044,nc="300 es",Dn=2e3,Fs=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ho=Math.PI/180,Ha=180/Math.PI;function Br(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function wm(n,e){return(n%e+e)%e}function po(n,e,t){return(1-t)*n+t*e}function mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],S=r[0],m=r[3],d=r[6],w=r[1],b=r[4],M=r[7],U=r[2],L=r[5],I=r[8];return s[0]=o*S+a*w+l*U,s[3]=o*m+a*b+l*L,s[6]=o*d+a*M+l*I,s[1]=c*S+u*w+f*U,s[4]=c*m+u*b+f*L,s[7]=c*d+u*M+f*I,s[2]=h*S+p*w+v*U,s[5]=h*m+p*b+v*L,s[8]=h*d+p*M+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new ze;function df(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cm(){const n=Os("canvas");return n.style.display="block",n}const ic={};function _i(n){n in ic||(ic[n]=!0,console.warn(n))}function Im(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Pm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dm(){const n={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===et&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?Ns:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lr]:{primaries:e,whitePoint:i,transfer:Ns,toXYZ:rc,fromXYZ:sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:rc,fromXYZ:sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const qe=Dm();function Nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class Um{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=Os("canvas")),Li.width=e.width,Li.height=e.height;const i=Li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Li}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Nn(t[i]/255)*255):t[i]=Nn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nm=0;class hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Br(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(go(r[o].image)):s.push(go(r[o]))}else s=go(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Um.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fm=0;class Ht extends ur{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Ai,r=Ai,s=_n,o=Mi,a=ln,l=Fn,c=Ht.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Br(),this.name="",this.source=new hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=$u;Ht.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(p+1)/2,U=(d+1)/2,L=(u+h)/4,I=(f+S)/4,O=(v+m)/4;return b>M&&b>U?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=L/i,s=I/i):M>U?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=L/r,s=O/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=I/s,r=O/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-v)*(m-v)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(f-S)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Om extends ur{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new hl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Om{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hf extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bm extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S;return}if(f!==S||l!==h||c!==p||u!==v){let m=1-a;const d=l*h+c*p+u*v+f*S,w=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const U=Math.sqrt(b),L=Math.atan2(U,d*w);m=Math.sin(m*L)/U,a=Math.sin(a*L)/U}const M=a*w;if(l=l*m+h*M,c=c*m+p*M,u=u*m+v*M,f=f*m+S*M,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-a*p,e[t+2]=c*v+u*p+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new W,oc=new Hr;class zr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kr.copy(i.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Zr.subVectors(this.max,gr),Di.subVectors(e.a,gr),Ui.subVectors(e.b,gr),Ni.subVectors(e.c,gr),kn.subVectors(Ui,Di),Gn.subVectors(Ni,Ui),ui.subVectors(Di,Ni);let t=[0,-kn.z,kn.y,0,-Gn.z,Gn.y,0,-ui.z,ui.y,kn.z,0,-kn.x,Gn.z,0,-Gn.x,ui.z,0,-ui.x,-kn.y,kn.x,0,-Gn.y,Gn.x,0,-ui.y,ui.x,0];return!vo(t,Di,Ui,Ni,Zr)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,Di,Ui,Ni,Zr))?!1:(Jr.crossVectors(kn,Gn),t=[Jr.x,Jr.y,Jr.z],vo(t,Di,Ui,Ni,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new W,new W,new W,new W,new W,new W,new W,new W],nn=new W,Kr=new zr,Di=new W,Ui=new W,Ni=new W,kn=new W,Gn=new W,ui=new W,gr=new W,Zr=new W,Jr=new W,fi=new W;function vo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){fi.fromArray(n,s);const a=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=i.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Hm=new zr,_r=new W,xo=new W;class Ks{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Hm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(xo)),this.expandByPoint(_r.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new W,Eo=new W,Qr=new W,Wn=new W,So=new W,$r=new W,Ao=new W;class pf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Eo.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Eo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Qr),a=Wn.dot(this.direction),l=-Wn.dot(Qr),c=Wn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Eo).addScaledVector(Qr,h),p}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){So.subVectors(t,e),$r.subVectors(i,e),Ao.crossVectors(So,$r);let o=this.direction.dot(Ao),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const l=a*this.direction.dot($r.crossVectors(Wn,$r));if(l<0)return null;const c=a*this.direction.dot(So.cross(Wn));if(c<0||l+c>o)return null;const u=-a*Wn.dot(Ao);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,v,S,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,S,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),o=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,S=c*f;t[0]=h+S*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,S=c*f;t[0]=h-S*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,S=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,S=a*c;t[0]=l*u,t[4]=S-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zm,e,Vm)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Xn.crossVectors(i,kt),Xn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Xn.crossVectors(i,kt)),Xn.normalize(),es.crossVectors(kt,Xn),r[0]=Xn.x,r[4]=es.x,r[8]=kt.x,r[1]=Xn.y,r[5]=es.y,r[9]=kt.y,r[2]=Xn.z,r[6]=es.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],S=i[6],m=i[10],d=i[14],w=i[3],b=i[7],M=i[11],U=i[15],L=r[0],I=r[4],O=r[8],y=r[12],A=r[1],P=r[5],$=r[9],j=r[13],ne=r[2],se=r[6],J=r[10],Q=r[14],H=r[3],fe=r[7],Ee=r[11],Te=r[15];return s[0]=o*L+a*A+l*ne+c*H,s[4]=o*I+a*P+l*se+c*fe,s[8]=o*O+a*$+l*J+c*Ee,s[12]=o*y+a*j+l*Q+c*Te,s[1]=u*L+f*A+h*ne+p*H,s[5]=u*I+f*P+h*se+p*fe,s[9]=u*O+f*$+h*J+p*Ee,s[13]=u*y+f*j+h*Q+p*Te,s[2]=v*L+S*A+m*ne+d*H,s[6]=v*I+S*P+m*se+d*fe,s[10]=v*O+S*$+m*J+d*Ee,s[14]=v*y+S*j+m*Q+d*Te,s[3]=w*L+b*A+M*ne+U*H,s[7]=w*I+b*P+M*se+U*fe,s[11]=w*O+b*$+M*J+U*Ee,s[15]=w*y+b*j+M*Q+U*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],S=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],S=e[13],m=e[14],d=e[15],w=f*m*c-S*h*c+S*l*p-a*m*p-f*l*d+a*h*d,b=v*h*c-u*m*c-v*l*p+o*m*p+u*l*d-o*h*d,M=u*S*c-v*f*c+v*a*p-o*S*p-u*a*d+o*f*d,U=v*f*l-u*S*l-v*a*h+o*S*h+u*a*m-o*f*m,L=t*w+i*b+r*M+s*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=w*I,e[1]=(S*h*s-f*m*s-S*r*p+i*m*p+f*r*d-i*h*d)*I,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*d+i*l*d)*I,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*I,e[4]=b*I,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*d+t*h*d)*I,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*d-t*l*d)*I,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*I,e[8]=M*I,e[9]=(v*f*s-u*S*s-v*i*p+t*S*p+u*i*d-t*f*d)*I,e[10]=(o*S*s-v*a*s+v*i*c-t*S*c-o*i*d+t*a*d)*I,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*I,e[12]=U*I,e[13]=(u*S*r-v*f*r+v*i*h-t*S*h-u*i*m+t*f*m)*I,e[14]=(v*a*r-o*S*r-v*i*l+t*S*l+o*i*m-t*a*m)*I,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,S=o*u,m=o*f,d=a*f,w=l*c,b=l*u,M=l*f,U=i.x,L=i.y,I=i.z;return r[0]=(1-(S+d))*U,r[1]=(p+M)*U,r[2]=(v-b)*U,r[3]=0,r[4]=(p-M)*L,r[5]=(1-(h+d))*L,r[6]=(m+w)*L,r[7]=0,r[8]=(v+b)*I,r[9]=(m-w)*I,r[10]=(1-(h+S))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fi.set(r[0],r[1],r[2]).length();const o=Fi.set(r[4],r[5],r[6]).length(),a=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const c=1/s,u=1/o,f=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,t.setFromRotationMatrix(rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Dn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(a===Dn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Fs)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Dn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let v,S;if(a===Dn)v=(o+s)*f,S=-2*f;else if(a===Fs)v=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fi=new W,rn=new ht,zm=new W(0,0,0),Vm=new W(1,1,1),Xn=new W,es=new W,kt=new W,ac=new ht,lc=new Hr;class On{constructor(e=0,t=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ac,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let km=0;const cc=new W,Oi=new Hr,Tn=new ht,ts=new W,vr=new W,Gm=new W,Wm=new Hr,uc=new W(1,0,0),fc=new W(0,1,0),dc=new W(0,0,1),hc={type:"added"},Xm={type:"removed"},Bi={type:"childadded",child:null},Mo={type:"childremoved",child:null};class zt extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new W,t=new On,i=new Hr,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ts.copy(e):ts.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(vr,ts,this.up):Tn.lookAt(ts,vr,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xm),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new W(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new W,bn=new W,yo=new W,Rn=new W,Hi=new W,zi=new W,pc=new W,To=new W,bo=new W,Ro=new W,wo=new dt,Co=new dt,Io=new dt;class on{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){sn.subVectors(r,t),bn.subVectors(i,t),yo.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(bn),l=sn.dot(yo),c=bn.dot(bn),u=bn.dot(yo),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return wo.setScalar(0),Co.setScalar(0),Io.setScalar(0),wo.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,i),Io.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(wo,s.x),o.addScaledVector(Co,s.y),o.addScaledVector(Io,s.z),o}static isFrontFacing(e,t,i,r){return sn.subVectors(i,t),bn.subVectors(e,t),sn.cross(bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Hi.subVectors(r,i),zi.subVectors(s,i),To.subVectors(e,i);const l=Hi.dot(To),c=zi.dot(To);if(l<=0&&c<=0)return t.copy(i);bo.subVectors(e,r);const u=Hi.dot(bo),f=zi.dot(bo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Hi,o);Ro.subVectors(e,s);const p=Hi.dot(Ro),v=zi.dot(Ro);if(v>=0&&p<=v)return t.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(zi,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return pc.subVectors(s,r),a=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(pc,a);const d=1/(m+S+h);return o=S*d,a=h*d,t.copy(i).addScaledVector(Hi,o).addScaledVector(zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Po(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=wm(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Po(o,s,e+1/3),this.g=Po(o,s,e),this.b=Po(o,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return qe.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Ge(Tt.r*255,0,255))*65536+Math.round(Ge(Tt.g*255,0,255))*256+Math.round(Ge(Tt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Jt){qe.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(ns);const i=po(jn.h,ns.h,t),r=po(jn.s,ns.s,t),s=po(jn.l,ns.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new $e;$e.NAMES=gf;let jm=0;class Vr extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=Qi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ea&&(i.blendSrc=this.blendSrc),this.blendDst!==ta&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _f extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new W,is=new nt;let qm=0;class xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}}class vf extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xf extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ei extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ym=0;const Zt=new ht,Lo=new zt,Vi=new W,Gt=new zr,xr=new zr,xt=new W;class zn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(df(e)?xf:vf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ei(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Gt.min,xr.min),Gt.expandByPoint(xt),xt.addVectors(Gt.max,xr.max),Gt.expandByPoint(xt)):(Gt.expandByPoint(xr.min),Gt.expandByPoint(xr.max))}Gt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(e,c),xt.add(Vi)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new W,l[O]=new W;const c=new W,u=new W,f=new W,h=new nt,p=new nt,v=new nt,S=new W,m=new W;function d(O,y,A){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,A),h.fromBufferAttribute(s,O),p.fromBufferAttribute(s,y),v.fromBufferAttribute(s,A),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(P),a[O].add(S),a[y].add(S),a[A].add(S),l[O].add(m),l[y].add(m),l[A].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,y=w.length;O<y;++O){const A=w[O],P=A.start,$=A.count;for(let j=P,ne=P+$;j<ne;j+=3)d(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const b=new W,M=new W,U=new W,L=new W;function I(O){U.fromBufferAttribute(r,O),L.copy(U);const y=a[O];b.copy(y),b.sub(U.multiplyScalar(U.dot(y))).normalize(),M.crossVectors(L,y);const P=M.dot(l[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,P)}for(let O=0,y=w.length;O<y;++O){const A=w[O],P=A.start,$=A.count;for(let j=P,ne=P+$;j<ne;j+=3)I(e.getX(j+0)),I(e.getX(j+1)),I(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new xn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new ht,di=new pf,rs=new Ks,gc=new W,ss=new W,os=new W,as=new W,Do=new W,ls=new W,_c=new W,cs=new W;class Un extends zt{constructor(e=new zn,t=new _f){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Do.fromBufferAttribute(f,e),o?ls.addScaledVector(Do,u):ls.addScaledVector(Do.sub(t),u))}t.add(ls)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere),rs.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(rs.containsPoint(di.origin)===!1&&(di.intersectSphere(rs,gc)===null||di.origin.distanceToSquared(gc)>(e.far-e.near)**2))&&(mc.copy(s).invert(),di.copy(e.ray).applyMatrix4(mc),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,U=b;M<U;M+=3){const L=a.getX(M),I=a.getX(M+1),O=a.getX(M+2);r=us(this,d,e,i,c,u,f,L,I,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const w=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);r=us(this,o,e,i,c,u,f,w,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,U=b;M<U;M+=3){const L=M,I=M+1,O=M+2;r=us(this,d,e,i,c,u,f,L,I,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const w=m,b=m+1,M=m+2;r=us(this,o,e,i,c,u,f,w,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Km(n,e,t,i,r,s,o,a){let l;if(e.side===Bt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ti,a),l===null)return null;cs.copy(a),cs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(cs);return c<t.near||c>t.far?null:{distance:c,point:cs.clone(),object:n}}function us(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ss),n.getVertexPosition(l,os),n.getVertexPosition(c,as);const u=Km(n,e,t,i,ss,os,as,_c);if(u){const f=new W;on.getBarycoord(_c,ss,os,as,f),r&&(u.uv=on.getInterpolatedAttribute(r,a,l,c,f,new nt)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,l,c,f,new nt)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new W,materialIndex:0};on.getNormal(ss,os,as,h.normal),u.face=h,u.barycoord=f}return u}class kr extends zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ei(c,3)),this.setAttribute("normal",new ei(u,3)),this.setAttribute("uv",new ei(f,2));function v(S,m,d,w,b,M,U,L,I,O,y){const A=M/I,P=U/O,$=M/2,j=U/2,ne=L/2,se=I+1,J=O+1;let Q=0,H=0;const fe=new W;for(let Ee=0;Ee<J;Ee++){const Te=Ee*P-j;for(let Pe=0;Pe<se;Pe++){const Ye=Pe*A-$;fe[S]=Ye*w,fe[m]=Te*b,fe[d]=ne,c.push(fe.x,fe.y,fe.z),fe[S]=0,fe[m]=0,fe[d]=L>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Pe/I),f.push(1-Ee/O),Q+=1}}for(let Ee=0;Ee<O;Ee++)for(let Te=0;Te<I;Te++){const Pe=h+Te+se*Ee,Ye=h+Te+se*(Ee+1),ee=h+(Te+1)+se*(Ee+1),ue=h+(Te+1)+se*Ee;l.push(Pe,Ye,ue),l.push(Ye,ee,ue),H+=6}a.addGroup(p,H,y),p+=H,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=cr(n[t]);for(const r in i)e[r]=i[r]}return e}function Zm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ef(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Jm={clone:cr,merge:Pt};var Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=$m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sf extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new W,vc=new nt,xc=new nt;class Qt extends Sf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,vc,xc),t.subVectors(xc,vc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Gi=1;class eg extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(ki,Gi,e,t);r.layers=this.layers,this.add(r);const s=new Qt(ki,Gi,e,t);s.layers=this.layers,this.add(s);const o=new Qt(ki,Gi,e,t);o.layers=this.layers,this.add(o);const a=new Qt(ki,Gi,e,t);a.layers=this.layers,this.add(a);const l=new Qt(ki,Gi,e,t);l.layers=this.layers,this.add(l);const c=new Qt(ki,Gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Af extends Ht{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tg extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Af(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new kr(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Qn});s.uniforms.tEquirect.value=t;const o=new Un(r,s),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=_n),new eg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class fs extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ng={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ng)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ig extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const No=new W,rg=new W,sg=new ze;class vi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=No.subVectors(i,t).cross(rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(No),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sg.getNormalMatrix(e),r=this.coplanarPoint(No).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Ks,ds=new W;class Mf{constructor(e=new vi,t=new vi,i=new vi,r=new vi,s=new vi,o=new vi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],S=r[10],m=r[11],d=r[12],w=r[13],b=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-d).normalize(),i[1].setComponents(l+s,h+c,m+p,M+d).normalize(),i[2].setComponents(l+o,h+u,m+v,M+w).normalize(),i[3].setComponents(l-o,h-u,m-v,M-w).normalize(),i[4].setComponents(l-a,h-f,m-S,M-b).normalize(),t===Dn)i[5].setComponents(l+a,h+f,m+S,M+b).normalize();else if(t===Fs)i[5].setComponents(a,f,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yf extends Vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ec=new ht,za=new pf,hs=new Ks,ps=new W;class og extends zt{constructor(e=new zn,t=new yf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(r),hs.radius+=s,e.ray.intersectsSphere(hs)===!1)return;Ec.copy(r).invert(),za.copy(e.ray).applyMatrix4(Ec);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=h,S=p;v<S;v++){const m=c.getX(v);ps.fromBufferAttribute(f,m),Sc(ps,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=h,S=p;v<S;v++)ps.fromBufferAttribute(f,v),Sc(ps,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sc(n,e,t,i,r,s,o){const a=za.distanceSqToPoint(n);if(a<t){const l=new W;za.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Tf extends Ht{constructor(e,t,i,r,s,o,a,l,c,u=$i){if(u!==$i&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$i&&(i=bi),i===void 0&&u===ar&&(i=or),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zs extends zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],v=[],S=[],m=[];for(let d=0;d<u;d++){const w=d*h-o;for(let b=0;b<c;b++){const M=b*f-s;v.push(M,-w,0),S.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const b=w+c*d,M=w+c*(d+1),U=w+1+c*(d+1),L=w+1+c*d;p.push(b,M,L),p.push(M,U,L)}this.setIndex(p),this.setAttribute("position",new ei(v,3)),this.setAttribute("normal",new ei(S,3)),this.setAttribute("uv",new ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ag extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lg extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cg extends Sf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ug extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Ac(n,e,t,i){const r=fg(i);switch(t){case rf:return n*e;case of:return n*e;case af:return n*e*2;case lf:return n*e/r.components*r.byteLength;case ul:return n*e/r.components*r.byteLength;case cf:return n*e*2/r.components*r.byteLength;case fl:return n*e*2/r.components*r.byteLength;case sf:return n*e*3/r.components*r.byteLength;case ln:return n*e*4/r.components*r.byteLength;case dl:return n*e*4/r.components*r.byteLength;case As:case Ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ys:case Ts:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(n,16)*Math.max(e,8)/4;case ha:case ma:return Math.max(n,8)*Math.max(e,8)/2;case _a:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bs:case Ua:case Na:return Math.ceil(n/4)*Math.ceil(e/4)*16;case uf:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Oa:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fg(n){switch(n){case Fn:case ef:return{byteLength:1,components:1};case Ur:case tf:case Or:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case bi:case al:case Ln:return{byteLength:4,components:1};case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dg(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],S=f[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const S=f[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ev=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ov=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:hg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:_g,alphatest_pars_fragment:vg,aomap_fragment:xg,aomap_pars_fragment:Eg,batching_pars_vertex:Sg,batching_vertex:Ag,begin_vertex:Mg,beginnormal_vertex:yg,bsdfs:Tg,iridescence_fragment:bg,bumpmap_pars_fragment:Rg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Cg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Pg,color_fragment:Lg,color_pars_fragment:Dg,color_pars_vertex:Ug,color_vertex:Ng,common:Fg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Bg,displacementmap_pars_vertex:Hg,displacementmap_vertex:zg,emissivemap_fragment:Vg,emissivemap_pars_fragment:kg,colorspace_fragment:Gg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:jg,envmap_pars_fragment:qg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:s_,envmap_vertex:Kg,fog_vertex:Zg,fog_pars_vertex:Jg,fog_fragment:Qg,fog_pars_fragment:$g,gradientmap_pars_fragment:e_,lightmap_pars_fragment:t_,lights_lambert_fragment:n_,lights_lambert_pars_fragment:i_,lights_pars_begin:r_,lights_toon_fragment:o_,lights_toon_pars_fragment:a_,lights_phong_fragment:l_,lights_phong_pars_fragment:c_,lights_physical_fragment:u_,lights_physical_pars_fragment:f_,lights_fragment_begin:d_,lights_fragment_maps:h_,lights_fragment_end:p_,logdepthbuf_fragment:m_,logdepthbuf_pars_fragment:g_,logdepthbuf_pars_vertex:__,logdepthbuf_vertex:v_,map_fragment:x_,map_pars_fragment:E_,map_particle_fragment:S_,map_particle_pars_fragment:A_,metalnessmap_fragment:M_,metalnessmap_pars_fragment:y_,morphinstance_vertex:T_,morphcolor_vertex:b_,morphnormal_vertex:R_,morphtarget_pars_vertex:w_,morphtarget_vertex:C_,normal_fragment_begin:I_,normal_fragment_maps:P_,normal_pars_fragment:L_,normal_pars_vertex:D_,normal_vertex:U_,normalmap_pars_fragment:N_,clearcoat_normal_fragment_begin:F_,clearcoat_normal_fragment_maps:O_,clearcoat_pars_fragment:B_,iridescence_pars_fragment:H_,opaque_fragment:z_,packing:V_,premultiplied_alpha_fragment:k_,project_vertex:G_,dithering_fragment:W_,dithering_pars_fragment:X_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:q_,shadowmap_pars_fragment:Y_,shadowmap_pars_vertex:K_,shadowmap_vertex:Z_,shadowmask_pars_fragment:J_,skinbase_vertex:Q_,skinning_pars_vertex:$_,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:rv,tonemapping_pars_fragment:sv,transmission_fragment:ov,transmission_pars_fragment:av,uv_pars_fragment:lv,uv_pars_vertex:cv,uv_vertex:uv,worldpos_vertex:fv,background_vert:dv,background_frag:hv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:gv,cube_frag:_v,depth_vert:vv,depth_frag:xv,distanceRGBA_vert:Ev,distanceRGBA_frag:Sv,equirect_vert:Av,equirect_frag:Mv,linedashed_vert:yv,linedashed_frag:Tv,meshbasic_vert:bv,meshbasic_frag:Rv,meshlambert_vert:wv,meshlambert_frag:Cv,meshmatcap_vert:Iv,meshmatcap_frag:Pv,meshnormal_vert:Lv,meshnormal_frag:Dv,meshphong_vert:Uv,meshphong_frag:Nv,meshphysical_vert:Fv,meshphysical_frag:Ov,meshtoon_vert:Bv,meshtoon_frag:Hv,points_vert:zv,points_frag:Vv,shadow_vert:kv,shadow_frag:Gv,sprite_vert:Wv,sprite_frag:Xv},me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},gn={basic:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Pt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Pt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Pt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Pt([me.points,me.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Pt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Pt([me.common,me.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Pt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Pt([me.sprite,me.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Pt([me.common,me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Pt([me.lights,me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};gn.physical={uniforms:Pt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ms={r:0,b:0,g:0},pi=new On,jv=new ht;function qv(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function S(b){let M=!1;const U=v(b);U===null?d(a,l):U&&U.isColor&&(d(U,1),M=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const U=v(M);U&&(U.isCubeTexture||U.mapping===Ys)?(u===void 0&&(u=new Un(new kr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:cr(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pi.copy(M.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(pi)),u.material.toneMapped=qe.getTransfer(U.colorSpace)!==et,(f!==U||h!==U.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=U,h=U.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new Un(new Zs(2,2),new ni({name:"BackgroundMaterial",uniforms:cr(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=qe.getTransfer(U.colorSpace)!==et,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||h!==U.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=U,h=U.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(ms,Ef(n)),i.buffers.color.setClear(ms.r,ms.g,ms.b,M,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:S,addToRenderList:m,dispose:w}}function Yv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(A,P,$,j,ne){let se=!1;const J=f(j,$,P);s!==J&&(s=J,c(s.object)),se=p(A,j,$,ne),se&&v(A,j,$,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,M(A,P,$,j),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function u(A){return n.deleteVertexArray(A)}function f(A,P,$){const j=$.wireframe===!0;let ne=i[A.id];ne===void 0&&(ne={},i[A.id]=ne);let se=ne[P.id];se===void 0&&(se={},ne[P.id]=se);let J=se[j];return J===void 0&&(J=h(l()),se[j]=J),J}function h(A){const P=[],$=[],j=[];for(let ne=0;ne<t;ne++)P[ne]=0,$[ne]=0,j[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:$,attributeDivisors:j,object:A,attributes:{},index:null}}function p(A,P,$,j){const ne=s.attributes,se=P.attributes;let J=0;const Q=$.getAttributes();for(const H in Q)if(Q[H].location>=0){const Ee=ne[H];let Te=se[H];if(Te===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(Te=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(Te=A.instanceColor)),Ee===void 0||Ee.attribute!==Te||Te&&Ee.data!==Te.data)return!0;J++}return s.attributesNum!==J||s.index!==j}function v(A,P,$,j){const ne={},se=P.attributes;let J=0;const Q=$.getAttributes();for(const H in Q)if(Q[H].location>=0){let Ee=se[H];Ee===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(Ee=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(Ee=A.instanceColor));const Te={};Te.attribute=Ee,Ee&&Ee.data&&(Te.data=Ee.data),ne[H]=Te,J++}s.attributes=ne,s.attributesNum=J,s.index=j}function S(){const A=s.newAttributes;for(let P=0,$=A.length;P<$;P++)A[P]=0}function m(A){d(A,0)}function d(A,P){const $=s.newAttributes,j=s.enabledAttributes,ne=s.attributeDivisors;$[A]=1,j[A]===0&&(n.enableVertexAttribArray(A),j[A]=1),ne[A]!==P&&(n.vertexAttribDivisor(A,P),ne[A]=P)}function w(){const A=s.newAttributes,P=s.enabledAttributes;for(let $=0,j=P.length;$<j;$++)P[$]!==A[$]&&(n.disableVertexAttribArray($),P[$]=0)}function b(A,P,$,j,ne,se,J){J===!0?n.vertexAttribIPointer(A,P,$,ne,se):n.vertexAttribPointer(A,P,$,j,ne,se)}function M(A,P,$,j){S();const ne=j.attributes,se=$.getAttributes(),J=P.defaultAttributeValues;for(const Q in se){const H=se[Q];if(H.location>=0){let fe=ne[Q];if(fe===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),fe!==void 0){const Ee=fe.normalized,Te=fe.itemSize,Pe=e.get(fe);if(Pe===void 0)continue;const Ye=Pe.buffer,ee=Pe.type,ue=Pe.bytesPerElement,Ae=ee===n.INT||ee===n.UNSIGNED_INT||fe.gpuType===al;if(fe.isInterleavedBufferAttribute){const pe=fe.data,Re=pe.stride,We=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let we=0;we<H.locationSize;we++)d(H.location+we,pe.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let we=0;we<H.locationSize;we++)m(H.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let we=0;we<H.locationSize;we++)b(H.location+we,Te/H.locationSize,ee,Ee,Re*ue,(We+Te/H.locationSize*we)*ue,Ae)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)d(H.location+pe,fe.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let pe=0;pe<H.locationSize;pe++)b(H.location+pe,Te/H.locationSize,ee,Ee,Te*ue,Te/H.locationSize*pe*ue,Ae)}}else if(J!==void 0){const Ee=J[Q];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(H.location,Ee);break;case 3:n.vertexAttrib3fv(H.location,Ee);break;case 4:n.vertexAttrib4fv(H.location,Ee);break;default:n.vertexAttrib1fv(H.location,Ee)}}}}w()}function U(){O();for(const A in i){const P=i[A];for(const $ in P){const j=P[$];for(const ne in j)u(j[ne].object),delete j[ne];delete P[$]}delete i[A]}}function L(A){if(i[A.id]===void 0)return;const P=i[A.id];for(const $ in P){const j=P[$];for(const ne in j)u(j[ne].object),delete j[ne];delete P[$]}delete i[A.id]}function I(A){for(const P in i){const $=i[P];if($[A.id]===void 0)continue;const j=$[A.id];for(const ne in j)u(j[ne].object),delete j[ne];delete $[A.id]}}function O(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:m,disableUnusedAttributes:w}}function Kv(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let S=0;S<f;S++)v+=u[S]*h[S];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==ln&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const O=I===Or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Fn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ln&&!O)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:U,maxSamples:L}}function Jv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new vi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,b=w*4;let M=d.clippingState||null;l.value=M,M=u(v,h,b,p);for(let U=0;U!==b;++U)M[U]=t[U];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const d=p+S*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,M=p;b!==S;++b,M+=4)o.copy(f[b]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Qv(n){let e=new WeakMap;function t(o,a){return a===ca?o.mapping=rr:a===ua&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ca||a===ua)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tg(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ji=4,Mc=[.125,.215,.35,.446,.526,.582],Si=20,Fo=new cg,yc=new $e;let Oo=null,Bo=0,Ho=0,zo=!1;const xi=(1+Math.sqrt(5))/2,Wi=1/xi,Tc=[new W(-xi,Wi,0),new W(xi,Wi,0),new W(-Wi,0,xi),new W(Wi,0,xi),new W(0,xi,-Wi),new W(0,xi,Wi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],$v=new W;class bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=$v}=s;Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,Bo,Ho),this._renderer.xr.enabled=zo,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Or,format:ln,colorSpace:lr,depthBuffer:!1},r=Rc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(s)),this._blurMaterial=t0(s,e,t)}return r}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,i,r,s){const l=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(yc),f.toneMapping=$n,f.autoClear=!1;const v=new _f({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),S=new Un(new kr,v);let m=!1;const d=e.background;d?d.isColor&&(v.color.copy(d),e.background=null,m=!0):(v.color.copy(yc),m=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const M=this._cubeSize;gs(r,b*M,w>2?M:0,M,M),f.setRenderTarget(r),m&&f.render(S,l),f.render(e,l)}S.geometry.dispose(),S.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===rr||e.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;gs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tc[(r-s-1)%Tc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Un(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Si-1),S=s/v,m=isFinite(s)?1+Math.floor(u*S):Si;m>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const d=[];let w=0;for(let I=0;I<Si;++I){const O=I/S,y=Math.exp(-O*O/2);d.push(y),I===0?w+=y:I<m&&(w+=2*y)}for(let I=0;I<d.length;I++)d[I]=d[I]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=v,h.mipInt.value=b-i;const M=this._sizeLods[r],U=3*M*(r>b-ji?r-b+ji:0),L=4*(this._cubeSize-M);gs(t,U,L,3*M,2*M),l.setRenderTarget(t),l.render(f,Fo)}}function e0(n){const e=[],t=[],i=[];let r=n;const s=n-ji+1+Mc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ji?l=Mc[o-n+ji-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,S=3,m=2,d=1,w=new Float32Array(S*v*p),b=new Float32Array(m*v*p),M=new Float32Array(d*v*p);for(let L=0;L<p;L++){const I=L%3*2/3-1,O=L>2?0:-1,y=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];w.set(y,S*v*L),b.set(h,m*v*L);const A=[L,L,L,L,L,L];M.set(A,d*v*L)}const U=new zn;U.setAttribute("position",new xn(w,S)),U.setAttribute("uv",new xn(b,m)),U.setAttribute("faceIndex",new xn(M,d)),e.push(U),r>ji&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rc(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=Ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function t0(n,e,t){const i=new Float32Array(Si),r=new W(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function wc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Cc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ca||l===ua,u=l===rr||l===sr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new bc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new bc(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function i0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_i("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function r0(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,v=f.attributes.position;let S=0;if(p!==null){const w=p.array;S=p.version;for(let b=0,M=w.length;b<M;b+=3){const U=w[b+0],L=w[b+1],I=w[b+2];h.push(U,L,L,I,I,U)}}else if(v!==void 0){const w=v.array;S=v.version;for(let b=0,M=w.length/3-1;b<M;b+=3){const U=b+0,L=b+1,I=b+2;h.push(U,L,L,I,I,U)}}else return;const m=new(df(h)?xf:vf)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function s0(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,h*o,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];t.update(m,i,1)}function f(h,p,v,S){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,v);let d=0;for(let w=0;w<v;w++)d+=p[w]*S[w];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function o0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function a0(n,e,t){const i=new WeakMap,r=new dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let A=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var p=A;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),m===!0&&(M=3);let U=a.attributes.position.count*M,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*L*4*f),O=new hf(I,U,L,f);O.type=Ln,O.needsUpdate=!0;const y=M*4;for(let P=0;P<f;P++){const $=d[P],j=w[P],ne=b[P],se=U*L*4*P;for(let J=0;J<$.count;J++){const Q=J*y;v===!0&&(r.fromBufferAttribute($,J),I[se+Q+0]=r.x,I[se+Q+1]=r.y,I[se+Q+2]=r.z,I[se+Q+3]=0),S===!0&&(r.fromBufferAttribute(j,J),I[se+Q+4]=r.x,I[se+Q+5]=r.y,I[se+Q+6]=r.z,I[se+Q+7]=0),m===!0&&(r.fromBufferAttribute(ne,J),I[se+Q+8]=r.x,I[se+Q+9]=r.y,I[se+Q+10]=r.z,I[se+Q+11]=ne.itemSize===4?r.w:1)}}h={count:f,texture:O,size:new nt(U,L)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function l0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Rf=new Ht,Ic=new Tf(1,1),wf=new hf,Cf=new Bm,If=new Af,Pc=[],Lc=[],Dc=new Float32Array(16),Uc=new Float32Array(9),Nc=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Pc[r];if(s===void 0&&(s=new Float32Array(r),Pc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Js(n,e){let t=Lc[e];t===void 0&&(t=new Int32Array(e),Lc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function h0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Nc.set(i),n.uniformMatrix2fv(this.addr,!1,Nc),vt(t,i)}}function p0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Uc.set(i),n.uniformMatrix3fv(this.addr,!1,Uc),vt(t,i)}}function m0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Dc.set(i),n.uniformMatrix4fv(this.addr,!1,Dc),vt(t,i)}}function g0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function E0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function A0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function M0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function y0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ic.compareFunction=ff,s=Ic):s=Rf,t.setTexture2D(e||s,r)}function T0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Cf,r)}function b0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||If,r)}function R0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wf,r)}function w0(n){switch(n){case 5126:return c0;case 35664:return u0;case 35665:return f0;case 35666:return d0;case 35674:return h0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return x0;case 5125:return E0;case 36294:return S0;case 36295:return A0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return R0}}function C0(n,e){n.uniform1fv(this.addr,e)}function I0(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function P0(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function L0(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function D0(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function U0(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N0(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function F0(n,e){n.uniform1iv(this.addr,e)}function O0(n,e){n.uniform2iv(this.addr,e)}function B0(n,e){n.uniform3iv(this.addr,e)}function H0(n,e){n.uniform4iv(this.addr,e)}function z0(n,e){n.uniform1uiv(this.addr,e)}function V0(n,e){n.uniform2uiv(this.addr,e)}function k0(n,e){n.uniform3uiv(this.addr,e)}function G0(n,e){n.uniform4uiv(this.addr,e)}function W0(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Rf,s[o])}function X0(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Cf,s[o])}function j0(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||If,s[o])}function q0(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wf,s[o])}function Y0(n){switch(n){case 5126:return C0;case 35664:return I0;case 35665:return P0;case 35666:return L0;case 35674:return D0;case 35675:return U0;case 35676:return N0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return H0;case 5125:return z0;case 36294:return V0;case 36295:return k0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return q0}}class K0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w0(t.type)}}class Z0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y0(t.type)}}class J0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Fc(n,e){n.seq.push(e),n.map[e.id]=e}function Q0(n,e,t){const i=n.name,r=i.length;for(Vo.lastIndex=0;;){const s=Vo.exec(i),o=Vo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fc(t,c===void 0?new K0(a,n,e):new Z0(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new J0(a),Fc(t,f)),t=f}}}class Rs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Q0(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Oc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $0=37297;let ex=0;function tx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Bc=new ze;function nx(n){qe._getMatrix(Bc,qe.workingColorSpace,n);const e=`mat3( ${Bc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case Ns:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tx(n.getShaderSource(e),o)}else return r}function ix(n,e){const t=nx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rx(n,e){let t;switch(e){case cm:t="Linear";break;case um:t="Reinhard";break;case fm:t="Cineon";break;case dm:t="ACESFilmic";break;case pm:t="AgX";break;case mm:t="Neutral";break;case hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _s=new W;function sx(){qe.getLuminanceCoefficients(_s);const n=_s.x.toFixed(4),e=_s.y.toFixed(4),t=_s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function ax(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sr(n){return n!==""}function zc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(n){return n.replace(cx,fx)}const ux=new Map;function fx(n,e){let t=ke[e];if(t===void 0){const i=ux.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Va(t)}const dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(n){return n.replace(dx,hx)}function hx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function px(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function mx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rr:case sr:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function _x(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qu:e="ENVMAP_BLENDING_MULTIPLY";break;case am:e="ENVMAP_BLENDING_MIX";break;case lm:e="ENVMAP_BLENDING_ADD";break}return e}function vx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=px(t),c=mx(t),u=gx(t),f=_x(t),h=vx(t),p=ox(t),v=ax(s),S=r.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Sr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Sr).join(`
`),d.length>0&&(d+=`
`)):(m=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),d=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?ke.tonemapping_pars_fragment:"",t.toneMapping!==$n?rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,ix("linearToOutputTexel",t.outputColorSpace),sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=Va(o),o=zc(o,t),o=Vc(o,t),a=Va(a),a=zc(a,t),a=Vc(a,t),o=kc(o),a=kc(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=w+m+o,M=w+d+a,U=Oc(r,r.VERTEX_SHADER,b),L=Oc(r,r.FRAGMENT_SHADER,M);r.attachShader(S,U),r.attachShader(S,L),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function I(P){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(S).trim(),j=r.getShaderInfoLog(U).trim(),ne=r.getShaderInfoLog(L).trim();let se=!0,J=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,U,L);else{const Q=Hc(r,U,"vertex"),H=Hc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+Q+`
`+H)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(j===""||ne==="")&&(J=!1);J&&(P.diagnostics={runnable:se,programLog:$,vertexShader:{log:j,prefix:m},fragmentShader:{log:ne,prefix:d}})}r.deleteShader(U),r.deleteShader(L),O=new Rs(r,S),y=lx(r,S)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(S,$0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ex++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=L,this}let Ex=0;class Sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ax(e),t.set(e,i)),i}}class Ax{constructor(e){this.id=Ex++,this.code=e,this.usedTimes=0}}function Mx(n,e,t,i,r,s,o){const a=new mf,l=new Sx,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,A,P,$,j){const ne=$.fog,se=j.geometry,J=y.isMeshStandardMaterial?$.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||J),H=Q&&Q.mapping===Ys?Q.image.height:null,fe=v[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Ee=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Te=Ee!==void 0?Ee.length:0;let Pe=0;se.morphAttributes.position!==void 0&&(Pe=1),se.morphAttributes.normal!==void 0&&(Pe=2),se.morphAttributes.color!==void 0&&(Pe=3);let Ye,ee,ue,Ae;if(fe){const Qe=gn[fe];Ye=Qe.vertexShader,ee=Qe.fragmentShader}else Ye=y.vertexShader,ee=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),Ae=l.getFragmentShaderID(y);const pe=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),We=j.isInstancedMesh===!0,we=j.isBatchedMesh===!0,lt=!!y.map,T=!!y.matcap,R=!!Q,x=!!y.aoMap,ie=!!y.lightMap,q=!!y.bumpMap,Y=!!y.normalMap,K=!!y.displacementMap,re=!!y.emissiveMap,X=!!y.metalnessMap,_=!!y.roughnessMap,g=y.anisotropy>0,C=y.clearcoat>0,B=y.dispersion>0,k=y.iridescence>0,z=y.sheen>0,ce=y.transmission>0,oe=g&&!!y.anisotropyMap,de=C&&!!y.clearcoatMap,Le=C&&!!y.clearcoatNormalMap,ae=C&&!!y.clearcoatRoughnessMap,ge=k&&!!y.iridescenceMap,be=k&&!!y.iridescenceThicknessMap,De=z&&!!y.sheenColorMap,he=z&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,Oe=!!y.specularColorMap,it=!!y.specularIntensityMap,D=ce&&!!y.transmissionMap,_e=ce&&!!y.thicknessMap,Z=!!y.gradientMap,te=!!y.alphaMap,Se=y.alphaTest>0,xe=!!y.alphaHash,He=!!y.extensions;let ct=$n;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ct=n.toneMapping);const Mt={shaderID:fe,shaderType:y.type,shaderName:y.name,vertexShader:Ye,fragmentShader:ee,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:Ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:we,batchingColor:we&&j._colorsTexture!==null,instancing:We,instancingColor:We&&j.instanceColor!==null,instancingMorph:We&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:lr,alphaToCoverage:!!y.alphaToCoverage,map:lt,matcap:T,envMap:R,envMapMode:R&&Q.mapping,envMapCubeUVHeight:H,aoMap:x,lightMap:ie,bumpMap:q,normalMap:Y,displacementMap:h&&K,emissiveMap:re,normalMapObjectSpace:Y&&y.normalMapType===Em,normalMapTangentSpace:Y&&y.normalMapType===xm,metalnessMap:X,roughnessMap:_,anisotropy:g,anisotropyMap:oe,clearcoat:C,clearcoatMap:de,clearcoatNormalMap:Le,clearcoatRoughnessMap:ae,dispersion:B,iridescence:k,iridescenceMap:ge,iridescenceThicknessMap:be,sheen:z,sheenColorMap:De,sheenRoughnessMap:he,specularMap:Ue,specularColorMap:Oe,specularIntensityMap:it,transmission:ce,transmissionMap:D,thicknessMap:_e,gradientMap:Z,opaque:y.transparent===!1&&y.blending===Qi&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:Se,alphaHash:xe,combine:y.combine,mapUv:lt&&S(y.map.channel),aoMapUv:x&&S(y.aoMap.channel),lightMapUv:ie&&S(y.lightMap.channel),bumpMapUv:q&&S(y.bumpMap.channel),normalMapUv:Y&&S(y.normalMap.channel),displacementMapUv:K&&S(y.displacementMap.channel),emissiveMapUv:re&&S(y.emissiveMap.channel),metalnessMapUv:X&&S(y.metalnessMap.channel),roughnessMapUv:_&&S(y.roughnessMap.channel),anisotropyMapUv:oe&&S(y.anisotropyMap.channel),clearcoatMapUv:de&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:Le&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&S(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:be&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:he&&S(y.sheenRoughnessMap.channel),specularMapUv:Ue&&S(y.specularMap.channel),specularColorMapUv:Oe&&S(y.specularColorMap.channel),specularIntensityMapUv:it&&S(y.specularIntensityMap.channel),transmissionMapUv:D&&S(y.transmissionMap.channel),thicknessMapUv:_e&&S(y.thicknessMap.channel),alphaMapUv:te&&S(y.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Y||g),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!se.attributes.uv&&(lt||te),fog:!!ne,useFog:y.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:j.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Pe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:lt&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===et,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&qe.getTransfer(y.emissiveMap.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pn,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:He&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&y.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function d(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)A.push(P),A.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(w(A,y),b(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function w(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function b(y,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const A=v[y.type];let P;if(A){const $=gn[A];P=Jm.clone($.uniforms)}else P=y.uniforms;return P}function U(y,A){let P;for(let $=0,j=u.length;$<j;$++){const ne=u[$];if(ne.cacheKey===A){P=ne,++P.usedTimes;break}}return P===void 0&&(P=new xx(n,A,y,s),u.push(P)),P}function L(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function I(y){l.remove(y)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:U,releaseProgram:L,releaseShaderCache:I,programs:u,dispose:O}}function yx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Tx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,v,S,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:S,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=S,d.group=m),e++,d}function a(f,h,p,v,S,m){const d=o(f,h,p,v,S,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,S,m){const d=o(f,h,p,v,S,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Tx),i.length>1&&i.sort(h||Wc),r.length>1&&r.sort(h||Wc)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function bx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xc,n.set(i,[o])):r>=s.length?(o=new Xc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new $e};break;case"SpotLight":t={position:new W,direction:new W,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function wx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cx=0;function Ix(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Px(n){const e=new Rx,t=wx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new ht,o=new ht;function a(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,v=0,S=0,m=0,d=0,w=0,b=0,M=0,U=0,L=0,I=0;c.sort(Ix);for(let y=0,A=c.length;y<A;y++){const P=c[y],$=P.color,j=P.intensity,ne=P.distance,se=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=$.r*j,f+=$.g*j,h+=$.b*j;else if(P.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],j);I++}else if(P.isDirectionalLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=J,p++}else if(P.isSpotLight){const J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy($).multiplyScalar(j),J.distance=ne,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[S]=J;const Q=P.shadow;if(P.map&&(i.spotLightMap[U]=P.map,U++,Q.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[S]=Q.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[S]=H,i.spotShadowMap[S]=se,M++}S++}else if(P.isRectAreaLight){const J=e.get(P);J.color.copy($).multiplyScalar(j),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=J,m++}else if(P.isPointLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){const Q=P.shadow,H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=se,i.pointShadowMatrix[v]=P.shadow.matrix,b++}i.point[v]=J,v++}else if(P.isHemisphereLight){const J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(j),J.groundColor.copy(P.groundColor).multiplyScalar(j),i.hemi[d]=J,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const O=i.hash;(O.directionalLength!==p||O.pointLength!==v||O.spotLength!==S||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==w||O.numPointShadows!==b||O.numSpotShadows!==M||O.numSpotMaps!==U||O.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+U-L,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,O.directionalLength=p,O.pointLength=v,O.spotLength=S,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=w,O.numPointShadows=b,O.numSpotShadows=M,O.numSpotMaps=U,O.numLightProbes=I,i.version=Cx++)}function l(c,u){let f=0,h=0,p=0,v=0,S=0;const m=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const b=c[d];if(b.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function jc(n){const e=new Px(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Lx(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jc(n),e.set(r,[a])):s>=o.length?(a=new jc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nx(n,e,t){let i=new Mf;const r=new nt,s=new nt,o=new dt,a=new ag({depthPacking:vm}),l=new lg,c={},u=t.maxTextureSize,f={[ti]:Bt,[Bt]:ti,[Pn]:Pn},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Dx,fragmentShader:Ux}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new zn;v.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Un(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let d=this.type;this.render=function(L,I,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const y=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Qn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const j=d!==wn&&this.type===wn,ne=d===wn&&this.type!==wn;for(let se=0,J=L.length;se<J;se++){const Q=L[se],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const fe=H.getFrameExtents();if(r.multiply(fe),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,H.mapSize.y=s.y)),H.map===null||j===!0||ne===!0){const Te=this.type!==wn?{minFilter:fn,magFilter:fn}:{};H.map!==null&&H.map.dispose(),H.map=new Ri(r.x,r.y,Te),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Ee=H.getViewportCount();for(let Te=0;Te<Ee;Te++){const Pe=H.getViewport(Te);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),$.viewport(o),H.updateMatrices(Q,Te),i=H.getFrustum(),M(I,O,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===wn&&w(H,O),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,A,P)};function w(L,I){const O=e.update(S);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ri(r.x,r.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(I,null,O,h,S,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(I,null,O,p,S,null)}function b(L,I,O,y){let A=null;const P=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)A=P;else if(A=O.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const $=A.uuid,j=I.uuid;let ne=c[$];ne===void 0&&(ne={},c[$]=ne);let se=ne[j];se===void 0&&(se=A.clone(),ne[j]=se,I.addEventListener("dispose",U)),A=se}if(A.visible=I.visible,A.wireframe=I.wireframe,y===wn?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:f[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const $=n.properties.get(A);$.light=O}return A}function M(L,I,O,y,A){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&A===wn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const j=e.update(L),ne=L.material;if(Array.isArray(ne)){const se=j.groups;for(let J=0,Q=se.length;J<Q;J++){const H=se[J],fe=ne[H.materialIndex];if(fe&&fe.visible){const Ee=b(L,fe,y,A);L.onBeforeShadow(n,L,I,O,j,Ee,H),n.renderBufferDirect(O,null,j,Ee,L,H),L.onAfterShadow(n,L,I,O,j,Ee,H)}}}else if(ne.visible){const se=b(L,ne,y,A);L.onBeforeShadow(n,L,I,O,j,se,null),n.renderBufferDirect(O,null,j,se,L,null),L.onAfterShadow(n,L,I,O,j,se,null)}}const $=L.children;for(let j=0,ne=$.length;j<ne;j++)M($[j],I,O,y,A)}function U(L){L.target.removeEventListener("dispose",U);for(const O in c){const y=c[O],A=L.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}const Fx={[na]:ia,[ra]:aa,[sa]:la,[ir]:oa,[ia]:na,[aa]:ra,[la]:sa,[oa]:ir};function Ox(n,e){function t(){let D=!1;const _e=new dt;let Z=null;const te=new dt(0,0,0,0);return{setMask:function(Se){Z!==Se&&!D&&(n.colorMask(Se,Se,Se,Se),Z=Se)},setLocked:function(Se){D=Se},setClear:function(Se,xe,He,ct,Mt){Mt===!0&&(Se*=ct,xe*=ct,He*=ct),_e.set(Se,xe,He,ct),te.equals(_e)===!1&&(n.clearColor(Se,xe,He,ct),te.copy(_e))},reset:function(){D=!1,Z=null,te.set(-1,0,0,0)}}}function i(){let D=!1,_e=!1,Z=null,te=null,Se=null;return{setReversed:function(xe){if(_e!==xe){const He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const ct=Se;Se=null,this.setClear(ct)}_e=xe},getReversed:function(){return _e},setTest:function(xe){xe?pe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(xe){Z!==xe&&!D&&(n.depthMask(xe),Z=xe)},setFunc:function(xe){if(_e&&(xe=Fx[xe]),te!==xe){switch(xe){case na:n.depthFunc(n.NEVER);break;case ia:n.depthFunc(n.ALWAYS);break;case ra:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case sa:n.depthFunc(n.EQUAL);break;case oa:n.depthFunc(n.GEQUAL);break;case aa:n.depthFunc(n.GREATER);break;case la:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=xe}},setLocked:function(xe){D=xe},setClear:function(xe){Se!==xe&&(_e&&(xe=1-xe),n.clearDepth(xe),Se=xe)},reset:function(){D=!1,Z=null,te=null,Se=null,_e=!1}}}function r(){let D=!1,_e=null,Z=null,te=null,Se=null,xe=null,He=null,ct=null,Mt=null;return{setTest:function(Qe){D||(Qe?pe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Qe){_e!==Qe&&!D&&(n.stencilMask(Qe),_e=Qe)},setFunc:function(Qe,en,Sn){(Z!==Qe||te!==en||Se!==Sn)&&(n.stencilFunc(Qe,en,Sn),Z=Qe,te=en,Se=Sn)},setOp:function(Qe,en,Sn){(xe!==Qe||He!==en||ct!==Sn)&&(n.stencilOp(Qe,en,Sn),xe=Qe,He=en,ct=Sn)},setLocked:function(Qe){D=Qe},setClear:function(Qe){Mt!==Qe&&(n.clearStencil(Qe),Mt=Qe)},reset:function(){D=!1,_e=null,Z=null,te=null,Se=null,xe=null,He=null,ct=null,Mt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],v=null,S=!1,m=null,d=null,w=null,b=null,M=null,U=null,L=null,I=new $e(0,0,0),O=0,y=!1,A=null,P=null,$=null,j=null,ne=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=Q>=2);let fe=null,Ee={};const Te=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),Ye=new dt().fromArray(Te),ee=new dt().fromArray(Pe);function ue(D,_e,Z,te){const Se=new Uint8Array(4),xe=n.createTexture();n.bindTexture(D,xe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<Z;He++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(_e+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return xe}const Ae={};Ae[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(ir),q(!1),Y(Zl),pe(n.CULL_FACE),x(Qn);function pe(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Re(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function We(D,_e){return f[D]!==_e?(n.bindFramebuffer(D,_e),f[D]=_e,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_e),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function we(D,_e){let Z=p,te=!1;if(D){Z=h.get(_e),Z===void 0&&(Z=[],h.set(_e,Z));const Se=D.textures;if(Z.length!==Se.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,He=Se.length;xe<He;xe++)Z[xe]=n.COLOR_ATTACHMENT0+xe;Z.length=Se.length,te=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,te=!0);te&&n.drawBuffers(Z)}function lt(D){return v!==D?(n.useProgram(D),v=D,!0):!1}const T={[Ei]:n.FUNC_ADD,[Wp]:n.FUNC_SUBTRACT,[Xp]:n.FUNC_REVERSE_SUBTRACT};T[jp]=n.MIN,T[qp]=n.MAX;const R={[Yp]:n.ZERO,[Kp]:n.ONE,[Zp]:n.SRC_COLOR,[ea]:n.SRC_ALPHA,[nm]:n.SRC_ALPHA_SATURATE,[em]:n.DST_COLOR,[Qp]:n.DST_ALPHA,[Jp]:n.ONE_MINUS_SRC_COLOR,[ta]:n.ONE_MINUS_SRC_ALPHA,[tm]:n.ONE_MINUS_DST_COLOR,[$p]:n.ONE_MINUS_DST_ALPHA,[im]:n.CONSTANT_COLOR,[rm]:n.ONE_MINUS_CONSTANT_COLOR,[sm]:n.CONSTANT_ALPHA,[om]:n.ONE_MINUS_CONSTANT_ALPHA};function x(D,_e,Z,te,Se,xe,He,ct,Mt,Qe){if(D===Qn){S===!0&&(Re(n.BLEND),S=!1);return}if(S===!1&&(pe(n.BLEND),S=!0),D!==Gp){if(D!==m||Qe!==y){if((d!==Ei||M!==Ei)&&(n.blendEquation(n.FUNC_ADD),d=Ei,M=Ei),Qe)switch(D){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jl:n.blendFunc(n.ONE,n.ONE);break;case Ql:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ql:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $l:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,b=null,U=null,L=null,I.set(0,0,0),O=0,m=D,y=Qe}return}Se=Se||_e,xe=xe||Z,He=He||te,(_e!==d||Se!==M)&&(n.blendEquationSeparate(T[_e],T[Se]),d=_e,M=Se),(Z!==w||te!==b||xe!==U||He!==L)&&(n.blendFuncSeparate(R[Z],R[te],R[xe],R[He]),w=Z,b=te,U=xe,L=He),(ct.equals(I)===!1||Mt!==O)&&(n.blendColor(ct.r,ct.g,ct.b,Mt),I.copy(ct),O=Mt),m=D,y=!1}function ie(D,_e){D.side===Pn?Re(n.CULL_FACE):pe(n.CULL_FACE);let Z=D.side===Bt;_e&&(Z=!Z),q(Z),D.blending===Qi&&D.transparent===!1?x(Qn):x(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const te=D.stencilWrite;a.setTest(te),te&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(D){A!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),A=D)}function Y(D){D!==zp?(pe(n.CULL_FACE),D!==P&&(D===Zl?n.cullFace(n.BACK):D===Vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),P=D}function K(D){D!==$&&(J&&n.lineWidth(D),$=D)}function re(D,_e,Z){D?(pe(n.POLYGON_OFFSET_FILL),(j!==_e||ne!==Z)&&(n.polygonOffset(_e,Z),j=_e,ne=Z)):Re(n.POLYGON_OFFSET_FILL)}function X(D){D?pe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function _(D){D===void 0&&(D=n.TEXTURE0+se-1),fe!==D&&(n.activeTexture(D),fe=D)}function g(D,_e,Z){Z===void 0&&(fe===null?Z=n.TEXTURE0+se-1:Z=fe);let te=Ee[Z];te===void 0&&(te={type:void 0,texture:void 0},Ee[Z]=te),(te.type!==D||te.texture!==_e)&&(fe!==Z&&(n.activeTexture(Z),fe=Z),n.bindTexture(D,_e||Ae[D]),te.type=D,te.texture=_e)}function C(){const D=Ee[fe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function B(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Ye.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function he(D){ee.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function Ue(D,_e){let Z=c.get(_e);Z===void 0&&(Z=new WeakMap,c.set(_e,Z));let te=Z.get(D);te===void 0&&(te=n.getUniformBlockIndex(_e,D.name),Z.set(D,te))}function Oe(D,_e){const te=c.get(_e).get(D);l.get(_e)!==te&&(n.uniformBlockBinding(_e,te,D.__bindingPointIndex),l.set(_e,te))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,Ee={},f={},h=new WeakMap,p=[],v=null,S=!1,m=null,d=null,w=null,b=null,M=null,U=null,L=null,I=new $e(0,0,0),O=0,y=!1,A=null,P=null,$=null,j=null,ne=null,Ye.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Re,bindFramebuffer:We,drawBuffers:we,useProgram:lt,setBlending:x,setMaterial:ie,setFlipSided:q,setCullFace:Y,setLineWidth:K,setPolygonOffset:re,setScissorTest:X,activeTexture:_,bindTexture:g,unbindTexture:C,compressedTexImage2D:B,compressedTexImage3D:k,texImage2D:ge,texImage3D:be,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:Le,texStorage3D:ae,texSubImage2D:z,texSubImage3D:ce,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:De,viewport:he,reset:it}}function Bx(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,g){return p?new OffscreenCanvas(_,g):Os("canvas")}function S(_,g,C){let B=1;const k=X(_);if((k.width>C||k.height>C)&&(B=C/Math.max(k.width,k.height)),B<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const z=Math.floor(B*k.width),ce=Math.floor(B*k.height);f===void 0&&(f=v(z,ce));const oe=g?v(z,ce):f;return oe.width=z,oe.height=ce,oe.getContext("2d").drawImage(_,0,0,z,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+z+"x"+ce+")."),oe}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),_;return _}function m(_){return _.generateMipmaps}function d(_){n.generateMipmap(_)}function w(_){return _.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?n.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(_,g,C,B,k=!1){if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let z=g;if(g===n.RED&&(C===n.FLOAT&&(z=n.R32F),C===n.HALF_FLOAT&&(z=n.R16F),C===n.UNSIGNED_BYTE&&(z=n.R8)),g===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.R8UI),C===n.UNSIGNED_SHORT&&(z=n.R16UI),C===n.UNSIGNED_INT&&(z=n.R32UI),C===n.BYTE&&(z=n.R8I),C===n.SHORT&&(z=n.R16I),C===n.INT&&(z=n.R32I)),g===n.RG&&(C===n.FLOAT&&(z=n.RG32F),C===n.HALF_FLOAT&&(z=n.RG16F),C===n.UNSIGNED_BYTE&&(z=n.RG8)),g===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.RG8UI),C===n.UNSIGNED_SHORT&&(z=n.RG16UI),C===n.UNSIGNED_INT&&(z=n.RG32UI),C===n.BYTE&&(z=n.RG8I),C===n.SHORT&&(z=n.RG16I),C===n.INT&&(z=n.RG32I)),g===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.RGB8UI),C===n.UNSIGNED_SHORT&&(z=n.RGB16UI),C===n.UNSIGNED_INT&&(z=n.RGB32UI),C===n.BYTE&&(z=n.RGB8I),C===n.SHORT&&(z=n.RGB16I),C===n.INT&&(z=n.RGB32I)),g===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),C===n.UNSIGNED_INT&&(z=n.RGBA32UI),C===n.BYTE&&(z=n.RGBA8I),C===n.SHORT&&(z=n.RGBA16I),C===n.INT&&(z=n.RGBA32I)),g===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),g===n.RGBA){const ce=k?Ns:qe.getTransfer(B);C===n.FLOAT&&(z=n.RGBA32F),C===n.HALF_FLOAT&&(z=n.RGBA16F),C===n.UNSIGNED_BYTE&&(z=ce===et?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function M(_,g){let C;return _?g===null||g===bi||g===or?C=n.DEPTH24_STENCIL8:g===Ln?C=n.DEPTH32F_STENCIL8:g===Ur&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===bi||g===or?C=n.DEPTH_COMPONENT24:g===Ln?C=n.DEPTH_COMPONENT32F:g===Ur&&(C=n.DEPTH_COMPONENT16),C}function U(_,g){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==fn&&_.minFilter!==_n?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function L(_){const g=_.target;g.removeEventListener("dispose",L),O(g),g.isVideoTexture&&u.delete(g)}function I(_){const g=_.target;g.removeEventListener("dispose",I),A(g)}function O(_){const g=i.get(_);if(g.__webglInit===void 0)return;const C=_.source,B=h.get(C);if(B){const k=B[g.__cacheKey];k.usedTimes--,k.usedTimes===0&&y(_),Object.keys(B).length===0&&h.delete(C)}i.remove(_)}function y(_){const g=i.get(_);n.deleteTexture(g.__webglTexture);const C=_.source,B=h.get(C);delete B[g.__cacheKey],o.memory.textures--}function A(_){const g=i.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),i.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let k=0;k<g.__webglFramebuffer[B].length;k++)n.deleteFramebuffer(g.__webglFramebuffer[B][k]);else n.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)n.deleteFramebuffer(g.__webglFramebuffer[B]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const C=_.textures;for(let B=0,k=C.length;B<k;B++){const z=i.get(C[B]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(C[B])}i.remove(_)}let P=0;function $(){P=0}function j(){const _=P;return _>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures),P+=1,_}function ne(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.colorSpace),g.join()}function se(_,g){const C=i.get(_);if(_.isVideoTexture&&K(_),_.isRenderTargetTexture===!1&&_.version>0&&C.__version!==_.version){const B=_.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(C,_,g);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+g)}function J(_,g){const C=i.get(_);if(_.version>0&&C.__version!==_.version){ee(C,_,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+g)}function Q(_,g){const C=i.get(_);if(_.version>0&&C.__version!==_.version){ee(C,_,g);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+g)}function H(_,g){const C=i.get(_);if(_.version>0&&C.__version!==_.version){ue(C,_,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+g)}const fe={[fa]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[da]:n.MIRRORED_REPEAT},Ee={[fn]:n.NEAREST,[gm]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[fo]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},Te={[Sm]:n.NEVER,[Rm]:n.ALWAYS,[Am]:n.LESS,[ff]:n.LEQUAL,[Mm]:n.EQUAL,[bm]:n.GEQUAL,[ym]:n.GREATER,[Tm]:n.NOTEQUAL};function Pe(_,g){if(g.type===Ln&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===_n||g.magFilter===fo||g.magFilter===Yr||g.magFilter===Mi||g.minFilter===_n||g.minFilter===fo||g.minFilter===Yr||g.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(_,n.TEXTURE_WRAP_S,fe[g.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,fe[g.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,fe[g.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,Ee[g.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,Ee[g.minFilter]),g.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,Te[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===fn||g.minFilter!==Yr&&g.minFilter!==Mi||g.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(_,g){let C=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",L));const B=g.source;let k=h.get(B);k===void 0&&(k={},h.set(B,k));const z=ne(g);if(z!==_.__cacheKey){k[z]===void 0&&(k[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),k[z].usedTimes++;const ce=k[_.__cacheKey];ce!==void 0&&(k[_.__cacheKey].usedTimes--,ce.usedTimes===0&&y(g)),_.__cacheKey=z,_.__webglTexture=k[z].texture}return C}function ee(_,g,C){let B=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=n.TEXTURE_3D);const k=Ye(_,g),z=g.source;t.bindTexture(B,_.__webglTexture,n.TEXTURE0+C);const ce=i.get(z);if(z.version!==ce.__version||k===!0){t.activeTexture(n.TEXTURE0+C);const oe=qe.getPrimaries(qe.workingColorSpace),de=g.colorSpace===Jn?null:qe.getPrimaries(g.colorSpace),Le=g.colorSpace===Jn||oe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ae=S(g.image,!1,r.maxTextureSize);ae=re(g,ae);const ge=s.convert(g.format,g.colorSpace),be=s.convert(g.type);let De=b(g.internalFormat,ge,be,g.colorSpace,g.isVideoTexture);Pe(B,g);let he;const Ue=g.mipmaps,Oe=g.isVideoTexture!==!0,it=ce.__version===void 0||k===!0,D=z.dataReady,_e=U(g,ae);if(g.isDepthTexture)De=M(g.format===ar,g.type),it&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,ge,be,null));else if(g.isDataTexture)if(Ue.length>0){Oe&&it&&t.texStorage2D(n.TEXTURE_2D,_e,De,Ue[0].width,Ue[0].height);for(let Z=0,te=Ue.length;Z<te;Z++)he=Ue[Z],Oe?D&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,he.width,he.height,ge,be,he.data):t.texImage2D(n.TEXTURE_2D,Z,De,he.width,he.height,0,ge,be,he.data);g.generateMipmaps=!1}else Oe?(it&&t.texStorage2D(n.TEXTURE_2D,_e,De,ae.width,ae.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,ge,be,ae.data)):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,ge,be,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,De,Ue[0].width,Ue[0].height,ae.depth);for(let Z=0,te=Ue.length;Z<te;Z++)if(he=Ue[Z],g.format!==ln)if(ge!==null)if(Oe){if(D)if(g.layerUpdates.size>0){const Se=Ac(he.width,he.height,g.format,g.type);for(const xe of g.layerUpdates){const He=he.data.subarray(xe*Se/he.data.BYTES_PER_ELEMENT,(xe+1)*Se/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,xe,he.width,he.height,1,ge,He)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,he.width,he.height,ae.depth,ge,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,De,he.width,he.height,ae.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,he.width,he.height,ae.depth,ge,be,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,De,he.width,he.height,ae.depth,0,ge,be,he.data)}else{Oe&&it&&t.texStorage2D(n.TEXTURE_2D,_e,De,Ue[0].width,Ue[0].height);for(let Z=0,te=Ue.length;Z<te;Z++)he=Ue[Z],g.format!==ln?ge!==null?Oe?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,he.width,he.height,ge,he.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,De,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,he.width,he.height,ge,be,he.data):t.texImage2D(n.TEXTURE_2D,Z,De,he.width,he.height,0,ge,be,he.data)}else if(g.isDataArrayTexture)if(Oe){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,De,ae.width,ae.height,ae.depth),D)if(g.layerUpdates.size>0){const Z=Ac(ae.width,ae.height,g.format,g.type);for(const te of g.layerUpdates){const Se=ae.data.subarray(te*Z/ae.data.BYTES_PER_ELEMENT,(te+1)*Z/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,ge,be,Se)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,be,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,ge,be,ae.data);else if(g.isData3DTexture)Oe?(it&&t.texStorage3D(n.TEXTURE_3D,_e,De,ae.width,ae.height,ae.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,be,ae.data)):t.texImage3D(n.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,ge,be,ae.data);else if(g.isFramebufferTexture){if(it)if(Oe)t.texStorage2D(n.TEXTURE_2D,_e,De,ae.width,ae.height);else{let Z=ae.width,te=ae.height;for(let Se=0;Se<_e;Se++)t.texImage2D(n.TEXTURE_2D,Se,De,Z,te,0,ge,be,null),Z>>=1,te>>=1}}else if(Ue.length>0){if(Oe&&it){const Z=X(Ue[0]);t.texStorage2D(n.TEXTURE_2D,_e,De,Z.width,Z.height)}for(let Z=0,te=Ue.length;Z<te;Z++)he=Ue[Z],Oe?D&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ge,be,he):t.texImage2D(n.TEXTURE_2D,Z,De,ge,be,he);g.generateMipmaps=!1}else if(Oe){if(it){const Z=X(ae);t.texStorage2D(n.TEXTURE_2D,_e,De,Z.width,Z.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,be,ae)}else t.texImage2D(n.TEXTURE_2D,0,De,ge,be,ae);m(g)&&d(B),ce.__version=z.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function ue(_,g,C){if(g.image.length!==6)return;const B=Ye(_,g),k=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+C);const z=i.get(k);if(k.version!==z.__version||B===!0){t.activeTexture(n.TEXTURE0+C);const ce=qe.getPrimaries(qe.workingColorSpace),oe=g.colorSpace===Jn?null:qe.getPrimaries(g.colorSpace),de=g.colorSpace===Jn||ce===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Le=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!Le&&!ae?ge[te]=S(g.image[te],!0,r.maxCubemapSize):ge[te]=ae?g.image[te].image:g.image[te],ge[te]=re(g,ge[te]);const be=ge[0],De=s.convert(g.format,g.colorSpace),he=s.convert(g.type),Ue=b(g.internalFormat,De,he,g.colorSpace),Oe=g.isVideoTexture!==!0,it=z.__version===void 0||B===!0,D=k.dataReady;let _e=U(g,be);Pe(n.TEXTURE_CUBE_MAP,g);let Z;if(Le){Oe&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ue,be.width,be.height);for(let te=0;te<6;te++){Z=ge[te].mipmaps;for(let Se=0;Se<Z.length;Se++){const xe=Z[Se];g.format!==ln?De!==null?Oe?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,xe.width,xe.height,De,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,Ue,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,xe.width,xe.height,De,he,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,Ue,xe.width,xe.height,0,De,he,xe.data)}}}else{if(Z=g.mipmaps,Oe&&it){Z.length>0&&_e++;const te=X(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ue,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,De,he,ge[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,ge[te].width,ge[te].height,0,De,he,ge[te].data);for(let Se=0;Se<Z.length;Se++){const He=Z[Se].image[te].image;Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,He.width,He.height,De,he,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,Ue,He.width,He.height,0,De,he,He.data)}}else{Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,he,ge[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,De,he,ge[te]);for(let Se=0;Se<Z.length;Se++){const xe=Z[Se];Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,De,he,xe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,Ue,De,he,xe.image[te])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),z.__version=k.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function Ae(_,g,C,B,k,z){const ce=s.convert(C.format,C.colorSpace),oe=s.convert(C.type),de=b(C.internalFormat,ce,oe,C.colorSpace),Le=i.get(g),ae=i.get(C);if(ae.__renderTarget=g,!Le.__hasExternalTextures){const ge=Math.max(1,g.width>>z),be=Math.max(1,g.height>>z);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,z,de,ge,be,g.depth,0,ce,oe,null):t.texImage2D(k,z,de,ge,be,0,ce,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),Y(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,k,ae.__webglTexture,0,q(g)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,k,ae.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(_,g,C){if(n.bindRenderbuffer(n.RENDERBUFFER,_),g.depthBuffer){const B=g.depthTexture,k=B&&B.isDepthTexture?B.type:null,z=M(g.stencilBuffer,k),ce=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=q(g);Y(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,z,g.width,g.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,z,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,_)}else{const B=g.textures;for(let k=0;k<B.length;k++){const z=B[k],ce=s.convert(z.format,z.colorSpace),oe=s.convert(z.type),de=b(z.internalFormat,ce,oe,z.colorSpace),Le=q(g);C&&Y(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,de,g.width,g.height):Y(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,de,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,de,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(g.depthTexture);B.__renderTarget=g,(!B.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),se(g.depthTexture,0);const k=B.__webglTexture,z=q(g);if(g.depthTexture.format===$i)Y(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(g.depthTexture.format===ar)Y(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function We(_){const g=i.get(_),C=_.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==_.depthTexture){const B=_.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),B){const k=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,B.removeEventListener("dispose",k)};B.addEventListener("dispose",k),g.__depthDisposeCallback=k}g.__boundDepthTexture=B}if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Re(g.__webglFramebuffer,_)}else if(C){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]===void 0)g.__webglDepthbuffer[B]=n.createRenderbuffer(),pe(g.__webglDepthbuffer[B],_,!1);else{const k=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=g.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),pe(g.__webglDepthbuffer,_,!1);else{const B=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,k)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(_,g,C){const B=i.get(_);g!==void 0&&Ae(B.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&We(_)}function lt(_){const g=_.texture,C=i.get(_),B=i.get(g);_.addEventListener("dispose",I);const k=_.textures,z=_.isWebGLCubeRenderTarget===!0,ce=k.length>1;if(ce||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=g.version,o.memory.textures++),z){C.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[oe]=[];for(let de=0;de<g.mipmaps.length;de++)C.__webglFramebuffer[oe][de]=n.createFramebuffer()}else C.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)C.__webglFramebuffer[oe]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ce)for(let oe=0,de=k.length;oe<de;oe++){const Le=i.get(k[oe]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(_.samples>0&&Y(_)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let oe=0;oe<k.length;oe++){const de=k[oe];C.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[oe]);const Le=s.convert(de.format,de.colorSpace),ae=s.convert(de.type),ge=b(de.internalFormat,Le,ae,de.colorSpace,_.isXRRenderTarget===!0),be=q(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ge,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,C.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(C.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)Ae(C.__webglFramebuffer[oe][de],_,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else Ae(C.__webglFramebuffer[oe],_,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let oe=0,de=k.length;oe<de;oe++){const Le=k[oe],ae=i.get(Le);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Pe(n.TEXTURE_2D,Le),Ae(C.__webglFramebuffer,_,Le,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Le)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(oe=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,B.__webglTexture),Pe(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)Ae(C.__webglFramebuffer[de],_,g,n.COLOR_ATTACHMENT0,oe,de);else Ae(C.__webglFramebuffer,_,g,n.COLOR_ATTACHMENT0,oe,0);m(g)&&d(oe),t.unbindTexture()}_.depthBuffer&&We(_)}function T(_){const g=_.textures;for(let C=0,B=g.length;C<B;C++){const k=g[C];if(m(k)){const z=w(_),ce=i.get(k).__webglTexture;t.bindTexture(z,ce),d(z),t.unbindTexture()}}}const R=[],x=[];function ie(_){if(_.samples>0){if(Y(_)===!1){const g=_.textures,C=_.width,B=_.height;let k=n.COLOR_BUFFER_BIT;const z=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(_),oe=g.length>1;if(oe)for(let de=0;de<g.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let de=0;de<g.length;de++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const Le=i.get(g[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,C,B,0,0,C,B,k,n.NEAREST),l===!0&&(R.length=0,x.length=0,R.push(n.COLOR_ATTACHMENT0+de),_.depthBuffer&&_.resolveDepthBuffer===!1&&(R.push(z),x.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<g.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const Le=i.get(g[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const g=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function q(_){return Math.min(r.maxSamples,_.samples)}function Y(_){const g=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function K(_){const g=o.render.frame;u.get(_)!==g&&(u.set(_,g),_.update())}function re(_,g){const C=_.colorSpace,B=_.format,k=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||C!==lr&&C!==Jn&&(qe.getTransfer(C)===et?(B!==ln||k!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),g}function X(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=se,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=we,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Y}function Hx(n,e){function t(i,r=Jn){let s;const o=qe.getTransfer(r);if(i===Fn)return n.UNSIGNED_BYTE;if(i===ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ef)return n.BYTE;if(i===tf)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===al)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===Or)return n.HALF_FLOAT;if(i===rf)return n.ALPHA;if(i===sf)return n.RGB;if(i===ln)return n.RGBA;if(i===of)return n.LUMINANCE;if(i===af)return n.LUMINANCE_ALPHA;if(i===$i)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===lf)return n.RED;if(i===ul)return n.RED_INTEGER;if(i===cf)return n.RG;if(i===fl)return n.RG_INTEGER;if(i===dl)return n.RGBA_INTEGER;if(i===As||i===Ms||i===ys||i===Ts)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===As)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===As)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ha||i===pa||i===ma||i===ga)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_a||i===va||i===xa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_a||i===va)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xa)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ea||i===Sa||i===Aa||i===Ma||i===ya||i===Ta||i===ba||i===Ra||i===wa||i===Ca||i===Ia||i===Pa||i===La||i===Da)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ea)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sa)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Aa)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ma)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ya)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ta)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ba)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ra)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wa)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ca)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ia)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bs||i===Ua||i===Na)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bs)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uf||i===Fa||i===Oa||i===Ba)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ni({vertexShader:zx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new Zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends ur{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const S=new kx,m=t.getContextAttributes();let d=null,w=null;const b=[],M=[],U=new nt;let L=null;const I=new Qt;I.viewport=new dt;const O=new Qt;O.viewport=new dt;const y=[I,O],A=new ug;let P=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=b[ee];return ue===void 0&&(ue=new Uo,b[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=b[ee];return ue===void 0&&(ue=new Uo,b[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=b[ee];return ue===void 0&&(ue=new Uo,b[ee]=ue),ue.getHandSpace()};function j(ee){const ue=M.indexOf(ee.inputSource);if(ue===-1)return;const Ae=b[ue];Ae!==void 0&&(Ae.update(ee.inputSource,ee.frame,c||o),Ae.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ne(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",se);for(let ee=0;ee<b.length;ee++){const ue=M[ee];ue!==null&&(M[ee]=null,b[ee].disconnect(ue))}P=null,$=null,S.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,w=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,pe=null,Re=null;m.depth&&(Re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=m.stencil?ar:$i,pe=m.stencil?or:bi);const We={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Ri(h.textureWidth,h.textureHeight,{format:ln,type:Fn,depthTexture:new Tf(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ri(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function se(ee){for(let ue=0;ue<ee.removed.length;ue++){const Ae=ee.removed[ue],pe=M.indexOf(Ae);pe>=0&&(M[pe]=null,b[pe].disconnect(Ae))}for(let ue=0;ue<ee.added.length;ue++){const Ae=ee.added[ue];let pe=M.indexOf(Ae);if(pe===-1){for(let We=0;We<b.length;We++)if(We>=M.length){M.push(Ae),pe=We;break}else if(M[We]===null){M[We]=Ae,pe=We;break}if(pe===-1)break}const Re=b[pe];Re&&Re.connect(Ae)}}const J=new W,Q=new W;function H(ee,ue,Ae){J.setFromMatrixPosition(ue.matrixWorld),Q.setFromMatrixPosition(Ae.matrixWorld);const pe=J.distanceTo(Q),Re=ue.projectionMatrix.elements,We=Ae.projectionMatrix.elements,we=Re[14]/(Re[10]-1),lt=Re[14]/(Re[10]+1),T=(Re[9]+1)/Re[5],R=(Re[9]-1)/Re[5],x=(Re[8]-1)/Re[0],ie=(We[8]+1)/We[0],q=we*x,Y=we*ie,K=pe/(-x+ie),re=K*-x;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ(K),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Re[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const X=we+K,_=lt+K,g=q-re,C=Y+(pe-re),B=T*lt/_*X,k=R*lt/_*X;ee.projectionMatrix.makePerspective(g,C,B,k,X,_),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function fe(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ue=ee.near,Ae=ee.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(Ae=S.depthFar)),A.near=O.near=I.near=ue,A.far=O.far=I.far=Ae,(P!==A.near||$!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,$=A.far),I.layers.mask=ee.layers.mask|2,O.layers.mask=ee.layers.mask|4,A.layers.mask=I.layers.mask|O.layers.mask;const pe=ee.parent,Re=A.cameras;fe(A,pe);for(let We=0;We<Re.length;We++)fe(Re[We],pe);Re.length===2?H(A,I,O):A.projectionMatrix.copy(I.projectionMatrix),Ee(ee,A,pe)};function Ee(ee,ue,Ae){Ae===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(Ae.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ha*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(A)};let Te=null;function Pe(ee,ue){if(u=ue.getViewerPose(c||o),v=ue,u!==null){const Ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let pe=!1;Ae.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let we=0;we<Ae.length;we++){const lt=Ae[we];let T=null;if(p!==null)T=p.getViewport(lt);else{const x=f.getViewSubImage(h,lt);T=x.viewport,we===0&&(e.setRenderTargetTextures(w,x.colorTexture,h.ignoreDepthValues?void 0:x.depthStencilTexture),e.setRenderTarget(w))}let R=y[we];R===void 0&&(R=new Qt,R.layers.enable(we),R.viewport=new dt,y[we]=R),R.matrix.fromArray(lt.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(lt.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(T.x,T.y,T.width,T.height),we===0&&(A.matrix.copy(R.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),pe===!0&&A.cameras.push(R)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const we=f.getDepthInformation(Ae[0]);we&&we.isValid&&we.texture&&S.init(e,we,r.renderState)}}for(let Ae=0;Ae<b.length;Ae++){const pe=M[Ae],Re=b[Ae];pe!==null&&Re!==void 0&&Re.update(pe,ue,c||o)}Te&&Te(ee,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),v=null}const Ye=new bf;Ye.setAnimationLoop(Pe),this.setAnimationLoop=function(ee){Te=ee},this.dispose=function(){}}}const mi=new On,Wx=new ht;function Xx(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ef(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,w,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Bt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Bt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d),b=w.envMap,M=w.envMapRotation;b&&(m.envMap.value=b,mi.copy(M),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(mi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jx(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const M=b.program;i.uniformBlockBinding(w,M)}function c(w,b){let M=r[w.id];M===void 0&&(v(w),M=u(w),r[w.id]=M,w.addEventListener("dispose",m));const U=b.program;i.updateUBOMapping(w,U);const L=e.render.frame;s[w.id]!==L&&(h(w),s[w.id]=L)}function u(w){const b=f();w.__bindingPointIndex=b;const M=n.createBuffer(),U=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,U,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const b=r[w.id],M=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,I=M.length;L<I;L++){const O=Array.isArray(M[L])?M[L]:[M[L]];for(let y=0,A=O.length;y<A;y++){const P=O[y];if(p(P,L,y,U)===!0){const $=P.__offset,j=Array.isArray(P.value)?P.value:[P.value];let ne=0;for(let se=0;se<j.length;se++){const J=j[se],Q=S(J);typeof J=="number"||typeof J=="boolean"?(P.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,$+ne,P.__data)):J.isMatrix3?(P.__data[0]=J.elements[0],P.__data[1]=J.elements[1],P.__data[2]=J.elements[2],P.__data[3]=0,P.__data[4]=J.elements[3],P.__data[5]=J.elements[4],P.__data[6]=J.elements[5],P.__data[7]=0,P.__data[8]=J.elements[6],P.__data[9]=J.elements[7],P.__data[10]=J.elements[8],P.__data[11]=0):(J.toArray(P.__data,ne),ne+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,M,U){const L=w.value,I=b+"_"+M;if(U[I]===void 0)return typeof L=="number"||typeof L=="boolean"?U[I]=L:U[I]=L.clone(),!0;{const O=U[I];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return U[I]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function v(w){const b=w.uniforms;let M=0;const U=16;for(let I=0,O=b.length;I<O;I++){const y=Array.isArray(b[I])?b[I]:[b[I]];for(let A=0,P=y.length;A<P;A++){const $=y[A],j=Array.isArray($.value)?$.value:[$.value];for(let ne=0,se=j.length;ne<se;ne++){const J=j[ne],Q=S(J),H=M%U,fe=H%Q.boundary,Ee=H+fe;M+=fe,Ee!==0&&U-Ee<Q.storage&&(M+=U-Ee),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=Q.storage}}}const L=M%U;return L>0&&(M+=U-L),w.__size=M,w.__cache={},this}function S(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class qx{constructor(e={}){const{canvas:t=Cm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),S=new Int32Array(4);let m=null,d=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=$n,this.toneMappingExposure=1;const M=this;let U=!1,L=0,I=0,O=null,y=-1,A=null;const P=new dt,$=new dt;let j=null;const ne=new $e(0);let se=0,J=t.width,Q=t.height,H=1,fe=null,Ee=null;const Te=new dt(0,0,J,Q),Pe=new dt(0,0,J,Q);let Ye=!1;const ee=new Mf;let ue=!1,Ae=!1;this.transmissionResolutionScale=1;const pe=new ht,Re=new ht,We=new W,we=new dt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let T=!1;function R(){return O===null?H:1}let x=i;function ie(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",xe,!1),x===null){const N="webgl2";if(x=ie(N,E),x===null)throw ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let q,Y,K,re,X,_,g,C,B,k,z,ce,oe,de,Le,ae,ge,be,De,he,Ue,Oe,it,D;function _e(){q=new i0(x),q.init(),Oe=new Hx(x,q),Y=new Zv(x,q,e,Oe),K=new Ox(x,q),Y.reverseDepthBuffer&&h&&K.buffers.depth.setReversed(!0),re=new o0(x),X=new yx,_=new Bx(x,q,K,X,Y,Oe,re),g=new Qv(M),C=new n0(M),B=new dg(x),it=new Yv(x,B),k=new r0(x,B,re,it),z=new l0(x,k,B,re),De=new a0(x,Y,_),ae=new Jv(X),ce=new Mx(M,g,C,q,Y,it,ae),oe=new Xx(M,X),de=new bx,Le=new Lx(q),be=new qv(M,g,C,K,z,p,l),ge=new Nx(M,z,Y),D=new jx(x,re,Y,K),he=new Kv(x,q,re),Ue=new s0(x,q,re),re.programs=ce.programs,M.capabilities=Y,M.extensions=q,M.properties=X,M.renderLists=de,M.shadowMap=ge,M.state=K,M.info=re}_e();const Z=new Gx(M,x);this.xr=Z,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const E=q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(J,Q,!1))},this.getSize=function(E){return E.set(J,Q)},this.setSize=function(E,N,V=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,Q=N,t.width=Math.floor(E*H),t.height=Math.floor(N*H),V===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(J*H,Q*H).floor()},this.setDrawingBufferSize=function(E,N,V){J=E,Q=N,H=V,t.width=Math.floor(E*V),t.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Te)},this.setViewport=function(E,N,V,G){E.isVector4?Te.set(E.x,E.y,E.z,E.w):Te.set(E,N,V,G),K.viewport(P.copy(Te).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Pe)},this.setScissor=function(E,N,V,G){E.isVector4?Pe.set(E.x,E.y,E.z,E.w):Pe.set(E,N,V,G),K.scissor($.copy(Pe).multiplyScalar(H).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(E){K.setScissorTest(Ye=E)},this.setOpaqueSort=function(E){fe=E},this.setTransparentSort=function(E){Ee=E},this.getClearColor=function(E){return E.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,V=!0){let G=0;if(E){let F=!1;if(O!==null){const le=O.texture.format;F=le===dl||le===fl||le===ul}if(F){const le=O.texture.type,ve=le===Fn||le===bi||le===Ur||le===or||le===ll||le===cl,Me=be.getClearColor(),ye=be.getClearAlpha(),Ne=Me.r,Fe=Me.g,Ce=Me.b;ve?(v[0]=Ne,v[1]=Fe,v[2]=Ce,v[3]=ye,x.clearBufferuiv(x.COLOR,0,v)):(S[0]=Ne,S[1]=Fe,S[2]=Ce,S[3]=ye,x.clearBufferiv(x.COLOR,0,S))}else G|=x.COLOR_BUFFER_BIT}N&&(G|=x.DEPTH_BUFFER_BIT),V&&(G|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),be.dispose(),de.dispose(),Le.dispose(),X.dispose(),g.dispose(),C.dispose(),z.dispose(),it.dispose(),D.dispose(),ce.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ml),Z.removeEventListener("sessionend",gl),oi.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const E=re.autoReset,N=ge.enabled,V=ge.autoUpdate,G=ge.needsUpdate,F=ge.type;_e(),re.autoReset=E,ge.enabled=N,ge.autoUpdate=V,ge.needsUpdate=G,ge.type=F}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function He(E){const N=E.target;N.removeEventListener("dispose",He),ct(N)}function ct(E){Mt(E),X.remove(E)}function Mt(E){const N=X.get(E).programs;N!==void 0&&(N.forEach(function(V){ce.releaseProgram(V)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,G,F,le){N===null&&(N=lt);const ve=F.isMesh&&F.matrixWorld.determinant()<0,Me=Pf(E,N,V,G,F);K.setMaterial(G,ve);let ye=V.index,Ne=1;if(G.wireframe===!0){if(ye=k.getWireframeAttribute(V),ye===void 0)return;Ne=2}const Fe=V.drawRange,Ce=V.attributes.position;let Xe=Fe.start*Ne,Ke=(Fe.start+Fe.count)*Ne;le!==null&&(Xe=Math.max(Xe,le.start*Ne),Ke=Math.min(Ke,(le.start+le.count)*Ne)),ye!==null?(Xe=Math.max(Xe,0),Ke=Math.min(Ke,ye.count)):Ce!=null&&(Xe=Math.max(Xe,0),Ke=Math.min(Ke,Ce.count));const pt=Ke-Xe;if(pt<0||pt===1/0)return;it.setup(F,G,Me,V,ye);let ut,je=he;if(ye!==null&&(ut=B.get(ye),je=Ue,je.setIndex(ut)),F.isMesh)G.wireframe===!0?(K.setLineWidth(G.wireframeLinewidth*R()),je.setMode(x.LINES)):je.setMode(x.TRIANGLES);else if(F.isLine){let Ie=G.linewidth;Ie===void 0&&(Ie=1),K.setLineWidth(Ie*R()),F.isLineSegments?je.setMode(x.LINES):F.isLineLoop?je.setMode(x.LINE_LOOP):je.setMode(x.LINE_STRIP)}else F.isPoints?je.setMode(x.POINTS):F.isSprite&&je.setMode(x.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)_i("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ie=F._multiDrawStarts,Et=F._multiDrawCounts,Ze=F._multiDrawCount,tn=ye?B.get(ye).bytesPerElement:1,Ci=X.get(G).currentProgram.getUniforms();for(let Vt=0;Vt<Ze;Vt++)Ci.setValue(x,"_gl_DrawID",Vt),je.render(Ie[Vt]/tn,Et[Vt])}else if(F.isInstancedMesh)je.renderInstances(Xe,pt,F.count);else if(V.isInstancedBufferGeometry){const Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Et=Math.min(V.instanceCount,Ie);je.renderInstances(Xe,pt,Et)}else je.render(Xe,pt)};function Qe(E,N,V){E.transparent===!0&&E.side===Pn&&E.forceSinglePass===!1?(E.side=Bt,E.needsUpdate=!0,Wr(E,N,V),E.side=ti,E.needsUpdate=!0,Wr(E,N,V),E.side=Pn):Wr(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),d=Le.get(V),d.init(N),b.push(d),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let ve=0;ve<le.length;ve++){const Me=le[ve];Qe(Me,V,F),G.add(Me)}else Qe(le,V,F),G.add(le)}),d=b.pop(),G},this.compileAsync=function(E,N,V=null){const G=this.compile(E,N,V);return new Promise(F=>{function le(){if(G.forEach(function(ve){X.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){F(E);return}setTimeout(le,10)}q.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let en=null;function Sn(E){en&&en(E)}function ml(){oi.stop()}function gl(){oi.start()}const oi=new bf;oi.setAnimationLoop(Sn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(E){en=E,Z.setAnimationLoop(E),E===null?oi.stop():oi.start()},Z.addEventListener("sessionstart",ml),Z.addEventListener("sessionend",gl),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,N,O),d=Le.get(E,b.length),d.init(N),b.push(d),Re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ee.setFromProjectionMatrix(Re),Ae=this.localClippingEnabled,ue=ae.init(this.clippingPlanes,Ae),m=de.get(E,w.length),m.init(),w.push(m),Z.enabled===!0&&Z.isPresenting===!0){const le=M.xr.getDepthSensingMesh();le!==null&&Qs(le,N,-1/0,M.sortObjects)}Qs(E,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(fe,Ee),T=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,T&&be.addToRenderList(m,E),this.info.render.frame++,ue===!0&&ae.beginShadows();const V=d.state.shadowsArray;ge.render(V,E,N),ue===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){const le=N.cameras;if(F.length>0)for(let ve=0,Me=le.length;ve<Me;ve++){const ye=le[ve];vl(G,F,E,ye)}T&&be.render(E);for(let ve=0,Me=le.length;ve<Me;ve++){const ye=le[ve];_l(m,E,ye,ye.viewport)}}else F.length>0&&vl(G,F,E,N),T&&be.render(E),_l(m,E,N);O!==null&&I===0&&(_.updateMultisampleRenderTarget(O),_.updateRenderTargetMipmap(O)),E.isScene===!0&&E.onAfterRender(M,E,N),it.resetDefaultState(),y=-1,A=null,b.pop(),b.length>0?(d=b[b.length-1],ue===!0&&ae.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Qs(E,N,V,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){G&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);const ve=z.update(E),Me=E.material;Me.visible&&m.push(E,ve,Me,V,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ee.intersectsObject(E))){const ve=z.update(E),Me=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),we.copy(ve.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(Me)){const ye=ve.groups;for(let Ne=0,Fe=ye.length;Ne<Fe;Ne++){const Ce=ye[Ne],Xe=Me[Ce.materialIndex];Xe&&Xe.visible&&m.push(E,ve,Xe,V,we.z,Ce)}}else Me.visible&&m.push(E,ve,Me,V,we.z,null)}}const le=E.children;for(let ve=0,Me=le.length;ve<Me;ve++)Qs(le[ve],N,V,G)}function _l(E,N,V,G){const F=E.opaque,le=E.transmissive,ve=E.transparent;d.setupLightsView(V),ue===!0&&ae.setGlobalState(M.clippingPlanes,V),G&&K.viewport(P.copy(G)),F.length>0&&Gr(F,N,V),le.length>0&&Gr(le,N,V),ve.length>0&&Gr(ve,N,V),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function vl(E,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Ri(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Or:Fn,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const le=d.state.transmissionRenderTarget[G.id],ve=G.viewport||P;le.setSize(ve.z*M.transmissionResolutionScale,ve.w*M.transmissionResolutionScale);const Me=M.getRenderTarget();M.setRenderTarget(le),M.getClearColor(ne),se=M.getClearAlpha(),se<1&&M.setClearColor(16777215,.5),M.clear(),T&&be.render(V);const ye=M.toneMapping;M.toneMapping=$n;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),ue===!0&&ae.setGlobalState(M.clippingPlanes,G),Gr(E,V,G),_.updateMultisampleRenderTarget(le),_.updateRenderTargetMipmap(le),q.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ce=0,Xe=N.length;Ce<Xe;Ce++){const Ke=N[Ce],pt=Ke.object,ut=Ke.geometry,je=Ke.material,Ie=Ke.group;if(je.side===Pn&&pt.layers.test(G.layers)){const Et=je.side;je.side=Bt,je.needsUpdate=!0,xl(pt,V,G,ut,je,Ie),je.side=Et,je.needsUpdate=!0,Fe=!0}}Fe===!0&&(_.updateMultisampleRenderTarget(le),_.updateRenderTargetMipmap(le))}M.setRenderTarget(Me),M.setClearColor(ne,se),Ne!==void 0&&(G.viewport=Ne),M.toneMapping=ye}function Gr(E,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,le=E.length;F<le;F++){const ve=E[F],Me=ve.object,ye=ve.geometry,Ne=G===null?ve.material:G,Fe=ve.group;Me.layers.test(V.layers)&&xl(Me,N,V,ye,Ne,Fe)}}function xl(E,N,V,G,F,le){E.onBeforeRender(M,N,V,G,F,le),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(M,N,V,G,E,le),F.transparent===!0&&F.side===Pn&&F.forceSinglePass===!1?(F.side=Bt,F.needsUpdate=!0,M.renderBufferDirect(V,N,G,F,E,le),F.side=ti,F.needsUpdate=!0,M.renderBufferDirect(V,N,G,F,E,le),F.side=Pn):M.renderBufferDirect(V,N,G,F,E,le),E.onAfterRender(M,N,V,G,F,le)}function Wr(E,N,V){N.isScene!==!0&&(N=lt);const G=X.get(E),F=d.state.lights,le=d.state.shadowsArray,ve=F.state.version,Me=ce.getParameters(E,F.state,le,N,V),ye=ce.getProgramCacheKey(Me);let Ne=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?C:g).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",He),Ne=new Map,G.programs=Ne);let Fe=Ne.get(ye);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===ve)return Sl(E,Me),Fe}else Me.uniforms=ce.getUniforms(E),E.onBeforeCompile(Me,M),Fe=ce.acquireProgram(Me,ye),Ne.set(ye,Fe),G.uniforms=Me.uniforms;const Ce=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=ae.uniform),Sl(E,Me),G.needsLights=Df(E),G.lightsStateVersion=ve,G.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Fe,G.uniformsList=null,Fe}function El(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Rs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Sl(E,N){const V=X.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Pf(E,N,V,G,F){N.isScene!==!0&&(N=lt),_.resetTextureUnits();const le=N.fog,ve=G.isMeshStandardMaterial?N.environment:null,Me=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:lr,ye=(G.isMeshStandardMaterial?C:g).get(G.envMap||ve),Ne=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!V.morphAttributes.position,Xe=!!V.morphAttributes.normal,Ke=!!V.morphAttributes.color;let pt=$n;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(pt=M.toneMapping);const ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,je=ut!==void 0?ut.length:0,Ie=X.get(G),Et=d.state.lights;if(ue===!0&&(Ae===!0||E!==A)){const Ct=E===A&&G.id===y;ae.setState(G,E,Ct)}let Ze=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Et.state.version||Ie.outputColorSpace!==Me||F.isBatchedMesh&&Ie.batching===!1||!F.isBatchedMesh&&Ie.batching===!0||F.isBatchedMesh&&Ie.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ie.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ie.instancing===!1||!F.isInstancedMesh&&Ie.instancing===!0||F.isSkinnedMesh&&Ie.skinning===!1||!F.isSkinnedMesh&&Ie.skinning===!0||F.isInstancedMesh&&Ie.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ie.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ie.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ie.instancingMorph===!1&&F.morphTexture!==null||Ie.envMap!==ye||G.fog===!0&&Ie.fog!==le||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==Fe||Ie.morphTargets!==Ce||Ie.morphNormals!==Xe||Ie.morphColors!==Ke||Ie.toneMapping!==pt||Ie.morphTargetsCount!==je)&&(Ze=!0):(Ze=!0,Ie.__version=G.version);let tn=Ie.currentProgram;Ze===!0&&(tn=Wr(G,N,F));let Ci=!1,Vt=!1,dr=!1;const ot=tn.getUniforms(),Yt=Ie.uniforms;if(K.useProgram(tn.program)&&(Ci=!0,Vt=!0,dr=!0),G.id!==y&&(y=G.id,Vt=!0),Ci||A!==E){K.buffers.depth.getReversed()?(pe.copy(E.projectionMatrix),Pm(pe),Lm(pe),ot.setValue(x,"projectionMatrix",pe)):ot.setValue(x,"projectionMatrix",E.projectionMatrix),ot.setValue(x,"viewMatrix",E.matrixWorldInverse);const Nt=ot.map.cameraPosition;Nt!==void 0&&Nt.setValue(x,We.setFromMatrixPosition(E.matrixWorld)),Y.logarithmicDepthBuffer&&ot.setValue(x,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ot.setValue(x,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,Vt=!0,dr=!0)}if(F.isSkinnedMesh){ot.setOptional(x,F,"bindMatrix"),ot.setOptional(x,F,"bindMatrixInverse");const Ct=F.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ot.setValue(x,"boneTexture",Ct.boneTexture,_))}F.isBatchedMesh&&(ot.setOptional(x,F,"batchingTexture"),ot.setValue(x,"batchingTexture",F._matricesTexture,_),ot.setOptional(x,F,"batchingIdTexture"),ot.setValue(x,"batchingIdTexture",F._indirectTexture,_),ot.setOptional(x,F,"batchingColorTexture"),F._colorsTexture!==null&&ot.setValue(x,"batchingColorTexture",F._colorsTexture,_));const Kt=V.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&De.update(F,V,tn),(Vt||Ie.receiveShadow!==F.receiveShadow)&&(Ie.receiveShadow=F.receiveShadow,ot.setValue(x,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Yt.envMap.value=ye,Yt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Yt.envMapIntensity.value=N.environmentIntensity),Vt&&(ot.setValue(x,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&Lf(Yt,dr),le&&G.fog===!0&&oe.refreshFogUniforms(Yt,le),oe.refreshMaterialUniforms(Yt,G,H,Q,d.state.transmissionRenderTarget[E.id]),Rs.upload(x,El(Ie),Yt,_)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Rs.upload(x,El(Ie),Yt,_),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ot.setValue(x,"center",F.center),ot.setValue(x,"modelViewMatrix",F.modelViewMatrix),ot.setValue(x,"normalMatrix",F.normalMatrix),ot.setValue(x,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ct=G.uniformsGroups;for(let Nt=0,$s=Ct.length;Nt<$s;Nt++){const ai=Ct[Nt];D.update(ai,tn),D.bind(ai,tn)}}return tn}function Lf(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Df(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,N,V){X.get(E.texture).__webglTexture=N,X.get(E.depthTexture).__webglTexture=V;const G=X.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const V=X.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const Uf=x.createFramebuffer();this.setRenderTarget=function(E,N=0,V=0){O=E,L=N,I=V;let G=!0,F=null,le=!1,ve=!1;if(E){const ye=X.get(E);if(ye.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(x.FRAMEBUFFER,null),G=!1;else if(ye.__webglFramebuffer===void 0)_.setupRenderTarget(E);else if(ye.__hasExternalTextures)_.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ce=E.depthTexture;if(ye.__boundDepthTexture!==Ce){if(Ce!==null&&X.has(Ce)&&(E.width!==Ce.image.width||E.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ve=!0);const Fe=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?F=Fe[N][V]:F=Fe[N],le=!0):E.samples>0&&_.useMultisampledRTT(E)===!1?F=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?F=Fe[V]:F=Fe,P.copy(E.viewport),$.copy(E.scissor),j=E.scissorTest}else P.copy(Te).multiplyScalar(H).floor(),$.copy(Pe).multiplyScalar(H).floor(),j=Ye;if(V!==0&&(F=Uf),K.bindFramebuffer(x.FRAMEBUFFER,F)&&G&&K.drawBuffers(E,F),K.viewport(P),K.scissor($),K.setScissorTest(j),le){const ye=X.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,V)}else if(ve){const ye=X.get(E.texture),Ne=N;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,ye.__webglTexture,V,Ne)}else if(E!==null&&V!==0){const ye=X.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,ye.__webglTexture,V)}y=-1},this.readRenderTargetPixels=function(E,N,V,G,F,le,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){K.bindFramebuffer(x.FRAMEBUFFER,Me);try{const ye=E.texture,Ne=ye.format,Fe=ye.type;if(!Y.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&V>=0&&V<=E.height-F&&x.readPixels(N,V,G,F,Oe.convert(Ne),Oe.convert(Fe),le)}finally{const ye=O!==null?X.get(O).__webglFramebuffer:null;K.bindFramebuffer(x.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,G,F,le,ve){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){const ye=E.texture,Ne=ye.format,Fe=ye.type;if(!Y.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-G&&V>=0&&V<=E.height-F){K.bindFramebuffer(x.FRAMEBUFFER,Me);const Ce=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ce),x.bufferData(x.PIXEL_PACK_BUFFER,le.byteLength,x.STREAM_READ),x.readPixels(N,V,G,F,Oe.convert(Ne),Oe.convert(Fe),0);const Xe=O!==null?X.get(O).__webglFramebuffer:null;K.bindFramebuffer(x.FRAMEBUFFER,Xe);const Ke=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Im(x,Ke,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ce),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,le),x.deleteBuffer(Ce),x.deleteSync(Ke),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,V=0){E.isTexture!==!0&&(_i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-V),F=Math.floor(E.image.width*G),le=Math.floor(E.image.height*G),ve=N!==null?N.x:0,Me=N!==null?N.y:0;_.setTexture2D(E,0),x.copyTexSubImage2D(x.TEXTURE_2D,V,0,0,ve,Me,F,le),K.unbindTexture()};const Nf=x.createFramebuffer(),Ff=x.createFramebuffer();this.copyTextureToTexture=function(E,N,V=null,G=null,F=0,le=null){E.isTexture!==!0&&(_i("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],N=arguments[2],le=arguments[3]||0,V=null),le===null&&(F!==0?(_i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=F,F=0):le=0);let ve,Me,ye,Ne,Fe,Ce,Xe,Ke,pt;const ut=E.isCompressedTexture?E.mipmaps[le]:E.image;if(V!==null)ve=V.max.x-V.min.x,Me=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Ne=V.min.x,Fe=V.min.y,Ce=V.isBox3?V.min.z:0;else{const Kt=Math.pow(2,-F);ve=Math.floor(ut.width*Kt),Me=Math.floor(ut.height*Kt),E.isDataArrayTexture?ye=ut.depth:E.isData3DTexture?ye=Math.floor(ut.depth*Kt):ye=1,Ne=0,Fe=0,Ce=0}G!==null?(Xe=G.x,Ke=G.y,pt=G.z):(Xe=0,Ke=0,pt=0);const je=Oe.convert(N.format),Ie=Oe.convert(N.type);let Et;N.isData3DTexture?(_.setTexture3D(N,0),Et=x.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(_.setTexture2DArray(N,0),Et=x.TEXTURE_2D_ARRAY):(_.setTexture2D(N,0),Et=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,N.unpackAlignment);const Ze=x.getParameter(x.UNPACK_ROW_LENGTH),tn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Ci=x.getParameter(x.UNPACK_SKIP_PIXELS),Vt=x.getParameter(x.UNPACK_SKIP_ROWS),dr=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,ut.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ut.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ne),x.pixelStorei(x.UNPACK_SKIP_ROWS,Fe),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ce);const ot=E.isDataArrayTexture||E.isData3DTexture,Yt=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Kt=X.get(E),Ct=X.get(N),Nt=X.get(Kt.__renderTarget),$s=X.get(Ct.__renderTarget);K.bindFramebuffer(x.READ_FRAMEBUFFER,Nt.__webglFramebuffer),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let ai=0;ai<ye;ai++)ot&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,X.get(E).__webglTexture,F,Ce+ai),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,X.get(N).__webglTexture,le,pt+ai)),x.blitFramebuffer(Ne,Fe,ve,Me,Xe,Ke,ve,Me,x.DEPTH_BUFFER_BIT,x.NEAREST);K.bindFramebuffer(x.READ_FRAMEBUFFER,null),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||X.has(E)){const Kt=X.get(E),Ct=X.get(N);K.bindFramebuffer(x.READ_FRAMEBUFFER,Nf),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,Ff);for(let Nt=0;Nt<ye;Nt++)ot?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Kt.__webglTexture,F,Ce+Nt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Kt.__webglTexture,F),Yt?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ct.__webglTexture,le,pt+Nt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ct.__webglTexture,le),F!==0?x.blitFramebuffer(Ne,Fe,ve,Me,Xe,Ke,ve,Me,x.COLOR_BUFFER_BIT,x.NEAREST):Yt?x.copyTexSubImage3D(Et,le,Xe,Ke,pt+Nt,Ne,Fe,ve,Me):x.copyTexSubImage2D(Et,le,Xe,Ke,Ne,Fe,ve,Me);K.bindFramebuffer(x.READ_FRAMEBUFFER,null),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else Yt?E.isDataTexture||E.isData3DTexture?x.texSubImage3D(Et,le,Xe,Ke,pt,ve,Me,ye,je,Ie,ut.data):N.isCompressedArrayTexture?x.compressedTexSubImage3D(Et,le,Xe,Ke,pt,ve,Me,ye,je,ut.data):x.texSubImage3D(Et,le,Xe,Ke,pt,ve,Me,ye,je,Ie,ut):E.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,le,Xe,Ke,ve,Me,je,Ie,ut.data):E.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,le,Xe,Ke,ut.width,ut.height,je,ut.data):x.texSubImage2D(x.TEXTURE_2D,le,Xe,Ke,ve,Me,je,Ie,ut);x.pixelStorei(x.UNPACK_ROW_LENGTH,Ze),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,tn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ci),x.pixelStorei(x.UNPACK_SKIP_ROWS,Vt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,dr),le===0&&N.generateMipmaps&&x.generateMipmap(Et),K.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V=null,G=null,F=0){return E.isTexture!==!0&&(_i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0),_i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,V,G,F)},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&_.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?_.setTextureCube(E,0):E.isData3DTexture?_.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?_.setTexture2DArray(E,0):_.setTexture2D(E,0),K.unbindTexture()},this.resetState=function(){L=0,I=0,O=null,K.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Yx={name:"StarfieldEffect",mounted(){this.initThreeJs(),this.animate()},beforeUnmount(){window.removeEventListener("resize",this.onWindowResize),this.renderer&&this.renderer.domElement.remove()},methods:{initThreeJs(){this.scene=new ig,this.camera=new Qt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=1,this.renderer=new qx({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.$refs.canvasContainer.appendChild(this.renderer.domElement);const n=2e3,e=new zn,t=[];for(let r=0;r<n;r++)t.push(Math.random()*2e3-1e3,Math.random()*2e3-1e3,Math.random()*2e3-1e3);e.setAttribute("position",new ei(t,3));const i=new yf({color:16777215,size:1,sizeAttenuation:!0,alphaTest:.5,transparent:!0});this.stars=new og(e,i),this.scene.add(this.stars),window.addEventListener("resize",this.onWindowResize)},animate(){requestAnimationFrame(this.animate);const n=this.stars.geometry.attributes.position.array;for(let e=0;e<n.length;e+=3)n[e+2]+=1,n[e+2]>1e3&&(n[e+2]=-1e3,n[e]=Math.random()*2e3-1e3,n[e+1]=Math.random()*2e3-1e3);this.stars.geometry.attributes.position.needsUpdate=!0,this.renderer.render(this.scene,this.camera)},onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}},Kx={ref:"canvasContainer",class:"canvas-container"};function Zx(n,e,t,i,r,s){return St(),At("div",Kx,null,512)}const Jx=Hn(Yx,[["render",Zx],["__scopeId","data-v-da19f633"]]),Qx={name:"App",components:{NavBar:Tp,PortfolioHeader:Cp,AboutSection:up,ExperienceSection:Sp,ProjectsSection:Up,SkillsSection:Hp,ContactSection:pp,StarsBackground:Jx},data(){return{}}},$x={class:"container"};function eE(n,e,t,i,r,s){const o=Vn("NavBar"),a=Vn("PortfolioHeader"),l=Vn("AboutSection"),c=Vn("ExperienceSection"),u=Vn("ProjectsSection"),f=Vn("SkillsSection"),h=Vn("ContactSection"),p=Vn("StarsBackground");return St(),At("div",$x,[bt(o),bt(a),bt(l),bt(c),bt(u),bt(f),bt(h),bt(p,{class:"star-background"})])}const tE=Hn(Qx,[["render",eE]]);rp(tE).mount("#app");
