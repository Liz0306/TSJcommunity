<template>
  <div class="container">
    <h1>Haz una Publicación</h1>
    
    <!-- Formulario para la publicación -->
    <textarea v-model="postContent" placeholder="Descripción de la publicación"></textarea>

    <!-- Campos obligatorios -->
    <div>
      <label for="salida">Salida:</label>
      <input type="text" v-model="salida" placeholder="Ej. Campus TSJ" required>
    </div>

    <div>
      <label for="destino">Destino:</label>
      <input type="text" v-model="destino" placeholder="Ej. Centro Guadalajara" required>
    </div>

    <div>
      <label for="horaSalida">Hora de Salida:</label>
      <input type="time" v-model="horaSalida" required>
    </div>

    <div>
      <label for="cupo">Cupo en Carro:</label>
      <input type="number" v-model="cupo" placeholder="Ej. 4" required>
    </div>

    <!-- Input para subir la imagen -->
    <input type="file" @change="onImageChange" accept="image/*">
    
    <!-- Vista previa de la imagen -->
    <div v-if="imageSrc">
      <img :src="imageSrc" alt="Vista previa de la imagen" class="post-image">
    </div>

    <!-- Selector de colores para el fondo -->
    <h3>Elige un color de fondo:</h3>
    <div id="colorPicker">
      <button
        v-for="(color, index) in colors"
        :key="index"
        :style="{ backgroundColor: color }"
        class="color-btn"
        @click="selectColor(color)">
      </button>
    </div>

    <button @click="post">Publicar</button>

    <div id="postsContainer">
      <div v-for="(post, index) in posts" :key="index" class="post" :style="{ backgroundColor: post.color }">
        <p><strong>Salida:</strong> {{ post.salida }}</p>
        <p><strong>Destino:</strong> {{ post.destino }}</p>
        <p><strong>Hora de Salida:</strong> {{ post.horaSalida }}</p>
        <p><strong>Cantidad de Cupo:</strong> {{ post.cupo }}</p>
        <p>{{ post.content }}</p>
        <img v-if="post.imageSrc" :src="post.imageSrc" alt="Imagen de la publicación" class="post-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PUblicMain', 
  data() {
    return {
      postContent: '',
      salida: '',
      destino: '',
      horaSalida: '',
      cupo: '',
      imageSrc: '',
      selectedColor: '#FFFFFF',
      posts: [],
      colors: ['#FFD700', '#FF4500', '#1E90FF', '#32CD32', '#FF69B4'],
    };
  },
  methods: {
    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageSrc = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    selectColor(color) {
      this.selectedColor = color;
    },
    post() {
      if (this.salida && this.destino && this.horaSalida && this.cupo && this.postContent) {
        const newPost = {
          salida: this.salida,
          destino: this.destino,
          horaSalida: this.horaSalida,
          cupo: this.cupo,
          content: this.postContent,
          imageSrc: this.imageSrc,
          color: this.selectedColor,
        };
        this.posts.push(newPost);

        
        // Limpiar los campos
        this.postContent = '';
        this.salida = '';
        this.destino = '';
        this.horaSalida = '';
        this.cupo = '';
        this.imageSrc = '';
        this.selectedColor = '#FFFFFF';
      } else {
        alert('Por favor, completa todos los campos.');
      }
    }
  }
};

</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body {
  background-color: #f4f4f9;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  resize: none;
  min-height: 100px;
}

input[type="text"],
input[type="number"],
input[type="time"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  display: block;
}

input[type="file"] {
  margin-bottom: 20px;
}

#colorPicker {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.color-btn {
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.color-btn:hover,
.color-btn.selected {
  border-color: #333;
}

button {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #006bb3;
}

/* Estilos de las publicaciones */
.post {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.post p {
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 1.6;
  color: #333;
}

.post-content {
  margin-bottom: 10px;
  white-space: pre-line;
}

.post-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
}

#postsContainer {
  margin-top: 40px;
}

#imagePreview {
  margin-bottom: 20px;
}

#imagePreview img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.hidden {
  display: none;
}

</style>



