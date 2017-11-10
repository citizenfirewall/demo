/* ============================================================
 * Tables
 * Generate advanced tables with sorting, export options using
 * jQuery DataTables plugin
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
(function($) {

    'use strict';

    // Initialize a basic dataTable with row selection option
    var initBasicTable = function() {

        var table = $('#basicTable');

        var settings = {
            "sDom": "t",
            "destroy": true,
            "paging": false,
            "scrollCollapse": true,
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [0]
            }],
            "order": [
                [1, "desc"]
            ]

        };

        table.dataTable(settings);

        $('#basicTable input[type=checkbox]').click(function() {
            if ($(this).is(':checked')) {
                $(this).closest('tr').addClass('selected');
            } else {
                $(this).closest('tr').removeClass('selected');
            }

        });

    }

    // Initialize a dataTable having bootstrap's stripes style
    var initStripedTable = function() {

        var table = $('#stripedTable');

        var settings = {
            "sDom": "t",
            "destroy": true,
            "paging": false,
            "scrollCollapse": true

        };
        table.dataTable(settings);

    }

    // Initialize a dataTable with collapsible rows to show more details
    var initDetailedViewTable = function() {

        var _format = function(d) {
            // `d` is the original data object for the row
            return '<table class="table table-hover demo-table-search table-responsive-block">'+
                        '<thead>'+
                            '<tr>'+
                                '<th style="width: 7% !important;">S No. </th>'+
                                '<th style="width: 18%;">TITLE / DESCRIPTION </th>'+
                                '<th style="width: 15%;">SENT</th>'+
                                '<th style="width: 15%;">OPEN</th>'+
                                '<th style="width: 15%;">CLICK</th>'+
                                '<th style="width: 15%;">COMPROMISE</th>'+
                                '<th style="width: 15%;">TRAINED</th>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>'+
                            '<tr>'+
                              '<td>1.1</td>'+
                              '<td><a href="#">Campaign Name</a></td>'+
                              '<td>'+
                                '254 (100%)<p><a href="#"> HR</a>, <a href="#"> Sales</a>, <a href="#"> Design</a>, <a href="#"> Tech</a></p>'+
                              '</td>'+
                              '<td>'+
                               '<a href="recipient_listing.html"> 196 (77.56%)</a>'+
                              '</td>'+
                              '<td>'+
                                '<a href="recipient_listing.html">79 (45.63%)</a>'+
                              '</td>'+
                              '<td>'+
                                '<a href="recipient_listing.html"> 48 (58.45%)</a>'+
                               '</td>'+
                              '<td>'+
                                '<a href="recipient_listing.html">40 (83.56%)</a>'+
                              '</td>'+
                            '</tr>'+
                            '<tr>'+
                              '<td>1.2</td>'+
                              '<td><a href="#">Campaign Name</a></td>'+
                              '<td>'+
                                '254 (100%)<p><a href="#"> HR</a>, <a href="#"> Sales</a>, <a href="#"> Design</a>, <a href="#"> Tech</a></p>'+
                              '</td>'+
                              '<td>'+
                               '<a href="recipient_listing.html"> 196 (77.56%)</a>'+
                              '</td>'+
                              '<td>'+
                                '<a href="recipient_listing.html">79 (45.63%)</a>'+
                              '</td>'+
                              '<td>'+
                                '<a href="recipient_listing.html"> 48 (58.45%)</a>'+
                               '</td>'+
                              '<td>'+
                                '<a href="recipient_listing.html">40 (83.56%)</a>'+
                              '</td>'+
                            '</tr>'+
                            '<tr>'+
                              '<td>1.3</td>'+
                              '<td><a href="#">Campaign Name</a></td>'+
                              '<td>'+
                                '254 (100%)<p><a href="#"> HR</a>, <a href="#"> Sales</a>, <a href="#"> Design</a>, <a href="#"> Tech</a></p>'+
                              '</td>'+
                              '<td>'+
                               '<a href="recipient_listing.html"> 196 (77.56%)</a>'+
                              '</td>'+
                              '<td>'+
                                '<a href="recipient_listing.html">79 (45.63%)</a>'+
                              '</td>'+
                              '<td>'+
                                '<a href="recipient_listing.html"> 48 (58.45%)</a>'+
                               '</td>'+
                              '<td>'+
                                '<a href="recipient_listing.html">40 (83.56%)</a>'+
                              '</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>';
        }


        var table = $('#detailedTable');

        table.DataTable({
            "sDom": "t",
            "scrollCollapse": true,
            "paging": false,
            "bSort": false
        });

        // Add event listener for opening and closing details
        $('#detailedTable tbody').on('click', 'tr', function() {
            //var row = $(this).parent()
            if ($(this).hasClass('shown') && $(this).next().hasClass('row-details')) {
                $(this).removeClass('shown');
                $(this).next().remove();
                return;
            }
            var tr = $(this).closest('tr');
            var row = table.DataTable().row(tr);

            $(this).parents('tbody').find('.shown').removeClass('shown');
            $(this).parents('tbody').find('.row-details').remove();

            row.child(_format(row.data())).show();
            tr.addClass('shown');
            tr.next().addClass('row-details');
        });

    }

    // Initialize a condensed table which will truncate the content 
    // if they exceed the cell width
    var initCondensedTable = function() {
        var table = $('#condensedTable');

        var settings = {
            "sDom": "t",
            "destroy": true,
            "paging": false,
            "scrollCollapse": true
        };

        table.dataTable(settings);
    }

    initBasicTable();
    initStripedTable();
    initDetailedViewTable();
    initCondensedTable();

})(window.jQuery);