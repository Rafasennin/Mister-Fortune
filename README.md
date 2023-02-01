# Mister-Fortune
<h1>Jogo que adivinha o número que o jogador está pensando.</h1>

Este jogo foi baseado no curso de JavaScript da Alura, utilizando o reconhecimento de voz através da "Web speech API". 
O objetivo do jogo, e fazer calculos a partir de um número de escolha do jogador sem qualquer inserção de informação na aplicação, e o reultado final, será adivinhado pelo jogo.

    As técnologias utilizadas foram:
    
    *Html 5
    *Css 3
    * JavaScript
    * Web speech API
    
    Estrutura:

    1. Captar o comando de voz em forma de string e armazenar dentro de uma variável.
    2. Mensagem de status utilizando o próprio comando "string" como complemento através do "template strings".
    3. criei uma array com as mensagens para serem mudadas a cada nova etapa do jog, através de incremento do indice da array e sua extensão.
    4. Criei condicionais para se caso o comando for diferente de "próximo", assim o jogo não avança e será solicitado repetir o comando.
    5. Criei um comando para reiniciar o jogo chegando no fim (jogar novamente) ou por algum bug.
    6. Criei o comando resultado que direciona a uma tela diferente.


    Tive grandes dificuldades para encontar uma solução na mudança de comando até chegar a parte final, porém depois de quebrar um pouco a cabeça, consegui alcançar o objetivo.
    Provavelmente existem maneiras mais otimizadas de chegar ao mesmo resultado ou melhorias que possam ser feitas. Fiquem a vontade para comentar, dar opiniões e sugestões.
