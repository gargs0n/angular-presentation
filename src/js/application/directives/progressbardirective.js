define(function (require) {
    "use strict";

    //#import

    //@implementation

    /**
     * progressBarDirective
     *
     * @see http://docs.angularjs.org/guide/directive
     *
     * @factory
     */
    function progressBarDirective() {

        //Instance
        var instance = {};

        instance.restrict = 'A';
        instance.link = function ($scope,element,attrs) {
            $scope.progress = 10;
            $scope.$watch('activeSlide', function(value) {
                $scope.progress =  ((value +1) / $scope.totalSlides)*100 ;
            });

        };

        return instance;
    }

    //@end

    //Export
    return progressBarDirective;
});