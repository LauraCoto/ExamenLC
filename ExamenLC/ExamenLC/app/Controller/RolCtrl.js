angular.module('RolController', []).controller('RolCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.ListaRoles = {};
    $scope.Registro = {};
    $scope.Accion = 'nuevo';
    $scope.MostrarControles = false;


    $scope.Limpiar = function () {
        $scope.Registro = {};
        $scope.Accion = 'nuevo';
        $scope.MostrarControles = false;
    };

    $scope.NuevoRegistro = function () {
        $scope.Registro = {};
        $scope.Accion = 'nuevo';
        $scope.MostrarControles = true;
    };

    $scope.EditarRegistro = function (registroEditar) {
        $scope.Registro = registroEditar;
        $scope.Accion = 'editar';
        $scope.MostrarControles = true;
    }

    $http.get('/Rol/GetAll').success(function (data) {
        $scope.ListaRoles = data;
    });


    $scope.Guardar = function () {
        if ($scope.Accion == 'nuevo') {
            $http.post('/Rol/Create', $scope.Registro).success(function (data) {
                $scope.ListaRoles.push(data);
            });
        }

        if ($scope.Accion == 'editar') {
            $http.post('/Rol/Update', $scope.Registro).success(function (data) {

            });
        }

        $scope.Limpiar();
    }


    $scope.EliminarRegistro = function (registroEliminar) {
        var response = $http({
            method: "post",
            url: "/Rol/Delete",
            params: { id: JSON.stringify(registroEliminar.id) }
        });

        var indice = $scope.ListaRoles.indexOf(registroEliminar);

        $scope.ListaRoles.splice(indice, 1);

    }


}

]);