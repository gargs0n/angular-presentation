requirejs.config({
	paths:{
		// Libraries
		jquery       :'../../../components/jquery/jquery',
		angular      :'../../../components/angular/angular'
	},
	shim :{
		angular:{
			deps   :['jquery'],
			exports:'angular'
		}
	}
});

//Bootstrap
require(['angular','context'], function (angular, Context) {
	var context = new Context();
	angular.bootstrap(document, [Context.ID]);
});