import{_ as n,c as s}from"./app.e966ed30.js";const a={},e=s(`<h1 id="optional-filter-fields" tabindex="-1"><a class="header-anchor" href="#optional-filter-fields" aria-hidden="true">#</a> Optional: Filter fields</h1><p>By default, the OMEGAMON Data Connect component of ODP forwards all data that it receives.</p><p>Optionally, you can specify a filter in the OMEGAMON Data Connect configuration file to forward only specific fields.</p><p>Filters are useful for reducing data volume if you have limited storage capacity.</p><p>However, filters restrict the fields that are available for analysis.</p><p>If you decide that you want to limit the forwarded data to just the fields used by the sample dashboards, add the following filter to the OMEGAMON Data Connect configuration file:</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This filter corresponds to the <em>current</em> sample dashboards. You might want to create dashboards that use other fields, or extend the samples with other fields. Future samples might require fields that this filter excludes. It is your decision whether to introduce a filter, and how to manage it.</p></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">connect</span><span class="token punctuation">:</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">products</span><span class="token punctuation">:</span>
      <span class="token key atrule">ks3</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">tables</span><span class="token punctuation">:</span>
          <span class="token key atrule">cache_cu</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> subsystem_id
              <span class="token punctuation">-</span> read_hit_percent
              <span class="token punctuation">-</span> read_io_percent
              <span class="token punctuation">-</span> track_destaging_rate
              <span class="token punctuation">-</span> write_hit_percent
              <span class="token punctuation">-</span> track_staging_rate
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
          <span class="token key atrule">dasd_summ</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> group_name
              <span class="token punctuation">-</span> free_space_percent
              <span class="token punctuation">-</span> free_space_megabytes
              <span class="token punctuation">-</span> group_type
              <span class="token punctuation">-</span> largest_free_extent_mb
              <span class="token punctuation">-</span> high_response_time
              <span class="token punctuation">-</span> low_volume_free_space_pct
              <span class="token punctuation">-</span> description
              <span class="token punctuation">-</span> total_space_gb
              <span class="token punctuation">-</span> used_space_gb
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> average_response_time
              <span class="token punctuation">-</span> smf_id
          <span class="token key atrule">dasdspac</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> volume
              <span class="token punctuation">-</span> free_space_megabytes
              <span class="token punctuation">-</span> percent_free_space
              <span class="token punctuation">-</span> largest_free_extent_mb
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
          <span class="token key atrule">hsm_actvty</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> function
              <span class="token punctuation">-</span> dataset_requests
              <span class="token punctuation">-</span> volume_requests
              <span class="token punctuation">-</span> active_requests
              <span class="token punctuation">-</span> waiting_requests
              <span class="token punctuation">-</span> function_str
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> hsmplex_name
              <span class="token punctuation">-</span> smf_id
          <span class="token key atrule">hsm_cds</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> ddname
              <span class="token punctuation">-</span> percent_free_space_data_component
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> hsmplex_name
              <span class="token punctuation">-</span> hsm_plex_type
              <span class="token punctuation">-</span> smf_id
          <span class="token key atrule">lcu</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> lcu_number
              <span class="token punctuation">-</span> control_unit_busy_percent
              <span class="token punctuation">-</span> director_port_busy_percent
              <span class="token punctuation">-</span> channel_path_io_rate
              <span class="token punctuation">-</span> high_volume_msr
              <span class="token punctuation">-</span> managed_system
              <span class="token punctuation">-</span> smf_id
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><p>After editing the configuration file, restart OMEGAMON Data Connect.</p><p>For example, if you are running OMEGAMON Data Connect on z/OS, enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F OMEGCONN,APPL=RESTART
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Restarting OMEGAMON Data Connect flushes unsent records. Flushed records are lost, not sent to any destination.</p></div>`,12);function p(t,l){return e}var r=n(a,[["render",p]]);export{r as default};
