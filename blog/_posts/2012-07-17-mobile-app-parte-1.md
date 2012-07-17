---
layout: post
title: Mobile App - parte 1
subtitle: "Passo a passo de desenvolvimento de uma mobile wep app"
author: jean
tags:
    - css3
    - html5
    - mobile
---

Este é o primeiro de uma série de posts que irão mostrar na prática o desenvolvimento de uma mobile web app. O objetivo final é que nossa app funcione em iPhone, iPad e Android usando apenas html5 e css3. A distribuição do aplicativo precisará apenas de uma interface *web view* nativa.

### Largura da tela

Nossa app terá o mesmo layout tanto para iPad, Android e iPhone. A arte está com **640px** de largura, vou seguir esta medida no projeto.

A primeira coisa que farei é adicionar no head a meta ``<meta name="viewport" content="width=640px">``. Assim os dispositivos vão preencher toda a tela com o conteúdo da app.

Vou aproveitar e criar um ``#wrapper`` que define esta mesma largura. Por segurança, vou adicionar o css ``margin:0 auto`` ao ``#wrapper`` para os casos em que a meta tag não funcionar ou não for aplicável (*dispositivos convencionais*). Para estes, o conteúdo será mostrado centralizado.

Vale lembrar que, para apps / websites com diferentes layouts com base em resolução, como é o caso deste blog, o ideal é usar [Media Queries](//mediaqueri.es). Em nosso projeto da app não usaremos.


### Vertical Gradient Background

O app tem um fundo em gradiente vertical que começa no topo e se torna cor sólida a partir dos **520px** de altura. Usar gradiente como ``background-image`` é um tanto complicado. Diferentes versões do mesmo browser implementam diferentes sintaxes, além dos prefixos para atender todos os browsers.

Uma referência que utilizo com frequência é o [bootstrap do twitter](//twitter.github.com/bootstrap). Ele já tem uns [mixins](//github.com/twitter/bootstrap/blob/master/less/mixins.less#L360) em [Less](//lesscss.org) com diferentes gradientes: horizontal, vertical, directional. vertical-three-colos, radial, striped. 

Só precisei adicionar ``@colorStop`` e já tenho meu conjunto de [mixins](//gist.github.com/3130835).

<pre><code class="no-highlight">#gradient .vertical(#F00, #0F0, 520px);</code></pre>

O código acima indica que a transição entre as cores terminará em 520px e que o restante será preenchido com a segunda cor.


### Background noise

Outro detalhe do fundo da app é que ele tem *noise*. Googlada rápida e logo encontro [alguém com o mesmo problema](//forrst.com/posts/Create_alpha_PNGs_of_noise-zm3). Vou precisar usar [background múltiplo](//www.css3.info/preview/multiple-backgrounds) e aplicar a imagem que eu gerar em <http://noisepng.com> em cima do meu gradiente.

Como *background-image* não tem **+=**, vou precisar criar outro mixin para adicionar ``@noise, `` no início de todas as propriedades.

<pre><code class="no-highlight">#gradient .vertical-noise(url('../images/noise.png'), #F00, #0F0, 520px);</code></pre>

Neste caso, browsers que não aceitam múltiplo background estão descartados, mas é sempre bom avaliar se isto não é problema.


### Radial Gradient Background

Por fim (hehe), o fundo tem um gradiente circular por cima de todos os outros efeitos. O gradiente é composto da mesma cor interna e externamente mas com diferentes transparências. Já temos um [mixin](//gist.github.com/3130835) e a transparência das cores iremos resolver usando [rgba](//www.w3.org/TR/css3-color/#rgba-color). 

Adicionar mais um múltiplo background e mexer no mixin não me parece prudente, tenho medo que fique complicado de depurar. Optei por aplicar o radial num pseudo elemento ``:before`` posicionado absolutamente em todos os extremos do viewport (top, right, bottom e left). 

<pre><code class="no-highlight">#element:before {
	#gradient .radial(rgba(255, 255, 0, .3), rgba(255, 255, 0, 0));
	position: absolute;
	width: 100%;
	height: 520px;
	content: '';
	top: 0;
}</code></pre>

Um detalhe é que precisamos adicionar ``content:''`` para que o pseudo elemento seja renderizado. Outro ponto importante é que não terei este background na parcela de conteúdo com dimensões maiores que a do viewport. Para nossa app isto não será problema. ;)


<br>
<br>
Por enquanto é só. A série continua em breve, espero que seja útil.


