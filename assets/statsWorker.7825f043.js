import{e9 as D,ap as C,a8 as S,h as R,cQ as A,aN as B,y as O,ea as j,eb as k}from"./index.768d9708.js";import{O as q}from"./quantizationUtils.a0dceab2.js";import{T as G,s as Y,m as _,c as Q,V as U,g as Z,h as H,y as J,D as K,z as L}from"./utils.2718154e.js";import"./ClassBreaksDefinition.752f3d75.js";let I=null;function W(e,a,l){return e.x<0?e.x+=a:e.x>l&&(e.x-=a),e}function X(e,a,l,t){const i=D(l)?C(l):null,r=i?Math.round((i.valid[1]-i.valid[0])/a.scale[0]):null;return e.map(s=>{const n=new S(R(s.geometry));return q(a,n,n,n.hasZ,n.hasM),s.geometry=i?W(n,r,t[0]):n,s})}function aa(e,a=18,l,t,i,r){const s=new Float64Array(i*r);a=Math.round(O(a));let n=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,u=0,m=0,d=0,f=0;const c=j(t,l);for(const{geometry:v,attributes:y}of e){const{x:z,y:w}=v,E=Math.max(0,z-a),M=Math.max(0,w-a),g=Math.min(r,w+a),P=Math.min(i,z+a),$=+c(y);for(let x=M;x<g;x++)for(let T=E;T<P;T++){const F=x*i+T,b=k(T-z,x-w,a),N=s[F];u=s[F]+=b*$;const V=u-N;m+=V,d+=V*V,u<n&&(n=u),u>o&&(o=u),f++}}if(!f)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const p=(o-n)/2;return{mean:m/f,stdDev:Math.sqrt((d-m*m/f)/f),min:n,max:o,mid:p,count:f}}async function h(e,a){if(!a)return[];const l=e.field,t=e.valueExpression,i=e.normalizationType,r=e.normalizationField,s=e.normalizationTotal,n=[],o=e.viewInfoParams;let u=null,m=null;if(t){if(!I){const{arcadeUtils:c}=await A();I=c}u=I.createFunction(t),m=o&&I.getViewInfo({viewingMode:o.viewingMode,scale:o.scale,spatialReference:new B(o.spatialReference)})}const d=e.fieldInfos,f=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&d?{fields:d}:null;return a.forEach(c=>{const p=c.attributes;let v;if(t){const y=f?{...c,layer:f}:c,z=I.createExecContext(y,m);v=I.executeFunction(u,z)}else p&&(v=p[l]);if(i&&isFinite(v)){const y=p&&parseFloat(p[r]);v=G(v,i,y,s)}n.push(v)}),n}async function oa(e){const{attribute:a,features:l}=e,{normalizationType:t,normalizationField:i,minValue:r,maxValue:s,fieldType:n}=a,o=await h({field:a.field,valueExpression:a.valueExpression,normalizationType:t,normalizationField:i,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),u=Y({normalizationType:t,normalizationField:i,minValue:r,maxValue:s}),m={value:.5,fieldType:n},d=n==="esriFieldTypeString"?_({values:o,supportsNullCount:u,percentileParams:m}):Q({values:o,minValue:r,maxValue:s,useSampleStdDev:!t,supportsNullCount:u,percentileParams:m});return U(d,n==="esriFieldTypeDate")}async function sa(e){const{attribute:a,features:l}=e,t=await h({field:a.field,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),i=Z(t);return H(i,a.domain,a.returnAllCodedValues)}async function la(e){const{attribute:a,features:l}=e,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:s,classificationMethod:n}=a,o=await h({field:t,valueExpression:a.valueExpression,normalizationType:i,normalizationField:r,normalizationTotal:s,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),u=J(o,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:s,classificationMethod:n,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return K(u,n)}async function ra(e){const{attribute:a,features:l}=e,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:s,classificationMethod:n}=a,o=await h({field:t,valueExpression:a.valueExpression,normalizationType:i,normalizationField:r,normalizationTotal:s,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l);return L(o,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:s,classificationMethod:n,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function ua(e){const{attribute:a,features:l}=e,{field:t,radius:i,fieldOffset:r,transform:s,spatialReference:n,size:o}=a,u=X(l,s,n,o),{count:m,min:d,max:f,mean:c,stdDev:p}=aa(u,i,r,t,o[0],o[1]);return{count:m,min:d,max:f,avg:c,stddev:p}}export{la as classBreaks,ua as heatmapStatistics,ra as histogram,oa as summaryStatistics,sa as uniqueValues};