import"./index.768d9708.js";class g{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function h(t,e){if(!t)throw e=e||"assert",console.log(new Error(e).stack),new g(e)}function m(t,e,f,n){let r,o=(f[0]-t[0])/e[0],s=(n[0]-t[0])/e[0];o>s&&(r=o,o=s,s=r);let c=(f[1]-t[1])/e[1],i=(n[1]-t[1])/e[1];if(c>i&&(r=c,c=i,i=r),o>i||c>s)return!1;c>o&&(o=c),i<s&&(s=i);let l=(f[2]-t[2])/e[2],u=(n[2]-t[2])/e[2];return l>u&&(r=l,l=u,u=r),!(o>u||l>s)&&(u<s&&(s=u),!(s<0))}export{m as c,h as e};
