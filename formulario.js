const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    if(nombre.length < 5){
        alert("El nombre debe tener al menos 5 caracteres");
        return;
    }

    if(edad < 18 || edad > 60){
        alert("La edad debe estar entre 18 y 60");
        return;
    }


if(pais === ""){
    alert("Debe seleccionar un país");
    return;
}
    if(!terminos){
        alert("Debe aceptar los términos");
        return;
    }

    window.location.href =
    `resultado.html?nombre=${nombre}&email=${email}&edad=${edad}&pais=${pais}`;
});
