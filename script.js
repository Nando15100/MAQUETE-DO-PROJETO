const botao_Salvar = document.getElementById('salvar');

botao_Salvar.addEventListener('click', salvar_Banco);

async function salvar_Banco() {

  const nome_Input1 = document.getElementById('id_Input1').value;
  const nome_Input2 = parseFloat(document.getElementById('id_Input2').value);
  const nome_Input3 = parseFloat(document.getElementById('id_Input3').value);
  

  if (!nome_Input1 || !nome_Input2 || !nome_Input3) {
    alert('Preencha todos os campos!');
    return;
  }

  try {
    const resposta = await fetch('/salvar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome_Input1, nome_Input2, nome_Input3})
    });

    const data = await resposta.json();

    if (resposta.ok) {
      alert(data.message);
      document.getElementById('id_Input1').value = '';
      document.getElementById('id_Input2').value = '';
      document.getElementById('id_Input3').value = '';
      
    } else {
      alert('Erro ao salvar: ' + data.message);
    }
  } catch (error) {
    alert('Erro na comunicação com o servidor.');
    console.error(error);
  }
 
}
