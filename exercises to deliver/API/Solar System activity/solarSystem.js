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
		const planets = findThePlanets()
		findEarth(planets)
		findWithouthMoons()
		takeJustTheNames (planets)
		const bigToSmall = takeSizePlanets (planets)
		takeTheNamesInLine (planets)
		takeTheSmallest (bigToSmall)
		takeTheMoonAndDensity (planets)
		takeDiscoveryOrder (celestialBodies)
		const starsByType = separateAstros(celestialBodies)
		getTheStar ('Deimos')
		filteredByTemperature(planets)
		orderedTypeBySize(starsByType)
		

	}).catch((err) => {
		console.log(err);
	})
}
getStars()

// const planetsSortingBySize = [] 

function findThePlanets() {
	const newPlanets = celestialBodies.filter(body => body.isPlanet === true)
	console.log(newPlanets)
	return newPlanets
}


function findEarth(planets) {

const planetEarth =	planets.find(body => body.englishName === "Earth")
	console.log(planetEarth)
}


  function findWithouthMoons(){
	const withouthMoons = celestialBodies.some(body => body.moons === null)
	console.log(withouthMoons)
  }

  function takeJustTheNames (planets){
	const planetNames = planets
	.map(planet => planet.name)
		console.log(planetNames)

  }

  function takeSizePlanets (planets){
	const sortedPlanets = planets.sort(function(a,b){
		if (a.meanRadius > b.meanRadius){
		return 1
		}else if (a.meanRadius < b.meanRadius){
			return -1
		} else
		return 0 
		})
		console.log(sortedPlanets)
		return sortedPlanets
	}
	
function takeTheNamesInLine (planets){
	const namesInLine = planets.join(',')
}

function takeTheSmallest (bigToSmall){
	const theSmallest = bigToSmall.slice(3,9)
	console.log(theSmallest)
	const sumtheSmallestMass = theSmallest.reduce((acc, planet) => acc + planet.mass.massValue,0)
	console.log(sumtheSmallestMass)
	}

function takeTheMoonAndDensity (planets){
	const haveTwoMoons = planets.filter(planet => planet.moons && planet.moons.length > 2 )
	const densityPlanetsWTM = haveTwoMoons.filter (planet => planet.density > 1)
	
	console.log("Planetas")
	densityPlanetsWTM.forEach (planet => console.log(planet.englishName))

}

function takeDiscoveryOrder (celestialBodies){
	const bodiesWithDiscoveryDate = celestialBodies.filter(body => body.discoveryDate !='')
	// console.log(bodiesWithDiscoveryDate)
	const bodiesSortByDiscoveryDate = bodiesWithDiscoveryDate.sort((a,b)=>{
		const dateA = new Date(a.discoveryDate.split("/").reverse().join('-'))
		const dateB = new Date(b.discoveryDate.split("/").reverse().join('-'))

		return dateB - dateA
	})
	bodiesWithDiscoveryDate.forEach (body =>{
	console.log(`Nome: ${body.englishName}, Descoberto em: ${body.discoveryDate}`)
})
}

function getTheStar(celestialBody) {
	const starDescription = celestialBodies.find(body => body.englishName === celestialBody);
  
	if (starDescription) {
	  const starInfo = {
		name: starDescription.englishName,
		perihelion: starDescription.perihelion,
		mass: starDescription.mass.massValue,
		density: starDescription.density,
		gravity: starDescription.gravity
	  };
	  
	  console.log(starInfo);
	} else {
	  console.log("No star found in celestial bodies");
	}
  }
  

  function filteredByTemperature(planets){
	const planetTemperature = planets.filter(planet => planet.avgTemp > 281.1 && planet.avgTemp < 303.1)
	planetTemperature.sort((a,b) =>{
		if (a.avgTemp > b.avgTemp){
			return 1
			}else if (a.avgTemp < b.avgTemp){
				return -1
			} else
			return 0 
			})
			console.log(planetTemperature)
			return planetTemperature
	}
  

function separateAstros(celestialBodies) {
	console.log("Separando astros")
	const newObj = celestialBodies.reduce((acc, body) => {
	  acc[body.bodyType] = (acc[body.bodyType] || []);
	  acc[body.bodyType].push(body);
	  return acc;
	}, {})
	console.log(newObj)
	return newObj;
  }

  function orderedTypeBySize(starsByType){
	const celestialBodiesByTypeAndSize = []

	starsByType.forEach(celestialBodiesByType => {
		const sortedBySize = celestialBodiesByType.slice().sort((a, b)=> a.meanRadius - b.meanRadius)
		celestialBodiesByTypeAndSize.push(sortedBySize)
	})
	return celestialBodiesByTypeAndSize
	}
 





//   function distanceBetweenSaturnAndPluto(celestialBodies) {
// 	const plutao = celestialBodies.find(body => body.englishName === 'Pluto')
// 	const saturn = celestialBodies.find(body => body.englishName === 'Saturn')
  
// 	const sum = plutao.perihelion - saturn.aphelion;
// 	console.log(sum);
  
//   }