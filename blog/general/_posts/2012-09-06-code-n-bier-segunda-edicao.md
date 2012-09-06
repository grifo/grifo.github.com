---
layout: post
title: Code n' Bier - Segunda edição
subtitle: "Live Coding, JavaScript, Node, CoffeeScript, Parser Generator e Design Patterns"
author: jean
tags:
    - Node
    - JavaScript
    - Live Coding
    - Code n' Bier
---

Mais de cem inscritos, três palestrantes, um jogo usando websockets e ainda competir a atenção com o jogo do Grêmio. Foi dada a largada para a segunda edição do Code n' Bier!

<img src="/code/codenbier/edition-02.jpg" alt="Foto início do evento">

Após a primeira edição, abrimos um [espaço para sugestões](http://bit.ly/RgriR3). Mas claro, como a gente sabe que programador é tímido por natureza, tivemos poucas sugestões.

> Gostaria de ver algo sobre websockets e nodeJS - Guilherme Severo

<figure>
  <img src="/code/codenbier/pong.png" alt="Telepong, seus pais jogavam">
  <figcaption>Telepong, seus pais jogavam</figcaption>
</figure>

Hmm, e por que não? Que tal um jogo usando canvas, [websockets](http://socket.io) e [node](http://nodejs.org)? Assim começaram nossos planos de fazer um **live coding** - um programador usando o telão e interagindo com a platéia para escrever um jogo em tempo real.

Outra novidade foram os **smalltaks** (uma brincadeira com o nome da linguagem), palestras de dez minutos apresentadas pelos participantes sobre assuntos variados na área da programação.

### Smalltalk - Design Patterns

A noite começou com uma **smalltalk** sobre design patterns do amigo [Cristiano Becker](http://cristianobecker.com). Becker falou do padrão proxy e explorou cada linha de código [do seu exemplo](http://cristianobecker.com/codenbier), uma excelente aula.

### Live Coding parte 1/2 - Forever alone Pong

Nosso live coding foi escrever um jogo de Pong. Na primeira parte preparamos o HTML, organizamos uma *task* usando [Flour](https://github.com/ricardobeat/cake-flour) para unir nossos arquivos JavaScript, implementamos o *game loop* usando [requestAnimationFrame](https://github.com/jcemer/telepong/blob/codenbier/lib/utils.js#L3) e escrevemos código até o ponto em que deixamos o *puck* (bola) quicando na tela.

### Smalltalk - CoffeScript

A segunda talk da noite foi liderada pelo [Ricardo Tomasi](http://ricardo.cc/), evangelista gaúcho de JavaScript, Node e afins. Descontraído, Ricardo fez piada com o gosto por café e falou sobre o que é [Cofeescript](http://coffeescript.org), linguagem de programação que compila para JavaScript, abastraindo apenas as partes boas da mesma.

Para provar seu conceito, Tomasi portou uma parte do código do Pong para *CoffeeScript*, mostrando a sintaxe clara e objetiva da linguagem.

### Live Coding parte 2/2 - Node Dual Screen Pong

Na segunda parte do live coding, uma breve introdução sobre [express](http://expressjs.com/), [socket.io](http://socket.io) e a implementação em JavaScript no [servidor](https://github.com/jcemer/telepong/blob/codenbier/server.js) responsável por receber e passar o *puck*. Na sequência o jogo foi adaptado para receber e enviar eventos da bola via websockets. Só faltava o *paddle* (bastão) e o jogo estaria completo.

O resultado foi um pong com a área de jogo dividida em duas telas, nas quais dois jogadores rebatem o *puck* com o *paddle*. Quando o *puck* cruza o limite superior da tela, ele é **tele**transportado para o outro jogador. E este é o motivo pelo qual esta adaptação do clássico Tele-jogo recebeu o nome de **TelePong**.

<a href="https://github.com/jcemer/telepong/tree/codenbier" class="btn">Código final do TelePong no GitHub</a>

### Smalltalk - PEG.js

Guilherme Prá Vieira fechou o evento com uma talk sobre [PEG.js](http://pegjs.majda.cz), um gerador de *parser* escrito em JavaScript. Ele falou sobre expressões regulares e justificou o mau uso delas para processar HTML.

Vieira também mostrou alguns exemplos de linguagens que podem ser *parseadas usando a biblioteca e o [live demo](http://pegjs.majda.cz/online) que pode ser encontrado no website.

### Retrospectiva

Tradicionalmente, no final do evento rolou um bate-papo para ouvir dos participantes quais os pontos positivos e a melhorar da edição, entre eles...

#### Positivos

* Espaço para Smalltalks;
* Produto final - MVP;
* Live Coding;
* Exposição das tecnologias;
* Tecnologias e práticas *hypes*;
* Cerveja gelada.

#### A melhorar

* Ter cerveja *free* (vamos pensar com carinho);
* Aumentar a participação da platéia;
* Voltar com os Dojos;
* Aumentar a playlist.

<br>

Agradecemos a participação de todos e até a próxima!