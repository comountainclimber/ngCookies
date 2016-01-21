angular.module('App', ['ngCookies']);

angular.module('App')
  .controller('MyController', ['$scope','$cookies', function($scope,$cookies) {

  // Retrieving a cookie
  var userHasViewed = $cookies.get('hasViewed');

  if (userHasViewed === 'true') {
    $scope.greeting = "Welcome Back";
  }
  else{
    $scope.greeting = "Its your first time and we are stoked to meet you.";
  }
  // Setting a cookie
  $cookies.put('hasViewed', 'true');


}]);