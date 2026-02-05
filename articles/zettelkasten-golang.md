---
title: Zettelkasten - Introdução ao Go Lang
excerpt: "Isso é o Zettelkasten, isso é basicamente um _note-taking_ dos meus estudos. Será apenas consultado em revisões futuras. Fique à vontade para usar como base d estudos, se necessário."
image: https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/10/o-que-e-e-como-comecar-com-golang.jpg
tags: ["Zettelkasten", "Estudo", "Go"]
date: "2026-02-03"
---

![](https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/10/o-que-e-e-como-comecar-com-golang.jpg)

Isso é o Zettelkasten, isso é basicamente um _note-taking_ dos meus estudos. Será apenas consultado em revisões futuras.

Fique à vontade para usar como base de estudos, se necessário.

Primeira atualização: 03 de Fevereiro de 2026
Última atualização: 05 de Fevereiro de 2026

---

**Instalação em GO via CLI - Facilitando a sua vida**

Verifique a versão - Atualmente puxando 1.22.6

```yaml
wget https://go.dev/dl/go1.22.6.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.22.6.linux-amd64.tar.gz && go version
```

---

```go
package myPackage

func ExemploFunction() {} // Função/variável exportável
func exemploFunction() {} // Função/variável não exportável
```

O nome do pacote - se caso não for _main_, ele deverá ter o mesmo nome de pasta.

Se for criar um modulo, utilize `go mod init _nome-do-mod` e importe na _main_ como `import ("github.com/username/repo/module")`

Se for fazer a build do projeto - criar um executável - utilize `go build -o nome_da build`

---

Podendo ser usado `var` se o valor for mutável ou `const` para valor imutável

```go
var texto string = "value" // 1. Tipado
var texto = "value" // 2. Não tipado - mas main entende o tipo
var texto string // 3. Tipado e com valor inicial (text - null / number - 0)
texto := "value" // 4. Tipado automaticamente e valor inicial sendo value / declaração curta

fmt.Println(texto)
```

Utilizar o `:=` é basicamente uma criação curta, então por debaixo dos panos seria a mesma coisa de colocar uma variável, setar o tipo dela - já que podemos passar um valor - e atribuir um valor a ela tudo em uma curta chamada, conforme exemplo acima. Também conhecida como **declaração curta**

## Quais são os tipos simples:

`int` - Inteiro (int (system size by processor), int8 - 8bits, int32 - 32bits, int64 - 64bits)
`float`- Numéro com ponto flutuante (3.14) - float32 - 32bits / float64 - 64bits
`bool` - Booleanos (`true` ou `false` - valor inicial é false) / `var maior bool = 10 > 5` / return `true`
`string` - Textos (Concat + Uppercase (`fmt.Println(strings.toUpper(string))`) ou Lowercase (`fmt.Println(strings.toLower(string))`) + FindWord (`fmt.Println(strings.Contains(meet, "mundo")) // return true or false`)

Como calcular a circunferência

```go
var floatNumber float32 = 1.1
var pi float64 = 3.14
var raio float64 = 2.5
var area = pi * raio * raio

fmt.Printlm("floatNumber", floatNumber)
fmt.Printlm("Área do Circulo", area)
```

Se usassemos `var pi float64 = 3.14 / var raio float32 = 2.5 / var result = pi + raio`, ele daria erro por tentar somar float32 + float64.

## Quais são os tipos compostos:

### Array

```go
var array [2]string
array[0] = 'hello'
array[1] = 'world

fmt.Println(array)
// return is [hello, world]
```

O tamanho de array é imutável.

---

### Slice

```go
var array []string
array = append(array, "new item")

fmt.Println(len(array)) // Verifica o tamanho do array, return is 1

fmt.Println(array)
```

---

### Divisão de slice

```go
var array []string
array = append(array, "first item", "second item", "third item")

fmt.Println(array[1:2]) // [second item]
fmt.Println(array[0:2]) // [first item, second item]
fmt.Println(array[2:0]) // [third item]

array = array[0:2] // still 0-2(-1) item
fmt.Println(array) // [first item, second item]
```

O tamanho de slice é indefinido (no limit). O `append` manterá o valor original e adicionará um novo.

---

### Uso de Map

```go
package main
func main() {
    var pessoas = map[string]int{}

    pessoas["lais"] = 26
    pessoas["leo"] = 32

    fmt.Println(pessoas)
    // map[lais:26 leo:32]

    fmt.Println("lais") // 26
    fmt.Println("ricardo") // 0

    if idade, ok := pessoas["fabio"]; ok {
        fmt.Println("Pessoa existe no map", idade, ok) // ok is a bool
    } else {
        fmt.Println("Pessoa não existe no map")
    }

    delete(pessoas, "lais")
    fmt.Println(pessoas) // [leo:32]
```

---

### Condicionais

A expressão `if`, `else` e `if else`, possuem a mesma estrutura que o Javascript, a diferença é que não precisa de colchetes ().

Uma maneira de fazer uma declaração curta, é criar a variável dentro da condicional.

```go
package main
func main() {
    if err := thisIsAnError(); err != nil {
        fmt.Println(err.Error())
    }
}

func thisIsAnError() error {
    return errors.New("This is an error")
}
```

Outro exemplo envolvendo `map` que pode ser útil em situações mais avançadas.

```go
package main
func main() {
    players := map[string]int {
        "lais": 26
    }

    if value, ok := players["lais"]; ok {
        fmt.Println("Pontos:", value, ok)
    }
}
```

Imaginando o cenário de `switch case` para evitar 5-10x `if else` na sua aplicação.

```go
package main
import "time"

func main() {
    fmt.Println("Quando que é sábado?")
    today := time.Now().Weekday()

    switch time.Saturday{
        case today + 0:
            fmt.Println("É hoje!")
        case today + 1:
            fmt.Println("É amanhã!")
        case today + 2:
            fmt.Printlm("É em dois dias")
        default:
            fmt.Println("Tá longe ainda ..")
    }
}
```

E quanto a laços de repetição? No caso o `for`:

```go
package main

import "fmt"

func main() {
    sum := 0

    for i := 0; i < 10; i++ {
        fmt.Println(i)
        sum += i
    }

    fmt.Println(sum)
}
```

No Go não existe `while` já que a proposta da linguagem é ser direta e limpa, por isso, o próprio `for` consegue colocar condicionais dentro de seu próprio looping.

```go
package main

import "fmt"

func main() {
    sum := 0

    for sum < 20 {
        fmt.Println("Looping", sum)
        sum += 2
    }

    fmt.Println(sum)
}
```

Existe também como fazer um looping com base no `slice` com mesmo tipos.

```go
package main

import "fmt"

func main() {
    nums := []int{1,2,3,4,5}

    for i := 0; i < len(nums); i++ {
        fmt.Println(nums[i])
    }
}
```

---

Temos também o `range` que é a forma idiomática de iterar sobre coleções em Go. O retorno da função abaixo será `0 1`, `1 2`, `2 3`, `3 4`, `4 5` e assim por diante.

```go
package main

import "fmt"

func main() {
    nums := []int{1,2,3,4,5}

    for key, value := range nums {
        fmt.Println(key, value)
    }
}
```

O `range` permite acessar o valor do elemento com mais facilidade e identificar com mais precisão a posição dele na coleção.

---

Se caso for necessário não chamar em memória alguma função ou utilidade, como o caso do `for` que precisamos definir `key` e `value`, simplesmente, podemos
pedir ao Go para não renderizar e ocultar essa funcionalidade através do `_`, ele simplesmente não irá renderizar.

**O que acontece se eu chamar um `for` no Google, contendo `_` e `value`, e simplesmente pedir o `fmt.Println(_)`, ele irá renderizar ou dará erro?**

Dará **erro de compilação**.

O compilador retornará a mensagem: `cannot use _ as value`.

**Motivo:** O `_` é o _blank identifier_ (identificador em branco). Ele serve exclusivamente para descartar valores. Você não pode lê-lo, usá-lo em expressões ou passá-lo como argumento para funções como o `fmt.Println`.

## Tipagem no Go

### Structs

A tipagem é semelhate ao Typescript por si só e eu acredito que tenha a mesma visibilidade que o PrismaORM. Também familiariamente visto como as classes em orientação a objetos.

```go
package main

type Cliente struct {
    Nome string
    Idade int
    Endereco Endereco
    Email string
}

type Endereco struct {
    Rua string
    Numero int
    Complemento string
}

func main() {
    cliente1 := Cliente{
        Nome: "Anderson"
        Idade: 29,
        Endereco: Endereco {
            Rua: "Rua dos Alfineiros",
            Numero: 130,
            Complemento: "Casa"
        }
    }

    cliente1.Email = "alfineiros@gmail.com" // É possível adicionar informação posteriormente

    fmt.Println(cliente1.Nome)
    fmt.Println(client1.Endereco.Numero) // 130

    cliente1.Endereco.Numero = 13
    fmt.Println(client1.Endereco.Numero) // 13
}
```

Também é possível colocar uma `struct`, conforme o exemplo em que usamos uma `struct Endereco` dentro da `struct Cliente`.

## Funções

```go
package main

func main() {
    fmt.Println(soma(1, 2))
}

func soma(a, b int) string {
    return a + b
}
```

No caso precisamos criar a `function`, com o seu nome, no caso `soma` e nele, precisamos declarar o tipo do parametro `int` e o tipo de retorno sendo o segundo `int`, então, é uma linguagem tipada. Se caso não tenha o tipo de retorno, ela simplesmente será declarada como `void`, e não possui retorno algum - dará erro se existir algum `return` na função.

Existe a possibilidade também de criar uma `function` vinculada a uma variável, como é o exemplo abaixo. E a vantagem desse cenário, é que ele pode pegar variáveis externas (fora do escopo) para serem lidas, diferente de uma `function` fora do `main()` que receberá apenas o valor através de parametros.

```go
package main

function main() {
    var valorFixo = 5
    multiplica := func(valorParams int) int {
        return valorParms * valorFixo
    }

    resultado := multiplica(5)
    fmt.Println(resultado)
}
```
