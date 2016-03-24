
(function () {

    angular.module('myApp')
    .service('ArtistsManager', ['$http', function ($http) {
        var apiUrl = "http://localhost:33746/";

        this.getArtists = function () {
            return $http.get(apiUrl + "api/artists");
        };

        this.createArtist = function (data) {
            return $http.post(apiUrl + "api/artists", data);
        };

        this.updateArtist = function (id, data) {
            return $http.put(apiUrl + "api/artists/" + id, data);
        };

        this.deleteArtist = function (id) {
            return $http.delete(apiUrl + "api/artists/" + id);
        };
    }])
})();
