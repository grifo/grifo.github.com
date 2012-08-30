---
layout: post
title: 'BrazilJS - ECMAScript 6 por Dave Herman'
subtitle: Profundo mergulho em três das features favoritas do Dave Hermand no ES6
author: jean
tags:
- JavaScript
- BrazilJS
- ES6
---
Dave Herman trabalha no Mozilla Research com tecnologias que serão lançadas em alguns anos. O início da palestra é marcado com o anúncio exclusivo do livro *Effective JavaScript* que será lançado em dezembro.

### Symbols

As propriedades dos objetos no JavaScript são strings e esta liberdade de definir qualquer nome acabou por criar alguns padrões. 

A exemplo, temos o famoso `_` usado como indicativo de que a propriedade é privada. O problema desta abordagem é que na verdade não temos uma propriedade privada. Uma tentativa mais prática de se armazenar dados de forma privada é usando *closures*.

ECMAScript 6 introduz o conceito de *symbols* que podem ser usados como chave de propriedades. Desta maneira é possível criar chaves únicas para nossas propriedades.

    var sym = new Symbol('data');
    function Class() {
        this[sym] = 'private data';
    }


### Structs

A intenção das *structs* é poder garantir maior controle para o desenvolvedor trabalhar com dados no JavaScript. Isto possibilita ter uma representação específica para vértices de uma figura tridimensional, por exemplo.

    var Point = struct({
        x: uint32,
        y: uint32,
        z: uint32,
    });
    var origin = new Point(0, 0, 0);

Compiladores operam muito melhor com variáveis tipadas. E as *structs* podem ser usadas para dados WebGL, arquivos e I/O de rede além de compilar outras linguagens para JavaScript.

### Generators

    function eventNumbers() {
        for (var next = 0; true; next += 2) {
            yield next;
        }
    }

A cada chamada da função, o retorno será incrementado em dois números. A implementação é muito próxima de Python.

O uso de *yield* indica que temos uma grande pausa na execução de nossa rotina. Desta maneira, podemos esperar a requisição de informação ou a entrada de dados pelo usuário.

Dave introduz [taskjs.org](http://taskjs.org), uma biblioteca que funciona apenas em browsers que implementam Generators.

#### Promises

    load('config.json')
        .then(function doThat() { ... })
        .then(function doThis() { ... })

As instruções acima indica que o arquivo *config.json* deve ser carregado e que logo após *doThat* e *doThis* deve ser executado.

#### Yield

O *yield* opera disparando nossas *promises*. Uma possibilidade incrível é carregar uma série de arquivos e disparar uma *callback* apenas quando todos forem completamente carregados.

---

Como encerramento temos um *brainfuck* escrito em JavaScript. A explicação é um tanto engraçada e complicado, o mistério é relevado, o resultado do código é `javascript`.


