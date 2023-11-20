import{_ as n,c as s}from"./app.8876b064.js";const a={},p=s(`<h1 id="optional-filter-fields" tabindex="-1"><a class="header-anchor" href="#optional-filter-fields" aria-hidden="true">#</a> Optional: Filter fields</h1><p>By default, the OMEGAMON Data Connect component of ODP forwards all data that it receives.</p><p>Optionally, you can specify a filter in the OMEGAMON Data Connect configuration file to forward only specific fields.</p><p>Filters are useful for reducing data volume if you have limited storage capacity.</p><p>However, filters restrict the fields that are available for analysis.</p><p>If you decide that you want to limit the forwarded data to just the fields used by the starter dashboards, add the following filter to the OMEGAMON Data Connect configuration file:</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This filter corresponds to the <em>current</em> starter dashboards. You might want to create dashboards that use other fields, or extend the samples with other fields. Future samples might require fields that this filter excludes. It is your decision whether to introduce a filter, and how to manage it.</p></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">connect</span><span class="token punctuation">:</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">products</span><span class="token punctuation">:</span>
      <span class="token key atrule">kjj</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">tables</span><span class="token punctuation">:</span>
          <span class="token key atrule">gcsumm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
              <span class="token punctuation">-</span> collector_id
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> collection_mode
              <span class="token punctuation">-</span> process_id
              <span class="token punctuation">-</span> max_heap_size
              <span class="token punctuation">-</span> max_used_heap
              <span class="token punctuation">-</span> mean_heap_size
              <span class="token punctuation">-</span> mean_used_heap
              <span class="token punctuation">-</span> min_heap_size
              <span class="token punctuation">-</span> min_used_heap
              <span class="token punctuation">-</span> nursery_amount_flipped
              <span class="token punctuation">-</span> avg_occupancy_percent
              <span class="token punctuation">-</span> allocation_failure_count
              <span class="token punctuation">-</span> final_references_cleared_count
              <span class="token punctuation">-</span> collections_per_minute
              <span class="token punctuation">-</span> collection_count
              <span class="token punctuation">-</span> system_collection_count
              <span class="token punctuation">-</span> concurrent_collection_count
              <span class="token punctuation">-</span> avg_collection_interval
              <span class="token punctuation">-</span> avg_pause_time
              <span class="token punctuation">-</span> max_pause_time
              <span class="token punctuation">-</span> min_pause_time
              <span class="token punctuation">-</span> percent_time_in_collection_pauses
              <span class="token punctuation">-</span> percent_time_unpaused
              <span class="token punctuation">-</span> global_collection_count
              <span class="token punctuation">-</span> avg_global_collection_interval
              <span class="token punctuation">-</span> avg_global_pause_time
              <span class="token punctuation">-</span> nursery_collection_count
              <span class="token punctuation">-</span> avg_nursery_collection_interval
              <span class="token punctuation">-</span> avg_nursery_pause_time
              <span class="token punctuation">-</span> synchronous_collection_count
              <span class="token punctuation">-</span> partial_collection_count
              <span class="token punctuation">-</span> avg_partial_collection_interval
              <span class="token punctuation">-</span> avg_partial_pause_time
              <span class="token punctuation">-</span> global_mark_phase_collection_count
              <span class="token punctuation">-</span> global_mark_phase_avg_collection_interval
              <span class="token punctuation">-</span> global_mark_phase_avg_pause_time
              <span class="token punctuation">-</span> global_mark_phase_cycle_count
              <span class="token punctuation">-</span> global_mark_phase_avg_collections_per_cycle
              <span class="token punctuation">-</span> sample_period
              <span class="token punctuation">-</span> jvm_profile
              <span class="token punctuation">-</span> jvm_server
          <span class="token key atrule">zosmem</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
              <span class="token punctuation">-</span> collector_id
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> process_id
              <span class="token punctuation">-</span> heap_size
              <span class="token punctuation">-</span> mem24_size
              <span class="token punctuation">-</span> mem24_user
              <span class="token punctuation">-</span> mem24_auth
              <span class="token punctuation">-</span> mem24_free
              <span class="token punctuation">-</span> mem24_used_pct
              <span class="token punctuation">-</span> mem24_free_pct
              <span class="token punctuation">-</span> mem31_size
              <span class="token punctuation">-</span> mem31_user
              <span class="token punctuation">-</span> mem31_auth
              <span class="token punctuation">-</span> mem31_free
              <span class="token punctuation">-</span> mem31_free_pct
              <span class="token punctuation">-</span> mem31_used_pct
              <span class="token punctuation">-</span> mem64_limit
              <span class="token punctuation">-</span> mem64_used
              <span class="token punctuation">-</span> mem64_free
              <span class="token punctuation">-</span> mem64_used_pct
              <span class="token punctuation">-</span> mem64_free_pct
          <span class="token key atrule">health</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
              <span class="token punctuation">-</span> collector_id
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> process_id
              <span class="token punctuation">-</span> subsystem_type
              <span class="token punctuation">-</span> gcs_per_minute
              <span class="token punctuation">-</span> percent_time_in_gc_pauses
              <span class="token punctuation">-</span> heap_occupancy
              <span class="token punctuation">-</span> system_gc_count
              <span class="token punctuation">-</span> lock_missed_percent
              <span class="token punctuation">-</span> lock_util_percent
              <span class="token punctuation">-</span> avg_lock_hold_time
              <span class="token punctuation">-</span> general_cpu_percent
              <span class="token punctuation">-</span> ziip_on_cp_percent
              <span class="token punctuation">-</span> thread_count
              <span class="token punctuation">-</span> threads_blocked
              <span class="token punctuation">-</span> application
              <span class="token punctuation">-</span> jvm_profile
              <span class="token punctuation">-</span> mem64_free_pct
              <span class="token punctuation">-</span> mem64_free
              <span class="token punctuation">-</span> mem24_free
              <span class="token punctuation">-</span> mem24_free_pct
              <span class="token punctuation">-</span> mem31_free
              <span class="token punctuation">-</span> mem31_free_pct
              <span class="token punctuation">-</span> jvm_server
          <span class="token key atrule">natmem</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
              <span class="token punctuation">-</span> collector_id
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> process_id
              <span class="token punctuation">-</span> category_name
              <span class="token punctuation">-</span> category_parent
              <span class="token punctuation">-</span> allocated_deep
              <span class="token punctuation">-</span> allocated_shallow
              <span class="token punctuation">-</span> bytes_deep
              <span class="token punctuation">-</span> bytes_shallow
          <span class="token key atrule">cpu</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
              <span class="token punctuation">-</span> collector_id
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> process_id
              <span class="token punctuation">-</span> elapsed_time
              <span class="token punctuation">-</span> general_cpu_time
              <span class="token punctuation">-</span> ifa_cpu_time
              <span class="token punctuation">-</span> general_cpu_percent
              <span class="token punctuation">-</span> ifa_cpu_percent
              <span class="token punctuation">-</span> ifa_on_general_cpu_percent
              <span class="token punctuation">-</span> jvm_profile
              <span class="token punctuation">-</span> jvm_server
          <span class="token key atrule">zcsumm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
              <span class="token punctuation">-</span> collector_id
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> asid
              <span class="token punctuation">-</span> process_id
              <span class="token punctuation">-</span> request_count
              <span class="token punctuation">-</span> api_name
              <span class="token punctuation">-</span> method
              <span class="token punctuation">-</span> api_method
              <span class="token punctuation">-</span> resp_time_avg
              <span class="token punctuation">-</span> sor_time_avg
              <span class="token punctuation">-</span> zosconnect_avg
              <span class="token punctuation">-</span> error_count
              <span class="token punctuation">-</span> timeout_count
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br></div></div><p>After editing the configuration file, restart OMEGAMON Data Connect.</p>`,9);function e(t,l){return p}var u=n(a,[["render",e]]);export{u as default};
