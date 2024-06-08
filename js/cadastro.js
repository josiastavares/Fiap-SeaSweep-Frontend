document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const registrationData = {
                name: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                password: document.getElementById('senha').value
            };

            fetch('https://fiap-seasweep-backend.onrender.com/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao cadastrar usuário');
                }
                return response.json();
            })
            .then(data => {
                console.log('Cadastro realizado com sucesso:', data);
                // Salva os dados do usuário no localStorage
                localStorage.setItem('userEmail', registrationData.email);
                localStorage.setItem('userPassword', registrationData.password);
                // Redireciona para a página de login
                window.location.href = 'login.html';
            })
            .catch(error => {
                console.error('Erro ao cadastrar usuário:', error);
            });
        });
    } else {
        console.error('Formulário de cadastro não encontrado');
    }
});
