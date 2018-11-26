var app=angular.module('myCtrlCart',[]);
app.controller('myCtrlCart',['$http','$scope', '$filter', function ($http, $scope, $filter){
   $scope.page_name = 'cart page';
   $scope.currentPage = 0;
   $scope.pageSize = 10;
   $scope.data = [];
   $scope.query = '';
   $scope.cart_id = 'id';
   $scope.cart_ProductName = 'product name';
   $scope.cart_ProductPrice = 'price';
   $scope.cart_ProductQuantity = 'quantity';
   $scope.cart_UpdatedPrice = 'updated price';
   $scope.cart_buy = 'buy now';
   $scope.cart_remove = 'remove';
   $scope.msg = '';
    $http.get("api/new_php.php").then(function (response) {
    // console.log("test:",response.data);
        if(response.data == '') {
          // console.log("DATA : ",response.data[0]['data']);
          $scope.msg = 'No Cart Data';
        } else {
          $scope.mycart = response.data;
          for (var i = 0; i < response.data.length; i ++) {
              // console.log(response.data[i]);
              $scope.data.push({  'id':response.data[i].id,
                  'name':response.data[i].name,
                  'price':response.data[i].price,
                  'qty':response.data[i].qty,
                  'upprice':response.data[i].upprice
          });
      }
        }

   });
    $scope.getData = function () {
     return $filter('filter')($scope.data, $scope.q)
   }

   $scope.numberOfPages=function(){
       return Math.ceil($scope.getData().length/$scope.pageSize);
   }
   //handle cart_remove event
           $scope.$on("cart_remove", function (evt, data) {
               $http.get("api/new_php.php").then(function (response) {
                   $scope.mycart = response.data;
                   for(var i=0; i < response.data.length; i++ ){
                   // console.log(response.data.product[i]);
                   }
                });
           });
   $scope.cart_remove_btn = function(id){
       // console.log('remove');
       if(confirm('Are you Sure to Remove This product From Cart (Product id is : '+id+' )')){
           $http({url: 'api/buy_remove.php',method: "POST",
               data : {id:id,type:'remove'},
               headers: {'Content-Type': 'application/json' }
               })
               .then(function(res) {
                   // console.log('removed')// do ur code
                   $scope.$broadcast('cart_remove', [1,2,3]);
           });
           }else{
                   $scope.mycart_empty = 'Cart Is Empty'; // do ur code
           }
   }
   $scope.cart_prodbuy_btn  = function(id,name,price,qty,upprice,stock){
       // console.log('buy');
       if(confirm('product id is : '+id +' and product name is : '+ name +' and product Quantity is : ' + qty + ' Updated-Price is '+ upprice)){
           $http({url: 'api/buy_remove.php',method: "POST",
               data : {id:id,name:name,price:price,qty:qty,uprice:upprice,type:'buy'},
               headers: {'Content-Type': 'application/json' }
               })
               .then(function(res) {
                   // console.log(res.data.status);// do ur code
                   $scope.$broadcast('cart_remove', [1,2,3]);
           });
           }else{
                 $scope.mycart_empty = 'Cart Is Empty'; // do ur code
           }
   }
}]);
app.filter('capitalize', function() {
return function(input, all) {
  var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
  return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
}
});
