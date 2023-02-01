import{_ as n,e as s}from"./app.96aba0e0.js";const a={},e=s(`<h1 id="optional-filter-fields" tabindex="-1"><a class="header-anchor" href="#optional-filter-fields" aria-hidden="true">#</a> Optional: Filter fields</h1><p>By default, the OMEGAMON Data Connect component of ODP forwards all data that it receives.</p><p>Optionally, you can specify a filter in the OMEGAMON Data Connect configuration file to forward only specific fields.</p><p>Filters are useful for reducing data volume if you have limited storage capacity.</p><p>However, filters restrict the fields that are available for analysis.</p><p>If you decide that you want to limit the forwarded data to just the fields used by the sample dashboards, add the following filter to the OMEGAMON Data Connect configuration file:</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This filter corresponds to the <em>current</em> sample dashboards. You might want to create dashboards that use other fields, or extend the samples with other fields. Future samples might require fields that this filter excludes. It is your decision whether to introduce a filter, and how to manage it.</p></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">connect</span><span class="token punctuation">:</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">products</span><span class="token punctuation">:</span>
      <span class="token key atrule">kmq</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">tables</span><span class="token punctuation">:</span>
          <span class="token key atrule">lh_smds</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> cf_structure_name
              <span class="token punctuation">-</span> structure_number
              <span class="token punctuation">-</span> message_count
              <span class="token punctuation">-</span> total_blocks
              <span class="token punctuation">-</span> data_block_used_percent
              <span class="token punctuation">-</span> no_space
              <span class="token punctuation">-</span> buffer_size
              <span class="token punctuation">-</span> total_buffers
              <span class="token punctuation">-</span> buffers_in_use
              <span class="token punctuation">-</span> buffers_in_use_percent
              <span class="token punctuation">-</span> waiting_request_queue_for_free_buffer
              <span class="token punctuation">-</span> waiting_request_queue_for_busy_buffer
              <span class="token punctuation">-</span> no_buffer_available
              <span class="token punctuation">-</span> control_interval_size
              <span class="token punctuation">-</span> control_area_size
              <span class="token punctuation">-</span> write_requests
          <span class="token key atrule">qmch_lh</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> channel_name
              <span class="token punctuation">-</span> connection_name
              <span class="token punctuation">-</span> host_name
              <span class="token punctuation">-</span> channel_type
              <span class="token punctuation">-</span> channel_status
              <span class="token punctuation">-</span> in_doubt_status
              <span class="token punctuation">-</span> message_count
              <span class="token punctuation">-</span> transmit_kilobytes_per_second
              <span class="token punctuation">-</span> batches_complete
              <span class="token punctuation">-</span> remote_qmgr_name
              <span class="token punctuation">-</span> bytes_sent
              <span class="token punctuation">-</span> bytes_received
              <span class="token punctuation">-</span> long_term_exit_time
              <span class="token punctuation">-</span> long_term_net_time
              <span class="token punctuation">-</span> long_term_transmit_queue_time
              <span class="token punctuation">-</span> current_action_state
              <span class="token punctuation">-</span> bytes_sent_64bit
              <span class="token punctuation">-</span> bytes_received_64bit
              <span class="token punctuation">-</span> maximum_message_length
              <span class="token punctuation">-</span> non_persistent_message_speed
              <span class="token punctuation">-</span> completed_retry_time
          <span class="token key atrule">qmcurstat</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> host_name
              <span class="token punctuation">-</span> mq_manager_status
              <span class="token punctuation">-</span> channel_initiator_status
              <span class="token punctuation">-</span> command_server_status
              <span class="token punctuation">-</span> connection_count
              <span class="token punctuation">-</span> current_channel_connections
              <span class="token punctuation">-</span> active_channel_connections
              <span class="token punctuation">-</span> maximum_channels
              <span class="token punctuation">-</span> maximum_active_channels
              <span class="token punctuation">-</span> percent_maximum_channels
              <span class="token punctuation">-</span> percent_maximum_active_channels
              <span class="token punctuation">-</span> active_log_copy_2_dataset_name
              <span class="token punctuation">-</span> in_doubt_channel_connections
              <span class="token punctuation">-</span> server_connections
              <span class="token punctuation">-</span> dlq_depth
              <span class="token punctuation">-</span> open_queue_count
              <span class="token punctuation">-</span> high_depth_queue_count
              <span class="token punctuation">-</span> put_inhibited_queue_count
              <span class="token punctuation">-</span> get_inhibited_queue_count
              <span class="token punctuation">-</span> total_messages
              <span class="token punctuation">-</span> total_transmission_queue_messages
              <span class="token punctuation">-</span> current_channel_connections_not_running
              <span class="token punctuation">-</span> current_mqevents
              <span class="token punctuation">-</span> queue_manager_health
              <span class="token punctuation">-</span> queue_health
              <span class="token punctuation">-</span> channel_health
              <span class="token punctuation">-</span> not_being_read_queue_count
              <span class="token punctuation">-</span> sysplex_name
          <span class="token key atrule">qmlhbm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> buffer_pool_id
              <span class="token punctuation">-</span> host_name
              <span class="token punctuation">-</span> number_of_buffers
              <span class="token punctuation">-</span> available_buffers
              <span class="token punctuation">-</span> lowest_available_buffers
              <span class="token punctuation">-</span> unavailable_buffers_count
              <span class="token punctuation">-</span> percent_available_buffers
              <span class="token punctuation">-</span> synchronous_writes
              <span class="token punctuation">-</span> getpage_io_percent
              <span class="token punctuation">-</span> percent_getpages_outside_pool
              <span class="token punctuation">-</span> percent_updated_pages_written
              <span class="token punctuation">-</span> dasd_page_reads_per_second
              <span class="token punctuation">-</span> dasd_page_writes_per_second
              <span class="token punctuation">-</span> asynchronous_writes
              <span class="token punctuation">-</span> synchronous_write_percent
              <span class="token punctuation">-</span> page_sets_assigned
              <span class="token punctuation">-</span> queues_assigned
          <span class="token key atrule">qmlhlm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> host_name
              <span class="token punctuation">-</span> unavailable_log_buffer_waits
              <span class="token punctuation">-</span> archive_read_log_percent
              <span class="token punctuation">-</span> percent_read_logs_delayed
              <span class="token punctuation">-</span> read_logs_per_minute
              <span class="token punctuation">-</span> logging_suspended
              <span class="token punctuation">-</span> archive_log_quiesce_active
              <span class="token punctuation">-</span> current_active_log_percent_full
              <span class="token punctuation">-</span> active_log_dataset_name
              <span class="token punctuation">-</span> offload_task_status
              <span class="token punctuation">-</span> full_logs_to_offload
              <span class="token punctuation">-</span> active_logs_available
              <span class="token punctuation">-</span> checkpoints
              <span class="token punctuation">-</span> log_write_requests_per_minute
              <span class="token punctuation">-</span> compression_requests_per_minute
              <span class="token punctuation">-</span> compression_failures_per_minute
              <span class="token punctuation">-</span> uncompressed_kilobytes_before_compression
              <span class="token punctuation">-</span> compressed_kilobytes_after_compression
              <span class="token punctuation">-</span> decompression_requests_per_minute
              <span class="token punctuation">-</span> decompression_failures_per_minute
              <span class="token punctuation">-</span> current_active_log_copy_2_percent_full
              <span class="token punctuation">-</span> active_log_copy_2_dataset_name
          <span class="token key atrule">qmlhmm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> host_name
              <span class="token punctuation">-</span> mqgets_per_second
              <span class="token punctuation">-</span> mqputs_per_second
              <span class="token punctuation">-</span> mqput1s_per_second
              <span class="token punctuation">-</span> mqopens_per_second
              <span class="token punctuation">-</span> mqcloses_per_second
              <span class="token punctuation">-</span> mqinqs_per_second
              <span class="token punctuation">-</span> mqsets_per_second
              <span class="token punctuation">-</span> close_handles_per_second
              <span class="token punctuation">-</span> mqsubs_per_second
              <span class="token punctuation">-</span> mqsubrqs_per_second
              <span class="token punctuation">-</span> mqcbs_per_second
              <span class="token punctuation">-</span> mqstats_per_second
              <span class="token punctuation">-</span> publication_puts_per_second
          <span class="token key atrule">qmlhtm</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> host_name
              <span class="token punctuation">-</span> subscriptions_per_second
              <span class="token punctuation">-</span> durable_subscriptions_per_second
              <span class="token punctuation">-</span> expired_subscriptions
              <span class="token punctuation">-</span> messages_on_subscriber_queue_per_second
              <span class="token punctuation">-</span> api_publications_per_second
              <span class="token punctuation">-</span> admin_publications_per_second
              <span class="token punctuation">-</span> proxy_publications_per_second
              <span class="token punctuation">-</span> no_subscriber_publish_count
          <span class="token key atrule">qmps_lh</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> page_set_id
              <span class="token punctuation">-</span> host_name
              <span class="token punctuation">-</span> status
              <span class="token punctuation">-</span> allocated_data_pages
              <span class="token punctuation">-</span> percent_pages_in_use
              <span class="token punctuation">-</span> persistent_pages
              <span class="token punctuation">-</span> non_persistent_pages
              <span class="token punctuation">-</span> total_extents
              <span class="token punctuation">-</span> extents_since_restart
              <span class="token punctuation">-</span> buffers_in_use
              <span class="token punctuation">-</span> percent_buffer_pool_in_use
              <span class="token punctuation">-</span> queues_assigned
              <span class="token punctuation">-</span> queue_messages
          <span class="token key atrule">qmq_lh</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> queue_name
              <span class="token punctuation">-</span> host_name
              <span class="token punctuation">-</span> put_status
              <span class="token punctuation">-</span> get_status
              <span class="token punctuation">-</span> output_opens
              <span class="token punctuation">-</span> input_opens
              <span class="token punctuation">-</span> highest_depth
              <span class="token punctuation">-</span> percent_full
              <span class="token punctuation">-</span> messages_put
              <span class="token punctuation">-</span> messages_read
              <span class="token punctuation">-</span> messages_read_per_second
              <span class="token punctuation">-</span> messages_put_per_second
              <span class="token punctuation">-</span> queue_usage
              <span class="token punctuation">-</span> definition_type
              <span class="token punctuation">-</span> storage_class
              <span class="token punctuation">-</span> page_set_id
              <span class="token punctuation">-</span> buffer_pool_id
              <span class="token punctuation">-</span> queue_type
              <span class="token punctuation">-</span> qsg_name
              <span class="token punctuation">-</span> cf_structure_name
              <span class="token punctuation">-</span> qsg_disposition
          <span class="token key atrule">qmq_qu_st</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> host_name
              <span class="token punctuation">-</span> queue_name
              <span class="token punctuation">-</span> input_opens
              <span class="token punctuation">-</span> output_opens
              <span class="token punctuation">-</span> qsg_disposition
              <span class="token punctuation">-</span> oldest_message_age
              <span class="token punctuation">-</span> short_term_queue_time
              <span class="token punctuation">-</span> long_term_queue_time
          <span class="token key atrule">qsg_cfstr</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> qsg_name
              <span class="token punctuation">-</span> cf_structure_name
              <span class="token punctuation">-</span> structure_level
              <span class="token punctuation">-</span> recovery_supported
              <span class="token punctuation">-</span> cf_structure_type
              <span class="token punctuation">-</span> structure_status
              <span class="token punctuation">-</span> maximum_kilobytes_storage
              <span class="token punctuation">-</span> percent_storage_used
              <span class="token punctuation">-</span> maximum_list_entries
              <span class="token punctuation">-</span> percent_list_entries_used
              <span class="token punctuation">-</span> description
              <span class="token punctuation">-</span> offload_usage
              <span class="token punctuation">-</span> expand_dataset
              <span class="token punctuation">-</span> automatic_recovery
              <span class="token punctuation">-</span> connection_loss_action
          <span class="token key atrule">qsg_qmgr</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> qsg_name
              <span class="token punctuation">-</span> mq_manager_name
              <span class="token punctuation">-</span> queue_manager_status
              <span class="token punctuation">-</span> mqseries_release
              <span class="token punctuation">-</span> db2_subsystem_name
              <span class="token punctuation">-</span> db2_connection_status
              <span class="token punctuation">-</span> number_of_db2_servers
              <span class="token punctuation">-</span> data_sharing_group_name
              <span class="token punctuation">-</span> host_name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br></div></div><p>After editing the configuration file, restart OMEGAMON Data Connect.</p><p>For example, if you are running OMEGAMON Data Connect on z/OS, enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F OMEGCONN,APPL=RESTART
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Restarting OMEGAMON Data Connect flushes unsent records. Flushed records are lost, not sent to any destination.</p></div>`,12);function p(t,l){return e}var u=n(a,[["render",p]]);export{u as default};
