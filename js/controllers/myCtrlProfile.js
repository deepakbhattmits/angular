/*profile_page controller*/
var app=angular.module('myCtrlProfile',[]);
app.controller('myCtrlProfile', function($scope, $interval, $animate, $timeout) {


    $scope.page_name = 'profile';
	$scope.content = 'Coming from the left!';
	$scope.option = 0;
    $scope.fundata = $interval(function(){
        var time = new Date();
        var h = time.getHours();
            if(h >= 12 ){
                a = 'PM';
            }
            else{
                a = 'AM';
            }
        var m = time.getMinutes();
        var s = time.getSeconds();
        var c_time = h +":"+ m +":"+ s +" "+ a;
        $scope.timee =  c_time;
        },1000);
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var newdate = day + "/" + month + "/" + year;
    $scope.daate = newdate;
    $timeout(function () {
			$scope.names = [
				{name:'deepak',state:'uk'},
				{name:'akhilesh',state:'up'},
				{name:'devesh',state:'up'},
				{name:'nishant',state:'up'},
				{name:'bharath',state:'ka'},
				{name:'naresh',state:'ka'},
				{name:'priyanka',state:'ka'},
				{name:'dinesh',state:'ap'},
				{name:'pooja',state:'mp'},
				{name:'mahadev',state:'ka'}
			]
		});
	$scope.removeLastName = function() {
		console.log($scope.names.length);
		$scope.names.splice($scope.names.length-1,1);
	}
	$timeout(function () {
		$scope.colors = ['blue', 'red', 'green', 'pink', 'orange', 'purple', 'darkgreen']
	});
	$scope.removeLast = function() {
		console.log($scope.colors.length);
		$scope.colors.splice($scope.colors.length-1,1);
	}
	$scope.showme = false;
});
app.filter('capitalize', function() {
return function(input, all) {
	var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
	return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
}
});
