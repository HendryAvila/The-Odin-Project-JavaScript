//metodos de seleccion
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.getElementsByName()
// document.querySelector()//devuelve la primera aparicion
// document.querySelectorAll()//devuelve un nodelist


//-------------------------------------------------------------------


//accediendo al body
body = document.body
body.style.background = "grey"

// //accediendo al head (metadatos)
// const head = document.head
// meta.name = 'description';
// meta.content = 'Una descripción de la página';
// head.appendChild(meta);

// // Acceder al elemento <html>
// const html = document.documentElement;
// // Cambiar el idioma del documento
// html.setAttribute('lang', 'es');

// //cambiar titulo de la pagina
// document.title = "Nuevo titulo"

//---------------------------------------------------------------------


// //Modificación de Contenido
// // Acceder a un elemento con ID 'miElemento'
// const elemento = document.getElementById('test');
// // Cambiar el contenido HTML del elemento
// elemento.innerHTML = '<p>Este es un nuevo párrafo</p>';

// Acceder a un elemento con ID 'miElemento'
const elemento = document.querySelector('#test');

//a diferencia de innher TextContex no interpreta html si no el contenido en si esto evita ataques
// Cambiar el contenido textual del elemento
elemento.textContent = 'Inyectado via doom';

// Obtener el valor del atributo 'data-info'
elemento.getAttribute("data-info");

// Establecer un nuevo valor para el atributo 'data-info'
elemento.setAttribute('data-info', 'Nuevo valor');

elemento.setAttribute("title", "este es el atributo title");
console.log(elemento);

//eliminar un atributo
elemento.removeAttribute("data-info");

//---------------------------------------------------------------------------
//Modificacion de estilos
elemento.style.fontSize = "1.7.8rem";
elemento.style.cssText = "padding: 1rem; text-align: center;";

//------------------------------------------------------------
//modificacion de clases
elemento.classList.add("testClass");
elemento.classList.remove("testClass");

// Alternar la clase 'toggleClase'
elemento.classList.toggle('toggleClase');

// Alternar la clase 'toggleClase' con una fuerza (true para añadir, false para eliminar)
elemento.classList.toggle('toggleClase', true);

//--------------------------------------------------------------
// Crear un nuevo elemento <div>
const nuevoDiv = document.createElement('div');

// Añadir un ID al nuevo div
nuevoDiv.id = 'miNuevoDiv';

// Añadir texto al div
nuevoDiv.textContent = 'Este es un nuevo div creado con JavaScript.';

// Añadir el nuevo div al body
document.body.appendChild(nuevoDiv);

// Crear un nuevo nodo de texto
const texto = document.createTextNode('Texto de ejemplo');

// Crear un nuevo elemento <p>
const nuevoP = document.createElement('p');

// Añadir el nodo de texto al <p>
nuevoP.appendChild(texto);

// Añadir el <p> al body
document.body.appendChild(nuevoP);

// Crear un fragmento de documento- Ayuda a consumir menos!!!!!!
const fragmento = document.createDocumentFragment();

// Crear elementos que se añadirán al fragmento
const div1 = document.createElement('div');
div1.textContent = 'Elemento 1';
const div2 = document.createElement('div');
div2.textContent = 'Elemento 2';

// Añadir elementos al fragmento
fragmento.appendChild(div1);
fragmento.appendChild(div2);

// Añadir el fragmento al body
document.body.appendChild(fragmento);


//-----------------------------------------
//Agregar Elementos al DOM

// Crear un nuevo elemento <p>
const nuevoP2 = document.createElement('p');
nuevoP.textContent = 'Párrafo añadido al final del body.';

// Añadir el <p> al body
document.body.appendChild(nuevoP2);

// Crear un nuevo elemento <p>
const nuevoP3= document.createElement('p');
nuevoP.textContent = 'Párrafo insertado antes del primer párrafo.';

// Obtener el primer párrafo
const primerP = document.querySelector('p');

// Insertar el nuevo párrafo antes del primer párrafo
document.body.insertBefore(nuevoP3, primerP);

// Obtener el primer párrafo existente
const viejoP = document.querySelector('p');

// Reemplazar el primer párrafo con el nuevo
document.body.replaceChild(nuevoP, viejoP);
// Obtener el primer párrafo
const parrafo = document.querySelector('p');

// Eliminar el primer párrafo del body
document.body.removeChild(parrafo);
document.body.removeChild(nuevoP);
document.body.removeChild();
// Obtener el primer párrafo
const parrafo1 = document.querySelector('p');

// Eliminar el párrafo
parrafo1.remove();



//-----------------------------------------------
///Manejo de Eventos
// Obtener un botón
const boton = document.getElementById('#1');

// Añadir un evento click al botón
boton.addEventListener('click', function() {
  alert('¡Botón clickeado!');
});

// Función del evento
function manejarClick() {
    alert('¡Botón clickeado!');
  }
  
  // Obtener un botón
  const boton2 = document.querySelector('button');
  
  // Añadir el evento click
  boton2.addEventListener('click', manejarClick);
  
  // Eliminar el evento click
  boton2.removeEventListener('click', manejarClick);



