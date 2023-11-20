import{_ as a,r as n,o as r,a as l,b as e,d as s,F as i,c,e as o}from"./app.8876b064.js";const d={},h=c('<h1 id="docker-compose-file-to-run-elastic" tabindex="-1"><a class="header-anchor" href="#docker-compose-file-to-run-elastic" aria-hidden="true">#</a> Docker Compose file to run Elastic</h1><p>To help you evaluate the starter dashboards in a stand-alone sandbox environment, the GitHub repository <code>z-open-data/odp-elastic-samples</code> supplies a Docker Compose file that runs Elastic.</p><p>The Compose file starts a container for each Elastic Stack component: Elasticsearch, Logstash, Kibana.</p><h2 id="docker-host-system-requirements" tabindex="-1"><a class="header-anchor" href="#docker-host-system-requirements" aria-hidden="true">#</a> Docker host system requirements</h2><p>Minimum recommended system requirements for a Docker host running Elastic Stack with the starter dashboards:</p><ul><li>16 GB RAM</li><li>200 GB disk space</li><li>4 vCPUs</li></ul><p>Actual system requirements depend on your site-specific practices. For example, the disk space required depends on the amount of data stored in Elasticsearch, which depends on various site-specific factors, including:</p><ul><li>How much data you forward: Which attribute tables, and fields in those tables, you forward, and how many systems you are monitoring</li><li>How frequently you forward data, controlled by the attribute table collection interval in OMEGAMON</li><li>How long you keep data, controlled by the Elasticsearch index lifecycle policy that you define</li></ul><h2 id="using-the-compose-file" tabindex="-1"><a class="header-anchor" href="#using-the-compose-file" aria-hidden="true">#</a> Using the Compose file</h2>',9),u=e("li",null,[e("p",null,"Install Docker and Docker Compose, if you don't already have them.")],-1),p=o("Check that your Docker host virtual memory settings meet the "),m={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/vm-max-map-count.html",target:"_blank",rel:"noopener noreferrer"},_=o("Elasticsearch requirements"),f=o("."),k=o("Copy the GitHub repository "),y={href:"https://github.com/z-open-data/odp-elastic-samples",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"z-open-data/odp-elastic-samples",-1),g=o(" to your Docker host."),E=e("p",null,[o("Either clone the repository or download a "),e("code",null,".zip"),o(" file from GitHub.")],-1),w=e("li",null,[e("p",null,"Open a command shell on your Docker host.")],-1),x=e("li",null,[e("p",null,[o("Change to the"),e("code",null,"samples/docker/odp-elastic"),o(" directory.")])],-1),D=e("li",null,[e("p",null,"Enter the following command:"),e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"docker-compose"),o(` up -d
`)])])])],-1),C=e("p",null,"For details on Docker Compose, see the Docker documentation.",-1),v=e("p",null,"For details on the Docker images used by the Docker Compose file, see the Elastic Stack documentation.",-1);function q(G,H){const t=n("ExternalLinkIcon");return r(),l(i,null,[h,e("ol",null,[u,e("li",null,[e("p",null,[p,e("a",m,[_,s(t)]),f])]),e("li",null,[e("p",null,[k,e("a",y,[b,s(t)]),g]),E]),w,x,D]),C,v],64)}var F=a(d,[["render",q]]);export{F as default};
