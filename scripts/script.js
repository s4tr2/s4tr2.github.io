(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
      $scope.message="";
      $scope.foodItems ="";
      $scope.colChange ={};
      $scope.borChange = {};
            $scope.checkFunction = function(){
          $scope.arrFoodItems = $scope.foodItems.split(",");
          if($scope.arrFoodItems[0].length==0){
           $scope.message = "Please Enter Data First";
           $scope.colChange = {
             "color": "red"
           };
           $scope.borChange = {
             "border-color": "red"
           };
         }
          else if($scope.arrFoodItems.length>=1 && $scope.arrFoodItems.length<=3){
            $scope.message ="Enjoy!";
            $scope.colChange = {
              "color": 'green'
            };
            $scope.borChange = {
              "border-color": "green"
            };
          }
          else {
            $scope.message= "Too Much!";
            $scope.colChange = {
              "color": 'green'
            };
            $scope.borChange = {
              "border-color": "green"
            };
          }
    }
  }
})();
