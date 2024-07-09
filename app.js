let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto)
    {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
    }

function verificarIntento() 
    {
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
       
       console.log(intentos);
       

        if (numeroDeUsuario === numeroSecreto)
            {
                asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!!`);
                document.getElementById ('reiniciar').removeAttribute('disabled');
            }
        else
            // El usuario no acertó
            {
                if (numeroDeUsuario > numeroSecreto)
                    {
                        asignarTextoElemento('p','El número secreto es menor');
                    }
                else
                    {
                        asignarTextoElemento('p','El número secreto es mayor');
                    }
                intentos++;

                limpiarCampo();
            }

        return;
    }

function limpiarCampo ()
    {
        // Dos formas de modificar el valor de un elemento, a) querySelector --> Usa #  y b) getElementById
        document.querySelector('#valorUsuario').value = '';
        //document.getElementById('valorUsuario').value = '';
        return;  
    }

function generarNumeroSecreto() 
    {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        //Si ya sorteamos todos los números

        if (listaNumerosSorteados.length == numeroMaximo) 
            {
                asignarTextoElemento('p',`'Llegaste al numero maximo'`);
                console.log(listaNumerosSorteados);
            }
        else
            {
                console.log(numeroGenerado);
                console.log(listaNumerosSorteados);

        //Si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) 
            {
                return generarNumeroSecreto();
            }
        else
            {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
            }
        
    }

function condicionesIniciales() 
    {
        asignarTextoElemento('h1','Juego del número secreto!!');
        asignarTextoElemento('p','Indica un número de 1 al 10!!');
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
    }

function reiniciandoJuego()
    {
        //1. Limpiar el campo del usuario
        limpiarCampo();

        //2. Mostrar el mensaje de inicio
        //3. Generar el numero aleatorio
        //5. Inicializar el número de intentos
        
        condicionesIniciales();
        // se generará una función para iniciar los mensajes
        // y se comenta esta linea: asignarTextoElemento('p','Indica un número de 1 al 10!!');
           

        //4. Deshabilitar el botón de nuevo juego

        document.querySelector('#reiniciar').setAttribute('disabled', 'true')

    }
    
condicionesIniciales();
// se cambiaron las lineas de abajo por la función de arriba
//asignarTextoElemento('h1','Juego del número secreto!!');
//asignarTextoElemento('p','Indica un número de 1 al 10!!');