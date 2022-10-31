const datos = { // objeto con los datos del formulario
    nombre: '', // nombre del cliente
    email: '', // email del cliente
    mensaje: '' // mensaje del cliente
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email'); 
const mensaje = document.querySelector('#mensaje'); 

nombre.addEventListener('input', leerTexto); 
email.addEventListener('input', leerTexto); 
mensaje.addEventListener('input', leerTexto); 

function leerTexto(evento) { 
    datos[evento.target.id] = evento.target.value; 
    console.log(evento.target.value); 
}

const formulario = document.querySelector('.formulario'); 
formulario.addEventListener('submit', function(evento) { 
    evento.preventDefault(); 
    
    const { nombre, email, mensaje } = datos; 
    if(nombre === '' || email === '' || mensaje === '') { 
        mostrarError('Todos los campos son obligatorios'); 
        return; 
    } 
    mostrarMensaje('Mensaje enviado correctamente'); 
});

// alerta de error
function mostrarError(mensaje) { // funcion para mostrar una alerta
    const error = document.createElement('P'); // crear un parrafo
    error.textContent = mensaje; // agregar el mensaje al parrafo
    error.classList.add('error'); // agregar una clase al parrafo
    formulario.appendChild(error); // agregar el parrafo al formulario
    setTimeout(() => { // eliminar el parrafo despues de 3 segundos
        error.remove(); // eliminar el parrafo
    }, 2000); // se ejecuta despues de 3 segundos
    formulario.addEventListener('click',() => error.remove()); // eliminar el parrafo cuando se hace click en el formulario
}

// alerta de envío correcto
function mostrarMensaje(mensaje) { // funcion para mostrar una alerta
    const enviado = document.createElement('P'); // crear un parrafo
    enviado.textContent = mensaje; // agregar el mensaje al parrafo
    enviado.classList.add('enviado'); // agregar una clase al parrafo
    formulario.appendChild(enviado); // agregar el parrafo al formulario
    setTimeout(() => { // eliminar el parrafo despues de 3 segundos
        enviado.remove(); // eliminar el parrafo
    }, 2000); // se ejecuta despues de 3 segundos
    formulario.addEventListener('click',() => enviado.remove()); // eliminar el parrafo cuando se hace click en el formulario
}