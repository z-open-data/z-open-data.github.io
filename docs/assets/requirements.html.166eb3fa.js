import{_ as a,r,o as s,a as n,b as d,d as i,w as h,F as l,c as t,e}from"./app.8876b064.js";const c={},u=t('<h1 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h1><p>To use these starter dashboards, you need:</p><ul><li><p><strong>IBM Z OMEGAMON Data Provider</strong> (ODP)</p><p>The ODP APAR level that you require depends on which starter dashboards you want to use, for which OMEGAMON monitoring agents.</p><p>ODP introduced support for the monitoring agents over time, in several PTFs. The following table shows this history in chronological order:</p><table><thead><tr><th>Monitoring agents</th><th>Required ODP APAR level</th></tr></thead><tbody><tr><td>z/OS</td><td>No APAR required, supported at initial release</td></tr><tr><td>CICS, Db2</td><td>OA62420</td></tr><tr><td>IMS, JVM</td><td>OA62775</td></tr><tr><td>MQ, Networks, Storage</td><td>OA63141</td></tr></tbody></table><p>You must have configured ODP to forward data to Logstash.</p></li><li><p><strong>Elastic Stack</strong></p><p>The starter dashboards and related Elastic Stack artifacts were developed and tested in Elastic Stack <strong>7.14.0</strong>. For compatibility with other versions of Elastic Stack, see the Elastic Stack documentation.</p></li></ul><h2 id="omegamon-monitoring-agents" tabindex="-1"><a class="header-anchor" href="#omegamon-monitoring-agents" aria-hidden="true">#</a> OMEGAMON monitoring agents</h2><p>The starter dashboards are divided into bundles of related dashboards.</p><p>Each bundle has its own requirements for OMEGAMON monitoring agents and corresponding historical data collections. You can choose which bundles to install based on which OMEGAMON monitoring agents you have.</p>',6),p=e("For details, see the "),g=e("dashboard bundles"),b=e("."),m=t('<h2 id="screen-resolution" tabindex="-1"><a class="header-anchor" href="#screen-resolution" aria-hidden="true">#</a> Screen resolution</h2><p>The dashboards were developed on a screen with a resolution of 1920 \u2715 1080 pixels.</p><p>At lower resolutions, some dashboards might exhibit rendering issues.</p><h2 id="what-you-need-to-know" tabindex="-1"><a class="header-anchor" href="#what-you-need-to-know" aria-hidden="true">#</a> What you need to know</h2><p>To install the starter dashboards, you need to know how to configure the Elastic Stack.</p><p>To forward data to the starter dashboards, you need to know how to configure the following OMEGAMON software on z/OS:</p><ul><li>Runtime environments (RTEs)</li><li>Historical data collection</li><li>OMEGAMON Data Provider (ODP)</li></ul><p>To use the starter dashboards, you need to know how to use Kibana, and you need to understand the OMEGAMON attributes shown in the dashboards.</p>',8);function w(O,f){const o=r("RouterLink");return s(),n(l,null,[u,d("p",null,[p,i(o,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:h(()=>[g]),_:1}),b]),m],64)}var M=a(c,[["render",w]]);export{M as default};
