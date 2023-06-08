import{_ as o,o as a,c as l,a as e,t as s,F as i,d as t,e as r}from"./app.eca5dfe0.js";const d={},u=e("h1",{id:"customize-kibana-space-settings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customize-kibana-space-settings","aria-hidden":"true"},"#"),t(" Customize Kibana space settings")],-1),c=e("li",null,[e("p",null,"Select Management \u25B6 Stack Management \u25B6 Kibana: Advanced Settings")],-1),h=e("p",null,"Set the following values:",-1),p=e("li",null,[e("p",null,[t("In the "),e("strong",null,"Search"),t(" category, set "),e("strong",null,"Ignore filter(s)"),t(" to "),e("strong",null,"On")])],-1),f=e("p",null,[t("In the "),e("strong",null,"General"),t(" category:")],-1),_=e("p",null,[t("Set "),e("strong",null,"Default route"),t(" to:")],-1),g=t("When you go to the space, this value causes Kibana to show the "),m=t(" dashboard."),b=r(`<li><p>Set <strong>Time filter defaults</strong> to the last 24 hours (this is a recommendation only: set whatever default time filter meets your requirements):</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;now-24h&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;now&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div></li>`,1),k=e("h2",{id:"about-the-ignore-filter-s-setting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#about-the-ignore-filter-s-setting","aria-hidden":"true"},"#"),t(" About the Ignore filter(s) setting")],-1),y=e("p",null,"Pinned filters in Kibana are useful to maintain consistent filtering when switching between dashboards. For example, to limit results to a particular system. However, different dashboards use different index patterns. If a visualization uses an index pattern that does not contain the field whose value is restricted by a pinned filter, then, by default, the visualization shows no results.",-1),v=t("For example, some dashboards can be usefully filtered by the "),w=t(" field, so it makes sense for users to pin a filter for "),S=t("."),I=t("However, the data for other dashboards might not include a "),q=t(" field. For those dashboards, by default, a "),F=t(' filter causes the dashboard visualizations to display "No results found".'),$=e("p",null,[t("To ignore a filter if the field is not in the index pattern, set the "),e("strong",null,"Ignore filter(s)"),t(" ("),e("code",null,"courier:ignoreFilterIfFieldNotInIndex"),t(") setting to "),e("strong",null,"On"),t(".")],-1);function x(n,z){return a(),l(i,null,[u,e("ol",null,[e("li",null,[e("p",null,"In Kibana, go to the space for the "+s(n.$frontmatter.bundle)+" bundle.",1)]),c,e("li",null,[h,e("ul",null,[p,e("li",null,[f,e("ul",null,[e("li",null,[_,e("p",null,[e("code",null,"/app/dashboards#/view/"+s(n.$frontmatter.dashboard_id),1)]),e("p",null,[g,e("strong",null,s(n.$frontmatter.dashboard_title),1),m])]),b])])])])]),k,y,e("p",null,[v,e("code",null,s(n.$frontmatter.field_name),1),w,e("code",null,s(n.$frontmatter.field_name),1),S]),e("p",null,[I,e("code",null,s(n.$frontmatter.field_name),1),q,e("code",null,s(n.$frontmatter.field_name),1),F]),$],64)}var N=o(d,[["render",x]]);export{N as default};
