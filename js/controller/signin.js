LoginSys.controller('signIn',function($rootScope,$scope,$http,$location){
  // function to submit the form after all validation has occurred
  var userData =  JSON.parse(sessionStorage.getItem('userData'));
   if(userData && (Object.keys(userData).length > 0)){
    $location.path('/profile')
    if(!$scope.$$phase) $scope.$apply();

   }else {
  $scope.userData = {
    username: '',
    password: ''
  };
  $scope.err = ''
  var data = {userData: $scope.userData};
  $scope.errorMsg = "";

  $scope.SignInForm = function () {

        $http({
          url: "http://localhost:3000/api/v1.0/login",
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
        )//Error

  };


  $scope.go = function (path) {
    $location.path(path);
  }
   }
})
