const contentCards = document.getElementById('content-cards')
const buttonPrevious = document.getElementById('btn-previous')
const buttonNext = document.getElementById('btn-next')
const displayCurrentPage = document.getElementById('display-currentPage')
const searchInput = document.getElementById('search-bar')

let pageN = 1


async function getCharactersWithLastEpisode(pageNumber, searchName) {
  let characterUrl = `/character?page=${pageNumber}`
  console.log("SEARCH " + searchName)
  if (searchName != undefined) {
    characterUrl += `&name=${searchName}`
  }
  console.log(characterUrl)
  const result = await api.get(characterUrl)
  const listResult = result.data.results
  let  promises = [];

  listResult.forEach(async (character, index) => {
    const lastEpisodeUrl = character.episode[character.episode.length - 1]
    const promise = axios.get(`${lastEpisodeUrl}`).then( responseEpi => 
      character.lastEpisodeName = responseEpi.data.name )
    promises.push(promise)
  })
  await Promise.all(promises)
  const next = result.data.info.next
  const prev = result.data.info.prev
  return {"list": listResult, "next": next, "prev": prev }
}


async function getCharacters(pageNumber, searchName) {
    try {
      contentCards.innerHTML = ''
     const result = await getCharactersWithLastEpisode(pageNumber, searchName) 
      const listResult = result.list
      console.log(result)
      listResult.forEach( (character, index) => {
        
        let statusEmoji;
        switch (character.status) {
          case 'Alive':
            statusEmoji = '🟢';
            break
          case 'Dead':
            statusEmoji = '🔴';
            break
          case 'unknown':
            statusEmoji = '⚫';
            break
        }
        const cardHTML = `
          <div class="card">
            <div class="left">
              <img src="${character.image}" alt="image of current character">
            </div>
            <div class="right">
              <h1>${character.name}</h1>
              <h3>${statusEmoji} ${character.status} - ${character.species}</h3>
              <p>Última localização conhecida:</p>
              <p><strong>${character.location.name}</strong></p>
              <p>Visto a última vez em:</p>
              <p><strong id="last-episode-${character.id}">${character.lastEpisodeName}</strong></p>
            </div>
          </div>`

        contentCards.innerHTML += cardHTML
  
        // Add a black line after every second card
        if ((index + 1) % 2 === 0 && index !== listResult.length - 1) {
            const hr = document.createElement('hr');
            hr.classList.add('separador');
            contentCards.appendChild(hr);
          }
      })
  
      displayCurrentPage.innerHTML = pageNumber
  
      buttonNext.disabled = !result.next
      buttonPrevious.disabled = !result.prev

    } catch (error) {
      console.log(error)
      alert('Erro ao tentar pesquisar pela personagem', error)
      contentCards.innerHTML = `<p>Erro ao tentar pesquisar pela personagem</p>`
    }
  }
  
function previousPage() {
      if (pageN <= 1) return
      pageN--
      getCharacters(pageN)
  }
    
function nextPage() {
    if (pageN >= 42) return
    pageN++
    getCharacters(pageN)
}

function searchCallback() {
  console.log('search callback')
  console.log(searchInput.value)
  getCharacters(pageN, searchInput.value)  
}


buttonPrevious.addEventListener('click', previousPage)
buttonNext.addEventListener('click', nextPage)
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchCallback()
  }
});


getCharacters(pageN)












