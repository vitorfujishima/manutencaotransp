app.factory('maintenanceService', function($window){

	var veiculos[];
	var lo{};

	var persistVeiculo = function() {
		$window.localstorage.setItem('veiculos', JSON.stringify(veiculos));
	};

	lo.addName = function(veiculo) {
		veiculos.push(veiculo);
		persistVeiculo();
	};

	lo.updateVeiculo = function(veiculo){
		var index = veiculos.indexOf(veiculo);

			if(index != -1){

				veiculo = veiculo+'-'+count;
				count++;
				veiculos[index]=veiculo;
				persistVeiculo;
		}
	};

	lo.getNames = function() {
		var retrivedVeiculos = JSON.parse(
			$window.localStorage.getItem('veiculos')
		);
		if(retrivedVeiculos && retrivedVeiculos.length > 0) {
			veiculos = retrivedVeiculos;
		}
		return veiculos;
	};

	lo.remove = function(veiculo) {
		var index = veiculos.indexOf(veiculo);
		if(index != -1) {
			veiculos.splice(index, 1);
			persistVeiculo();
		}
	};

});