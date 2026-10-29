function validarNome(nome) {
  if (nome == "" || nome == null) {
    return false;
  } else {
    return true;
  }
}

function validarNumero(numero) {
  if (
    numero == "" ||
    numero == null ||
    Number(numero) <= 0 ||
    Number(numero) == 0
  ) {
    return false;
  } else {
    return true;
  }
}

function cadastrarVinhos() {
  var continuar = "sim";
  var contador = 0;
  var estoqueBaixo = 0;
  var safraMaisAntiga = null;
  var nomeSafraMaisAntiga = "";
  var limiteEstoqueBaixo = 5; // Estoque baixo: menos de 5 garrafas.

  while (continuar == "sim") {
    contador = contador + 1;

    var nome = prompt("Digite o nome do vinho:");

    while (validarNome(nome) == false) {
      alert("Nome inválido! Digite novamente.");
      nome = prompt("Digite o nome do vinho:");
    }
    var tipo = prompt(
      "Digite o tipo do vinho:\n" +
      "1 - Tinto\n" +
      "2 - Espumante\n" +
      "3 - Branco\n" +
      "4 - Rosé\n" +
      "5 - Doce",
    );
    while (
      tipo != "1" &&
      tipo != "2" &&
      tipo != "3" &&
      tipo != "4" &&
      tipo != "5"
    ) {
      alert("Tipo inválido! Digite uma opção de 1 a 5.");

      tipo = prompt(
        "1 - Tinto\n" +
        "2 - Espumante\n" +
        "3 - Branco\n" +
        "4 - Rosé\n" +
        "5 - Doce",
      );
    }
    let classificacaoVinho = prompt(
      "Classifique o vinho:\n 1 - Jovem\n 2 - Amadurecido\n 3 - Antigo",
    );
    while (
      classificacaoVinho != "1" &&
      classificacaoVinho != "2" &&
      classificacaoVinho != "3"
    ) {
      alert("Classificação inválida! Digite uma opção de 1 a 3.");
      classificacaoVinho = prompt("1 - Jovem\n 2 - Amadurecido\n 3 - Antigo");
    }
    if (classificacaoVinho == "1") {
      classificacaoVinho = "Jovem";
    } else if (classificacaoVinho == "2") {
      classificacaoVinho = "Amadurecido";
    } else {
      classificacaoVinho = "Antigo";
    }
    var safra = prompt("Digite o ano da safra:");

    while (
      validarNumero(safra) == false ||
      Number(safra) < 1900 ||
      Number(safra) > 2026 ||
      Number(safra) % 1 != 0
    ) {
      alert("Safra inválida! Digite um ano válido.");
      safra = prompt("Digite o ano da safra:");
    }

    var quantidade = prompt("Digite a quantidade em estoque:");

    while (validarNumero(quantidade) == false || Number(quantidade) % 1 != 0) {
      alert("Quantidade inválida! Digite um número inteiro positivo.");
      quantidade = prompt("Digite a quantidade em estoque:");
    }

    if (contador == 1) {
      var nome1 = nome;
      var tipo1 = tipo;
      var safra1 = Number(safra);
      var quant1 = Number(quantidade);
    } else if (contador == 2) {
      var nome2 = nome;
      var tipo2 = tipo;
      var safra2 = Number(safra);
      var quant2 = Number(quantidade);
    } else if (contador == 3) {
      var nome3 = nome;
      var tipo3 = tipo;
      var safra3 = Number(safra);
      var quant3 = Number(quantidade);
    } else if (contador == 4) {
      var nome4 = nome;
      var tipo4 = tipo;
      var safra4 = Number(safra);
      var quant4 = Number(quantidade);
    } else if (contador == 5) {
      var nome5 = nome;
      var tipo5 = tipo;
      var safra5 = Number(safra);
      var quant5 = Number(quantidade);
    } else {
      alert("Limite de 5 vinhos atingido nesta versão.");
      contador = contador - 1;
      break;
    }

    if (Number(quantidade) < limiteEstoqueBaixo) {
      estoqueBaixo = estoqueBaixo + 1;
      alert(
        "Estoque baixo: " +
        nome +
        " possui apenas " +
        quantidade +
        " garrafas em estoque.",
      );
    }

    if (safraMaisAntiga == null || Number(safra) < safraMaisAntiga) {
      safraMaisAntiga = Number(safra);
      nomeSafraMaisAntiga = nome;
    }

    console.log(
      "VINHO: " +
      contador +
      "\n" +
      "Nome: " +
      nome +
      "\n" +
      "Tipo: " +
      tipo +
      "\n" +
      "Classificação: " +
      classificacaoVinho +
      "\n" +
      "Safra: " +
      safra +
      "\n" +
      "Quantidade em estoque: " +
      quantidade,
    );
    alert("Vinho cadastrado com sucesso! Confira os dados no console.");

    continuar = prompt("Deseja cadastrar outro vinho? (sim/nao)");

    if (continuar == null) {
      continuar = "nao";
    } else {
      continuar = continuar.toLowerCase().replace("ã", "a");
    }

    while (continuar != "sim" && continuar != "nao") {
      continuar = prompt("Digite sim ou nao:");

      if (continuar == null) {
        continuar = "nao";
      } else {
        continuar = continuar.toLowerCase().replace("ã", "a");
      }
    }
  }
  var relatorio =
    "RELATÓRIO FINAL - VINHERIA AGNELLO\n" +
    "Total de vinhos cadastrados: " +
    contador +
    "\n" +
    "Vinhos com estoque baixo: " +
    estoqueBaixo +
    "\n" +
    "Safra mais antiga: " +
    safraMaisAntiga +
    "\n" +
    "Vinho da safra mais antiga:" +
    nomeSafraMaisAntiga;

  console.log(relatorio);
  alert(relatorio);
}
cadastrarVinhos();
