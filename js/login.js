<<<<<<< HEAD
//login
const botao = document.getElementById('entrar');
botao.addEventListener('click',
    function(){
        const usuarios = JSON.parse(localStorage.getItem("usuarios"))||[];
        let login = document.getElementById("login").value;
        let senha = document.getElementById("senha").value;
        
        const logado = usuarios.find(user => user.login === login && user.senha === senha);

        if (logado) {
            localStorage.setItem('userLogado', login);
            window.location.href = "dashboard.html";
        } else {
            document.getElementById('mensagemErro').textContent = "<p>Login e senha incorretos.</p>";
        }
    }
);
=======
//autenticação login
const botao = document.getElementById('Entrar');
botao.addEventListener('click',
    function (){
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        const logado = users.find(user => user.login === login && user.senha === senha);//procurar o elemento no vetor no caso o login
        



    }

)
>>>>>>> 3a5b1a94206bdd866fe79b64a6336fb1ca81a121
