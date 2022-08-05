import{ei as g,f as _,fS as O,eg as $,b$ as k,an as C,p as D,s as Q,bp as P,r as E,bu as G,bQ as Z,U as v,as as q,bS as A,bU as M,fT as N}from"./index.768d9708.js";import{u as z}from"./FeatureStore.ffab7aac.js";import{f as F,g as b}from"./projectionSupport.462bc7e0.js";import{Y as U}from"./QueryEngine.0a317e1e.js";import{T as B,L,O as W}from"./geojson.cc75ba83.js";import{u as J,l as V,a as Y}from"./clientSideDefaults.0ef7b7fe.js";import{w as H,m as T,f as w,a as I,g as x}from"./sourceUtils.b3f293bc.js";import"./PooledRBush.bfc3021e.js";import"./centroid.a31affe4.js";import"./json.d1a0fa35.js";import"./QueryEngineResult.2cc856f6.js";import"./quantizationUtils.a0dceab2.js";import"./WhereClause.da3ca9f9.js";import"./utils.2718154e.js";import"./ClassBreaksDefinition.752f3d75.js";import"./utils.a70993b1.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./timeSupport.4016a34c.js";const K={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class _e{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const s=[];await this._checkProjection(e.spatialReference);let n=null;e.url&&(n=await this._fetch(t==null?void 0:t.signal));const a=B(n,{geometryType:e.geometryType}),o=e.fields||a.fields||[],l=e.hasZ!=null?e.hasZ:a.hasZ,d=a.geometryType,p=e.objectIdField||a.objectIdFieldName||"__OBJECTID",h=e.spatialReference||g;let i=e.timeInfo;o===a.fields&&a.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:a.unknownFields}});let u=o.find(r=>r.name===p);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1):(u={alias:p,name:p,type:a.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(u));const c={};for(const r of o){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),!r.name)throw new _("geojson-layer:invalid-field-name","field name is missing",{field:r});if(!O.jsonValues.includes(r.type))throw new _("geojson-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r});if(r.name!==u.name){const f=$(r);f!==void 0&&(c[r.name]=f)}}this._fieldsIndex=new k(o);const y=this._fieldsIndex.requiredFields.indexOf(u);if(y>-1&&this._fieldsIndex.requiredFields.splice(y,1),i){if(i.startTimeField){const r=this._fieldsIndex.get(i.startTimeField);r?(i.startTimeField=r.name,r.type="esriFieldTypeDate"):i.startTimeField=null}if(i.endTimeField){const r=this._fieldsIndex.get(i.endTimeField);r?(i.endTimeField=r.name,r.type="esriFieldTypeDate"):i.endTimeField=null}if(i.trackIdField){const r=this._fieldsIndex.get(i.trackIdField);r?i.trackIdField=r.name:(i.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:i}}))}i.startTimeField||i.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:i}}),i=null)}const S=d?J(d):null,m={warnings:s,featureErrors:[],layerDefinition:{...K,drawingInfo:S,templates:V(c),extent:null,geometryType:d,objectIdField:p,fields:o,hasZ:!!l,timeInfo:i}};this._queryEngine=new U({fields:o,geometryType:d,hasM:!1,hasZ:l,objectIdField:p,spatialReference:h,timeInfo:i,featureStore:new z({geometryType:d,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=Y(c,p);const j=await this._createFeatures(n);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const R=this._normalizeFeatures(j,m.warnings,m.featureErrors);if(this._queryEngine.featureStore.addMany(R),m.layerDefinition.extent=this._queryEngine.fullExtent,m.layerDefinition.timeInfo){const{start:r,end:f}=this._queryEngine.timeExtent;m.layerDefinition.timeInfo.timeExtent=[r,f]}return m}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([H(t,s),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this.loadOptions.customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=C(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,s);const n=this._normalizeFeatures(s);n&&this._queryEngine.featureStore.addMany(n)},s=>{this._queryEngine.featureStore.clear(),D(s)||Q.getLogger("esri.layers.GeoJSONLayer").error(new _("geojson-layer:refresh","An error occurred during refresh",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:s,objectIdField:n}=this._queryEngine,a=L(e,{geometryType:t,hasZ:s,objectIdField:n});if(!P(this._queryEngine.spatialReference,g))for(const o of a)E(o.geometry)&&(o.geometry=G(b(Z(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),g,this._queryEngine.spatialReference)));return a}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:s}=this.loadOptions,n=(await v(t,{responseType:"json",query:{...s},signal:e})).data;return await W(n),n}_normalizeFeatures(e,t,s){const{objectIdField:n}=this._queryEngine,a=[];for(const o of e){const l=this._createDefaultAttributes(),d=T(this._fieldsIndex,l,o.attributes,!0,t);d?s==null||s.push(d):(this._assignObjectId(l,o.attributes,!0),o.attributes=l,o.objectId=l[n],a.push(o))}return a}_applyEdits(e){const{adds:t,updates:s,deletes:n}=e,a={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(a,t),s&&s.length&&this._applyUpdateEdits(a,s),n&&n.length){for(const o of n)a.deleteResults.push(w(o));this._queryEngine.featureStore.removeManyById(n)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:a}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:n,hasM:a,hasZ:o,objectIdField:l,spatialReference:d,featureStore:p}=this._queryEngine,h=[];for(const i of t){if(i.geometry&&n!==q(i.geometry)){s.push(I("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),c=T(this._fieldsIndex,u,i.attributes);if(c)s.push(c);else{if(this._assignObjectId(u,i.attributes),i.attributes=u,i.uid!=null){const y=i.attributes[l];e.uidToObjectId[i.uid]=y}E(i.geometry)&&(i.geometry=b(x(i.geometry,d),i.geometry.spatialReference,d)),h.push(i),s.push(w(i.attributes[l]))}}p.addMany(A([],h,n,o,a,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:n,hasZ:a,objectIdField:o,spatialReference:l,featureStore:d}=this._queryEngine;for(const p of t){const{attributes:h,geometry:i}=p,u=h&&h[o];if(u==null){e.push(I(`Identifier field ${o} missing`));continue}if(!d.has(u)){e.push(I(`Feature with object id ${u} missing`));continue}const c=M(d.getFeature(u),s,a,n);if(E(i)){if(s!==q(i)){e.push(I("Incorrect geometry type."));continue}c.geometry=b(x(i,l),i.spatialReference,l)}if(h){const y=T(this._fieldsIndex,c.attributes,h);if(y){e.push(y);continue}}d.add(N(c,s,a,n,o)),e.push(w(u))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if(s.type==="esriFieldTypeString")return()=>s.name+"-"+Date.now().toString(16);let n=Number.NEGATIVE_INFINITY;for(const a of t)a.objectId&&(n=Math.max(n,a.objectId));return n=Math.max(0,n)+1,()=>n++}_assignObjectId(e,t,s=!1){const n=this._queryEngine.objectIdField;e[n]=s&&n in t?t[n]:this._objectIdGenerator()}async _checkProjection(e){try{await F(g,e)}catch{throw new _("geojson-layer","Projection not supported")}}}export{_e as default};
