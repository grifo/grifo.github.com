---
layout: post
title: Mobile App - Bibliotecas Javascript
subtitle: "Zepto, jQuery Mobile, xui, jQTouch e Sencha. O que escolher?"
author: jean
tags:
    - css3
    - html5
    - mobile
    - buttons
    - tap highlight
    - bordas
---

Utilizar bibliotecas e frameworks javascript no desenvolvimento front-end já é uma prática comum há algum tempo. Quando comecei a me interessar pelo assunto a [Prototypejs](http://prototypejs.org) era bastante popular e já gerava [filhos](http://script.aculo.us). Logo depois ouvi falar em [jQuery](http://jquery.com), [MooTools](http://mootools.net), [YUI](http://yuilibrary.com)...

E quando começamos a falar em mobile app, quais as possibilidades?

### Zepto

A [Zepto](http://zeptojs.com) é uma biblioteca destinada unicamente a browsers modernos ([talvez muito daquilo que jQuery quer se tornar na versão 2.0](http://blog.jquery.com/2012/06/28/jquery-core-version-1-9-and-beyond)). Sua principal vantagem está em justamente ter alta compatibilidade com jQuery e se manter em menos de 10k.

O interessante de se trabalhar com Zepto é que o código é bastante acessível e bem escrito, uma consulta rápida aos fontes já tira qualquer dúvida. 

Outro ponto forte são os [eventos simples para mobile](https://github.com/madrobby/zepto/blob/master/src/touch.js). A bilioteca já mapeia [taps e swipes](http://zeptojs.com/#touch). Tudo isto aliado a uma [boa documentação](http://zeptojs.com).

Confesso que fiquei bastante empolgado com a bilioteca e o resultado foram dois plugins.

#### Carousel

A aplicação que estou fazendo tem uma seção com um carrossel que destaca um único item. Meus requisitos eram conseguir fazer com que isto funcionasse com um código enxuto e dando suporte a touch.

O mais próximo que encontrei foi o [carousel do Mobify.js](http://www.mobify.com/mobifyjs/modules/carousel), que recomendo . Mas resolvi colocar mãos a massa e o resultado foi o **[Zepto Carousel](http://jcemer.com/zepto-carousel)**. 

O mais bacana foi que em meio ao desenvolvimento, publiquei no Github e um dos *forks* acertou [um detalhe](https://github.com/rafBM/zepto-carousel/commit/2526c3e00446a55a102b6b8a8c088dccf8a50591) que eu havia deixado passar despercebido.

#### Range

Seguindo a mesma lógica do Carousel, nasceu o **[Zepto Range](http://jcemer.com/zepto-range/)**. O plugin recebe um campo [input do tipo range](http://www.w3.org/TR/html-markup/input.range.html) e implementa uma interface mais agradável e mobile *friendly*.

### jQuery Mobile

Para aqueles que não querem abrir mão de jQuery e precisam de um framework mais completo para trabalhar com mobile, uma alternativa é usar [jQuery Mobile](http://jquerymobile.com).

<br>

Estas foram as bibliotecas que avaliei com mais atenção. Mas dei uma conferida rápida também em [xui](http://xuijs.com), [jQTouch](http://jqtouch.com) e [Sencha](http://www.sencha.com). No fim acabei usando a Zepto e não tive decepções.

E você, já usou alguma biblioteca com suporte a mobile? Deixe um comentário!