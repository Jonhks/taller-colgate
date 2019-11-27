const data = POKEMON.pokemon
const root = document.getElementById('root')
const selectInput = document.getElementById('select-input')
const spanPok = document.getElementById('span-pok')

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

selectInput.addEventListener('change', () => {
  const dataFilter = data.filter( element => element.type.includes(selectInput.value))
  printData(dataFilter)
  dataFilter.length == 0 ? printData(data) : printData(dataFilter)
  console.log(dataFilter.length)
})

const printData = (data) => {
  let str = ''
  data.forEach( pokemon => { 
    const image = pokemon.img 
    const name = pokemon.name
    const type = pokemon.type[0]
    const debil = pokemon.weaknesses[0]
    let nextEvol = ''
    pokemon.next_evolution ? nextEvol = pokemon.next_evolution[0].name  : nextEvol = "Sin evolución"
    str += `
    <div class="col m3">
      <div class="card z-depth-5 mi-card">
        <div class="card-image">
          <img src="${image}">
          <span class="card-title">${name}</span>
        </div>
      <div class="card-content">
        <ul>
          <li>Tipo: ${type}</li>
          <li>Debilidad: ${debil}</li>
          <li>Siguiente Evolución: ${nextEvol}</li>
        </ul>
      </div>
    </div>
  </div>`
      })
      root.innerHTML = str
      spanPok.innerHTML = data.length
}

printData(data)