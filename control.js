var form = document.forms['form']
var lname = document.getElementById('usermail')
var lsurname = document.getElementById('pwd')


form.onsubmit = function (ev) {
    console.log(ev)
    textoname = usermail.value

    if (usermail.value == "") {
        ev.preventDefault()
        alert('Debe ingresar un usuario')
        usermail.focus();
    } 
    else  if (textoname.indexOf('@') == -1){
            alert('El usuario es un mail y debe contener @')
            ev.preventDefault()
            usermail.focus();
    } 
    else if (pwd.value == "") {
            alert('Debe ingresar una contraseña')
            ev.preventDefault()
            pwd.focus();
            }
            
    
    
        
    
    

    
    
    
    
}