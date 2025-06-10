//json: objetos do javascript representados por {chaves} 
//{'nome': 'maria'}
<<<<<<< HEAD
// || = OU

// cadastro 
const botao = document.getElementById('btnCadastrar');

// cadastrar
botao.addEventListener('click',
    function () {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; //localStorage é uma memória do computador
        const usuario = {
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        }

        const indexEditando = document.getElementById('indexEditar').value;
        if(indexEditando !== ""){
            usuarios[indexEditando] = usuario;
            document.getElementById('indexEditar').value = "";
        }else{
            usuarios.push(usuario);
        }
        
        let listaUsuarios = JSON.stringify(usuarios);
        localStorage.setItem("usuarios", listaUsuarios);
        document.getElementById('login').value = '';
        document.getElementById('senha').value = ''; 
        listar();
    }
);

//listar
function listar(){
    const listaUsuarioCad = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log(listaUsuarioCad);
    const tabelaListaUsuarios = document.getElementById('listaUsuarios');
    tabelaListaUsuarios.innerHTML = "";

    //forEach percorrendo o vetor e apresentando Login e Senha 
    listaUsuarioCad.forEach((usuario, index) => { //função for que percorre o vetor (para cada)
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${usuario.login}</td>
            <td>${usuario.senha}</td>
            <td>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="excluirUsuario(${index})">Remover</button>
            </td>
        `;
        tabelaListaUsuarios.appendChild(linha);
    });
}

//remover
function excluirUsuario(index){
    const listaUsuariosCadastrados = JSON.parse(localStorage.getItem("usuarios"))||[];

    if (confirm("Você realmente deseja excluir?")){
        listaUsuariosCadastrados.splice(index, 1);
        listaJson = JSON.stringify(listaUsuariosCadastrados);
        localStorage.setItem("usuarios", listaJson);
        listar();
    }
}

function editarUsuario(index){
    const listaUsuariosCadastrados = JSON.parse(localStorage.getItem("usuarios"))||[];
    const usuario = listaUsuariosCadastrados[index];
    document.getElementById('login').value = usuario.login;
    document.getElementById('senha').value = usuario.senha;
    document.getElementById('indexEditar').value = index;
}

listar();
=======

const botao = document.getElementById('btnCadastrar'); //const variavel q vc vai mudar constantemente
//let users = []; //variavel let usada para manipular só uma vez (vetor de JSON, objetos {}) varialvel global

//fluxo para cadastrar um login, e verificar se ele é valido (função)
botao.addEventListener('click', 
    function(){//função anonima "funcion()"
        let users = JSON.parse(localStorage.getItem("users")) || []; //se estiver ocupado usar, senao preencher vetor vazio
        const user = {
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        } 

        const indexEditando = document.getElementById('indexEdite').value;
        if(indexEditando !== ""){ //alterar somente o valor q estamos acessando
            users[indexEditando] = user; //usuario recebe o index de editar, isso limpa os campos (login e senha)
            document.getElementById('indexEdite').value = ""; //limpando...
        }else{ //se estiver vazio
            users.push(user); //lista - entrada
        }

         
        let listaUsuarios = JSON.stringify(users); //criar uma memoria e guarda nele JSON
        localStorage.setItem("users", listaUsuarios); //set na memoria, listas de usuarios (ARMAZENANDO NA MEMORIA)
    
        document.getElementById('login').value = ''; //limpar o forms
        document.getElementById('senha').value = ''; //limpa o forms
        listar(); //chama a função ( listar ) para atualizar automaticamente
    }
);

//listar os cadastros, capturar a lista e imprimir para HTML
function listar(){
    const listaUsersCad = JSON.parse(localStorage.getItem("users")) || []; //convertendo para objeto e imprimindo no console
    console.log(listaUsersCad);
    const tabelaListaUsers = document.getElementById('listaUsuarios');
    tabelaListaUsers.innerHTML = "";
    
//for each percorrendo o vetor e imprimindo o login, senha, (uma função)
    listaUsersCad.forEach((user, index/*posição*/ ) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td> ${user.login} </td>
        <td> ${user.senha} </td>
        <td> 
            <button onclick="editeUser(${index})"> Editar </button> 
            <button onclick="deleteUser(${index})"> Remover </button>
        </td> 
        `;
        tabelaListaUsers.appendChild(linha); //guardando a linha na tabeladeUsuarios
    });

}

function deleteUser(index){
    const listaUsersCad = JSON.parse(localStorage.getItem("users")) || [];


    if(confirm("Você realmenete deseja excluir? ")){
        listaUsersCad.splice(index, 1); //removendo uma opção após o index
        listaJSON = JSON.stringify(listaUsersCad); //vetor em json
        localStorage.setItem("users", listaJSON); //guardando novamente
        listar(); 
    }
   

}

function editeUser(index){
    const listaUsersCad = JSON.parse(localStorage.getItem("users")) || []; //string vetor textual, o parse converte para vetor de objetos(chaves)
    const user = listaUsersCad[index]; //varios indices, que ira capturar
    document.getElementById('login').value = user.login;
    document.getElementById('senha').value = user.senha;
    document.getElementById('indexEdite').value = index;
    

    



}

listar(); //toda modificação atualiza automaticamente



>>>>>>> 3a5b1a94206bdd866fe79b64a6336fb1ca81a121
