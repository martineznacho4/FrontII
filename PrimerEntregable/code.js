/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 

  // do {
  //   datosPersona.nombre = prompt("Ingrese su nombre: ");
  // } while (!datosPersona.nombre || !/^[A-Za-z\s]*$/.test(datosPersona.nombre));

  
  let fechaActual = new Date();

  do {
    let edad = prompt("Ingresa el año de tu nacimiento?");
    console.log(parseInt(edad))
    console.log(fechaActual.getFullYear())
    console.log(parseInt(edad) > fechaActual.getFullYear())
    console.log(5000 > 2000)
  } while (fechaActual.getFullYear() < parseInt(edad));
  
  datosPersona.edad = fechaActual.getFullYear() - parseInt(edad);

  console.log(datosPersona.edad)
  // datosPersona.ciudad = prompt("En que ciudad vivis?");
  
  // datosPersona.interesPorJs = confirm('Te interesa JavaScript?')

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  let nombrePerfil = document.querySelector('#nombre');
  nombrePerfil.innerHTML = `${datosPersona.nombre}`

  let edadPerfil = document.querySelector('#edad');
  edadPerfil.innerHTML = `${datosPersona.edad}`
  
  let ciudadPerfil = document.querySelector('#ciudad');
  ciudadPerfil.innerHTML = `${datosPersona.ciudad}`
  
  let interesJSPerfil = document.querySelector('#javascript');
  if(datosPersona.interesPorJs){
    interesJSPerfil.innerHTML = 'Si'
  }else{interesJSPerfil.innerHTML = 'No'}

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  const filaMaterias = document.querySelector('#fila');
  filaMaterias.classList.add('#fila')

  filaMaterias.innerHTML = "";

  for (const materia of listado) {
    const tarjeta = document.createElement('div')
    tarjeta.classList.add('caja', 'caja:hover')

    const imagenMateria = document.createElement('img')
    imagenMateria.setAttribute('src', `${materia.imgUrl}`)
    tarjeta.appendChild(imagenMateria)

    const lenguajesMateria = document.createElement('p')
    lenguajesMateria.innerHTML += `Lenguajes: ${materia.lenguajes}`
    lenguajesMateria.classList.add('lenguajes')
    tarjeta.appendChild(lenguajesMateria)

    const bimestreMateria = document.createElement('p')
    bimestreMateria.innerHTML += `Bimestre: ${materia.bimestre}`
    lenguajesMateria.classList.add('bimestre')
    tarjeta.appendChild(bimestreMateria)

    document.querySelector('#fila').appendChild(tarjeta) 
  }

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  let elemSitio = document.querySelector('#sitio')

  elemSitio.classList.toggle('dark')
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener('keypress', function(e){

  let sobreMi = document.querySelector('#sobre-mi')

  if(e.key == 'f' || e.key == 'F'){
    if(sobreMi.classList.contains('oculto')){
      sobreMi.classList.remove('oculto')
    }
  }
})