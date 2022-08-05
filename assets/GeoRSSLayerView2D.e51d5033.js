import{R as l,S as h,c_ as g,cj as w,d2 as f,d3 as d,d4 as n,$ as u,a1 as S}from"./index.768d9708.js";import{f as b,u as V}from"./LayerView.5bfe681f.js";import{i as _}from"./GraphicContainer.8a24c8b8.js";import{a as v}from"./BaseGraphicContainer.13c32537.js";import"./utils.d36871b7.js";import"./Utils.930ec63b.js";import"./enums.6e42a319.js";import"./enums.de935fa5.js";import"./Texture.d4016723.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.128409d6.js";import"./CIMSymbolHelper.1df5f911.js";import"./BidiEngine.ec67919b.js";import"./GeometryUtils.814cb798.js";import"./normalizeUtilsSync.5641615f.js";import"./projectionSupport.462bc7e0.js";import"./json.d1a0fa35.js";import"./VertexArrayObject.e9da3715.js";import"./FeatureContainer.159667d9.js";import"./TileContainer.d6324440.js";import"./WGLContainer.2bbebe41.js";import"./pixelUtils.ecb888d5.js";import"./ProgramTemplate.662d3cc2.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./visualVariablesUtils.75684e43.js";import"./visualVariablesUtils.bc746b61.js";import"./Matcher.7ca9924a.js";import"./tileUtils.736d69ad.js";import"./TileClipper.8af71f3b.js";import"./Geometry.b68345ae.js";import"./ExpandedCIM.1dc04cac.js";import"./quantizationUtils.a0dceab2.js";import"./devEnvironmentUtils.8c6e6b72.js";import"./schemaUtils.ddd4c0d4.js";import"./createSymbolSchema.ca75ca22.js";import"./MD5.97b39efc.js";import"./util.c20b8269.js";import"./ComputedAttributeStorage.7dcdba91.js";import"./centroid.a31affe4.js";import"./vec3f32.8d37ecf5.js";let y=class extends b(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),p=t.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=i;return p}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),p=new w(i.features),s=t.drawingInfo,c=r?f.fromJSON(r):null,a=d(s.renderer),m=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([S("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ce=y;export{ce as default};
