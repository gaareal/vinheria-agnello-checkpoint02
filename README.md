# Vinheria Agnello

Projeto de apresentação da Vinheria Agnello e sistema básico de cadastro de vinhos. O site possui cinco páginas, estilos compartilhados e um cadastro com nome, tipo, safra e quantidade em estoque, exibido no console do navegador.

## Integrantes

- Pedro Henrique Gomes Rodrigues
- Francisco Carlos Rocha de Almeida Junior
- Daniel de Oliveira Zuin
- Gabriel Almeida Areal

## GitHub Pages

https://gaareal.github.io/vinheria-agnello-checkpoint02/

## Como executar

1. Extraia o projeto e abra `index.html` no navegador.
2. Responda aos quatro prompts e confirme o aviso de cadastro.
3. Abra o console (Ctrl + Shift + J no Chrome/Edge para Windows) para conferir os dados.
4. Navegue pelo menu para visitar história, produtos, contato e galeria.
5. Recarregue a página inicial para realizar outro cadastro.

Não exige instalação de bibliotecas.
As fontes do Google dependem de internet; há fontes alternativas locais.
Imagens e vídeo são arquivos locais!

## Estrutura

```projeto
index.html
README.md
src/
    css/
    style.css
    efeitos.css
    js/
    script.js
    video-fundo.js
    pages/
        historia.html
        produtos.html
        contato.html
        galeria.html
    assets/
        imgs/
        videos/vinho-fundo.mp4
```

## Efeitos Visuais

Na passagem da versão inicial para a versão final, foi criado o arquivo `src/css/efeitos.css`, importado pelo `style.css`. Esse arquivo centraliza os efeitos de interação e as animações, além de acrescentar novos detalhes visuais.

### Efeitos adicionados na versão final

- **Destaque nos artigos da seção de detalhes:** ao passar o mouse, os artigos sobem 8 pixels e aumentam levemente de tamanho com `translateY()` e `scale()`, utilizando uma transição suave.
- **Interação com a imagem principal:** ao passar o mouse, a imagem recebe uma rotação de −3 graus e uma ampliação de 5%. As propriedades `rotate` e `scale` são usadas separadamente para preservar a animação de flutuação.
- **Rotação do símbolo da marca:** o símbolo realiza uma volta completa ao passar o mouse ou ao focar o link da marca pelo teclado.
- **Brilho no texto da safra:** uma animação contínua de `text-shadow` cria um brilho suave, com duração de 3 segundos por ciclo.
- **Flutuação da imagem na página inicial:** a imagem principal sobe e desce suavemente em um ciclo de 4 segundos, simulando uma flutuação.
- **Seleção de texto personalizada:** os trechos selecionados passam a utilizar fundo na cor vinho e texto na cor creme, acompanhando a identidade visual do site.
- **Letra capitular na página de história:** a primeira letra do parágrafo de abertura recebe tamanho ampliado, fonte serifada e cor vinho, criando um destaque editorial.

### Efeitos existentes reorganizados

Os seguintes efeitos já estavam presentes na versão inicial e foram transferidos do `style.css` para o `efeitos.css`:

- Transições de cor e borda nos links do menu.
- Elevação e mudança de sombra nos cartões de vinhos e itens da galeria ao passar o mouse.
- Transições de cor e fundo nos botões.
- Animação de preenchimento e ondulação de vinho no botão “Conheça nossos vinhos”, acionada ao passar o mouse, focar pelo teclado ou pressionar o botão.

### Pseudo-classes aplicadas

- `:hover`: aplica efeitos quando o cursor está sobre um elemento, como elevação dos cartões, ampliação da imagem principal, rotação do símbolo da marca e preenchimento animado do botão de vinho.
- `:focus-visible`: destaca interações pelo teclado, acionando a rotação do símbolo da marca e o efeito de preenchimento do botão de vinho quando esses elementos recebem foco visível.
- `:active`: aplica o efeito de preenchimento do botão de vinho enquanto ele está sendo pressionado.

### Pseudo-elementos aplicados

- `::before` e `::after`: criam duas camadas decorativas no botão de vinho, simulando o líquido que sobe e ondula durante a interação, sem adicionar elementos ao HTML.
- `::selection`: personaliza os trechos de texto selecionados com fundo vinho e letras na cor creme.
- `::first-letter`: estiliza a primeira letra do parágrafo de abertura da página de história como uma letra capitular, com tamanho ampliado, fonte serifada e cor vinho.

## Tecnologias e funcionamento

- HTML semântico: cabeçalho, menu, conteúdo principal, rodapé, tabela, formulário, imagens e vídeo usado como plano de fundo da área inicial.
- CSS: cores vinho e creme, estilos de formulário e galeria, adaptação para telas pequenas e foco visível ao navegar pelo teclado.
- JavaScript básico: variáveis, concatenação, `prompt()`, `alert()` e `console.log()`.

O JavaScript está ao final do body apenas na página inicial. Faz quatro perguntas, apresenta exatamente “Cadastro realizado! Veja os detalhes no console.” e depois exibe os dados em uma única saída organizada. Os valores permanecem como texto; não há validação, cálculos, armazenamento persistente ou banco de dados. Um campo vazio permanece vazio e Cancelar retorna `null`, sem interromper as perguntas seguintes. A tabela da página de produtos é estática.

## Contato e galeria

O formulário de contato é um modelo HTML demonstrativo: os campos podem ser preenchidos e limpos, mas o botão de envio fica desativado porque não há serviço de recebimento de mensagens. Há política de privacidade fictícia. Foram usados rótulos associados aos campos, tipos de entrada apropriados e agrupamento de opções.

A galeria inclui seis imagens e links para os arquivos originais para que seja possível expandi-la em tela cheia.
