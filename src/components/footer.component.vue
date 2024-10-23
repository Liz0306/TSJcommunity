<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h3>Sobre Nosotros</h3>
        <p>Somos una comunidad apasionada por el desarrollo web, compartiendo conocimiento y creciendo juntos.</p>
      </div>

      <div class="footer-section links">
        <h3>Enlaces Rápidos</h3>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>

      <div class="footer-section contact">
        <h3>Contáctanos</h3>
        <p>Email: contacto@ejemplo.com</p>
        <p>Tel: +52 123 456 7890</p>
      </div>
    </div>

    <div class="footer-bottom">
      &copy; 2024 MiSitio.com | Todos los derechos reservados.
    </div>
  </footer>
</template>



<script>
export default {
  name: 'FooterMain',
}
</script>
<style scoped>
.footer {
  display: -webkit-flex;
  background-color: #282828;
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
  position:static;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.footer-section {
  flex-basis: 30%;
  margin: 10px;
}

.footer-section h3 {
  margin-bottom: 15px;
  font-size: 18px;
  color: #ffffff;
}

.footer-section p, .footer-section ul, .footer-section li {
  color: #d1d1d1;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section ul li a {
  color: #d1d1d1;
  text-decoration: none;
}

.footer-section ul li a:hover {
  color: #ffffff;
}

.footer-bottom {
  
  background-color: #1c1c1c;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
}
</style>

