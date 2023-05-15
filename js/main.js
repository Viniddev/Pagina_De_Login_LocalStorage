const itens = JSON.parse(localStorage.getItem("itens")) || []

const btnentrar = document.querySelector("#formulario")
btnentrar.addEventListener("submit", (evento) => {
    evento.preventDefault()
    var achou = false

    const login = evento.target.elements['login']
    const senha = evento.target.elements['senha']

    itens.forEach(element => {
        if(element.login === login.value && element.senha === senha.value){
            achou = true
        }
    })

    if(achou){
        alert("Parabens! Obrigado por fazer login no meu site!!")
        window.open("https://github.com/Viniddev")
    }else{

        alert("login ou senha estão incorretos!\n Se for seu primeiro acesso clique em Cadastrar!")

        var campoLogin = document.querySelector("#log")
        var campoSenha = document.querySelector("#primaryKey")

        campoSenha.style.border = "2px solid red"
        campoLogin.style.border = "2px solid red"
    }
})