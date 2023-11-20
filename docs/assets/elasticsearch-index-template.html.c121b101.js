import{_ as i,o as r,a as l,b as e,t as s,F as o,e as n,c as t}from"./app.8876b064.js";const c={},p=e("h1",{id:"create-an-elasticsearch-index-template",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-an-elasticsearch-index-template","aria-hidden":"true"},"#"),n(" Create an Elasticsearch index template")],-1),d={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"Already configured Elastic for ODP?",-1),h=n("Before creating a new index template, check for an existing index template that matches the "),u=n(" index pattern."),b=e("p",null,"In Kibana, select Management \u25B6 Stack Management \u25B6 Data: Index Management \u25B6 Index Templates.",-1),f=e("p",null,"If a matching template exists, then rather than creating a new index template, ensure that the existing template matches the current required characteristics.",-1),g=e("p",null,"The starter dashboards require an index template with the following characteristics:",-1),_=n("Applies to the index pattern "),x=e("li",null,[e("p",null,[n("Maps string fields to the "),e("code",null,"keyword"),n(" data type")])],-1),y=e("li",null,[e("p",null,[n("Enables data streams (note the "),e("code",null,"data_stream"),n(" object in the following sample)")])],-1),v=e("p",null,"Other characteristics of the index template are your choice.",-1),w=e("p",null,"Here is a starter index template for ODP data:",-1),I={class:"language-text ext-text line-numbers-mode"},E={class:"language-text"},M=t('<div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div>',2),T=t('<h2 id="number-of-replicas" tabindex="-1"><a class="header-anchor" href="#number-of-replicas" aria-hidden="true">#</a> Number of replicas</h2><p>Set the value of <code>number_of_replicas</code> to match your Elastic environment.</p><p><strong>In a single-node Elastic environment, set <code>number_of_replicas</code> to 0.</strong></p><p>An Elastic environment can contain one or more running instances of Elasticsearch. Each instance is known as a node.</p><p>Production Elastic environments typically contain multiple nodes. Multi-node environments support resilience by distributing primary and replica shards of data across nodes.</p><p>The default value of <code>number_of_replicas</code> is 1, reflecting this support for resilience.</p><p>However, in a single-node environment, with a single running instance of Elasticsearch\u2014such as a small &quot;sandbox&quot; for testing\u2014there are no replicas.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Neglecting to set <code>number_of_replicas</code> to 0 in a single-node Elastic environment causes problems:</p><ul><li>&quot;Yellow&quot; health status of data streams and indices due to the missing replicas.</li><li>Index lifecycle management (ILM) policies do not delete indices. ILM policies wait for all shard copies (replicas) to be active before moving an index to the delete phase. In a single-node environment, if you don&#39;t set <code>number_of_replicas</code> to 0, ILM policies wait forever for the missing replicas.</li></ul></div><h2 id="index-lifecycle-management-policy" tabindex="-1"><a class="header-anchor" href="#index-lifecycle-management-policy" aria-hidden="true">#</a> Index lifecycle management policy</h2><p>In <code>template.settings.lifecycle.name</code>, specify the name of the ILM policy that you want to use for ODP data.</p><h2 id="no-raw-fields" tabindex="-1"><a class="header-anchor" href="#no-raw-fields" aria-hidden="true">#</a> No <code>.raw</code> fields</h2><p>The index template maps all string fields to the <code>keyword</code> data type rather than the default <code>text</code> data type.</p><p>This mapping enables the starter dashboards to use the original field names for sorting and aggregation.</p><p>The starter dashboards do not need a separate <code>.raw</code> version of string fields.</p>',14);function k(a,N){return r(),l(o,null,[p,e("div",d,[m,e("p",null,[h,e("code",null,s(a.$frontmatter.namespace)+"-*",1),u]),b,f]),g,e("ul",null,[e("li",null,[e("p",null,[_,e("code",null,s(a.$frontmatter.namespace)+"-*",1)])]),x,y]),v,w,e("div",I,[e("pre",E,[e("code",null,"PUT _index_template/"+s(a.$frontmatter.namespace)+`
{
  "index_patterns": ["`+s(a.$frontmatter.namespace)+`-*"],
  "template": {
    "settings": {
      "number_of_replicas": 0,
      "lifecycle": {
        "name": "`+s(a.$frontmatter.namespace)+`-ds-ilm-policy"
      }
    },
    "mappings": {
      "dynamic_templates": [ {
        "strings": {
          "match_mapping_type": "string",
          "mapping": {
            "type": "keyword"
          }
        }
      } ]
    }
  },
  "data_stream": { }
}
`,1)]),M]),T],64)}var D=i(c,[["render",k]]);export{D as default};
