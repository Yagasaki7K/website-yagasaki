# Escalando equipe de desenvolvedores usando RFCs

## O que é um RFC?

Você pode ver sobre isso, explicado e bem detalhado lá no [blog do Yagasaki](https://yagasaki.dev/blog/dimensionando-equipes-de-engenharia-por-meio-de-rf-cs-anotando-as-coisas), mas em resumo, um RFC é um documento que descreve
uma proposta de mudança para um projeto. O objetivo é obter feedback da comunidade e dos mantenedores antes de investir muito
tempo e energia na implementação de uma nova funcionalidade.

## Como iremos usar isso e como vai funcionar?

A ideia é que, ao invés de ficarmos discutindo sobre uma nova funcionalidade em um canal de comunicação, vamos compartilhar isso
na comunidade através da nossa scrumboard. Assim, todos podem ver o que está sendo discutido e dar o seu feedback.

Funcionará da seguinte maneira. Suponhamos que eu tenho como tarefa desenvolver um mapa funcional para o FindYourPet. Mas, ao
invés de eu simplesmente começar a desenvolver, eu vou criar um RFC para isso. O RFC será uma issue no nosso repositório.

Ali, iremos colocar o problema que queremos resolver, a solução que estamos propondo, os prós e contras dessa solução, e o que
precisamos para implementar essa solução. Os demais membros da equipe ou envolvidos apenas naquele projeto específico e poderão
validar se é realmente a solução ou abordagem ideal para o problema.

Se for aprovado (tiver um sinal verde ou mais) pela comunidade ou pela equipe diretiva do projeto - jamais poderá ser aprovado
pelo mesmo membro que criou o RFC - O projeto pode dar seguimento no desenvolvimento, claro, que dependendo da funcionalidade, nós
pedimos para seguir o método TDD, existe um [curso gratuito](https://www.coursera.org/learn/tdd-desenvolvimento-de-software-guiado-por-testes), 
caso você não tenha. Mas, iremos recomendar caso seja realmente necessário para a funcionalidade especifica.

Em resumo, TDD - Test-driven development é um método de desenvolvimento de software que consiste em escrever o teste antes de
escrever o código. O objetivo é que o teste falhe, pois ainda não existe código para passar no teste, e então escrever o código
que faça o teste passar.