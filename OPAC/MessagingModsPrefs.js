//----------Patron Messaging----------//
  //Move Provider and Number above messaging preference table
  if (window.location.href.indexOf("opac-messaging.pl") > -1) { 
    $('#usermessaging h1').after('<fieldset class="rows d-print-none"><ul id="sms_inputs"></ul></fieldset>');
    $('#sms_provider_id').parent().appendTo('#sms_inputs');
    $('#SMSnumber').parent().appendTo('#sms_inputs');
    $(".sms_number_help").text("Numbers must be entered as +1 followed by 10 digits, no spaces, no hyphens. Example: +16208887777");
    $("li:contains('Some charges for text messages')").wrapInner('<div class="alert alert-warning"></div>').appendTo('#sms_inputs');
    $("table").after('<div style="font-size: smaller; text-align: center; margin-bottom: 14px; margin-top: -12px;"><em>To help avoid spam filters, digesting is enabled by default. This combines multiple similar messages into one message if possible.</em></div><div class="alert alert-primary" style="font-size: 90%; margin-bottom: -35px;">Opt out at any time by unchecking the boxes for corresponding messages.</div>');
    
    $("span:contains('Advance notice')").append(' - <em style="font-size: smaller;"> notice X days before item is due</em>');
    $("span:contains('Hold filled')").append(' - <em style="font-size: smaller;"> notice of holds available for pickup</em>');
    $("span:contains('Hold reminder')").append(' - <em style="font-size: smaller;"> notice of holds expiring soon</em>');
    $("span:contains('Item check-in')").append(' - <em style="font-size: smaller;"> notice of returned items that day</em>');
    $("span:contains('Item checkout and renewal')").append(' - <em style="font-size: smaller;"> notice of checkout or renew that day</em>');
    $("span:contains('Item due')").append(' - <em style="font-size: smaller;"> notice on day item is due</em>');
    
    $("#auto_renewals_message").remove();
    
    //Change term 'SMS' to 'Text'
    $("th:contains('SMS')").text("Text");
    $("label:contains('SMS number:')").text("Texting number:");
    $(".label:contains('SMS number:')").text("Texting number:");
    $("label:contains('SMS provider:')").text("Wireless provider:");

    //Force digests
      var email1_var = document.getElementById('email1'); 
      var sms1_var = document.getElementById('sms1'); 
      var email2_var = document.getElementById('email2'); 
      var sms2_var = document.getElementById('sms2');
      var email4_var = document.getElementById('email4'); 
      var sms4_var = document.getElementById('sms4');  
 
      $('#email1, #sms1, #digest1').change(function() { 
        if( (email1_var.checked == true) || (sms1_var.checked == true) ) { 
          $('#digest1').prop('checked', 'true'); 
        } 
      }); 
 
      $('#email2, #sms2, #digest2').change(function() { 
        if( (email2_var.checked == true) || (sms2_var.checked == true) ) { 
          $('#digest2').prop('checked', 'true'); 
        } 
      }); 
 
      $('#email4, #sms4, #digest4').change(function() { 
        if( (email4_var.checked == true) || (sms4_var.checked == true) ) { 
          $('#digest4').prop('checked', 'true'); 
        } 
      }); 
  
    
  }
