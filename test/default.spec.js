Qdescribe('suite description', function () {
    beforeEach(function() {
        module('the_module');
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
    it('does what the test should do', function () {
        var whatscope = {};
        // var controller = createController();
        var controller = $controller('Controller_Name', {$scope: whatscope});
        expect(whatscope.products[0]).toEqual('Milk');

    });

});
