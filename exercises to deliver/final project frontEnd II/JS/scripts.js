const contentCards = document.getElementById('content-cards')
const buttonPrevious = document.getElementById('btn-previous')
const buttonNext = document.getElementById('btn-next')
const displayCurrentPage = document.getElementById('display-currentPage')

let pageN = 1

async function getCharacters(pageNumber) {
    try {
        contentCards.innerHTML = ''
        const result = await api.get(`/character?page=${pageNumber}`)
        console.log(result.data)
        const listResult = result.data.results


        listResult.forEach(character => {
            contentCards.innerHTML += `
            <div class="card">
                <div class="left">
                    <img src="${character.image}" alt="image of current character">
                </div>
                <div class="right">
                    <h1>${character.name}</h1>
                    <h3>${character.status == "Alive" ? "🟢" : "🔴"} ${character.status} - ${character.species}</h3>
                    <p>Ultima localização conhecida</p>
                    <p><strong>${character.location.name}</strong></p>
                    <p>Visto a última vez em:</p>
                    <p><strong>${"último episódio"}</strong></p>
                </div>
           </div>  
        `
        })

        displayCurrentPage.innerHTML = pageN

        buttonNext.disabled = !result.data.info.next
        buttonPrevious.disabled = !result.data.info.prev
    } catch (error) {
        alert("erro", error)
        contentCards.innerHTML = `<p>Erro ao tentar pesquisar pela personagem</p>`
    }
}

function previousPage (){
    if(pageN <=1) return
    pageN--
    getCharacters(pageN)
}
    
function nextPage (){
    console.log("entrou no next")
    if(pageN >=42) return
    pageN++
    getCharacters(pageN)
}
   
buttonPrevious.addEventListener('click', previousPage)
buttonNext.addEventListener('click', nextPage)

getCharacters(pageN)
/// colocar switch no lugar do ternário






