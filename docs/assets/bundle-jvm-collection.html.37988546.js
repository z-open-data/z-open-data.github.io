import{_ as o,o as d,a as r,b as t,t as c,F as l,e,c as n}from"./app.8876b064.js";const s={},i=t("h1",{id:"create-historical-data-collections",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#create-historical-data-collections","aria-hidden":"true"},"#"),e(" Create historical data collections")],-1),h=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,[e("To ensure that ODP forwards attributes to Elastic as soon as you start collecting them, update the ODP collection configuration member "),t("code",null,"KAYOPEN"),e(),t("em",null,"before"),e(" creating the corresponding historical data collections.")])],-1),m=n("<table><thead><tr><th><code>table_name</code> field value</th><th>Attribute group</th><th>Collection interval (minutes)</th></tr></thead><tbody><tr><td>cpu</td><td>JVM CPU</td><td>1</td></tr><tr><td>gcsumm</td><td>JVM Garbage Collection</td><td>1</td></tr><tr><td>health</td><td>JVM Health Summary</td><td>1</td></tr><tr><td>natmem</td><td>JVM Native Memory</td><td>1</td></tr><tr><td>zcsumm</td><td>JVM zOSConnect Summary</td><td>1</td></tr><tr><td>zosmem</td><td>JVM Virtual Memory</td><td>1</td></tr></tbody></table>",1);function u(a,b){return d(),r(l,null,[i,h,t("p",null,"Create the following historical data collections for the "+c(a.$frontmatter.bundle)+" bundle:",1),m],64)}var p=o(s,[["render",u]]);export{p as default};
