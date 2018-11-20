var app = angular.module('myCtrlContact',[]);
app.controller('myCtrlContact', ['$scope', '$http', '$animate', 'enquiryService','checkLogoutService', 'checkLoginService', function($scope, $http, $animate, enquiryService, checkLogoutService, checkLoginService) {
        $scope.items = [];

        $scope.page_name = 'contact us';
        $scope.name = 'name';
        $scope.email = 'email';
        $scope.enq = 'enquiry';
        $scope.msg = '';
        url = "api/studentInfo.php";

        var promise =  enquiryService.enquiryData();
        promise.then(function(response) {

        // console.log("result enquiry : ",response.data);
        if(response.data != '' ) {
            $scope.items = response.data;
            $scope.msg = '';
        } else {
            $scope.msg = "no records.";
        }
          //$scope.msg = (response.data['success']) ? response.data['success']: response.data['error'];

        }, function(reason) {
           console.log('Failed: ' + reason);
        }, function(update) {
          console.log('Got notification: ' + update);
        });

        $scope.$on('submitFormcntc', function(event, data) {
          var promise =  enquiryService.enquiryData();
          promise.then(function(response) {
          //  console.log("result enquiry : ",response.data);
            $scope.items = response.data;
            //$scope.msg = (response.data['success']) ? response.data['success']: response.data['error'];

          }, function(reason) {
             console.log('Failed: ' + reason);
          }, function(update) {
            console.log('Got notification: ' + update);
          });
        });
        // $http.get(urlEnquiry).then(function(response) {
        //      $scope.items = response.data;
        // });
        $scope.checkLogin = function(){
          return checkLoginService.checkLoginfunction();
          //(sessionStorage.getItem('currentUser') == null )? true:false;
        }
        $scope.checkLogout = function(){
          return checkLogoutService.checkLogoutfunction();
        }
        $scope.submitFormcntc = function() {
        //console.log($scope.user.username ,"--",$scope.user.useremail ,"--", $scope.user.userenq );
        if($scope.user.username != null && $scope.user.useremail != null && $scope.user.userenq != null) {
          // console.log("test : ",$scope.user.username ,"--",$scope.user.useremail ,"--", $scope.user.userenq );
                $http({url:url ,method: "POST",
                data: {'username':$scope.user.username,'useremail':$scope.user.useremail,'userenq':$scope.user.userenq,'queryType':'sendenq'},
                headers: {'Content-Type': 'application/json' }
                })
                .then(function(res) {
                // console.log(res);// do ur code
                $scope.successmsg = res.data.sucess;
                $scope.user = '';
                $scope.$broadcast('submitFormcntc', [1, 2,3]);
                }).catch(function onError(response) {
                $scope.errormsg = response.data.error; // Handle error
                $scope.user = '';
                });
             }
         }
        /* var latlang = {lat:12.9184748, lng: 77.6321749};
        var myOptions = {
             zoom: 5,
             center: new google.maps.LatLng(latlang),
             mapTypeId: google.maps.MapTypeId.ROADMAP
        };
          var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
          var marker = new google.maps.Marker({
              position: latlang,
              map: map,
              title: 'Deepak Bhatt (DB) Akhilesh Singh (CHIKKAL) Devesh Kumar (BAWA)'
        }); */
		$scope.success = false;
}]);
app.filter('capitalize', function() {
return function(input, all) {
  var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
  return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
}
});
