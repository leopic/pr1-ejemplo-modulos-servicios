angular.module('basededatos', [])
    .factory('BDService', function() {
        var listaPrivada = ['una', 'dos', 'tres'];

        return {
            getLista: listaPrivada
        };
    })
;

angular.module('proyectoUno', [
    'basededatos'
])
    .factory('App2Service', function(BDService) {
        return {
            lista: BDService.getLista.sort()
        };
    })
    .controller('ProyectoUnoController',
        ['$scope', 'App2Service', function (App2Service, $scope) {
            var obtenerLista = function() {
                return App2Service.lista;
            };

            $scope.init = function() {
                $scope.saludo = 'Hola Mundo!';
                $scope.lista = obtenerLista();
            };

            $scope.init();
        }])
;
