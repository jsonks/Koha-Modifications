//Add public note to holds queue with API
  if ($('#circ_view_holdsqueue').length) {
        $('tbody .hq-notes').append('<i class="fa fa-spinner fa-spin loader">'); //spinner placeholder while data loads
        $('tbody tr').each(function () {
            let this_row = $(this);
            let bcode = $(this).find(".hq-barcode strong").text();
            $.get('/api/v1/items/', { external_id: bcode }, function(result) {
                    for (i = 0; i < result.length; i++) {
                        if (result[i].public_notes == null) {
                            $(this_row.find('.hq-notes .loader')).replaceWith("<p></p>");
                        } else {
                            $(this_row.find('.hq-notes .loader')).replaceWith("<p style='color: red;'><em>" + result[i].public_notes + "</em></p>");
                        }
                    }
            });
        });
    }
