var globalErrors = new angular
    .module('globalErrors', [])
    .config(function($provide, $httpProvider, $compileProvider) {
        var elementsList = $();

        var showMessage = function(content, cl, time) {
            $('<div/>')
                .addClass('globalAlertMessage')
                .addClass(cl)
                .fadeIn('fast')
                .delay(time)
                .fadeOut('fast', function() { $(this).remove(); })
                .appendTo(elementsList)
                .text(content);
        };

        $httpProvider.interceptors.push(function($q) {
            return {

                'response': function (response) {
                    if (response.config.method != "GET"){ //no need for responses after gets (at least for my uses)
                        showMessage('Success!', 'successMessage', 2000);
                    }else console.log(response); //still want to see it in strange cases
                    return response;
                },

                'responseError': function(rejection) {
                    console.log(rejection);
                    switch (rejection.status) {
                        case 401:
                            showMessage('Looks like you\'re not logged in anymore.', 'errorMessage', 5000);
                            break;
                        default :
                            showMessage('Yikes!  ' + rejection.statusText, 'errorMessage', 5000);
                    }
                    return $q.reject(rejection);
                }
            };
        });

        $compileProvider.directive('appMessages', function() { //creates an array of linked DOM elements
            var directiveDefinitionObject = {
                link: function(scope, element, attrs) { elementsList.push($(element)); }
            };
            return directiveDefinitionObject;
        });
    });
