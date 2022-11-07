import{_ as a,o,c as s,a as e,t as r,F as d,d as n,e as c}from"./app.dd8210c8.js";const i={},h=e("h1",{id:"view-the-sample-dashboards",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#view-the-sample-dashboards","aria-hidden":"true"},"#"),n(" View the sample dashboards")],-1),l=c('<p>Kibana shows the default dashboard for the space.</p><p>You should see data from ODP in the dashboard.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To confirm that Elasticsearch is receiving data for the bundle, go to the <code>Data inventory</code> dashboard.</p><p>If you don&#39;t see any data, check that the dashboard time filter specifies a time range where you would expect to see data. For example, depending on when you started OMEGAMON Data Connect and Logstash: the last few hours.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Some <strong>Queue</strong> dashboard visualizations are limited to a maximum of 20 queues. Use the <strong>Selector: queue_name</strong> control widget to select the queues that you want to show. Alternatively, in the search bar, enter a wildcard query to filter the results. For example, <code>queue_name : A.S*.*</code>, where <code>*</code> matches zero or more characters.</p></div>',4);function u(t,p){return o(),s(d,null,[h,e("p",null,"In Kibana, go to the space for the "+r(t.$frontmatter.bundle)+" bundle.",1),l],64)}var f=a(i,[["render",u]]);export{f as default};
