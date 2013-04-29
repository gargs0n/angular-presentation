define(function (require) {
	"use strict";

	//#import
	var angular = require('angular');


	//Model
	var ConfigModel = require('model/configmodel');

	//Service
	var LogService = require('services/logservice');
    var KeyboardService = require('services/keyboardservice');
    var UrlService = require('services/urlservice');

	//Directives
	var slideDeckDirective = require('directives/slidedeckdirective');
    var keyboardDirective = require('directives/keyboarddirective');
    var progressBarDirective = require('directives/progressbardirective');

	//Controller
	var PageController = require('controller/pagecontroller');

	//@implementation

	/**
	 * Context
	 *
	 * @constructor
	 */
	function Context() {

		//Create Context
		var instance = angular.module(Context.ID, []);

		/**
		 * Init
		 */
		function init() {

			//Model
			this.value('ConfigModel',new ConfigModel());

			//Services
			this.factory('LogService', LogService);
            this.factory('KeyboardService', KeyboardService);
            this.factory('UrlService', UrlService);

			//Directives
			this.directive('slideDeckDirective', slideDeckDirective);
            this.directive('keyboardDirective', keyboardDirective);
            this.directive('progressBarDirective', progressBarDirective);

			//Controller
			this.controller('PageController', PageController);
		}

		//Call Init
		init.call(instance);

		return instance;
	}

	//ID
	Context.ID = 'context';

	return Context;
	//@end
});