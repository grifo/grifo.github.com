---
layout: post
title: Jquery serialize
subtitle: "Plugin para manter estado dos objetos em páginas com manipulação de DOM"
tags:
    - javascript
    - jquery
    - DOM
    - renatho
---

Hoje desenvolvemos um plugin que pode ser bem útil em projetos com funcionalidades de manipulação do DOM. A idéia do plugin é serializar o estados dos objetos, guardar em uma string e depois restaurar novamente. Este estado pode ficar guardado em location storage, cookie, ou até mesmo no objeto passado no [pushstate](https://developer.mozilla.org/en/DOM/Manipulating_the_browser_history#The_pushState(\).C2.A0method).

O plugin pode ser baixado no nosso [Git](https://github.com/grifo/grifo-jquery-plugins/blob/master/source/jquery.serializeState.js)

Exemplo que retorna um estado serializado em uma string:

    var state = $('li').serializeState('class,style')

O exemplo acima irá guardar na string 'state' todos atributos 'class' e 'style' das lis retornadas no seletor. Podemos colocar qualquer atributo necessário separando por vírgula.

Agora vejamos como restaurar isso no DOM:

    $('li').restoreState(state)

A função acima irá restaurar todas as classes e estilos que tínhamos nos elementos no momento que chamamos o serializeState.

Onde é útil: abas, accordions, menus, pushstate...

Mandem suas dúvidas e sugestões nos comentários.

Abraços e até a próxima!