//Add 007 icons via API
    if ( $('#results').length ) {
        $('tr').each( function() {
              let this_row = $(this);
              let bnum = $(this).find('input').attr('value');
              let url = `/api/v1/public/biblios/${bnum}`;
              if ( bnum ) {
                  $.ajax({
                      type: "GET",
                      accepts: {"*": "application/marc-in-json" },
                      url: url,
                      complete: function(data) {
                          let bibliodata = data.responseJSON.fields;
                          bibliodata.forEach( function(arrayItem) {
                              if ( Object.keys(arrayItem)[0] == '007' ) {
                                  // let the007 = arrayItem['007'].split('');
                                  let the0070 = arrayItem['007'][0];
                                  let the0071 = arrayItem['007'][1];
                                  let the0074 = arrayItem['007'][4];
                                  let the007t = the0070 + the0071 + the0074;
                                  console.log(the007t);
                                if (the007t.indexOf('vds') > -1) {
                                	$(`<span class="results_summary format_icon"><img src="https://raw.githubusercontent.com/jsonks/Koha-Modifications/main/OPAC/Add007IconsViaAPI/img/BluRay.png" title="Bluray"></img></span>`).insertAfter( this_row.find('.results_summary.ratings') );
                                } else  if (the007t.indexOf('vdv') > -1) {
                                  $(`<span class="results_summary format_icon"><img src="https://raw.githubusercontent.com/jsonks/Koha-Modifications/main/OPAC/Add007IconsViaAPI/img/DVD.png" title="DVD"></img></span>`).insertAfter( this_row.find('.results_summary.ratings') );
                                } else  if (the007t.indexOf('vfb') > -1) {
                                  $(`<span class="results_summary format_icon"><img src="https://raw.githubusercontent.com/jsonks/Koha-Modifications/main/OPAC/Add007IconsViaAPI/img/VHS.png" title="VHS"></img></span>`).insertAfter( this_row.find('.results_summary.ratings') );
                                }
                              }
                            });
                        }
                    });
                }
            });
        }
