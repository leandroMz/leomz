window.addEventListener("load", function(){
  
           
  $.getJSON("js/lang.json", function(json){    
    $('.translate').click(function(){
      localStorage.setItem("lang", $(this).attr('id')) ;
      var lang = $(this).attr('id');
      var doc = json;
        $('.lang').each(function(index, element){
          $(this).text(doc[lang][$(this).attr('key')]);
        });
    });
  });

  let forms = document.querySelector("form.reservation");
  forms.addEventListener("submit", function(e){    
  let errores = [];
  let nameForm = document.querySelector("input.form-name")
  let emailForm = document.querySelector("input.form-email")
  let messageForm = document.querySelector("textarea.form-message")
  let acc = 0;
  
  
  //valido por campo
  //NOMBRE          
  if (nameForm.value == "") {
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text112">Name: (please fill in this field)</a></i>')
    nameForm.setAttribute("style","border-color: red;")
    acc+=0
  }else if(nameForm.value.length < 3){
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text113">Name: (please minimum three characters)</a></i>')
    nameForm.setAttribute("style","border-color: red;")    
    acc+=0
  }else if(soloLetras(nameForm.value)===false){
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text114">Name: (please only letters allowed)</a></i>')
    nameForm.setAttribute("style","border-color: red;")    
    acc+=0
  }else{
    errores.push('<i class="material-icons">check_circle<a class="errores-push lang" key="text115">Name Valid</a></i>')
    nameForm.setAttribute("style","border-color:green;")    
    acc+=1
  }        
  //EMAIL
  if (emailForm.value == "") {
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text116">Email: (please fill in this field)</a></i>')
    emailForm.setAttribute("style","border-color: red;")
    
    acc+=0
  }else if(!validar_email(emailForm)){
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text117">Email: (please enter a valid email)</a></i>')
    emailForm.setAttribute("style","border-color: red;")    
    acc+=0
  }else{
    errores.push('<i class="material-icons">check_circle<a class="errores-push lang" key="text118">Email Valid</a></i>')
    emailForm.setAttribute("style","border-color: green;")    
    acc+=1
  }    
  //MENSAJE
  if (messageForm.value == "") {
    errores.push('<i id="errorPush" class="material-icons">error_outline<a class="errores-push lang" key="text119">Message: (please fill in this field)</a></i>')
    messageForm.setAttribute("style","border-color: red;")    
    acc+=0
  }else{
    errores.push('<i class="material-icons">check_circle<a class="errores-push lang" key="text120">Message Valid</a></i>')
    messageForm.setAttribute("style","border-color: green;")    
    acc+=1
  }
// }
  //borro primero los errores sssssssssssssssssssssssssssssssssss
borrarErrores()
// si existe errores los muestro, sino: envio y muestro el SweetAlert
if (acc<3) {
    e.preventDefault()
    let ulErrores = document.querySelector("div.errores ul")
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>"      
}}else{
    swal({      
      title: "Thanks!",
      text: "Your email has been sent!",
      icon: "success",
      button: "ok",
      timer: 4000
    });     
}}) 
});
let ele = document.getElementById('parent');
function borrarErrores() {
  while(ele.lastChild) {
    ele.lastChild.remove();
  }
}  
let expReg= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let reg = /^[a-zA-ZÀ-ÿ ]+$/;
function validar_email(email) {
return(expReg.test(email.value))?true:false;
}
function soloLetras(str){
return(reg.test(str))?true:false;
} 


