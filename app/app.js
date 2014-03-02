(function () {
    'use strict';
    angular.module('app', ['ngRoute'])
            .config(function ($routeProvider, $locationProvider) {
                $routeProvider.when('/cart', {
                    templateUrl: 'app/cart/cart.html',
                });
                $routeProvider.when('/', {
                    templateUrl: 'app/home/home.html',
                    controller: 'homeController as home'
                });
                $locationProvider.html5Mode(true);
            });
}());