import{_ as r,r as t,o,a as l,b as e,d as a,F as p,c as i,e as n}from"./app.5561d6b0.js";const c={},d=i(`<h1 id="configuring-the-feed-job-for-otma-workloads" tabindex="-1"><a class="header-anchor" href="#configuring-the-feed-job-for-otma-workloads" aria-hidden="true">#</a> Configuring the feed job for OTMA workloads</h1><p>You need to configure IMS Connect Extensions feed job in order to send IMS transactions from IMS Connect.</p><p>The following JCL example defines a feed that forwards data from three IMS Connect systems: <code>ICONP01</code>, <code>ICONP02</code>, and <code>ICONP03</code>. The feed consists of selected fields in JSON Lines format sent over unsecure TCP/IP (no SSL/TLS) to port <code>1515</code> on the host named <code>analytics</code>.</p><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>cexpre.SCEXLINK is an SMP/e target library of IMS Connect Extensions.</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//UIDCEX   JOB NOTIFY=&amp;SYSUID
//CEXCA20  EXEC PGM=CEXCA20P
//STEPLIB  DD DISP=SHR,DSN=cexpre.SCEXLINK
//SYSPRINT DD SYSOUT=*
//SYSIN    DD *
HWSID=ICONP01,ICONP02,ICONP03
DESTINATION=JSON
  HOST=analytics PORT=1515
  FIELDS(clientid,
  hwsname,
  ipaddress,
  port,
  readexit,
  originds,
  targetds,
  trancode,
  tmember,
  userid,
  tpipe,
  logontk,
  otmadelay,
  inputelap,
  rdsockelap,
  readxelap,
  rxmlxelap,
  safelap,
  otmaelap,
  xmitxelap,
  rdackelap,
  confelap,
  trackelap,
  rtpelap,
  resptime,
  outputelap,
  zostoken
  )
/*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>The list of fields in this example JCL matches the fields used by the Splunk app mentioned later in this recipe.</p><p>Example output line:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{&quot;time&quot;:&quot;2024-1-01T15:25:03.123456Z&quot;,&quot;type&quot;:&quot;ims-ca20&quot;,&quot;hwsname&quot;:&quot;ICONP01&quot;,&quot;resptime&quot;:0.654321,&quot;trancode&quot;:&quot;TRNA&quot;, ...}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,8),b=n("For more details, see the "),m={href:"https://www.ibm.com/docs/en/ims-cex/3.1?topic=events-jcl",target:"_blank",rel:"noopener noreferrer"},u=n("feed JCL"),f=n(" and "),h={href:"https://www.ibm.com/docs/en/ims-cex/3.1?topic=events-fields",target:"_blank",rel:"noopener noreferrer"},x=n("list of feed fields"),S=n(" in the IMS Connect Extensions documentation in IBM Knowledge Center.");function I(_,C){const s=t("ExternalLinkIcon");return o(),l(p,null,[d,e("p",null,[b,e("a",m,[u,a(s)]),f,e("a",h,[x,a(s)]),S])],64)}var N=r(c,[["render",I]]);export{N as default};
