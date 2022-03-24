import{_ as a,e}from"./app.fe6a199f.js";const n={},s=e(`<h1 id="configure-prometheus-and-grafana" tabindex="-1"><a class="header-anchor" href="#configure-prometheus-and-grafana" aria-hidden="true">#</a> Configure Prometheus and Grafana</h1><h2 id="prometheus-configuration" tabindex="-1"><a class="header-anchor" href="#prometheus-configuration" aria-hidden="true">#</a> Prometheus configuration</h2><p>In Prometheus, edit the configuration file <code>prometheus.yml</code> to specify the scrape configuration for OMEGAMON Data Connect (replace <code>&lt;host_name&gt;</code> with the actual host name of the OMEGAMON Data Connect).</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;omegamon&#39;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;host_name&gt;:9070&#39;</span><span class="token punctuation">]</span>
    <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 1m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Restart the Prometheus server and verify that the state of this endpoint is <code>UP</code>.</p><h2 id="import-the-dashboard-definition-in-grafana" tabindex="-1"><a class="header-anchor" href="#import-the-dashboard-definition-in-grafana" aria-hidden="true">#</a> Import the dashboard definition in Grafana</h2><p>In Grafana, import the dashboard definition supplied in the JSON file <code>samples/grafana/dashboard-zos.json</code> in the <code>odp-prometheus-samples</code> repository.</p><p>You should already have configured the Prometheus data source.</p><h2 id="view-the-dashboard" tabindex="-1"><a class="header-anchor" href="#view-the-dashboard" aria-hidden="true">#</a> View the dashboard</h2><p>The installation of the sample is completed. You should be able to start viewing data in the imported dashboard.</p>`,10);function t(o,r){return s}var p=a(n,[["render",t]]);export{p as default};
