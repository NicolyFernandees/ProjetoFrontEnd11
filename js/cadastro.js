//cadastro
//json: objetos do javascript representados por {chaves} 
//{'nome': 'maria'}


const botao = document.getElementById('btnCadastrar'); //const variavel q vc vai mudar constantemente
//let users = []; //variavel let usada para manipular só uma vez (vetor de JSON, objetos {}) varialvel global

//fluxo para cadastrar um login, e verificar se ele é valido (função)
botao.addEventListener('click', 
    function(){
        let users =JSON.parse(localStorage.getItem("users")) || []; //se estiver ocupado usar, senao preencher vetor vazio
        const user = {
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        }  

        users.push(user); //lista - entrada
        let listaUsuarios = JSON.stringify(users); //criar uma memoria e guarda nele JSON
        localStorage.setItem("users", listaUsuarios); //set na memoria, listas de usuarios (ARMAZENANDO NA MEMORIA)
        listar(); //chama a função ( listar ) para atualizar automaticamente

        document.getElementById('login').value = ''; //limpar o forms
        document.getElementById('senha').value = ''; //limpa o forms
    }
);


//listar os cadastros, capturar a lista e imprimir para HTML
function listar(){
    const listaUsersCad = JSON.parse(localStorage.getItem("users")) || []; //convertendo para objeto e imprimindo no console
    console.log(listaUsersCad);
    const tabelaListaUsers = document.getElementById('listaUsuarios');
    tabelaListaUsers.innerHTML = "";
    

//for each percorrendo o vetor e imprimindo o login, senha
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



listar(); //toda modificação atualiza automaticamente



