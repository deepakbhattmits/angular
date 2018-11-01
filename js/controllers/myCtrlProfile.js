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
				{id: '1',name:'deepak',state:'uk'},
				{id: '2',name:'akhilesh',state:'up'},
				{id: '3',name:'devesh',state:'up'},
				{id: '4',name:'nishant',state:'up'},
				{id: '5',name:'bharath',state:'ka'},
				{id: '6',name:'naresh',state:'ka'},
				{id: '7',name:'priyanka',state:'ka'},
				{id: '8',name:'dinesh',state:'ap'},
				{id: '8',name:'pooja',state:'mp'},
				{id: '9',name:'mahadev',state:'ka'}
			]
		});
	$scope.removeLastName = function() {
		console.log($scope.names.length);
		$scope.names.splice($scope.names.length-1,1);
	}
	$timeout(function () {
		$scope.colors = [
      {id: '1',color:'blue'},
      {id: '2',color:'cyan'},
      {id: '3',color:'red'},
      {id: '4',color:'green'},
      {id: '5',color:'pink'},
      {id: '6',color:'orange'},
      {id: '7',color:'purple'},
      {id: '8',color:'darkgreen'},
      ]
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
