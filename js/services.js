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
      app.service('register', function($q, $http, $location, $timeout) {
          return {
            registerStudent: function(data) {
              var config = {
                             params: {fname: data.firstname, lname: data.lastname, uname: data.registerUsername, pwd: data.rpassword},
                             headers : {'Accept' : 'application/json'}
                           };

              return $http.post('./api/register.php',config);
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
   // sessionStorage.removeItem('currentUser');
       $location.path('/admin');
    return deferred.promise;
  };

  return {
    getLogoutUser: getLogoutUser
  };

  });
  app.service('forgotPasswordService', function($q, $http, $location) {
    var user = [];

    return {
      forgotPasswordFunction: function(username) {
        // console.log("id",id);

         var deferred = $q.defer();
        var resp = $http.post('./api/forgotPassword.php?username='+username).
          then(function(result) {
            // save fetched posts to the local variable
            user = result.data;
             // console.log("resp : ",user);
            // resolve the deferred
            deferred.resolve(user);
          }, function(error) {
            user = error;
            deferred.reject(error);
          });
          // set the posts object to be a promise until result comeback
           user = deferred.promise;


         return $q.when(user);
      }
    }
  });
