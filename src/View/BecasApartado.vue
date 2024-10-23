<template>

<NavBarComponent></NavBarComponent>

<div class="Encabezado">
  <h1 style="font-family: 'Times New Roman', Times, serif;">EL OTORGAMIENTO DE BECAS TIENE COMO PROPÓSITOS FUNDAMENTALES:</h1>
  <p> Propiciar que estudiantes del TJS en situación económica adversa y deseos de superación puedan continuar su proyecto educativo en el nivel de Educación Superior;

Lograr la equidad educativa mediante la ampliación de oportunidades de acceso y permanencia en programas educativos de reconocida calidad ofrecidos por el TSJ. 

Reducir la deserción escolar y propiciar la terminación oportuna de los estudios mediante el otorgamiento de apoyos, estímulos e incentivos que fomenten una mayor retención de los estudiantes en los programas educativos;

Impulsar la formación integral de nuestra comunidad estudiantil en áreas de conocimiento que requieran el desarrollo social, económico y cultural.</p>
</div>

<div class="Contenedor">
   <div class="Texto">
    
        <p>Con el objetivo de ampliar las oportunidades de acceso y permanencia en la educación de los y las jóvenes de nivel medio superior y superior, 
          así como de contribuir a fortalecer sus conocimientos y habilidades, el Programa Bécalos convoca a estudiantes inscritos en una institución 
          pública de educación. media superior o superior a postularse para la obtención de un apoyo educativo mediante el Programa Trayecto Formativo Bécalos para el ciclo escolar 2024-2025.
          Publicación de resultados: Lunes 2 de septiembre de 2024 en el sitio
          Periodo de solicitud: Del 15 de julio al 16 de agosto de 2024</p>
   </div> 
          <div class="imagen">
            <img src="../assets/imgTarjeta2.jpeg" alt="Descripción de la imagen">
          </div>
  
</div>

<div class="Contenedor">
  <div class="Texto">
     <h2>Convocatoria 2024 becas y apoyos complementarios para la inclusión</h2>
        <p>Las "Becas y Apoyos Complementarios para la Inclusión de Madres Mexicanas Jefas de Familia, Estudiantes de Licenciatura" es un programa del Consejo Nacional de Humanidades, 
          Ciencia y Tecnología (CONAHCYT) diseñado para apoyar a madres mexicanas que son jefas de familia y están cursando una licenciatura. Este programa busca contribuir a la equidad 
          de género y la inclusión social, facilitando el acceso, permanencia y conclusión de estudios superiores para estas mujeres.

          Fecha límite: 31 de enero de 2024</p>
  </div>
          <div class="imagen">
            <img src="../assets/imgTarjeta2.jpeg" alt="Descripción de la imagen">
          </div>
</div>


<div class="Contenedor">
  <div class="Texto">
     <h2>Beca Santander Apoyo a la manutención 2024</h2>
        <p>Programa de apoyo económico único de $9,000 pesos. ¡Esta es tu oportunidad! ¿Qué incluye esta fantástica beca? Un apoyo de manutención única de $9,000 pesos (nueve mil pesos 00/100 MN)
           directamente para ti, ¡para que puedas centrarte en tus metas académicas sin preocupaciones!
           Inscripciones primera fase: 7 de mayo al 21 de julio de 2024
           Inscripciones segunda fase: 24 de julio al 11 de agosto de 2024
           Plazo para realizar el curso requisito "Tecnologías emergentes" (autogestivo en línea y gratuito):11 de agosto de 2024
           Entrega de resultados: 3 de septiembre de 2024
           Plazo para aceptar la beca: 3 al 7 de septiembre de 2024</p>
  </div>
          <div class="imagen">
            <img src="../assets/imgTarjeta2.jpeg" alt="Descripción de la imagen">
          </div>

</div>




</template>

<style>
.Contenedor {
  display: flex; /* Para dividir el div en dos columnas */
  justify-content: space-between; /* Distribuir el contenido */
  align-items: center; /* Alinear verticalmente */
  border: 1px solid #ccc; /* Borde opcional para ver la estructura */
  padding: 10px;
}

.Texto {
  flex: 1; /* Toma el 50% del ancho disponible */
  margin-right: 20px; /* Espacio entre el texto y la imagen */
  background-color: aqua;
}

.imagen {
  flex: 1; /* Toma el otro 50% */
}

.imagen img {
  max-width: 100%; /* Asegura que la imagen no se salga del div */
  height: auto; /* Mantiene la proporción de la imagen */
}



</style>

<script>

import NavBarComponent from '../components/navBar.component.vue';
export default {
      name: 'HelloWorld',
      props: {
        msg: String
      },
      components:{
        NavBarComponent
      
      }
    
    
    }
</script>


