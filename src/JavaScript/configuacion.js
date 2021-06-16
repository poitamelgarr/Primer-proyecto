console.log('hola JavaScript');// equivalente en java un system.out.println('mensaje');
//alert('hola JavaScript');//mensaje de añerta predefinido

const padre=document.querySelector('.contenedor');//con esta linea estamos llamando a una etiqueta por ID    
const lista=document.getElementById('lista');
let etiqueta='';
let clase='titulo', NTitulo=null, CParrafo=null, Rimagen=null, CDescripcion=null, NLabel=null, NTituloForm=null, NLabelUno=null, NLabelDos=null, NLabelTres=null;
lista.addEventListener('mousedown',designar=(e)=>{
    etiqueta=document.getElementById(e.target.id);
    if(etiqueta.id==='mostrar'){
     NTitulo='Selecciono la opcion Ver alerta';
     CParrafo='alerta virus';
     Rimagen='../src/image/a.jpg';
     CDescripcion='deporte favorito';
     NTituloForm='Primer Custionario';
     NLabel='Apellido';
     NLabelUno='Nombre';
     NLabelDos='CI';
     NLabelTres='telefono';
    } else if(etiqueta.id==='mostrarUno'){
        NTitulo='Mi Primer Blog';
        CParrafo='Todos necesitamos en algún momento de nuestra vida palabras de motivación que nos den el empujón que nos falta para arriesgarnos, levantarnos, querernos, cuidarnos, o así de cliché como va a sonar: empezar de cero. nada se crea por arte de magia, ni con solo leer frases bonitas se desvanecen tus problemas. Por eso más allá de tomarlo como un dicho, algo romántico o positivismo “exagerado”, tómalo como un consejo para actuar, por eso se le llama frase motivadora; no es más que una idea para motivarte a la acción. elegimos para ti una colección de 150 frases cortas que puedes leer aleatoriamente, o por área en la que necesites una fuente de inspiración: frases de éxito, frases de la vida, frases de motivación personal, frases de amor, frases de superación personal, frases de motivación cortas. En resumen, frases inspiradoras que te lleven y apoyen al cambio que tan inevitablemente ocurre constantemente dentro de nosotros.';
        Rimagen='../src/image/f.jpg';
        CDescripcion='frase favorita';
        NTituloForm='Segundo Custionario';
        NLabel='profesion';
        NLabelUno='Carrera';
        NLabelDos='Universidad';
        NLabelTres='L.conducir';
    } else if(etiqueta.id==='mostrarDos'){
        NTitulo='Mi Segundo Blog';
        CParrafo='Para ti, una persona increíble para ti que sientes que estas bajo una tormenta que no cesa.Para ti que no sabes cuánto más podrás resistir.para ti que vas perdiendo la fe y te culpas de todo lo que no sale bien.Escucha bien:¡Tú eres increíble!Tú haces este mundo un poquito más hermoso.Tú tienes potencial, fuerza y aún tienes por delante muchas cosas por hacer.Las mejores cosas están por llegar a tu vida, así que por favor resiste un poco más.'
        Rimagen='../src/image/s.jpg';
        CDescripcion='Poema Favorito';
        NTituloForm='Tercer Custionario';
        NLabel='Deporte';
        NLabelUno='Libro';
        NLabelDos='Domicilio';
        NLabelTres='Pais';
    } else if(etiqueta.id==='mostrarTres'){
        NTitulo='Mi Tercer Blog';
        CParrafo='Como un brillante lucero solo ves tinieblas a tu alrededor, pero no te das cuenta de la luz que desprendes y que alumbra la noche de los que están a tu lado.No te apagues y sigue brillando, sigue brillando aunque sea un poco más'
        Rimagen='../src/image/v.jpg';
        CDescripcion='Lugar Favorito';
        NTituloForm='Curto Custionario';
        NLabel='fecha de Nacimiento';
        NLabelUno='SEXO';
        NLabelDos='Estado Civil';
        NLabelTres='Hijos';
    } if(document.querySelector('.'+clase) || clase==!null){
        padre.removeChild(document.querySelector('.CImagen'));
        padre.removeChild(document.querySelector('.CParrafo'));
        padre.removeChild(document.querySelector('.CFormulario'));
     }
          var ECFormulario=document.createElement('div');
          ECFormulario.setAttribute('class','CFormulario');
          var ELabel=document.createElement('label');// creamos un elemento
          ELabel.setAttribute('for','');
          var contenidoUno=document.createTextNode(NLabel);// contenidos de los elementos
          ELabel.appendChild(contenidoUno);// agregar un elemento contenido dentro de dicha etiqueta
     
          var input=document.createElement('input');// creamos un elemento
          input.setAttribute('id','');
          input.setAttribute('Type','Text');

          var ELabelUno=document.createElement('label');// creamos un elemento
          ELabelUno.setAttribute('for','');
          var contenidoDos=document.createTextNode(NLabelUno);// contenidos de los elementos
          ELabelUno.appendChild(contenidoDos);// agregar un elemento contenido dentro de dicha etiqueta

          var inputUno=document.createElement('input');// creamos un elemento
          inputUno.setAttribute('id','');
          inputUno.setAttribute('Type','Text');
          var ELabelDos=document.createElement('label');// creamos un elemento
          ELabelDos.setAttribute('for','');
          var contenidoTres=document.createTextNode(NLabelDos);// contenidos de los elementos
          ELabelDos.appendChild(contenidoTres);// agregar un elemento contenido dentro de dicha etiqueta


          var inputDos=document.createElement('input');// creamos un elemento
          inputDos.setAttribute('id','');
          inputDos.setAttribute('Type','Text');

          var ETituloUno=document.createElement('h1');// creamos un elemento
          ETituloUno.setAttribute('class',clase);
          ECFormulario.appendChild(ETituloUno);
          var contenidoCuatro=document.createTextNode(NTituloForm);// contenidos de los elementos
          ETituloUno.appendChild(contenidoCuatro);

          var inputTres=document.createElement('input');// creamos un elemento
          inputTres.setAttribute('id','');
          inputTres.setAttribute('value','Guardar');
          inputTres.setAttribute('Type','button');
          ECFormulario.appendChild(ELabel);
          ECFormulario.appendChild(input);
          ECFormulario.appendChild(ELabelUno);
          ECFormulario.appendChild(inputUno);
          ECFormulario.appendChild(ELabelDos);
          ECFormulario.appendChild(inputDos);
          ECFormulario.appendChild(inputTres);

          var ECImagen=document.createElement('div');
          ECImagen.setAttribute('class','CImagen');
          var Imagen=document.createElement('img');
          Imagen.setAttribute('src',Rimagen);
          ECImagen.appendChild(Imagen);
          var PDescripcion=document.createElement('p');
          PDescripcion.setAttribute('class','PDescripcion');
          var contenidoCinco=document.createTextNode(CDescripcion);
          PDescripcion.appendChild(contenidoCinco);
          ECImagen.appendChild(PDescripcion);
          var ECParrafo=document.createElement('div');
          ECParrafo.setAttribute('class','CParrafo');
          var ETitulo=document.createElement('h1');// creamos un elemento
          ETitulo.setAttribute('class',clase);
          ECParrafo.appendChild(ETitulo);
          var contenidoSeis=document.createTextNode(NTitulo);// contenidos de los elementos
          ETitulo.appendChild(contenidoSeis);// agregar un elemento contenido dentro de dicha etiqueta
     

          var parrafo=document.createElement('p');// creamos un elemento
          parrafo.setAttribute('class','parrafo');
          var contenidoSiete=document.createTextNode(CParrafo);
          parrafo.appendChild(contenidoSiete);
          ECParrafo.appendChild(parrafo);
          padre.appendChild(ECParrafo);
          padre.appendChild(ECImagen);
          padre.appendChild(ECFormulario);
});
//inicial=()=>{
//pintar();
//}
