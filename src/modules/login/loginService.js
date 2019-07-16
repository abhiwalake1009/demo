app.factory('loginServices',['$http','appSettings','$window',function($http,$window,appSettings){
return {
    login : function(user) {
        var promise = $http.post(appSettings,user).success(function(response){
            return promise;
        }).error(function(err){
            return promise
        });
        return promise;
    }
}
}]);