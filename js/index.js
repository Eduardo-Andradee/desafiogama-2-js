// Função para buscar os eventos da API e renderizar na tabela
function carregarEventos() {
    fetch('https://soundgarden-api.vercel.app/events')
      .then(response => response.json())
      .then(eventos => {
        const tabela = document.querySelector('table tbody');
        tabela.innerHTML = '';
  
        eventos.forEach(evento => {
          const row = `
            <tr>
              <td>${evento.id}</td>
              <td>${evento.nome}</td>
              <td>${evento.data}</td>
            </tr>
          `;
          tabela.insertAdjacentHTML('beforeend', row);
        });
      })
      .catch(error => console.error(error));
  }
  
  // Event listener para carregar os eventos ao carregar a página
  window.addEventListener('load', () => {
    carregarEventos();
  });
  