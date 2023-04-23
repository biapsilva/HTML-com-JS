const form = document.getElementById('form-entrar');
const nome = document.getElementById('nome')
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nome = document.getElementById('nome');
    const numerosenha = document.getElementById('senha');
    const mensagemSucesso = 'Sucesso, <b>(nome.value)'/b>;
    
    formEValido = validaNome(nome.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTMLn = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        nome.style.border = '1px solid red';
        document.querySelector('.error.message').style.display = 'block';
    }
})

nome.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value)
})

if (!formEValido) {
    nome.style.border = '1px solid red';
    document.querySelector('.error.message').style.display = 'block';
}else {
    nome.style.border = ' ';
    document.querySelector('.error.message').style.display = 'none'
}
    }
});