import{_ as o,o as d,a as r,b as t,t as c,F as l,e,c as s}from"./app.2297d7a5.js";const n={},i=t("h1",{id:"create-historical-data-collections",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#create-historical-data-collections","aria-hidden":"true"},"#"),e(" Create historical data collections")],-1),h=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,[e("To ensure that ODP forwards attributes to Elastic as soon as you start collecting them, update the ODP collection configuration member "),t("code",null,"KAYOPEN"),e(),t("em",null,"before"),e(" creating the corresponding historical data collections.")])],-1),u=s("<table><thead><tr><th><code>table_name</code> field value</th><th>Attribute group</th><th>Collection interval (minutes)</th></tr></thead><tbody><tr><td>cache_cu</td><td>S3 Cache Control Unit</td><td>15</td></tr><tr><td>dasd_summ</td><td>S3 Volume Group Summary</td><td>15</td></tr><tr><td>dasdspac</td><td>S3 DASD Volume Space</td><td>15</td></tr><tr><td>hsm_actvty</td><td>S3 HSM Function Summary</td><td>1</td></tr><tr><td>hsm_cds</td><td>S3 HSM CDS</td><td>1</td></tr><tr><td>lcu</td><td>S3 Logical Control Unit</td><td>15</td></tr></tbody></table>",1);function m(a,_){return d(),r(l,null,[i,h,t("p",null,"Create the following historical data collections for the "+c(a.$frontmatter.bundle)+" bundle:",1),u],64)}var S=o(n,[["render",m]]);export{S as default};
