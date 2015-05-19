angular.module('UsuarioController', []).controller('UsuarioCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.ListaUsuarios = {};
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

    $http.get('/Usuario/GetAll').success(function (data) {
        $scope.ListaUsuarios = data;
    });

    $http.get('/Usuario/GetAllRol').success(function (data) {
        $scope.ListaRoles = data;
    });

    $scope.Guardar = function () {
        if ($scope.Accion == 'nuevo') {
            $http.post('/Usuario/Create', $scope.Registro).success(function (data) {
                $scope.ListaUsuarios.push(data);
            });
        }

        if ($scope.Accion == 'editar') {
            $http.post('/Usuario/Update', $scope.Registro).success(function (data) {

            });
        }

        $scope.Limpiar();
    }


    $scope.EliminarRegistro = function (registroEliminar) {
        var response = $http({
            method: "post",
            url: "/Usuario/Delete",
            params: { id: JSON.stringify(registroEliminar.idusuario) }
        });

        var indice = $scope.ListaUsuarios.indexOf(registroEliminar);

        $scope.ListaUsuarios.splice(indice, 1);

    }


}

]);