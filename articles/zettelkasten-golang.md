---
title: Zettelkasten - Go Lang
excerpt: "Isso é o Zettelkasten, isso é basicamente um _note-taking_ dos meus estudos. Será apenas consultado em revisões futuras. Fique à vontade para usar como base d estudos, se necessário."
image: https://safebooru.org//samples/4619/sample_d3e96e81f2591af055bb8f9c5312d2d0d1d5c991.jpg?4859150
tags: ["Zettelkasten", "Estudo", "Go"]
date: "2026-02-03"
---

![](https://safebooru.org//samples/4619/sample_d3e96e81f2591af055bb8f9c5312d2d0d1d5c991.jpg?4859150)

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

### Slice

```go
var array []string
array = append(array, "new item")

fmt.Println(len(array)) // Verifica o tamanho do array, return is 1

fmt.Println(array)
```

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

### Uso de Map

```go
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

### Condicionais

A expressão if, else e if else, possuem a mesma estrutura que o Javascript, a diferença é que não precisa de colchetes ().

Uma maneira de fazer uma declaração curta, é criar a variável dentro da condicional.

```go
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
func main() {
    players := map[string]int {
        "lais": 26
    }

    if value, ok := players["lais"]; ok {
        fmt.Println("Pontos:", value, ok)
    }
}
```
