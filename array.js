angular.module('portfolio')
	
	.controller("theArrayController", ['$scope', function($scope){
		$scope.projects=[

			{
				projectPic: "img/a.jpg",
				description: "project description goes here"
			},

			{
				projectPic: "img/a.jpg",
				description: "project description goes here"
			},
			
			{
				projectPic : "img/a.jpg",
				description : "project description goes here"
			},
			
			{
				projectPic : "img/a.jpg",
				description : "project description goes here"
			},
			
			{
				projectPic : "img/a.jpg",
				description : "project description goes here"
			},
			
			{
				projectPic : "img/a.jpg",
				description : "project description goes here"
			},
				
			{
				projectPic : "img/a.jpg",
				description :"project description goes here"
			},

			{
				projectPic : "img/a.jpg",
				description : 'project description goes here'
			},

			{
				projectPic : "img/a.jpg",
				description : 'project description goes here'
			}
		];
	}]);