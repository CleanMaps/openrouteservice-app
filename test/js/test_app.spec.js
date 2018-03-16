
describe('The testApp', function () {
    beforeEach(function() {
        module('testApp');
    });
    // var createController;
    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

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
    var whatscope = {};
    it('checks if the first product is milk', function () {
        var controller = $controller('myCtrl', {$scope: whatscope});
        expect(whatscope.products[0]).toEqual('Milk');
    });
    it('checks the products array length', function () {
        var controller = $controller('myCtrl', {$scope: whatscope});
        expect(whatscope.products.length).toEqual(3);
    });

    // var controller = createController();


});
