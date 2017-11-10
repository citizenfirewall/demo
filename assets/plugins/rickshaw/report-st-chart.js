(function($) {

    'use strict';
    $(document).ready(function() {
   d3.json('http://revox.io/json/charts.json', function(data) {

            (function() {

                // Renders a stacked area chart
                nv.addGraph(function() {
                    var chart = nv.models.stackedAreaChart()
                        // Gets color (rgba) value using Pages util function $.Pages.getColor()
                        .color([
                            $.Pages.getColor('success', .7),
                            $.Pages.getColor('info'),
                            $.Pages.getColor('primary', .87), //south america
                            $.Pages.getColor('warning'),
                            $.Pages.getColor('complete', .67), //europe
                            $.Pages.getColor('success-dark'),
                            $.Pages.getColor('menu', .2) //antarctica
                        ])
                        .margin({
                            left: 15
                        })
                        .x(function(d) {
                            return d[0]
                        }) //We can modify the data accessor functions...
                        .y(function(d) {
                            return d[1]
                        }) //...in case your data is formatted differently.
                        .useInteractiveGuideline(true) //Tooltips which show all data points. Very nice!
                        .rightAlignYAxis(true) //Let's move the y-axis to the right side.
                        .transitionDuration(500)
                        .showControls(true) //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                        .clipEdge(true);

                    //Format x-axis labels with custom function.
                    chart.xAxis
                        .tickFormat(function(d) {
                            return d3.time.format('%a')(new Date(d))
                        });

                    chart.yAxis
                        .tickFormat(d3.format('d'));



                    chart.legend.margin({
                        top: 30
                    });

                    d3.select('#nvd3-area svg')
                        .datum(data.nvd3.stackedArea)
                        .call(chart);

                    var xTicks = d3.select('.nv-y.nv-axis  g').selectAll('g');
                    xTicks
                        .selectAll('text')
                        .attr('transform', function(d, i, j) {
                            return 'translate (8, 0)'
                        });

                    var yTicks = d3.select('.nv-x.nv-axis  g').selectAll('g');
                    yTicks
                        .selectAll('text')
                        .attr('transform', function(d, i, j) {
                            return 'translate (0, 10)'
                        });

                    var minmax = d3.select('.nv-x.nv-axis g');
                    minmax
                        .selectAll('text')
                        .attr('transform', function(d, i, j) {
                            return 'translate (0, 10)'
                        });


                    var legend = d3.select('.nv-legendWrap .nv-legend');
                    legend.attr('transform', function(d, i, j) {
                        return 'translate (0, -20)'
                    });


                    nv.utils.windowResize(function() {

                        chart.update();

                        var xTicks = d3.select('.nv-y.nv-axis  g').selectAll('g');
                        xTicks
                            .selectAll('text')
                            .attr('transform', function(d, i, j) {
                                return 'translate (10, 0)'
                            });

                        var yTicks = d3.select('.nv-x.nv-axis  g').selectAll('g');
                        yTicks
                            .selectAll('text')
                            .attr('transform', function(d, i, j) {
                                return 'translate (0, 10)'
                            });

                        var minmax = d3.select('.nv-x.nv-axis g');
                        minmax
                            .selectAll('text')
                            .attr('transform', function(d, i, j) {
                                return 'translate (0, 10)'
                            });


                        var legend = d3.select('.nv-legendWrap .nv-legend');
                        legend.attr('transform', function(d, i, j) {
                            return 'translate (0, -20)'
                        });

                    });

                    $('#nvd3-area').data('chart', chart);

                    return chart;
                });

            })();
 });

        $('#tabs-nvd3 a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            window.dispatchEvent(new Event('resize'));
        
        });



    });
})(window.jQuery);