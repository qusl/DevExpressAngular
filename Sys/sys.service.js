
(function () {

    angular.module('myApp')
    .service('SysManager', ['$http', function ($http) {
        //var apiUrl = "http://localhost:33746/";
        var apiUrl = "http://168.144.129.250/HongFengYeApi/";

        this.getResellers = function () {
            return $http.get(apiUrl + "api/sys");
        };

        //this.createReseller = function (data) {

        //    alert(data.ResellerID);


        //    return $http.post(apiUrl + "api/resellers", data);
        //};

        //this.updateReseller = function (id, data) {
        //    return $http.put(apiUrl + "api/resellers/" + id, data);
        //};

        //this.deleteReseller = function (id) {
        //    return $http.delete(apiUrl + "api/resellers/" + id);
        //};
    }])
})();
