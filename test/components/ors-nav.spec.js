describe('ors-nav', function () {
    //https://puigcerber.com/2016/02/07/how-to-test-angular-1-5-components/
    // beforeEach(function() {
    //     module('orsApp.ors-nav');
    // });
    // // var createController;
    // var element;
    // var scope;
    // // var orsSidebarCtrl = $componentController('orsSidebar', null, {
    // //     orsMap: 'map value'
    // // });
    // beforeEach(inject(function($rootScope, $compile){
    //     scope = $rootScope.$new();
    //     element = $compile(element)(scope);
    //     scope.outside = '1.5';
    //     scope.$apply();
    // }));
    // var $controller;
    //
    // beforeEach(inject(function(_$controller_) {
    //     $controller = _$controller_
    // }));

    // beforeEach(inject(function ($rootScope, $controller) {
    //     console.log('hello');
    //     scope = $rootScope.$new();
    //
    //     createController = function() {
    //         return $controller('myCtrl', {
    //             '$scope': scope
    //         });
    //     };
    // }));
    it('controller should have version number', function () {
        var whatscope = {};
        // var controller = createController();
        var controller = $controller('$location',{$scope: whatscope});
        console.log($controller);
        expect(version).toEqual('0.2.2');

    });

});
