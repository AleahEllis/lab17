angular.module('portfolio', [])

	.directive('standard', function(){
  
  		return{
    		restrict: "AE",//EACM C for class becuase we want it to be a certain class with standard styles
   		 	templateUrl: "template.html",
    		replace: true,
    		
    		}
  	});
  

