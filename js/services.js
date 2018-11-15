'use strict';

/* Services */


// Demonstrate how to register services



  var app = angular.module("myMod", []);
  /*  Create Products service   */



  app.service('getAll', function($http) {
      return {
        getAllStudent: function() {
           return $http.get('api/task.php');
       }
      }
    });
    app.service('getSpecific', function($http) {
        return {
          getSpecificStudent: function(id) {
            // console.log("id",id);
             return $http.post('api/taskspecific.php?id='+id);
          }
        }
      });
  app.service('getLogin', function($http, $q, $timeout,$location) {
    var getLoginUser = function(uname,pwd ) {
    var deferred = $q.defer();

        $timeout(function() {
        var config = {
                             params: {uname: uname, pwd: pwd},
                             headers : {'Accept' : 'application/json'}
                            };

          $http.post('api/login.php',config)
          .then(function(response){
             // console.log("data",response.data[0]['FirstName']);
             if(response.data[0]['FirstName']){
               $location.path('/home');
               sessionStorage.setItem("currentUser",response.data[0]['FirstName']);
               // localStorage.setItem('currentUser', response.data[0]['FirstName']);
             } else {
                $location.path('/admin');
             }
          })
          .catch(function(response){
            // console.log(response.status);
            $location.path('/admin');
          });

        }, 2000);

        return deferred.promise;
      };

      return {
        getLoginUser: getLoginUser
      };

  });
  app.service('checkLogoutService', function () {
    var currentUser;
    this.checkLogoutfunction = function() {
      // if we want can get data from sessionStorage
       currentUser = (sessionStorage.getItem('currentUser') != null )? true:false;
       return currentUser;
    };
    return this;
  });
  app.service('checkLoginService', function () {
    var currentUser;
    this.checkLoginfunction = function() {
      // if we want can get data from sessionStorage
       currentUser = (sessionStorage.getItem('currentUser') == null )? true:false;
       return currentUser;
    };
    return this;
  });
  app.service('getLogout', function($q, $location) {
  var getLogoutUser = function(uname) {
  var deferred = $q.defer();
  // this removes all data saved in session
  sessionStorage.clear();
  // this removes only data which we passed
      // sessionStorage.removeItem('currentUser')
       $location.path('/admin');
    return deferred.promise;
  };

  return {
    getLogoutUser: getLogoutUser
  };

  });
