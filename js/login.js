function empezar() {
  let email = document.getElementById("floatingInput").value;
  let contraseña = document.getElementById("floatingPassword").value;

  if (email === "" || contraseña === "") {
    alert("Debe llenar todos los campos");
  } else {
    location.href = "index.html";
  }
}

let boton = document.getElementById("boton");
boton.addEventListener("click", function () {
  empezar();
});
