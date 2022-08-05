import{$ as t,a0 as a,ar as S,bL as _,a1 as f,cf as O,dc as b,iC as x,jz as A,aY as L,jA as N,cj as R,bC as I,U as M,e4 as w,dT as j,dU as J,dV as U,it as D,dW as V,iG as K,am as P,cC as z,d6 as C,bD as E,aO as G,r as W,t as k,f as y,dz as q,iJ as F,d_ as Y}from"./index.768d9708.js";import{w as m}from"./persistable.dcfd6a8a.js";import{A as B,K as g}from"./SceneService.9a9ddf4d.js";import{s as H,l as Q,u as X,m as Z}from"./I3SLayerDefinitions.03dfd712.js";import"./multiOriginJSONSupportUtils.8128aa52.js";import"./originUtils.68552ec1.js";import"./resourceUtils.f0c6f4a7.js";var h;let n=h=class extends O{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,i,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!b(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new x("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const l=new S;A(e,l,o.layer.spatialReference),i[r]=l.toJSON(o)}else i[r]=e.toJSON(o);delete i[r].spatialReference}clone(){return new h({geometry:L(this.geometry),type:this.type})}};t([a({type:S}),m()],n.prototype,"geometry",void 0),t([_(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),t([a({type:["clip","mask","replace"],nonNullable:!0}),m()],n.prototype,"type",void 0),n=h=t([f("esri.layers.support.SceneModification")],n);const c=n;var p;let d=p=class extends N(R.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(i=>i.toJSON(e)).filter(i=>!!i.geometry)}static fromJSON(e,i){const r=new p;for(const o of e)r.add(c.fromJSON(o,i));return r}static async fromUrl(e,i,r){const o={url:I(e),origin:"service"},l=await M(e,{responseType:"json",signal:w(r,"signal")}),T=i.toJSON(),u=[];for(const v of l.data)u.push(c.fromJSON({...v,geometry:{...v.geometry,spatialReference:T}},o));return new p({url:e,items:u})}};t([a({type:String})],d.prototype,"url",void 0),d=p=t([f("esri.layers.support.SceneModifications")],d);const $=d;let s=class extends B(j(J(U(D(V(K(Y))))))){constructor(...e){super(...e),this._handles=new P,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(z(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,C))}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}readModifications(e,i,r){this._modificationsSource={url:E(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const i=w(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){G(r)}if(await this._fetchService(i),W(this._modificationsSource)){const r=await $.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,i)}beforeSave(){if(!k(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,i){return this._debouncedSaveOperations(g.SAVE_AS,{...i,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(g.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new y("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new y("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new y("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),t([a({type:["show","hide"]})],s.prototype,"listMode",void 0),t([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),t([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([a({type:H,readOnly:!0})],s.prototype,"nodePages",void 0),t([a({type:[Q],readOnly:!0})],s.prototype,"materialDefinitions",void 0),t([a({type:[X],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),t([a({type:[Z],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),t([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),t([a({type:$}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),t([q(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),t([a(F)],s.prototype,"elevationInfo",void 0),t([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=t([f("esri.layers.IntegratedMeshLayer")],s);const ne=s;export{ne as default};
