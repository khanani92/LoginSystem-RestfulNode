LoginSys.controller('profile',function($rootScope,$scope,$location,$http){
    // function to submit the form after all validation has occurred
    var userData =  JSON.parse(sessionStorage.getItem('userData'));
    if(userData && (Object.keys(userData).length > 0)){
        $scope.userData = userData;
        $scope.toggleInput = true;
        //$scope.passChange ='';
        $scope.errMsg ='';

        $scope.showInput = function(){
            $scope.toggleInput = false;
        }
        $scope.logout = function(){
/*
            $http({
                url: "http://localhost:3000/api/v1.0/logout",
                headers: {"apikey": "pDblTMZaFam59d@F9c#V1G9UEL17)Odz"},
                data: $scope.userData,  // data{email: data.email, pass: data.pass},//$scope.userData,
                method: "POST"
            }).success(function (res, textStatus) {
                if (res.error == 0) {
                    console.log(res);
                    console.log("Success ");
                    $scope.errorMsg = "";
                    sessionStorage.setItem('userData', JSON.stringify(res.data));
                    // console.log(res);
                    $scope.go('/profile');
                    if (!$scope.$$phase) $scope.$apply();
                } else {
                    $scope.errorMsg = res.message;
                    //console.log(textStatus)
                }
            }).error(
                function () {
                    console.log("Error");
                }
            )//Error*/
        }
        $scope.changePass = function(){
            console.log($scope.userData.passChange)
            if(($scope.userData.passChange) && ($scope.userData.passChange.length > 3 && $scope.userData.passChange.length < 10)){
                $http({
                    url: "http://localhost:3000/api/v1.0/user/"+ userData._id,
                    headers: {"apikey": "pDblTMZaFam59d@F9c#V1G9UEL17)Odz"},
                    data: {password:$scope.userData.passChange},
                    method: "PUT"
                }).success(function (res, textStatus) {
                    if (res) {
                        console.log(res);
                        console.log("Success");
                        $scope.errorMsg = res.message;
                        $scope.toggleInput = true;
                    } else {
                        //$scope.errorMsg = res.data.msg;
                        //console.log(textStatus)
                    }
                }).error(
                    function () {
                        console.log("Error");
                    }
                )//Error
            }else{
                $scope.errMsg = "Password is less than 3 or greater than 15"
            }
        }

    }else{
        $location.path('/profile')
        if(!$scope.$$phase) $scope.$apply();
    }


    /*  $scope.go = function (path){
     $location.path(path);
     }*/

})
