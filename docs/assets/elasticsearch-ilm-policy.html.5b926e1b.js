import{_ as r,r as l,o as i,c as t,a as n,t as c,b as o,F as p,d as e,e as m}from"./app.a3b49842.js";const b={},u=n("h1",{id:"create-an-elasticsearch-index-lifecycle-management-ilm-policy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-an-elasticsearch-index-lifecycle-management-ilm-policy","aria-hidden":"true"},"#"),e(" Create an Elasticsearch index lifecycle management (ILM) policy")],-1),d=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[e("If you "),n("em",null,"don't"),e(" use an ILM policy, and you keep forwarding data to Elastic, then you will eventually run out of disk space.")])],-1),h=n("p",null,"Here is a starter policy:",-1),_={class:"language-text ext-text line-numbers-mode"},y={class:"language-text"},g=m('<div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div>',1),f=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"You can paste this definition into the Kibana console. In Kibana, select Management \u25B6 Dev Tools \u25B6 Console.")],-1),x=n("p",null,"This starter policy is designed for use with data streams. The policy contains a rollover action that triggers the creation of a new backing index for the data stream either when the primary shard size reaches 10 GB, or 10 days after the current backing index was created, whichever occurs first.",-1),v=n("p",null,"This starter policy deletes indices 20 days after rollover.",-1),w=n("p",null,[e("This policy is a starter only. Create a policy that matches "),n("em",null,"your"),e(" organization's requirements and available disk space.")],-1),k=e("For details on creating index lifecycle policies and associating them with indices, see the "),I={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-lifecycle-management.html",target:"_blank",rel:"noopener noreferrer"},T=e("Elastic Stack ILM documentation"),E=e(".");function N(s,L){const a=l("ExternalLinkIcon");return i(),t(p,null,[u,d,h,n("div",_,[n("pre",y,[n("code",null,"PUT _ilm/policy/"+c(s.$frontmatter.namespace)+`-ds-ilm-policy
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
`,1)]),g]),f,x,v,w,n("p",null,[k,n("a",I,[T,o(a)]),E])],64)}var C=r(b,[["render",N]]);export{C as default};
