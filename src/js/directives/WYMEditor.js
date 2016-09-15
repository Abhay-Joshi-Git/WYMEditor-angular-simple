angular.module('app').directive('wymEditor', function(WYM_EDITOR_OPTIONS) {
	return {
		link: function(scope, element, attrs) {
			var options = WYM_EDITOR_OPTIONS;
			_.extend(options, {
				postInit: function(editor) {
					editor._html(htmldata);

					// Throttled update method for the content
					var update = _.throttle(function update() {
						scope.$apply(function() {
							scope.htmldata = editor._html();
						});
					}, 250);

					// Bind all text area events
					var $doc = $(editor._doc);
					$doc.bind('keyup', update);
					$doc.bind('keydown', update);

					// Bind all editor events
					var $box = $(editor._box);
					$box.find(editor._options.toolSelector).bind('click', update);
					$box.find(editor._options.containerSelector).bind('click', update);

					// scope.$watch(attrs.ngModel, function(content) {
					// 	if (content !== editor._html()) {
					// 		editor._html(content);
					// 	}
					// });
				}
			});
			$(element).wymeditor(options);
		}
	};
})