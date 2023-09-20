import{_ as d,r as n,o as i,a as c,b as e,d as s,w as o,F as h,e as t}from"./app.2297d7a5.js";const r={},_=e("h1",{id:"what-s-new",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-new","aria-hidden":"true"},"#"),t(" What's new")],-1),u=e("p",null,[t("History of significant updates ("),e("em",null,"yyyy-mm-dd"),t(").")],-1),p=e("h2",{id:"_2023-09-19",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2023-09-19","aria-hidden":"true"},"#"),t(" 2023-09-19")],-1),m=t("Updated the starter "),b=t("Elasticsearch index template"),f=t(" to set "),g=e("code",null,"number_of_replicas",-1),y=t(" to 0."),x=e("br",null,null,-1),k=t(' This update helps new Elastic users, with a single-node "sandbox" test environment, to avoid problems caused by the default '),v=e("code",null,"number_of_replicas",-1),w=t(" value of 1."),E=e("li",null,[t("Updated the documentation to highlight the need to set "),e("code",null,"number_of_replicas"),t(" to 0 in a single-node environment.")],-1),z=e("h2",{id:"_2023-05-18",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2023-05-18","aria-hidden":"true"},"#"),t(" 2023-05-18")],-1),D=e("ul",null,[e("li",null,'Starter dashboards for CICS have been updated. "Response time analysis" dashboard has been replaced by new "Service level analysis" dashboard.')],-1),M=e("h2",{id:"_2023-02-01",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2023-02-01","aria-hidden":"true"},"#"),t(" 2023-02-01")],-1),S=t("Updated the "),A=t("Logstash pipeline configuration"),C=t("."),I=e("h2",{id:"_2022-12-20",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-12-20","aria-hidden":"true"},"#"),t(" 2022-12-20")],-1),L=t("Added starter dashboards for network in "),R=t("a separately installable bundle"),N=t("."),U=e("h2",{id:"_2022-11-04",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-11-04","aria-hidden":"true"},"#"),t(" 2022-11-04")],-1),G=t("Added starter dashboards for storage in "),O=t("a separately installable bundle"),H=t("."),V=e("h2",{id:"_2022-06-24",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-06-24","aria-hidden":"true"},"#"),t(" 2022-06-24")],-1),B=t("Added starter dashboards for MQ in "),F=t("a separately installable bundle"),T=t("."),P=e("h2",{id:"_2022-05-30",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-05-30","aria-hidden":"true"},"#"),t(" 2022-05-30")],-1),W=t("Added starter dashboards for IMS and JVM in "),j=t("separately installable bundles"),J=t("."),Q=e("li",null,[e("p",null,[t("Renamed "),e("code",null,"Groups"),t(" dashboard to "),e("code",null,"Db2 home"),t(" in Db2 bundle")])],-1),q=e("h2",{id:"_2022-02-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-02-15","aria-hidden":"true"},"#"),t(" 2022-02-15")],-1),K=t("Added starter dashboards for CICS and Db2 in "),X=t("separately installable bundles"),Y=t("."),Z=e("li",null,[e("p",null,"Removed sample data."),e("p",null,"To forward data to these starter dashboards, you must have ODP.")],-1),$=t("New Elasticsearch index names"),ee=t(" include the OMEGAMON monitoring agent product code ("),te=e("code",null,[t("k"),e("var",null,"pp")],-1),se=t(")."),ae=t("Updated Logstash pipeline configuration"),oe=t(" reflects the new Elasticsearch index names and creates data streams instead of time-based (per-day) indices."),le=t("Updated Elasticsearch index template"),ne=t(" enables data streams."),de=t("Updated Elasticsearch ILM policy"),ie=t(" details, including:"),ce=e("ul",null,[e("li",null,[e("p",null,[t("New starter policy name, "),e("code",null,"omegamon-ds-ilm-policy"),t(", to reflect the use of data streams")]),e("p",null,[t("Was: "),e("code",null,"omegamon-ilm-policy"),t(" (note the "),e("code",null,"-ds"),t(" in the new name)")])]),e("li",null,[e("p",null,"Rollover settings")])],-1),he=t("Moved the starter dashboards GitHub repository from "),re={href:"https://github.com/z-open-data/z-omegamon-analytics-elastic-docker",target:"_blank",rel:"noopener noreferrer"},_e=e("code",null,"z-open-data/z-omegamon-analytics-elastic-docker",-1),ue=t(" to "),pe={href:"https://github.com/z-open-data/odp-elastic-samples",target:"_blank",rel:"noopener noreferrer"},me=e("code",null,"z-open-data/odp-elastic-samples",-1),be=t("."),fe=t("If you don't have an existing Elastic Stack instance that you want to use: the single-container Elastic Stack Docker environment, based on the "),ge=e("code",null,"sebp/elk",-1),ye=t(" Docker image, has been replaced with a multi-container "),xe=t("Docker Compose file"),ke=t(", based on the per-component images built by the Elastic developers."),ve=e("li",null,[e("p",null,[t("Moved the documentation from "),e("code",null,"README.md"),t(" files to a dedicated GitHub repository, "),e("code",null,"z-open-data/z-open-data.github.io"),t(".")])],-1),we=e("h2",{id:"_2021-10-24",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2021-10-24","aria-hidden":"true"},"#"),t(" 2021-10-24")],-1),Ee=e("ul",null,[e("li",null,[e("p",null,[t("First release of starter Elastic dashboards for ODP, in the GitHub repository "),e("code",null,"z-open-data/z-omegamon-analytics-elastic-docker")])]),e("li",null,[e("p",null,"Sample dashboards for the z/OS monitoring agent")])],-1);function ze(De,Me){const a=n("RouterLink"),l=n("ExternalLinkIcon");return i(),c(h,null,[_,u,p,e("ul",null,[e("li",null,[m,s(a,{to:"/odp-elastic-samples/elasticsearch-index-template.html"},{default:o(()=>[b]),_:1}),f,g,y,x,k,v,w]),E]),z,D,M,e("ul",null,[e("li",null,[S,s(a,{to:"/odp-elastic-samples/logstash-config.html"},{default:o(()=>[A]),_:1}),C])]),I,e("ul",null,[e("li",null,[L,s(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[R]),_:1}),N])]),U,e("ul",null,[e("li",null,[G,s(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[O]),_:1}),H])]),V,e("ul",null,[e("li",null,[B,s(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[F]),_:1}),T])]),P,e("ul",null,[e("li",null,[e("p",null,[W,s(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[j]),_:1}),J])]),Q]),q,e("ul",null,[e("li",null,[e("p",null,[K,s(a,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[X]),_:1}),Y])]),Z,e("li",null,[e("p",null,[s(a,{to:"/odp-elastic-samples/elasticsearch-indices-old.html"},{default:o(()=>[$]),_:1}),ee,te,se])]),e("li",null,[e("p",null,[s(a,{to:"/odp-elastic-samples/logstash-config.html"},{default:o(()=>[ae]),_:1}),oe])]),e("li",null,[e("p",null,[s(a,{to:"/odp-elastic-samples/elasticsearch-index-template.html"},{default:o(()=>[le]),_:1}),ne])]),e("li",null,[e("p",null,[s(a,{to:"/odp-elastic-samples/elasticsearch-ilm-policy.html"},{default:o(()=>[de]),_:1}),ie]),ce]),e("li",null,[e("p",null,[he,e("a",re,[_e,s(l)]),ue,e("a",pe,[me,s(l)]),be])]),e("li",null,[e("p",null,[fe,ge,ye,s(a,{to:"/odp-elastic-samples/docker.html"},{default:o(()=>[xe]),_:1}),ke])]),ve]),we,Ee],64)}var Ae=d(r,[["render",ze]]);export{Ae as default};
