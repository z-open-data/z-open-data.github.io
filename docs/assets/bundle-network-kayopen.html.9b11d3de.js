import{_ as t,o as p,c as o,a as n,d as a,t as l,F as c,e as s}from"./app.a3b49842.js";const r={},u=n("h1",{id:"update-the-odp-collection-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#update-the-odp-collection-configuration","aria-hidden":"true"},"#"),a(" Update the ODP collection configuration")],-1),i=a("On z/OS, edit the ODP collection configuration member "),d=n("code",null,"RKANPARU(KAYOPEN)",-1),k=s(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">collections</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kn3
    <span class="token key atrule">table</span><span class="token punctuation">:</span> kn3gic
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kn3
    <span class="token key atrule">table</span><span class="token punctuation">:</span> kn3gtc
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kn3
    <span class="token key atrule">table</span><span class="token punctuation">:</span> kn3tap
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,1),b=s(`<li><p>Reload the configuration of collection tasks to reflect the updated <code>KAYOPEN</code> member.</p><p>For each job that runs an OMEGAMON monitoring agent (including the monitoring server job), enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F &lt;job_name&gt;,KPQ RELOAD_CONFIG,KAY
</code></pre></div><p>Replace <code>&lt;job_name&gt;</code> with the corresponding job name for each agent: for example, <code>OMEGDS</code>.</p></li>`,1);function m(e,g){return p(),o(c,null,[u,n("ol",null,[n("li",null,[n("p",null,[i,d,a(" to specify the attribute groups required by the "+l(e.$frontmatter.bundle)+" bundle:",1)]),k]),b])],64)}var _=t(r,[["render",m]]);export{_ as default};
