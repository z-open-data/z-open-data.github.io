import{_ as t,o as p,a as l,b as n,e as a,t as o,F as c,c as s}from"./app.3aa20d9a.js";const u={},r=n("h1",{id:"update-the-odp-collection-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#update-the-odp-collection-configuration","aria-hidden":"true"},"#"),a(" Update the ODP collection configuration")],-1),i=a("On z/OS, edit the ODP collection configuration member "),k=n("code",null,"RKANPARU(KAYOPEN)",-1),b=s(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">collections</span><span class="token punctuation">:</span>
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
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kn3
    <span class="token key atrule">table</span><span class="token punctuation">:</span> kn3iss
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,1),d=s(`<li><p>Reload the configuration of collection tasks to reflect the updated <code>KAYOPEN</code> member.</p><p>For each job that runs an OMEGAMON monitoring agent (including the monitoring server job), enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F &lt;job_name&gt;,KPQ RELOAD_CONFIG,KAY
</code></pre></div><p>Replace <code>&lt;job_name&gt;</code> with the corresponding job name for each agent: for example, <code>OMEGDS</code>.</p></li>`,1);function m(e,g){return p(),l(c,null,[r,n("ol",null,[n("li",null,[n("p",null,[i,k,a(" to specify the attribute groups required by the "+o(e.$frontmatter.bundle)+" bundle:",1)]),b]),d])],64)}var y=t(u,[["render",m]]);export{y as default};
