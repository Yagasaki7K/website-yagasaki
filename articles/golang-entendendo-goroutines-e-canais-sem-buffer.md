---
title: Golang — Entendendo Goroutines e Canais Sem Buffer
excerpt: "A linguagem de programação Go é conhecida por sua simplicidade e poderosos recursos de concorrência. Canais são construções-chave de concorrência em Go, permitindo comunicação e sincronização eficientes entre goroutines. Este artigo compara dois exemplos diferentes de uso de canais em Go, com foco no uso de goroutines e na comunicação por canais sem buffer"
image: https://miro.medium.com/v2/resize:fit:720/format:webp/1*hgfbvdDDm8WFopSQIN3hYw.png
tags: ["Go", "Goroutines", "Buffer"]
date: "2026-02-06"
---

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*hgfbvdDDm8WFopSQIN3hYw.png)

- A linguagem de programação Go é conhecida por sua simplicidade e poderosos recursos de concorrência.
- Canais são construções-chave de concorrência em Go, permitindo comunicação e sincronização eficientes entre goroutines.
- Este artigo compara dois exemplos diferentes de uso de canais em Go, com foco no uso de goroutines e na comunicação por canais sem buffer

Exemplo com Erro:

```go
package main

func main() {
 c := make(chan int) // Create an unbuffered channel of type int
 // Launch an anonymous goroutine to receive data from the channel
 go func() {
  <-c // Receive data from the channel
 }()
 // Send data to the channel
 c <- 1
 // Data sent successfully
}
```

Exemplo Funcional:

```go
package main

func main() {
 c := make(chan int) // Create an unbuffered channel of type int
 // Send data to the channel (this will cause a deadlock)
 c <- 1
 // The program will not reach this point due to the deadlock

 // Attempt to receive data from the channel
 <-c
 // The program will not reach this point due to the deadlock
}
```

### Observações

- Ambos os exemplos criam um canal sem buffer ‘c’ do tipo int.
- O Exemplo 1 usa uma goroutine anônima para lidar com o recebimento de dados do canal, enquanto o Exemplo 2 envia e recebe dados diretamente na goroutine principal.
- O Exemplo 2 resulta em um deadlock.

### Comparação

- O Exemplo 1 demonstra um caso de uso comum para goroutines e canais:
- Uma goroutine envia dados enquanto outra goroutine os recebe.
- Permite processamento concorrente e comunicação entre goroutines, evitando situações de deadlock.
- O Exemplo 2 mostra uma possível armadilha ao usar comunicação direta por canal sem goroutines adicionais:
- Tentativa de enviar e receber dados na goroutine principal sem gerenciar adequadamente a concorrência.
- Resulta em um deadlock devido ao canal sem buffer.

### Conclusão

- Ambos os exemplos fornecem uma visão valiosa sobre diferentes formas de usar canais em Go para comunicação.
- O Exemplo 1 destaca o poder das goroutines e dos canais para processamento e comunicação concorrentes.
- O Exemplo 2 demonstra os possíveis problemas que podem surgir de uma comunicação direta por canal feita de forma inadequada.
- Entender as diferenças entre essas abordagens e suas implicações é crucial ao projetar e implementar aplicações concorrentes em Go.

Artigo original: [Golang — Understanding Goroutines and Unbuffered Channels](https://medium.com/@pengcheng1222/golang-understanding-goroutines-and-unbuffered-channels-c6f3fc377304)
