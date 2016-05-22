(function() {
    'use strict';

    angular
        .module('app')
        .directive('messagesSection', messagesSectionDirective);

    function messagesSectionDirective() {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                theme: '@',
                messages: '='
            },
            template: '' +
                      '<section>' +
                      '  <md-subheader ng-class="theme">New Offers</md-subheader>' +
                      '  <md-list>' +
                      '    <md-list-item class="md-3-line" ng-repeat="message in messages">' +
                      ' <input ng-model="vm.todoText" type="checkbox" name="taskText" required>' +
                      '    <div class="md-list-item-text">' +
                      '      <h3>{{message.subject}}</h3>' +
                      '      <h4>{{message.userName}}</h4>' +
                      '      <p>{{message.text}}</p>' +
                      '    </div>' +
                      '    </md-list-item>' +
                      '  </md-list>' +
                      '</section>',
            link : function(scope, element, attrs) {
            }
        };
    }
})();
