(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return g});var a=n(0),l=n.n(a),i=n(4),r=n.n(i),o=n(142),s=n.n(o);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var c=n(145),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(49);n.d(t,"parsePath",function(){return d.a});var m=l.a.createContext({}),g=function(e){return l.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},145:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},151:function(e,t,n){"use strict";var a=n(0),l=n.n(a),i=n(4),r=n.n(i),o=function(e){var t=e.children,n=e.fullWidth;return l.a.createElement("div",{className:["o-container",n?"o-container--full-width":""].join(" ").trim()},t)};o.defaultProps={fullWidth:!1},o.propTypes={children:r.a.node.isRequired,fullWidth:r.a.bool},t.a=o},152:function(e,t,n){"use strict";var a=n(181),l=n(0),i=n.n(l),r=n(4),o=n.n(r),s=n(182),c=n.n(s),u=n(143);function d(e){var t=e.description,n=e.lang,l=e.meta,r=e.keywords,o=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:o},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:a}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(l)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[],title:null},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string},t.a=d;var m="1025518380"},154:function(e,t,n){"use strict";var a=n(155),l=n(0),i=n.n(l),r=n(4),o=n.n(r),s=n(143),c=n(7),u=n.n(c),d=n(159),m=n.n(d),g=(n(32),function(e){var t=e.children,n=e.xs,a=e.sm,l=e.md,r=e.lg,o=e.xl,s=e.alignXs,c=e.alignSm,u=e.alignMd,d=e.alignLg,m=e.alignXl,g=e.alignContentXs,f=e.alignContentSm,p=e.alignContentMd,h=e.alignContentLg,y=e.alignContentXl,b=e.className,x=e.offsetXs,v=e.offsetSm,E=e.offsetMd,w=e.offsetLg,X=e.offsetXl,M=["o-col-xs-"+n,a?"o-col-sm-"+a:"",l?"o-col-md-"+l:"",r?"o-col-lg-"+r:"",o?"o-col-xl-"+o:"",x?"o-col-xs-offset-"+x:"",v?"o-col-sm-offset-"+v:"",E?"o-col-md-offset-"+E:"",w?"o-col-lg-offset-"+w:"",X?"o-col-xl-offset-"+X:"",s?"o-col-xs-align-self--"+s:"",c?"o-col-sm-align-self--"+c:"",u?"o-col-md-align-self--"+u:"",d?"o-col-lg-align-self--"+d:"",m?"o-col-xl-align-self--"+m:"",g?"o-col-xs-align-content--"+g:"",f?"o-col-sm-align-content--"+f:"",p?"o-col-md-align-content--"+p:"",h?"o-col-lg-align-content--"+h:"",y?"o-col-xl-align-content--"+y:""];return i.a.createElement("div",{className:b+" "+M.join(" ").replace("  "," ").trim()},t)});g.defaultProps={alignXs:null,alignSm:null,alignMd:null,alignLg:null,alignXl:null,alignContentXs:null,alignContentSm:null,alignContentMd:null,alignContentLg:null,alignContentXl:null,className:"",offsetXs:null,offsetSm:null,offsetMd:null,offsetLg:null,offsetXl:null,sm:null,md:null,lg:null,xl:null},g.propTypes={alignXs:o.a.string,alignSm:o.a.string,alignMd:o.a.string,alignLg:o.a.string,alignXl:o.a.string,alignContentXs:o.a.string,alignContentSm:o.a.string,alignContentMd:o.a.string,alignContentLg:o.a.string,alignContentXl:o.a.string,children:o.a.node.isRequired,className:o.a.string,offsetXs:o.a.number,offsetSm:o.a.number,offsetMd:o.a.number,offsetLg:o.a.number,offsetXl:o.a.number,xs:o.a.number.isRequired,sm:o.a.number,md:o.a.number,lg:o.a.number,xl:o.a.number};var f=g,p=n(151),h=function(e){var t=e.children,n=e.noGutter,a=e.alignXs,l=e.alignSm,r=e.alignMd,o=e.alignLg,s=e.alignXl,c=["o-grid",n?"o-grid--no-gutter":"",a?"o-grid-xs-align-items--"+a:"",l?"o-grid-sm-align-items--"+l:"",r?"o-grid-md-align-items--"+r:"",o?"o-grid-lg-align-items--"+o:"",s?"o-grid-xl-align-items--"+s:""];return i.a.createElement("div",{className:c.join(" ").replace("  "," ").trim()},t)};h.defaultProps={noGutter:!1,alignXs:null,alignSm:null,alignMd:null,alignLg:null,alignXl:null},h.propTypes={alignXs:o.a.string,alignSm:o.a.string,alignMd:o.a.string,alignLg:o.a.string,alignXl:o.a.string,children:o.a.node.isRequired,noGutter:o.a.bool};var y=h,b=n(179),x=n.n(b),v=function(e){var t=e.title,n=e.description;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h6",{align:"center",className:"mdc-typography--headline6 mdc-theme--secondary u-my--0"},t),i.a.createElement("p",{align:"center",className:"mdc-typography--body1 mdc-theme--secondary u-mt--8"},n))};v.propTypes={title:o.a.string.isRequired,description:o.a.string.isRequired};var E=v,w=function(e){function t(){var t;return(t=e.call(this)||this).state={size:1.7},t}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;m.a.get("https://bundlephobia.com/api/size?package=@idix/flexi").then(function(e){return e.data}).then(function(t){return e.setState({size:Math.floor(t.gzip/1e3*100)/100})})},n.render=function(){var e=this.state.size;return i.a.createElement("header",{className:"c-header mdc-theme--primary-bg"},i.a.createElement(p.a,{fullWidth:!0},i.a.createElement(y,null,i.a.createElement(f,{xs:12},i.a.createElement("p",{align:"center"},i.a.createElement(x.a,{role:"img","aria-label":"Flexi",width:252,height:96})),i.a.createElement("h6",{align:"center",className:"mdc-typography--headline6 mdc-theme--secondary"},"A mobile-first, lightweight flexbox grid system."))),i.a.createElement(y,{alignXs:"center"},i.a.createElement(f,{xs:12,md:4},i.a.createElement(E,{title:e+" kb",description:"minified and gzipped"})),i.a.createElement(f,{xs:12,md:4},i.a.createElement(E,{title:"Mobile-first, fluid & responsive",description:"with simple class modifiers"})),i.a.createElement(f,{xs:12,md:4},i.a.createElement(E,{title:"Based on Material Design",description:"using breakpoint-specific gutter sizes"}))),i.a.createElement(y,null,i.a.createElement(f,{xs:12,sm:6,alignContentXs:"center",className:"u-my--32"},i.a.createElement("a",{href:"https://github.com/idriesalbender/flexi/releases/latest",className:"mdc-button mdc-theme--secondary-bg"},i.a.createElement("span",{className:"mdc-button__label mdc-theme--on-secondary"},"Download flexi.min.css"))),i.a.createElement(f,{xs:12,sm:6,alignContentXs:"center",className:"u-my--32"},i.a.createElement("a",{href:"https://github.com/idriesalbender/flexi",className:"mdc-button mdc-button--outlined c-button--outlined"},i.a.createElement("span",{className:"mdc-button__label mdc-theme--on-primary"},"Check out on GitHub"))))))},t}(i.a.Component),X=(n(180),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,null),i.a.createElement("main",null,t))},data:a})});X.propTypes={children:o.a.node.isRequired};t.a=X},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Flexi"}}}}},158:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),l=n.n(a),i=n(4),r=n.n(i),o=n(68),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},179:function(e,t,n){var a=n(0);function l(e){return a.createElement("svg",e,a.createElement("path",{d:"M2.243 6.616v32.386h32.81v1.88H2.242V72H.315V4.688h39.203v1.928H2.243zM50.05 72V.552h1.88V72h-1.88zm40.429-1.927c3.604 0 6.933-.627 9.989-1.88 3.055-1.254 5.601-3.04 7.638-5.359l1.363 1.363c-2.319 2.507-5.116 4.434-8.39 5.782C97.805 71.326 94.272 72 90.48 72c-4.544 0-8.626-1.073-12.245-3.22-3.62-2.146-6.479-5.116-8.578-8.907-2.1-3.792-3.15-8.054-3.15-12.786 0-4.763 1.05-9.04 3.15-12.832 2.1-3.792 4.959-6.746 8.578-8.86 3.62-2.116 7.701-3.174 12.245-3.174s8.57 1.058 12.08 3.173 6.229 5.069 8.156 8.86c1.927 3.793 2.89 8.07 2.89 12.833H68.435c0 4.419.948 8.375 2.844 11.869 1.896 3.494 4.513 6.22 7.85 8.179 3.338 1.959 7.121 2.938 11.352 2.938zm0-45.924c6.11 0 11.062 1.927 14.854 5.781 3.791 3.855 5.907 8.931 6.345 15.23H68.575c.251-4.105 1.356-7.748 3.314-10.929 1.959-3.18 4.552-5.656 7.78-7.427 3.227-1.77 6.831-2.655 10.811-2.655zm47.857-1.41l35.924 35.924a2 2 0 0 1 .585 1.386l.14 9.909a2 2 0 0 1-2.028 2.028l-9.909-.14a2 2 0 0 1-1.386-.585L125.74 35.337a2 2 0 0 1-.585-1.386l-.079-5.577-.06-4.332a2 2 0 0 1 2.027-2.028l4.332.061 5.577.079a2 2 0 0 1 1.386.585zm30.066 18.455l-12.597-12.597 6.14-6.14c.187-.187.44-.294.705-.298L173.968 22A1.018 1.018 0 0 1 175 23.032l-.16 11.317c-.003.265-.11.518-.298.706l-6.139 6.14zM144.288 65.31l-6.233 6.233c-.188.188-.44.295-.706.299L126.032 72A1.018 1.018 0 0 1 125 70.968l.16-11.317c.003-.265.11-.518.298-.706l6.233-6.233 12.597 12.597zM187.974 72V22.221h1.928V72h-1.928zm.94-66.607c.721 0 1.324.243 1.81.729s.729 1.073.729 1.763c0 .626-.243 1.198-.729 1.715-.486.517-1.089.776-1.81.776-.626 0-1.198-.25-1.715-.752-.517-.501-.776-1.081-.776-1.74 0-.72.259-1.315.776-1.785s1.089-.706 1.715-.706z",fill:"#643C95",fillRule:"evenodd"}))}l.defaultProps={width:"192",height:"73",viewBox:"0 0 192 73"},e.exports=l,l.default=l},180:function(e,t,n){},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Flexi",description:"A mobile-first, lightweight Flexbox grid system.",author:"@idix"}}}}}}]);
//# sourceMappingURL=1-cf757f2670703f895cf6.js.map