'use strict';

/* App Module */
/**
 * module:
 *  a container for the different parts of an app including controllers, services, filters, directives which configures the Injector
 */
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
]);
/** request $routeProvider to be injected into our function */
/** app provider when defines our routes */
/** $routeProvider.when(path, route) */
phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/main-info.html',
            controller: 'MovieController'
        }).
        when('/', {
            templateUrl: 'partials/related-results.html',
            controller: 'MovieController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
