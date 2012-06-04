---
layout: post
title: Rede Infinita
subtitle: "Foi ao ar o projeto baseado no conceito da Unisinos: Infinitas Possibilidades, criado pela agência Escala e desenvolvido pela Grifo."
tags:
    - canvas
    - excanvas
    - flashcanvas
    - html5
    - javascript
    - performance
    - projetos
---

Hoje foi ao ar o projeto Rede Infinita baseado no conceito da Unisinos: Infinitas Possibilidades. O projeto criado pela agência Escala e desenvolvido pela Grifo.

![Tela da Rede Infinita](/public/rede-infinita/redeinfinita.jpg)

O aplicativo tem como objetivo agrupar pessoas com interesses semelhantes – quanto mais próximo você estiver de pessoas como você, mais fácil será se comunicar e trocar informações para criar novas possibilidades para o mundo.

<object width="500" height="375"><param name="movie" value="http://www.youtube.com/v/Vc2tNIWNMr0?version=3&amp;feature=oembed"><param name="allowFullScreen" value="true"><param name="allowscriptaccess" value="always"><div style="display: block; cursor: pointer; text-align: center; width: 500px; height: 375px; top: auto; left: auto; position: static; "><div style="-webkit-transition: opacity 150ms ease-out; background-image: url(chrome-extension://gofhjkjmkpinhpoiabjplobcaignabnl/icon_play.png); text-align: left; border: 1px solid rgb(0, 0, 0); width: 100%; height: 100%; background-color: rgba(193, 217, 244, 0.496094); opacity: 0.25; background-repeat: no-repeat no-repeat; "></div></div><embed src="http://www.youtube.com/v/Vc2tNIWNMr0?version=3&amp;feature=oembed" type="application/x-shockwave-flash" width="500" height="375" allowscriptaccess="always" allowfullscreen="true" style="display: none !important; "></object>

Esse projeto foi desenvolvido em HTML5, onde a funcionalidade mais interessante é a visualização da rede (http://redeinfinita.unisinos.br/user/renatho). Quando iniciamos o projeto, começamos a avaliar qual seria a melhor tecnologia, pois a ferramenta precisa suportar um número muito grande de usuários. A performance dessa visualização era um ponto crítico, devido à lógica envolvida que requer uma série de cálculos em tempo real no cliente.

Iniciamos os testes utilizando SVG e VML, onde teríamos um amplo suporte dos navegadores. Mas quando começamos a cadastrar usuários vimos que a performance ia por água abaixo, pois com VML são criados muitos elementos no DOM. Com mil usuários o navegador já começava a travar.

Nossa próxima tentativa seria utilizar tags <div> para fazer as bolinhas, como muitas ferramentas fazem em gráficos semelhantes a esse. Mas apesar de nada elegante também teríamos muitos elementos no DOM, então nossa segunda tentativa foi testar com canvas, mesmo sem ter bem definido qual seria a solução para o IE7 e 8 que não possuem suporte. Com o canvas ainda enfrentamos certa lentidão por estarmos desenhando as bolinhas com gradient.

Para começar a melhorar a performance, resolvemos desenhar as bolinhas como imagem, pois temos uma variação de 6 cores. Dessa forma não precisaríamos montar um objeto para o gradiente a cada usuário cadastrado. Isso melhorou muito a situação. Também fizemos um carregamento “faseado” em 6 tipos de usuários: cada tipo carregando em seu tempo, o que aliviou bastante as iterações do loop que monta o gráfico.

Mas e agora? E o IE? Começamos testando o ExplorerCanvas (que transforma o canvas para VML), mas assim voltávamos à estaca zero não resolvendo o problema. Então resolvemos testar o FlashCanvas e nos surpreendemos com a performance obtida, porém com uma série de bugs. Depois de muito tentar resolver os bugs, nosso desenvolvedor @jcemer resolveu testar a verão PRO e como num passe de mágica todos problemas estavam resolvidos! Valor da versão PRO: US$ 31. A justificativa do valor: “IE” ao contrário.

Este projeto, como todos os projetos da Grifo, contou com a colaboração de todos os desenvolvedores com opiniões e ótimas soluções. Parabéns ao @jcemer, @ricardobeat, @askoth, @vitor42, @mutly, @filipemedina e não menos importante: eu (@renatho) =P .
