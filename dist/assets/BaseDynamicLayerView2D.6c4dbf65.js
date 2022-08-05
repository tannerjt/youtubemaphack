import{s as o,p,$ as r,a0 as a,a1 as m}from"./index.768d9708.js";import{t as n}from"./BitmapContainer.7d3450cf.js";import{f as h,u as d}from"./LayerView.5bfe681f.js";import{S as c}from"./ExportStrategy.c9bd56bc.js";import{i as y}from"./RefreshableLayerView.5a00c3bd.js";import"./WGLContainer.2bbebe41.js";import"./enums.de935fa5.js";import"./pixelUtils.ecb888d5.js";import"./utils.d36871b7.js";import"./Utils.930ec63b.js";import"./enums.6e42a319.js";import"./Texture.d4016723.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.128409d6.js";import"./VertexArrayObject.e9da3715.js";import"./ProgramTemplate.662d3cc2.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./Bitmap.b6c21854.js";const g=o.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let t=class extends y(h(d)){update(i){this.strategy.update(i).catch(e=>{p(e)||g.error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this.strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImage(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};r([a()],t.prototype,"strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const j=t;export{j as default};