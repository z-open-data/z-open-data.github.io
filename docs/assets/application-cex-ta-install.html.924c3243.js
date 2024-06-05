import{_ as i,r as a,o as c,c as r,a as n,b as t,w as l,F as d,d as e,e as p}from"./app.53483c21.js";const h={},u=n("h1",{id:"ims-connect-transaction-analysis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ims-connect-transaction-analysis","aria-hidden":"true"},"#"),e(" IMS Connect transaction analysis")],-1),m=n("p",null,[e("The dashboards are distributed as an application for Splunk called "),n("code",null,"IMS Connect transaction analysis"),e(".")],-1),_=n("h2",{id:"getting-the-otma-application",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-the-otma-application","aria-hidden":"true"},"#"),e(" Getting the OTMA application")],-1),f=e("The application can be installed from "),g={href:"https://splunkbase.splunk.com/apps?author=z-open-data@rocketsoftware.com",target:"_blank",rel:"noopener noreferrer"},b=e("Splunkbase"),S=e("."),k=p(`<p>In your Splunk server,</p><ol><li>Visit <code>Apps</code></li><li><code>Find more apps</code></li><li>Search <code>IMS Connect transaction analysis</code></li><li>Click <code>install</code></li><li>Enter your Splunk.com username and password</li><li>Click <code>Agree and Install</code></li><li>Restart Splunk server</li></ol><h2 id="splunk-otma-configuration" tabindex="-1"><a class="header-anchor" href="#splunk-otma-configuration" aria-hidden="true">#</a> Splunk OTMA configuration</h2><p>The application deploys <code>inputs.conf</code> and <code>props.conf</code>.</p><div class="language-inputs ext-inputs line-numbers-mode"><pre class="language-inputs"><code>[tcp://:1515] 
sourcetype = ims-ca20
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>As default, IMS Connect transaction analysis configures the data input so that Splunk server accepts data coming to the TCP port <code>1515</code>.</p><p>The example source type <code>ims-ca20</code> matches the value of the type property in the feed JSON.</p><p>The port number and source type shown here are examples only. If you want to change the port number, you can modify from <code>Settings</code> -&gt; <code>Data inputs</code> -&gt; <code>TCP</code>.</p><div class="language-props ext-props line-numbers-mode"><pre class="language-props"><code>[ims-ca20] 
SHOULD_LINEMERGE = false
KV_MODE = json
TIME_PREFIX = {\\&quot;time\\&quot;:\\&quot;
TIME_FORMAT = %Y-%m-%dT%H:%M:%S.%6N%:z
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The combination of <code>SHOULD_LINEMERGE = false</code> and <code>KV_MODE = json</code> defines the incoming data as JSON Lines: one event per line, data in JSON format. These two settings apply to different stages in the Splunk data pipeline: <code>SHOULD_LINEMERGE</code> applies to parsing, before indexing; <code>KV_MODE</code> applies later, to search-time field extraction.</p>`,10),x=e("The regular expression for "),E=n("code",null,"TIME_PREFIX",-1),T=e(" is case sensitive; it matches the lowercase field name time, which is the field name for event time stamps in the feed JSON. "),y=n("code",null,"TIME_FORMAT",-1),I=e(" matches the format of the time field value: a date and time of day string value in ISO 8601 extended format. See the example feed JSON in "),M=e("Configuring the feed job for OTMA workloads"),v=e(".");function O(N,C){const o=a("ExternalLinkIcon"),s=a("RouterLink");return c(),r(d,null,[u,m,_,n("p",null,[f,n("a",g,[b,t(o)]),S]),k,n("p",null,[x,E,T,y,I,t(s,{to:"/ims-connect-extensions-analysis-splunk/cex-feed-config-otma.html"},{default:l(()=>[M]),_:1}),v])],64)}var w=i(h,[["render",O]]);export{w as default};