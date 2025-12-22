---
title: Por que o input de número é o pior tipo de input
excerpt: "Você acha que um formulário web capturou seu número? Se você usou input type='number', pode se surpreender ao descobrir que não."
image: https://i.pinimg.com/originals/9d/ea/64/9dea6422afee150cbe2f65b5317285eb.gif
tags: ["Javascript", "Forms", "Acessibilidade"]
date: "2025-12-22"
---

![](https://i.pinimg.com/originals/9d/ea/64/9dea6422afee150cbe2f65b5317285eb.gif)

Esse é um artigo retirado [em inglês do Stackoverflow](https://stackoverflow.blog/2022/12/26/why-the-number-input-is-the-worst-input/)

Você acha que um formulário web capturou seu número?

Se você usou `input type="number"`, pode se surpreender ao descobrir que não.

Escrevo código há pelo menos 15 anos. Embora eu tenha usado muitas tecnologias e construído muita coisa ao longo dos anos, o que mais fiz foi **front-end**, ou seja, HTML, CSS e JavaScript. E de tudo o que construí no front-end, o que mais fiz foram **formulários**.

Não vou fingir ser o especialista definitivo em tudo relacionado a formulários. Mas posso dizer o seguinte: de todas as exigências difíceis, não convencionais e incomuns que recebi nesses 15 anos, a maioria girava em torno da construção de formulários. Cada uma apresentava um desafio que exigia algum tipo de solução fora do padrão. Aprendi muitas formas de superar esses desafios: o que você **deve fazer** e, mais importante, o que você **não deve fazer**.

De tudo o que aprendi sobre o que **não** fazer, um dos conselhos mais simples e valiosos que posso dar é este:

> **a menos que o caso de uso seja extremamente simples, evite usar o input de número.**

Vi tantos formulários problemáticos que me senti obrigado a criar meu próprio construtor de formulários, capaz de lidar com pedidos mais complexos sem a necessidade de escrever código do zero toda vez. O **Keenforms** é um construtor de formulários drag-and-drop com um mecanismo de regras _no-code_. Ele facilita a criação de funcionalidades dinâmicas e condicionais sem escrever código do zero.

Recentemente recebi alguns feedbacks sobre o Keenforms, e a crítica mais comum foi o fato de ele **não usar `<input type="number" />`**.
_Temos um campo rotulado como número, mas quando você o adiciona ao formulário, ele é renderizado como `<input type="text" />`._

> _Observação:_ o **Keenforms** realmente usa o input de número internamente, mas apenas no dashboard e somente para os casos mais simples.

## Argumentos a favor do input de número

Quem defende o uso do input de número tem preocupações legítimas, principalmente em relação à **acessibilidade**:

- Possui botões nativos de incremento/decremento
- Validação nativa para verificar se é um número
- Em dispositivos móveis, exibe teclado numérico
- Facilita o uso por leitores de tela

Também existem críticas válidas ao **uso excessivo de JavaScript** (culpado!). Eu entendo a aversão de algumas pessoas ao JavaScript. No entanto, todos os formulários complexos que construí exigiram uso intenso de JavaScript — é a única forma de fornecer feedback instantâneo e lógica condicional dinâmica. O **Keenforms** depende fortemente de JavaScript, especificamente React.

Mesmo assim, há **muitos problemas** com inputs de número quando se trata de lógica complexa e condicional — principalmente relacionados ao JavaScript — e por isso, nos últimos anos, decidi evitá-los.

Vale notar que não estou sozinho nesse posicionamento. O **governo do Reino Unido** publicou um artigo detalhando vários problemas relacionados ao input de número.

O curioso é que os problemas citados nesse artigo **nem foram os principais motivos** pelos quais decidi evitá-lo. Após receber feedbacks sobre o **Keenforms**, percebi que muitos programadores **não fazem ideia** dos problemas que o input de número causa.

A lista não é longa, mas os problemas são chocantes.

## Os principais problemas do input de número

### 1. Valores inválidos retornam string vazia

Quando o input de número contém um valor inválido e você tenta recuperá-lo, o valor retornado é uma **string vazia**.

```js
const numberInput = document.getElementById("id_here");
console.log(numberInput.value); // retorna string vazia se inválido
```

Isso acontece tanto ao acessar via `event.target.value` quanto diretamente pelo DOM.

Se você está construindo um formulário com **validações condicionais ou cálculos**, esse é um problema enorme. O input permite que o usuário digite um valor inválido, mas você **não consegue recuperar esse valor** para validá-lo corretamente.

Para idade ou quantidade simples isso pode não parecer grave, mas imagine um formulário de **seguro de vida** com regras como:

- Quantidade de dependentes define quantos formulários aninhados serão exibidos
- Percentual de benefício para cada dependente
    - Se houver apenas um dependente: campo oculto e valor automático de 100
    - Se houver mais de um: campo visível, valor mínimo de 0,01 e máximo menor que 100

- Um campo oculto que soma os percentuais e valida se o total é exatamente 100

Todos esses requisitos exigem JavaScript. E eu não consigo fazer meu trabalho sem acessar esses valores, sejam eles válidos ou não.

## Números válidos não são apenas dígitos

Esse é o outro lado do problema: o input de número permite valores que são **tecnicamente válidos**, mas que provavelmente você não quer.

Muitas vezes você usa `input type="number"` esperando um número inteiro, como idade ou quantidade. Porém, o input aceita **notação científica**, como `2.3e4`, que representa 23.000. Alguns navegadores convertem automaticamente números grandes para esse formato.

## Diferentes navegadores aceitam caracteres diferentes

### Chrome e Microsoft Edge

Caracteres permitidos:

- Números de 0 a 9
- Ponto decimal
- `-` (valores negativos)
- `+` e `e` para notação científica

Esses navegadores impedem repetir caracteres inválidos, mas permitem colocá-los em qualquer posição, tornando o valor inválido e inacessível via JavaScript.

### Firefox e Safari

Não há restrição alguma. Você pode digitar **qualquer coisa**.

Todos os navegadores exibem um popup nativo indicando valor inválido e bloqueiam o envio do formulário. Porém, essa validação visual costuma ser inconsistente com o UX da aplicação, algo que geralmente desagrada designers e product managers.

## Limites de mínimo e máximo podem ser burlados

Definir `min` e `max` é útil, e os botões de incremento respeitam esses limites. Porém, é possível **colar valores fora do intervalo**:

```html
<input type="number" min="1" max="10" />
```

Isso pode virar um problema em testes e planejamento de sprint, mesmo sendo comportamento padrão do input.

## O que usar no lugar do input de número

Use o input de número **apenas** para valores matematicamente relevantes, como idade ou quantidade. Nunca para CEP, telefone, CPF, etc.

Se o campo:

- Não tem validação condicional
- Sempre está dentro de um intervalo fixo
- Não afeta outros campos

Então usar `type="number"` não é um grande problema.

Caso contrário, **abandone-o**.

### Alternativas

- Para inteiros simples:

    ```html
    <input type="text" inputmode="numeric" pattern="[0-9]*" />
    ```

- Para casos avançados:

    ```html
    <input type="text" />
    ```

E faça toda a validação via JavaScript.

Isso exige mais esforço e perde os botões de incremento, mas é um custo que precisei aceitar para casos complexos.

## Acessibilidade ainda importa

Isso não significa sacrificar acessibilidade. Existem outras formas de atingir o mesmo resultado:

- Forçar teclado numérico em inputs de texto
- Usar rótulos claros
- Mensagens de erro compatíveis com leitores de tela

Ferramentas como o **WAVE Accessibility Tool** ajudam bastante.

É impossível entregar funcionalidades complexas usando `input type="number"`.
É uma escolha entre simplicidade ou controle total.

E, na maioria dos casos, **vale mais a pena abandonar o input de número**.
