---
layout: post
title: BrazilJS - Web app ou aplicativo nativo por Renato Mangini
subtitle: Mangini fala sobre Chrome Packaged Apps (CPA)
author: leandro
tags:
- JavaScript
- BrazilJS
- CPA
---
Renato é engenheiro do Google alocado no Brasil e um dos responsáveis na gigante por levar o melhor da experiência nativa para um contexto web. 

O meio são as *Chrome Packaged Apps* que oferencem APIs com acesso a aspectos antes disponíveis apenas para aplicações nativas. Através de uma CPA, conceito ainda em desenvolvimento, é possível desenvolver com acesso direto ao hardware, por exemplo.

As CPA invertem a mentalidade de desenvolver *online first* e depois adaptar para offline. A prática atual é custosa e inviável e as CPAs vem para tentar resolver isto.

As principais vantagens das CPAs são:
* Out of browser - executa independente do browser
* Look and Feel nativo
* Mais *poder* para o desenvolvedor

### Segurança

Content Security Policy (CSP) - a segurança é mais restrita que aplicativos feitos para rodar no browser, pois é executado independentemente em uma *sandbox*. Além disso, utiliza um modelo de permissão up front, evitando diálogos desnecessários com o usuário (permissão a cada vez que utilizar webcam, sistema de arquivos, etc).

Atualmente há suporte apenas para o Chrome Beta, Canary e Developer, mas futuramente estará disponível na versão estável.

A aprensentação terminou com uma demonstração impressionante de um CPA controlando as luzes do teatro.

Tudo e muito mais pode ser encontrado no [Github](https://github.com/GoogleChrome/chrome-app-samples) e também em [http://developer.chrome.com/apps](http://developer.chrome.com/apps/).
