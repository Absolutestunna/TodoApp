var myApp = angular.module('Todo', []);

myApp.controller('TodoCtrl', function($scope){
  $scope.todos = [
    "First List",
    "Second List",
    "Third List"
  ];

  $scope.done = function(model){
    var indexNum = $scope.todos.indexOf(model);
    $scope.todos.splice(indexNum, 1);
  };

  $scope.addTodo = function(e){
    if (e.which === 13){
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = "";
    }
  };
});
