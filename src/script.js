const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const error = document.querySelector('.msg')
let  errorMessage = ''
document.querySelector('.login').addEventListener('click', (e) => {
    e.preventDefault()
    let email = document.querySelector('.email').value.trim()
    let pass = document.querySelector('.pass').value
    
    if(email === '' || pass === ''){
        errorMessage = 'Digite um email e senha valido.'
    }
    else if(pass === ''){
        errorMessage = 'digite uma senha.'
    }
    else if(regex.test(email) === false){
        errorMessage = 'Email invalido!'
    }
    else if(pass.length <= 5){
        errorMessage = 'Senha precisa conter a cima de 6 caracteres.'
    }
    else{
        alert("logado")
    }
    error.textContent = errorMessage
    console.log(regex.test(email) + email)
})

