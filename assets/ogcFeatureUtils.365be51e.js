import{s as U,t as w,f as y,U as T,fS as V,b$ as z,aN as j,gg as H,L as X,r as k,bQ as Y,bu as ee,co as G,ei as te,gh as ne}from"./index.768d9708.js";import{O as ie,T as ae,L as se}from"./geojson.cc75ba83.js";import{u as re}from"./clientSideDefaults.0ef7b7fe.js";const M=U.getLogger("esri.layers.graphics.sources.ogcfeature"),P="http://www.opengis.net/def/crs/",ge=`${P}OGC/1.3/CRS84`;async function ye(e,t,n={},i=5){const{links:o}=e,l=m(o,"items","application/geo+json")||m(o,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(w(l))throw new y("ogc-feature-layer:missing-items-page","Missing items url");const{data:d}=await T(l.href,{signal:n.signal,query:{limit:i,...n.customParameters,token:n.apiKey},headers:{accept:"application/geo+json"}});await ie(d);const s=ae(d,{geometryType:t.geometryType}),f=t.fields||s.fields||[],$=t.hasZ!=null?t.hasZ:s.hasZ,F=s.geometryType,p=t.objectIdField||s.objectIdFieldName||"OBJECTID";let r=t.timeInfo;const g=f.find(a=>a.name===p);if(g)g.type="esriFieldTypeOID",g.editable=!1,g.nullable=!1;else{if(!s.objectIdFieldType)throw new y("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");f.unshift({name:p,alias:p,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(p!==s.objectIdFieldName){const a=f.find(c=>c.name===s.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}f===s.fields&&s.unknownFields.length>0&&M.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});for(const a of f){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new y("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!V.jsonValues.includes(a.type))throw new y("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(r){const a=new z(f);if(r.startTimeField){const c=a.get(r.startTimeField);c?(r.startTimeField=c.name,c.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const c=a.get(r.endTimeField);c?(r.endTimeField=c.name,c.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const c=a.get(r.trackIdField);c?r.trackIdField=c.name:(r.trackIdField=null,M.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(M.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}return{drawingInfo:F?re(F):null,geometryType:F,fields:f,hasZ:!!$,objectIdField:p,timeInfo:r}}async function we(e,t={}){const{links:n}=e,i=m(n,"data","application/json")||m(n,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(w(i))throw new y("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:l,signal:d}=t,{data:s}=await T(i.href,{signal:d,headers:{accept:"application/json"},query:{...l,token:o}});return s}async function be(e,t={}){const{links:n}=e,i=m(n,"conformance","application/json")||m(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(w(i))throw new y("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:l,signal:d}=t,{data:s}=await T(i.href,{signal:d,headers:{accept:"application/json"},query:{...l,token:o}});return s}async function he(e,t={}){const{apiKey:n,customParameters:i,signal:o}=t,{data:l}=await T(e,{signal:o,headers:{accept:"application/json"},query:{...i,token:n}});return l}async function Fe(e,t={}){const n="application/vnd.oai.openapi+json;version=3.0",i=m(e.links,"service-desc",n);if(w(i))return M.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:l,signal:d}=t,{data:s}=await T(i.href,{signal:d,headers:{accept:n},query:{...l,token:o}});return s}function Ie(e){var o;const t=(o=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e))==null?void 0:o.groups;if(!t)return null;const{authority:n,code:i}=t;switch(n.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return j.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return j.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(i,10);return Number.isNaN(l)?null:l}default:return null}}async function Te(e,t,n){const i=await oe(e,t,n);return H(i)}async function oe(e,t,n){const{capabilities:{query:{maxRecordCount:i}},collection:o,layerDefinition:l,queryParameters:{apiKey:d,customParameters:s},spatialReference:f,supportedCrs:$}=e,{links:F}=o,p=m(F,"items","application/geo+json")||m(F,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(w(p))throw new y("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:r,num:g,start:a,timeExtent:c,where:W}=t;if(t.objectIds)throw new y("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const Z=j.fromJSON(f),I=X(t.outSpatialReference,Z),x=I.isWGS84?null:R(I,$),K=ue(r,$),L=ce(c),A=de(W),J=g!=null?g:a!=null&&a!==void 0?10:i,{data:b}=await T(p.href,{...n,query:{...s,...K,crs:x,datetime:L,query:A,limit:J,startindex:a,token:d},headers:{accept:"application/geo+json"}});let N=!1;b.links&&(N=!!b.links.find(S=>S.rel==="next")),!N&&Number.isInteger(b.numberMatched)&&Number.isInteger(b.numberReturned)&&(N=b.numberReturned<b.numberMatched);const{fields:E,globalIdField:Q,hasM:_,hasZ:q,objectIdField:v}=l,O=l.geometryType,C=se(b,{geometryType:O,hasZ:q,objectIdField:v});if(!x&&I.isWebMercator){for(const h of C)if(k(h.geometry)){const S=Y(h.geometry,O,q,!1);S.spatialReference=j.WGS84,h.geometry=ee(G(S,I))}}for(const h of C)h.objectId=h.attributes[v];const B=x||!x&&I.isWebMercator?I.toJSON():te,u=new ne;return u.exceededTransferLimit=N,u.features=C,u.fields=E,u.geometryType=O,u.globalIdFieldName=Q,u.hasM=_,u.hasZ=q,u.objectIdFieldName=v,u.spatialReference=B,u}function le(e){return k(e)&&e.type==="extent"}function R(e,t){var l,d,s;const{isWebMercator:n,wkid:i}=e;if(!i)return null;const o=n?(s=(d=(l=t[3857])!=null?l:t[102100])!=null?d:t[102113])!=null?s:t[900913]:t[e.wkid];return o?`${P}${o}`:null}function D(e){if(w(e))return"";const{xmin:t,ymin:n,xmax:i,ymax:o}=e;return`${t},${n},${i},${o}`}function ce(e){if(w(e))return null;const{start:t,end:n}=e;return`${k(t)?t.toISOString():".."}/${k(n)?n.toISOString():".."}`}function de(e){return w(e)||!e||e==="1=1"?null:e}function ue(e,t){if(!le(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:D(e)};const i=R(n,t);return k(i)?{bbox:D(e),"bbox-crs":i}:n.isWebMercator?{bbox:D(G(e,j.WGS84))}:null}function m(e,t,n){return e.find(i=>i.rel===t&&i.type===n)||e.find(i=>i.rel===t&&!i.type)}export{ge as F,ye as I,Ie as N,he as S,we as T,P as j,be as k,Te as q,oe as v,Fe as x};
