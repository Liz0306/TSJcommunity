<template>
<div class="todo">
<div class="card">
 <div class="image"></div>
  <div class="content">
    <a href="#"><span class="title">Oferta Academica</span></a>

    <p class="desc">Contamos con mas de 15 carreras distintas de Ingenieria y Licenciatura
      para todos los estudiantes.
    </p>

    <a class="action" href="#"> mostrar más<span aria-hidden="true">→</span></a>
  </div>
</div>

<div class="card">
 <div class="image1"></div>
   <div class="content">
    <a href="#"><span class="title">Becas</span></a>

    <p class="desc">Ayudamos a que estudiantes del TSJ con deseos de superación puedan 
      continuar su proyecto educativo.</p>

      <router-link class="action" to="/Becas">mostrar más<span aria-hidden="true">→</span></router-link>
  </div>
</div>

<div class="card">
 <div class="image2"></div>
  <div class="content">
    <a href="#"><span class="title">Noticias</span></a>

    <p class="desc">Mantenemos informados de todo lo que hacemos por la 
      universidad dentro y fuera del plantel.
    </p>

    <a class="action" href="https://sicyt.jalisco.gob.mx/prensa/noticias/realizan-foro-con-la-industria-de-alta-tecnologia-2127" target="_blank" rel="noopener noreferrer"> 
      mostrar más<span aria-hidden="true">→</span></a>
  </div>
</div>
</div>
</template>

<style>
 .todo{
  
  margin-left: 15%;
 }

 .card {
  display: -webkit-flex;
  margin: 5px;
  float: left;
  overflow: hidden;
  transition: transform 0.3s ease;
  

  max-width: 300px;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
  border-color: black;
}



.card:hover .image{
  transform: scale(1.1);
}
.card:hover .image1{
  transform: scale(1.1);
}
.card:hover .image2{
  transform: scale(1.1);
}

.card a {
  text-decoration: none
}

.content {
  padding: 1.1rem;
}

.image {
  justify-items: center;
  object-fit: cover;
  width: 100%;
  height: 157px;
  border-radius: 0.5rem;
  
  background-image:url('../assets/imgTarjeta.jpg');
  transition: transform 0.3s ease;
}

.image1 {
  justify-items: center;
  object-fit: cover;
  width: 100%;
  height: 157px;
  border-radius: 0.5rem;
  
  background-image:url('../assets/imgTarjeta1.png');
  transition: transform 0.3s ease;
}

.image2 {
  justify-items: center;
  object-fit: cover;
  width: 100%;
  height: 157px;
  border-radius: 0.5rem;
  
  background-image:url('../assets/imgTarjeta2.jpeg');
  transition: transform 0.3s ease;
}

.title {
  color: #111827;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.desc {
  margin-top: 0.5rem;
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.action {
  display: inline-flex;
  margin-top: 1rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: #2563EB;
  padding: 4px 8px;
  border-radius: 4px;
}

.action span {
  transition: .3s ease;
}

.action:hover span {
  transform: translateX(4px);
}
</style>

<script>
export default {
  name: 'tarjetaMain',
}

</script>