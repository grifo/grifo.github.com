---
layout: post
title: BrazilJS - CSS por Bernard de Luna
subtitle: Estilizando Folhas de Estilo com Estilo
author: jean
tags:
- JavaScript
- BrazilJS
- CSS
---

Bernard trabalha como diretor criativo da Melt, empresa de compra de mídia em tempo real. Sua palestra é muito descolada e cheia de citações próprias

> Desenvolvedores não sabem CSS. Nem **Deus** sabe CSS - Bernard

O principal argumento é de que o *CSS* é muito fácil e qualquer um consegue fazer. Toda a interação é baseada em tentativa e erro até o ponto em que temos um *stylesheet*.

### Performance

> Não perca tempo discutindo entre usar CLASS ou ID - Luna

Quando falamos de performance, *Key selector* logo vem a mente. Toda seleção de CSS começa a ser avaliada da direita, um detalhe que muitos não dão atenção. Quanto menos itens usarmos na seleção, melhor a performance.

Evite usar o seletor universal `*`, que obrigado o navegador a buscar por **todas** as tags do seu website. E ainda, cuidado com o seletor universal invisível. ``body [type="text"]`.

Outro vilão é o `@import`, que bloqueia o processamento da folha de estilo a espera das requisições complementares, não use, [já blogava em 2009 Steve Souders](http://www.stevesouders.com/blog/2009/04/09/dont-use-import).

Seletores CSS3 podem influenciar sua performance, cuidado com `:first-child`, `:nth-child`, `:only-child` entre outros. 

> [...] Considere usar classes específicas na marcação. - David Hyatt

Por incrível que pareça, `border-radius` possui custo de renderização maior que sombras e gradientes.

E não se esqueça, defina o tamanho das imagens na sua folha de estilo, isto dá um ganho de performance e permite tornar seu site responsivo.

#### Reflow & Repaint

Manipulações de tamanho e posição do objeto geram *reflow*, posicione os elementos absolutamente e evite que animações ativem este comportamento. Mais que isto - e aqui é dica minha - **use transform**.

### Modularização

Infelizmente os desenvolvedores não seguem o básico, classes com nome dado pela aparência ou texto não são nada legais. Muito mais que isto, adote um padrão e evite abreviações desnecessárias.

Bernard lista algumas das metodologias para escrita de estilo:

**DRY CSS:** a proposta do *não repita seu código* tem um grande *mistake*, vincular suas classes com o estilo dos elementos.

**OOCSS**: prega a separação da estrutura e do estilo e da criação de elementos globais.

**SMACSS**: categorização do CSS em base, *layout*, *modules*, *states* e *theme* tudo isto independente e, infelizmente, engessado e fechado.

**BEM**: módulos independentes, complexidade elevada e nomenclatura engessada e falha.

#### LESS / SASS

Particularmente não consido ver o desenvolvimento frontend sem base em um bom pré-processador de CSS, seja ele qual for. As principais vantagens são as possibilidades de armazenar variáveis, fontes, espaçamentos além do uso de *mixins* [para driblar *vendor-prefixed properties*](http://lesselements.com.

<br>

Tratando-se de formulários, vale a pena conferir o projeto [Formee](http://formee.org/), framework de formulários criado pelo Bernard e outros membros da equipe da Petrobrás. É um tremendo sucesso com mais de trinta mil downloads, totalmente modularizado e acompanhado de uma completa gama de *grids* e objetos padronizados.

E as dicas finais de modularização são: documente seu código, crie uma [página com objetos padrões](http://twitter.github.com/bootstrap/base-css.html) e trabalhe em equipe!

### Mágica

> Brinque mais, surpreenda, reeinvente! - Bernard

Luna definitivamente conquistou a platéia com bons experimentos de uso de CSS, vale conferir o [post do Zeno que explica como fizeram o Old Radio](http://blog.zenorocha.com/post/27569632629/como-fizemos-o-oldradio). 

<br>

Eu já tinha conferido os slides desta palestra, que havia sido apresentada na [QConSP](http://qconsp.com), e foi uma satisfação ve-la ao vivo, ótimo palestrante!