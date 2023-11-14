import{_ as a,r,o as i,c,a as e,t as l,b as s,F as u,d as t}from"./app.063d05bb.js";const d={},h=e("h1",{id:"activate-controls-to-drive-nth-collection",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#activate-controls-to-drive-nth-collection","aria-hidden":"true"},"#"),t(" Activate controls to drive NTH collection")],-1),m=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"To ensure that Near Term History, NTH, is collecting data properly, some specific subsystem and/or agent configuration changes may be necessary. These should be set up via the E3270UI or TEP user interfaces.")],-1),_=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"The following tables from the MQ Agent can benefit from some extra enablement (though they will return rows even without).")],-1),p=t("Queue Status \u2013 Queue manager enablement: Turn on MONQ (queue monitoring) in the queue manager for some columns to have data - the oldest message age and related queue timing columns. This is documented in "),g={href:"https://www.ibm.com/docs/en/om-msg/7.5.0?topic=workspaces-collecting-data-queue-status-workspace",target:"_blank",rel:"noopener noreferrer"},f=t("IBM OMEGAMON for Messaging on z/OS"),b=t("Channel Status \u2013 Queue manager enablement: Turn on MONCHL (channel monitoring) in the queue manager for some columns to have data. This is documented in "),w={href:"https://www.ibm.com/docs/en/om-msg/7.5.0?topic=workspaces-collecting-data-channel-performance-channel-status-workspace",target:"_blank",rel:"noopener noreferrer"},M=t("IBM OMEGAMON for Messaging on z/OS"),T=t("Queue Long-Term History \u2013 Extra agent enablement for some columns like messages_read and messages_read_per_second, and messages_put and messages_put_per_second. These cannot be enabled out of the box due to considerations required, and there is a choice on z/OS about how to enable. The following gives a summary: "),O={href:"https://www.ibm.com/docs/en/om-msg/7.5.0?topic=workspaces-collecting-data-queue-statistics-workspace",target:"_blank",rel:"noopener noreferrer"},k=t("IBM OMEGAMON for Messaging on z/OS"),v=t(" However, this chapter should be consulted for considerations: "),y={href:"https://www.ibm.com/docs/en/om-msg/7.5.0?topic=guide-collecting-queue-statistics-data",target:"_blank",rel:"noopener noreferrer"},E=t("IBM OMEGAMON for Messaging on z/OS"),N={class:"custom-container tip"},q=e("p",{class:"custom-container-title"},"Note",-1),I=t("The rows returned are subject to another consideration: This queue data is sampled data, and sampling only occurs as per settings on SET QUEUE parameter statement, which is configured by Config Mgr; by default, sampling like this only occurs for predefined queues. It is atypical to change this, but some customers do. Options are summarized here: "),S={href:"https://www.ibm.com/docs/en/om-msg/7.5.0?topic=options-set-queue",target:"_blank",rel:"noopener noreferrer"},x=t("IBM OMEGAMON for Messaging on z/OS");function B(n,z){const o=r("ExternalLinkIcon");return i(),c(u,null,[h,m,e("p",null,"The following changes are required for some of the "+l(n.$frontmatter.bundle)+" attribute tables.",1),_,e("ul",null,[e("li",null,[e("p",null,[p,e("a",g,[f,s(o)])])]),e("li",null,[e("p",null,[b,e("a",w,[M,s(o)])])]),e("li",null,[e("p",null,[T,e("a",O,[k,s(o)]),v,e("a",y,[E,s(o)])])])]),e("div",N,[q,e("p",null,[I,e("a",S,[x,s(o)])])])],64)}var Q=a(d,[["render",B]]);export{Q as default};