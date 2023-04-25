function updateFormPreview() {
    // Obtener el valor del título y descripción del formulario
    var title = document.getElementById("formTitle").value;
    var desc = document.getElementById("formDesc").value;
  
    // Actualizar la vista previa del título y descripción del formulario
    var previewTitle = document.getElementById("formTitlePreview");
    var previewDesc = document.getElementById("formDescPreview");
    previewTitle.innerText = title;
    previewDesc.innerText = desc;
  
    // Obtener el contenedor de preguntas de la vista previa
    var questionContainerPreview = document.getElementById("questionContainerPreview");
  
    // Eliminar las preguntas anteriores (si existen)
    questionContainerPreview.innerHTML = "";
  
    // Crear una nueva pregunta por cada campo de texto del formulario
    var questionInputs = document.querySelectorAll("#questionContainer input");
    questionInputs.forEach(function(input) {
      var question = document.createElement("p");
      question.innerText = input.value;
  
      // Agregar la pregunta a la vista previa
      questionContainerPreview.appendChild(question);
    });
  }
  
  function addQuestion() {
    // Obtener el valor seleccionado en el select
    var inputType = document.getElementById("inputType").value;
  
    // Crear un nuevo elemento input con el tipo seleccionado
    let input = document.createElement("input");
    input.type = inputType;
    input.placeholder = "Escriba su pregunta aquí";
    input.className = "form-control";
    input.oninput = function() {
      updateFormPreview();
    };
  
    // Obtener el elemento div donde se agregarán las preguntas
    var questionContainer = document.getElementById("questionContainer");
  
    // Verificar que el elemento existe antes de agregar el nuevo elemento input
    if (questionContainer) {
      questionContainer.appendChild(input);
    } else {
      console.error("Elemento 'questionContainer' no encontrado");
    }
  }
  
  