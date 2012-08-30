---
layout: post
title: BrazilJS - tracking.js por Eduardo Lundgren
subtitle: O tracking.js traz pra web técnicas de rastreamento de elementos de uma cena real capturada pela câmera
author: renatho
tags:
- JavaScript
- BrazilJS
- IHC
---
Eduardo Lundgren, líder de desenvolvimento na Liferay, iniciou sua palestra falando sobre IHC e Realidade aumentada. Utilizou alguns exemplos de hardware que já são mais conhecidos, como Kinect, PS Move e Wii.

Eduardo apresentou uma API que está desenvolvendo em JavaScript para rastrear objetos em imagens da câmera do usuário. Sua utilização não depende de nenhum plugin e parece bem simples de se utilizar (em browsers modernos, obviamente).

Exemplo de utilização:

	var videoCamera = new tracking.VideoCamera().render().renderVideoCanvas();

	videoCamera.track({
	    type: 'color',
	    color: 'magenta',
	    onFound: function(track) {
	        console.log(track.x, track.y, track.z);
	    },
	    onNotFound: function() {}
	});

Atualmente ele faz o rastreamento com identificação de cores e está em desenvolvimento um algoritmo nomeado como HAFT (Hand and Face Tracking) para identificar rosto e mãos das pessoas.

A API ainda não possui uma documentação, mas segundo o Eduardo é bem fácil entender como utilizar.

Mais informações sobre a API podem ser encontradas em: [trackingjs.com](http://trackingjs.com)
Twitter do Eduardo: @eduardolundgren
Para contribuir com o projeto, faça fork no repositório do [GitHub](https://github.com/eduardolundgren/tracking.js)