var app=angular.module('myCtrlAdmin',[]);
app.controller('myCtrlAdmin',['$http','$scope', '$filter', '$timeout', 'getAll', 'getSpecific', 'getLogin','checkLogoutService', 'checkLoginService', 'forgotPasswordService', 'register', function ($http, $scope, $filter, $timeout, getAll, getSpecific, getLogin, checkLogoutService, checkLoginService, forgotPasswordService, register){
    $scope.page_name = 'Welcome Admin page';
    $scope.text = 'enter email';
    $scope.datas = [];
    $scope.dataf = [];
    $scope.userdetails = [];
    $scope.msg = '';
    $scope.show = false;
    $scope.registerPopup = false;
    $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    var promise = getAll.getAllStudent();

           promise.then(
              function(payload) {
                // console.log("test : ",payload.data);
                  $scope.datas = payload.data;
                  // console.log("test : ",$scope.datas);
              },
              function(errorPayload) {
                  $log.error('failure loading data', errorPayload);
              });


              $scope.fullValue = function(id) {
                var promise1 =  getSpecific.getSpecificStudent(id);
                // console.log("function call : ", id);
                promise1.then(
                   function(payload) {
                      //console.log("specific test : ",payload.data);
                       $scope.dataf = payload.data;
                       //console.log("specific : ",$scope.dataf);
                   },
                   function(errorPayload) {
                       $log.error('failure loading data', errorPayload);
                   });
              }
              $scope.registerUser = function(){
                  $scope.registerPopup = true;
              }
              $scope.registerStudent = function(){
              //  console.log("register ",$scope.register);
              if ($scope.register.rpassword != $scope.register.cpassword) {
                  $scope.msg = " OOps password not matched ";
              } else {
                  $scope.msg = '';
                  var promise4 =  register.registerStudent($scope.register);
                  promise4.then(function(response) {
                    // console.log("result new : ",response.data['success']);
                    $scope.msg = (response.data['success']) ? response.data['success']: response.data['error'];
                      $timeout(function() {
                        $scope.registerPopup = false;
                        $scope.register = '';
                        $scope.msg = '';
                      }, 1000);
                  }, function(reason) {
                     console.log('Failed: ' + reason);
                  }, function(update) {
                    console.log('Got notification: ' + update);
                  });
              }
            }
              $scope.login = function($location,$timeout) {

                     // $scope.msg = (sessionStorage.getItem('msg') == null || sessionStorage.getItem('msg') == undefined )? ' ': sessionStorage.getItem('msg');
                     // $scope.login = '';

                var promise2 =  getLogin.getLoginUser($scope.login.username, $scope.login.password);
                    promise2.then(function(response) {
                      // $scope.msg = (sessionStorage.getItem('msg') == null )? ' ': sessionStorage.getItem('msg');
                      // console.log("User checked : ",response.data[0]);
                      // $location.path("/home");
                    }, function(reason) {
                      // console.log('Failed: ' + reason);
                    }, function(update) {
                    //  console.log('Got notification: ' + update);
                    });
                  }
                  $scope.checkLogin = function(){
                    return checkLoginService.checkLoginfunction();
                    //(sessionStorage.getItem('currentUser') == null )? true:false;
                  }
                  $scope.checkLogout = function(){
                    return checkLogoutService.checkLogoutfunction();
                  }
              $scope.forgotPassword = function(){
                $scope.show = true;
              }
              $scope.forgotPasswordData = function(){


                var promise3 =  forgotPasswordService.forgotPasswordFunction($scope.user.recoveryUsername);
                // console.log("function call : ", id);
                promise3.then(
                   function(payload) {
                      // console.log("specific user : ",payload);
                         $scope.userdetails  = payload[0];
                       // console.log("specific : ",typeof( $scope.userdetails ));
                   },
                   function(errorPayload) {
                       $log.error('failure loading data', errorPayload);
                   });
              }
              $scope.close = function(){
                 $scope.userdetails = [];
                 $scope.user = '';
                 $scope.show = false;
                  $scope.registerPopup = false;
              }
}]);
app.filter('capitalize', function() {
return function(input, all) {
  var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
  return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
}
});
app.directive("passwordStrength", function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            scope.$watch(attrs.passwordStrength, function(value) {
            //  console.log('password check',value);
                if(angular.isDefined(value)){
                    if (value.length > 8) {
                        scope.strength = 'strong';
                    } else if (value.length > 3) {
                        scope.strength = 'medium';
                    } else {
                        scope.strength = 'weak';
                    }
                }
            });
        }
    };
});
