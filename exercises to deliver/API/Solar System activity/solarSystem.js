
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
		const astrosByType = separateAstros(celestialBodies)
		getTheStar ('Deimos')
		filteredByTemperature(planets)
		orderedTypeBySize(astrosByType)
		getOrbitedPlanets(celestialBodies)
		getMassMedia(celestialBodies)
		getSaturnoToPlutonDistance(celestialBodies)
		getPlanetsWithMoons(planets)
		finalFindings(celestialBodies)
		

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

  function orderedTypeBySize(astrosByType){
	const celestialBodiesByTypeAndSize = [];
	for (const astroType in astrosByType) {
		let filteredAstros = astrosByType[astroType].sort((a,b)=> b.meanRadius - a.meanRadius).slice(0, 3)
		filteredAstros.forEach(celestialBody => {
			console.log(celestialBody)
		})

	}
	return celestialBodiesByTypeAndSize
	}

	
	function getOrbitedPlanets(celestialBodies) {
		const orbited = celestialBodies.filter(body => {
			return body.aroundPlanet != null
		})
		orbited.forEach(body => {
			console.log(body.name, body.aroundPlanet);
		})
	
	}
	function getMassMedia(celestialBodies) {
		const isAPlanet = celestialBodies.filter(body => body.bodyType === 'Planet')
		const sum = isAPlanet.reduce((acc, currentValue) => {
			return acc + currentValue.mass.massValue * Math.pow(10, currentValue.mass.massExponent)
		}, 0)
	
		const media = sum / isAPlanet.length
		console.log(media);
	}


	function getSaturnoToPlutonDistance(celestialBodies) {
		const aphelion = celestialBodies.find(body => body.id === 'saturne').aphelion
		const perihelion = celestialBodies.find(body => body.id === 'pluton').perihelion
		console.log(perihelion - aphelion);
	}

	function getPlanetsWithMoons(planets) {
		planets.forEach(body => {
			if (body.moons != null) console.log(body.name, body.moons.length);
		})
	}


	function finalFindings(celestialBodies) {
		const arrayPlanets = celestialBodies.filter(body => body.isPlanet)
		
		console.log(arrayPlanets);
		const masses = arrayPlanets.map(body => body.mass.massValue * Math.pow(10, body.mass.massExponent))
		
		masses.sort((a, b) => a - b)
	
		console.log(masses);
		let indice1 = 0
		let indice2 = 0
		let indice = Math.floor(masses.length / 2)
	
		if (masses.length % 2 === 0) {
			console.log('par');
			indice1 = (masses.length / 2) - 1
			indice2 = masses.length / 2
			const pairMedian = (masses[indice1] + masses[indice2]) / 2
			console.log(pairMedian);
			const namesOfThePlanets = arrayPlanets.filter(body => body.mass.massValue * Math.pow(10, body.mass.massExponent) >= masses[indice1] && body.mass.massValue * Math.pow(10, body.mass.massExponent) <= masses[indice2])
			console.log('planetas mais próximos da mediana:',namesOfThePlanets);
	
		} else {
			console.log('impar');
			const unpairedMedian = masses[Math.floor(masses.length / 2)]
			console.log(unpairedMedian);
			const namesOfThePlanets2 = arrayPlanets.filter(body => body.mass.massValue * Math.pow(10, body.mass.massExponent) === masses[indice])
			console.log('planeta mais próximo da mediana:', namesOfThePlanets2);
		}
	}

