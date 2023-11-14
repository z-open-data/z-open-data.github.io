import{_ as n,e as s}from"./app.063d05bb.js";const a={},p=s(`<h1 id="optional-filter-fields" tabindex="-1"><a class="header-anchor" href="#optional-filter-fields" aria-hidden="true">#</a> Optional: Filter fields</h1><p>By default, the OMEGAMON Data Connect component of ODP forwards all data that it receives.</p><p>Optionally, you can specify a filter in the OMEGAMON Data Connect configuration file to forward only specific fields.</p><p>Filters are useful for reducing data volume if you have limited storage capacity.</p><p>However, filters restrict the fields that are available for analysis.</p><p>If you decide that you want to limit the forwarded data to just the fields used by the starter dashboards, add the following filter to the OMEGAMON Data Connect configuration file:</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This filter corresponds to the <em>current</em> starter dashboards. You might want to create dashboards that use other fields, or extend the samples with other fields. Future samples might require fields that this filter excludes. It is your decision whether to introduce a filter, and how to manage it.</p></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">connect</span><span class="token punctuation">:</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">products</span><span class="token punctuation">:</span>
      <span class="token key atrule">ki5</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">tables</span><span class="token punctuation">:</span>
          <span class="token key atrule">adrspacs</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> ims_id
              <span class="token punctuation">-</span> job_name
              <span class="token punctuation">-</span> type
              <span class="token punctuation">-</span> swapped_out
              <span class="token punctuation">-</span> cpu_time
              <span class="token punctuation">-</span> cpu_percentage
              <span class="token punctuation">-</span> common_page_in_rate
              <span class="token punctuation">-</span> private_page_in_rate
              <span class="token punctuation">-</span> excp_rate
              <span class="token punctuation">-</span> working_set_size
              <span class="token punctuation">-</span> tcb_cpu_percentage
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> imsplex_name
          <span class="token key atrule">ictltdsm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> target_datastore
              <span class="token punctuation">-</span> response_time
              <span class="token punctuation">-</span> input_pre_otma_time
              <span class="token punctuation">-</span> input_read_socket_time
              <span class="token punctuation">-</span> input_read_exit_time
              <span class="token punctuation">-</span> input_saf_time
              <span class="token punctuation">-</span> process_otma_time
              <span class="token punctuation">-</span> output_confirm_time
              <span class="token punctuation">-</span> output_post_otma_time
              <span class="token punctuation">-</span> output_xmit_exit_time
              <span class="token punctuation">-</span> messages_per_second
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> identification_name
          <span class="token key atrule">ictltpsm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> port_number
              <span class="token punctuation">-</span> response_time
              <span class="token punctuation">-</span> input_pre_otma_time
              <span class="token punctuation">-</span> input_read_socket_time
              <span class="token punctuation">-</span> input_read_exit_time
              <span class="token punctuation">-</span> input_saf_time
              <span class="token punctuation">-</span> process_otma_time
              <span class="token punctuation">-</span> output_confirm_time
              <span class="token punctuation">-</span> output_post_otma_time
              <span class="token punctuation">-</span> output_xmit_exit_time
              <span class="token punctuation">-</span> messages_per_second
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> identification_name
          <span class="token key atrule">poolutil</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> ims_id
              <span class="token punctuation">-</span> pool_name
              <span class="token punctuation">-</span> pool_type
              <span class="token punctuation">-</span> pool_size
              <span class="token punctuation">-</span> current_storage_used
              <span class="token punctuation">-</span> utilization_percentage
              <span class="token punctuation">-</span> free_space
              <span class="token punctuation">-</span> free_blocks
              <span class="token punctuation">-</span> largest_free_block
              <span class="token punctuation">-</span> pool_group
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> buffer_size
              <span class="token punctuation">-</span> number_of_buffers
          <span class="token key atrule">kiphealth</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> ims_id
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> total_enq_rate
              <span class="token punctuation">-</span> total_deq_rate
              <span class="token punctuation">-</span> total_cpu_percent
              <span class="token punctuation">-</span> total_io_rate
              <span class="token punctuation">-</span> total_paging_rate
              <span class="token punctuation">-</span> total_transaction_queue
              <span class="token punctuation">-</span> total_transaction_rate
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> lock_waiters
              <span class="token punctuation">-</span> locks_held
              <span class="token punctuation">-</span> ims_count
              <span class="token punctuation">-</span> longest_lock
              <span class="token punctuation">-</span> region_count
              <span class="token punctuation">-</span> imsplex_name
              <span class="token punctuation">-</span> sqgroup_name
              <span class="token punctuation">-</span> shared_transaction_queue
              <span class="token punctuation">-</span> affinity_count
              <span class="token punctuation">-</span> highest_r0_time
          <span class="token key atrule">ictcbcpu</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> ims_id
              <span class="token punctuation">-</span> jobname
              <span class="token punctuation">-</span> num_tcbs
              <span class="token punctuation">-</span> total_tcb_cpu
              <span class="token punctuation">-</span> tcb_cpu_percentage
              <span class="token punctuation">-</span> job_status
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> identification_name
          <span class="token key atrule">subpools</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> ims_id
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> subpool_number
              <span class="token punctuation">-</span> prefix_pagefixed
              <span class="token punctuation">-</span> buffer_pagefixed
              <span class="token punctuation">-</span> buffer_count
              <span class="token punctuation">-</span> buffer_size
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> total_storage
              <span class="token punctuation">-</span> subpool_hit_ratio
          <span class="token key atrule">ictlttsm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> tran_code
              <span class="token punctuation">-</span> response_time
              <span class="token punctuation">-</span> input_pre_otma_time
              <span class="token punctuation">-</span> input_read_socket_time
              <span class="token punctuation">-</span> input_read_exit_time
              <span class="token punctuation">-</span> input_saf_time
              <span class="token punctuation">-</span> process_otma_time
              <span class="token punctuation">-</span> output_confirm_time
              <span class="token punctuation">-</span> output_post_otma_time
              <span class="token punctuation">-</span> output_xmit_exit_time
              <span class="token punctuation">-</span> messages_per_second
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> identification_name
          <span class="token key atrule">ictltcsm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> client_id
              <span class="token punctuation">-</span> response_time
              <span class="token punctuation">-</span> input_pre_otma_time
              <span class="token punctuation">-</span> input_read_socket_time
              <span class="token punctuation">-</span> input_read_exit_time
              <span class="token punctuation">-</span> input_saf_time
              <span class="token punctuation">-</span> process_otma_time
              <span class="token punctuation">-</span> output_confirm_time
              <span class="token punctuation">-</span> output_post_otma_time
              <span class="token punctuation">-</span> output_xmit_exit_time
              <span class="token punctuation">-</span> messages_per_second
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> identification_name
          <span class="token key atrule">vsamsubp</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> ims_id
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> pool_name
              <span class="token punctuation">-</span> pool_type
              <span class="token punctuation">-</span> buffers_pagefixed
              <span class="token punctuation">-</span> blocks_pagefixed
              <span class="token punctuation">-</span> using_hiperspace
              <span class="token punctuation">-</span> subpool_number
              <span class="token punctuation">-</span> number_of_buffers
              <span class="token punctuation">-</span> buffer_size
              <span class="token punctuation">-</span> subpool_hit_ratio
              <span class="token punctuation">-</span> timestamp
          <span class="token key atrule">kipimshlt</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> ims_id
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> total_enq_rate
              <span class="token punctuation">-</span> total_deq_rate
              <span class="token punctuation">-</span> total_cpu_percent
              <span class="token punctuation">-</span> total_io_rate
              <span class="token punctuation">-</span> total_paging_rate
              <span class="token punctuation">-</span> total_transaction_queue
              <span class="token punctuation">-</span> total_transaction_rate
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> lock_waiters
              <span class="token punctuation">-</span> locks_held
              <span class="token punctuation">-</span> ims_count
              <span class="token punctuation">-</span> longest_lock
              <span class="token punctuation">-</span> region_count
              <span class="token punctuation">-</span> imsplex_name
              <span class="token punctuation">-</span> sqgroup_name
              <span class="token punctuation">-</span> shared_transaction_queue
              <span class="token punctuation">-</span> affinity_count
              <span class="token punctuation">-</span> highest_r0_time
          <span class="token key atrule">depregns</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> ims_id
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> region_name
              <span class="token punctuation">-</span> type
              <span class="token punctuation">-</span> transaction_name
              <span class="token punctuation">-</span> psb_name
              <span class="token punctuation">-</span> database_calls
              <span class="token punctuation">-</span> region_occupancy_percentage
              <span class="token punctuation">-</span> locks_held_count
              <span class="token punctuation">-</span> region_identifier
              <span class="token punctuation">-</span> logical_terminal
              <span class="token punctuation">-</span> region_status
              <span class="token punctuation">-</span> job_status
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> otma_tmember_name
              <span class="token punctuation">-</span> elapsed_transaction_time
              <span class="token punctuation">-</span> dli_database_calls
              <span class="token punctuation">-</span> dli_system_calls
              <span class="token punctuation">-</span> dli_message_calls
              <span class="token punctuation">-</span> external_subsystem_calls
              <span class="token punctuation">-</span> imsplex_name
              <span class="token punctuation">-</span> user_id
          <span class="token key atrule">ictltusm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originating_system_identifier
              <span class="token punctuation">-</span> user_id
              <span class="token punctuation">-</span> response_time
              <span class="token punctuation">-</span> input_pre_otma_time
              <span class="token punctuation">-</span> input_read_socket_time
              <span class="token punctuation">-</span> input_read_exit_time
              <span class="token punctuation">-</span> input_saf_time
              <span class="token punctuation">-</span> process_otma_time
              <span class="token punctuation">-</span> output_confirm_time
              <span class="token punctuation">-</span> output_post_otma_time
              <span class="token punctuation">-</span> output_xmit_exit_time
              <span class="token punctuation">-</span> messages_per_second
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> identification_name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br></div></div><p>After editing the configuration file, restart OMEGAMON Data Connect.</p>`,9);function e(t,l){return p}var u=n(a,[["render",e]]);export{u as default};
