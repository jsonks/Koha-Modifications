//-----------------------Holds Queue (view_holdsqueue.pl)----------------------
$(document).ready(function() {
  var libcode = $('#logged-in-info-full .logged-in-branch-code').text();

  //Point holds queue button directly to logged in library's queue
  $('#circ_circulation-home .circ-button:contains("Holds queue")').attr('href', '/cgi-bin/koha/circ/view_holdsqueue.pl?branchlimit=' + libcode +'&itemtypeslimit=&ccodeslimit=&locationslimit=&run_report=1');  
  
  //Add count to to the holds queue button at circ home using report
  //Add span as placeholder for count
  $('#circ_circulation-home .circ-button:contains("Holds queue")').append('   <span class="label label-default" id="hqcountlabel" style="float: right;"><i id="hqcount" class="fa fa-spinner fa-spin"></i></span>');  

  //Pull count via report
  $.getJSON("/cgi-bin/koha/svc/report?id=2915&sql_params=" + libcode + "&annotated=1" + new Date().getTime(), function(result){
    var hqcount = '<span id="hqcount">' + result[0].total + '</span>';
    var stalechecker = result[0].oldestHold;
    
    //specify number of days considered stale & add emphasis classes if holds on the queue exceed it [requires extra CSS]
    if(stalechecker > 7) { 
      $('#circ_circulation-home .circ-button:contains("Holds queue")').first().addClass('buttonglow2 bg-stripe-r');
    }
    
    //Replace placeholder with count from report
    $("#hqcount").replaceWith(hqcount);
    
    //Make label green if count is over 0 (default of 0 is gray)
    $('#hqcount').filter(function(index){
      return parseInt(this.innerHTML) > 0;
    }).parent().removeClass('label-default').addClass('label-primary');
    
    //Make label red if count is over 20
    $('#hqcount').filter(function(index){
      return parseInt(this.innerHTML) > 20;
    }).parent().removeClass('label-default').addClass('label-danger');
    
    }
  );
  
  //Add hold age indicators to the queue
  $("#circ_view_holdsqueue table").find(".hq-date").each(function(index,element){
    var hqDate = new Date($(element).html());
    var eightDaysAgo = new Date(Date.now() - 8 * 24 * 60 * 60 * 1000);
    var diffy = hqDate - eightDaysAgo;
    
    if(diffy < -30844800000) {  //357 days
      $(element).prepend('<div class="bg-stripe-r buttonglow2"><p class="hq-stale" title="Please mark this item missing and notify the requesting library!"> <span class="shake-lr">💀</span> Over a year old</p></div>');
    } else if(diffy < -1900800000) {  // 22 days
      $(element).prepend('<div class="bg-stripe-r bg-stripe-o buttonglow2"><p class="hq-stale" title="Please mark this item missing and notify the requesting library!"> <span class="shake-lr">📆</span> Over a month old</p></div>');
    } else if(diffy < 0) { 
      $(element).prepend('<div class="bg-stripe-r bg-stripe-y buttonglow2"><p class="hq-stale" title="Please mark this item missing and notify the requesting library!"> <span class="shake-lr">⏰</span> Over a week old</p></div>');
    }
  });
  
  //Trigger confetti if HQ is empty [I put the script import in IntranetNav]
  //https://github.com/loonywizard/js-confetti
  if($('body').is('#circ_view_holdsqueue')) {  
    if ($('.message:contains("No items found.")').length > 0) {  
      const canvas = document.getElementById('custom_canvas');
      const jsConfetti = new JSConfetti({ canvas });

      setTimeout(() => {
        jsConfetti.addConfetti({
          emojis: ['💯', '🎢', '🐱‍🐉', '⭐', '🦈', '🍕', '🎉', '🐟'],
          emojiSize: 70,
          confettiNumber: 99,
        });
      }, 500);
    } 
  }
  
});
