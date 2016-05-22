var myApp = angular.module('myApp', []);
myApp.controller("TodoCtrl", function($scope){
  $scope.todos = [
    "First List",
    "Second List",
    "Third List"
  ];

  $scope.done = function(todo){
    var indexNum = $scope.todos.indexOf(todo);
    $scope.todos.splice(indexNum, 1);
  };

  $scope.remove = function(e){
    if (e.which === 13){
      $scope.todos.push($scope.tItem);
      $scope.tItem = "";
    }
  };
});
