const itens = JSON.parse(localStorage.getItem("itens")) || []
//recuperar senha

const btnRecuperar = document.querySelector(".cardRecuperar")
btnRecuperar.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    const email = evento.target.elements['email']
    const nome = evento.target.elements['nome']

    const telaDeSaida = document.querySelector("#telaDeSaidaRec")

    itens.forEach(element => {
        if(element.email === email.value && element.nome === nome.value){
            telaDeSaida.innerText = "Login: " + element.login + "   Senha: " + element.senha;
        }
    });
})
//-------------------------------------------------------------------------------------------------------