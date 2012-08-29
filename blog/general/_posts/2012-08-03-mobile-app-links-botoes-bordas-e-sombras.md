---
layout: post
title: Mobile App - Botões, bordas e sombras
subtitle: "Terceiro post da série que aborda técnicas práticas de estilização aplicando bordas e sombras além de comportamento para links e botões"
author: jean
tags:
    - css3
    - html5
    - mobile
    - buttons
    - tap highlight
    - bordas
---

Terceiro post da [série](http://gri.fo/tags/#!mobile), neste, que será o último sobre CSS, trataremos de como estilizar botões, utilizar sombras e muito mais. Vamos lá!

Nossa app tem botões semelhantes ao da imagem abaixo.

<pre><code><img src="/code/mobile-app/btn-simple.png"></code></pre>

Sabemos que algumas vezes este elemento representará botões de controle e outras links para outras seções. 

Como vamos estilizar além de `a` a tag `button`, algumas precauções precisam ser tomadas. Aplicaremos `border: none`, definiremos a altura com `line-height` e colocaremos medidas para `margins` e `paddings`. Assim asseguramos que a aparência será única em diferentes dispositivos. 

O gradiente de fundo será aplicado usando os mesmos *mixins* dos [outros posts](//gist.github.com/3130835). As bordas com diferentes cores serão com `border: solid 3px`.

### Bordas Arredondadas

Até agora não precisamos estilizar nada que tivesse bordas arredondadas. Mas para browsers modernos isto não é problema, eles implementam a propriedade  `border-radius`. O único detalhe é que precisamos adicionar [vendor prefix](http://caniuse.com/#search=border-radius) a propriedade. 

Posto isto, é melhor criarmos um *mixin* pro Less para nos auxiliar:

<pre><code class="no-highlight">.border-radius(@radius) {
    -webkit-border-radius: @radius;
       -moz-border-radius: @radius;
            border-radius: @radius;
}</code></pre>

Vamos aplicar com **6px** de curvatura.

<pre><code class="no-highlight">.btn {
    .border-radius(6px);
}</code></pre>

### Texto com Sombras

O texto do botão tem um pouco de sombra, vamos usar `text-shadow: 1px 1px 1px rgba(0, 0, 0, .3);`. Isto define uma sombra com deslocamento de **1px** para direita e rodapé, *blur* de **1px** e cor preta com opacidade de **30%**. 

Cores em RGBA dão um ótimo resultado quando aplicadas em sombras e bordas. Apenas é preciso cuidar com o [suporte dos navegadores](http://css-tricks.com/rgba-browser-support).

### Active (feedback)

É sempre uma boa prática dar um *feedback* para os usuários quando eles praticam uma ação. Para nossos botões, vamos definir um comportamento de `:active` que será disparado quando o usuário clicar (ou tocar) no botão.

<pre><code class="no-highlight">.box-shadow(@shadow) {
    -webkit-box-shadow: @shadow;
       -moz-box-shadow: @shadow;
         -o-box-shadow: @shadow;
            box-shadow: @shadow;
}

.btn:active {
    .box-shadow(inset 0 6px 20px rgba(0, 0, 0, .3))
}</code></pre>

Além disso, podemos melhorar o efeito escurecendo um pouco a borda do topo, Less nos oferece o `darken` para estes usos: `border-top-color: darken(@color-border-top, 5%)`.

#### Tap Highlight

Alguns aparelhos já [definem um comportamento](http://css-infos.net/property/-webkit-tap-highlight-color) para o *tap* (toque). Como já definimos uma estilização através de `:active`, vamos desabilitar o comportamento padrão anulando a cor aplicada da seguinte maneira:
<pre><code class="css">a, button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}</code></pre>

#### :active em Android

Um problema recorrente é que *Android* [não reconhece a pseudo classe](//pervasivecode.blogspot.com.br/2011/11/android-phonegap-active-css-pseudo.html) `:active`. Vamos precisar simular o comportamento com JavaScript e classes no CSS.

O código abaixo requer [jQuery](http://jquery.com) ou [Zepto](http://zeptojs.com).

<pre><code class="javascript">if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
    var selector = 'a, button';
    $(document)
        .on('touchstart', selector, function () {
            $(this).addClass('active');
        })
        .on('touchend touchcancel', selector, function () {
            $(this).removeClass('active');
        });
}</code></pre>

No CSS precisaremos apenas adicionar mais um seletor à regra.

<pre><code class="css">.btn:active, .btn.active {
    .box-shadow(inset 0 6px 20px rgba(0, 0, 0, .3))
}</code></pre>

<br>

O resultado final pode ser conferido no link abaixo.

<a href="http://jsbin.com/amimof/5/edit" class="btn">Demo</a>


<br>

Nos próximos posts falaremos mais sobre bibliotecas e frameworks JavaScript para mobile e em como definir o comportamento e navegação entre seções em uma app. Até breve!