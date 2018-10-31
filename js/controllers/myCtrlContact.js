var app = angular.module('myCtrlContact',[]);
app.controller('myCtrlContact', function($scope,$http) {
        $scope.page_name = 'contact us';
        $scope.name = 'name';
        $scope.email = 'email';
        $scope.enq = 'enquiry';
        url = "studentInfo.php";
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
});
app.filter('capitalize', function() {
return function(input, all) {
  var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
  return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
}
});
