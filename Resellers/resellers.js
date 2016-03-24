
(function () {
    angular.module('myApp', ['dx'])
    .controller('mainCtrl', ['$scope', 'ResellersManager', function ($scope, ResellersManager) {
        getResellers();

        function getResellers() {
            ResellersManager.getResellers().then(function (response) {
                $scope.resellers = response.data;

                $scope.gridSettings = {


                    dataSource: $scope.resellers,
                    paging: {
                        pageSize: 16
                    },
                    filterRow: {
                        visible: true
                    },
                    groupPanel: {
                        visible: true,
                    },
                    editing: {
                        editMode: 'row',
                        editEnabled: false,
                        removeEnabled: false,
                        insertEnabled: false

                    }
                }

            })
        }






        //vm.add = function () {
        //    ResellersManager.createReseller({
        //        ResellerID: vm.newReseller.ResellerID,
        //        ResellerName: vm.newReseller.ResellerName
        //    }).then(function () {
        //        vm.newReseller = null;
        //        getResellers();
        //    });
        //};

        //vm.editMode = function (reseller) {
        //    vm.editReseller = reseller;
        //};

        //vm.edit = function () {
        //    art.updateReseller(
        //        vm.editReseller.ResellerID,
        //        {
        //            ResellerID: vm.editReseller.ResellerID,
        //            name: vm.editReseller.ResellerName,
        //        }).then(function () {
        //            vm.editReseller = null;
        //            getResellers();
        //        });
        //};

        //vm.delete = function (id) {
        //    art.deleteReseller(id).then(getResellers);
        //};
    }]);
})();
