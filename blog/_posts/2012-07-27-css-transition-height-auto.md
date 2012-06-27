---
layout: post
title: CSS transition com height auto
subtitle: "Como fazer um transition na altura de um elemento quando não conhecemos a altura dele"
tags:
	- css
    - css3
    - transition
    - renatho
---
Quem já está se aventurando nos transitions do CSS3 já deve ter passado por um problema que é animar a altura de um elemento sem conhecer a altura final dele, ou seja, um container com conteúdo dinâmico. Isso não funciona porque o transition só funciona com valores estáticos, como animar de 0 para 100px.

Agora você deve estar achando que é impossível fazer animações como slideUp e slideDown do jquery... Mas encontramos uma solução: o max-height. Ao invés de fazermos o transition no height, fazemos no max-height, pois a animação será feita de um valor estático para outro. Você só precisa cuidar para colocar uma altura segura que seu conteúdo nunca chegará.

	li { overflow: hidden; max-height: 500px; -webkit-transition: all 0.3s ease-in-out; -moz-transition: all 0.3s ease-in-out; -o-transition: all 0.3s ease-in-out; transition: all 0.3s ease-in-out; }
	li.closed { max-height: 0; }

Preste atenção no momento de escolher o tempo e o tipo \(linear, ease, ease-in...) da animação utilizada para não ficar estranho, pois a animação será um pouco mais longa do que o usuário percebe. No nosso nosso exemplo do 0 ao 500, apesar de que o usuário só verá até a altura do conteúdo que poderá ser 100px, por exemplo.

Mandem suas dúvidas e sugestões nos comentários.

Abraços e até a próxima!