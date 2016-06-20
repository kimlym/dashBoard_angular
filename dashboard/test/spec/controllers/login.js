'use strict';
describe('Controller: rootCtrl', function() {
    // load the controller's module
    beforeEach(module('myApp'));
    var rootCtrl,
        scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        rootCtrl = $controller('rootCtrl', {
            $scope: scope
        });
    }));
    it('simple test', function() {
        expect(scope.test).toBe(true);
    });
});
