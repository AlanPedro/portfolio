(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Dtc0:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return k}));var n=a("mwIZ"),r=a.n(n),l=a("q1tI"),i=a.n(l),c=a("eNIv"),s=a("6uTu"),m=a("STHm"),o=function(e){var t=e.about;return i.a.createElement(m.a,{title:"About Me"},i.a.createElement("div",{className:"mb-6"},i.a.createElement("p",null,t)))},u=a("Wbzz"),d=a("hbLQ"),p=function(e){var t=e.posts;return i.a.createElement(m.a,{title:"Project Showcase"},t.map((function(e){return i.a.createElement(d.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})),t.length>=5&&i.a.createElement(u.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/projects"},"View all posts →"))},f=function(e){var t=e.experience;return t.length?i.a.createElement(m.a,{title:"Experience"},t.map((function(e){return i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},E=function(e){var t=e.skills;return i.a.createElement(m.a,{title:"Skills"},t.map((function(e){return i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description})})))},v=a("ivnd"),k=(t.default=function(e){var t=e.data,a=r()(t,"site.siteMetadata.about",!1),n=t.allMarkdownRemark.edges,l=r()(t,"site.siteMetadata.experience",!1),m=r()(t,"site.siteMetadata.skills",!1),u=!n||!n.length;return i.a.createElement(s.a,null,i.a.createElement(v.a,null),i.a.createElement(c.a,{metadata:t.site.siteMetadata,noProjects:u}),a&&i.a.createElement(o,{about:a}),l&&l.length&&i.a.createElement(f,{experience:l}),!u&&i.a.createElement(p,{posts:n}),m&&m.length&&i.a.createElement(E,{skills:m}))},"3338126465")},STHm:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l="block pt-12 md:flex",i="pb-6 md:w-full md:max-w-150 md:p-0",c="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",s="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return r.a.createElement("div",{className:l},r.a.createElement("div",{className:i},r.a.createElement("h2",{className:c},t)),r.a.createElement("div",{className:s},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),l=a.n(r),i="mb-6",c="font-semibold text-gray-900 pb-1",s="text-md text-gray-600 font-light";t.a=function(e){var t,a=e.name,r=e.description,m=e.link,o=void 0!==m&&m,u=e.internal;return t=void 0!==u&&u?l.a.createElement(n.Link,{to:o},a):l.a.createElement("a",{href:o},a),l.a.createElement("div",{className:i},l.a.createElement("h3",{className:c+" "+(o?"hover:underline hover:text-black":"")},o?t:a),l.a.createElement("p",{className:s},r))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-5143e1f45f7b88d9254c.js.map