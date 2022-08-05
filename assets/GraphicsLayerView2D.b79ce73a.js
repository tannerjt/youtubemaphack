import{cE as s,cj as p,$ as h,a0 as a,a1 as o}from"./index.768d9708.js";import{f as g,u as m}from"./LayerView.5bfe681f.js";import{i as l}from"./GraphicContainer.8a24c8b8.js";import{a as c}from"./BaseGraphicContainer.13c32537.js";import"./utils.d36871b7.js";import"./Utils.930ec63b.js";import"./enums.6e42a319.js";import"./enums.de935fa5.js";import"./Texture.d4016723.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.128409d6.js";import"./CIMSymbolHelper.1df5f911.js";import"./BidiEngine.ec67919b.js";import"./GeometryUtils.814cb798.js";import"./normalizeUtilsSync.5641615f.js";import"./projectionSupport.462bc7e0.js";import"./json.d1a0fa35.js";import"./VertexArrayObject.e9da3715.js";import"./FeatureContainer.159667d9.js";import"./TileContainer.d6324440.js";import"./WGLContainer.2bbebe41.js";import"./pixelUtils.ecb888d5.js";import"./ProgramTemplate.662d3cc2.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./visualVariablesUtils.75684e43.js";import"./visualVariablesUtils.bc746b61.js";import"./Matcher.7ca9924a.js";import"./tileUtils.736d69ad.js";import"./TileClipper.8af71f3b.js";import"./Geometry.b68345ae.js";import"./ExpandedCIM.1dc04cac.js";import"./quantizationUtils.a0dceab2.js";import"./devEnvironmentUtils.8c6e6b72.js";import"./schemaUtils.ddd4c0d4.js";import"./createSymbolSchema.ca75ca22.js";import"./MD5.97b39efc.js";import"./util.c20b8269.js";import"./ComputedAttributeStorage.7dcdba91.js";import"./centroid.a31affe4.js";import"./vec3f32.8d37ecf5.js";const n={remove(){},pause(){},resume(){}};let r=class extends g(m){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new c({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new l(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d")}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate)}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof s?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):p.isCollection(i)&&i.length>0&&(t=i.map(e=>e&&e.uid).toArray()),t=t==null?void 0:t.filter(e=>e!=null),t.length?(this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):n}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};h([a()],r.prototype,"graphicsView",void 0),r=h([o("esri.views.2d.layers.GraphicsLayerView2D")],r);const ri=r;export{ri as default};