document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const botaoEnviar = document.getElementById('botaoEnviar');

    botaoEnviar.addEventListener('click', (event) => {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        formulario.reset();

        botaoEnviar.value = 'Enviado';

        function sendEmail(nome, email) {
            const dadosEmail = {
                destinatario: email,
                assunto: 'Bem vindo a ATS',
                corpo: `Olá, ${nome}, Obrigado por ter encontrado conosco. Nós da equipe ATS será um prazer poder ajudá-lo! Conte mais sobre o que você deseja e suas ideias!`,
            };

            fetch('http://localhost:3000/enviar-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosEmail),
                mode: 'cors',  
            })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                alert('E-mail enviado, em breve vamos entrar em contato com você. Caso o e-mail não chegue, tente preencher o formulário novamente!');
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
            });
        }

        sendEmail(nome, email);

        setTimeout(() => {
            botaoEnviar.value = 'Enviar';
        }, 1000); 
    });
});
