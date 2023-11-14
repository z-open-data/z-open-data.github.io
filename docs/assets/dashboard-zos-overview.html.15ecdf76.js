import{_ as s,r as n,o as r,c as i,a as e,b as a,F as h,d as t,e as d}from"./app.063d05bb.js";const l={},c=e("h1",{id:"installing-the-starter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-the-starter","aria-hidden":"true"},"#"),t(" Installing the starter")],-1),p=e("p",null,"The starter showcases how to use ODP to export data (metrics) from OMEGAMON to Prometheus.",-1),_=e("p",null,"ODP acts as a Prometheus exporter, making OMEGAMON data available via an HTTP endpoint.",-1),u=e("p",null,"You can configure Prometheus to scrape the metrics from the HTTP endpoint served by the OMEGAMON Data Connect component of ODP.",-1),f=e("p",null,"The supplied starter Grafana dashboard shows metrics collected by the OMEGAMON z/OS agent.",-1),m=e("h2",{id:"getting-the-dashboard",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-the-dashboard","aria-hidden":"true"},"#"),t(" Getting the dashboard")],-1),b=t("You need to get the GitHub repository "),g={href:"https://github.com/z-open-data/odp-prometheus-samples",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"z-open-data/odp-prometheus-samples",-1),G=t(" that contains the Grafana dashboard definition file. Either:"),P=e("li",null,"Clone the GitHub repository",-1),x=t("If you don't want to use Git, "),M={href:"https://github.com/z-open-data/odp-prometheus-samples/archive/refs/heads/main.zip",target:"_blank",rel:"noopener noreferrer"},y=t("download a "),v=e("code",null,".zip",-1),E=t(" file"),N=t(" of the repository"),w=d('<h2 id="installing-the-dashboard" tabindex="-1"><a class="header-anchor" href="#installing-the-dashboard" aria-hidden="true">#</a> Installing the dashboard</h2><p>Here is a summary of the steps for installing the starter dashboard.</p><p>Prerequisite steps on z/OS:</p><ol><li>Configure OMEGAMON Data Connect to specify the data (metrics) that you want to expose via a Prometheus endpoint</li><li>Update the ODP collection configuration to forward the attribute tables (groups) used by the dashboard</li><li>Create historical data collections for those attribute groups</li></ol><p>In Prometheus and Grafana:</p><ol><li>Configure Prometheus to scrape from the endpoint served by OMEGAMON Data Connect</li><li>Import the dashboard definition in Grafana</li></ol>',6);function C(k,z){const o=n("ExternalLinkIcon");return r(),i(h,null,[c,p,_,u,f,m,e("p",null,[b,e("a",g,[O,a(o)]),G]),e("ul",null,[P,e("li",null,[x,e("a",M,[y,v,E,a(o)]),N])]),w],64)}var I=s(l,[["render",C]]);export{I as default};
