app.controller('maintenanceController', function($scope, $window, maintenanceService){

	$scope.veiculo = maintenanceService.getVeiculos();
	$scope.addVeiculo = function() {
		var marca = $scope.marca;
		var modelo = $scope.modelo;
		var kilometro = $scope.kilometro;

		var dados = 'marca:' + $scope.marca + 'modelo:' + $scope.modelo + 'kilometro:' + $scope.kilometro;


			maintenanceService.addVeiculo(dados);
			
	
	};

});