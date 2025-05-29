//autenticação login
const botao = document.getElementById('Entrar');
botao.addEventListener('click',
    function (){
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        const logado = users.find(user => user.login === login && user.senha === senha);//procurar o elemento no vetor no caso o login
        



    }

)