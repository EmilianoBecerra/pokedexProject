const baseURL = ()=> {
	let tipo = document.getElementById("parametroValue2").value;
	let arrValue = [];
	let parametro = document.getElementById('pokemon').value;
	let url = "https://pokeapi.co/api/v2/pokemon/" + parametro;
	fetch(url)
		.then((response => response.json()))
		.then(myJson =>{
			let element = document.getElementById('poke-table');
			let imagen = document.getElementById("img").src = myJson.sprites.front_default;
			arrValue.push(myJson.name);
			arrValue.push(myJson.id);
			arrValue.push(myJson.types[0].type.name);
			arrValue.push(myJson.abilities[0].ability.name);

			for(index in arrValue){
				document.getElementById('parametroValue' + index).innerHTML = arrValue[index]
			}

		})
}
	
	let inicio = 0;
	function aumentar(){
		let cantidadAumentada = document.getElementById("pokemon").value = ++ inicio;
	}

	function disminuir (){
		let cantidadDisminuida = document.getElementById("pokemon").value = --inicio;
	}	



