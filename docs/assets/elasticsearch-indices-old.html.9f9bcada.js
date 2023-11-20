import{_ as s,r as t,o,a as i,b as p,d as r,w as c,F as l,c as a,e}from"./app.8876b064.js";const d={},h=a('<h1 id="elasticsearch-indices-with-old-naming-pattern" tabindex="-1"><a class="header-anchor" href="#elasticsearch-indices-with-old-naming-pattern" aria-hidden="true">#</a> Elasticsearch indices with old naming pattern</h1><p>This topic is relevant only if you have existing Elasticsearch indices containing ODP data with an old naming pattern.</p><h2 id="old-naming-pattern" tabindex="-1"><a class="header-anchor" href="#old-naming-pattern" aria-hidden="true">#</a> Old naming pattern</h2><p>Previous releases of these starter dashboards used Kibana index patterns that were qualified only by the OMEGAMON attribute table name.</p><p>Example:</p><p><code>omegamon-ascpuutil-*</code></p><p>The problem: table names are not necessarily unique across all OMEGAMON monitoring agents.</p><h2 id="new-naming-pattern" tabindex="-1"><a class="header-anchor" href="#new-naming-pattern" aria-hidden="true">#</a> New naming pattern</h2><p>The starter dashboards now use index patterns that also include the OMEGAMON product code (<code>k<var>pp</var></code>).</p><p>Example:</p><p><code>omegamon-km5-ascpuutil-*</code></p><p>Elasticsearch indices with the old naming pattern will be ignored by the current starter dashboards.</p><h2 id="managing-old-indices" tabindex="-1"><a class="header-anchor" href="#managing-old-indices" aria-hidden="true">#</a> Managing old indices</h2><p>Here are some options for managing indices with the old naming pattern.</p><h3 id="use-the-ilm-policy" tabindex="-1"><a class="header-anchor" href="#use-the-ilm-policy" aria-hidden="true">#</a> Use the ILM policy</h3><p>For example, reduce the minimum age for the delete phase, so that the old indices will be deleted sooner.</p><h3 id="re-index-the-data-in-the-old-indices" tabindex="-1"><a class="header-anchor" href="#re-index-the-data-in-the-old-indices" aria-hidden="true">#</a> Re-index the data in the old indices</h3><p>To continue using data from the old indices with the newer starter dashboards, use the Elasticsearch re-index API to copy the data to data streams that use the new naming pattern.</p>',18),u=e("For example, if you have created the "),m=e("newer index template that enables data streams"),b=e(", then you can submit the following API request for each table:"),g=a(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>POST /_reindex?pretty
<span class="token punctuation">{</span>
  <span class="token property">&quot;conflicts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proceed&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;omegamon-ascpuutil-*&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;omegamon-km5-ascpuutil-ds&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;op_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;create&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>For each table, replace <code>ascpuutil</code> and <code>km5</code> with the appropriate table name and product code.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In Kibana, select Management \u25BA Dev Tools \u25BA Console, and then copy and paste the previous API request.</p></div><pre><code>Then you can delete the old indices.
</code></pre>`,4);function k(x,_){const n=t("RouterLink");return o(),i(l,null,[h,p("p",null,[u,r(n,{to:"/odp-elastic-samples/elasticsearch-index-template.html"},{default:c(()=>[m]),_:1}),b]),g],64)}var f=s(d,[["render",k]]);export{f as default};
