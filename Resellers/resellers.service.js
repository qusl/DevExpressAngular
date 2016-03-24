
(function () {

    angular.module('myApp')
    .service('ResellersManager', ['$http', function ($http) {
        var apiUrl = "http://localhost:33746/";

        this.getResellers = function () {
            return $http.get(apiUrl + "api/resellers");
        };

        this.createReseller = function (data) {

            alert(data.ResellerID);


            return $http.post(apiUrl + "api/resellers", data);
        };

        this.updateReseller = function (id, data) {
            return $http.put(apiUrl + "api/resellers/" + id, data);
        };

        this.deleteReseller = function (id) {
            return $http.delete(apiUrl + "api/resellers/" + id);
        };
    }])
})();
