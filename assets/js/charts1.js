/* ============================================================
 * Charts
 * This files shows how Pages uses Rickshaw, NVD3 and Sparkline
 * to render charts
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */

(function($) {

    'use strict';
    $(document).ready(function() {
        (function() {
            var container = '#rickshaw-stacked-bars';

            var seriesData = [
                [],
                [],
                [],
                []
            ];
            var random = new Rickshaw.Fixtures.RandomData(30);
            for (var i = 0; i < 20; i++) {
                random.addData(seriesData);
            }

            var graph = new Rickshaw.Graph({
                renderer: 'bar',
                element: document.querySelector(container),
                height: 400,
            
                padding: {
                    top: 0.2
                },
                series: [{
                    data: seriesData[0],
                    color: $.Pages.getColor('complete'), // Get Pages contextual color
                    name: "Open"
                }, {
                    data: seriesData[1],
                    color: $.Pages.getColor('master-light'), // Get Pages contextual color
                    name: "Click"

                }, {
                    data: seriesData[2],
                    color: $.Pages.getColor('danger'), // Get Pages contextual color
                    name: "data Entry"

                },
                {
                    data: seriesData[3],
                    color: $.Pages.getColor('success'), // Get Pages contextual color
                    name: "Learning complete"

                }]

            });

            var hoverDetail = new Rickshaw.Graph.HoverDetail({
                graph: graph,
                formatter: function(series, x, y) {
                    var date = '<span class="date">' + new Date(x * 1000).toUTCString() + '</span>';
                    var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
                    var content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
                    return content;
                }
            });

            graph.render();


            $('#chrt-1fi a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            window.dispatchEvent(new Event('resize'));
        
        });
            
            $(container).data('chart', graph);

        })();


        // Renders an area chart with a slider option using Rickshaw
    





     

    });
})(window.jQuery);