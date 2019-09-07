window.onload = () =>{
    const p = document.getElementById("excusa");


    let who = [ 'the dog ', 'my granma ', 'his turtle ', 'my bird ' ];
    let what = [ 'eat ', 'pissed ', 'crushed ', 'brocked ' ];
    let when = [ 'bedore the class ', 'rigth in time ', 'when i finished ' ];
    /*
    p.innerHTML= who[Math.floor(Math.random()*who.length)];
    p.innerHTML= what[Math.floor(Math.random()*what.length)];
    p.innerHTML= when[Math.floor(Math.random()*when.length)];
    */
    p.innerHTML = who[Math.floor(Math.random()*who.length)] + 
    what[Math.floor(Math.random()*what.length)] +  
    when[Math.floor(Math.random()*when.length)];

    

    
}