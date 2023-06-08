import{_ as r,r as a,o as c,c as i,a as e,t as l,b as s,F as h,d as t}from"./app.eca5dfe0.js";const d={},_=e("h1",{id:"activate-controls-to-drive-nth-collection",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#activate-controls-to-drive-nth-collection","aria-hidden":"true"},"#"),t(" Activate controls to drive NTH collection")],-1),m=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"To ensure that Near Term History, NTH, is collecting data properly, some specific subsystem and/or agent configuration changes may be necessary. These should be set up via the E3270UI or TEP user interfaces.")],-1),p=t("For ZOS System Statistics "),u=e("strong",null,"opersys",-1),f=t(" attributes - ZOSMETRICS=YES should be set in DSNZPARM. From the E3270UI as described in "),S={href:"https://www.ibm.com/docs/en/om-db2-pe/5.5.0?topic=interface-resource-managers",target:"_blank",rel:"noopener noreferrer"},b=t("OMEGAMON for Db2 Performance Expert on z/OS 5.5"),g=t(", choose Option H for DSNZPARM."),E=t("From there, top right of the next panel, choose *-OTHERS where you'll be redirected to this panel "),T={href:"https://www.ibm.com/docs/en/om-db2-pe/5.5.0?topic=managers-dsnzparm-other-system-parameters",target:"_blank",rel:"noopener noreferrer"},M=t("OMEGAMON for Db2 Performance Expert on z/OS 5.5"),O=t(" where you can change the ZOSMETRICS parm to YES in the collection under the label "),v=e("strong",null,"From DSN6SPRM",-1),y=t("."),P=e("p",null,"A similar process can be followed from the Tivoli Enterprise Portal to make this change.",-1),I=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Parameter ZOSMETRICS must be set to YES for enabling DB2 to retrieve data from the RMF interface. If ZOSMETRICS is not set to YES, you might see negative Operating System CPU data. ZPARM ZOSMETRICS in DSN6SPRM.")],-1);function N(n,R){const o=a("ExternalLinkIcon");return c(),i(h,null,[_,m,e("p",null,"The following changes are required for some of the "+l(n.$frontmatter.bundle)+" attribute tables.",1),e("p",null,[p,u,f,e("a",S,[b,s(o)]),g]),e("p",null,[E,e("a",T,[M,s(o)]),O,v,y]),P,I],64)}var x=r(d,[["render",N]]);export{x as default};