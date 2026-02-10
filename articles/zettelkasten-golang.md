---
title: Zettelkasten - Introdução ao Go Lang (WIP)
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

### Métodos

São funções "amarradas" as `stricts`:

```go
package main

type Pessoa struct {
    Nome string
    Idade int
}

func (person Pessoa) Apresentar() {
    fmt.Printf("Olá, meu nome é %s, eu tenho %d anos\n", person.Nome, person.Idade)
}

func main() {
    p1 := Pessoa{Nome: "Anderson", Idade: 29}
    p1.Apresentar();
}
```

## Ponteiros (explicação simples em Go)

De forma simples, **ponteiros servem para permitir que uma função ou método modifique o valor original de uma variável**.

Em Go, **todos os valores são passados por valor**, inclusive `structs`.  
Isso significa que, quando uma `struct` é passada para um método **sem ponteiro**, o método recebe **uma cópia** dessa `struct`.

### O que isso significa na prática?

Suponha que temos um método `Apresentar()` - como no exemplo acima e, dentro dele, alteramos:

```go
person.Nome = "Garfield"
```

Se `Apresentar()` recebe a `struct` **por valor**, essa alteração acontece **apenas na cópia**.
O valor original, definido na `main()` como `"Anderson"`, **permanece inalterado**.

Por isso, fora do método, o nome continuará sendo **Anderson**.

**Como permitir que o valor seja alterado?**

Para que a função ou método consiga **modificar o valor original**, devemos usar **ponteiros**.

Quando usamos um ponteiro, a função não recebe uma cópia do valor, e sim **o endereço de memória onde esse valor está armazenado**.
Assim, qualquer alteração feita através do ponteiro afeta diretamente o valor original.

Variável comum:

```go
var x int = 100
```

Ponteiro para a variável:

```go
var y *int = &x
```

- `y` guarda **o endereço de memória de `x`**
- `*y` representa **o valor armazenado nesse endereço**, ou seja, `100`

Relação entre ponteiro e valor:

Se alterarmos o valor de `x`:

```go
x = 200
```

O valor acessado por `*y` também será `200`.

Da mesma forma, se alterarmos usando o ponteiro:

```go
*y = 300
```

O valor de `x` passará a ser `300`.

Isso acontece porque **`x` e `*y` apontam para o mesmo local na memória**.

- Em Go, tudo é passado por **valor**
- Funções que recebem `struct` por valor trabalham com **cópias**
- **Ponteiros permitem mutação do valor original**
- Use ponteiros quando:
    - precisar alterar o valor
    - quiser evitar cópias grandes

- Use valores quando:
    - quiser segurança e isolamento

Ponteiros não tornam o código mais “preciso” — eles tornam o código **mutável**.

Outro exemplo:

```go
func main() {
	var p1 = Pessoa{Nome: "Lais"}
	var p2 = Pessoa{Nome: "Roberta"}

	fmt.Println(p1, p2) // {Lais}, {Roberta}

	var p3 *Pessoa = &p2
	p3.Nome = "Estevam"

	fmt.Println(p1) // {Lais}
	fmt.Println(p2) // {Estevam}
	fmt.Println(p3.Nome) // Estevam
}
```

E como seria sem ponteiro:

```go
func main() {
	var p1 = Pessoa{Nome: "Lais"}

	fmt.Println(p1) // {Lais}

	var p3 Pessoa = p1
	p3.Nome = "Roberta"

	fmt.Println(p1) // {Lais}
	fmt.Println(p3.Nome) // Roberta
}
```

## Concorrência

Lidar com concorrência é gerenciar várias tarefas em progresso ao mesmo tempo, mesmo quando o poder de processamento é limitado. Isso inclui criptografia, acessos simultâneos e múltiplas conexões HTTP sendo tratadas de forma intercalada.

Go foi projetado exatamente para facilitar esse modelo de concorrência.

Diferente das threads, que são gerenciadas pelo sistema operacional, Go utiliza goroutines, que são unidades de execução leves gerenciadas pelo runtime da própria linguagem. O runtime do Go distribui essas goroutines sobre threads do sistema operacional de forma eficiente.

Dica: Se a função principal (main) for encerrada antes da goroutine rodar, o programa será encerrado independente do que precisa ser rodada.

A sintaxe para rodar uma `goroutine` é bem simples, é só chamar a palavra reservada `go`

```go
package main

func getMessage() {
    fmt.Println("Hello Routine!")
}

func main() {
    go getMessage()
    fmt.Println("Hi Main Function")
}
```

Vale lembrar que **goroutines não possuem ordem de execução garantida**. Elas podem ser executadas mais cedo ou mais tarde, dependendo das decisões do **scheduler do runtime do Go** e do tempo de execução de cada função.

Por isso, se chamarmos duas funções — por exemplo, `go getHello()` e `go getWorld()` — para serem executadas concorrentemente dentro de um loop, o resultado pode variar a cada execução. Saídas como `Hello, Hello, World, Hello, World, World` são perfeitamente possíveis.

Isso acontece porque **a ordem não é determinística**; o que define o resultado é o tempo de execução de cada goroutine e o escalonamento feito pelo runtime, desde que a função `main()` não seja encerrada antes da conclusão das goroutines.

### Channels

Channels são usados para comunicação e sincronização entre `goroutine`, permitindo o envio e recebimento de valores de forma segura.

Embora possam ser utilizados para sinalizar quando uma `goroutine` terminou sua execução, `channel` não finalizam a função `main` por conta própria — eles apenas fornecem um mecanismo para que a `main` saiba quando pode encerrar com segurança.

```go
package main

func main() {
    ch := make(chan int, 3) // 3 = Size of buffer

    go func() {
        for i := 0; i < 5; i++ {
            ch <- i
        }
        close(ch)
        fmt.Println("Routine finished")
    }()

    time.Sleep(time.Second * 1)
    for value := range ch {
        fmt.Println("Reading", value)
    }
}
```

E qual seria os exemplos mais úteis para esse cenário, um deles seria pipeline, sistema de mensageria, enfim.

```go
func producer(c chan int) {
    for i := 0; i < 5; i++ {
        c <- 1
    }

    close(c)
}

func consumer(c chan int) {
    for v := range c {
        fmt.Println(v)
    }

    fmt.Println("Finished consumer")
}

func main() {
    ch := make(chan int)

    go producer(ch)
    go consumer(ch)

    time.Sleep(time.Second * 1  )
}
```
