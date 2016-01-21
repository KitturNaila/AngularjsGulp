angular.module("myapp",["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home.html",
      controller : "homeCtrl"
    })
    .state('about', {
      url: "/about",
      templateUrl: "about.html",
      controller: "aboutCtrl"
    })
    .state('location', {
      url: "/location",
      templateUrl: "location.html",
      controller: "locationCtrl"
    })
 .state('contact', {
      url: "/contact",
      templateUrl: "contact.html",
      controller: "contactCtrl"
    });
})
.controller("homeCtrl", function($scope){
	$scope.name="";

})

.controller("aboutCtrl", function($scope){
	$scope.name="About Us";

})

.controller("locationCtrl", function($scope){
	$scope.name="Welcome to Our location";

})

.controller("contactCtrl", function($scope){
	$scope.name="Welcome to Contact page";

});