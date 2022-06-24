import{_ as o,o as l,a as i,b as e,t as s,F as r,e as t,c as a}from"./app.5bc778db.js";const d={},u=e("h1",{id:"customize-kibana-space-settings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customize-kibana-space-settings","aria-hidden":"true"},"#"),t(" Customize Kibana space settings")],-1),c=e("li",null,[e("p",null,"Select Management \u25B6 Stack Management \u25B6 Kibana: Advanced Settings")],-1),p=e("p",null,"Set the following values:",-1),h=e("li",null,[e("p",null,[t("In the "),e("strong",null,"Search"),t(" category, set "),e("strong",null,"Ignore filter(s)"),t(" to "),e("strong",null,"On")])],-1),f=e("p",null,[t("In the "),e("strong",null,"General"),t(" category:")],-1),g=e("p",null,[t("Set "),e("strong",null,"Default route"),t(" to:")],-1),b=t("When you go to the space, this value causes Kibana to show the "),m=t(" dashboard."),_=a(`<li><p>Set <strong>Time filter defaults</strong> to the last 24 hours (this is a recommendation only: set whatever default time filter meets your requirements):</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;now-24h&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;now&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div></li>`,1),k=a('<h2 id="about-the-ignore-filter-s-setting" tabindex="-1"><a class="header-anchor" href="#about-the-ignore-filter-s-setting" aria-hidden="true">#</a> About the Ignore filter(s) setting</h2><p>Pinned filters in Kibana are useful to maintain consistent filtering when switching between dashboards. For example, to limit results to a particular system. However, different dashboards use different index patterns. If a visualization uses an index pattern that does not contain the field whose value is restricted by a pinned filter, then, by default, the visualization shows no results.</p><p>For example, some dashboards can be usefully filtered by the <code>job_name</code> field, so it makes sense for users to pin a filter for <code>job_name</code>.</p><p>However, the data for other dashboards might not include a <code>job_name</code> field. For those dashboards, by default, a <code>job_name</code> filter causes the dashboard visualizations to display &quot;No results found&quot;.</p><p>To ignore a filter if the field is not in the index pattern, set the <strong>Ignore filter(s)</strong> (<code>courier:ignoreFilterIfFieldNotInIndex</code>) setting to <strong>On</strong>.</p>',5);function y(n,v){return l(),i(r,null,[u,e("ol",null,[e("li",null,[e("p",null,"In Kibana, go to the space for the "+s(n.$frontmatter.bundle)+" bundle.",1)]),c,e("li",null,[p,e("ul",null,[h,e("li",null,[f,e("ul",null,[e("li",null,[g,e("p",null,[e("code",null,"/app/dashboards#/view/"+s(n.$frontmatter.dashboard_id),1)]),e("p",null,[b,e("strong",null,s(n.$frontmatter.dashboard_title),1),m])]),_])])])])]),k],64)}var q=o(d,[["render",y]]);export{q as default};
