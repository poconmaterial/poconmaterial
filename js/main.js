angular.module('BlankApp', ['ngMaterial'])
    .controller('namesCtrl', function ($scope, $mdMedia) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
    $scope.quotes = [{ "description": "sample text for displaying avove the image", "imgfig": "a.jpg", "name": "David", "post": "CEO of Gadha.com" }, { "description": "sample text for displaying avove the image", "imgfig": "b.jpg", "name": "gale", "post": "CEO of Gadha.com" }, { "description": "sample text for displaying avove the image", "imgfig": "c.jpg", "name": "Marry", "post": "CEO of Gadha.com" }];
});






