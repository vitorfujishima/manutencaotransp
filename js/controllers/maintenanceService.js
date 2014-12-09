app.factory('maintenanceService', function($window, $filter){

	var veiculos=[];
	var ms={};

	var persistVeiculo = function() {
		window.localStorage.setItem('veiculos', JSON.stringify(veiculos));
	};

	ms.addVeiculo = function(veiculo) {
		veiculos.push(veiculo);
		persistVeiculo();
	};

	ms.updateVeiculo = function(veiculo){
		var index = veiculos.indexOf(veiculo);

			if(index != -1){
				veiculos[index]=veiculo;
				persistVeiculo();
		}
	};

	ms.getVeiculos = function() {
		var retrivedVeiculos = JSON.parse(
			$window.localStorage.getItem('veiculos')
		);
		if(retrivedVeiculos && retrivedVeiculos.length > 0) {
			veiculos = retrivedVeiculos;
		}
		return veiculos;
	};

	ms.removeItem = function(item, veiculoId){
		var veiculo = veiculos.filter(function(veiculo){
			return veiculo.$$hashKey == veiculoId;
		});

		if(item.$index != -1) {
			veiculo[0].itens.splice(item.$index, 1);
		}

		var index = veiculos.indexOf(veiculo[0]);
		if(index != -1) {
			veiculos[index] = veiculo[0];
			persistVeiculo();
		}
	};

	ms.getVeiculoById = function(veiculoId){
		return veiculos.filter(function(veiculo){
			return veiculo.$$hashKey == veiculoId;
		});
	};

	ms.getIndex = function(veiculo){
		return veiculos.indexOf(veiculo);
	}

	return ms;
});