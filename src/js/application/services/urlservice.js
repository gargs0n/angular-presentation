define(function (require) {
    "use strict";

    //#import

    //@implementation 

    /**
     * UrlService
     *
     * @factory
     */
    function UrlService($location,$timeout) {

        //Instance
        var instance = {};
        var timer;

        instance.set = function(value, opt_timeout) {
            $timeout.cancel(timer);
            timer = $timeout(function() {
                $location.url(value);
            }, opt_timeout);
        };

        return instance;
    }

    //Inject
    UrlService.$inject = ['$location','$timeout'];

    //@end

    //Export
    return UrlService;
});