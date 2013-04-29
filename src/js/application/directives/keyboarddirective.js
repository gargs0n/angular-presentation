define(function (require) {
    "use strict";

    //#import

    //@implementation

    /**
     * keyboardDirective
     *
     * @see http://docs.angularjs.org/guide/directive
     *
     * @factory
     */
    function keyboardDirective(KeyboardService) {

        //Instance
        var instance = {};

        instance.link = function ($scope, element, attrs) {
            $scope.$watch(KeyboardService.observe('39'), function() {
                $scope.next();
            });

            $scope.$watch(KeyboardService.observe('37'), function() {
                $scope.previous();
            });
        };

        return instance;
    }

    //@end
    keyboardDirective.$inject = ['KeyboardService'];
    //Export
    return keyboardDirective;
});