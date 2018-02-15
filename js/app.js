var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl1', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
}]);

myApp.controller('mainCtrl2', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.uppercasehandle = function() {
        return $filter('uppercase')($scope.handle);
    };
    
}]);
