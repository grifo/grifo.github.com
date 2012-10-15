---
layout: post
title: BrazilJS - Performance por Davidson Fellipe
subtitle: Conheça formas de melhorar o desempenho de aplicações que usam JavaScript
author: cynthia
tags:
- JavaScript
- BrazilJS
- performance
---

<a href="http://fellipe.com/slides/performance-javascript" class="btn">Slides</a>

Iniciando o ciclo de palestras do dia, temos Davidson Fellipe, frontend da globo.com, que trabalha no projeto [Futpédia](http://futpedia.globo.com).

Fellipe inicia sua apresentação falando da importância de uma boa *performance* em um website.

> Esperar é chato - Davidson

Ele apresentou exemplos de websites conhecidos, como o Google e Amazom que com testes de carregamento mais lento (100 a 500ms), perdem até 20% da sua audiência. No caso da Amazon, isto ainda reverte em um decréscimo de 1% em suas vendas.

> 80-90% of the end-user response time is spent on the frontend - Steve Souders

### Mobile

Outro paradoxo abordado foi a evolução do hardware e o contra ponto da popularização de dispositivos móveis com baixo poder de processamente e capacidade de armazenar energia. Isto nos faz refletir e repensar a *performance* orientada a acessibilidade para todos os usuários.

### Experiêcia UX

> Performance é o mais importante? - Davidson

Manutenção, modularidade, interface amigável, confiabilidade e extensibilidade estão corelacionados com a performance e não devem ser deixados de lado.

> A interface não pode responder a entrada de um usuário em um tempo maior que 100ms - Jakob Nielsen

### Carregamento

Davidson falou sobre a integração com scripts externos que podem bloquear o carregamento da página. Um exemplo, é a integração com redes sociais. 

Muitas empresas possuem políticas restritas de acesso a redes sociais, restringindo o acesso a qualquer conteúdo de domínios relacionados, o que posterga impreterivelmente o carregamento de scripts oriundos destas comunidades. O resultado é uma grande demanda de requisições e uma entrega comprometida da aplicação.

Devemos considerar scripts em modo defer e carregamento paralelo de scripts e execução ordenada com [Head JS](http://headjs.com) para ganhos no carregamento.


### UI Thread

Tags scripts em meio ao html da página, bloqueiam a renderização do conteúdo seguinte até que sejam completamente processadas.

Um JavaScript demorado resulta em UI sem resposta.

### Outros tópicos

Fiquei ligado: 

* habilitar Chrome Frame
* tempo de renderização mobile
* [testar performance de seletores jQuery](http://jsperf.com/jquery-selectors-context/2)

Ferramentas: 

* [JsPerf](http://jsperf.com)
* [JsLitimus](http://code.google.com/p/jslitmus)
* [Web Pagetest](http://www.webpagetest.org)
* [YSlow](http://developer.yahoo.com/yslow)
* [Page Speed Google](http://pagespeed.googlelabs.com)

<br>

Uma ótima palestra e com certeza uma grande contribuição para a comunidade.