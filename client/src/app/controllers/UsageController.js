(function () {
    angular
        .module('app')
        .controller('UsageController', [
            UsageController
        ]);

    function UsageController() {
        var vm = this;
var title="may";
        // TODO: move data to the service
        vm.ramChartData = [{key: 'usage', y: 768660}, { key: 'limit', y: 367404}];
        // vm.storageChartData = [{key: 'May', y: 126560}, {key: 'Other', y: 224365 }];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 140,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', '#E75753', 'rgb(235, 235, 235)'],
                showLabels: false,
                showLegend: true,
                title: title,
                margin: { top: -10, left: -20, right: -20 }
            }
        };
    }
})();
