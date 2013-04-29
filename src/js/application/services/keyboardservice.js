define(function (require) {
    "use strict";

    //#import

    //@implementation

    /**
     * KeyboardService
     *
     * @factory
     */
    function KeyboardService($rootScope) {

        //Instance
        var instance = {};
        var history = {};

        $(window).keydown(function(event) {
            $rootScope.$apply(function() {
                history[event.keyCode]++;
            });
        });

        instance.observe = function(code) {
            history[code] = history[code] || 0;

            return function() {
                return history[code];
            };
        };

        return instance;
    }

    //Inject
    KeyboardService.$inject = ['$rootScope'];
    //@end

    //Export
    return KeyboardService;
});