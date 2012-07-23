---
layout: post
title: Mobile App - parte 2
subtitle: "Altura da tela, imagens, sprites e fontes"
author: jean
tags:
    - css3
    - html5
    - mobile
---

Segundo post da série em que construímos do zero uma mobile web app.<br> É aconselhável conferir o [primeiro post](//gri.fo/blog/mobile-app-parte-1) para ficar por dentro dos primeiros passos.

### Altura da tela

Chegamos no ponto de pensar na altura da app. Até agora eu estava aplicando o fundo no `html` e `body`. Se o conteúdo crescer, [meu background recomeça ao fim do viewport](http://jsbin.com/apotoz/1). A solução é aplicar
    html, body { height: 100%; }
E além disso, vou precisar de outro container com css `min-height: 100%`. [Nele é que vou aplicar os fundos](http://jsbin.com/apotoz/2).

### Imagens

A tática que adotamos até o momento é desenvolver para a resolução de **640px** e forçar os dispositivos a escalar esta medida para a largura total de suas telas. Tudo funciona bem para dispositivos com largura inferior a medida, mas para os contrários, as imagens ficam com baixa qualidade.

Duas soluções me parecem possíveis: salvar as imagens em um formato vetorial ou aumentar a resolução/tamanho do bitmap. A primeira me parece um tanto complicada e desconhecida, nem todas as imagens que usarei possuem porte para vetor. 

Adotei a segunda solução e passei a salvar as imagens com o dobro do tamanho. Quando estas imagens compõe `background`, precisei adicionar ao css `background-size: 100% 100%`. 


#### Sprites
Para [sprites](http://css-tricks.com/css-sprites) algumas regras adicionais precisaram ser seguidas. Neste caso, adotei dimensões quadradas de **100x100** para cada item do sprite e utilizarei um item abaixo do outro.

O resultado é que sempre terei uma imagem com largura de **100px**. E isto é que irá determinar o tamanho de meu background através da regra `background-size: 100% auto;`. A posição também é calculada com base no número de itens que compõe o sprite, assim posso aplicar minhas imagens em qualquer container quadrado (e até retangular).

##### Sprites em LESS
Repare na medida de **50px** nos *mixins* abaixo. Lembre-se que estamos trabalhando com imagens com no mínimo o dobro de tamanho.

<pre><code class="no-highlight">@sprite-lenght: 8;
.sprite() {
    width: 50px;
    height: 50px;
    background: url('../images/sprite.png');
    background-size: 100% auto;
}
.sprite-pos(@num) {
    @calc: (100% / @sprite-lenght) * @num;
    background-position: 0 @calc, 0 0;
}</code></pre>

##### Sprites em CSS
O resultado é próximo de:

<pre><code class="no-highlight">.icon {
	width: 50px;
	height: 50px;
	background: url('../images/sprite.png');
	background-size: 100% auto;
}
.icon01 { background-position: 0 0%; }
.icon02 { background-position: 0 12.5%; }
...
.icon07 { background-position: 0 75%; }
.icon08 { background-position: 0 87.5%, }</code></pre>

### Fontes
A fonte usada na app está no [Google Web Fonts](http://www.google.com/webfonts). Aplicar usando a tag ``link`` quando se tem livre acesso ao html é mais [performático](http://www.stevesouders.com/blog/2009/04/09/dont-use-import). É isto que iremos fazer. Outra abordagem interessante quando se utiliza *Less* é criar variáveis com o nome da fonte. Cheked!