angular.module('portfolio', [])

	.directive('standard', function(){
  
  		return{
    		restrict: "C",//EACM C for class becuase we want it to be a certain class with standard styles
   		 	template: "<div>a div with a standard class</div>",
    		replace: true
  	};
  
});