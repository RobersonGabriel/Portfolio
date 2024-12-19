const handleSubmit = (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name=name]').value;
  const email = document.querySelector('input[name=email]').value;
  const contato = document.querySelector('input[name=contato]').value;
  const mensagem = document.querySelector('textarea[name=mensagem]').value;
  const fotoUrl = document.querySelector('input[name=fotoUrl]').value;

  fetch('https://api.sheetmonkey.io/form/gCH3LKZ2Q9HCYiqWyVG8cu', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    /*fetch('http://127.0.0.1:8000/salvar-dados/', { // Endpoint local
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },*/

    body: JSON.stringify({
      name: name,
      email: email,
      contato: contato,
      mensagem: mensagem,
      fotoUrl: fotoUrl,
    }),
  })
    .then(() => {
      alert('Formulário enviado com sucesso!');
      document.querySelector('form').reset(); // Limpa o formulário após envio
    })
    .catch((error) => {
      console.error('Erro:', error);
      alert('Erro ao enviar o formulário.');
    });
};

document.querySelector('form').addEventListener('submit', handleSubmit);
