import{$ as a,a0 as l,d5 as p,a1 as d,cj as V,R as y,d6 as h,cA as w,t as o}from"./index.768d9708.js";import{r as v}from"./GroupContainer.907639ad.js";import{u,f as b}from"./LayerView.5bfe681f.js";import"./WGLContainer.2bbebe41.js";import"./enums.de935fa5.js";import"./pixelUtils.ecb888d5.js";import"./utils.d36871b7.js";import"./Utils.930ec63b.js";import"./enums.6e42a319.js";import"./Texture.d4016723.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.128409d6.js";import"./VertexArrayObject.e9da3715.js";import"./ProgramTemplate.662d3cc2.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";let t=class extends u{constructor(i){super(i),this.type="group",this.layerViews=new V}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),y(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),h),y(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},h)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",w(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{var s;return(s=this._findLayerViewForLayer(e))==null?void 0:s.visible});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){o(i)&&(i=this._firstVisibleOnLayerOrder(),o(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(s=>y(()=>s.visible,r=>this._applyVisibility(()=>{r!==this.visible&&(s.visible=this.visible)},()=>this._applyExclusiveVisibility(r?s:null)),h)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var s,r;this._hasLayerViewVisibleOverrides()&&(((s=this.layer)==null?void 0:s.visibilityMode)==="inherited"?i():((r=this.layer)==null?void 0:r.visibilityMode)==="exclusive"&&e())}};a([l({cast:p})],t.prototype,"layerViews",null),a([l({readOnly:!0})],t.prototype,"updatingProgress",null),a([l()],t.prototype,"view",void 0),t=a([d("esri.views.layers.GroupLayerView")],t);const m=t;let n=class extends b(m){constructor(){super(...arguments),this.container=new v}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",()=>this._updateStageChildren()),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};n=a([d("esri.views.2d.layers.GroupLayerView2D")],n);const U=n;export{U as default};