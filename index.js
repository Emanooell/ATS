const imagem = document.getElementById('imagem')

imagem.addEventListener('mouseover', () =>{
    
    imagem.classList.add('rotacao')
})
imagem.addEventListener('mouseout', () =>{
    imagem.classList.remove('rotacao')
})
