function updateFormPreview() {
    // Obtener el valor del título y descripción del formulario
    var title = document.getElementById("formTitle").value;
    var desc = document.getElementById("formDesc").value;
  
    // Actualizar la vista previa del título y descripción del formulario
    var previewTitle = document.getElementById("formTitlePreview");
    var previewDesc = document.getElementById("formDescPreview");
    previewTitle.innerText = title;
    previewDesc.innerText = desc;
  
  }
 
  