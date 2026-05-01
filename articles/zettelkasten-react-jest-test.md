---
title: Zettelkasten - Jest e React Testing
excerpt: "Isso é o Zettelkasten, isso é basicamente um _note-taking_ dos meus estudos. Será apenas consultado em revisões futuras. Fique à vontade para usar como base de estudos, se necessário."
image: https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/10/o-que-e-e-como-comecar-com-golang.jpg
tags: ["Zettelkasten", "React Testing", "Jest"]
date: "2026-04-27"
---

![](https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/10/o-que-e-e-como-comecar-com-golang.jpg)

Isso é o Zettelkasten, isso é basicamente um _note-taking_ dos meus estudos. Será apenas consultado em revisões futuras.

Fique à vontade para usar como base de estudos, se necessário.

---

Usemos como exemplo essa linha de código.

```js
describe(Counter, () => {
    it("something will happens", () => {
        const { getByTestID } = render(<Counter initialCount={0} />)
        const countValue = getByTest("count").textContent
        expect(countValue).toEqual(0)
    })
})
```

Nela, temos o `describe`, que é uma função de descrição. `it` que é uma outra função para fazer algo, `render` que vem através do `@testing-library/react` que irá renderizar, então, no caso, se a função `Counter` não for algo renderizável, ele irá dar erro, `getByTestId` que irá pegar o valor, `expect()` que irá esperar algo.

Então vamos ir com mais detalhes.

- `describe`, como informado, é uma função de descrição, nela vamos colocar que função que estamos utilizando para o nosso teste.
- `it` é uma função de teste com informação, nela, primeiramente informaremos o que irá acontecer e em seguida o teste em si.
- `render` ele é uma, de várias opções, que irá testar a renderização daquele componente.
- `Counter` é uma função que irá aumentar e diminuir o valor de um estado.
- `getByTestId` que irá pegar o valor a partir de uma ID, geralmente utilizada com `data-testid="count"` somente utilizado quando não há outro meio de captura.
- `getByRole` que irá pegar uma tag do HTML, como `button`, `alert`, etc.
- `expect()` é o que esperamos que aconteça, o esperado, nele, temos várias funções, dentre elas:
 - `toBe()` - o valor que esperamos que seja
 - `toEqual()` - o valor tem que ser igual
 - `toHaveLength()` - verificar o tamanho de um array

Inicialmente, esse teste dará errado. O motivo, é que é esperado o valor de `0` em `number`, porém, está recebendo `"0"` como `string`.

Sendo o correto a ser feito, é passar a conversão inteira do `textContent` em `Number`, como

```js
Number(getByTest("count").textContent)
```

E após isso, receberemos um `passed` indicando que a função passou.

E o que deve ser feito em seguida? Testes com outras funções, como `increment` e `decrement`, verificando se os botões foram clicados, se
eles está ocorrendo a incrementação ou decrementação, etc.

Para verificarmos se o botão está sendo clicado, usamos o código abaixo.

```js   
const incrementBttn = getByRole("button", { name: "Increment" })
```

Utilizamos o `name` nessa ocasião, porque temos vários botões sem classe, e sem ID, então, o ideal, é pegar o texto que está dentro dele.
