---
layout: post
title: Gradientes no IE9
tags:
    - ie
    - css3
    - svg
---

Aqui na Grifo já estamos preparando nossos projetos para o IE9, usando o Beta/Platform Preview. É muito bom poder usar seletores CSS3, border-radius, shadow e tudo o mais.

Mas ainda falta uma peça crucial: background gradients. Não há menção pela Microsoft de suporte futuro a essa funcionalidade no IE9, o que nos preocupa bastante. Estamos usando o CSS3Pie em alguns projetos, que nos permite definir sombras, border radius e gradientes no CSS, que são renderizados via VML no IE 6, 7 e 8. Como o IE9 não suporta mais VML, ficamos de mão abanando.

Sorte nossa é que a versão 9 suporta SVG. A solução que encontramos utiliza CSS, SVG e um script server-side: geramos um gradiente dinamicamente a partir de parâmetros passados no CSS. O resultado no CSS é meio gordo mas funciona em praticamente todos os browsers, do IE6 ao Opera. Veja o código abaixo:

**gradient.php**

    <?php
        header( 'Content-type: image/svg+xml' );
        function _get($k){  echo $_GET[$k] ? $_GET[$k] : 'fff'; }
    ?>

    <?xml version="1.0" standalone="no"?>
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#<?php _get('from') ?>; stop-opacity:1"/>
                <stop offset="100%" style="stop-color:#<?php _get('to') ?>; stop-opacity:1"/>
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>

**CSS**

    #xis {
        background: #dbdbdb; // fallback para browsers sem suporte
        background: url(gradient.php?from=ededed&to=d8d8d8); // IE9, Opera
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ededed), to(#d8d8d8)); //Chrome, Safari, Mobile Webkit
        background: -moz-linear-gradient(top, #ededed, #d8d8d8); // Firefox
        -pie-background: linear-gradient(#ededed, #d8d8d8); // IE 6-8
        behavior: url(../js/PIE.php);
    }

Uma baita mão escrever tudo isso só pra um gradiente, não? Por isso usamos o [LESS](http://lesscss.org) no desenvolvimento. Com esse mixin:

    .gradient(@from, @to){
        background: (@from+@to)/2;
        @svgG: e(%('url(gradient.php?from=%d&to=%d)', @from, @to));
        @svgGradient: e(`this.svgG.toJS().replace(/#/g, '')`); //svg IE9
        background: @svgGradient;
        background: e(%('-webkit-gradient(linear, 0% 0%, 0% 100%, from(%d), to(%d))', @from, @to));
        background: e(%('-moz-linear-gradient(top, %d, %d)', @from, @to));
        -pie-background: e(%('linear-gradient(%d, %d)', @from, @to));
        .pie();
    }

Só precisamos escrever isso no CSS:

    #xis {
      .gradient(#fcfcfc, #999999);
    }

Exemplo [aqui](http://gri.fo/code/svg-gradient/CSS_SVG.html).

A limitação no momento é que só funcionam gradientes lineares verticais, mas é só alterar o código server-side que podemos gerar qualquer tipo de gradiente.
