
/*FOR CAT*/
const cat_Btn=document.getElementById('cat_btn');
const cat_result=document.getElementById('cat_result');
cat_Btn.addEventListener('click',getRandomCat);
function getRandomCat() {
	fetch('https://api.thecatapi.com/v1/images/search')
		.then(res => res.json())      //res mai json file ka jo data hai wo store kar raha hai
		.then(data => {
			cat_result.innerHTML = `<img src=${data[0].url} alt="cat" />`       //$ yeh data file ki value ko fetch kar raha hai
		});
}

/*FOR COG*/
const dog_Btn=document.getElementById('dog_btn');
const dog_result=document.getElementById('dog_result');
dog_Btn.addEventListener('click',getRandomDog);
function getRandomDog() {
	fetch('https://dog.ceo/api/breeds/image/random')
		.then(res => res.json())      //res mai json file ka jo data hai wo store kar raha hai
		.then(data => {
			dog_result.innerHTML = `<img src=${data.message} alt="dog" />`       //$ yeh data file ki value ko fetch kar raha hai
		});
}










/*https://aws.random.cat/meow*/

/*https://api.thedogapi.com/v1/images/search*/