LoginSys.controller('signIn',function($rootScope,$scope,$http,$location){
  // function to submit the form after all validation has occurred
  var userData =  JSON.parse(sessionStorage.getItem('userData'));
  /* if(userData && (Object.keys(userData).length > 0)){
   // $location.path('/')
   // if(!$scope.$$phase) $scope.$apply();

   }else {*/
  $scope.userData = {
    username: '',
    password: ''
  };
  $scope.err = ''
  var data = {userData: $scope.userData};
  $scope.errorMsg = "";

  $scope.SignInForm = function () {
    $scope.errorMsg = "";
    console.log(data);
    if(($scope.userData.username) && ($scope.userData.username.length > 3 && $scope.userData.username.length < 10)){
      if(($scope.userData.password) && ($scope.userData.password.length > 4 && $scope.userData.password.length < 15)) {
        $scope.errorMsg = "";
        $http({
          url: "http://localhost:3000/api/v1.0/user/login",
          headers: {"apikey": "pDblTMZaFam59d@F9c#V1G9UEL17)Odz"},
          data: $scope.userData,  // data{email: data.email, pass: data.pass},//$scope.userData,
          method: "POST"
        }).success(function (res, textStatus) {
          if (res) {
            console.log(res);
            console.log("Success ");
            $scope.errorMsg = "";
            // console.log(res);
            $scope.go('/dashboard');
            if (!$scope.$$phase) $scope.$apply();
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
        $scope.errorMsg = "Password is less than 4 or greater than 15";

      }}else{
      $scope.errorMsg = "User Name is less than 4 or greater than 15";
    }



  };


  $scope.go = function (path) {
    $location.path(path);
  }
  // }
})
