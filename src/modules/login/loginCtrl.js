app.controller('loginCtrl',['$scope','$window','loginServices','appSettings',function($scope,$window,loginServices,appSettings){

    alert("login loaded");

    $scope.login = function(user){
        loginServices.login(user).success(function(response){
            alert("successfull");
        }).error(function(err){
            alert("failed");
        });
    }
    
}])