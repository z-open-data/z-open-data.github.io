import{_ as p,o as t,c as l,a as n,d as s,t as o,F as c,e as a}from"./app.063d05bb.js";const u={},r=n("h1",{id:"update-the-odp-collection-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#update-the-odp-collection-configuration","aria-hidden":"true"},"#"),s(" Update the ODP collection configuration")],-1),i=s("On z/OS, edit the ODP collection configuration member "),k=n("code",null,"RKANPARU(KAYOPEN)",-1),b=a(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">collections</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> db2lkconf
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> dp_ci_excs
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> dp_im_conn
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> dp_sy_exc
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
  <span class="token punctuation">-</span> <span class="token key atrule">product</span><span class="token punctuation">:</span> kd5
    <span class="token key atrule">table</span><span class="token punctuation">:</span> opersys
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">destination</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> pds
      <span class="token punctuation">-</span> open
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,1),d=a(`<li><p>Reload the configuration of collection tasks to reflect the updated <code>KAYOPEN</code> member.</p><p>For each job that runs an OMEGAMON monitoring agent (including the monitoring server job), enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F &lt;job_name&gt;,KPQ RELOAD_CONFIG,KAY
</code></pre></div><p>Replace <code>&lt;job_name&gt;</code> with the corresponding job name for each agent: for example, <code>OMEGDS</code>.</p></li>`,1);function m(e,y){return t(),l(c,null,[r,n("ol",null,[n("li",null,[n("p",null,[i,k,s(" to specify the attribute groups required by the Instana support for "+o(e.$frontmatter.bundle)+".",1)]),b]),d])],64)}var h=p(u,[["render",m]]);export{h as default};
