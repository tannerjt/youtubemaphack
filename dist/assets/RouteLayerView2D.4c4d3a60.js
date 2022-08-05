import{cj as l,dJ as m,r as o,S as u,t as _,R as g,$ as n,a0 as d,a1 as w}from"./index.768d9708.js";import{b as f,h as y,O as k,g as v,a as M,c as V,D as G}from"./Stop.da89ca93.js";import{f as I,u as F}from"./LayerView.5bfe681f.js";import{i as H}from"./GraphicContainer.8a24c8b8.js";import{a as C}from"./BaseGraphicContainer.13c32537.js";import"./utils.d36871b7.js";import"./Utils.930ec63b.js";import"./enums.6e42a319.js";import"./enums.de935fa5.js";import"./Texture.d4016723.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.128409d6.js";import"./CIMSymbolHelper.1df5f911.js";import"./BidiEngine.ec67919b.js";import"./GeometryUtils.814cb798.js";import"./normalizeUtilsSync.5641615f.js";import"./projectionSupport.462bc7e0.js";import"./json.d1a0fa35.js";import"./VertexArrayObject.e9da3715.js";import"./FeatureContainer.159667d9.js";import"./TileContainer.d6324440.js";import"./WGLContainer.2bbebe41.js";import"./pixelUtils.ecb888d5.js";import"./ProgramTemplate.662d3cc2.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./visualVariablesUtils.75684e43.js";import"./visualVariablesUtils.bc746b61.js";import"./Matcher.7ca9924a.js";import"./tileUtils.736d69ad.js";import"./TileClipper.8af71f3b.js";import"./Geometry.b68345ae.js";import"./ExpandedCIM.1dc04cac.js";import"./quantizationUtils.a0dceab2.js";import"./devEnvironmentUtils.8c6e6b72.js";import"./schemaUtils.ddd4c0d4.js";import"./createSymbolSchema.ca75ca22.js";import"./MD5.97b39efc.js";import"./util.c20b8269.js";import"./ComputedAttributeStorage.7dcdba91.js";import"./centroid.a31affe4.js";import"./vec3f32.8d37ecf5.js";const b=Object.freeze({remove(){},pause(){},resume(){}}),U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function c(t){return t instanceof f||t instanceof y||t instanceof k||t instanceof v||t instanceof M||t instanceof V||t instanceof G}function A(t){return l.isCollection(t)&&t.length&&c(t.getItemAt(0))}function $(t){return Array.isArray(t)&&t.length&&c(t[0])}let h=class extends I(F){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new m({getCollections:()=>[o(this.layer.routeInfo)?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=c(t)?[this._getNetworkFeatureUid(t)]:$(t)?t.map(r=>this._getNetworkFeatureUid(r)):A(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(o);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):b}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(o).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new H(t.featuresTilingScheme);this._graphicsView=new C({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.handles.remove(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return _(i.symbol)?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(o));for(const e of t.added)this.handles.add([g(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),g(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const p=this._createGraphic(t);return this._networkFeatureMap.set(t,p),this._networkGraphicMap.set(p,t),void this._graphics.add(p)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};n([d()],h.prototype,"_graphics",void 0),n([d()],h.prototype,"_routeItems",null),h=n([w("esri.views.2d.layers.RouteLayerView2D")],h);const Vt=h;export{Vt as default};
