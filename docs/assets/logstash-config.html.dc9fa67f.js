import{_ as r,r as t,o as i,a as c,b as n,d as a,w as l,F as u,c as o,e as s}from"./app.4a750b6b.js";const d={},h=o(`<h1 id="configuring-logstash" tabindex="-1"><a class="header-anchor" href="#configuring-logstash" aria-hidden="true">#</a> Configuring Logstash</h1><p>You need to configure Logstash to ingest data from CICS Performance Analyzer.</p><p>The starter dashboards require a Logstash pipeline config with the following characteristics:</p><ul><li><p>Maps the value of the <code>Start Interval</code> or <code>Collection Time</code> field in the incoming JSON Lines to the <code>@timestamp</code> field.</p><p>The starter dashboards use <code>@timestamp</code> as the event time stamp.</p></li><li><p>Matches Kibana index pattern <code>cicspa_%{code_identifier}</code></p><p>The indices are set to lowercase. The starter dashboards use indices such as <code>cicspa_tranwait</code>.</p></li><li><p>Creates data streams (<code>create</code> action) rather than time-based indices.</p></li></ul><p>Here is a starter Logstash pipeline config:</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>input <span class="token punctuation">{</span>
  tcp <span class="token punctuation">{</span>
    id <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;cicspa_tcp_input&quot;</span></span>
    port <span class="token operator">=&gt;</span> <span class="token number">5046</span>
    codec <span class="token operator">=&gt;</span> json_lines
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter <span class="token punctuation">{</span>
  date <span class="token punctuation">{</span>
    match <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Start Interval&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;ISO8601&quot;</span></span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  date <span class="token punctuation">{</span>
    match <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Collection Time&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;ISO8601&quot;</span></span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  mutate <span class="token punctuation">{</span>
    add_field <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token string-literal"><span class="token string">&quot;[@metadata][code_identifier]&quot;</span></span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;%{code}&quot;</span></span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  mutate <span class="token punctuation">{</span>
    lowercase <span class="token operator">=&gt;</span> <span class="token punctuation">[</span> <span class="token string-literal"><span class="token string">&quot;[@metadata][code_identifier]&quot;</span></span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
  elasticsearch <span class="token punctuation">{</span>
    hosts <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;localhost:9200&quot;</span></span><span class="token punctuation">]</span>
    index <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;cicspa_%{[@metadata][code_identifier]}&quot;</span></span>
	  action <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">&quot;create&quot;</span></span>
    manage_template <span class="token operator">=&gt;</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>This starter config assumes that you have configured CICS Performance Analyzer to forward data over TCP in JSON Lines format.</p><p>This starter config assumes unsecure TCP: no Transport Layer Security (SSL/TLS).</p><p>In <code>input.tcp.port</code>, specify the port on which to listen for data from CICS Performance Analyzer.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you deploy Elastic Stack in Docker containers, then you need to understand the difference between port numbers exposed by the Docker host and port numbers used inside the Docker containers.</p></div><p>In <code>output.elasticsearch.hosts</code>, specify the host name of the computer that is running Elasticsearch.</p><h2 id="one-data-stream-per-product-code" tabindex="-1"><a class="header-anchor" href="#one-data-stream-per-product-code" aria-hidden="true">#</a> One data stream per product code</h2>`,12),b=s("The combination of the "),m=n("code",null,"create",-1),g=s(" action in this starter Logstash config and the "),k=n("code",null,"data_stream",-1),f=s(" object in the corresponding sample "),_=s("Elasticsearch index template"),y=s(" cause Elasticsearch to store CICS Performance Analyzer data in "),v={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/data-streams.html",target:"_blank",rel:"noopener noreferrer"},w=s("data streams"),q=s("."),x=o(`<p>Each product code has its own data stream.</p><h2 id="single-or-multiple-logstash-pipelines" tabindex="-1"><a class="header-anchor" href="#single-or-multiple-logstash-pipelines" aria-hidden="true">#</a> Single or multiple Logstash pipelines?</h2><p>You need to know whether your instance of Logstash is for use only with these starter dashboards or is also used for other purposes, other inputs. Specifically, you need to know whether your use of Logstash involves a <em>single pipeline</em> or <em>multiple pipelines</em>.</p><p>If you have installed a new instance of Elastic Stack as a sandbox environment for testing these starter dashboards, then you can use a single Logstash pipeline.</p><p>However, if you are using these starter dashboards in an existing instance of Elastic Stack that already has other inputs, then it is more likely that you will need to use multiple pipelines.</p><h3 id="single-pipeline" tabindex="-1"><a class="header-anchor" href="#single-pipeline" aria-hidden="true">#</a> Single pipeline</h3><p>If your instance of Logstash is for use only with these starter dashboards, copy the starter config provided here to the file <code>cicspa-tcp-to-local-elasticsearch.conf</code> and save it in the logstash bin folder and run the following command.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>logstash -f cicspa-tcp-to-local-elasticsearch.conf
</code></pre></div><h3 id="multiple-pipelines" tabindex="-1"><a class="header-anchor" href="#multiple-pipelines" aria-hidden="true">#</a> Multiple pipelines</h3>`,9),S=s("For information about configuring multiple pipelines, see the "),L={href:"https://www.elastic.co/guide/en/logstash/7.15/multiple-pipelines.html",target:"_blank",rel:"noopener noreferrer"},C=s("Logstash documentation"),I=s(".");function T(E,P){const p=t("RouterLink"),e=t("ExternalLinkIcon");return i(),c(u,null,[h,n("p",null,[b,m,g,k,f,a(p,{to:"/cics-performance-analyzer-elastic/elasticsearch-index-template.html"},{default:l(()=>[_]),_:1}),y,n("a",v,[w,a(e)]),q]),x,n("p",null,[S,n("a",L,[C,a(e)]),I])],64)}var z=r(d,[["render",T]]);export{z as default};