LoginSys.controller('signUp',function($rootScope,$scope,$http,$location){
    // function to submit the form after all validation has occurred
    var userData =  JSON.parse(sessionStorage.getItem('userData'));
    if(userData && (Object.keys(userData).length > 0)){
        $location.path('/dashBoard')
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
          $scope.errorMsg = "";
           // console.log($scope.userData);
          if(($scope.userData.username) && ($scope.userData.username.length > 3 && $scope.userData.username.length < 10)){
          if(($scope.userData.email) && (validateEmail($scope.userData.email))){
            if(($scope.userData.password) && ($scope.userData.password.length > 4 && $scope.userData.password.length < 15)){
              if(($scope.userData.passwordConfirm) && ($scope.userData.passwordConfirm == $scope.userData.password)){
              $scope.errorMsg = "";

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
                    sessionStorage.setItem('userData', JSON.stringify(res.data));
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


              }else{
                $scope.errorMsg = "Both Password doesn't match ";
              }

            }else{
              $scope.errorMsg = "Password is less than 4 or greater than 15";
            }
          }else{
            $scope.errorMsg = "Email is not correct";
          }
          }else{
            $scope.errorMsg = "User Name is less than 4 or greater than 15";
          }

        //    $http({
        //        url:"https://hisab4uback.herokuapp.com/users/register",
        //        data: data, //{ email: data.email, pass: data.pass},//$scope.userData,
        //        method:"POST"
        //    }).success(function(res,textStatus){
        //        if(res.msg != 'email found'){
        //            location.href = 'http://localhost:63342/grayscale/index.html#/signIn';
        //        }
        //        else{
        //            ngDialog.open({
        //                templateUrl:'templates/AlreadyRegistered.html',
        //                className: 'ngdialog-theme-default ngdialog-theme-custom'
        //            })
        //        }
        //        console.log(res);
        //    }).error(
        //        function(){ alert("Error");}
        //    )//Error
        //    //console.log(data.email);


            // check to make sure the form is completely valid
//        if ($scope.userForm.$valid) {
//            alert('Validate Form !');
//        }
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
