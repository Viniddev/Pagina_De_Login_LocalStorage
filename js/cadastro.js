const itens = JSON.parse(localStorage.getItem("itens")) || []

//aqui recebemos os dados principais, verificamos se o usuario ja foi cadastrado e caso contrario realizamos o cadastro do novo usuario

const btnEnviar = document.querySelector(".cardCadastrar")
btnEnviar.addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = event.target.elements["nome"]
    const email = event.target.elements['email']
    const nasc = event.target.elements['nascimento']

    const nomeValido = validaNome(nome.value)

    if(!nomeValido){
       alert("Digite o nome corretamente com mais de 10 caracteres!")
    }else{
        const itemAtual = {
            "nome": nome.value,
            "email": email.value,
            "nascimento": nasc.value
        }
    
        const existe = itens.find(elemento => elemento.email === email.value)
    
        if(existe){
            alert("Email informado ja cadastrado!")
    
            document.querySelector("#email").style.border = "2px solid red"
    
            itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0;
        }else{ 
            itemAtual.id = itens.length
            const login = criaLogin(nome.value)
            itemAtual.login = login
            const senha = criaSenha(login, nasc.value)
            itemAtual.senha = senha      
            itens.push(itemAtual)
    
            const telaDeSaida = document.querySelector("#telaDeSaidaCad")
            telaDeSaida.innerText = "Login: " + login + " |  Senha: " + senha;
        }
    
        localStorage.setItem("itens", JSON.stringify(itens))
    
        nome.value = ""
        email.value = ""
        nasc.value =""
    }

})

//verifica o tamanho do nome para que seja possivel criar uma senha forte
function validaNome(nome){
    if(nome.length < 10){
        document.querySelector("#nome").style.border = "2px solid red"
        return false;
    }
    return true;
}

//criação de senha baseada no nome, data de nascimento e caracteres especiais
function criaSenha(nome, nasc){
    let senha = nome.substring(0, 3)
    const especiais = ["@", "#", "$", "%", "&", "|", "!"]

    if(senha.indexOf(" ") != -1){
        senha = senha.replace(" ", "*")
        console.log("aaa")
    }   

    senha += nasc.substring(nasc.length - 5, nasc.length - 3)
    senha += nasc.substring(nasc.length - 2)

    for(let i = 0; i < 3; i++){
         senha += especiais[Math.floor(Math.random() * 7) + 0]
    }

    return senha;
}

//cria o login do usuario com parte do nome e numeros aleatórios criados pelo programa
function criaLogin(nome){
    var login = nome.substring(0, 4)
    var random = 0;

    for(let i = 0; i < 5; i++){
        random = Math.floor(Math.random() * 9) + 0;
        login += random
        random = 0
    }
    
    return login;
}



