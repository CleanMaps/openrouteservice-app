/// <reference path="../app/js/app.js">
"use strict";

describe('RootController', function () {
    beforeEach(module('orsApp'));

    var $controller;

    beforeEach(inject(function($injector, _$controller_){
        $rootScope = $injector.get('$rootScope');
        $controller = _$controller_;
    }));
    //
    // describe('$scope.ID', function() {
    //     it('should check the scope object', function () {
    //         var $scope = {};
    //         var controller = $controller('RootController', {$scope: $scope});
    //         expect($scope.ID).toEqual(5);
    //     });
    // });
    it('should load the App', function () {
        expect(2+3).toBe(6);
    });
});
