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
  resultContainer.style.display = 'flex';
  const buttonClose = document.querySelector('#button_back')
  buttonClose.addEventListener('click',()=>{
    resultContainer.style.display = 'none';
    appContainer.style.display = 'flex';
  })

}


const computeValues = (values) =>{
  
  const error_amunt = document.querySelector('#error_amunt');
  const error_ticket = document.querySelector('#error_ticket');
    
  let responseContainer = ''

  
  if(!amuntMovies.value){
    return error_amunt.innerHTML = 'Pon una cantidad de peliculas'
  }
  
  if(!cinemaTicket.value){
    return error_ticket.innerHTML = 'Pon un costo de tickets'
  }
  
  if(!values.length){
    responseContainer = responseContainer = containerResult('Cienma')
    return printResults(responseContainer)
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
          error_amunt.innerHTML = '';
          error_ticket.innerHTML = '';

          checkBoxes.forEach((checkbox)=>{
            if(checkbox.checked) values.push(parseInt(checkbox.value))
          })
          computeValues(values)
        }) 


      