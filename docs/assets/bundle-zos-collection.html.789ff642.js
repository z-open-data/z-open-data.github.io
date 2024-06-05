import{_ as a,o as r,c as o,a as t,t as s,F as l,d as e,e as c}from"./app.53483c21.js";const i={},n=t("h1",{id:"create-historical-data-collections",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#create-historical-data-collections","aria-hidden":"true"},"#"),e(" Create historical data collections")],-1),h=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,[e("To ensure that ODP forwards attributes to Elastic as soon as you start collecting them, update the ODP collection configuration member "),t("code",null,"KAYOPEN"),e(),t("em",null,"before"),e(" creating the corresponding historical data collections.")])],-1),m=c("<table><thead><tr><th><code>table_name</code> field value</th><th>Attribute group</th><th>Collection interval (minutes)</th></tr></thead><tbody><tr><td>ascpuutil</td><td>Address Space CPU Utilization</td><td>1</td></tr><tr><td>km5msucap</td><td>KM5 License Manager MSU WLM Cap</td><td>5</td></tr><tr><td>km5wlmclpx</td><td>WLM Class Sysplex Metrics</td><td>1</td></tr><tr><td>km5wlmclrx</td><td>WLM Class Raw Extended Metrics</td><td>1</td></tr><tr><td>lpclust</td><td>LPAR Clusters</td><td>1</td></tr><tr><td>m5stgcdth</td><td>Common Storage Utilization History</td><td>5</td></tr><tr><td>m5stgdeth</td><td>KM5 Storage Details History</td><td>5</td></tr><tr><td>m5stgfdth</td><td>Real Storage Utilization History</td><td>5</td></tr><tr><td>mplxcpcsum</td><td>KM5 CPC Summary</td><td>1</td></tr><tr><td>mrptcls</td><td>Report Classes</td><td>1</td></tr><tr><td>syscpuutil</td><td>System CPU Utilization</td><td>1</td></tr></tbody></table>",1);function u(d,p){return r(),o(l,null,[n,h,t("p",null,"Create the following historical data collections for the "+s(d.$frontmatter.bundle)+" bundle:",1),m],64)}var f=a(i,[["render",u]]);export{f as default};