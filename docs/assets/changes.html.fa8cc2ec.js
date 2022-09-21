import{_ as d,r as n,o as i,c,a as e,b as s,w as o,F as h,d as t}from"./app.0ce3043f.js";const r={},_=e("h1",{id:"what-s-new",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-new","aria-hidden":"true"},"#"),t(" What's new")],-1),u=e("p",null,[t("History of significant updates ("),e("em",null,"yyyy-mm-dd"),t(").")],-1),p=e("h2",{id:"_2022-06-24",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-06-24","aria-hidden":"true"},"#"),t(" 2022-06-24")],-1),m=t("Added sample dashboards for MQ in "),b=t("a separately installable bundle"),f=t("."),g=e("h2",{id:"_2022-05-30",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-05-30","aria-hidden":"true"},"#"),t(" 2022-05-30")],-1),y=t("Added sample dashboards for IMS and JVM in "),k=t("separately installable bundles"),x=t("."),w=e("li",null,[e("p",null,[t("Renamed "),e("code",null,"Groups"),t(" dashboard to "),e("code",null,"Db2 home"),t(" in Db2 bundle")])],-1),E=e("h2",{id:"_2022-02-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2022-02-15","aria-hidden":"true"},"#"),t(" 2022-02-15")],-1),v=t("Added sample dashboards for CICS and Db2 in "),z=t("separately installable bundles"),D=t("."),M=e("li",null,[e("p",null,"Removed sample data."),e("p",null,"To forward data to these sample dashboards, you must have ODP.")],-1),I=t("New Elasticsearch index names"),L=t(" include the OMEGAMON monitoring agent product code ("),N=e("code",null,[t("k"),e("var",null,"pp")],-1),R=t(")."),S=t("Updated Logstash pipeline configuration"),A=t(" reflects the new Elasticsearch index names and creates data streams instead of time-based (per-day) indices."),C=t("Updated Elasticsearch index template"),G=t(" enables data streams."),O=t("Updated Elasticsearch ILM policy"),H=t(" details, including:"),V=e("ul",null,[e("li",null,[e("p",null,[t("New sample policy name, "),e("code",null,"omegamon-ds-ilm-policy"),t(", to reflect the use of data streams")]),e("p",null,[t("Was: "),e("code",null,"omegamon-ilm-policy"),t(" (note the "),e("code",null,"-ds"),t(" in the new name)")])]),e("li",null,[e("p",null,"Rollover settings")])],-1),B=t("Moved the sample dashboards GitHub repository from "),F={href:"https://github.com/z-open-data/z-omegamon-analytics-elastic-docker",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"z-open-data/z-omegamon-analytics-elastic-docker",-1),P=t(" to "),T={href:"https://github.com/z-open-data/odp-elastic-samples",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"z-open-data/odp-elastic-samples",-1),j=t("."),J=t("If you don't have an existing Elastic Stack instance that you want to use: the single-container Elastic Stack Docker environment, based on the "),Q=e("code",null,"sebp/elk",-1),q=t(" Docker image, has been replaced with a multi-container "),K=t("Docker Compose file"),X=t(", based on the per-component images built by the Elastic developers."),Y=e("li",null,[e("p",null,[t("Moved the documentation from "),e("code",null,"README.md"),t(" files to a dedicated GitHub repository, "),e("code",null,"z-open-data/z-open-data.github.io"),t(".")])],-1),Z=e("h2",{id:"_2021-10-24",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2021-10-24","aria-hidden":"true"},"#"),t(" 2021-10-24")],-1),$=e("ul",null,[e("li",null,[e("p",null,[t("First release of sample Elastic dashboards for ODP, in the GitHub repository "),e("code",null,"z-open-data/z-omegamon-analytics-elastic-docker")])]),e("li",null,[e("p",null,"Sample dashboards for the z/OS monitoring agent")])],-1);function ee(te,se){const l=n("RouterLink"),a=n("ExternalLinkIcon");return i(),c(h,null,[_,u,p,e("ul",null,[e("li",null,[m,s(l,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[b]),_:1}),f])]),g,e("ul",null,[e("li",null,[e("p",null,[y,s(l,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[k]),_:1}),x])]),w]),E,e("ul",null,[e("li",null,[e("p",null,[v,s(l,{to:"/odp-elastic-samples/dashboard-bundles.html"},{default:o(()=>[z]),_:1}),D])]),M,e("li",null,[e("p",null,[s(l,{to:"/odp-elastic-samples/elasticsearch-indices-old.html"},{default:o(()=>[I]),_:1}),L,N,R])]),e("li",null,[e("p",null,[s(l,{to:"/odp-elastic-samples/logstash-config.html"},{default:o(()=>[S]),_:1}),A])]),e("li",null,[e("p",null,[s(l,{to:"/odp-elastic-samples/elasticsearch-index-template.html"},{default:o(()=>[C]),_:1}),G])]),e("li",null,[e("p",null,[s(l,{to:"/odp-elastic-samples/elasticsearch-ilm-policy.html"},{default:o(()=>[O]),_:1}),H]),V]),e("li",null,[e("p",null,[B,e("a",F,[U,s(a)]),P,e("a",T,[W,s(a)]),j])]),e("li",null,[e("p",null,[J,Q,q,s(l,{to:"/odp-elastic-samples/docker.html"},{default:o(()=>[K]),_:1}),X])]),Y]),Z,$],64)}var oe=d(r,[["render",ee]]);export{oe as default};
