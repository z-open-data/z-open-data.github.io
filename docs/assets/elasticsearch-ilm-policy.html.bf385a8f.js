import{_ as c,r as t,o,c as p,a as e,b as l,w as d,t as a,F as m,d as n,e as u}from"./app.a3b49842.js";const h={},b=e("h1",{id:"create-an-elasticsearch-index-lifecycle-management-ilm-policy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-an-elasticsearch-index-lifecycle-management-ilm-policy","aria-hidden":"true"},"#"),n(" Create an Elasticsearch index lifecycle management (ILM) policy")],-1),_={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"Already configured Elastic for ODP?",-1),y=n("If you have already configured Elastic for earlier ODP Elastic samples that use an "),g=n("old index naming pattern"),w=n(":"),x=e("li",null,[e("p",null,"Keep the ILM policy for those old indices, to continue managing them while they still exist. Delete that policy only after all of the indices that refer to it have been deleted.")],-1),v=e("p",null,"For new indices for the current starter dashboards, use a policy with a different name, as shown in the following starter sample.",-1),k=n("The following starter policy is named "),I=n(" (note the "),E=e("code",null,"ds-",-1),T=n("), which is deliberately different from the "),L=n(" name used in earlier samples."),N=e("p",null,"The different policy name reflects the fact that the current starter Elastic configuration uses data streams, and also enables old and new indices to be managed separately.",-1),C=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,[n("If you "),e("em",null,"don't"),n(" use an ILM policy, and you keep forwarding data to Elastic, then you will eventually run out of disk space.")])],-1),D=e("p",null,"Here is a starter policy:",-1),M={class:"language-text ext-text line-numbers-mode"},P={class:"language-text"},B=u('<div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div>',1),F=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"You can paste this definition into the Kibana console. In Kibana, select Management \u25B6 Dev Tools \u25B6 Console.")],-1),V=e("p",null,"This starter policy is designed for use with data streams. The policy contains a rollover action that triggers the creation of a new backing index for the data stream either when the primary shard size reaches 10 GB, or 10 days after the current backing index was created, whichever occurs first.",-1),z=e("p",null,"This starter policy deletes indices 20 days after rollover.",-1),K=e("p",null,[n("This policy is a starter only. Create a policy that matches "),e("em",null,"your"),n(" organization's requirements and available disk space.")],-1),R=n("For details on creating index lifecycle policies and associating them with indices, see the "),S={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html",target:"_blank",rel:"noopener noreferrer"},$=n("Elastic Stack ILM documentation"),A=n(".");function G(s,O){const i=t("RouterLink"),r=t("ExternalLinkIcon");return o(),p(m,null,[b,e("div",_,[f,e("p",null,[y,l(i,{to:"/odp-elastic-samples/elasticsearch-indices-old.html"},{default:d(()=>[g]),_:1}),w]),e("ul",null,[x,e("li",null,[v,e("p",null,[k,e("code",null,a(s.$frontmatter.namespace)+"-ds-ilm-policy",1),I,E,T,e("code",null,a(s.$frontmatter.namespace)+"-ilm-policy",1),L]),N])])]),C,D,e("div",M,[e("pre",P,[e("code",null,"PUT _ilm/policy/"+a(s.$frontmatter.namespace)+`-ds-ilm-policy
{
  "policy": {
    "phases": {
      "hot": {
        "min_age": "0ms",
        "actions": {
          "rollover": {
            "max_primary_shard_size": "10gb",
            "max_age": "10d"
          },
          "set_priority": {
            "priority": 100
          }
        }
      },
      "warm": {
        "min_age": "10d",
        "actions": {
          "set_priority": {
            "priority": 50
          }
        }
      },
      "delete": {
        "min_age": "20d",
        "actions": {
          "delete": {
            "delete_searchable_snapshot": true
          }
        }
      }
    }
  }
}
`,1)]),B]),F,V,z,K,e("p",null,[R,e("a",S,[$,l(r)]),A])],64)}var q=c(h,[["render",G]]);export{q as default};
