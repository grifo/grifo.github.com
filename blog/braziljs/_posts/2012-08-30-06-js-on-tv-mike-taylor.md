---
layout: post
title: BrazilJS - JS on TV por Mike Taylor
subtitle: Panoroma de desenvolvimento de aplicativos para TV nos dias de hoje 
author: vitor
tags:
- JavaScript
- BrazilJS
---
Muito bem humorado e arranhando português, Mike inicia a sua apresentação mostrando o início da história do Opera na TV através dos consoles da Nintendo, e posteriormente em várias SmartTvs.

Inicialmente ele levantou algumas preocupações que devemos tomar quando pensamos em desenvolver aplicativos para televisão. A principal delas é garantir que o conteúdo apareça na área central do televisor, visto que alguns modelos possuem uma margem externa à área visível que é utilizada para outros recursos.

Ele também lembra que, diferente de computadores, as tvs possuem um local de destaque na sala. Sendo assim, é importante pensar em aplicativos sociais, que possam ser compartilhados com toda a família.

O modo como interagimos com a aplicação também deve ser pensado. A especificação do DOM3 fala sobre alguns botões padrões para controles, que são as setas direcionais e o botão de enter. Ela também fala sobre teclas para as cores (amarelo, azul, vermelho e verde), mas ests são opcionais, então devemos testar a existência das mesmas antes de atribuir funções, bem como pensar em um fallback.

> Use event listener or Rick Waldron vai vir te pegar! - Mike

Quanto ao CSS, Mike avisa que o media="tv" está praticamente abandonado, e considera a abordagem via media="screen" mais apropriada. Ele também recomendou o uso moderado de bibliotecas de JavaScript, lembrando de dois sites bem conhecidos por desenvolvedores: [microjs](http://microjs.com/) e [vanilla.js](http://vanilla-js.com/). *//hehe :o)*

Além disso, Mike também não recomenda o uso de cookies em TV, pois o mesmo pode ser perdido ao desligar o aparelho. Mesmo assim, ele lembra que cookies podem ser um ótimo polyfill para local storage.

Ele também mostra que não é necessário um televisor para desenvolvimento. A Opera disponibiliza duas ferramentas para fins de teste: o [Opera TV Emulator](http://www.opera.com/business/tv/emulator/) e o [Opera Dragonfly](http://www.opera.com/dragonfly/) para depuração. A Opera também disponibiliza templates e outras ferramentas específicas para televisores em [Dev.Opera](dev.opera.com/tv/).