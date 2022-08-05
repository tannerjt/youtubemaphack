import{cb as gt,t as Q,h as Mt,s as xt,e as z,q as yt,aZ as ft,ap as kt,cv as It,d9 as At,r as bt}from"./index.768d9708.js";import{i as at,u as $}from"./pixelUtils.ecb888d5.js";const W=new Map;W.set("meter-per-second",1),W.set("kilometer-per-hour",.277778),W.set("knots",.514444),W.set("feet-per-second",.3048),W.set("mile-per-hour",.44704);const ot=180/Math.PI,st=5,tt=new gt({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function it(t,n){return W.get(t)/W.get(n)||1}function ut(t){return(450-t)%360}function dt(t,n="geographic"){const[o,l]=t,s=Math.sqrt(o*o+l*l);let a=Math.atan2(l,o)*ot;return a=(360+a)%360,n==="geographic"&&(a=ut(a)),[s,a]}function mt(t,n="geographic"){let o=t[1];n==="geographic"&&(o=ut(o)),o%=360;const l=t[0];return[l*Math.cos(o/ot),l*Math.sin(o/ot)]}function Ct(t,n,o,l="geographic"){if(!at(t)||Q(o))return t;const s=n==="vector-magdir"?t.clone():Mt(lt(t,n)),a=s.pixels[1];for(let d=0;d<a.length;d++)a[d]=l==="geographic"?(a[d]+o[d]+270)%360:(a[d]+360-o[d])%360;return n==="vector-magdir"?s:lt(s,"vector-magdir")}function lt(t,n,o="geographic",l=1){if(!at(t))return t;const{pixels:s,width:a,height:d}=t,h=a*d,c=s[0],e=s[1],r=t.pixelType.startsWith("f")?t.pixelType:"f32",i=$.createEmptyBand(r,h),m=$.createEmptyBand(r,h);let u=0;for(let I=0;I<d;I++)for(let y=0;y<a;y++)n==="vector-uv"?([i[u],m[u]]=dt([c[u],e[u]],o),i[u]*=l):([i[u],m[u]]=mt([c[u],e[u]],o),i[u]*=l,m[u]*=l),u++;const M=new $({pixelType:r,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[i,m]});return M.updateStatistics(),M}function Ht(t,n,o=1){if(o===1||!at(t))return t;const l=t.clone(),{pixels:s,width:a,height:d}=l,h=s[0],c=s[1];let e=0;for(let r=0;r<d;r++)for(let i=0;i<a;i++)n==="vector-uv"?(h[e]*=o,c[e]*=o):h[e]*=o,e++;return l.updateStatistics(),l}function Kt(t,n,o,l,s){if(Q(s)||!s.spatialReference.equals(t.spatialReference))return{extent:t,width:Math.round(n/l),height:Math.round(o/l),resolution:t.width/n};const a=s.xmin,d=s.ymax,h=(t.xmax-t.xmin)/n*l,c=(t.ymax-t.ymin)/o*l,e=(h+c)/2;return t.xmin=a+Math.floor((t.xmin-a)/h)*h,t.xmax=a+Math.ceil((t.xmax-a)/h)*h,t.ymin=d+Math.floor((t.ymin-d)/c)*c,t.ymax=d+Math.ceil((t.ymax-d)/c)*c,{extent:t,width:Math.round(t.width/h),height:Math.round(t.height/c),resolution:e}}const nt=Pt(0,0,0);function Pt(t=0,n=0,o=Math.PI,l=!0){l&&(o=(2*Math.PI-o)%(2*Math.PI));const s=l?-1:1,a=13*s,d=-7*s,h=-2*s,c=-16*s,e=21.75,[r,i]=L(0,n+a,o,e),[m,u]=L(t-5.5,n+d,o,e),[M,I]=L(t+5.5,n+d,o,e),[y,b]=L(t-1.5,n+h,o,e),[k,g]=L(t+1.5,n+h,o,e),[w,f]=L(t-1.5,n+c,o,e),[p,P]=L(t+1.5,n+c,o,e);return[r,i,m,u,y,b,k,g,M,I,w,f,p,P]}function vt(t=0,n=Math.PI,o=!0){o&&(n=(2*Math.PI-n)%(2*Math.PI));const l=10,s=o?-1:1,a=5*s,d=20*s,h=25*s,c=45,e=0,r=0,i=2,m=0,u=i*s;let[M,I]=[e+l/2,r-d],[y,b]=[M+i,I],[k,g]=[y-m,b+u],[w,f]=[e-l/2,r-h],[p,P]=[w+m,f-u],x=Math.ceil(t/st),A=Math.floor(x/10);x-=8*A;const D=[],V=[];for(let N=0;N<x/2;N++,A--){A<=0&&x%2==1&&N===(x-1)/2&&(w=e,p=w+m,f=(f+I)/2,P=f-u);const[E,H]=L(w,f,n,c);if(A>0){const[C,X]=L(y,f,n,c),[Z,G]=L(M,I,n,c);D.push(C),D.push(X),D.push(E),D.push(H),D.push(Z),D.push(G)}else{const[C,X]=L(y,b,n,c),[Z,G]=L(k,g,n,c),[et,q]=L(p,P,n,c);V.push(E),V.push(H),V.push(et),V.push(q),V.push(Z),V.push(G),V.push(C),V.push(X)}f+=a,I+=a,b+=a,g+=a,P+=a}const[_,B]=L(e+l/2,r+d,n,c),T=l/2+i,[v,F]=L(e+T,r+d,n,c),[S,U]=L(e+l/2,r-h,n,c),[R,j]=L(e+T,r-h,n,c);return{pennants:D,barbs:V,shaft:[_,B,v,F,S,U,R,j]}}function L(t,n,o,l=1){const s=Math.sqrt(t*t+n*n)/l,a=(2*Math.PI+Math.atan2(n,t))%(2*Math.PI);return[s,(2*Math.PI+a-o)%(2*Math.PI)]}const Y=[0,1,3,6,10,16,21,27,33,40,47,55,63],Ft=[0,.5,1,1.5,2],St=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function K(t,n,o,l){const s=it(l||"knots",o);let a;for(a=1;a<n.length;a++)if(a===n.length-1){if(t<n[a]*s)break}else if(t<=n[a]*s)break;return Math.min(a-1,n.length-2)}function Dt(t,n,o,l,s){let a=0;switch(n){case"beaufort_kn":a=K(t,Y,"knots",o);break;case"beaufort_km":a=K(t,Y,"kilometer-per-hour",o);break;case"beaufort_ft":a=K(t,Y,"feet-per-second",o);break;case"beaufort_m":a=K(t,Y,"meter-per-second",o);break;case"classified_arrow":a=K(t,s,l,o);break;case"ocean_current_m":a=K(t,Ft,"meter-per-second",o);break;case"ocean_current_kn":a=K(t,St,"knots",o)}return a}function Vt(t,n){const{style:o,inputUnit:l,outputUnit:s,breakValues:a}=n,d=tt.fromJSON(l),h=tt.fromJSON(s),c=7*6,e=15;let r=0,i=0;const{width:m,height:u,mask:M}=t,I=t.pixels[0],y=t.pixels[1],b=M?M.filter(w=>w>0).length:m*u,k=new Float32Array(b*c),g=new Uint32Array(e*b);for(let w=0;w<u;w++)for(let f=0;f<m;f++){const p=w*m+f;if(!M||M[w*m+f]){const P=(y[p]+360)%360/180*Math.PI,x=Dt(I[p],o,d,h,a);for(let D=0;D<nt.length;D+=2)k[r++]=(f+.5)/m,k[r++]=(w+.5)/u,k[r++]=nt[D],k[r++]=nt[D+1]+P,k[r++]=x,k[r++]=I[p];const A=7*(r/c-1);g[i++]=A,g[i++]=A+1,g[i++]=A+2,g[i++]=A+0,g[i++]=A+4,g[i++]=A+3,g[i++]=A+0,g[i++]=A+2,g[i++]=A+3,g[i++]=A+2,g[i++]=A+5,g[i++]=A+3,g[i++]=A+5,g[i++]=A+6,g[i++]=A+3}}return{vertexData:k,indexData:g}}const rt=[];function Ut(t,n){if(rt.length===0)for(let u=0;u<30;u++)rt.push(vt(5*u,0));const o=it(tt.fromJSON(n.inputUnit),"knots"),{width:l,height:s,mask:a}=t,d=t.pixels[0],h=t.pixels[1],c=6,e=[],r=[];let i=0,m=0;for(let u=0;u<s;u++)for(let M=0;M<l;M++){const I=u*l+M,y=d[I]*o;if((!a||a[u*l+M])&&y>=st){const b=(h[I]+360)%360/180*Math.PI,{pennants:k,barbs:g,shaft:w}=rt[Math.min(Math.floor(y/5),29)];if(k.length+g.length===0)continue;let f=e.length/c;const p=(M+.5)/l,P=(u+.5)/s;for(let x=0;x<k.length;x+=2)e[i++]=p,e[i++]=P,e[i++]=k[x],e[i++]=k[x+1]+b,e[i++]=0,e[i++]=y;for(let x=0;x<g.length;x+=2)e[i++]=p,e[i++]=P,e[i++]=g[x],e[i++]=g[x+1]+b,e[i++]=0,e[i++]=y;for(let x=0;x<w.length;x+=2)e[i++]=p,e[i++]=P,e[i++]=w[x],e[i++]=w[x+1]+b,e[i++]=0,e[i++]=y;for(let x=0;x<k.length/6;x++)r[m++]=f,r[m++]=f+1,r[m++]=f+2,f+=3;for(let x=0;x<g.length/8;x++)r[m++]=f,r[m++]=f+1,r[m++]=f+2,r[m++]=f+1,r[m++]=f+2,r[m++]=f+3,f+=4;r[m++]=f+0,r[m++]=f+1,r[m++]=f+2,r[m++]=f+1,r[m++]=f+3,r[m++]=f+2,f+=4}}return{vertexData:new Float32Array(e),indexData:new Uint32Array(r)}}function _t(t,n){let l=0,s=0;const{width:a,height:d,mask:h}=t,c=t.pixels[0],e=[],r=[],i=it(tt.fromJSON(n.inputUnit),"knots"),m=n.style==="wind_speed"?st:Number.MAX_VALUE;for(let u=0;u<d;u++)for(let M=0;M<a;M++){const I=c[u*a+M]*i;if((!h||h[u*a+M])&&I<m){for(let b=0;b<4;b++)e[l++]=(M+.5)/a,e[l++]=(u+.5)/d,e[l++]=b<2?-.5:.5,e[l++]=b%2==0?-.5:.5,e[l++]=0,e[l++]=I;const y=4*(l/24-1);r[s++]=y,r[s++]=y+1,r[s++]=y+2,r[s++]=y+1,r[s++]=y+2,r[s++]=y+3}}return{vertexData:new Float32Array(e),indexData:new Uint32Array(r)}}function Wt(t,n){return n.style==="simple_scalar"?_t(t,n):n.style==="wind_speed"?Ut(t,n):Vt(t,n)}function zt(t,n,o,l=[0,0],s=.5){const{width:a,height:d,mask:h}=t,[c,e]=t.pixels,[r,i]=l,m=Math.round((a-r)/o),u=Math.round((d-i)/o),M=m*u,I=new Float32Array(M),y=new Float32Array(M),b=new Uint8Array(M),k=n==="vector-uv";for(let w=0;w<u;w++)for(let f=0;f<m;f++){let p=0;const P=w*m+f,x=Math.max(0,w*o+i),A=Math.max(0,f*o+r),D=Math.min(d,x+o),V=Math.min(a,A+o);for(let _=x;_<D;_++)for(let B=A;B<V;B++){const T=_*a+B;if(!h||h[T]){p++;const v=k?[c[T],e[T]]:[c[T],(360+e[T])%360],[F,S]=k?v:mt(v);I[P]+=F,y[P]+=S}}if(p>=(D-x)*(V-A)*(1-s)){b[P]=1;const[_,B]=dt([I[P]/p,y[P]/p]);I[P]=_,y[P]=B}else b[P]=0,I[P]=0,y[P]=0}const g=new $({width:m,height:u,pixels:[I,y],mask:b});return g.updateStatistics(),g}const J=xt.getLogger("esri.views.2d.engine.flow.dataUtils"),qt=10;async function Xt(t,n,o,l){const s=performance.now(),a=Lt(n,o),d=performance.now(),h=Tt(n,a,o.width,o.height),c=performance.now(),e=Bt(h,!0),r=performance.now(),i=t==="Streamlines"?Rt(e,qt):Et(e),m=performance.now();return z("esri-2d-profiler")&&(J.info("I.1","_createFlowFieldFromData (ms)",Math.round(d-s)),J.info("I.2","_getStreamlines (ms)",Math.round(c-d)),J.info("I.3","createAnimatedLinesData (ms)",Math.round(r-c)),J.info("I.4","create{Streamlines|Particles}Mesh (ms)",Math.round(m-r)),J.info("I.5","createFlowMesh (ms)",Math.round(m-s)),J.info("I.6","Mesh size (bytes)",i.vertexData.buffer.byteLength+i.indexData.buffer.byteLength)),await Promise.resolve(),yt(l),i}function Lt(t,n){const o=Nt(n.data,n.width,n.height,t.smoothing);return t.interpolate?(l,s)=>{const a=Math.floor(l),d=Math.floor(s);if(a<0||a>=n.width)return[0,0];if(d<0||d>=n.height)return[0,0];const h=l-a,c=s-d,e=a,r=d,i=a<n.width-1?a+1:a,m=d<n.height-1?d+1:d,u=o[2*(r*n.width+e)],M=o[2*(r*n.width+i)],I=o[2*(m*n.width+e)],y=o[2*(m*n.width+i)],b=o[2*(r*n.width+e)+1],k=o[2*(r*n.width+i)+1];return[(u*(1-c)+I*c)*(1-h)+(M*(1-c)+y*c)*h,(b*(1-c)+o[2*(m*n.width+e)+1]*c)*(1-h)+(k*(1-c)+o[2*(m*n.width+i)+1]*c)*h]}:(l,s)=>{const a=Math.round(l),d=Math.round(s);return a<0||a>=n.width||d<0||d>=n.height?[0,0]:[o[2*(d*n.width+a)+0],o[2*(d*n.width+a)+1]]}}function Ot(t,n,o,l,s,a,d,h,c){const e=[];let r=o,i=l,m=0,[u,M]=n(r,i);u*=t.velocityScale,M*=t.velocityScale;const I=Math.sqrt(u*u+M*M);let y,b;e.push({x:r,y:i,t:m,speed:I});for(let k=0;k<t.verticesPerLine;k++){let[g,w]=n(r,i);g*=t.velocityScale,w*=t.velocityScale;const f=Math.sqrt(g*g+w*w);if(f<t.minSpeedThreshold)return e;const p=g/f,P=w/f;if(r+=p*t.segmentLength,i+=P*t.segmentLength,m+=t.segmentLength/f,Math.acos(p*y+P*b)>t.maxTurnAngle)return e;if(t.collisions){const x=Math.round(r*c),A=Math.round(i*c);if(x<0||x>d-1||A<0||A>h-1)return e;const D=a[A*d+x];if(D!==-1&&D!==s)return e;a[A*d+x]=s}e.push({x:r,y:i,t:m,speed:f}),y=p,b=P}return e}function Tt(t,n,o,l){const s=[],a=new ft,d=1/Math.max(t.lineCollisionWidth,1),h=Math.round(o*d),c=Math.round(l*d),e=new Int32Array(h*c);for(let i=0;i<e.length;i++)e[i]=-1;const r=[];for(let i=0;i<l;i+=t.lineSpacing)for(let m=0;m<o;m+=t.lineSpacing)r.push({x:m,y:i,sort:a.getFloat()});r.sort((i,m)=>i.sort-m.sort);for(const{x:i,y:m}of r)if(a.getFloat()<t.density){const u=Ot(t,n,i,m,s.length,e,h,c,d);if(u.length<2)continue;s.push(u)}return s}function Nt(t,n,o,l){if(l===0)return t;const s=Math.round(3*l),a=new Array(2*s+1);let d=0;for(let e=-s;e<=s;e++){const r=Math.exp(-e*e/(l*l));a[e+s]=r,d+=r}for(let e=-s;e<=s;e++)a[e+s]/=d;const h=new Float32Array(t.length);for(let e=0;e<o;e++)for(let r=0;r<n;r++){let i=0,m=0;for(let u=-s;u<=s;u++){if(r+u<0||r+u>=n)continue;const M=a[u+s];i+=M*t[2*(e*n+(r+u))+0],m+=M*t[2*(e*n+(r+u))+1]}h[2*(e*n+r)+0]=i,h[2*(e*n+r)+1]=m}const c=new Float32Array(t.length);for(let e=0;e<n;e++)for(let r=0;r<o;r++){let i=0,m=0;for(let u=-s;u<=s;u++){if(r+u<0||r+u>=o)continue;const M=a[u+s];i+=M*h[2*((r+u)*n+e)+0],m+=M*h[2*((r+u)*n+e)+1]}c[2*(r*n+e)+0]=i,c[2*(r*n+e)+1]=m}return c}function Bt(t,n){const o=new ft,l=t.reduce((c,e)=>c+e.length,0),s=new Float32Array(4*l),a=new Array(t.length);let d=0,h=0;for(const c of t){const e=d;for(const r of c)s[4*d+0]=r.x,s[4*d+1]=r.y,s[4*d+2]=r.t,s[4*d+3]=r.speed,d++;a[h++]={startVertex:e,numberOfVertices:c.length,totalTime:c[c.length-1].t,timeSeed:n?o.getFloat():0}}return{lineVertices:s,lineDescriptors:a}}function Rt(t,n){const{lineVertices:l,lineDescriptors:s}=t;let a=0,d=0;for(const u of s)a+=2*u.numberOfVertices,d+=6*(u.numberOfVertices-1);const h=new Float32Array(a*9),c=new Uint32Array(d);let e=0,r=0;function i(){c[r++]=e-2,c[r++]=e,c[r++]=e-1,c[r++]=e,c[r++]=e+1,c[r++]=e-1}function m(u,M,I,y,b,k,g,w){const f=e*9;let p=0;h[f+p++]=u,h[f+p++]=M,h[f+p++]=1,h[f+p++]=I,h[f+p++]=k,h[f+p++]=g,h[f+p++]=y/2,h[f+p++]=b/2,h[f+p++]=w,e++,h[f+p++]=u,h[f+p++]=M,h[f+p++]=-1,h[f+p++]=I,h[f+p++]=k,h[f+p++]=g,h[f+p++]=-y/2,h[f+p++]=-b/2,h[f+p++]=w,e++}for(const u of s){const{totalTime:M,timeSeed:I}=u;let y=null,b=null,k=null,g=null,w=null,f=null;for(let p=0;p<u.numberOfVertices;p++){const P=l[4*(u.startVertex+p)+0],x=l[4*(u.startVertex+p)+1],A=l[4*(u.startVertex+p)+2],D=l[4*(u.startVertex+p)+3];let V=null,_=null,B=null,T=null;if(p>0){V=P-y,_=x-b;const v=Math.sqrt(V*V+_*_);if(V/=v,_/=v,p>1){let F=V+w,S=_+f;const U=Math.sqrt(F*F+S*S);F/=U,S/=U;const R=Math.min(1/(F*V+S*_),n);F*=R,S*=R,B=-S,T=F}else B=-_,T=V;B!==null&&T!==null&&(m(y,b,k,B,T,M,I,D),i())}y=P,b=x,k=A,w=V,f=_,g=D}m(y,b,k,-f,w,M,I,g)}return{vertexData:h,indexData:c}}function Et(t){const{lineVertices:s,lineDescriptors:a}=t;let d=0,h=0;for(const v of a){const F=v.numberOfVertices-1;d+=4*F*2,h+=6*F*2}const c=new Float32Array(d*16),e=new Uint32Array(h);let r,i,m,u,M,I,y,b,k,g,w,f,p,P,x=0,A=0;function D(){e[A++]=x-8,e[A++]=x-7,e[A++]=x-6,e[A++]=x-7,e[A++]=x-5,e[A++]=x-6,e[A++]=x-4,e[A++]=x-3,e[A++]=x-2,e[A++]=x-3,e[A++]=x-1,e[A++]=x-2}function V(v,F,S,U,R,j,N,E,H,C,X,Z,G,et){const q=x*16;let O=0;for(const pt of[1,2])for(const wt of[1,2,3,4])c[q+O++]=v,c[q+O++]=F,c[q+O++]=S,c[q+O++]=U,c[q+O++]=N,c[q+O++]=E,c[q+O++]=H,c[q+O++]=C,c[q+O++]=pt,c[q+O++]=wt,c[q+O++]=G,c[q+O++]=et,c[q+O++]=R/2,c[q+O++]=j/2,c[q+O++]=X/2,c[q+O++]=Z/2,x++}function _(v,F){let S=k+w,U=g+f;const R=Math.sqrt(S*S+U*U);S/=R,U/=R;const j=k*S+g*U;S/=j,U/=j;let N=w+p,E=f+P;const H=Math.sqrt(N*N+E*E);N/=H,E/=H;const C=w*N+f*E;N/=C,E/=C,V(r,i,m,u,-U,S,M,I,y,b,-E,N,v,F),D()}function B(v,F,S,U,R,j){if(k=w,g=f,w=p,f=P,k==null&&g==null&&(k=w,g=f),M!=null&&I!=null){p=v-M,P=F-I;const N=Math.sqrt(p*p+P*P);p/=N,P/=N}k!=null&&g!=null&&_(R,j),r=M,i=I,m=y,u=b,M=v,I=F,y=S,b=U}function T(v,F){k=w,g=f,w=p,f=P,k==null&&g==null&&(k=w,g=f),k!=null&&g!=null&&_(v,F)}for(const v of a){r=null,i=null,m=null,u=null,M=null,I=null,y=null,b=null,k=null,g=null,w=null,f=null,p=null,P=null;const{totalTime:F,timeSeed:S}=v;for(let U=0;U<v.numberOfVertices;U++)B(s[4*(v.startVertex+U)+0],s[4*(v.startVertex+U)+1],s[4*(v.startVertex+U)+2],s[4*(v.startVertex+U)+3],F,S);T(F,S)}return{vertexData:c,indexData:e}}function ct(t,n){const o=n.pixels,{width:l,height:s}=n,a=new Float32Array(l*s*2),d=n.mask||new Uint8Array(l*s*2);if(n.mask||d.fill(255),t==="vector-uv")for(let h=0;h<l*s;h++)a[2*h+0]=o[0][h],a[2*h+1]=-o[1][h];else if(t==="vector-magdir")for(let h=0;h<l*s;h++){const c=o[0][h],e=At(o[1][h]),r=Math.cos(e-Math.PI/2),i=Math.sin(e-Math.PI/2);a[2*h+0]=r*c,a[2*h+1]=i*c}return{data:a,mask:d,width:l,height:s}}async function Zt(t,n,o,l,s,a){const d=performance.now(),h=kt(n.spatialReference);if(!h){const w=await ht(t,n,o,l,s,a);return z("esri-2d-profiler")&&J.info("I.7","loadImagery, early exit (ms)",Math.round(performance.now()-d)),z("esri-2d-profiler")&&J.info("I.9","Number of parts",1),w}const[c,e]=h.valid,r=e-c,i=Math.ceil(n.width/r),m=n.width/i,u=Math.round(o/i);let M=n.xmin;const I=[],y=performance.now();for(let w=0;w<i;w++){const f=new It({xmin:M,xmax:M+m,ymin:n.ymin,ymax:n.ymax,spatialReference:n.spatialReference});I.push(ht(t,f,u,l,s,a)),M+=m}const b=await Promise.all(I);z("esri-2d-profiler")&&J.info("I.8","All calls to _fetchPart (ms)",Math.round(performance.now()-y)),z("esri-2d-profiler")&&J.info("I.9","Number of parts",b.length);const k={data:new Float32Array(o*l*2),mask:new Uint8Array(o*l),width:o,height:l};let g=0;for(const w of b){for(let f=0;f<w.height;f++)for(let p=0;p<w.width;p++)g+p>=o||(k.data[2*(f*o+g+p)+0]=w.data[2*(f*w.width+p)+0],k.data[2*(f*o+g+p)+1]=w.data[2*(f*w.width+p)+1],k.mask[f*o+g+p]=w.mask[f*w.width+p]);g+=w.width}return z("esri-2d-profiler")&&J.info("I.10","loadImagery, general exit (ms)",Math.round(performance.now()-d)),k}async function ht(t,n,o,l,s,a){const d={requestProjectedLocalDirections:!0,signal:a};if(bt(s)&&(d.timeExtent=s),t.type==="imagery"){await t.load({signal:a});const e=t.rasterInfo.dataType,r=await t.fetchImage(n,o,l,d);return!r||Q(r.pixelData)||Q(r.pixelData.pixelBlock)?{data:new Float32Array(o*l*2),mask:new Uint8Array(o*l),width:o,height:l}:ct(e,r.pixelData.pixelBlock)}await t.load({signal:a});const h=t.rasterInfo.dataType,c=await t.fetchPixels(n,o,l,d);return!c||Q(c.pixelBlock)?{data:new Float32Array(o*l*2),mask:new Uint8Array(o*l),width:o,height:l}:ct(h,c.pixelBlock)}export{Wt as D,zt as F,Kt as M,_t as S,Zt as a,dt as b,Ht as d,tt as h,it as l,lt as m,Ct as p,Xt as u};
