
---
layout: post
title: Solucionando o Code Golf + Maratona IG com Javascript
author: ricardo
tags:
    - code golf
    - javascript
    - php
    - FISL
---

Semana passada Porto Alegre recebeu o [FISL](http://fisl.softwarelivre.org/), que reuniu mais de 8 mil pessoas no campus da PUC. Estivemos lá pra conferir as palestras envolvendo HTML5, CSS, Javascript, acessibilidade e novas tecnologias/projetos.

No meio tempo entre trabalho e palestras resolvi participar do [Code Golf](http://ignofisl.ig.com.br/2010/07/21/faq-do-code-golf/) do IG: resolver [os 5 problemas](http://ignofisl.ig.com.br/2010/07/22/problemas-do-code-golf/) dados com o menor código possível. O ganhador de cada categoria levou um iPod touch. Já que Javascript não era um opção, foi PHP mesmo. Depois de uma disputa acirrada e de ter ficado em segundo lugar até meia hora antes do final, a [pontuação](http://ignofisl.ig.com.br/2010/07/23/ranking-code-golf/) foi atualizada e terminei em primeiro!

Neste post vamos ver como ficaram as soluções em PHP, e também em Javascript. Pra isso vamos utilizar o [JSDB](http://www.jsdb.org/), que interpreta Javascript usando a engine [SpiderMonkey](http://www.mozilla.org/js/spidermonkey/) da Mozilla e nos dá acesso ao sistema de arquivos, banco de dados e web. Ele roda em Linux, Mac e Windows e não exige instalação: é só baixar, descompactar e começar a usar. Vamos resolver também o problema da [Maratona IG](http://ignofisl.ig.com.br/2010/07/22/desafio-maratona-ig/) em menos de 15 minutos usando Javascript.

> Soluções [1](#q1), [2](#q2), [3](#q3), [4](#q4) e [5](#q5) do Code Golf

> [Solução da Maratona](#maratona)

Vamos ao código:

<h2 id="q1">Questão 1</h2>
**Dado o número de iterações exibir a sequência de Fibonacci até aquela iteração**

    entrada: 6
    saida: 1, 1, 2, 3, 5, 8

### PHP

Esse foi o código final (pra economizar espaço, colocamos tudo dentro de um for loop):

    for($a=$c=0,$b=1;$c<$argv[1];$x=$a,$a=$b,$b+=$x)echo(!$c++?'':', ').$b;

Começamos com 0 e 1 e somamos o último com o anterior até atingir o número de iterações. Em PHP é impossível fazer isso sem utilizar uma terceira variável. A solução mais simples em Javascript é utilizar um array:

### Javascript

    var a = 0
      , b = 1
      , i = 0
      , numeros = [1]

    while(++i < jsArguments[0]){
        numeros.push( b=a+(a=b) )
        /* isso é possível porque a variável "a" à esquerda
        da expressão (a=b) continua com o valor antigo,
        o que não acontece no PHP */
    }
    writeln(o)
    // $ ./jsdb q1.js 6 > 1, 1, 2, 3, 5, 8

Deixando o array – e a legibilidade do código – de lado, o resultado final é um pouco mais compacto:

    for(a=c=b=1;c++<=jsArguments[0];print((b=a+(a=b))-a+' '))

<h2 id="q2">Questão 2</h2>
**Dado uma frase retornar se é um palíndrome ou não e listar os caracteres em ordem decrescente de número de incidências na mesma**

    entrada: “A mala nada na lama”
    saída:
      Palíndrome
      8 a
      2 m
      2 n
      2 l
      1 d

### PHP

As funções count_chars e strrev tornam o trabalho fácil:

    $s=str_replace(' ','',$argv[1]);
    echo($s!=strrev($s)?"Não é ":"")."Palíndrome";$c=count_chars($s,1);
    arsort($c);foreach($c as $i=&gt;$v)echo"\n$v ".chr($i);

### Javascript

Já em Javascript a coisa é mais complicada. O método reverse() só existe para arrays. Temos que fazer a inversão da string e a contagem por nossa conta:

    // removemos espaços e outros caracteres da string
    var str=jsArguments[0].toLowerCase().replace(/\W/g,'');

    // verificamos se o inverso é igual
    println( (str!=str.split('').reverse().join('') ? "Não é " : "")+"Palíndrome");

    // contamos os caracteres usando um array
    var chars = [];
    for(var i in str){ // não façam isso em casa
        var key = str[i];
        chars[key] = chars[key]+1 || 1;
    }

    // exibimos a contagem pra cada letra
    for(var n in chars){
        println(chars[n]+" "+n);
    }

E depois transformamos de novo isso tudo em uma linha ininteligível:

    s=jsArguments[0].toLowerCase().replace(/\W/g,'');
    println((s!=s.split('').reverse().join('')?"Não é ":"")+"Palíndrome");
    c=[];for(i in s){k=s[i];c[k]=c[k]+1||1;}for(n in c)println(c[n]+" "+n);

<h2 id="q3">Questão 3</h2>
**Dado um endereço IP e uma máscara de rede, retornar o endereço de broadcast e a conotação CIDR da rede**

    entrada: 201.94.10.19 255.255.255.0
    saída: 201.94.10.255 /24

Essa é assustadora. Mas depois de consultar a Wikipedia sobre o assunto se descobre que a matemática é simples, e que [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) é uma gambiarra que inventaram pra usar um mesmo IP em mais de uma máquina, em redes internas. Temos que fazer o seguinte:

- Descobrir o complemento de cada pedaço da subnet mask (255.255.255.0), no caso do exemplo 0.0.0.255
- Aplicar o operador [bitwise OR](http://en.wikipedia.org/wiki/Bitwise_operation#OR) à cada parte do IP e o complemento da máscara (ex: 255|0)

O resultado disso é o endereço de broadcast. Depois, precisamos transformar o IP resultante em binário, e contar quantos bits “1″ ele contém. Essa é a conotação CIDR. Vamos ao código:

### PHP

    $b='';$c=0;$m=explode(".",$argv[2]);
    foreach(explode('.',$argv[1]) as $k=>$v){$b.=($k?'.':'').($v|255-$m[$k]);
    $c+=substr_count(decbin($m[$k]),1);}echo "$b /$c";

### Javascript

    var
        cidr = 0,
        ip = jsArguments[0].split('.'),
        mask = jsArguments[1].split('.');

    // encontramos o broadcast address
    // usando a fórmula descrita
    var broadcast = ip.map(function(val,key){
        return val | (255-mask[key]);
    }).join('.');

    // e calculamos o CIDR por partes
    mask.forEach(function(val){
        // primeiro convertemos o valor para Number
        // e depois para string usando base 2 (binário)
        // ex: 252 > 11111100
        // e então contamos quantos "1"s na string
        cidr += (+val).toString(2).split('1').length-1;
    });

    //saida
    writeln(broadcast+" /"+cidr);

O resultado final é muito mais longo do que em PHP pelas várias chamadas de função, mas ainda pode ser reduzido:

    c=0;i=jsArguments[0].split('.');m=jsArguments[1].split('.');
    b=i.map(function(v,k){return v|(255-m[k])}).join('.');
    m.forEach(function(v){c+=(+v).toString(2).split('1').length-1});
    writeln(broadcast+" /"+cidr);

<h2 id="q4">Questão 4</h2>
**Dados dois números naturais m e n e duas sequências ordenadas com m e n números inteiros, obter uma única sequência ordenada contendo todos os elementos das sequências originais sem repetição**

    entrada: 1,5,6,10,12  2,5,9,29
    saída: 1, 2, 5, 6, 9, 10, 12, 29

Mais uma vez as funções nativas do PHP fazem todo o trabalho. Em Javascript é mais divertido.

### PHP

    $a=array_unique(explode(',',$argv[1].','.$argv[2]));
    sort($a);echo implode(',',$a);

### Javascript

    var
        resultado = [],
        a1 = jsArguments[0].split(',')
        a2 = jsArguments[1].split(','),
        arr = a1.concat(a2);

    // inserir valor em unique somente se
    // ainda não existe valor igual no array
    arr.map(function(val){
        if (resultado.indexOf(+val)<0)
            resultado.push(+val);
    })
    // pôr em ordem numérica (asc)
    resultado = resultado.sort(function(a,b){
        return a>b;
    });

    writeln(unique);
    // saída:
    // $ ./jsdb q4.js 1,4,2,5,6 1,2,6,3
    // 1, 2, 3, 4, 5, 6

Podemos pular algumas etapas pra encolher o código:

    u=[];a=jsArguments.join().split(',');
    a.map(function(v){u.indexOf(+v)<0&&u.push(+v)});
    u=u.sort(function(a,b){return a>b});writeln(u);

<h2 id="q5">Questão 5</h2>
**Escreva uma função que recebe uma matriz de caracteres 8×8 representando um tabuleiro de xadrez e calcula o valor total das peças do jogo. Espaços vazios do tabuleiro são codificados como casas com ‘v’ e têm valor 0 (zero). O valor das demais peças é dado de acordo com a tabela: Peão (p): 1, Cavalo (c): 3, Bispo (b): 3, Torre (t): 5, Rainha (a): 10, Rei (r): 50, Vazio: (v)**

    entrada: 
      tcbarbct
      pppppppp
      vvvvvvvv
      vvvvvvvv
      vvvvvvvv
      vvvvvvvv
      pppppppp
      tcbarbct
    saída: 180

Não se preocupe com a idéia do tabuleiro, só precisamos traduzir o valor de cada caractere válido na string e ignorar o resto. Solução simples: fazer um loop com todos os caracteres e usar como chave pra buscar no array de valores. Em PHP nem isso precisa, a função count_chars() já faz a contagem:

### PHP

    $s=0;$v=Array('p'=>1,'c'=>3,'b'=>3,'t'=>5,'a'=>10,'r'=>50,'v'=>0);
    foreach(count_chars(preg_replace('/\W/','',$argv[1]),1) as $c=>$n){
    $s+=$v[chr($c)]*$n;};echo$s;

### Javascript

    var
        valores = { p:1, c:3, b:3, t:5, a:10, r:50 },
        // remover todos os caractere não alfanuméricos
        pecas = jsArguments[0].replace(/\W/g,''),
        pontos = 0;

    for(var i in pecas){
        pontos += valores[ pecas[i] ] || 0;
    }
    writeln(pontos);

E a versão condensada, usando o método replace() para o loop:

    v={p:1,c:3,b:3,t:5,a:10,r:50};p=jsArguments[c=0].replace(/\w/g,function(a){c+=v[a]||0});writeln(c);

<h2 id="maratona">Maratona IG</h2>

O [desafio da Maratona](http://ignofisl.ig.com.br/2010/07/22/desafio-maratona-ig/) era o seguinte: a partir de um arquivo texto de 57Mb contendo tweets em JSON, fazer a contagem dos tweets contendo sentimentos “positivos” ou “negativos”. A contagem com a menor margem de erro vence. O problema maior aqui é deduzir qual o tipo de filtro utilizado como referência.

Uma olhada rápida no arquivo de dados nos mostra que as mensagens variam entre os termos feliz/amo/adoro e triste/odeio. Isso é tudo que precisamos saber, agora basta uma expressão regular. Como a chance de uma das palavras-chave aparecer em qualquer outro lugar do objeto é praticamente nula, nem precisamos interpretar o JSON.

    var
        positivo = /feliz|gosto|gostei|amo|amei|adoro|adorei/i,
        negativo = /triste|odeio|odiei/i,
        p = 0,
        n = 0,
        line, tweets;

    // carregamos o arquivo como Stream
    tweets = new Stream(jsArguments[0], 'rt');
    // e lemos linha por linha
    while (line = tweets.readLine())
    {
        if(negativo.test(line))
            n++;
        else if(positivo.test(line))
            p++;
    }

    writeln("Tweets Positivos:"+p);
    writeln("Tweets Negativos:"+n);

E temos o resultado:

    Tweets Positivos: 35507
    Tweets Negativos: 4307

No [resultado da maratona](http://ignofisl.ig.com.br/2010/07/24/resultado-da-maratona/) podemos calcular os números ideais:

    Positivos: 35322
    Negativos: 4316

A margem de erro do código acima é de 0.005% e 0.003% (positivos/negativos), e o código foi desenvolvido em menos de 15 minutos. A execução também é muito rápida, leva pouco mais de 5 segundos, e isso com SpiderMonkey que não é das engines JS mais rápidas.

O prêmio que a dupla vencedora levou: **dois iPads**.

Encontrou algum bug no código ou sabe de uma maneira melhor? Também acha que javascript deve ser uma opção nesse tipo de competição? Deixe um comentário abaixo.
