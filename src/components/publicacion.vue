<template>
<body>
<div class="container">
    <h1>Haz una Publicación</h1>
    
    <!-- Textarea para la publicación -->
    <textarea id="postInput" placeholder="¿Qué estás pensando?"></textarea>

    <!-- Input para subir la imagen -->
    <input type="file" id="imageInput" accept="image/*">
    
    <!-- Vista previa de la imagen -->
    <div id="imagePreview" class="hidden">
      <img id="previewImg" src="" alt="">
    </div>

    <!-- Selector de colores para el fondo -->
    <h3>Elige un color de fondo:</h3>
    <div id="colorPicker">
      <button class="color-btn" data-color="#FFD700" style="background-color: #FFD700;"></button>
      <button class="color-btn" data-color="#FF4500" style="background-color: #FF4500;"></button>
      <button class="color-btn" data-color="#1E90FF" style="background-color: #1E90FF;"></button>
      <button class="color-btn" data-color="#32CD32" style="background-color: #32CD32;"></button>
      <button class="color-btn" data-color="#FF69B4" style="background-color: #FF69B4;"></button>
    </div>

    <button id="postButton">Publicar</button>

    <div id="postsContainer">
      <!-- Aquí se mostrarán las publicaciones -->
    </div>
  </div>
</body>

</template>

<!--------------------------------------------------------------------------------------------------------------------->
<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

.container {
  width: 500px;
  margin: 50px auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  font-size: 16px;
  
}

button {
  padding: 10px 20px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #155cb0;
}

#postsContainer {
  margin-top: 20px;
}

.post {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.post-content {
  font-size: 14px;
  color: #333;
}



.color-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 5px;
}

.color-btn:hover {
  opacity: 0.8;
}
.color-btn.selected {
  border: 2px solid black;
}



</style>

<!--------------------------------------------------------------------------------------------------------------------->
<script>





const postButton = document.getElementById('postButton');
const postInput = document.getElementById('postInput');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const postsContainer = document.getElementById('postsContainer');
let selectedColor = '#FFFFFF'; // Color por defecto

// Selector de color: Captura el color seleccionado
document.querySelectorAll('.color-btn').forEach(button => {
  button.addEventListener('click', function() {
    selectedColor = this.getAttribute('data-color');
    // Opcional: resaltar el botón seleccionado
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected'));
    this.classList.add('selected');
  });
});

// Mostrar vista previa de la imagen
imageInput.addEventListener('change', function() {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      previewImg.src = e.target.result;
      imagePreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.classList.add('hidden');
  }
});

// Función para publicar el contenido con el fondo seleccionado
postButton.addEventListener('click', function() {
  const postContent = postInput.value;
  const imageSrc = previewImg.src;

  if (postContent.trim() !== "" || imageSrc !== "") {
    // Crear nuevo elemento de publicación
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    // Establecer el color de fondo de la publicación
    postElement.style.backgroundColor = selectedColor;

    // Añadir el texto de la publicación con los saltos de línea
    const postText = document.createElement('p');
    postText.classList.add('post-content');
    postText.innerHTML = postContent.replace(/\n/g, '<br>'); // Saltos de línea convertidos a <br>
    postElement.appendChild(postText);

    // Añadir la imagen (si existe)
    if (imageSrc !== "") {
      const postImage = document.createElement('img');
      postImage.classList.add('post-image');
      postImage.src = imageSrc;
      postElement.appendChild(postImage);
    }

    // Añadir la publicación al contenedor
    postsContainer.insertBefore(postElement, postsContainer.firstChild);

    // Limpiar el formulario
    postInput.value = '';
    imageInput.value = '';
    imagePreview.classList.add('hidden');
    previewImg.src = '';
    selectedColor = '#FFFFFF'; // Resetear color al valor por defecto
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected')); // Deseleccionar color
  } else {
    alert("El campo de publicación no puede estar vacío.");
  }
});

export default{
    name:'PublicMain',
};
</script>