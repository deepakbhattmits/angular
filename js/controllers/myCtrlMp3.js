/*mp3_page controller*/
var app=angular.module('myCtrlMp3',[]);
app.controller('myCtrlMp3', function($scope,$http) {
    $scope.page_name = 'shop';
         $scope.items = [];
         $scope.items1 = [];
        $scope.smsg = false;
        $scope.emsg = false;
        $scope.cmsg = false;
        $scope.showup = false;
        $http.get("all_ajax.php").then(function(response) {
        $scope.items = response.data.product;

        for(var  i = 0; i < response.data.product.length ; i++){
            // console.log(response.data.product[i]);
             if(response.data.product[i].stock < 0){

            }
        }
        $scope.items1 = response.data.product;
    });
    $scope.getRange = function(minRange,maxRange) {
        if(minRange != '' && maxRange != ''){
        // console.log('this is Min. Range : '+ minRange +' This is Max Range : '+ maxRange);
          var temp = [];
          //temp = $scope.items;
            for(var i=0; i < $scope.items1.length; i++ ){
                if($scope.items1[i].price >= minRange && $scope.items1[i].price <= maxRange){
                    temp.push($scope.items1[i]);
                }
            }
            $scope.items = temp;
            return $scope.items;
        }
        }
        /*var imageSource;
        imageSource = "img/slide1.jpg";
        // list of media elements to be displayed on the list
        $scope.mediaList = [
            {
                thumbnailPath: imageSource,
                imagePath: imageSource,
            }
        ];*/
        $scope.cartbutton = function(id,name,qty,price,stock){
            $scope.cartmsg=true;
             if(qty > stock ){
                $scope.cmsg = true;
                $scope.emsg = true;
                $scope.errormsg = 'Input is Greater Then Stock';
            }else{
            var uprice = qty * price ;
            var stock = stock - qty ;
           if(confirm('product id is : '+id +' and product name is : '+ name +' and product Quantity is : ' + qty + ' Updated-Price is '+ uprice + ' STOCK : '+ stock)){
                 // // console.log(product_data);
            $http({url: 'product_cart.php',method: "POST",
                data : {id:id,name:name,price:price,qty:qty,uprice:uprice,stock:stock},
                headers: {'Content-Type': 'application/json' }
                })
                .then(function(res) {
                     $scope.cmsg = true ;
                     $scope.smsg = true ;
                     var a= res.data.sucess;// success
                     $scope.successmsg = a;
            });
            }else{
                $scope.cartmsg = false;
            }
            }
        }
        //handle SendDown event
            $scope.$on("SendDown", function (evt, data) {
                $http.get("all_ajax.php").then(function (response) {
                    $scope.items = response.data.product;
                    for(var i=0; i < response.data.product.length; i++ ){
                    // console.log(response.data.product[i]);
                    }
                 });
            });
        $scope.closeme = function(qty){
             $scope.cartmsg = false;
             $scope.smsg    = false;
             $scope.emsg    = false;
             $scope.cmsg    = false;
            $scope.$broadcast('SendDown', [1,2,3]);
        }
        $scope.hoverIn = function(){
            this.showup = true;
        };
        $scope.hoverOut = function(){
            this.showup = false;
        };



});
app.controller('AppController',['$scope', function($scope) {
  $scope.items = [{
      name  : 'First Item',
      value : 100
    },
    {
      name  : 'Second Item',
      value : 100
    },
    {
      name  : 'Third Item',
      value : 1000
    },
    {
      name  : 'Fourth Item',
      value : 900
    }];
}]);
app.filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
});
