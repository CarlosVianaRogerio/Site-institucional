function validarCadastro() {
    var nome  = ipt_nome.value;
    var cpf = Number(ipt_cpf.value);
    var telEmp = Number(ipt_telEmpresarial.value);
    var telCel = Number(ipt_telCelular.value);
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var senhaConf = ipt_senhaConfirma.value;
    var cargo = ipt_cargo.value;

    const cadastro = document.querySelector("#finalizar");
    const outroCadastro = document.querySelector("#outro");
    


    if (nome == ""||cpf== ""||telEmp== ""||telCel== ""||email== ""||senha== ""||senhaConf== ""||cargo== "") {
        alert('Preencha todos os campos')
    } else if (Number.isNaN(cpf)) {
        alert('CPF invalido')
    } else if(Number.isNaN(telEmp)){
        alert('Numero empresarial invalido')
    } else if(Number.isNaN(telCel)){
        alert('Numero celular invalido')
    } else {
        cadastro.href = "login.html";
    }
}