import{_ as r,o as a,c as o,a as t,t as s,F as l,d as e,e as n}from"./app.0ce3043f.js";const c={},i=t("h1",{id:"create-historical-data-collections",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#create-historical-data-collections","aria-hidden":"true"},"#"),e(" Create historical data collections")],-1),h=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,[e("To ensure that ODP forwards attributes to Elastic as soon as you start collecting them, update the ODP collection configuration member "),t("code",null,"KAYOPEN"),e(),t("em",null,"before"),e(" creating the corresponding historical data collections.")])],-1),m=n("<table><thead><tr><th><code>table_name</code> field value</th><th>Attribute group</th><th>Collection interval (minutes)</th></tr></thead><tbody><tr><td>lh_smds</td><td>SMDS Long-Term History</td><td>5</td></tr><tr><td>qmch_lh</td><td>Channel Long-Term History</td><td>5</td></tr><tr><td>qmcurstat</td><td>Current Queue Manager Status</td><td>1</td></tr><tr><td>qmlhbm</td><td>Buffer Manager Long-Term History</td><td>5</td></tr><tr><td>qmlhlm</td><td>Log Manager Long-Term History</td><td>5</td></tr><tr><td>qmlhmm</td><td>Message Manager Long-Term History</td><td>5</td></tr><tr><td>qmlhtm</td><td>Topic Manager Long-Term History</td><td>5</td></tr><tr><td>qmps_lh</td><td>Page Set Long-Term History</td><td>5</td></tr><tr><td>qmq_lh</td><td>Queue Long-Term History</td><td>5</td></tr><tr><td>qmq_qu_st</td><td>Queue Status</td><td>1</td></tr><tr><td>qsg_cfstr</td><td>QSG Coupling Facility Structures</td><td>1</td></tr><tr><td>qsg_qmgr</td><td>QSG QMgrs</td><td>1</td></tr></tbody></table>",1);function u(d,g){return a(),o(l,null,[i,h,t("p",null,"Create the following historical data collections for the "+s(d.$frontmatter.bundle)+" bundle:",1),m],64)}var f=r(c,[["render",u]]);export{f as default};
