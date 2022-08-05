import{r as c,U as P,dI as S,ba as R,h,K as b,fl as M,l3 as B,gt as _,J as D,t as j}from"./index.768d9708.js";import{a as I}from"./quatf64.ddec7ef6.js";import{p as k,m as q,c as z,f as K}from"./meshFeatureSet.3676de58.js";import{T as U,i as N,c as O,x as G,u as V,L as J,O as F,E as Q}from"./BufferView.f00ca1c3.js";import{t as W,r as X,o as Y,b as Z,f as H,e as tt,n as et}from"./vec33.550f9c16.js";import{n as ot,c as nt,r as w,a as rt,j as st,t as A,b as at,k as it,d as ct,e as lt,m as ut,i as ft,f as mt,h as pt,p as dt,o as gt}from"./DefaultMaterial_COLOR_GAMMA.4d10f970.js";import{b as xt}from"./georeference.cf17966c.js";import{E as T,D as C}from"./enums.de935fa5.js";import"./earcut.d30cbec0.js";import"./deduplicate.c8a631b5.js";import"./mat4f64.a79dd289.js";import"./types.cb734ee5.js";import"./Version.ce726869.js";import"./quat.6c15b560.js";import"./vectorStacks.edda7f42.js";import"./lineSegment.bee26d9f.js";async function Ut(t,e,n){const s=new ot($t(n)),o=(await nt(s,e,n,!0)).model,m=o.lods.shift(),u=new Map,l=new Map;o.textures.forEach(($,E)=>u.set(E,wt($))),o.materials.forEach(($,E)=>l.set(E,yt($,u)));const i=bt(m);for(const $ of i.parts)vt(i,$,l);const{position:d,normal:f,tangent:r,color:a,texCoord0:p}=i.vertexAttributes,x={position:d.typedBuffer,normal:c(f)?f.typedBuffer:null,tangent:c(r)?r.typedBuffer:null,uv:c(p)?p.typedBuffer:null,color:c(a)?a.typedBuffer:null},v=xt(x,t,n);return{transform:v.transform,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new k({position:v.vertexAttributes.position,normal:v.vertexAttributes.normal,tangent:v.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function $t(t){return t!=null&&t.resolveFile?{busy:!1,request:async(e,n,s)=>{const o=t.resolveFile(e);return(await P(o,{responseType:n==="image"?"image":n==="binary"?"array-buffer":"json",signal:c(s)?s.signal:null})).data}}:null}function y(t,e){if(j(t))return"-";const n=t.typedBuffer;return`${S(e,n.buffer,()=>e.size)}/${n.byteOffset}/${n.byteLength}`}function ht(t){return c(t)?t.toString():"-"}function bt(t){let e=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,o=new Map,m=[];for(const u of t.parts){const{attributes:{position:l,normal:i,color:d,tangent:f,texCoord0:r}}=u,a=`
      ${y(l,s)}/
      ${y(i,s)}/
      ${y(d,s)}/
      ${y(f,s)}/
      ${y(r,s)}/
      ${ht(u.transform)}
    `;let p=!1;const x=S(o,a,()=>(p=!0,{start:e,length:l.count}));p&&(e+=l.count),i&&(n.normal=!0),d&&(n.color=!0),f&&(n.tangent=!0),r&&(n.texCoord0=!0),m.push({gltf:u,writeVertices:p,region:x})}return{vertexAttributes:{position:w(U,e),normal:n.normal?w(N,e):null,tangent:n.tangent?w(O,e):null,color:n.color?w(G,e):null,texCoord0:n.texCoord0?w(V,e):null},parts:m,components:[]}}function wt(t){return new q({data:t.data,wrap:Ct(t.parameters.wrap)})}function yt(t,e){const n=new R(Rt(t.color,t.opacity)),s=t.emissiveFactor?new R(Mt(t.emissiveFactor)):null;return new z({color:n,colorTexture:h(b(t.textureColor,o=>e.get(o))),normalTexture:h(b(t.textureNormal,o=>e.get(o))),emissiveColor:s,emissiveTexture:h(b(t.textureEmissive,o=>e.get(o))),occlusionTexture:h(b(t.textureOcclusion,o=>e.get(o))),alphaMode:Tt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:h(b(t.textureMetallicRoughness,o=>e.get(o)))})}function vt(t,e,n){e.writeVertices&&Et(t,e);const s=e.gltf,o=At(s.indices||s.attributes.position.count,s.primitiveType),m=e.region.start;if(m)for(let u=0;u<o.length;u++)o[u]+=m;t.components.push(new K({faces:o,material:n.get(s.material),trustSourceNormals:!0}))}function Et(t,e){const{position:n,normal:s,tangent:o,color:m,texCoord0:u}=t.vertexAttributes,l=e.region.start,{attributes:i,transform:d}=e.gltf,f=i.position.count;if(W(n.slice(l,f),i.position,d),c(i.normal)&&c(s)){const r=M(I(),d),a=s.slice(l,f);X(a,i.normal,r),B(r)&&Y(a,a)}else c(s)&&Z(s,0,0,1,{dstIndex:l,count:f});if(c(i.tangent)&&c(o)){const r=M(I(),d),a=o.slice(l,f);rt(a,i.tangent,r),B(r)&&st(a,a)}else c(o)&&A(o,0,0,1,1,{dstIndex:l,count:f});if(c(i.texCoord0)&&c(u)?at(u.slice(l,f),i.texCoord0):c(u)&&it(u,0,0,{dstIndex:l,count:f}),c(i.color)&&c(m)){const r=i.color,a=m.slice(l,f);if(r.elementCount===4)r instanceof O?ct(a,r,255):r instanceof G?lt(a,r):r instanceof J&&ut(a,r,8);else{A(a,255,255,255,255);const p=F.fromTypedArray(a.typedBuffer,a.typedBufferStride);r instanceof N?H(p,r,255):r instanceof F?tt(p,r):r instanceof Q&&et(p,r,8)}}else c(m)&&A(m.slice(l,f),255,255,255,255)}function At(t,e){switch(e){case T.TRIANGLES:return pt(t,dt);case T.TRIANGLE_STRIP:return mt(t);case T.TRIANGLE_FAN:return ft(t)}}function Tt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:L(t.s),vertical:L(t.t)}}function L(t){switch(t){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function g(t){return t**(1/gt)*255}function Rt(t,e){return _(g(t[0]),g(t[1]),g(t[2]),e)}function Mt(t){return D(g(t[0]),g(t[1]),g(t[2]))}export{Ut as loadGLTFMesh};