var app=angular.module('myCtrlAdmin',[]);
app.controller('myCtrlAdmin',['$http','$scope', '$filter', 'getAll', 'getSpecific', 'getLogin','checkLogoutService', 'checkLoginService', function ($http, $scope, $filter, getAll, getSpecific, getLogin, checkLogoutService, checkLoginService){
    $scope.page_name = 'Welcome Admin page';
    $scope.text = 'enter email';
    $scope.datas = [];
    $scope.dataf = [];
    $scope.msg = '';
    $scope.show = false;
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
              $scope.login = function($location) {
                var promise2 =  getLogin.getLoginUser($scope.user.username, $scope.user.password);
                    promise2.then(function(response) {
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
              $scope.close = function(){
                  $scope.show = false;
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
