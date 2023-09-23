document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.getElementById('imagem-rotacao');

    imagem.addEventListener('mouseover', () => {
        imagem.classList.add('rotacao');
    });

    imagem.addEventListener('mouseout', () => {
        imagem.classList.remove('rotacao');
    });

    const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    formulario.reset()
    
})
});

