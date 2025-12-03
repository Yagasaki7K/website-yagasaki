---
title: DeepSeek-R1 e o impacto que seu lançamento causou no mercado
excerpt: "O tema de hoje é o DeepSeek-R1 e o impacto que seu lançamento causou no mercado. Como em qualquer assunto técnico, há muita desinformação ..."
image: https://safebooru.org//samples/4610/sample_e53772af1a04c1ca06891720f290d04f1fc0b719.jpg?5343222
tags: ["Análise", "IA", "DeepSeek"]
date: "2025-01-28"
---

![](https://safebooru.org//samples/4610/sample_e53772af1a04c1ca06891720f290d04f1fc0b719.jpg?5343222)

A análise a seguir foi feita com base nas informações do _el hombre pulpo_ (@coproduto) no [Twitter](https://x.com/coproduto/status/1884002124402712642). No entanto foi adaptada e revisada para este blog. O objetivo aqui é preservar informações valiosas enquanto reconhecemos e creditamos o autor original.

O tema de hoje é o **DeepSeek-R1** e o impacto que seu lançamento causou no mercado. Como em qualquer assunto técnico, há muita desinformação circulando por aí. O propósito deste artigo não é ser altamente técnico, mas sim explicar de forma clara o que o modelo é (e o que não é).

---

### O que é o DeepSeek-R1?

O **DeepSeek-R1** é um modelo generativo de linguagem grande (LLM) criado pelo laboratório chinês **DeepSeek**. Ele possui capacidades avançadas de "raciocínio", sendo comparável ao **OpenAI o1**, o segundo modelo mais poderoso da OpenAI. Abaixo, você pode ver como o desempenho deles se compara em benchmarks:

![](https://pbs.twimg.com/media/GiVSZkVWkAAR1Vr?format=jpg&name=4096x4096)

Agora, o que significa "capacidade de raciocínio" nesse contexto? Basicamente, ao invés de gerar uma resposta diretamente, o modelo primeiro "pensa em voz alta", gerando um texto interno antes de responder. Isso melhora significativamente a qualidade das respostas em comparação ao método direto.

Mas, como mostrado acima, é importante destacar: o DeepSeek-R1 está no mesmo nível do OpenAI o1, **não** do OpenAI o3 (o modelo mais poderoso da OpenAI no momento). A ausência do o3 nos benchmarks apresentados pela DeepSeek não é coincidência — ninguém vai promover um comparativo que prejudique sua própria imagem.

---

### Desmistificando a narrativa

Algumas pessoas têm alardeado que "A China superou os EUA em IA!", mas isso não é verdade. O que aconteceu foi que a China conseguiu replicar o **segundo melhor modelo dos EUA**, o que já é um feito impressionante, mas não significa que superaram os americanos.

Deixando claro: o trabalho da DeepSeek no R1 é extremamente avançado, e nada do que está sendo dito aqui é para menosprezá-los. No entanto, é preciso evitar exageros.

---

### Um modelo open source (mas nem tão acessível assim)

O R1 é um modelo **open source e open weights**, o que significa que tanto o código quanto os pesos estão disponíveis publicamente. Na teoria, qualquer pessoa pode rodá-lo — desde que tenha o hardware necessário. E aqui está o problema: só para carregar o R1, são necessários **671 GB de memória de vídeo**.

![](https://pbs.twimg.com/media/GiVUBNKWMAAlcVw?format=jpg&name=large)

Muito provavelmente, você não tem 671 GB de VRAM, e eu também não. Por isso, embora o modelo seja "acessível" no sentido técnico, ele está longe de ser viável para a maioria das pessoas. Ainda assim, você pode utilizar o [R1 pela API](https://chat.deepseek.com/).

---

### As destilações do R1

Talvez você tenha ouvido que algumas pessoas conseguiram rodar versões do R1 localmente. Isso é verdade, mas o que rodaram foram **destilações** do modelo.

![](https://pbs.twimg.com/media/GiVUliNXAAAEN94?format=jpg&name=large)

Mas o que são destilações? Resumidamente, trata-se de versões menores e mais leves do modelo, treinadas para imitar a IA original. Apesar de serem bastante úteis, essas destilações são menos potentes do que o modelo completo. Então, não, ninguém está rodando "o equivalente ao OpenAI o1 ou o3 em um Raspberry Pi".

---

### O verdadeiro impacto do R1 no mercado

Se o DeepSeek-R1 não superou os modelos da OpenAI, por que o mercado foi tão afetado? A resposta está no **custo de treinamento**.

Treinar modelos de IA é extremamente caro e depende de grandes quantidades de GPUs — algo que impulsionou o preço da Nvidia nos últimos anos. Porém, o método inovador da DeepSeek permite treinar IAs poderosas de forma **muito mais barata**, o que altera drasticamente as projeções futuras para empresas de hardware, como a Nvidia.

![](https://pbs.twimg.com/media/GiVV61uWEAAOj6n?format=jpg&name=large)

Esse é o verdadeiro impacto do R1: ele não só demonstra um avanço técnico, mas também apresenta métodos mais eficientes para treinar modelos, o que pode beneficiar todos os laboratórios no futuro.

---

### Conclusão

Para resumir:

- O DeepSeek-R1 **não é melhor** que os modelos mais avançados dos EUA, mas é comparável ao OpenAI o1.
- Ele **não roda em hardware doméstico**, a menos que seja uma destilação, que é uma versão mais limitada do modelo.
- O verdadeiro impacto do R1 está no custo reduzido de treinamento, o que pode transformar a indústria de IA como um todo.

Apesar disso, o trabalho da DeepSeek é admirável e deve ser celebrado, especialmente por seu compromisso em abrir seus avanços ao público.

Quer discutir mais sobre esse tema? Me procure no [Twitter](https://twitter.com/Yagasaki7K). Vamos trocar ideias e explorar juntos o futuro da IA!
