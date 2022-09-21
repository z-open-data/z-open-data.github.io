import{_ as e,r as p,o as t,c as o,a as s,b as c,F as r,e as l,d as n}from"./app.0ce3043f.js";const i={},u=l(`<h1 id="create-an-elasticsearch-index-lifecycle-management-ilm-policy" tabindex="-1"><a class="header-anchor" href="#create-an-elasticsearch-index-lifecycle-management-ilm-policy" aria-hidden="true">#</a> Create an Elasticsearch index lifecycle management (ILM) policy</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you <em>don&#39;t</em> use an ILM policy, and you keep forwarding data to Elastic, then you will eventually run out of disk space.</p></div><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p><code>fuw</code> is the three letter product prefix for Transaction Analysis Workbench.</p></div><p>Here is a sample policy:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT _ilm/policy/fuw-ilm-policy
<span class="token punctuation">{</span>
  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;phases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;hot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0ms&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;rollover&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;max_primary_shard_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10gb&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10d&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;set_priority&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;warm&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;set_priority&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;delete_searchable_snapshot&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can paste this definition into the Kibana console. In Kibana, select Management \u25B6 Dev Tools \u25B6 Console.</p></div><p>This sample policy is designed for use with data streams. The policy contains a rollover action that triggers the creation of a new backing index for the data stream either when the primary shard size reaches 10 GB, or 10 days after the current backing index was created, whichever occurs first.</p><p>This sample policy deletes indices 20 days after rollover.</p><p>This policy is a sample only. Create a policy that matches <em>your</em> organization&#39;s requirements and available disk space.</p>`,9),k=n("For details on creating index lifecycle policies and associating them with indices, see the "),m={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html",target:"_blank",rel:"noopener noreferrer"},b=n("Elastic Stack ILM documentation"),d=n(".");function y(h,q){const a=p("ExternalLinkIcon");return t(),o(r,null,[u,s("p",null,[k,s("a",m,[b,c(a)]),d])],64)}var g=e(i,[["render",y]]);export{g as default};
