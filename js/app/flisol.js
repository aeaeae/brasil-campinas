angular.module('FlisolAPP', [], function($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: main
  });

  $routeProvider.when('/home/', {
    templateUrl: 'partials/home.html',
    controller: main
  });

  $routeProvider.when('/sobre/', {
    templateUrl: 'partials/aboutFlisol.html',
    controller: AboutFlisolCrtl
  });

  $routeProvider.when('/sobre/FLISOL', {
    templateUrl: 'partials/aboutFlisol.html',
    controller: AboutFlisolCrtl
  });

  $routeProvider.when('/sobre/campinas', {
    templateUrl: 'partials/where.html',
    controller: WhereCrtl
  });

  $routeProvider.when('/inscreva-se/', {
    templateUrl: 'partials/users.html',
    controller: AboutCrtl
  });

  $routeProvider.when('/comunidade/', {
    templateUrl: 'partials/users.html',
    controller: AboutCrtl
  });

  $routeProvider.when('/palestras/', {
    templateUrl: 'partials/users.html',
    controller: PresentationsCrtl
  });

  $routeProvider.when('/palestrantes/:id', {
    templateUrl: 'partials/users.html',
    controller: SpeechersCrtl
  });

  $routeProvider.when('/contato/', {
    templateUrl: 'partials/contact.html',
    controller: ContactCrtl
  });

  $locationProvider.hashPrefix('!');

});

// Controllers

function main($scope, $route, $routeParams, $location, $rootScope) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
  $rootScope.pageTitle = "Home";

  jQuery('#slider').flexslider();
}

function AboutCrtl($scope, $routeParams, $rootScope) {

}

function ContactCrtl($scope, $routeParams, $rootScope) {

}

function PresentationsCrtl($scope, $routeParams, $rootScope) {

}

function SpeechersCrtl($scope, $routeParams, $rootScope) {

}

function WhereCrtl($scope, $routeParams, $rootScope) {
  $scope.areaTitle = "Flisol Campinas 2013";
  $scope.breadCrumb = ["Sobre o Flisol", "Campinas 2013"];
  $rootScope.pageTitle = "Onde e Como?";

}

function AboutFlisolCrtl($scope, $routeParams, $rootScope) {
  $scope.areaTitle = "Flisol 2013";
  $scope.breadCrumb = ["Sobre o Flisol", "Na América Latina"];
  $rootScope.pageTitle = "LATAM";

}