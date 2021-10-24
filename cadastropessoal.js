    

function cadastrar() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let rg = document.getElementById("rg").value;
    let sexo = document.getElementById("sexo").value;
    let endereco = document.getElementById("endereco").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let cep = document.getElementById("cep").value;
    let telFixo = document.getElementById("telFixo").value;
    let telCel = document.getElementById("telCel").value;
    
    

    if(nome == "") {
        alert("PREENCHA O CAMPO NOME!!");
        return false;
    }
    
    if(cpf == "" || cpf.length != 11){
        alert("PREENCHA O CAMPO CPF!!");
        return false;
    }

    if(endereco == ""){
        alert("PREENCHA O CAMPO ENDEREÇO!!");
        return false;
    }

    if(numero == ""){
        alert("PREENCHA O CAMPO NUMERO!!");
        return false;
    }

    
    if(telCel == ""){
        alert("PREENCHA O CAMPO TELEFONE CELULAR!!");
        return false;
    } else {
    alert("SEU CADASTRO FOI REALIZADO COM SUCESSO!!")
    }
}

function enviado(){
    let duvida = document.getElementById("duvida").value; 
    
    if(duvida == "" || duvida.length < 1){
       return false;
    } else{
        alert("SUA MENSAGEM FOI ENVIADA COM SUCESSO!!")
    }
    
}