app.controller('maintenanceControl', function($scope, $window, maintenanceService){

	$scope.veiculos = maintenanceService.getVeiculos();
	console.log($scope.veiculos);
	var veiculoToEdit = null;

	$scope.veiculo = {
		marca: null,
		modelo: null,
		kilometro: null,
		itens: [],
	}
	$scope.addVeiculo = function() {

		$scope.veiculo.marca = $scope.marca;
		$scope.veiculo.modelo = $scope.modelo;
		$scope.veiculo.kilometro = $scope.kilometro;

		if(veiculoToEdit != null){
			update();
		}else{
			maintenanceService.addVeiculo($scope.veiculo);
		}
		clearModel();
	};

	$scope.addItensInArray = function(){
		$scope.veiculo.itens.push($scope.item);
		$scope.item = "";
	}

	clearModel = function(){
		$scope.veiculo = {
			marca: null,
			modelo: null,
			kilometro: null,
			itens: [],
		};

		$scope.item = "";
		$scope.marca = "";
		$scope.modelo = "";
		$scope.kilometro = "";
	}

	$scope.editItem = function(id){
		alert(id);
	}

	$scope.deleteItem = function(item, veiculoId){
		maintenanceService.removeItem(item, veiculoId);
	}

	$scope.editVeiculo = function(veiculoId){
		var veiculo = maintenanceService.getVeiculoById(veiculoId);
		var index = maintenanceService.getIndex(veiculo[0]);

		$scope.marca = veiculo[0].marca;
		$scope.modelo = veiculo[0].modelo;
		$scope.kilometro = veiculo[0].kilometro;
		$scope.item = veiculo[0].itens[veiculo[0].itens.length-1];

		veiculoToEdit = veiculo[0];
	}

	update = function(){
		veiculoToEdit.marca = $scope.veiculo.marca;
		veiculoToEdit.modelo = $scope.veiculo.modelo;
		veiculoToEdit.kilometro = $scope.veiculo.kilometro;
		veiculoToEdit.itens = $scope.veiculo.itens;
		maintenanceService.updateVeiculo(veiculoToEdit);
	}
});