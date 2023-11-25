// async function getBodies() {
// 	console.log("buscando dados...")
// 	const result = await axios.get()
// 	console.log(result.data.bodies)
// }
// getBodies().then((result)=>{
// 	console.log(resul)
// })

const celestialBodies = []

function getStars(){
	axios.get("https://api.le-systeme-solaire.net/rest/bodies/").then ((result) => {
		celestialBodies.push(...result.data.bodies)
		console.log(celestialBodies)
		findThePlanets()
		findEarth()
		findWithouthMoons()
		takeJustTheNames ()
		takeSizePlanets ()

	}).catch((err) => {
		console.log(err);
	})
}
getStars()

function findThePlanets() {
	const newPlanets = celestialBodies.filter(body => body.isPlanet === true);
	console.log(newPlanets);
}


function findEarth() {
	const planetEarth = celestialBodies.find(body => body.englishName === "Earth")
	console.log(planetEarth)
}


  function findWithouthMoons(){
	const withouthMoons = celestialBodies.some(body => body.moons === null)
	console.log(withouthMoons)
  }

  function takeJustTheNames (){
	const planetNames = celestialBodies
	.filter(body => body.isPlanet === true)
	.map(body => body.name)
	
		console.log(planetNames)
  }
// const planets = findThePlanets()
  function takeSizePlanets (){
	const sortedPlanets = findThePlanets().sort(function(a,b){
		if (a.meanRadius > b.meanRadius){
		return 1
		}else if (a.meanRadius < b.meanRadius){
			return -1
		} else
		return 0 
		})
		console.log(sortedPlanets)
	}
	
	
// 	planets
// 	.sort ((a - b) => a.meanRadius - b.meanRadius);
// 	.map(body => body.name)

// 	const planetSizes = sortedPlanets.map( body => body.name)
// 	console.log(planetSizes)

//   }