# Minigame Challenge

Bem-vindo ao repositório do projeto Minigame Challenge! Este é um jogo simples, mas divertido, onde você precisa seguir uma sequência de teclas gerada aleatoriamente. O objetivo é acertar a sequência dentro de um tempo limite para vencer o jogo.

## Funcionalidades

- Geração Aleatória de Sequência: O jogo gera uma sequência aleatória de letras.
- Detecção de Teclas Pressionadas: O jogo detecta as teclas pressionadas pelo usuário e verifica se estão corretas.
- Sons de Feedback: O jogo toca sons diferentes para acertos e erros.
- Temporizador: O jogador tem um tempo limite para completar a sequência.
- Exibição de Resultados: O jogo mostra uma mensagem indicando se o jogador ganhou, perdeu ou se o tempo esgotou.

## Tecnologias Utilizadas

  - React: Biblioteca JavaScript para construção da interface.
  - JavaScript: Linguagem de programação principal.
  - Styled-components: Para estrutura e estilo do jogo.
  - MP3: Arquivos de áudio para feedback sonoro.
  - Gerenciador de pacotes Yarn para a execução do projeto
 
## Como Executar o Projeto

  Para executar este projeto localmente, siga as etapas abaixo:

### 1. Clone o Repositório:
  <br>
  git clone https://github.com/lucasoliveiraDEV22/Minigame-Challenge.git
  cd Minigame-Challenge

### 2. Instale as Dependências:
  <br>
  yarn

### 3. Execute o Projeto:
  <br>
  yarn dev

### 4. Abra o navegador e acesse http://localhost:5173 para ver o jogo em ação.

## Funcionamento do Jogo

  - 1- Geração da Sequência: Quando o componente é montado, uma sequência de 5 letras aleatórias é gerada.
  - 2- Detecção de Teclas: O jogo escuta eventos de teclas pressionadas e verifica se a tecla pressionada corresponde à próxima letra da sequência.
  - 3- Feedback Sonoro: Sons de feedback são reproduzidos para indicar acertos e erros.
  - 4- Tempo: Um temporizador decremente a cada segundo e, se chegar a zero, o jogo termina.
  - 5- Resultados: O jogo exibe uma mensagem de vitória, derrota ou tempo esgotado, e oferece a opção de reiniciar o jogo.
 
## Deploy da aplicação:

Segue link para visualização do deploy do Minigame =>  <a href="https://minigamechallenge.netlify.app/" target="_blank">Minigame</a>

## Exemplo de Sequência:

Simulação de sequência de teclas correta e errada, respectivamente:

### Sequência correta:
![image](https://github.com/lucasoliveiraDEV22/Minigame-Challenge/assets/116319203/53ec4770-da6d-4524-bc6b-24fe005eba02)

### Sequência incorreta:

![image](https://github.com/lucasoliveiraDEV22/Minigame-Challenge/assets/116319203/f44918e8-89ad-47f3-beb8-133d364fa897)
