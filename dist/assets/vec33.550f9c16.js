import{s as O}from"./index.768d9708.js";const j=O.getLogger("esri.views.3d.support.buffer.math");function z(t,r,e){if(t.count!==r.count)return void j.error("source and destination buffers need to have the same number of elements");const s=t.count,n=e[0],f=e[1],c=e[2],i=e[4],o=e[5],u=e[6],d=e[8],p=e[9],l=e[10],y=e[12],B=e[13],M=e[14],g=t.typedBuffer,h=t.typedBufferStride,m=r.typedBuffer,v=r.typedBufferStride;for(let a=0;a<s;a++){const S=a*h,b=a*v,_=m[b],x=m[b+1],I=m[b+2];g[S]=n*_+i*x+d*I+y,g[S+1]=f*_+o*x+p*I+B,g[S+2]=c*_+u*x+l*I+M}}function P(t,r,e){if(t.count!==r.count)return void j.error("source and destination buffers need to have the same number of elements");const s=t.count,n=e[0],f=e[1],c=e[2],i=e[3],o=e[4],u=e[5],d=e[6],p=e[7],l=e[8],y=t.typedBuffer,B=t.typedBufferStride,M=r.typedBuffer,g=r.typedBufferStride;for(let h=0;h<s;h++){const m=h*B,v=h*g,a=M[v],S=M[v+1],b=M[v+2];y[m]=n*a+i*S+d*b,y[m+1]=f*a+o*S+p*b,y[m+2]=c*a+u*S+l*b}}function T(t,r,e){const s=Math.min(t.count,r.count),n=t.typedBuffer,f=t.typedBufferStride,c=r.typedBuffer,i=r.typedBufferStride;for(let o=0;o<s;o++){const u=o*f,d=o*i;n[u]=e*c[d],n[u+1]=e*c[d+1],n[u+2]=e*c[d+2]}}function $(t,r){const e=Math.min(t.count,r.count),s=t.typedBuffer,n=t.typedBufferStride,f=r.typedBuffer,c=r.typedBufferStride;for(let i=0;i<e;i++){const o=i*n,u=i*c,d=f[u],p=f[u+1],l=f[u+2],y=d*d+p*p+l*l;if(y>0){const B=1/Math.sqrt(y);s[o]=B*d,s[o+1]=B*p,s[o+2]=B*l}}}function q(t,r,e){const s=Math.min(t.count,r.count),n=t.typedBuffer,f=t.typedBufferStride,c=r.typedBuffer,i=r.typedBufferStride;for(let o=0;o<s;o++){const u=o*f,d=o*i;n[u]=c[d]>>e,n[u+1]=c[d+1]>>e,n[u+2]=c[d+2]>>e}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:z,transformMat3:P,scale:T,normalize:$,shiftRight:q},Symbol.toStringTag,{value:"Module"}));function w(t,r,e){const s=t.typedBuffer,n=t.typedBufferStride,f=r.typedBuffer,c=r.typedBufferStride,i=e?e.count:r.count;let o=(e&&e.dstIndex?e.dstIndex:0)*n,u=(e&&e.srcIndex?e.srcIndex:0)*c;for(let d=0;d<i;++d)s[o]=f[u],s[o+1]=f[u+1],s[o+2]=f[u+2],o+=n,u+=c}function L(t,r,e,s,n){var u,d;const f=t.typedBuffer,c=t.typedBufferStride,i=(u=n==null?void 0:n.count)!=null?u:t.count;let o=((d=n==null?void 0:n.dstIndex)!=null?d:0)*c;for(let p=0;p<i;++p)f[o]=r,f[o+1]=e,f[o+2]=s,o+=c}Object.freeze(Object.defineProperty({__proto__:null,copy:w,fill:L},Symbol.toStringTag,{value:"Module"}));export{j as a,L as b,w as e,T as f,q as n,$ as o,P as r,z as t};
