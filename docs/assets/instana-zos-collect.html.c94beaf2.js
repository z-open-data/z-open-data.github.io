import{_ as s,r as a,o as r,c as i,a as e,t as l,b as c,F as d,d as t}from"./app.063d05bb.js";const _={},h=e("h1",{id:"activate-controls-to-drive-nth-collection",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#activate-controls-to-drive-nth-collection","aria-hidden":"true"},"#"),t(" Activate controls to drive NTH collection")],-1),u=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"To ensure that Near Term History, NTH, is collecting data properly, some specific subsystem and/or agent configuration changes may be necessary. These should be set up via the E3270UI or TEP user interfaces.")],-1),m=t("The tables Real_Storage_Utilization_History "),p=e("strong",null,"realstor",-1),f=t(" and Common_Storage_Utilization_History "),g=e("strong",null,"comstor",-1),b=t(" require GPMSERVE configuration. "),T={href:"https://www.ibm.com/docs/en/SSPS7L_5.6.0/omzmon560_planandconfig.pdf",target:"_blank",rel:"noopener noreferrer"},y=t("The IBM Z OMEGAMON Monitor for z/OS 5.6: Planning and Configuration Guide has the documentation."),v=t(' See the section "Enabling RMF Data Collection".'),S=e("li",null,[e("p",null,[t("Table System_CPU_Utilization "),e("strong",null,"syscpuutil"),t(" requires RMF to be configured on the LPAR to acquire some of the data reported which should be standard for any LPAR.")])],-1);function E(o,P){const n=a("ExternalLinkIcon");return r(),i(d,null,[h,u,e("p",null,"The following changes are required for some of the "+l(o.$frontmatter.bundle)+" attribute tables.",1),e("ul",null,[e("li",null,[e("p",null,[m,p,f,g,b,e("a",T,[y,c(n)]),v])]),S])],64)}var N=s(_,[["render",E]]);export{N as default};