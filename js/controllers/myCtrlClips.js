var app=angular.module('myCtrlClips',[]);
app.controller('myCtrlClips', function($scope) {
  $scope.page_name = 'hello clips';
});
app.filter('capitalize', function() {
return function(input, all) {
  var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
  return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
}
});
