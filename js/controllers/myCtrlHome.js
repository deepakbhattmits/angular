  'use strict';
    var app = angular.module('myCtrlHome',[]);
    app.controller('myCtrlHome', ['$scope', function($scope) {

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

}]);
app.filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
});
