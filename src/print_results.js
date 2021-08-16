

const containerTextHome = `
  <h2>Mejor quedate en casa</h2> 
  <p>
    Para la cantidad de peliculas que desas ver,<br> y 
    el alto costo del cine, es mas rentable que te quedes en casa. :)
  </p>
`

const containerTextCinema = `
  <h2>Mejor ve a Cine</h2> 
  <p>
    En este caso es mas rentable que vayas a cine,<br> y 
    pues, seguramente te ahorres unos dolaritos!. :)
  </p>
`


export const containerResult = (result) =>{
  let response = ''
  let image = ''
  if(result=='Streaming'){
    image = './assets/stay_home.jpg'
    response = containerTextHome;
  }else{
    image = './assets/go_to_cinema.jpg'
    response = containerTextCinema;
  }

  return `
    <div class="result_box_image">
      <img src="${image}" alt="">
    </div>
    <div class="result_box_answer">
      ${response}
      <button id="button_back" type="button">Regresar</button>
    </div>
  
  `
}