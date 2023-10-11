document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const botaoEnviar = document.getElementById('botaoEnviar');

    botaoEnviar.addEventListener('click', () => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        function sendEmail(nome, email) {
            const dadosEmail = {
                destinatario: email,
                assunto: 'Bem vindo a ATS',
                corpo: `Olá, ${nome}, bem vindo a ATS. Em breve entraremos em contato com você!`,
            };

            fetch('http://localhost:3000/enviar-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosEmail),
                mode: 'cors',  // Adicione esta linha para lidar com CORS
            })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error('Erro:', error));

            console.log("O formulário foi submetido!");
        }

        // Chame a função sendEmail com os dados do formulário
        sendEmail(nome, email);
    });
});
