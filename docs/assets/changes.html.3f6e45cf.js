import{_ as d,r as n,o as i,a as h,b as e,d as s,w as o,F as c,e as t}from"./app.8876b064.js";const r={},_=e("h1",{id:"what-s-new",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-new","aria-hidden":"true"},"#"),t(" What's new")],-1),u=e("p",null,[t("History of significant updates ("),e("em",null,"yyyy-mm-dd"),t(").")],-1),p=e("h2",{id:"_2023-11-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2023-11-10","aria-hidden":"true"},"#"),t(" 2023-11-10")],-1),m=t("Updated the "),b=t("Kibana settings"),f=t(" page to use new Kibana setting names."),g=e("h2",{id:"_2023-09-19",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2023-09-19","aria-hidden":"true"},"#"),t(" 2023-09-19")],-1),y=t("Updated the starter "),x=t("Elasticsearch index template"),k=t(" to set "),w=e("code",null,"number_of_replicas",-1),v=t(" to 0."),E=e("br",null,null,-1),z=t(' This update helps new Elastic users, with a single-node "sandbox" test environment, to avoid problems caused by the default '),D=e("code",null,"number_of_replicas",-1),M=t(" value of 1."),S=e("li",null,[t("Updated the documentation to highlight the need to set "),e("code",null,"number_of_replicas"),t(" to 0 in a single-node environment.")],-1),A=e("h2",{id:"_2023-05-18",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2023-05-18","aria-hidden":"true"},"#"),t(" 2023-05-18")],-1),C=e("ul",null,[e("li",null,'Starter dashboards for CICS have been updated. "Response time analysis" dashboard has been replaced by new "Service level analysis" dashboard.')],-1),I=e("h2",{id:"_2023-02-01",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2023-02-01","aria-hidden":"true"},"#"),t(" 2023-02-01")],-1),L=t("Updated the "),R=t("Logstash pipeline configuration"),U=t("."),N=e("h2",{id:"_2022-12-20",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-12-20","aria-hidden":"true"},"#"),t(" 2022-12-20")],-1),G=t("Added starter dashboards for network in "),O=t("a separately installable bundle"),H=t("."),V=e("h2",{id:"_2022-11-04",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-11-04","aria-hidden":"true"},"#"),t(" 2022-11-04")],-1),B=t("Added starter dashboards for storage in "),F=t("a separately installable bundle"),T=t("."),K=e("h2",{id:"_2022-06-24",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-06-24","aria-hidden":"true"},"#"),t(" 2022-06-24")],-1),P=t("Added starter dashboards for MQ in "),W=t("a separately installable bundle"),j=t("."),J=e("h2",{id:"_2022-05-30",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-05-30","aria-hidden":"true"},"#"),t(" 2022-05-30")],-1),Q=t("Added starter dashboards for IMS and JVM in "),q=t("separately installable bundles"),X=t("."),Y=e("li",null,[e("p",null,[t("Renamed "),e("code",null,"Groups"),t(" dashboard to "),e("code",null,"Db2 home"),t(" in Db2 bundle")])],-1),Z=e("h2",{id:"_2022-02-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-02-15","aria-hidden":"true"},"#"),t(" 2022-02-15")],-1),$=t("Added starter dashboards for CICS and Db2 in "),ee=t("separately installable bundles"),te=t("."),se=e("li",null,[e("p",null,"Removed sample data."),e("p",null,"To forward data to these starter dashboards, you must have ODP.")],-1),ae=t("New Elasticsearch index names"),oe=t(" include the OMEGAMON monitoring agent product code ("),le=e("code",null,[t("k"),e("var",null,"pp")],-1),ne=t(")."),de=t("Updated Logstash pipeline configuration"),ie=t(" reflects the new Elasticsearch index names and creates data streams instead of time-based (per-day) indices."),he=t("Updated Elasticsearch index template"),ce=t(" enables data streams."),re=t("Updated Elasticsearch ILM policy"),_e=t(" details, including:"),ue=e("ul",null,[e("li",null,[e("p",null,[t("New starter policy name, "),e("code",null,"omegamon-ds-ilm-policy"),t(", to reflect the use of data streams")]),e("p",null,[t("Was: "),e("code",null,"omegamon-ilm-policy"),t(" (note the "),e("code",null,"-ds"),t(" in the new name)")])]),e("li",null,[e("p",null,"Rollover settings")])],-1),pe=t("Moved the starter dashboards GitHub repository from "),me={href:"https://github.com/z-open-data/z-omegamon-analytics-elastic-docker",target:"_blank",rel:"noopener noreferrer"},be=e("code",null,"z-open-data/z-omegamon-analytics-elastic-docker",-1),fe=t(" to "),ge={href:"https://github.com/z-open-data/odp-elastic-samples",target:"_blank",rel:"noopener noreferrer"},ye=e("code",null,"z-open-data/odp-elastic-samples",-1),xe=t("."),ke=t("If you don't have an existing Elastic Stack instance that you want to use: the single-container Elastic Stack Docker environment, based on the "),we=e("code",null,"sebp/elk",-1),ve=t(" Docker image, has been replaced with a multi-container "),Ee=t("Docker Compose file"),ze=t(", based on the per-component images built by the Elastic developers."),De=e("li",null,[e("p",null,[t("Moved the documentation from "),e("code",null,"README.md"),t(" files to a dedicated GitHub repository, "),e("code",null,"z-open-data/z-open-data.github.io"),t(".")])],-1),Me=e("h2",{id:"_2021-10-24",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2021-10-24","aria-hidden":"true"},"#"),t(" 2021-10-24")],-1),Se=e("ul",null,[e("li",null,[e("p",null,[t("First release of starter Elastic dashboards for ODP, in the GitHub repository "),e("code",null,"z-open-data/z-omegamon-analytics-elastic-docker")])]),e("li",null,[e("p",null,"Sample dashboards for the z/OS monitoring agent")])],-1);function Ae(Ce,Ie){const a=n("RouterLink"),l=n("ExternalLinkIcon");return i(),h(c,null,[_,u,p,e("ul",null,[e("li",null,[m,s(a,{to:"/odp-elastic-samples/kibana-settings.html"},{default:o(()=>[b]),_:1}),f])]),g,e("ul",null,[e("li",null,[y,s(a,{to:"/odp-elastic-samples/elasticsearch-index-template.html"},{default:o(()=>[x]),_:1}),k,w,v,E,z,D,M]),S]),A,C,I,e("ul",null,[e("li",null,[L,s(a,{to:"/odp-elastic-samples/logstash-config.html"},{default:o(()=>[R]),_:1}),U])]),N,e("ul",null,[e("li",null,[G,s(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[O]),_:1}),H])]),V,e("ul",null,[e("li",null,[B,s(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[F]),_:1}),T])]),K,e("ul",null,[e("li",null,[P,s(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[W]),_:1}),j])]),J,e("ul",null,[e("li",null,[e("p",null,[Q,s(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[q]),_:1}),X])]),Y]),Z,e("ul",null,[e("li",null,[e("p",null,[$,s(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[ee]),_:1}),te])]),se,e("li",null,[e("p",null,[s(a,{to:"/odp-elastic-samples/elasticsearch-indices-old.html"},{default:o(()=>[ae]),_:1}),oe,le,ne])]),e("li",null,[e("p",null,[s(a,{to:"/odp-elastic-samples/logstash-config.html"},{default:o(()=>[de]),_:1}),ie])]),e("li",null,[e("p",null,[s(a,{to:"/odp-elastic-samples/elasticsearch-index-template.html"},{default:o(()=>[he]),_:1}),ce])]),e("li",null,[e("p",null,[s(a,{to:"/odp-elastic-samples/elasticsearch-ilm-policy.html"},{default:o(()=>[re]),_:1}),_e]),ue]),e("li",null,[e("p",null,[pe,e("a",me,[be,s(l)]),fe,e("a",ge,[ye,s(l)]),xe])]),e("li",null,[e("p",null,[ke,we,ve,s(a,{to:"/odp-elastic-samples/docker.html"},{default:o(()=>[Ee]),_:1}),ze])]),De]),Me,Se],64)}var Re=d(r,[["render",Ae]]);export{Re as default};
