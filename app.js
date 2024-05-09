let  hours = document.querySelector('#hours');
let  minutes = document.querySelector ('#minutes');
let  seconds = document.querySelector('#seconds');

variable = 0;


function timeStart(){


    let clear = setInterval(sec, 1000);
}



// clearInterval(clear)
function sec(){
  
    
    variable += 1;
    console.log(variable);

     seconds.innerHTML = `
    
    <h1>${variable}</h1>
    
    `

    if(variable === 6){


     variable = 0
     minutes.innerHTML = `<h1>1 :</h1>`
    } 




}
