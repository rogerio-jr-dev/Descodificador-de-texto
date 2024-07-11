// Função para criptografar o texto
function criptografarTexto() {
  const textarea = document.getElementById('textarea');
  const textoOriginal = textarea.value.trim(); // Obtenha o texto e remova espaços em branco no início e no fim

  if (textoOriginal !== '') {
    // Realiza a criptografia
    const textoCriptografado = criptografar(textoOriginal);

    // Exibe o texto criptografado na área apropriada
    exibirResultado(textoCriptografado, 'Texto Criptografado');
  } else {
    alert('Por favor, digite um texto para criptografar.');
  }
}

// Função para descriptografar o texto
function descriptografarTexto() {
  const textarea = document.getElementById('textarea');
  const textoCriptografado = textarea.value.trim(); // Obtém o texto criptografado e remove espaços em branco no início e no fim

  if (textoCriptografado !== '') {
    // Realiza a descriptografia
    const textoDescriptografado = descriptografar(textoCriptografado);

    // Exibe o texto descriptografado na área apropriada
    exibirResultado(textoDescriptografado, 'Texto Descriptografado');
  } else {
    alert('Por favor, digite um texto para descriptografar.');
  }
}

// Função para criptografar o texto
function criptografar(textoOriginal) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];

  let textoCriptografado = textoOriginal.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    textoCriptografado = textoCriptografado.replace(new RegExp(matrizCodigo[i][0], 'g'), matrizCodigo[i][1]);
  }

  return textoCriptografado;
}

// Função para descriptografar o texto
// Função para desencriptar o texto
function botaoDesencriptar() {
  const textarea = document.getElementById('textarea'); // Seleciona o textarea onde o texto será desencriptado
  const textoDesencriptado = desencriptar(textarea.value); // Chama a função desencriptar com o valor do textarea

  textarea.value = textoDesencriptado; // Atualiza o valor do textarea com o texto desencriptado
}

// Função para descriptografar o texto
function botaoDesencriptar() {
  const textarea = document.getElementById('textarea'); // Seleciona o textarea onde o texto será desencriptado

  if (textarea) { // Verifica se o textarea foi encontrado
    const textoCriptografado = textarea.value.trim(); // Obtém o texto criptografado do textarea

    // Matriz de código reversa para descriptografar
    let matrizCodigo = [
      ["enter", "e"],
      ["imes", "i"],
      ["ai", "a"],
      ["ober", "o"],
      ["ufat", "u"]
    ];

    let textoDescriptografado = textoCriptografado.toLowerCase();

    // Aplica a descriptografia invertendo os códigos
    for (let i = 0; i < matrizCodigo.length; i++) {
      textoDescriptografado = textoDescriptografado.replace(new RegExp(matrizCodigo[i][0], 'g'), matrizCodigo[i][1]);
    }

    // Atualiza o valor do textarea com o texto descriptografado
    textarea.value = textoDescriptografado;

    // Atualiza a interface conforme necessário (exibição de mensagem, botões, etc.)
    atualizarInterfaceDescriptografada();
  } else {
    console.error('Textarea não encontrado.');
  }
}

// Função auxiliar para atualizar a interface após descriptografar
function atualizarInterfaceDescriptografada() {
  const mensagemInfo = document.getElementById('mensagemInfo');
  const textoCopiado = document.getElementById('textoCopiado');
  const btnCopiar = document.getElementById('btnCopiar');
  const imagemBusca = document.getElementById('imagemBusca');

  if (mensagemInfo && textoCopiado && btnCopiar && imagemBusca) {
    mensagemInfo.classList.add('ativo');
    mensagemInfo.classList.remove('desativo');
    mensagemInfo.querySelector('h1').textContent = 'Texto Descriptografado';
    mensagemInfo.querySelector('p').textContent = textarea.value.trim();

    textoCopiado.classList.add('ativo');
    textoCopiado.textContent = textarea.value.trim();

    btnCopiar.classList.add('ativo');
    btnCopiar.classList.remove('desativo');

    // Exibe novamente a imagem de busca, se necessário
    imagemBusca.classList.add('ativo');
    imagemBusca.classList.remove('desativo');
  } else {
    console.error('Elemento não encontrado.');
  }
}


// Função para exibir o resultado na área apropriada
function exibirResultado(texto, tipo) {
  const mensagemInfo = document.getElementById('mensagemInfo');
  const textoCopiado = document.getElementById('textoCopiado');
  const btnCopiar = document.getElementById('btnCopiar');
  const imagemBusca = document.getElementById('imagemBusca');

  if (mensagemInfo && textoCopiado && btnCopiar && imagemBusca) {
    mensagemInfo.classList.add('ativo');
    mensagemInfo.classList.remove('desativo');
    mensagemInfo.querySelector('h1').textContent = tipo; // Define o tipo do texto (criptografado ou descriptografado)
    mensagemInfo.querySelector('p').textContent = texto; // Exibe o texto na área apropriada

    textoCopiado.classList.add('ativo');
    textoCopiado.textContent = texto;

    btnCopiar.classList.add('ativo');
    btnCopiar.classList.remove('desativo');

    // Exibe ou oculta a imagem de busca conforme necessário
    if (texto || textarea.value.trim() !== '') {
      imagemBusca.classList.remove('ativo');
      imagemBusca.classList.add('desativo');
    } else {
      imagemBusca.classList.add('ativo');
      imagemBusca.classList.remove('desativo');
    }
  } else {
    console.error('Elemento não encontrado.');
  }
}

// Função para copiar o texto criptografado ou descriptografado
function copiarTexto() {
  const textoCopiado = document.getElementById('textoCopiado').textContent;

  if (textoCopiado) {
    navigator.clipboard.writeText(textoCopiado)
      .then(() => alert('Texto copiado para a área de transferência!'))
      .catch(err => console.error('Erro ao copiar texto:', err));
  }
}
