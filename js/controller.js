var app=angular.module('myModule',[]);
app.controller('myCtrlHome', function($scope){
    $scope.page_name = 'home';
    $scope.userName = 'om prakash bhatt';
    $scope.userNamehome = 'deepak bhatt';
    $scope.userContenthead = 'user interface';
    $scope.userContenthead2 = 'magic';
    $scope.userContenthead3 = 'roadies';
    $scope.userContenthead4 = 'rock';
    $scope.userContent = 'The user interface (UI), in the industrial design field of human–computer interaction, is the space where interactions between humans and machines occur. The goal of this interaction is to allow effective operation and control of the machine from the human end, whilst the machine simultaneously feeds back information that aids the operators decision-making process. Examples of this broad concept of user interfaces include the interactive aspects of computer operating systems, hand tools, heavy machinery operator controls, and process controls. The design considerations applicable when creating user interfaces are related to or involve such disciplines as ergonomics and psychology.';
    $scope.userContent2 = 'Magic words or words of power are words which have a specific, and sometimes unintended, effect. They are often nonsense phrases used in fantasy fiction or by stage prestidigitators. Frequently such words are presented as being part of a divine, adamic, or other secret or empowered language. Certain comic book heroes use magic words to activate their super powers. Magic words are also used as Easter eggs or cheats in computer games, other software, and operating systems. (For example, the words xyzzy, plugh, and plover were magic words in the classic computer adventure game Colossal Cave Adventure).';
	$scope.userContent3 = 'MTV Roadies is a youth-based popular reality television show on MTV India. The show first started in 2003. In the show, a group of contestants travel to different destinations and participate in various tasks that seemingly challenge their physical and mental strength. During the course of the journey, there are vote outs, vote ins, eliminations and game changing twists. Eventually the contestant who manages to survive vote outs and succeed in the final task is chosen as the winner. The show has enjoyed much success among the youth. When asked about the show, the executive producer said, "Roadies has travel, adventure, drama, touch of voyeurism..."';
    $scope.myInterval = 2000;
    $scope.slides = [
						{
						  image: 'img/slide1.png',
              title: '1'
						},{
						  image: 'img/slide2.png',
              title: '2'
						},{
						  image: 'img/slide3.png',
              title: '3'
						},{
						  image: 'img/slide4.png',
              title: '4'
						},{
						  image: 'img/slide5.png',
              title: '5'
						},{
						  image: 'img/slide6.png',
              title: '6'
						},{
						  image: 'img/slide7.png',
              title: '7'
						},{
						  image: 'img/slide8.png',
              title: '8'
						},{
						  image: 'img/slide9.png',
              title: '9'
						},{
						  image: 'img/slide10.png',
              title: '10'
						}
					];




}).filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
}).controller('myCtrlProfile', function($scope, $interval, $animate, $timeout) {
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
}).controller('myCtrlGallary',['$http','$scope', '$filter', function ($http, $scope, $filter) {
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
    urlstudent = 'api/stud_all.php';
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
}).controller('myCtrlClips', function($scope) {
  $scope.page_name = 'Coupons';
}).controller('myCtrlMp3', function($scope,$http) {
    $scope.page_name = 'shop';
         $scope.items = [];
         $scope.items1 = [];
        $scope.smsg = false;
        $scope.emsg = false;
        $scope.cmsg = false;
        $scope.showup = false;
        $http.get("api/all_ajax.php").then(function(response) {
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
            $http({url: 'api/product_cart.php',method: "POST",
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
                $http.get("api/all_ajax.php").then(function (response) {
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



}).controller('AppController',['$scope', function($scope) {
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
}]).controller('myCtrlShop', function($scope,$http) {
    $scope.page_name    = 'manage user';
    $scope.submit_data  = 'submit';
    $scope.select_name  = '--select Person--';
    $scope.add_new      = 'add new record';
    $scope.first_name   = 'firstname';
    $scope.last_name    = 'lastname';
    $scope.home_town    = 'hometown';
    $scope.job          = 'job';
    $scope.age          = 'age';
    $scope.arr_name = [];
    $scope.my_popup_show = function(){
        $scope.my_popup = true;
        $scope.my_cover = true;
    }
    $scope.my_popup_hide = function (){
        $scope.my_popup = false;
        $scope.my_cover = false;
        $scope.successmsg = '';
    }
    window.onkeydown = function(event) {
        if ( event.keyCode === 27 ) {
            // console.log( 'escape pressed' );
            $scope.my_popup = false;
            $scope.my_cover = false;
            $scope.user = null;
        }
    };
    $http.get("api/all_ajax.php").then(function(response) {
        // console.log(response.data.FirstName);
        $scope.mydata = response.data.student;
    });
    $scope.showMe = function(data_f) {
        //// console.log('This is Selected '+ data_f);
        $scope.table_id         = 'id';
        $scope.table_firstname  = 'firstname';
        $scope.table_lastname   = 'lastname';
        $scope.table_hometown   = 'hometown';
        $scope.table_job        = 'job';
        $scope.table_age        = 'age';
        $scope.table_edit       = 'edit';
        $scope.table_delete     = 'delete';
        $http({url: 'api/ajax_search.php',method: "POST",
            data: {FirstName:data_f}
        })
        .then(function(response) {
           // console.log(response.data); // success
           $scope.items= response.data;
        },
        function(response) { // optional
            // console.log('error');// failed
        });
    }
   $scope.submitForm = function() {
        //// console.log($scope.user);
        $http.get("api/all_ajax.php").then(function(response) {
            //$scope.arr_name = response.data;
            for(i=0;i<=response.data.length;i++){
                // console.log(response.data[i]);
                if($scope.user.fn == response.data[i] ){
                    alert('Record Already Exists !');
                    $scope.user = '';
                    $scope.successmsg = '';
                    return false;
                    }
                }
             $http({url: 'api/add_ajax.php',method: "POST",
            data : $scope.user})
        .then(function(res) {
        // console.log(res.data.sucess); // success
               if (res) {
                  $scope.successmsg = res.data.success;
                  $scope.user = '';
                $http.get("api/all_ajax.php").then(function (response) {
                    // console.log(response.data.student);
                    $scope.mydata = response.data.student;
                });
           }
        });
        });


    }
 }).controller('myCtrlCart',['$http','$scope', '$filter', function ($http, $scope, $filter){
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
     $http.get("api/new_php.php").then(function (response) {
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
}]).controller('myCtrlAdmin',['$http','$scope', '$filter', function ($http, $scope, $filter){
    $scope.page_name = 'Welcome Admin page';
    $scope.text = 'enter email';
    $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
}]).directive("passwordStrength", function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            scope.$watch(attrs.passwordStrength, function(value) {
                //// console.log(value);
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
}).controller('myCtrlContact', function($scope,$http, $animate) {
        $scope.page_name = 'contact us';
        $scope.name = 'name';
        $scope.email = 'email';
        $scope.enq = 'enquiry';
        url = "api/studentInfo.php";
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


// function minmax() {
// var arr = [],e = 0;
// var slicedArgs = Array.prototype.slice.call(arguments, -1);
// if(slicedArgs == 'max'){
// for (var i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }
// arr.pop();
// e = Math.max.apply(null,arr);
// } else if(slicedArgs == 'min') {
// for (var i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }
// arr.pop();
// e = Math.min.apply(null,arr);
// }
// return e;
// }
//
// console.log(minmax(199, 55, 743, 221, 888, 324, 434,'min')); // get the value of min and max value
/*-------------------------*/
// pass value in array form 
// function minmax() {
// var arr = [],e = 0;
// // console.log('final',arguments);
// var slicedArgs = Array.prototype.slice.call(arguments, -1);
// // console.log(slicedArgs);
// arr = arguments[0]
// // console.log('new arr',arr);
// if(slicedArgs == 'max'){
// e = Math.max.apply(null,arr);
// } else if(slicedArgs == 'min') {
// // console.log('test :',arr);
// e = Math.min.apply(null,arr);
// }
// return e;
// }
//
// console.log(minmax([199, 55, 743, 221, 888, 324, 434],'max'));
