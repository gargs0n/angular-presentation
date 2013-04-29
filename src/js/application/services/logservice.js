define(function (require) {
    "use strict";

    //#import

    //@implementation 

    /**
     * LogService
     *
     * @factory
     */
    function LogService(log) {

        //Instance
        var instance = {};

        /**
         * Init
         */
        function init() {
            //TODO:Impl. alert fallback
        }

        /**
         * Error
         *
         * @description Write an error message
         * @param args
         */
        instance.error = function (args) {
            log.error.apply(this,arguments);
        };

        /**
         * Info
         *
         * @description Write an info message
         * @param args
         */
        instance.info = function (args) {
            log.info.apply(this,arguments);

        };

        /**
         * Log
         *
         * @description Write a log message
         * @param args
         */
        instance.log = function (args) {
            log.log.apply(this,arguments);

        };

        /**
         * Warn
         *
         * @description Write a warn message
         * @param args
         */
        instance.warn = function (args) {
            log.warn.apply(this,arguments);

        };

        //Call Init
        init();

        return instance;
    }

    //Inject
    LogService.$inject = ['$log'];

    //@end

    //Export
    return LogService;
});