import{ck as o,aN as s,bn as c,cl as i}from"./index.768d9708.js";async function a(t){const n=t.spatialReference;if(n.isWGS84)return t.clone();if(n.isWebMercator)return o(t);const e=s.WGS84;return await c(n,e),i(t,e)}function u(t,n){if(!f(t,n)){const e=t.typeKeywords;e?e.push(n):t.typeKeywords=[n]}}function f(t,n){var e;return!!((e=t.typeKeywords)!=null&&e.includes(n))}function p(t,n){const e=t.typeKeywords;if(e){const r=e.indexOf(n);r>-1&&e.splice(r,1)}}async function y(t){const n=t.clone().normalize();let e;if(n.length>1)for(const r of n)e?r.width>e.width&&(e=r):e=r;else e=n[0];return a(e)}const A={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"};export{y as a,p as c,A as f,u as i,f as s};
