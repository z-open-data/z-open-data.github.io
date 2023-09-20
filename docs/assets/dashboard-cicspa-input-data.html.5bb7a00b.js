import{_ as t,r as s,o as n,a as r,b as a,d,F as c,e,c as l}from"./app.2297d7a5.js";const p={},i=a("h1",{id:"provide-data",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#provide-data","aria-hidden":"true"},"#"),e(" Provide data")],-1),h=e('The CICS SupportPac "'),_={href:"https://www.ibm.com/support/pages/node/1282648",target:"_blank",rel:"noopener noreferrer"},m=e("CA10:CICS Performance Analyzer for z/OS - Output to JSON Lines"),f=e('" contains sample data and information on how to forward JSON Lines data from CICS Performance Analyzer.'),u=l(`<h2 id="forwarding-the-sample-data" tabindex="-1"><a class="header-anchor" href="#forwarding-the-sample-data" aria-hidden="true">#</a> Forwarding the sample data</h2><ol><li><p>Download the sample data</p></li><li><p>Unzip the file</p></li><li><p>Use a TCP forwarder to send the sample data file, <code>cicspa_sample_data.1.0.0.jsonl</code>, to the listening TCP port.</p></li></ol><p>For example, via <code>socat</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>socat -u cicspa_sample_data.1.0.0.jsonl TCP4:localhost:5046
</code></pre></div><p>or <code>ncat</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ncat --send-only -v localhost <span class="token number">5046</span> <span class="token operator">&lt;</span> cicspa_sample_data.1.0.0.jsonl
</code></pre></div>`,6);function g(C,b){const o=s("ExternalLinkIcon");return n(),r(c,null,[i,a("p",null,[h,a("a",_,[m,d(o)]),f]),u],64)}var x=t(p,[["render",g]]);export{x as default};
