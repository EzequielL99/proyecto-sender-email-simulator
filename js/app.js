// Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

// Campos Obligatorios
const campos = {
    email: false,
    asunto: false,
    mensaje: false
};

// Eventos
eventListeners();

function eventListeners(){
    // Cuando la app inicia
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}

// Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Valida el formulario
function validarFormulario(e){ 
    // Evaluar Campo Vacio   
    if(e.target.value.length > 0){
        // Elimina los errores...
        const error = document.querySelector('p.error');

        if(error){
            error.remove();
        }
            
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{
        campos[e.target.id] = false;
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos lo campos son obligatorios');
        return false;
    }

    switch(e.target.id){
        case 'email':
            const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            const valorEmail = e.target.value;

            if(regExEmail.test(valorEmail)){
                campos[e.target.id] = true;
                e.target.classList.remove('border', 'border-red-500');
                e.target.classList.add('border', 'border-green-500');
            }else{
                campos[e.target.id] = false;
                e.target.classList.remove('border', 'border-green-500');
                e.target.classList.add('border', 'border-red-500');
            }

            break;
        default:
            campos[e.target.id] = true;
            break;
    }

    // Evaluar si se habilita el boton
    const { email, asunto, mensaje } = campos;
    
    if(email && asunto && mensaje){
        
    }

    console.log(errores);
    
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0) formulario.appendChild(mensajeError);
    // if(errores.length === 0) formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));

    

}