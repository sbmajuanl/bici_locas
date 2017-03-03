
//document.getElementById("registrar").onclick=

function validateForm() {

    var name=document.getElementById("name");
    var lastname=document.getElementById("lastname");
    var inputemail=document.getElementById("input-email");
    var inputpassword=document.getElementById("input-password");
    var control = document.getElementById('control');
    var selecc = control.options[control.selectedIndex].value;
    var inputsocial=document.getElementById("input-social");

    var s_letras = /^[a-zñÑA-Z]*$/;
    var pl_mayus = /^[A-Z]{1}/;

    //1ro.Validacion del nombre en caso la caja de texto este vacio, que se ingresen sean letras y la primera letra en mayuscula
    if(name.value.length ==""){
          alert("Ingrese su nombre");
    }
   else if (name.value.search(s_letras)){
       alert("Ingrese solo letras");
    }
    else if(name.value.search(pl_mayus)){
      alert("La primera letra debe ser mayúscula");
    }

    //2do.Validacion del apellido en caso la caja de texto este vacio, que solo se ingresen letras y la primera letra en mayuscula
    else if(lastname.value.length == ""){
          alert("Ingrese su apellido");
    }
    else if(lastname.value.search(s_letras)){
      alert("Ingrese solo letras");
    }
    else if(lastname.value.search(pl_mayus)){
      alert("La primera letra debe ser mayúscula");
    }

    //Validacion del email en caso la caja de testo este vacio
    else if(inputemail.value.length == ""){
        alert("Ingrese un email");
    }
    // Validacion de la contraseña, para que solo sean 6 caracteres
    else if(inputpassword.value.length <6){
        alert("Ingrese su contraseñaa de 6 a mas caracteres");
    }
    else if(inputpassword.value == "password"){
        alert("El password no puede ser " + inputpassword.value);
    }
    else if(inputpassword.value == "123456"){
        alert("El password no puede ser " + inputpassword.value);
    }

    else if(inputpassword.value =="987654"){
        alert("El password no puede ser "+ inputpassword.value);
    }
    // Validacion del select, para que no sea vacio
    else if(selecc == 0){
          alert("Seleccione tu tipo de bici");
    }
    else if(inputsocial.value.length ==""){
        alert("Ingrese su Twiter");
    }

  }
