//------------------------------Permissions------------------------------------
//Arrays target the values for each permission checkbox
//Bans are unused permissions
var bans = [
    'circulate:manage_bookings', 'circulate:manage_checkout_notes', 
    'borrowers:api_validate_password',
    'editcatalogue:delete_all_items', 'editcatalogue:edit_locked_records', 'editcatalogue:set_record_sources',
    'acquisition', 'acquisition:budget_add_del', 'acquisition:budget_manage', 'acquisition:budget_manage_all', 'acquisition:budget_modify', 'acquisition:contracts_manage', 'acquisition:currencies_manage', 'acquisition:delete_baskets', 'acquisition:delete_invoices', 'acquisition:edi_manage', 'acquisition:edit_invoices', 'acquisition:group_manage', 'acquisition:issue_manage', 'acquisition:marc_order_manage', 'acquisition:merge_invoices', 'acquisition:order_manage', 'acquisition:order_manage_all', 'acquisition:order_receive', 'acquisition:period_manage', 'acquisition:planning_manage', 'acquisition:reopen_closed_invoices', 'acquisition:vendors_manage',
    'tools:edit_quotes', 'tools:manage_csv_profiles', 'tools:rotating_collections', 'tools:schedule_tasks',
    'serials', 'serials:check_expiration', 'serials:claim_serials', 'serials:create_subscription', 'serials:delete_subscription', 'serials:edit_subscription', 'serials:receive_serials', 'serials:renew_subscription', 'serials:routing', 'serials:superserials',
    'ill',
    'self_check:self_checkin_module',
    'stockrotation', 'stockrotation:manage_rota_items', 'stockrotation:manage_rotas',
    'recalls', 'recalls:manage_recalls',
    'erm',
    'preservation'
];

//Locks are permissions that must be granted by a Koha admin
var locks = [
    'superlibrarian',
    'circulate:manage_curbside_pickups',
    'parameters:manage_accounts', 'parameters:manage_additional_fields', 'parameters:manage_audio_alerts', 'parameters:manage_auth_values', 'parameters:manage_background_jobs', 'parameters:manage_cash_registers', 'parameters:manage_circ_rules', 'parameters:manage_circ_rules_from_any_libraries', 'parameters:manage_cities', 'parameters:manage_classifications', 'parameters:manage_column_config', 'parameters:manage_curbside_pickups', 'parameters:manage_didyoumean', 'parameters:manage_file_transports', 'parameters:manage_identity_providers', 'parameters:manage_item_circ_alerts', 'parameters:manage_item_search_fields', 'parameters:manage_itemtypes', 'parameters:manage_keyboard_shortcuts', 'parameters:manage_libraries', 'parameters:manage_mana', 'parameters:manage_marc_frameworks', 'parameters:manage_marc_overlay_rules', 'parameters:manage_matching_rules', 'parameters:manage_oai_sets', 'parameters:manage_patron_attributes', 'parameters:manage_patron_categories', 'parameters:manage_patron_restrictions', 'parameters:manage_record_sources', 'parameters:manage_search_engine_config', 'parameters:manage_search_filters', 'parameters:manage_search_targets', 'parameters:manage_sms_providers', 'parameters:manage_smtp_servers', 'parameters:manage_sysprefs', 'parameters:manage_transfers', 'parameters:manage_usage_stats', 'parameters:parameters_remaining_permissions',
    'borrowers:view_borrower_infos_from_any_libraries',
    'permissions',
    'reserveforothers:alter_hold_targets', 'reserveforothers:modify_holds_priority',
    'editcatalogue:advanced_editor', 'editcatalogue:create_shared_macros', 'editcatalogue:delete_shared_macros', 'editcatalogue:edit_catalogue', 'editcatalogue:edit_items', 'editcatalogue:manage_item_editor_templates', 'editcatalogue:manage_item_groups', 'editcatalogue:set_record_sources',
    'suggestions:suggestions_delete',
    'tools:access_files', 'tools:batch_extend_due_dates', 'tools:batch_modify_holds', 'tools:delete_anonymize_patrons', 'tools:edit_additional_contents', 'tools:edit_calendar', 'tools:edit_notice_status_triggers', 'tools:edit_notices', 'tools:edit_patrons', 'tools:export_catalog', 'tools:import_patrons', 'tools:inventory', 'tools:items_batchdel', 'tools:items_batchmod', 'tools:items_batchmod_restricted', 'tools:label_creator', 'tools:manage_patron_lists', 'tools:manage_staged_marc', 'tools:marc_modification_templates', 'tools:moderate_comments', 'tools:moderate_tags', 'tools:records_batchdel', 'tools:records_batchmod', 'tools:stage_marc_import', 'tools:upload_general_files', 'tools:upload_local_cover_images', 'tools:upload_manage', 'tools:view_system_logs',
    'editauthorities',
    'reports:create_reports', 'reports:delete_reports',
    'staffaccess',
    'coursereserves:manage_courses',
    'plugins:admin', 'plugins:configure', 'plugins:manage', 'plugins:report', 'plugins:tool',
    'lists:create_public_lists', 'lists:delete_public_lists', 'lists:edit_public_list_contents', 'lists:edit_public_lists',
    'clubs:edit_clubs', 'clubs:edit_templates',
    'self_check:self_checkout_module',
    'problem_reports',
    'loggedinlibrary'
];

//Mixed indicates top-level permissions where only some subpermissions are used
var mixed = ['circulate', 'borrowers', 'editcatalogue', 'tools', 'reports', 'plugins', 'clubs', 'problem_reports', 'self_check'];  

//Adds emojis and fades the checkboxes (disabling checkboxes caused problems so we fade to fake disable them) based on the above arrays
if (window.location.href.indexOf("member-flags.pl") > -1){
  $('input[type="checkbox"]').each(function() {
    var checkbox = $(this);
    var value = checkbox.val();
      if ($.inArray(value, bans) !== -1) {
        $(checkbox).after('🚫');
        $(checkbox).css('opacity', '0.25');
      } else if ($.inArray(value, locks) !== -1) {
        $(checkbox).after('🔒');
        $(checkbox).css('opacity', '0.25');
      } else if ($.inArray(value, mixed) !== -1) {
        $(checkbox).after('🔻');
        $(checkbox).css('opacity', '0.25');        
      }
  });
}
  
  //Remove Check all link
  $('#permissions_toolbar #CheckAllFlags').hide();

  //Replace uncheck all with a button that does what I want but leaves the button in the background for quick sets
  $('#UncheckAllFlags').hide().after('<a id="clearAllFlags" class="btn btn-link" href="#"><i class="fa fa-times"></i> Clear permissions</a>');
  $("#clearAllFlags").on("click",function(){
    $(".flag").prop("checked", false);
    $(".flag").attr("disabled", true);
  });  
  
  //Permissions Quick Set
  //Create Buttons
  $('#pat_member-flags #permissions_toolbar').prepend('<span style="padding: 7px 0px 0px 7px; font-size: small;">Presets:</span><a id="setsub" class="btn btn-secondary" type="button" style="font-size:12px; margin-left:5px;"><i class="fa fa-hand-holding-heart"></i> Volunteer</a><a id="setcirc" class="btn btn-secondary" type="button" style="font-size:12px; margin-left:5px;"><i class="fa fa-exchange"></i> Circulation</a><a id="setcat" class="btn btn-secondary" type="button" style="font-size:12px; margin-left:5px;"><i class="fa fa-tag"></i> Cataloger</a><a id="setdirector" class="btn btn-secondary" type="button" style="font-size:12px; margin-left:5px; margin-right: 5px;"><i class="fa-solid fa-crown"></i> Director</a>');
  
    //Create legend
  $('#pat_member-flags #permissions_toolbar').after('<div style="margin-left: 145px; padding: 3px; font-size: small;"> Legend: <span>🔒- must be set by Koha admininstrator</span><span style="margin-left: 20px;">🚫- unused feature</span><span style="margin-left: 20px;">🔻- some subpermissions available </span></div>');

    //Basic Volunteer Button Settings
  $("#setsub").click(function() {
    $("#UncheckAllFlags").click();
    $('#pat_member-flags').find('#circulate_circulate_remaining_permissions, #flag-2,   #borrowers_edit_borrowers, #borrowers_list_borrowers, #reserveforothers_place_holds, #updatecharges_remaining_permissions, #suggestions_suggestions_create, #suggestions_suggestions_manage, #tools_batch_upload_patron_images, #lists_use_public_lists, #clubs_enroll').each(function() {
	  $(this).click();
      $(this).closest('div.parent').find('a.togglechildren_on:visible').click();
    });
    $('.flag:not(:checked)').attr('disabled', 'disabled');
  });
  
  //Basic Circ Button Settings
  $("#setcirc").click(function() {
    $("#UncheckAllFlags").click();
    $('#pat_member-flags').find('#circulate_circulate_remaining_permissions, #circulate_force_checkout, #circulate_manage_restrictions, #circulate_overdues_report, #circulate_override_renewals, #flag-2,  #borrowers_delete_borrowers, #borrowers_edit_borrowers, #borrowers_list_borrowers, #reserveforothers_place_holds, #editcatalogue_fast_cataloging, #flag-10, #suggestions_suggestions_create, #suggestions_suggestions_manage, #tools_batch_upload_patron_images, #reports_execute_reports, #coursereserves_add_reserves, #coursereserves_delete_reserves,#lists_use_public_lists, #clubs_enroll').each(function() {
	  $(this).click();
      $(this).closest('div.parent').find('a.togglechildren_on:visible').click();
    });
    $('.flag:not(:checked)').attr('disabled', 'disabled');
  });
  
  //Basic Cataloger Button Settings
  $("#setcat").click(function() {
    $("#UncheckAllFlags").click();
    $('#pat_member-flags').find('#circulate_circulate_remaining_permissions, #circulate_force_checkout, #circulate_manage_restrictions, #circulate_overdues_report, #circulate_override_renewals, #flag-2, #parameters_manage_background_jobs, #borrowers_delete_borrowers, #borrowers_edit_borrowers, #borrowers_list_borrowers, #reserveforothers_place_holds, #editcatalogue_edit_catalogue, #editcatalogue_edit_items, #editcatalogue_fast_cataloging, #flag-10, #suggestions_suggestions_create, #suggestions_suggestions_manage, #tools_batch_upload_patron_images, #tools_items_batchmod, #tools_items_batchmod_restricted, #tools_items_batchdel, #tools_label_creator, #tools_upload_local_cover_images, #reports_execute_reports, #flag-18, #flag-20, #clubs_enroll').each(function() {
	  $(this).click();
      $(this).closest('div.parent').find('a.togglechildren_on:visible').click();
    });
    $('.flag:not(:checked)').attr('disabled', 'disabled');
  });
  
  //Basic Director Button Settings
  $("#setdirector").click(function() {
    $("#UncheckAllFlags").click();
    $('#pat_member-flags').find('#circulate_circulate_remaining_permissions, #circulate_force_checkout, #circulate_manage_restrictions, #circulate_overdues_report, #circulate_override_renewals, #flag-2, #parameters_manage_background_jobs, #borrowers_delete_borrowers, #borrowers_edit_borrowers, #borrowers_list_borrowers, #reserveforothers_place_holds, #editcatalogue_edit_catalogue, #editcatalogue_edit_items, #editcatalogue_fast_cataloging, #flag-10, #suggestions_suggestions_create, #suggestions_suggestions_delete, #suggestions_suggestions_manage, #tools_batch_upload_patron_images, #tools_items_batchmod, #tools_items_batchmod_restricted, #tools_items_batchdel, #tools_label_creator, #tools_upload_local_cover_images, #tools_edit_additional_contents, #tools_edit_calendar, #reports_execute_reports, #flag-18, #flag-20, #clubs_enroll').each(function() {
	  $(this).click();
      $(this).closest('div.parent').find('a.togglechildren_on:visible').click();
    });
    $('.flag:not(:checked)').attr('disabled', 'disabled');
  });
