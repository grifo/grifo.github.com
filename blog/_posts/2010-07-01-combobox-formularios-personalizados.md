---
layout: post
title: Combobox – Formulários personalizados
tags:
    - html
    - css
    - forms
    - javascript
    - renatho
---

Dando sequencia à série de Posts de formulários personalizados, hoje falaremos do combobox (select). Esta é outra técnica que não perde acessibilidade, não perde usabilidade e utiliza [javascript não-obstrutivo](http://en.wikipedia.org/wiki/Unobtrusive_JavaScript).

O resultado final do que explicaremos aqui será um select oculto com um span o sobrepondo e exibindo o valor. Ao clicar no select as opções dele são exibidas normalmente da forma nativa.

O único problema desta técnica é que não funciona no [IE6](http://ie6funeral.com/) (segundo o Jeremias: [“IE IE IE é safado tem q morrer“](http://www.youtube.com/watch?v=2hjnbraEL4A#t=0m30s)), pois ele <del>(browser burro)</del> não suporta opacidade no select, então para IE6 podemos apenas colocar uma cor de fundo no select para não destoar muito do desenho – Isto chama-se *[graceful degradation](http://www.css3.info/graceful-degradation/)* (que por sinal também merece um futuro post).

Como é de praxe, começamos pelo HTML:

    <div class="styleCombobox">
        <select title="Selecione">
            <option value="1">Opção 1</option>
            <option value="2">Opção 2</option>
             <option value="3">Opção 3</option>
        </select>
    </div>

Utilizamos uma div encapsulando o select, pois através do script vamos inserir um span antes do select exibindo o valor selecionado. No atributo title podemos inserir um valor inicial (valor que não precisa aparecer nas opções da combobox – ex.: “Selecione uma opção”).

Agora vamos criar um CSS para os estilos da nossa combobox conforme o desenho. No nosso exemplo colocaremos apenas um background cinza para não sair do foco do post.

Além dos estilos do desenho, vamos deixar o select sem opacidade – Os browsers ocultam somente a parte do valor do select, então quando clicarmos nele as opções serão exibidas.

    .styleCombobox {
      width:200px;
      background:gray;
    }
    .styleCombobox span {
      position:absolute;
    }
    .styleCombobox select {
      width:100%;
      opacity:0;
      filter:alpha(opacity=0);
    }

No script que estamos disponilibizando também colocamos a funcionalidade de foco para o select, então precisamos criar outro estilo para ele:

    .comboboxFocus {
      border:dotted 1px #CCC;
    }

Como comentado no início do post, no caso do IE6 você pode criar hacks para alterar as cores do select para ficar mais próximo do desenho, mas não entraremos no mérito.

Agora você precisa baixar o plugin desenvolvido pela Grifo neste link [styleCombobox](http://www.grifotecnologia.com.br/code/formulario-personalizado/jquery.styleCombobox.js) e importá-lo na sua página. A chamada fica dessa forma:

    $(".styleCombobox select").styleCombobox({
        classFocus:"comboboxFocus"
    });

Para usuários com javascript desabilitado, vamos exibir os selects normais do browser com o noscript:

    <noscript>
      <style type="text/css">
      .styleCombobox select {
        filter:alpha(opacity=1);
        opacity:1;
      }
      </style>
    </noscript>

As técnicas mostradas foram testadas em IE6 (apesar de neste funcionar parcialmente) e superiores, Firefox 3.6, Chrome e Safari. Qualquer problema que encontrarem em outras versões de browser, mobile ou outros do gênero nos avisem para tentarmos aprimorar a técnica. Sugestões de melhoria também são bem-vindas.

Veja um exemplo de [personalização de combobox](http://www.grifotecnologia.com.br/code/formulario-personalizado/jquery.styleCombobox.html) em funcionamento.

Abraços e até a próxima!
