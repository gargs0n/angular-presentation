define(function (require) {
    "use strict";

    //#import

    //@implementation

    /**
     * slideDeckDirective
     *
     * @see http://docs.angularjs.org/guide/directive
     *
     * @factory
     */
    function slideDeckDirective() {

        //Instance
        var instance = {};

        instance.restrict = 'E';

        instance.link = function ($scope, element) {
            var slides = element.find('section');

            $scope.totalSlides = slides.length;

            $scope.$watch('activeSlide', function(value) {

                slides.each(function(i, slide) {
                    $(slide).removeClass('past present future');
                    if (i < value) {
                        $(slide).addClass('past');
                    } else if (i == value) {
                        $(slide).addClass('present');
                    } else {
                        $(slide).addClass('future');
                    }
                });

                if (value < -1 || isNaN(value)) {
                    $scope.activeSlide = -1;
                } else if (value > $scope.totalSlides) {
                    $scope.activeSlide = $scope.totalSlides;
                }
            });
        };

        return instance;
    }

    //@end

    //Export
    return slideDeckDirective;
});