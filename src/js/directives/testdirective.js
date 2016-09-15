angular.module('app').directive('testDirective', function(WYM_EDITOR_OPTIONS) {
	return {
		//require: '^ngModel',
		// scope: {
		// 	content: '@'
		// }
		link: function(scope, element, attrs) {
			var options = WYM_EDITOR_OPTIONS;
			// scope.$watch('htmldata', function(oldValue, newValue) {
			// 	console.log(newValue);
			// });

		}
	};
})