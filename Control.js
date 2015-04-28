var LoginSys = angular.module('LoginSys',['ngRoute']);

    LoginSys.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
            redirectTo:"/signIn"
            })
            /*.when('/welcome', {
                templateUrl: 'views/Welcome.html',
                controller:'welcome'
            })*/
            .when('/signUp', {
                templateUrl:'views/SignUp.html',
                controller: 'signUp'
            })
            .when('/signIn', {
                templateUrl:'views/SignIn.html',
                controller:'signIn'
            })
            .when('/profile', {
                templateUrl:'views/profile.html',
                controller:'profile'
            })

            .otherwise({
                redirectTo:"/"
            })
    }]).

    directive('match', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            scope: {
                match: '='
            },
            link: function(scope, elem, attrs, ctrl) {
                scope.$watch(function() {
                    var modelValue = ctrl.$modelValue || ctrl.$$invalidModelValue;
                    return (ctrl.$pristine && angular.isUndefined(modelValue)) || scope.match === modelValue;
                }, function(currentValue) {
                    ctrl.$setValidity('match', currentValue);
                });
            }
        };
    });


    /*LoginSys.controller('navController', function($scope){
        // function to submit the form after all validation has occurred

    })*/
