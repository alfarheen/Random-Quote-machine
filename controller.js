var angularModule = angular.module("QuoteApp", []);
angularModule.controller("QuoteCtrl", function($http, $scope) {
  $scope.quote = "Keep your friends close, but your enemies closer.";
  $scope.author = "METAO";
  
  var req = {
    method: 'POST',
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    headers: {
      'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V'
    }
  }

  $scope.getNewQuote = function() {
    $http(req).then(function(result) {
      $scope.quote = result.data.quote;
      $scope.author = result.data.author;
    });
  };
});
