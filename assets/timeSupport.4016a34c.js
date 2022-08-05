import{eC as N,eD as E,au as d,c3 as I,aP as m,eE as $,eF as T,al as w,aD as v,f as y,bo as G,as as C}from"./index.768d9708.js";import{f as _}from"./projectionSupport.462bc7e0.js";import{J as f}from"./utils.a70993b1.js";function q(e){return e==="mesh"?N:E(e)}function P(e,t){return e?t?4:3:t?3:2}function M(e,t,i,r){return b(e,t,i,r.coords[0],r.coords[1])}function F(e,t,i,r,s,n){const o=P(s,n),{coords:a,lengths:u}=r;if(!u)return!1;for(let l=0,c=0;l<u.length;l++,c+=o)if(!b(e,t,i,a[c],a[c+1]))return!1;return!0}function b(e,t,i,r,s){if(!e)return!1;const n=P(t,i),{coords:o,lengths:a}=e;let u=!1,l=0;for(const c of a)u=D(u,o,n,l,c,r,s),l+=c*n;return u}function D(e,t,i,r,s,n,o){let a=e,u=r;for(let l=r,c=r+s*i;l<c;l+=i){u=l+i,u===c&&(u=r);const h=t[l],p=t[l+1],A=t[u],R=t[u+1];(p<o&&R>=o||R<o&&p>=o)&&h+(o-p)/(R-p)*(A-h)<n&&(a=!a)}return a}const S="feature-store:unsupported-query",x={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},g={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function j(e){return g.spatialRelationship[e]===!0}function O(e){return g.queryGeometry[C(e)]===!0}function U(e){return g.layerGeometry[e]===!0}function V(){return w(()=>import("./geometryEngineJSON.588858d2.js"),["assets/geometryEngineJSON.588858d2.js","assets/geometryEngineBase.cf4f989f.js","assets/geometryEngineJSON.a34a7363.js","assets/json.d1a0fa35.js"])}function z(e,t,i,r,s){if(d(t)&&i==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const n=I(new v,t,!1,!1);return Promise.resolve(o=>M(n,!1,!1,o))}if(d(t)&&i==="esriGeometryMultipoint"){const n=I(new v,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(o=>F(n,!1,!1,o,r,s))}if(m(t)&&i==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(n=>$(t,f(i,r,s,n)));if(m(t)&&i==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(n=>T(t,f(i,r,s,n)));if(m(t)&&e==="esriSpatialRelIntersects"){const n=q(i);return Promise.resolve(o=>n(t,f(i,r,s,o)))}return V().then(n=>{const o=n[x[e]].bind(null,t.spatialReference,t);return a=>o(f(i,r,s,a))})}async function B(e,t,i){const{spatialRel:r,geometry:s}=e;if(s){if(!j(r))throw new y(S,"Unsupported query spatial relationship",{query:e});if(G(s.spatialReference)&&G(i)){if(!O(s))throw new y(S,"Unsupported query geometry type",{query:e});if(!U(t))throw new y(S,"Unsupported layer geometry type",{query:e});if(e.outSR)return _(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function H(e){if(m(e))return!0;if(d(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}function K(e,t){if(!e)return null;const i=t.featureAdapter,{startTimeField:r,endTimeField:s}=e;let n=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;if(r&&s)t.forEach(a=>{const u=i.getAttribute(a,r),l=i.getAttribute(a,s);u==null||isNaN(u)||(n=Math.min(n,u)),l==null||isNaN(l)||(o=Math.max(o,l))});else{const a=r||s;t.forEach(u=>{const l=i.getAttribute(u,a);l==null||isNaN(l)||(n=Math.min(n,l),o=Math.max(o,l))})}return{start:n,end:o}}function Q(e,t,i){if(!t||!e)return null;const{startTimeField:r,endTimeField:s}=e;if(!r&&!s)return null;const{start:n,end:o}=t;return n===null&&o===null?null:n===void 0&&o===void 0?J():r&&s?W(i,r,s,n,o):Y(i,r||s,n,o)}function W(e,t,i,r,s){return r!=null&&s!=null?n=>{const o=e.getAttribute(n,t),a=e.getAttribute(n,i);return(o==null||o<=s)&&(a==null||a>=r)}:r!=null?n=>{const o=e.getAttribute(n,i);return o==null||o>=r}:s!=null?n=>{const o=e.getAttribute(n,t);return o==null||o<=s}:void 0}function Y(e,t,i,r){return i!=null&&r!=null&&i===r?s=>e.getAttribute(s,t)===i:i!=null&&r!=null?s=>{const n=e.getAttribute(s,t);return n>=i&&n<=r}:i!=null?s=>e.getAttribute(s,t)>=i:r!=null?s=>e.getAttribute(s,t)<=r:void 0}function J(){return()=>!1}export{H as I,B as P,Q as n,K as t,z as v};