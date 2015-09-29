var angularConfig = angular.module('app',['ngRoute']);
 
angularConfig.config(function($routeProvider, $locationProvider)
{
    $routeProvider.when('/', {
      templateUrl : 'views/home.html',
      controller     : 'HomeCtrl',
    }).otherwise ({ redirectTo: '/' });
});

angularConfig.controller('HomeCtrl', function($rootScope, $location)
{
    $rootScope.titulo = 'My Real Hero Danny';
    
    $rootScope.teste = function()
    {
        alert(123)
    }
    
    setTimeout(function(){
       var $grid = $('.grid').masonry({
          itemSelector: '.date-post',
          columnWidth: '.date-post',
          percentPosition: false,
          isFitWidth:true
        });
    }, 3000);
    
}); 

angularConfig.controller('AppCtrl', function($rootScope, $location)
{   
    $rootScope.teste = function()
    {
        alert(123)
    }
}); 