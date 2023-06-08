import{_ as o,o as r,c as i,a as n,t as e,F as s,e as a}from"./app.eca5dfe0.js";const d={},c=a('<h1 id="create-historical-data-collections" tabindex="-1"><a class="header-anchor" href="#create-historical-data-collections" aria-hidden="true">#</a> Create historical data collections</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To ensure that ODP forwards attributes to <strong>Instana</strong> as soon as you start collecting them, update the ODP collection configuration member <code>KAYOPEN</code> <em>before</em> creating the corresponding historical data collections.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>With higher granularity (a smaller interval means more data collected) there are 2 obvious considerations:</p><ol><li>CPU overhead on data collection and retrieval;</li><li>DASD space to hold historical tables.</li></ol><p>Should you grow in CPU usage or Persistent Data Store, consider raising the interval and/or skipping warehousing for certain tables on PDS and just go with open data.</p></div>',3),l=a("<table><thead><tr><th><code>table_name</code> field value</th><th>Attribute group</th><th>Collection interval (minutes)</th></tr></thead><tbody><tr><td>opersys</td><td>z/OS CPU Utilization Attributes</td><td>1</td></tr><tr><td>db2lkconf</td><td>Db2 Lock Contention</td><td>1</td></tr><tr><td>dp_ci_excs</td><td>DB2_CICS_Exceptions</td><td>1</td></tr><tr><td>dp_im_conn</td><td>DB2_IMS_Connections</td><td>1</td></tr><tr><td>dp_sy_exc</td><td>DB2_System_States</td><td>1</td></tr></tbody></table>",1);function h(t,p){return r(),i(s,null,[c,n("p",null,"Create the following historical data collections for the "+e(t.$frontmatter.bundle)+" agent. This can be done via the E3270UI or the Tivoli Enterprise Portal within the "+e(t.$frontmatter.bundle)+" workspace.",1),l],64)}var _=o(d,[["render",h]]);export{_ as default};
