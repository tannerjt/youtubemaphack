import{aJ as ue,$ as t,a0 as r,dz as j,gk as ce,iv as N,a1 as l,iw as he,s as G,ij as te,cD as re,b$ as ge,r as d,iq as se,ix as fe,U as ie,cP as ve,t as me,f as E,cv as be,aN as oe,iy as Se,iz as we,iA as $e,d2 as Oe,dN as ae,cb as xe,iB as je,cj as S,iC as Fe,iD as Ie,cf as v,aY as c,iE as Le,iF as Te,dT as Be,dU as Ee,dV as Ae,it as qe,dW as Ne,iG as Pe,dJ as _e,e3 as Re,aO as ke,iH as Me,iI as Ue,iJ as De,d_ as Ke}from"./index.768d9708.js";import{t as Qe,l as Ve}from"./FetchAssociatedFeatureLayer.087b3dbd.js";import{n as Ce,A as Je,K as z}from"./SceneService.9a9ddf4d.js";import{s as Ge,l as He,u as ze,m as Ze}from"./I3SLayerDefinitions.03dfd712.js";import"./originUtils.68552ec1.js";import"./multiOriginJSONSupportUtils.8128aa52.js";import"./resourceUtils.f0c6f4a7.js";let y=class extends ue(he){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:void 0}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([j("service","title",["alias","name"])],y.prototype,"readTitle",null),t([r()],y.prototype,"layer",void 0),t([r({type:ce,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([j("service","id")],y.prototype,"readIdOnlyOnce",null),t([r(N(String))],y.prototype,"modelName",void 0),t([r(N(Boolean))],y.prototype,"isEmpty",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([l("esri.layers.buildingSublayers.BuildingSublayer")],y);const ne=y,We=G.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),Z=je();let o=class extends te.LoadableMixin(re(ne)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new ge(this.fields)}readAssociatedLayer(e,s){const i=this.layer.associatedFeatureServiceItem,a=s.associatedLayerID;return d(i)&&typeof a=="number"?new se({portalItem:i,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return d(this.associatedLayer)?this.associatedLayer.displayField:null}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const s=d(e)?e.signal:null,i=this._fetchService(s).then(()=>{this.indexInfo=Ce(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,We,s)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return fe(this,e)}async _fetchService(e){const s=(await ie(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){var a,p,h,H;const i=(p=(a=this.getFeatureType(s==null?void 0:s.feature))==null?void 0:a.domains)==null?void 0:p[e];return i&&i.type!=="inherited"?i:(H=(h=this.getField(e))==null?void 0:h.domain)!=null?H:null}getFeatureType(e){return e&&d(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return d(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return d(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=d(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Qe,{query:s,data:{supportsZ:i,supportsM:a,isVersioned:p}}=e;return{query:s,data:{supportsZ:i,supportsM:a,isVersioned:p}}}createQuery(){const e=new ve;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),s)).then(i=>{if(i!=null&&i.features)for(const a of i.features)a.layer=this.layer,a.sourceLayer=this;return i})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),s))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:d(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return d(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),me(this.associatedLayer))throw new E("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new E("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],o.prototype,"parsedUrl",null),t([r({type:Ge,readOnly:!0})],o.prototype,"nodePages",void 0),t([r({type:[He],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([r({type:[ze],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([r({type:[Ze],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],o.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([r({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([r(Z.fields)],o.prototype,"fields",void 0),t([r({readOnly:!0})],o.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:se})],o.prototype,"associatedLayer",void 0),t([j("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([r(Z.outFields)],o.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([r({readOnly:!0,type:String})],o.prototype,"apiKey",null),t([r({readOnly:!0,type:be})],o.prototype,"fullExtent",null),t([r({readOnly:!0,type:oe})],o.prototype,"spatialReference",null),t([r({readOnly:!0})],o.prototype,"version",null),t([r({readOnly:!0,type:Se})],o.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],o.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],o.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],o.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([r({types:we,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([r($e)],o.prototype,"popupEnabled",void 0),t([r({type:Oe,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([r()],o.prototype,"types",null),t([r()],o.prototype,"typeIdField",null),t([r({json:{write:!1}}),ae(new xe({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([r()],o.prototype,"geometryType",null),t([r()],o.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),o=t([l("esri.layers.buildingSublayers.BuildingComponentSublayer")],o);const P=o;var _;const W={type:S,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:le}}},read:!1}};function le(e,s,i){if(e&&Array.isArray(e))return new S(e.map(a=>{const p=Xe(a);if(p){const h=new p;return h.read(a,i),h}i&&i.messages&&a&&i.messages.push(new Fe("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:i}))}))}let f=_=class extends ne{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Ie(this,e=>_.forEachSublayer(this.sublayers,s=>{s.type!=="building-group"&&e(s)}))}};function Xe(e){return e.layerType==="group"?f:P}t([r({type:["hide","show","hide-children"],json:{write:!0}})],f.prototype,"listMode",void 0),t([r(W)],f.prototype,"sublayers",void 0),f=_=t([l("esri.layers.buildingSublayers.BuildingGroupSublayer")],f),function(e){function s(i,a){i.forEach(p=>{a(p),p.type==="building-group"&&s(p.sublayers,a)})}e.sublayersProperty=W,e.readSublayers=le,e.forEachSublayer=s}(f||(f={}));const m=f;let F=class extends v{constructor(){super(...arguments),this.type=null}};t([r({type:String,readOnly:!0,json:{write:!0}})],F.prototype,"type",void 0),F=t([l("esri.layers.support.BuildingFilterAuthoringInfo")],F);const pe=F;var R;let w=R=class extends v{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new R({filterType:this.filterType,filterValues:c(this.filterValues)})}};t([r({type:String,json:{write:!0}})],w.prototype,"filterType",void 0),t([r({type:[String],json:{write:!0}})],w.prototype,"filterValues",void 0),w=R=t([l("esri.layers.support.BuildingFilterAuthoringInfoType")],w);const Ye=w;var k;const et=S.ofType(Ye);let I=k=class extends v{clone(){return new k({filterTypes:c(this.filterTypes)})}};t([r({type:et,json:{write:!0}})],I.prototype,"filterTypes",void 0),I=k=t([l("esri.layers.support.BuildingFilterAuthoringInfoBlock")],I);const tt=I;var M;const rt=S.ofType(tt);let $=M=class extends pe{constructor(){super(...arguments),this.type="checkbox"}clone(){return new M({filterBlocks:c(this.filterBlocks)})}};t([r({type:["checkbox"]})],$.prototype,"type",void 0),t([r({type:rt,json:{write:!0}})],$.prototype,"filterBlocks",void 0),$=M=t([l("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],$);const X=$;let L=class extends v{};t([r({readOnly:!0,json:{read:!1}})],L.prototype,"type",void 0),L=t([l("esri.layers.support.BuildingFilterMode")],L);const A=L;var U;let T=U=class extends A{constructor(){super(...arguments),this.type="solid"}clone(){return new U}};t([r({type:["solid"],readOnly:!0,json:{write:!0}})],T.prototype,"type",void 0),T=U=t([l("esri.layers.support.BuildingFilterModeSolid")],T);const D=T;var K;let O=K=class extends A{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new K({edges:c(this.edges)})}};t([ae({wireFrame:"wire-frame"})],O.prototype,"type",void 0),t([r(Le)],O.prototype,"edges",void 0),O=K=t([l("esri.layers.support.BuildingFilterModeWireFrame")],O);const Y=O;var Q;let B=Q=class extends A{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Q}};t([r({type:["x-ray"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=Q=t([l("esri.layers.support.BuildingFilterModeXRay")],B);const ee=B;var V;const st={nonNullable:!0,types:{key:"type",base:A,typeMap:{solid:D,"wire-frame":Y,"x-ray":ee}},json:{read:e=>{switch(e&&e.type){case"solid":return D.fromJSON(e);case"wireFrame":return Y.fromJSON(e);case"x-ray":return ee.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let b=V=class extends v{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new D,this.title=""}clone(){return new V({filterExpression:this.filterExpression,filterMode:c(this.filterMode),title:this.title})}};t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0),t([r(st)],b.prototype,"filterMode",void 0),t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0),b=V=t([l("esri.layers.support.BuildingFilterBlock")],b);const it=b;var C;const ot=S.ofType(it);let g=C=class extends v{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Te(),this.name=null}clone(){return new C({description:this.description,filterBlocks:c(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:c(this.filterAuthoringInfo)})}};t([r({type:String,json:{write:!0}})],g.prototype,"description",void 0),t([r({type:ot,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterBlocks",void 0),t([r({types:{key:"type",base:pe,typeMap:{checkbox:X}},json:{read:e=>(e&&e.type)==="checkbox"?X.fromJSON(e):null,write:!0}})],g.prototype,"filterAuthoringInfo",void 0),t([r({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"id",void 0),t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"name",void 0),g=C=t([l("esri.layers.support.BuildingFilter")],g);const at=g,nt=G.getLogger("esri.layers.support.BuildingSummaryStatistics");let u=class extends v{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([r({type:String})],u.prototype,"fieldName",void 0),t([r({type:String})],u.prototype,"modelName",void 0),t([r({type:String})],u.prototype,"label",void 0),t([r({type:Number})],u.prototype,"min",void 0),t([r({type:Number})],u.prototype,"max",void 0),t([r({json:{read:e=>Array.isArray(e)&&(e.every(s=>typeof s=="string")||e.every(s=>typeof s=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([r({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([l("esri.layers.support.BuildingFieldStatistics")],u);let x=class extends te.LoadableMixin(re(v)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(nt.error("building summary statistics are not loaded"),null)}load(e){const s=d(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(s)),Promise.resolve(this)}async _fetchService(e){const s=(await ie(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(s,{origin:"service"})}};t([r({constructOnly:!0,type:String})],x.prototype,"url",void 0),t([r({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],x.prototype,"fields",null),x=t([l("esri.layers.support.BuildingSummaryStatistics")],x);const ye=x,q=G.getLogger("esri.layers.BuildingSceneLayer"),de=S.ofType(at),J=c(m.sublayersProperty);J.json.origins["web-scene"]={type:[P],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},J.json.origins["portal-item"]={type:[P],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let n=class extends Je(Be(Ee(Ae(qe(Ne(Pe(Ke))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new _e({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.type==="building-group"?s.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new de,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,s,i){const a=m.readSublayers(e,s,i);return m.forEachSublayer(a,p=>p.layer=this),this.sublayerOverrides&&(this.applySublayerOverrides(a,this.sublayerOverrides),this.sublayerOverrides=null),a}applySublayerOverrides(e,{overrides:s,context:i}){m.forEachSublayer(e,a=>a.read(s.get(a.id),i))}readSublayerOverrides(e,s){const i=new Map;for(const a of e)a!=null&&typeof a=="object"&&typeof a.id=="number"?i.set(a.id,a):s.messages.push(new E("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:a}));return{overrides:i,context:s}}writeSublayerOverrides(e,s,i){const a=[];m.forEachSublayer(this.sublayers,p=>{const h=p.write({},i);Object.keys(h).length>1&&a.push(h)}),a.length>0&&(s.sublayers=a)}writeUnappliedOverrides(e,s){s.sublayers=[],e.overrides.forEach(i=>{s.sublayers.push(c(i))})}write(e,s){return e=super.write(e,s),!s||s.origin!=="web-scene"&&s.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,s):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,s){if(super.read(e,s),s&&(s.origin==="web-scene"||s.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,s);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this.sublayerOverrides=i}}readSummaryStatistics(e,s){if(typeof s.statisticsHRef=="string"){const i=Re(this.parsedUrl.path,s.statisticsHRef);return new ye({url:i})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const s=d(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ke).then(()=>this._fetchService(s)).then(()=>this._fetchAssociatedFeatureService(s));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return Me(this,e=>{m.forEachSublayer(this.sublayers,s=>{s.type!=="building-group"&&e(s)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,s){return this._debouncedSaveOperations(z.SAVE_AS,{...s,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(z.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new E("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&q.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&q.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const s=new Ve(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await s.fetchPortalItem()}catch(i){q.warn("Associated feature service item could not be loaded",i)}}};t([r({type:["BuildingSceneLayer"]})],n.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],n.prototype,"allSublayers",void 0),t([r(J)],n.prototype,"sublayers",void 0),t([j("service","sublayers")],n.prototype,"readSublayers",null),t([r({type:de,nonNullable:!0,json:{write:!0}})],n.prototype,"filters",void 0),t([r({type:String,json:{write:!0}})],n.prototype,"activeFilterId",void 0),t([r({readOnly:!0,type:ye})],n.prototype,"summaryStatistics",void 0),t([j("summaryStatistics",["statisticsHRef"])],n.prototype,"readSummaryStatistics",null),t([r({type:[String],json:{read:!1}})],n.prototype,"outFields",void 0),t([r(Ue)],n.prototype,"fullExtent",void 0),t([r({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),t([r(N(oe))],n.prototype,"spatialReference",void 0),t([r(De)],n.prototype,"elevationInfo",null),t([r({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([r()],n.prototype,"associatedFeatureServiceItem",void 0),n=t([l("esri.layers.BuildingSceneLayer")],n);const gt=n;export{gt as default};