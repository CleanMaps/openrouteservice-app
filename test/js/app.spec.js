
describe('doesItWork', function () {
    beforeEach(function() {
        module('orsApp');
    });
    // var createController;
    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_
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
    it('should check the scope object', function () {
        var whatscope = {};
        // var controller = createController();
        var controller = $controller('myCtrl', {$scope: whatscope});
        expect(whatscope.products[0]).toEqual('Milk');

    });

});
