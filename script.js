function cargarUsuarios() {
    var url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = '';

            data.forEach(user => {
                var usuarioInfo = document.createElement('div');
                usuarioInfo.innerHTML = `
                    <strong>ID:</strong> ${user.id}<br>
                    <strong>Nombre:</strong> ${user.name}<br>
                    <strong>Email:</strong> ${user.email}<br><br>
                `;
                resultadoDiv.appendChild(usuarioInfo);
            });
        })
        .catch(error => {
            console.error('Hubo un error al cargar los usuarios:', error);
        });
}
