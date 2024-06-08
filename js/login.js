document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que o formulário seja submetido

        const email = document.getElementById('email').value;
        const password = document.getElementById('senha').value; // Ajustado para corresponder ao ID no HTML

        // Objeto com os dados do usuário para enviar ao backend
        const userData = {
            email: email,
            password: password
        };

        // Realiza uma requisição POST para o endpoint de login no backend
        fetch('https://fiap-seasweep-backend.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Credenciais inválidas');
            }
            return response.json();
        })
        .then(data => {
            // Login bem-sucedido, redireciona para a página de dashboard
            window.location.href = 'dashboard.html';
        })
        .catch(error => {
            // Exibe uma mensagem de erro se as credenciais forem inválidas
            alert('Erro ao fazer login: ' + error.message);
        });
    });
});
