import{aJ as Se,am as Ne,cv as U,h8 as Ie,cj as J,$ as a,a0 as l,dz as I,ce as Oe,a1 as me,iw as Re,f as Ue,aN as O,bC as $e,t as Fe,cb as Le,Z as Ae,is as _e,j3 as Pe,iu as Me,it as je,dU as Te,dV as qe,dW as Ce,dJ as Ve,R as Be,d6 as We,r as W,aO as ke,U as te,dq as De,d2 as Ge,cE as He,ke as Xe,bp as Je,gP as Qe,w as re,aY as Ye,bL as k,iX as ze,gk as Ze,dZ as Ke,d_ as et,kf as tt}from"./index.768d9708.js";import{r as ne}from"./scaleUtils.348f3d9f.js";import{o as H}from"./crsUtils.a0bfa377.js";import{l as se}from"./ExportWMSImageParameters.0a61f54a.js";var j;let rt=0,h=j=class extends Se(Re){constructor(e){super(e),this._sublayersHandles=new Ne,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?U.fromJSON(e):null}get id(){const e=this._get("id");return e==null?rt++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(r=>{r.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(r=>{r.parent=this,r.layer=this.layer}),this._sublayersHandles.add([e.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),e.on("after-remove",({item:r})=>{r.parent=null,r.layer=null})])),this._set("sublayers",e)}castSublayers(e){return Ie(J.ofType(j),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new j;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(t=>t.clone())),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([l()],h.prototype,"description",null),a([l({readOnly:!0})],h.prototype,"dimensions",void 0),a([l({value:null})],h.prototype,"fullExtent",null),a([I("fullExtent",["extent"])],h.prototype,"readExtent",null),a([l()],h.prototype,"fullExtents",void 0),a([l()],h.prototype,"featureInfoFormat",void 0),a([l()],h.prototype,"featureInfoUrl",void 0),a([l({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),a([l({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),a([I(["web-document"],"legendUrl")],h.prototype,"readLegendUrl",null),a([l({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),a([l({value:null})],h.prototype,"layer",null),a([l()],h.prototype,"maxScale",void 0),a([l()],h.prototype,"minScale",void 0),a([l({readOnly:!0})],h.prototype,"effectiveScaleRange",null),a([l({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],h.prototype,"name",null),a([l()],h.prototype,"parent",void 0),a([l({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),a([l({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),a([l()],h.prototype,"sublayers",null),a([Oe("sublayers")],h.prototype,"castSublayers",null),a([l({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),a([l({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",null),a([l({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=j=a([me("esri.layers.support.WMSSublayer")],h);const X=h,M={84:4326,83:4269,27:4267};function nt(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const f=Array.prototype.slice.call(r.childNodes).map(v=>v.textContent).join(`\r
`);throw new Ue("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",f)}const n=x("Capability",r),s=x("Service",r),o=x("Request",n);if(!n||!s||!o)return null;const i=x("Layer",n);if(!i)return null;const y=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",u=E("Title",s,"")||E("Name",s,""),p=E("AccessConstraints",s,""),m=/^none$/i.test(p)?"":p,c=E("Abstract",s,""),b=parseInt(E("MaxWidth",s,"5000"),10),w=parseInt(E("MaxHeight",s,"5000"),10),S=ae(o,"GetMap"),$=ie(o,"GetMap"),g=A(i,y,t);let Q,C=0;if(Array.prototype.slice.call(n.childNodes).forEach(f=>{f.nodeName==="Layer"&&(C===0?Q=f:(C===1&&g.name&&(g.name="",g.sublayers.push(A(Q,y,t))),g.sublayers.push(A(f,y,t))),C++)}),!g)return null;let N,_;const be=g.fullExtents;if(N=g.sublayers,N||(N=[]),N.length===0&&N.push(g),_=g.extent,!_){const f=new U(N[0].extent);g.extent=f.toJSON(),_=g.extent}const xe=g.spatialReferences.length>0?g.spatialReferences:ye(g),Y=ie(o,"GetFeatureInfo");let P;if(Y){const f=ae(o,"GetFeatureInfo");f.includes("text/html")?P="text/html":f.includes("text/plain")&&(P="text/plain")}if(!P){const f=v=>{v&&(v.queryable=!1,v.sublayers&&v.sublayers.forEach(V=>{f(V)}))};f(g)}const z=he(N),we=g.minScale||0,ve=g.maxScale||0,Z=g.dimensions,Ee=z.reduce((f,v)=>f.concat(v.dimensions),[]),K=Z.concat(Ee).filter(ge);let ee=null;if(K.length>0){let f=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;K.forEach(V=>{const{extent:B}=V;at(B)?B.forEach(F=>{f=Math.min(f,F.getTime()),v=Math.max(v,F.getTime())}):B.forEach(F=>{f=Math.min(f,F.min.getTime()),v=Math.max(v,F.max.getTime())})}),ee={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[f,v]}}return{copyright:m,description:c,dimensions:Z,extent:_,fullExtents:be,featureInfoFormat:P,featureInfoUrl:Y,mapUrl:$,maxWidth:b,maxHeight:w,maxScale:ve,minScale:we,layers:z,spatialReferences:xe,supportedImageFormatTypes:S,timeInfo:ee,title:u,version:y}}function st(e){return e.length?e.filter(t=>t.popupEnabled&&t.name&&t.queryable).map(t=>t.name).join(","):""}function ye(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=ye(t);if(r.length>0)return r}return[]}function he(e){let t=[];return e.forEach(r=>{t.push(r),r.sublayers&&r.sublayers.length&&(t=t.concat(he(r.sublayers)),delete r.sublayers)}),t}function T(e,t,r){var n;return(n=t.getAttribute(e))!=null?n:r}function it(e,t,r,n){const s=x(e,r);return s?T(t,s,n):n}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(fe(n)&&n.nodeName===e)return n}return null}function q(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];fe(s)&&s.nodeName===e&&r.push(s)}return r}function E(e,t,r){const n=x(e,t);return n?n.textContent:r}function L(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),o=parseFloat(e.getAttribute("maxx")),i=parseFloat(e.getAttribute("maxy"));let y,u,p,m;r?(y=isNaN(s)?-Number.MAX_VALUE:s,u=isNaN(n)?-Number.MAX_VALUE:n,p=isNaN(i)?Number.MAX_VALUE:i,m=isNaN(o)?Number.MAX_VALUE:o):(y=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(s)?-Number.MAX_VALUE:s,p=isNaN(o)?Number.MAX_VALUE:o,m=isNaN(i)?Number.MAX_VALUE:i);const c=new O({wkid:t});return new U({xmin:y,ymin:u,xmax:p,ymax:m,spatialReference:c})}function ie(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const s=x("HTTP",n);if(s){const o=x("Get",s);if(o){let i=it("OnlineResource","xlink:href",o,null);if(i)return i.indexOf("&")===i.length-1&&(i=i.substring(0,i.length-1)),lt(i,["service","request"])}}}}return null}function ae(e,t){const r=q("Operation",e);if(r.length===0)return q("Format",x(t,e)).map(s=>s.textContent);const n=[];return r.forEach(s=>{s.getAttribute("name")===t&&q("Format",s).forEach(o=>{n.push(o.textContent)})}),n}function oe(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:s}=n;if(s==null||s==="")return r;const o=Number(s);return isNaN(o)?r:o}function A(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},s=x("LatLonBoundingBox",e),o=x("EX_GeographicBoundingBox",e);let i=null;s&&(i=L(s,4326)),o&&(i=new U(0,0,0,0,new O({wkid:4326})),i.xmin=parseFloat(E("westBoundLongitude",o,"0")),i.ymin=parseFloat(E("southBoundLatitude",o,"0")),i.xmax=parseFloat(E("eastBoundLongitude",o,"0")),i.ymax=parseFloat(E("northBoundLatitude",o,"0"))),s||o||(i=new U(-180,-90,180,90,new O({wkid:4326}))),n.minScale=oe(e,"MaxScaleDenominator",0),n.maxScale=oe(e,"MinScaleDenominator",0);const y=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(u=>{if(u.nodeName==="Name")n.name=u.textContent||"";else if(u.nodeName==="Title")n.title=u.textContent||"";else if(u.nodeName==="Abstract")n.description=u.textContent||"";else if(u.nodeName==="BoundingBox"){const p=u.getAttribute(y);if(p&&p.indexOf("EPSG:")===0){const c=parseInt(p.substring(5),10);c===0||isNaN(c)||i||(i=t==="1.3.0"?L(u,c,H(c)):L(u,c))}const m=p&&p.indexOf(":");if(m&&m>-1){let c=parseInt(p.substring(m+1,p.length),10);c===0||isNaN(c)||(c=M[c]?M[c]:c);const b=t==="1.3.0"?L(u,c,H(c)):L(u,c);n.fullExtents.push(b)}}else if(u.nodeName===y)u.textContent.split(" ").forEach(p=>{const m=p.includes(":")?parseInt(p.split(":")[1],10):parseInt(p,10);if(m!==0&&!isNaN(m)){const c=M[m]?M[m]:m;n.spatialReferences.includes(c)||n.spatialReferences.push(c)}});else if(u.nodeName!=="Style"||n.legendURL){if(u.nodeName==="Layer"){const p=A(u,t,r);p&&(p.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(p))}}else{const p=x("LegendURL",u);if(p){const m=x("OnlineResource",p);m&&(n.legendURL=m.getAttribute("xlink:href"))}}}),n.extent=i==null?void 0:i.toJSON(),n.dimensions=q("Dimension",e).filter(u=>u.getAttribute("name")&&u.getAttribute("units")&&u.textContent).map(u=>{const p=u.getAttribute("name"),m=u.getAttribute("units"),c=u.textContent,b=u.getAttribute("unitSymbol"),w=u.getAttribute("default"),S=T("default",u,"0")!=="0",$=T("nearestValue",u,"0")!=="0",g=T("current",u,"0")!=="0";return ge({name:p,units:m})?{name:"time",units:"ISO8601",extent:pe(c),default:pe(w),multipleValues:S,nearestValue:$,current:g}:ot({name:p,units:m})?{name:"elevation",units:m,extent:le(c),unitSymbol:b,default:le(w),multipleValues:S,nearestValue:$}:{name:p,units:m,extent:ue(c),unitSymbol:b,default:ue(w),multipleValues:S,nearestValue:$}}),n}function at(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function fe(e){return e.nodeType===Node.ELEMENT_NODE}function ot(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function ge(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function lt(e,t){const r=[],n=$e(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}function le(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&s[2]!=="0"?parseFloat(s[2]):void 0}}).filter(n=>n):r.map(n=>parseFloat(n))}function ue(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&s[2]!=="0"?s[2]:void 0}}).filter(n=>n):r}function pe(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:new Date(s[0]),max:new Date(s[1]),resolution:s.length>=3&&s[2]!=="0"?ut(s[2]):void 0}}).filter(n=>n):r.map(n=>new Date(n))}function ut(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,r=e.match(t);return r?{years:R(r[1]),months:R(r[2]),days:R(r[3]),hours:R(r[4]),minutes:R(r[5]),seconds:R(r[6])}:null}function R(e){if(!e)return 0;const t=/(?:\d+(?:.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function D(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const de=new Set([102100,3857,102113,900913]),pt=new Set([3395,54004]);function dt(e,t){let r=e.wkid;return Fe(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),de.has(r)?t.find(n=>de.has(n))||t.find(n=>pt.has(n))||102100:r)}const G=new Le({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let d=class extends Ae(_e(Pe(Me(je(Te(qe(Ce(et)))))))){constructor(...e){super(...e),this.allSublayers=new Ve({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null;const t="wms-sublayer";this.own(Be(()=>this.sublayers,(r,n)=>{if(n){for(const s of n)s.layer=null;this.handles.remove(t)}if(r){for(const s of r)s.parent=this,s.layer=this;this.handles.add([r.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),r.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],t)}},We))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=W(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(ke).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new U({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new O(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return ce(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return ce(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,o=e.flatten(({sublayers:i})=>i&&i.toArray()).toArray();o.forEach(i=>{typeof i.parent.id=="number"&&(s.has(i.parent.id)?s.get(i.parent.id).push(i.id):s.set(i.parent.id,[i.id]))}),o.forEach(i=>{const y={sublayer:i,...n},u=i.write({parentLayerId:typeof i.parent.id=="number"?i.parent.id:-1},y);if(s.has(i.id)&&(u.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const p=i.write({},y);delete p.id,t.layers.push(p)}}),t.visibleLayers=o.filter(i=>i.visible&&!i.sublayers).map(i=>i.name)}createExportImageParameters(e,t,r,n){const s=n&&n.pixelRatio||1,o=ne({extent:e,width:t})*s,i=new se({layer:this,scale:o}),{xmin:y,ymin:u,xmax:p,ymax:m,spatialReference:c}=e,b=dt(c,this.spatialReferences),w=this.version==="1.3.0"&&H(b)?`${u},${y},${m},${p}`:`${y},${u},${p},${m}`,S=i.toJSON();return{bbox:w,[this.version==="1.3.0"?"crs":"srs"]:isNaN(b)?void 0:"EPSG:"+b,...S}}async fetchImage(e,t,r,n){var m,c;const s=this.mapUrl,o=this.createExportImageParameters(e,t,r,n);if(!o.layers){const b=document.createElement("canvas");return b.width=t,b.height=r,b}const i=(m=n==null?void 0:n.timeExtent)==null?void 0:m.start,y=(c=n==null?void 0:n.timeExtent)==null?void 0:c.end,u=W(i)&&W(y)?i.getTime()===y.getTime()?D(i):`${D(i)}/${D(y)}`:void 0,p={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...o,time:u,...this.refreshParameters}),signal:n==null?void 0:n.signal};return te(s,p).then(b=>b.data)}fetchFeatureInfo(e,t,r,n,s){const o=ne({extent:e,width:t}),i=new se({layer:this,scale:o}),y=st(i.visibleSublayers);if(!this.featureInfoUrl||!y)return null;const u=this.version==="1.3.0"?{I:n,J:s}:{x:n,y:s},p={query_layers:y,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...u},m={...this.createExportImageParameters(e,t,r),...p},c=this._mixCustomParameters(m),b=De(this.featureInfoUrl,c),w=document.createElement("iframe");w.src=b,w.style.border="none",w.style.margin="0",w.style.width="100%",w.setAttribute("sandbox","");const S=new Ge({title:this.title,content:w});return new He({sourceLayer:this,popupTemplate:S})}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return Xe(this.url)||this.spatialReferences.some(t=>{const r=t===900913?O.WebMercator:new O({wkid:t});return Je(r,e)})}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await te(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=nt(t.data)}if(this.parsedUrl){const t=new Qe(this.parsedUrl.path);t.scheme!=="https"||t.port&&t.port!=="443"||re.request.httpsDomains.includes(t.host)||re.request.httpsDomains.push(t.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function ct(e,t){return e.some(r=>{for(const n in r)if(tt(r,n,null,t))return!0;return!1})}function ce(e,t,r){const n=new Map;e.every(o=>o.id==null)&&(e=Ye(e)).forEach((o,i)=>o.id=i);for(const o of e){const i=new X;i.read(o,t),(r==null?void 0:r.indexOf(i.name))===-1&&(i.visible=!1),n.set(i.id,i)}const s=[];for(const o of e){const i=n.get(o.id);if(o.parentLayerId!=null&&o.parentLayerId>=0){const y=n.get(o.parentLayerId);y.sublayers||(y.sublayers=new J),y.sublayers.unshift(i)}else s.unshift(i)}return s}a([l({readOnly:!0})],d.prototype,"allSublayers",void 0),a([l({json:{type:Object,write:!0}})],d.prototype,"customParameters",void 0),a([l({json:{type:Object,write:!0}})],d.prototype,"customLayerParameters",void 0),a([l({type:String,json:{write:!0}})],d.prototype,"copyright",void 0),a([l()],d.prototype,"description",void 0),a([l({readOnly:!0})],d.prototype,"dimensions",void 0),a([l({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],d.prototype,"fullExtent",void 0),a([I(["web-document","portal-item"],"fullExtent",["extent"])],d.prototype,"readFullExtentFromItemOrMap",null),a([k(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],d.prototype,"writeFullExtent",null),a([l()],d.prototype,"fullExtents",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"featureInfoFormat",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"featureInfoUrl",void 0),a([l({type:String,json:{origins:{"web-document":{default:"image/png",type:G.jsonValues,read:{reader:G.read,source:"format"},write:{writer:G.write,target:"format"}}}}})],d.prototype,"imageFormat",void 0),a([I("imageFormat",["supportedImageFormatTypes"])],d.prototype,"readImageFormat",null),a([l({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],d.prototype,"imageMaxHeight",void 0),a([l({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],d.prototype,"imageMaxWidth",void 0),a([l()],d.prototype,"imageTransparency",void 0),a([l(ze)],d.prototype,"legendEnabled",void 0),a([l({type:["show","hide","hide-children"]})],d.prototype,"listMode",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"mapUrl",void 0),a([l({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],d.prototype,"isReference",void 0),a([l({type:["WMS"]})],d.prototype,"operationalLayerType",void 0),a([l()],d.prototype,"resourceInfo",void 0),a([l({type:O,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],d.prototype,"spatialReference",void 0),a([I(["web-document","portal-item"],"spatialReference",["spatialReferences"])],d.prototype,"readSpatialReferenceFromItemOrDocument",null),a([l({type:[Ze],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],d.prototype,"spatialReferences",void 0),a([k(["web-document","portal-item"],"spatialReferences")],d.prototype,"writeSpatialReferences",null),a([l({type:J.ofType(X),json:{write:{target:"layers",overridePolicy(e,t,r){if(ct(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],d.prototype,"sublayers",void 0),a([I(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],d.prototype,"readSublayersFromItemOrMap",null),a([I("service","sublayers",["layers"])],d.prototype,"readSublayers",null),a([k("sublayers",{layers:{type:[X]},visibleLayers:{type:[String]}})],d.prototype,"writeSublayers",null),a([l({json:{read:!1},readOnly:!0,value:"wms"})],d.prototype,"type",void 0),a([l(Ke)],d.prototype,"url",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"version",void 0),d=a([me("esri.layers.WMSLayer")],d);const gt=d;export{gt as default};
