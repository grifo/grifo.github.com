---
layout: post
title: Radio e Checkbox – Formulários personalizados
tags:
    - css
    - forms
    - javascript
    - renatho
---

Neste post vou dar umas dicas de como personalizar campos de Radio e Checkbox, afinal os designers adoram nos sacanear. Quando terminar de ler aposto que você vai falar “como não pensei nisso antes?”, pois a solução além de super simples e óbvia, não perde acessibilidade, não perde usabilidade e foram utilizadas técnicas de javascript [não-obstrutivo](http://en.wikipedia.org/wiki/Unobtrusive_JavaScript).

Você já deve saber o clique em um label que referencia algum campo (Ex.: <label for="idDoCampo">) tem a função de foco para este campo. E no caso dos checkbox e radios a função é o clique do campo (marcar / desmarcar). Esta é a essência da solução. Já começou cair a ficha né?

Nosso HTML será composto por uma label que encapsula o input e o texto, desta forma tudo que estiver dentro do label estará na área clicável.

Veja o código:

    <label for="radioButton1">
        <input type="radio" name="radioButton" id="radioButton1" /> Radio 1
    </label>
    <label for="radioButton2">
        <input type="radio" name="radioButton" id="radioButton2" /> Radio 2
    </label>
    <label for="checkbox1">
        <input type="checkbox" name="checkbox" id="checkbox1" /> Checkbox 1
    </label>
    <label for="checkbox2">
        <input type="checkbox" name="checkbox" id="checkbox2" /> Checkbox 2
    </label>

Através do CSS vamos ocultar os inputs e fazer a personalização sacana que o designer desenhou.

    .styleRadio input, .styleCheckbox input {
       cursor:pointer;
       filter:alpha(opacity=0);
       opacity:0;
    }

    .styleRadio, .styleCheckbox {
       cursor:pointer;
       height:30px;
       background:url(controls.gif) no-repeat;
    }

    .styleRadio {
       background-position:0 -500px;
    }
    .styleCheckbox {
       background-position:0 0;
    }

Beleza! já tá funcionando, não está vendo ainda? Usuários cegos já, pois o código está acessível.

Ok, vamos deixar acessível sem screen reader também. Para isso a Grifo fez um plugin do jquery <del>exclusivamente</del> para você, leitor do nosso blog. O plugin pode ser baixado neste link: [styleRadioCheckbox](http://www.grifotecnologia.com.br/code/formulario-personalizado/jquery.styleRadioCheckbox.js).

O plugin trabalha com a estrutura HTML que citamos acima. Você precisará criar 2 classes além da classe para estado normal dos inputs: uma classe para ele marcado e outra para o foco.

**Exemplo:**

    .inputRadioChecked {
       background-position:-500px -500px;
    }
    .inputCheckboxChecked {
       background-position:-500px 0;
    }
    .inputFocus { /* Este está genérico nos para radio e checkbox, mas também pode ser uma classe para cada */
       border:dotted 1px #CCC;
    }

Agora só falta a chamada do plugin, onde passaremos por parâmetro as classes de estados criadas no passo anterior.

Código de chamada do plugin:

    $("input:checkbox").styleRadioCheckbox({
       classChecked:"inputCheckboxChecked",
       classFocus:"inputFocus"
    });
    $("input:radio").styleRadioCheckbox({
       classChecked:"inputRadioChecked",
       classFocus:"inputFocus"
    });

Pronto. Agora tudo está funcionando! Mas espere aí, no início do post não dizia que a técnica era feita com javascript não-obstrutivo? Desativando o javascript não está funcionando. – Pergunta pro usuário cego se não está funcionando, aposto que pra ele tá que é uma beleza. Mas ok, vamos achar uma solução para ficar acessível sem screen reader de novo.

Para solucionar este problema iremos inserir uma tag noscript que vai exibir os inputs novamente:

    <noscript>
      <style type="text/css">
      .styleCheckbox input, .styleRadio input {
         filter:alpha(opacity=1);
         opacity:1;
      }
      </style>
    </noscript>

As técnicas mostradas foram testadas em IE6 e superiores, Firefox 3.6, Chrome e Safari. Qualquer problema que encontrarem em outras versões de browser, mobile ou outros do gênero nos avisem para tentarmos aprimorar a técnica. Sugestões de melhoria também são bem-vindas.

Veja um exemplo de [personalização de radio e checkbox](http://www.grifotecnologia.com.br/code/formulario-personalizado/jquery.styleRadioCheckbox.html) em funcionamento.

Abraços e até a próxima!
