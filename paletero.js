window.addEventListener('DOMContentLoaded', async () => {
    paletas()
})


function paletas(){
    let paletero= document.getElementById('paletero')
    let colores=[
'#0ffff7',
'#29ffb1',
'#0905ad',
'#dc019f',
'#ff5b89',
    ]
    let html=``
    for (let i = 1; i < 6; i++) {
      for (let j = 1; j < 6; j++) {
        const fondo = colores[i]
        const letra= colores[j]
        if(!(fondo==letra)){
            html+= ` 
            <div class="carta background-color${i}">
              <h2 class="color${j}">MS Innovaciones (${i},${j})</h2>
              <h3 class="color${j}">Había una ardilla que no sabia nada mas que molestar</h3>
            </div>
            `         }
        
      } 
    }
    paletero.innerHTML=html
  }