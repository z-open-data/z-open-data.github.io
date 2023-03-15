import{_ as n,c as s}from"./app.4a750b6b.js";const a={},t=s(`<h1 id="optional-filter-fields" tabindex="-1"><a class="header-anchor" href="#optional-filter-fields" aria-hidden="true">#</a> Optional: Filter fields</h1><p>By default, the OMEGAMON Data Connect component of ODP forwards all data that it receives.</p><p>Optionally, you can specify a filter in the OMEGAMON Data Connect configuration file to forward only specific fields.</p><p>Filters are useful for reducing data volume if you have limited storage capacity.</p><p>However, filters restrict the fields that are available for analysis.</p><p>If you decide that you want to limit the forwarded data to just the fields used by the starter dashboards, add the following filter to the OMEGAMON Data Connect configuration file:</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This filter corresponds to the <em>current</em> starter dashboards. You might want to create dashboards that use other fields, or extend the samples with other fields. Future samples might require fields that this filter excludes. It is your decision whether to introduce a filter, and how to manage it.</p></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">iconnect</span><span class="token punctuation">:</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">products</span><span class="token punctuation">:</span>
      <span class="token key atrule">kn3</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">tables</span><span class="token punctuation">:</span>
          <span class="token key atrule">kn3gic</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> tcpip_stc_name
              <span class="token punctuation">-</span> collection_time
              <span class="token punctuation">-</span> total_header_error_count
              <span class="token punctuation">-</span> total_no_route_err_count
              <span class="token punctuation">-</span> total_invalid_addr_error
              <span class="token punctuation">-</span> total_unknown_protocol
              <span class="token punctuation">-</span> total_trunc_error_count
              <span class="token punctuation">-</span> total_reassembly_required
              <span class="token punctuation">-</span> total_reassembly_count
              <span class="token punctuation">-</span> total_reassembly_failure
              <span class="token punctuation">-</span> input_datagrams_discarded
              <span class="token punctuation">-</span> output_datagrams_discarded
              <span class="token punctuation">-</span> receive_datagram_rate
              <span class="token punctuation">-</span> transmit_datagram_rate
              <span class="token punctuation">-</span> input_discard_percentage
              <span class="token punctuation">-</span> output_discard_percentage
              <span class="token punctuation">-</span> total_reassembly_percentage
              <span class="token punctuation">-</span> interval_seconds
          <span class="token key atrule">kn3gtc</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> tcpip_stc_name
              <span class="token punctuation">-</span> collection_time
              <span class="token punctuation">-</span> connections_established
              <span class="token punctuation">-</span> total_active_socket_opens
              <span class="token punctuation">-</span> total_passive_socket_opens
              <span class="token punctuation">-</span> total_connections_closed
              <span class="token punctuation">-</span> total_established_resets
              <span class="token punctuation">-</span> total_attempt_failures
              <span class="token punctuation">-</span> total_passive_drops
              <span class="token punctuation">-</span> total_timewait_reused
              <span class="token punctuation">-</span> total_acknowledge_predict
              <span class="token punctuation">-</span> total_input_segments_recvd
              <span class="token punctuation">-</span> total_output_segments_sent
              <span class="token punctuation">-</span> total_accepted_connections
              <span class="token punctuation">-</span> total_segments_discarded
              <span class="token punctuation">-</span> total_flow_controls
              <span class="token punctuation">-</span> total_duplicate_ack
              <span class="token punctuation">-</span> total_bad_checksum
              <span class="token punctuation">-</span> total_bad_length
              <span class="token punctuation">-</span> total_length_too_short
              <span class="token punctuation">-</span> total_old_timestamp
              <span class="token punctuation">-</span> total_all_before_window
              <span class="token punctuation">-</span> total_all_after_window
              <span class="token punctuation">-</span> total_out_of_order_segment
              <span class="token punctuation">-</span> total_input_after_closed
              <span class="token punctuation">-</span> total_input_window_probes
              <span class="token punctuation">-</span> total_input_window_updates
              <span class="token punctuation">-</span> total_output_window_update
              <span class="token punctuation">-</span> total_output_delayed_acks
              <span class="token punctuation">-</span> total_output_rsts
              <span class="token punctuation">-</span> total_retransmits
              <span class="token punctuation">-</span> total_retransmit_drops
              <span class="token punctuation">-</span> total_pmtu_retransmits
              <span class="token punctuation">-</span> total_pmtu_errors
              <span class="token punctuation">-</span> total_output_window_probes
              <span class="token punctuation">-</span> total_window_probe_drops
              <span class="token punctuation">-</span> total_keepalive_probes
              <span class="token punctuation">-</span> total_keepalive_drops
              <span class="token punctuation">-</span> total_finwait2_drops
              <span class="token punctuation">-</span> receive_segment_rate
              <span class="token punctuation">-</span> transmit_segment_rate
              <span class="token punctuation">-</span> segment_retransmit_rate
              <span class="token punctuation">-</span> oorder_seg_last_sample_pct
              <span class="token punctuation">-</span> ephem_ports_configured
              <span class="token punctuation">-</span> ephem_ports_inuse
              <span class="token punctuation">-</span> ephem_ports_hwm
              <span class="token punctuation">-</span> ephem_ports_exhausted
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> interval_seconds
          <span class="token key atrule">kn3tap</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> system_id
              <span class="token punctuation">-</span> tcp_host_name
              <span class="token punctuation">-</span> tcpip_stc_name
              <span class="token punctuation">-</span> collection_time
              <span class="token punctuation">-</span> application_name
              <span class="token punctuation">-</span> connection_count
              <span class="token punctuation">-</span> total_bytes_in
              <span class="token punctuation">-</span> total_bytes_out
              <span class="token punctuation">-</span> total_bytes
              <span class="token punctuation">-</span> bytes_in_last_sample
              <span class="token punctuation">-</span> bytes_out_last_sample
              <span class="token punctuation">-</span> total_bytes_last_sample
              <span class="token punctuation">-</span> idle_time
              <span class="token punctuation">-</span> byte_rate
              <span class="token punctuation">-</span> retransmits_last_sample
              <span class="token punctuation">-</span> total_retransmits
              <span class="token punctuation">-</span> retransmits_percentage
              <span class="token punctuation">-</span> datagrams_in_last_sample
              <span class="token punctuation">-</span> datagrams_out_last_sample
              <span class="token punctuation">-</span> total_datagrams_last_sample
              <span class="token punctuation">-</span> total_datagrams_in
              <span class="token punctuation">-</span> total_datagrams_out
              <span class="token punctuation">-</span> total_datagrams
              <span class="token punctuation">-</span> datagram_rate
              <span class="token punctuation">-</span> total_bytes_g
              <span class="token punctuation">-</span> active_connections
              <span class="token punctuation">-</span> accepted_connections
              <span class="token punctuation">-</span> connection_rate
              <span class="token punctuation">-</span> active_connection_hwm
              <span class="token punctuation">-</span> active_connection_hwm_timestamp
              <span class="token punctuation">-</span> idle_time_since_last_accept
              <span class="token punctuation">-</span> server_up_time
              <span class="token punctuation">-</span> connections_in_backlog
              <span class="token punctuation">-</span> backlog_connections_rejected
              <span class="token punctuation">-</span> backlog_connection_rejected_tm
              <span class="token punctuation">-</span> transmit_byte_rate
              <span class="token punctuation">-</span> receive_byte_rate
              <span class="token punctuation">-</span> transmit_datagram_rate
              <span class="token punctuation">-</span> receive_datagram_rate
              <span class="token punctuation">-</span> transmit_segment_rate
              <span class="token punctuation">-</span> receive_segment_rate
              <span class="token punctuation">-</span> segment_rate
              <span class="token punctuation">-</span> total_segments_sent
              <span class="token punctuation">-</span> total_segments_received
              <span class="token punctuation">-</span> total_segments
              <span class="token punctuation">-</span> segments_sent
              <span class="token punctuation">-</span> segments_received
              <span class="token punctuation">-</span> segments_sent_or_received
              <span class="token punctuation">-</span> out_of_order_segments
              <span class="token punctuation">-</span> total_out_of_order_segments
              <span class="token punctuation">-</span> pct_out_of_order_segments
              <span class="token punctuation">-</span> retransmission_rate
              <span class="token punctuation">-</span> datagrams_queued
              <span class="token punctuation">-</span> datagrams_discarded
              <span class="token punctuation">-</span> pct_datagrams_discarded
              <span class="token punctuation">-</span> queued_datagram_bytes
              <span class="token punctuation">-</span> sysplex_name
              <span class="token punctuation">-</span> tot_backlog_conn_rejected
              <span class="token punctuation">-</span> application_type
              <span class="token punctuation">-</span> smcr_current_conn
              <span class="token punctuation">-</span> smcr_total_conn
              <span class="token punctuation">-</span> smcd_current_conn
              <span class="token punctuation">-</span> smcd_total_conn
              <span class="token punctuation">-</span> total_accepted_conn
              <span class="token punctuation">-</span> smcr_conn
              <span class="token punctuation">-</span> smcd_conn
              <span class="token punctuation">-</span> secure_conn_percent
              <span class="token punctuation">-</span> non_secure_conn_percent
              <span class="token punctuation">-</span> interval_seconds
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br></div></div><p>After editing the configuration file, restart OMEGAMON Data Connect.</p><p>For example, if you are running OMEGAMON Data Connect on z/OS, enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F OMEGCONN,APPL=RESTART
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Restarting OMEGAMON Data Connect flushes unsent records. Flushed records are lost, not sent to any destination.</p></div>`,12);function e(p,l){return t}var o=n(a,[["render",e]]);export{o as default};
