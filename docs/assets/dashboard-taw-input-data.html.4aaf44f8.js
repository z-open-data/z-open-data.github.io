import{_ as a,e}from"./app.eca5dfe0.js";const s={},o=e(`<h1 id="provide-data" tabindex="-1"><a class="header-anchor" href="#provide-data" aria-hidden="true">#</a> Provide data</h1><p>In your copy of the <code>transaction-analysis-workbench-elastic</code> repository, the file <code>fuw-sample-data/fuw_sample_data.zip</code> contains sample data from Transaction Analysis Workbench.</p><h2 id="forwarding-the-sample-data" tabindex="-1"><a class="header-anchor" href="#forwarding-the-sample-data" aria-hidden="true">#</a> Forwarding the sample data</h2><ol><li><p>Unzip the file</p></li><li><p>Use a TCP forwarder to send the sample data file, <code>fuw_sample_data.jsonl</code>, to the listening TCP port.</p></li></ol><p>For example, via <code>socat</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>socat -u fuw_sample_data.jsonl TCP4:localhost:5046
</code></pre></div><p>or <code>ncat</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ncat --send-only -v localhost <span class="token number">5046</span> <span class="token operator">&lt;</span> fuw_sample_data.jsonl
</code></pre></div>`,8);function t(d,n){return o}var c=a(s,[["render",t]]);export{c as default};
