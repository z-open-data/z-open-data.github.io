import{_ as t,o as s,c as o,a as e,t as d,F as r,d as h,e as n}from"./app.dd8210c8.js";const l={},c=e("h1",{id:"view-the-sample-dashboards",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#view-the-sample-dashboards","aria-hidden":"true"},"#"),h(" View the sample dashboards")],-1),i=n(`<p>Kibana shows the default dashboard for the space.</p><p>You should see data from ODP in the dashboard.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To confirm that Elasticsearch is receiving data for the bundle, go to the <code>Data inventory</code> dashboard.</p><p>If you don&#39;t see any data, check that the dashboard time filter specifies a time range where you would expect to see data. For example, depending on when you started OMEGAMON Data Connect and Logstash: the last few hours.</p></div><h2 id="dasd-volume-space-dashboard-exclude-volumes-that-are-expected-to-have-low-free-space" tabindex="-1"><a class="header-anchor" href="#dasd-volume-space-dashboard-exclude-volumes-that-are-expected-to-have-low-free-space" aria-hidden="true">#</a> DASD volume space dashboard: exclude volumes that are expected to have low free space</h2><p>For some DASD volumes, such as volumes for paging, low free space is normal.</p><p>You can exclude those volumes from the DASD volume space dashboard, to avoid obscuring issues on volumes with abnormally low free space.</p><p>The dashboard is supplied with a query that excludes some volumes based on their volume name prefix. For example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(not volume: PGD*) and (not volume: JSL*)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The example volume name prefixes in this query might not match the volumes at your site.</p><p>Edit the dashboard, adjust the query in the query bar to reflect the volume names at your site, and then save the dashboard with the updated query.</p>`,10);function u(a,p){return s(),o(r,null,[c,e("p",null,"In Kibana, go to the space for the "+d(a.$frontmatter.bundle)+" bundle.",1),i],64)}var v=t(l,[["render",u]]);export{v as default};
