document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formPessoa');


    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        //captura os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const telefone = document.getElementById('telefone').value;

        //cria um objeto com os dados do formulário
        const pessoa = {
            Nome: nome,
            Cpf: cpf,
            Telefone: telefone
        };

        try {
            //faz uma requisição POST para a API
            const response = await fetch('http://localhost:3000/api/pessoas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pessoa)
            });

            if (response.ok) {
                const data = await response.json();
                alert('Pessoa cadastrada com sucesso!');
                console.log('Resposta da API:', data);
            } else {
                alert('Erro ao cadastrar a pessoa. Tente novamente.');
                console.error('Erro na resposta da API:', response);
            }
        } catch (error) {
            alert('Erro de conexão. Verifique sua API.');
            console.error('Erro na requisição:', error);
        }
    });
});
