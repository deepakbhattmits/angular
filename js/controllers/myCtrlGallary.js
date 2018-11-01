var app=angular.module('myCtrlGallary',[]);
app.controller('myCtrlGallary',['$http','$scope', '$filter', function ($http, $scope, $filter) {
  $scope.page_name = 'user details';
   $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.q = '';
    $scope.id ='';
    $scope.first_name   = 'firstname';
    $scope.last_name    = 'lastname';
    $scope.home_town    = 'hometown';
    $scope.job          = 'job';
    $scope.age          = 'age';
    $scope.submit_data  = 'submit';
    $scope.table_id         = 'id';
    $scope.table_firstname  = 'firstname';
    $scope.table_lastname   = 'lastname';
    $scope.table_hometown   = 'hometown';
    $scope.table_job        = 'job';
    $scope.table_age        = 'age';
    $scope.table_edit       =  'edit';
    $scope.table_delete     =  'delete';
    url = "api/database/studentInfo.php";
    urlstudent = "api/stud_all.php";
    $scope.getData = function () {
      return $filter('filter')($scope.data, $scope.q)
    }

    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);
    }

     $http.get(urlstudent).then(function(response) {
        for (var i = 0; i < response.data.length; i ++) {
            // console.log(response.data[i]);
            $scope.data.push({  'id':response.data[i].id,
                                'fname':response.data[i].firstName,
                                'lname':response.data[i].LastName,
                                'ht':response.data[i].HomeTown,
                                'age':response.data[i].Age,
                                'job':response.data[i].Job,
                            });
        }
    });
    $http.get(urlstudent).then(function(response) {
         $scope.items = response.data;
    });
    $scope.$on('updateNewRow', function(event, data) {
        $http.get(urlstudent).then(function (response) {
            $scope.items = response.data;
        });
    });
    $scope.my_delete_btn = function (userid){
        if(confirm("Do u want to Delete this Record ? ")) {
            var httpParams = $http({
                method:"POST",
                url:url,
                data:{id:userid,queryType:'delete'},
                headers: {'Content-Type': 'application/json' }
            });
            httpParams.then(function successCallback(response){
                $scope.$broadcast('updateNewRow', [1,2,3]);
                $scope.message = response.data;
            });
        }
    }
      $scope.my_edit_btn = function(data_id){
         $scope.formShow = true;
         $scope.my_popup = true;
         for(var i=0;i<$scope.items.length;i++){
             if(data_id == $scope.items[i].id){
                 $scope.userId = $scope.items[i].id;
                 $scope.fName = $scope.items[i].FirstName;
                 $scope.lName = $scope.items[i].LastName;
                 $scope.homeTown = $scope.items[i].HomeTown;
                 $scope.userJob = $scope.items[i].Job;
                 $scope.userAge = $scope.items[i].Age;

                 $scope.updsubmitForm = function() {
                   var httpParams = $http({
                         method: "POST",
                         url: url,
                         data: {id:$scope.userId,FirstName:$scope.fName,LastName:$scope.lName,HomeTown:$scope.homeTown,Job:$scope.userJob, Age:$scope.userAge,queryType:'update'},
                         headers: {'Content-Type': 'application/json'}
                     });
                     (httpParams).then(function successCallback(response) {
                         $scope.my_popup = false;
                         $scope.my_cover = false;
                         $scope.$broadcast('updateNewRow', [1, 2,3]);
                         $scope.message = response.data;
                     }, function errorCallback(response) {
                     });
                 }
             }
        }
    }
    $scope.my_popup_show = function(data_id){
        $scope.my_popup = true;
        $scope.my_cover = true;
    }
    $scope.my_popup_hide = function (){
        $scope.my_popup = false;
        $scope.my_cover = false;
        $scope.successmsg = '';
    }

}]);
app.filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start;
        return input.slice(start);
    }
app.directive('ngConfirmClick',function(){
    return {
        link : function(scope,element,attr){
            var msg = attr.ngConfirmClick || 'Are you sure want delete';
            var clickAction = attr.confirmedClick;
            element.bind('click',function(event){
                if(window.confirm(msg)){
                    scope.$eval(clickAction);
                }
            })
        }
    }
});
});
app.filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
});
