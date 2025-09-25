// main.js
function calcularCuantoFalta(timerId) {
  // DEBUG: console.log('ejecutando funcion...');
  // el h1 que quiero cambiarle el texto
  let h1 = document.querySelector('#falta');
  // crea un objeto fecha con la fecha y hora actual
  let now = new Date(); 
  // crea un objeto fecha con la fecha '2025-07-18 18:00:00'
  let targetDate = new Date('2025-10-31 12:15:00');
  let diff = targetDate - now;
  if (diff <= 0) {
    h1.textContent = 'Son VACACIONES DE VERANO, DISFRUTA!!!';
    clearInterval(timerId);
    return; // sali de la funcion
  }
  // diff es la resta de las 2 fechas en milisegundos
  // haciendo cuentas para pasar de ms a dias, horas
  // minutos, segundos...
  let w = Math.floor(diff / (1000*60*60*24*7));
  diff  %= (1000*60*60*24*7);
  let d  = Math.floor(diff / (1000*60*60*24));
  diff  %= (1000*60*60*24);
  let h  = Math.floor(diff / (1000*60*60));
  diff  %= (1000*60*60);
  let m  = Math.floor(diff / (1000*60));
  diff  %= (1000*60);
  let s  = Math.floor(diff / 1000);   
  // DEBUG: console.log(d,h,m,s);
  h1.textContent = `Faltan ${w} semana${w > 1 ? 's' : ''}, ${d} dia${d > 1 ? 's' : ''}, ${h} hora${h > 1 ? 's' : ''}, ${m} minuto${m > 1 ? 's' : ''} y ${s} segundo${s > 1 ? 's' : ''} para las VACACIONES ☹️`;
}
// uso una funcion anonima como wrapper de calcularCuantoFalta
let timerId = setInterval(() => {
  calcularCuantoFalta(timerId);
}, 1000);

// el handler del form
function dejarNota(e) { // el arg "e" es por evento
  e.preventDefault();
  let container = document.querySelector('.container');
  let name = e.target.name.value;
  let text = e.target.text.value;
  // creo un div
  let div  = document.createElement('div');
  // le cambio el texto
  div.textContent = `${name} dice que ${text}`;
  // le agrego una clase
  div.classList.add('nota');
  // lo agrego al container
  container.append(div);
  e.target.reset(); // e.target es el form, reset blanquea 
  // los inputs
}

// solo para meter el ciclo for en el ejemplo
// no se me ocurrio nada mejor
function easterEgg() {
  let container = document.querySelector('.container');
  // ciclo for clasico con las 3 partes
  for (let i = 0; i < 10; i++) {
    let div  = document.createElement('div');
    div.textContent = i + 1; // creamos divs del 1 al 10
    div.classList.add('nota');
    container.append(div);
  }
}