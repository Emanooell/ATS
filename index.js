document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.getElementById('imagem-rotacao');

    imagem.addEventListener('mouseover', () => {
        imagem.classList.add('rotacao');
    });

    imagem.addEventListener('mouseout', () => {
        imagem.classList.remove('rotacao');
    });

    const formulario = document.getElementById('formulario')
    const botao = document.getElementById('botaoEnviar')
formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    botao.value = 'Enviado';

    setTimeout(function() {
        botao.value = 'Enviar';
    }, 1000);
    formulario.reset()
    
});
});

