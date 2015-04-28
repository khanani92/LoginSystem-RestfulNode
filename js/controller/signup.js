LoginSys.controller('signUp',function($rootScope,$scope,$http,$location){
    // function to submit the form after all validation has occurred
    var userData =  JSON.parse(sessionStorage.getItem('userData'));
    if(userData && (Object.keys(userData).length > 0)){
        $location.path('/profile')
        if(!$scope.$$phase) $scope.$apply();

}else{
      $scope.errorMsg = "";
        $scope.userData={
            username:'',
            email: '',
          password: ''
        };

        var data = {userData: $scope.userData};

        $scope.submitForm = function() {

           // console.log($scope.userData);

                $http({
                  url: "http://localhost:3000/api/v1.0/users",
                  headers: {"apikey": "pDblTMZaFam59d@F9c#V1G9UEL17)Odz"},
                  data: $scope.userData,  // data{email: data.email, pass: data.pass},//$scope.userData,
                  method: "POST"
                }).success(function (res, textStatus) {
                  if (res) {
                    console.log(res);
                    console.log("Success ");
                    $scope.errorMsg = "";

                    $scope.go('/signIn');
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

        };

      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      $scope.go = function (path){
        console.log(path)
        $location.path(path);
      }

    }




})
