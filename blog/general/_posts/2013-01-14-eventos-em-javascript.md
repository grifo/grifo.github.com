---
layout: post
title: Eventos em Javascript
subtitle: "Uma nova biblioteca surge e com ela novas maneiras de se gerenciar eventos do DOM"
author: vitor
tags:
    - Eventos
    - Javascript
---

Eventos são a base das interfaces web modernas. Muito além do simples clique, a cada novo dispositivo, novas formas de interação surgem, como controle de orientação ou interpretação de movimentos de dedos.

Ainda assim, os eventos são muito mais *baixo nível* que isto. Em Javascript, [não temos ainda nenhuma implementação nativa para cuidar deles](http://ricardo.cc/2012/08/09/Its-time-for-a-native-EventEmitter.html), mas não faltam bibliotecas com a intenção de preencher esta lacuna. Uma delas é a biblioteca [Rye](http://ryejs.com) que tem co-autoria do [Jean Carlo Emer](http://jcemer.com), o nosso líder técnico aqui na Grifo.

### Event Emitter na Rye

O paradigma de *event emitter* introduz um objeto especial a que chamamos *emitter*. Este objeto tem a função de agregar funções que serão chamadas ao momento em que um evento for emitido.

A API de [Event Emitter da Rye](http://ryejs.com/#eventemitter) segue o mesmo modelo do [Node.js](http://nodejs.org/api/events.html). Para criar um *emitter* e começar a brincar com eventos, basta escrever:

    var EventEmitter = Rye.require('Events').EventEmitter
      , emitter = new EventEmitter()

    emitter.on('open', function(){
        console.log('open')
    })

    emitter.emit('open')

Você pode criar quantos *emitters* quiser. O ideal é que você crie um para cada componente da sua aplicação. 

Caso você precise compartilhar eventos entre seus componentes, é melhor usar o padrão de [publish/subscribe](http://msdn.microsoft.com/en-us/magazine/hh201955.aspx) já [oferecido pela biblioteca](http://ryejs.com/#events-ryesubscribe). É importante lembrar que, neste caso, todos os componentes poderão ver a troca de mensagens.

    Rye.subscribe('open', function(){
        console.log('open')
    }) 

    Rye.publish('open')


### Eventos do DOM

O DOM possui suporte para eventos desde muito cedo. O uso "moderno" é baseado na implementação de *DOM Level 2*.

    document.addEventListener('click', fn)

Bibliotecas como [jQuery](http://jquery.com) dão suporte para eventos *cross-browser* com uma API bastante conhecida (os famosos `$(document).on`, `$(document).off`). 

### Eventos do DOM na Rye

A [API de eventos da Rye](http://ryejs.com/#events) é semelhante a encontrada na jQuery. A principal diferença é que não existem métodos que são *aliases* para tipos de eventos, como `.click()` e `.hover()`. 

Para remover *listeners*, temos apenas o método `.removeListener()`, o que torna o código mais simples e claro.

#### Delegate

O uso de [delegate](http://api.jquery.com/delegate) é essencial para qualquer aplicação e a jQuery, em sua versão 1.7, introduziu uma maneira simples de declarar este tipo de *listener* : `.on('click', 'button', fn)`.

A Rye introduz um jeito mais simples ainda. Basta apenas informar o descendente a ser filtrado junto ao tipo de evento: `.on('click button', fn)`.

#### Múltiplos listeners

Por consequência da sintaxe usada no *delegate*, cada evento deve ter seu *listener* declarado individualmente. Isto significa que você não pode escrever `.on('mouseenter mouseleave', fn)`. O jeito correto é: `.on('mouseenter', fn)` e depois `.on('mouseleave', fn)`, ou ainda:

    Rye(document).on({
        'click .a': fn
      , 'click': fn
    })


### DOM Event Emitter na Rye

Apesar de não dar suporte a [Namespaced Events](http://docs.jquery.com/Namespaced_Events), a Rye possui uma implementação para [DOM Event Emitter](http://ryejs.com/#domeventemitter). A ideia é que cada componente possa criar seu próprio *event emitter* interligado a um nodo do DOM. Assim, cada programador é restritamente responsável por seu componente.

    var DOMEventEmitter = Rye.require('Events').DOMEventEmitter
      , element = document.body
      , DOMEmitter = new DOMEventEmitter(element)

    DOMEmitter.on({
        'click .button': fn
      , 'mouseover li': fn
    })

    DOMEmitter.on('mousedown .that', fn)

    // remove todos os eventos associados ao emitter
    DOMEmitter.destroy()

<br>

Esta é apenas um dos *features* da Rye, que é uma biblioteca de manipulação de DOM para navegadores modernos. Uma alternativa enxuta, leve e elegante a jQuery. ;)
