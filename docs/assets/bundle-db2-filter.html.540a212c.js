import{_ as n,c as s}from"./app.4a750b6b.js";const a={},p=s(`<h1 id="optional-filter-fields" tabindex="-1"><a class="header-anchor" href="#optional-filter-fields" aria-hidden="true">#</a> Optional: Filter fields</h1><p>By default, the OMEGAMON Data Connect component of ODP forwards all data that it receives.</p><p>Optionally, you can specify a filter in the OMEGAMON Data Connect configuration file to forward only specific fields.</p><p>Filters are useful for reducing data volume if you have limited storage capacity.</p><p>However, filters restrict the fields that are available for analysis.</p><p>If you decide that you want to limit the forwarded data to just the fields used by the starter dashboards, add the following filter to the OMEGAMON Data Connect configuration file:</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This filter corresponds to the <em>current</em> starter dashboards. You might want to create dashboards that use other fields, or extend the samples with other fields. Future samples might require fields that this filter excludes. It is your decision whether to introduce a filter, and how to manage it.</p></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">connect</span><span class="token punctuation">:</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">products</span><span class="token punctuation">:</span>
      <span class="token key atrule">kd5</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">tables</span><span class="token punctuation">:</span>
          <span class="token key atrule">statedmp</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> data_sharing_group
              <span class="token punctuation">-</span> member_name
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> fieldname
              <span class="token punctuation">-</span> value
              <span class="token punctuation">-</span> delta
              <span class="token punctuation">-</span> rate
              <span class="token punctuation">-</span> sequence
          <span class="token key atrule">opersys</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> cpu_utilization_lpar
              <span class="token punctuation">-</span> cpu_utilization_db2
              <span class="token punctuation">-</span> cpu_utilization_db2_mstr
              <span class="token punctuation">-</span> cpu_utilization_db2_dbm1
              <span class="token punctuation">-</span> real_storage_on_lpar
              <span class="token punctuation">-</span> used_real_storage_db2
              <span class="token punctuation">-</span> virtual_storage_lpar
              <span class="token punctuation">-</span> used_virtual_storage_db2
          <span class="token key atrule">dp_sy_exc</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> time
              <span class="token punctuation">-</span> edm_utilization
              <span class="token punctuation">-</span> db_wait_percent
              <span class="token punctuation">-</span> thread_wait_limit
              <span class="token punctuation">-</span> edm_current_pages
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> status
              <span class="token punctuation">-</span> idname
              <span class="token punctuation">-</span> ridpool_fail_no_storage
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> number_of_active_dbats
              <span class="token punctuation">-</span> rid_pool_size
              <span class="token punctuation">-</span> edm_pool_full
              <span class="token punctuation">-</span> rid_pool_size_too_small
              <span class="token punctuation">-</span> global_cache_hit_ratio
              <span class="token punctuation">-</span> nonstealable_pages
              <span class="token punctuation">-</span> indoubt_urs
              <span class="token punctuation">-</span> transactions_per_second
              <span class="token punctuation">-</span> resync_attempted
              <span class="token punctuation">-</span> sort_error_bp_shortage
              <span class="token punctuation">-</span> merge_error_bp_shortage
              <span class="token punctuation">-</span> sort_degraded_bp_small
              <span class="token punctuation">-</span> deadlocks
              <span class="token punctuation">-</span> timeouts
              <span class="token punctuation">-</span> lock_escalations
              <span class="token punctuation">-</span> dm_critical_thresh
              <span class="token punctuation">-</span> checkpoint_freq
              <span class="token punctuation">-</span> output_buffer_size
              <span class="token punctuation">-</span> dsc_active
              <span class="token punctuation">-</span> allowed_locks_per_ts
              <span class="token punctuation">-</span> resource_timeout
              <span class="token punctuation">-</span> bytes_written_to_log
              <span class="token punctuation">-</span> pages_read_from_bps
              <span class="token punctuation">-</span> pages_read_from_dasd
              <span class="token punctuation">-</span> pages_castout
              <span class="token punctuation">-</span> avg_thread_footprint
          <span class="token key atrule">statlokc</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> data_sharing_group
              <span class="token punctuation">-</span> member_name
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> fieldname
              <span class="token punctuation">-</span> value
              <span class="token punctuation">-</span> delta
              <span class="token punctuation">-</span> rate
              <span class="token punctuation">-</span> sequence
          <span class="token key atrule">statlogs</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> data_sharing_group
              <span class="token punctuation">-</span> member_name
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> fieldname
              <span class="token punctuation">-</span> value
              <span class="token punctuation">-</span> delta
              <span class="token punctuation">-</span> rate
              <span class="token punctuation">-</span> sequence
          <span class="token key atrule">real254</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> data_sharing_group
              <span class="token punctuation">-</span> member_name
              <span class="token punctuation">-</span> read_hit
              <span class="token punctuation">-</span> global_buffer_pool_name
              <span class="token punctuation">-</span> read_hit_percent
          <span class="token key atrule">edmpool</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> dynamic_sql_cache_loads
              <span class="token punctuation">-</span> dynamic_sql_cache_requests
              <span class="token punctuation">-</span> available_pages
          <span class="token key atrule">real2252</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> data_sharing_group
              <span class="token punctuation">-</span> member_name
              <span class="token punctuation">-</span> agent_local_storage
              <span class="token punctuation">-</span> total_agent_sys_stg
              <span class="token punctuation">-</span> active_threads
              <span class="token punctuation">-</span> extended_csa_size
              <span class="token punctuation">-</span> rid_pool_storage
              <span class="token punctuation">-</span> total_alloc_shr_dyn_sql
              <span class="token punctuation">-</span> total_alloc_shr_stat_sql
              <span class="token punctuation">-</span> total_agt_non_sys_stg
              <span class="token punctuation">-</span> log_wrt_buffer_real
              <span class="token punctuation">-</span> log_wrt_ctl_real
              <span class="token punctuation">-</span> log_wrt_ctl_aux
              <span class="token punctuation">-</span> total_array_var_stg
          <span class="token key atrule">real225</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> data_sharing_group
              <span class="token punctuation">-</span> member_name
              <span class="token punctuation">-</span> addr_space_name
              <span class="token punctuation">-</span> cur_priv_highaddr_31_bit
              <span class="token punctuation">-</span> fixed_storage_above
              <span class="token punctuation">-</span> fixed_storage
              <span class="token punctuation">-</span> getmained_storage_above
              <span class="token punctuation">-</span> getmained_storage
              <span class="token punctuation">-</span> getmained_stack_storage
              <span class="token punctuation">-</span> mvs_usage_storage_mb
              <span class="token punctuation">-</span> stg_mgr_ctl_blocks_above
              <span class="token punctuation">-</span> stack_storage_in_use
              <span class="token punctuation">-</span> cur_priv_highaddr_24_bit
              <span class="token punctuation">-</span> variable_storage_above
              <span class="token punctuation">-</span> variable_storage
              <span class="token punctuation">-</span> aux_stor_inuse_64_bit
              <span class="token punctuation">-</span> aux_in_use_mb_31bit
              <span class="token punctuation">-</span> aux_stor_inuse
              <span class="token punctuation">-</span> castout_buffers
              <span class="token punctuation">-</span> total_storage_mb
              <span class="token punctuation">-</span> total_storage_below_mb
              <span class="token punctuation">-</span> max_num_of_threads
              <span class="token punctuation">-</span> real_stor_inuse_31
              <span class="token punctuation">-</span> real_stor_4k_frame_inuse
              <span class="token punctuation">-</span> avg_thd_footprint
              <span class="token punctuation">-</span> aux_used_shr_stor_64
              <span class="token punctuation">-</span> total_31bit_inuse_pct
              <span class="token punctuation">-</span> db2_31bit_inuse_pct
          <span class="token key atrule">realsqlc</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> description
              <span class="token punctuation">-</span> delta
              <span class="token punctuation">-</span> rate
              <span class="token punctuation">-</span> total
          <span class="token key atrule">realqbst</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> data_sharing_group
              <span class="token punctuation">-</span> member_name
              <span class="token punctuation">-</span> buffer_pool_id
              <span class="token punctuation">-</span> bp_pages_in_use_percent
              <span class="token punctuation">-</span> bp_hit_ratio
              <span class="token punctuation">-</span> sync_reads_random2
              <span class="token punctuation">-</span> seq_hit_ratio
              <span class="token punctuation">-</span> rand_hit_ratio
              <span class="token punctuation">-</span> rand_failed_cond_req2
              <span class="token punctuation">-</span> random_getpages2
              <span class="token punctuation">-</span> getpage_per_sync_random2
              <span class="token punctuation">-</span> get_page
              <span class="token punctuation">-</span> sync_read_io
              <span class="token punctuation">-</span> defer_write_thld_reached
              <span class="token punctuation">-</span> getpage_fail_vpool_full
              <span class="token punctuation">-</span> expand_fail_sos
              <span class="token punctuation">-</span> update_intents
              <span class="token punctuation">-</span> pages_written_system
              <span class="token punctuation">-</span> async_write_io
              <span class="token punctuation">-</span> current_active_buffers
              <span class="token punctuation">-</span> page_ins_read_io
              <span class="token punctuation">-</span> page_ins_write_io
              <span class="token punctuation">-</span> datasets_opened
              <span class="token punctuation">-</span> immediate_writes
              <span class="token punctuation">-</span> sequential_prefetch
              <span class="token punctuation">-</span> pages_seq_prefetch
              <span class="token punctuation">-</span> seq_pref_disabled_buf
              <span class="token punctuation">-</span> seq_pref_disabled_rd_eng
              <span class="token punctuation">-</span> dm_buff_crit_thld_reach
              <span class="token punctuation">-</span> migrated_datasets
              <span class="token punctuation">-</span> recall_timeouts
              <span class="token punctuation">-</span> async_read_seq_prefetch
              <span class="token punctuation">-</span> seq_pref_not_sch_quant
              <span class="token punctuation">-</span> current_alloc_workf_exc
              <span class="token punctuation">-</span> max_workfiles_merge
              <span class="token punctuation">-</span> pages_destruct_read
              <span class="token punctuation">-</span> pages_removedt_ds_deffer
              <span class="token punctuation">-</span> sort_merges
              <span class="token punctuation">-</span> work_sort_merges
              <span class="token punctuation">-</span> work_reject_sort_merges
              <span class="token punctuation">-</span> no_sort_merge_buff_spc
              <span class="token punctuation">-</span> list_prefetch_reads
              <span class="token punctuation">-</span> dyn_prefetches
              <span class="token punctuation">-</span> expand_contract_alter
              <span class="token punctuation">-</span> buffers_allocated
              <span class="token punctuation">-</span> async_reads_dyn_pre
              <span class="token punctuation">-</span> async_reads_list_pre
              <span class="token punctuation">-</span> async_reads_io_dyn_pre
              <span class="token punctuation">-</span> async_reads_io_list_pre
              <span class="token punctuation">-</span> getpage_seq_access
              <span class="token punctuation">-</span> read_io_seq_access
              <span class="token punctuation">-</span> parall_getpage_unavail
              <span class="token punctuation">-</span> prefetch_io_concurr_hwm
              <span class="token punctuation">-</span> pref_io_str_reduced_buf
              <span class="token punctuation">-</span> bp_name
              <span class="token punctuation">-</span> sync_read_io_nons_over
              <span class="token punctuation">-</span> sync_read_io_seq_over
          <span class="token key atrule">gstqxst</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> data_sharing_group
              <span class="token punctuation">-</span> member_name
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> fieldname
              <span class="token punctuation">-</span> value
              <span class="token punctuation">-</span> delta
              <span class="token punctuation">-</span> rate
              <span class="token punctuation">-</span> sequence
          <span class="token key atrule">real230</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> data_sharing_group
              <span class="token punctuation">-</span> member_name
              <span class="token punctuation">-</span> group_buffer_pool_id
              <span class="token punctuation">-</span> hit_ratio
              <span class="token punctuation">-</span> sync_read_xi_no_data_ret
              <span class="token punctuation">-</span> castout_class_threshold
              <span class="token punctuation">-</span> gb_castout_threshold
              <span class="token punctuation">-</span> pages_castout
              <span class="token punctuation">-</span> group_buffer_pool
              <span class="token punctuation">-</span> sync_read_xi_data_ret
          <span class="token key atrule">statqxst</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> timestamp
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> data_sharing_group
              <span class="token punctuation">-</span> member_name
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> fieldname
              <span class="token punctuation">-</span> value
              <span class="token punctuation">-</span> delta
              <span class="token punctuation">-</span> rate
              <span class="token punctuation">-</span> sequence
          <span class="token key atrule">db2msg</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
              <span class="token punctuation">-</span> db2_version
              <span class="token punctuation">-</span> message_text
          <span class="token key atrule">dp_srm_log</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> time
              <span class="token punctuation">-</span> log_recording_mode
              <span class="token punctuation">-</span> archive_recording_mode
              <span class="token punctuation">-</span> logs_defined
              <span class="token punctuation">-</span> logs_available
              <span class="token punctuation">-</span> checkpoint_frequency
              <span class="token punctuation">-</span> next_checkpoint
              <span class="token punctuation">-</span> input_buffer_size
              <span class="token punctuation">-</span> output_buffer_size
              <span class="token punctuation">-</span> write_threshold
              <span class="token punctuation">-</span> dataset_size
              <span class="token punctuation">-</span> dataset_utilization
              <span class="token punctuation">-</span> primary_dataset_name
              <span class="token punctuation">-</span> secondary_dataset_name
              <span class="token punctuation">-</span> percent_logs_avail
              <span class="token punctuation">-</span> current_rba
              <span class="token punctuation">-</span> begin_rba
              <span class="token punctuation">-</span> end_rba
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
          <span class="token key atrule">dp_srm_sub</span><span class="token punctuation">:</span>
            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">fields</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> originnode
              <span class="token punctuation">-</span> time
              <span class="token punctuation">-</span> max_threads_allowed
              <span class="token punctuation">-</span> foreground_limit
              <span class="token punctuation">-</span> background_limit
              <span class="token punctuation">-</span> current_threads
              <span class="token punctuation">-</span> current_foreground
              <span class="token punctuation">-</span> current_background
              <span class="token punctuation">-</span> thread_utilization
              <span class="token punctuation">-</span> foreground_utilization
              <span class="token punctuation">-</span> background_utilization
              <span class="token punctuation">-</span> total_identify
              <span class="token punctuation">-</span> total_signon
              <span class="token punctuation">-</span> total_create_threads
              <span class="token punctuation">-</span> total_create_thread_wait
              <span class="token punctuation">-</span> create_thread_wait_rate
              <span class="token punctuation">-</span> total_terminate_thread
              <span class="token punctuation">-</span> total_single_phase_commits
              <span class="token punctuation">-</span> total_read_only_commits
              <span class="token punctuation">-</span> total_phase1_commits
              <span class="token punctuation">-</span> total_phase2_commits
              <span class="token punctuation">-</span> total_aborts
              <span class="token punctuation">-</span> abort_rate
              <span class="token punctuation">-</span> total_commits
              <span class="token punctuation">-</span> commit_rate
              <span class="token punctuation">-</span> total_indoubt
              <span class="token punctuation">-</span> total_indoubt_resolve
              <span class="token punctuation">-</span> total_abends_eom
              <span class="token punctuation">-</span> total_abends_eot
              <span class="token punctuation">-</span> maxdbat
              <span class="token punctuation">-</span> current_dbat
              <span class="token punctuation">-</span> dbat_utilization
              <span class="token punctuation">-</span> maxdbat_hwm
              <span class="token punctuation">-</span> condbat
              <span class="token punctuation">-</span> dbat_connection
              <span class="token punctuation">-</span> dbat_conn_utilization
              <span class="token punctuation">-</span> dbat_conn_hwm
              <span class="token punctuation">-</span> mvs_system
              <span class="token punctuation">-</span> db2_subsystem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br></div></div><p>After editing the configuration file, restart OMEGAMON Data Connect.</p><p>For example, if you are running OMEGAMON Data Connect on z/OS, enter the following MVS <code>MODIFY</code> system command:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>F OMEGCONN,APPL=RESTART
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Restarting OMEGAMON Data Connect flushes unsent records. Flushed records are lost, not sent to any destination.</p></div>`,12);function e(t,l){return p}var u=n(a,[["render",e]]);export{u as default};
