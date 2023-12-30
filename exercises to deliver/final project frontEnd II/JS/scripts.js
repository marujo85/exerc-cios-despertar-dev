const contentCards = document.getElementById('content-cards')
const buttonPrevious = document.getElementById('btn-previous')
const buttonNext = document.getElementById('btn-next')
const displayCurrentPage = document.getElementById('display-currentPage')

let pageN = 1

// async function getCharacters(pageNumber) {
//     try {
//         contentCards.innerHTML = ''
//         const result = await api.get(`/character?page=${pageNumber}`)
//         const listResult = result.data.results
//         console.log(listResult)

//         const promises = listResult.map(async (character) => {
//             const lastEpisodeUrl = character.episode[character.episode.length - 1]
//             // const lastEpisodeElement = document.getElementById(`last-episode-${character.id}`)
            

//             let nameLastOne = ''

//             const responseEpi = await axios.get(`${lastEpisodeUrl}`)
//             console.log(responseEpi.data.name)


//             console.log(nameLastOne)
//             let statusEmoji;
//             switch (character.status) {
//                 case 'Alive':
//                     statusEmoji = '🟢'
//                     break;
//                 case 'Dead':
//                     statusEmoji = '🔴'
//                     break;
//                 case 'unknown':
//                     statusEmoji = '⚫'
//                     break;
    
//             }

            
//             return `
//           <div class="card">
//             <div class="left">
//               <img src="${character.image}" alt="image of current character">
//             </div>
//             <div class="right">
//               <h1>${character.name}</h1>
//               <h3>${statusEmoji} ${character.status} - ${character.species}</h3>
//               <p>Última localização conhecida</p>
//               <p><strong>${character.location.name}</strong></p>
//               <p>Visto a última vez em:</p>
//               <p><strong id="last-episode-${character.id}">${responseEpi.data.name}</strong></p>
//             </div>
//           </div>`
//         });

//         const cardsHTML = await Promise.all(promises)
//         console.log (cardsHTML)
//         contentCards.innerHTML = cardsHTML.join('')

//         displayCurrentPage.innerHTML = pageNumber

//         buttonNext.disabled = !result.data.info.next
//         buttonPrevious.disabled = !result.data.info.prev
//     } catch (error) {
//         alert('Erro ao tentar pesquisar pela personagem', error)
//         contentCards.innerHTML = `<p>Erro ao tentar pesquisar pela personagem</p>`
//     }
// }

// function previousPage() {
//     if (pageN <= 1) return
//     pageN--
//     getCharacters(pageN)
// }

// function nextPage() {
//     if (pageN >= 42) return
//     pageN++
//     getCharacters(pageN)
// }

// buttonPrevious.addEventListener('click', previousPage)
// buttonNext.addEventListener('click', nextPage)

// getCharacters(pageN)


async function getCharacters(pageNumber) {
    try {
      contentCards.innerHTML = ''
      const result = await api.get(`/character?page=${pageNumber}`)
      const listResult = result.data.results
  
      listResult.forEach(async (character, index) => {
        const lastEpisodeUrl = character.episode[character.episode.length - 1]
        // const lastEpisodeElement = document.getElementById(`last-episode-${character.id}`)
  
        let nameLastOne = ''
  
        const responseEpi = await axios.get(`${lastEpisodeUrl}`)
        
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
              <p><strong id="last-episode-${character.id}">${responseEpi.data.name}</strong></p>
            </div>
          </div>`
  
        contentCards.innerHTML += cardHTML
  
        // Add a black line after every second card
        console.log('#############')
        console.log(index)
        console.log(((index + 1) % 2 === 0 && index !== listResult.length - 1))
        if ((index + 1) % 2 === 0 && index !== listResult.length - 1) {
            const hr = document.createElement('hr');
            hr.classList.add('separador');
            contentCards.appendChild(hr);
          }
      })
  
      displayCurrentPage.innerHTML = pageNumber
  
      buttonNext.disabled = !result.data.info.next
      buttonPrevious.disabled = !result.data.info.prev

    } catch (error) {
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
    
    buttonPrevious.addEventListener('click', previousPage)
    buttonNext.addEventListener('click', nextPage)
    
    getCharacters(pageN)












