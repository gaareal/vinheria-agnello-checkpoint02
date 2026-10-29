# Vinheria Agnello

Site desenvolvido para o Checkpoint 02, com apresentação da Vinheria Agnello, catálogo de vinhos, galeria e formulário demonstrativo de contato. A página inicial também oferece um cadastro de vinhos via JavaScript, com validações, alertas de estoque baixo e relatório final.

[Acessar o site no GitHub Pages](https://gaareal.github.io/vinheria-agnello-checkpoint02/)

## Páginas

| Página | Conteúdo |
| --- | --- |
| [Início](index.html) | Apresentação da vinheria, vídeo de fundo e cadastro por caixas de diálogo. |
| [História](src/pages/historia.html) | História e apresentação da empresa. |
| [Produtos](src/pages/produtos.html) | Tipos de vinho e tabela estática de produtos. |
| [Contato](src/pages/contato.html) | Formulário demonstrativo com campos de identificação, assunto e mensagem. |
| [Galeria](src/pages/galeria.html) | Seis imagens com links para os arquivos originais. |

## Como executar

1. Baixe ou clone o repositório e mantenha a estrutura de pastas.
2. Abra `index.html` em um navegador atualizado.
3. Preencha as caixas de diálogo do cadastro que aparecem ao abrir a página inicial.
4. Abra o console do navegador com `Ctrl + Shift + J` no Chrome ou Edge para Windows para consultar os registros.
5. Responda `nao` à pergunta sobre um novo cadastro para visualizar o relatório final e continuar navegando pelo site.

Não é necessário instalar bibliotecas, executar comandos de build ou configurar um banco de dados. Imagens e vídeo estão no projeto. As fontes **DM Sans** e **Playfair Display** são carregadas pelo Google Fonts e dependem de internet; o CSS define fontes alternativas.

## Cadastro de vinhos

O arquivo [`src/js/script.js`](src/js/script.js) executa o cadastro automaticamente na página inicial, usando `prompt()`, `alert()` e `console.log()`.

### Dados solicitados

| Campo | Opções e regras implementadas |
| --- | --- |
| Nome | Não aceita campo vazio nem cancelamento. |
| Tipo | `1` — Tinto; `2` — Espumante; `3` — Branco; `4` — Rosé; `5` — Doce. |
| Classificação | `1` — Jovem; `2` — Amadurecido; `3` — Antigo. |
| Safra | Ano inteiro entre **1900 e 2026**, conforme o limite fixo do código. |
| Quantidade em estoque | Número inteiro positivo. |

Entradas inválidas fazem a pergunta ser repetida. O tipo é exibido no console pelo código numérico escolhido; a classificação é exibida por extenso.

### Alertas e relatório

- Cada cadastro concluído exibe uma confirmação e registra os dados no console.
- Estoques com **menos de 5 garrafas** geram um alerta.
- É possível continuar respondendo `sim` ou encerrar com `nao`. Letras maiúsculas são convertidas para minúsculas.
- O sistema armazena até **cinco vinhos por execução**.
- Ao encerrar, um relatório no console e em uma caixa de alerta apresenta o total cadastrado, a quantidade de vinhos com estoque baixo e o nome e o ano da safra mais antiga.

### Limitações atuais

Os registros ficam apenas na memória durante a execução: não há armazenamento persistente, integração com a tabela de produtos ou banco de dados. Recarregar a página reinicia o cadastro.

Cancelar uma pergunta de dados não encerra o fluxo: o campo é solicitado novamente. O cancelamento encerra o cadastro apenas na pergunta sobre cadastrar outro vinho. Depois do quinto registro, responder `sim` ainda abre as perguntas de um sexto vinho; o limite é informado após o preenchimento, e esse registro é descartado.

## Interface e efeitos visuais

A identidade visual combina tons de vinho e creme, fontes serifadas nos destaques e layouts adaptados para telas menores. Os estilos principais ficam em [`style.css`](src/css/style.css), que importa [`efeitos.css`](src/css/efeitos.css).

### Animações e interações

- Elevação dos cartões de vinhos, itens da galeria e artigos de detalhes ao passar o mouse.
- Flutuação da imagem principal, com rotação e ampliação na interação.
- Rotação do símbolo da marca ao passar o mouse ou receber foco pelo teclado.
- Brilho suave no texto “Desde 2011”.
- Preenchimento e ondulação de vinho no botão “Conheça nossos vinhos”.
- Seleção de texto com as cores da marca e letra capitular na abertura da história.

As pseudo-classes `:hover`, `:focus-visible` e `:active` controlam estados de interação. Os pseudo-elementos `::before` e `::after` criam as camadas decorativas do botão; `::selection` personaliza a seleção de texto, e `::first-letter` cria a letra capitular.

### Vídeo e acessibilidade

O arquivo [`video-fundo.js`](src/js/video-fundo.js) controla a reprodução do vídeo de fundo e o botão de pausar/reproduzir. Quando a preferência do sistema por movimento reduzido está ativa, o vídeo não inicia automaticamente; o CSS também desativa animações e transições dos efeitos.

O projeto inclui textos alternativos nas imagens, identificação da página atual no menu, foco visível e rótulos associados aos campos do formulário. As imagens da galeria usam carregamento sob demanda (`loading="lazy"`).

## Formulário de contato

O formulário permite preencher dados e limpar os campos, mas o botão de envio está desativado. Trata-se de uma demonstração sem serviço de recebimento de mensagens. Há campos de nome, e-mail, telefone, assunto, preferência de contato e mensagem, além de uma confirmação de ciência sobre a demonstração.

## Tecnologias

- **HTML5:** estrutura das páginas, navegação, tabelas, formulário, imagens e vídeo.
- **CSS3:** identidade visual, layouts responsivos, transições, animações e pseudo-elementos.
- **JavaScript:** funções de validação, condicionais, laços de repetição, conversão numérica, relatório e controle do vídeo.

## Estrutura do projeto

```text
vinheria-agnello-checkpoint02/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── style.css
    │   └── efeitos.css
    ├── js/
    │   ├── script.js
    │   └── video-fundo.js
    ├── pages/
    │   ├── historia.html
    │   ├── produtos.html
    │   ├── contato.html
    │   └── galeria.html
    └── assets/
        ├── imgs/
        └── videos/
            └── vinho-fundo.mp4
```

## Integrantes

- Pedro Henrique Gomes Rodrigues
- Francisco Carlos Rocha de Almeida Junior
- Daniel de Oliveira Zuin
- Gabriel Almeida Areal
