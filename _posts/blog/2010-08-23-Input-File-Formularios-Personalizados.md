---
layout: post
title: Input File - Formulários Personalizados
tags:
    - html
    - forms
    - css
    - javascript
---


Vamos para o último post da série formulários personalizados. Já mostramos como personalizar o [campos de radio e checkbox](http://www.grifotecnologia.com.br/blog/css/radio-e-checkbox-formularios-personalizados/) e também um elemento [select](http://www.grifotecnologia.com.br/blog/css/combobox-formularios-personalizados/). Hoje iremos mostrar como personalizar um campo de arquivo, que é o mais simples.

As duas grandes sacadas para a personalização do input file são as seguintes:

- Utilizaremos o campo com opacidade 0 por cima do campo falso, assim como nos outros casos de personalização de formulário;
- Se você já tentou fazer esse teste, provavelmente teve problemas para aumentar o tamanho do campo conforme o layout que está trabalhando. A forma de fazer isto é aumentando o tamanho da fonte.

Vamos montar um exemplo passo a passo e no final disponibilizaremos o link com o exemplo completo. Não trapaceie, monte o exemplo com suas próprias mãos e depois veja o link.

Começamos pelo HTML:

    <div class="inputFile">
        <span>Selecione um arquivo</span>
        <input type="file" name="arquivo" id="arquivo" />
    </div>

O span será utilizado para mostrar o nome do arquivo selecionado.

Agora através do CSS vamos posicionar o input sobre o span e ocultá-lo com opacidade. Desta forma, quando o usuário clicar no span (que é o que estará visível), na verdade estará clicando no input.

    .inputFile {
        width: 185px;
        height:40px;
        position: relative;
        overflow: hidden;
        background: red;
    }
    .inputFile span {
        display: block;
        position: absolute;
    }
    .inputFile input {
        position: absolute;
        right: 0;
        z-index: 2;
        font-size: 100px; /* Aumenta tamanho do campo */
        opacity: 0;
        filter: alpha(opacity=0);
    }

Note a propriedade font-size: 100px no input. Isto é utilizado para aumentar o tamanho do campo que não respeita as propriedades width e height em alguns browsers.

Agora só falta exibir no span o valor selecionado no input. Isto é feito com poucas linhas utilizando jquery:

    $("#arquivo").change(function() {
        $(this).prev().html($(this).val());
    });

E está pronto. Simples não? Conseguiu se segurar e montar antes de abrir o link de exemplo? Então agora acesse [personalização de input file](http://www.grifotecnologia.com.br/code/formulario-personalizado/input-file.html).

As técnicas mostradas foram testadas em IE6 e superiores, Firefox 3.6, Chrome e Safari. Qualquer problema que encontrarem em outras versões de browser, mobile ou outros do gênero nos avisem para tentarmos aprimorar a técnica. Sugestões de melhoria também são bem-vindas.

Abraços e até a próxima!
