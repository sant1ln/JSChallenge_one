import {containerResult} from './print_results.js'

const appContainer = document.querySelector('.app')
const resultContainer = document.querySelector('.result_box');

const amuntMovies = document.querySelector('#amuntMovies');
const checkBoxes = document.querySelectorAll('.userCheck');
const cinemaTicket = document.querySelector('#ticketCost');
const buttonBox = document.querySelector('#button_action');  


const printResults = (responseContainer) =>{

  appContainer.style.display = 'none';
  resultContainer.innerHTML = responseContainer;
  const buttonClose = document.querySelector('#button_back')
  buttonClose.addEventListener('click',()=>{
    resultContainer.style.display = 'none';
    appContainer.style.display = 'flex';
  })

}


const computeValues = (values) =>{
    
  let responseContainer = ''

    if(!values.length){
     return console.log('No hay plaformas para tus peliculas, entonces seguramente sea un estreno, ve a cine.')
    }

    if(!amuntMovies.value){
      return console.log('¿? Pon almenos una cantidad de peliculas')
    }
    
    const totalInCinema = parseInt(cinemaTicket.value)* parseInt(amuntMovies.value);
    const totalInStreaming = values.reduce((acumulator, item)=> acumulator += item)

   
    if(totalInCinema>totalInStreaming){
      responseContainer = containerResult('Streaming')
    }else{
      responseContainer = containerResult('Cienma')
    }
    
    printResults(responseContainer)
}


//Get the checkbox 'checked' values.
buttonBox.addEventListener('click',()=>{
          const values = []
          checkBoxes.forEach((checkbox)=>{
            if(checkbox.checked) values.push(parseInt(checkbox.value))
          })
          computeValues(values)
        }) 


      