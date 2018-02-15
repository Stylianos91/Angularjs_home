var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl1', ['$scope', '$filter', '$timeout', function($scope, $filter,$timeout) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
    	console.log("afawfaawfa");
        return $filter('lowercase')($scope.handle);
    };
    
    
    $scope.$watch('handle', function(newValue, oldValue){
    	console.info('Changed');
    	console.log('Old ' + oldValue);
    	console.log('New ' + newValue);
    });
    
    
    
    $timeout(function() {
    	// to   $timeout  kanei to idio me ta commented
   // 	$scope.$apply(function(){
    		
		$scope.handle='newtwitterhandle';
		console.log('scope changed!!!');
		
  //  	})
    	
    	}, 3000);
    
    
    
}]);






myApp.controller('mainCtrl2', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.uppercasehandle = function() {
        return $filter('uppercase')($scope.handle);
    };
    
}]);
