define(function (require) {
    "use strict";

    //#import

    //@implementation 

    /**
     * Page Controller
     *
     * @constructor
     */
    function PageController($scope,$location,UrlService,LogService) {
        /**
         * Init
         */
        function init() {
            LogService.log('PageController:init');
            $scope.activeSlide = 0;
        }

        var ANIMATION_DURATION = 0.5;

        $scope.totalSlides = 0;
        $scope.activeSlide = -1;

        $scope.$watch('activeSlide', function(value) {
            UrlService.set('/', ANIMATION_DURATION);
            if (value > -1) {
                UrlService.set('/slides/' + (value + 1), ANIMATION_DURATION);
            }
        });

        $scope.$watch(function() { return $location.url(); }, function(value) {
            var match = /\/slides\/(\d+)/.exec(value);
            if (match) {
                $scope.activeSlide = parseInt(match[1], 10) - 1;
            }
        });

        $scope.next = function() {
            $scope.activeSlide++;
        };

        $scope.previous = function() {
            $scope.activeSlide--;
        };

        //Call Init
        init();
    }


    //Inject
    PageController.$inject = ['$scope','$location','UrlService','LogService'];

    //@end

    //Export
    return PageController;
});