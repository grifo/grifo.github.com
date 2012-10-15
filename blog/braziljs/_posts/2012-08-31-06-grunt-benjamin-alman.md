---
layout: post
title: BrazilJS - Grunt por Benjamin E Alman
subtitle: 'Grunt: uma ferramenta de build para JavaScript baseado em tarefas'
author: jean
tags:
- JavaScript
- BrazilJS
- Grunt
---

<figure>
  <img src="/images/braziljs-2012/benjamin-alman.jpg" alt="Jean Carlo e Benjamin e Alman" width="300">
  <figcaption>Jean Carlo e Benjamin e Alman</figcaption>
</figure>

Benjamin Alman colabora com o core da jQuery e escreveu uma infinidade de plugins para a biblioteca. Trabalha na [Bocoup](http://www.bocoup.com) e é criador do *Grunt*, um gerenciador de tarefas operado através da linha de comando.

Cowboy, como gosta de ser chamado, começou usando [Jake](http://github.com/mde/jake) para automatizar tarefas utilizando JavaScript.

O projeto *Grunt* surgiu da necessidade de automatizar facilmente a repetição de tarefas comuns do dia-a-dia de manter uma série de cerca de 76 projetos públicos, em todos os sistemas, que Alman mantêm em [seu GitHub](https://github.com/cowboy/grunt).

Muito popular, o *Grunt* está marcado por três mil usuários no [GitHub](https://github.com/cowboy/grunt) e tem mais de duas centenas de *forks*. Para usar, basta ter o [NodeJS](http://nodejs.org/) e [npm](http://www.npmjs.org).

    npm install -g grunt

Juntar arquivos, *minify*, executar rotinas de teste [QUnit](http://docs.jquery.com/QUnit), validar o código com [JSHint](http://www.jshint.com) e iniciar um servidor de arquivos são apenas algumas das tarefas possíveis com o *Grunt*.

Outra grande funcionalidade é usar *watch* para executar tarefas baseado na alterações no sistema de arquivos. A configuração é simples e pode ser feita através do arquivo `grunt.js` armazenado na raiz dos projetos.

Além disso, é possível estender as tarefas criando rotinas que sejam úteis e específicas para cada projeto.

Usar *Grunt* facilita a colaboração da comunidade *open source* e muitas bibliotecas, como jQuery já o adontam como padrão.