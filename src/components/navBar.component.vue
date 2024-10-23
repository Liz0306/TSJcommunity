<template>
    <div class="hello">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Somos TSJ 
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">¿Quienes somos?</a></li>
                <li><a class="dropdown-item" href="#">Directorio</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
    
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">EDCORE</a>
            </li>
    
            <li class="nav-item">
              <a class="nav-link" href="#">Admisión</a>
            </li>
            
            <li class="nav-item">
              <router-link class="nav-link" to="/Becas">Becas</router-link>
            </li>
    
            <li class="nav-item">
                <router-link class="nav-link" to="/communityTSJZ">TSJcommunity</router-link>
            </li>
    
    
          </ul>
          
    
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
      </div>
</template>

<style scoped>

h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
</style>


<script>
export default{
    name:'NavBarComponent',
};
</script>