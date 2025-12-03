---
title: Utilizando CSS-in-JS em componentes dinâmicos da aplicação
excerpt: "Entenda meu ponto sobre o playbook de Alekson Fortes e como ele se baseia na minha vida pessoal."
image: https://safebooru.org//samples/514/sample_afd575d3d675683c6f19582e19edd62f56d900a5.jpg?5301417
tags: ["CSS-in-JS", "Styled Components", "Iniciante"]
date: "2024-11-11"
---

![](https://safebooru.org//samples/514/sample_afd575d3d675683c6f19582e19edd62f56d900a5.jpg?5301417)

Inicialmente, vamos entender o CSS-in-JS que estaremos utilizando em nosso projeto frontend.

CSS-in-JS é uma técnica que permite escrever o código CSS (responsável pelo estilo visual de uma página) diretamente
dentro de arquivos JavaScript. Em vez de ter um arquivo CSS separado, você define estilos junto com a lógica do
componente.

Com CSS-in-JS, os estilos são aplicados a cada componente de forma isolada, o que ajuda a evitar conflitos de estilo e
facilita a manutenção, especialmente em projetos maiores. Bibliotecas como Styled Components e Emotion são populares
para isso e funcionam muito bem em ambientes como React.

Tá, entendemos o cenário do que é o CSS-in-JS. Como isso é útil para dentro de uma aplicação?

Em um cenário, onde estamos habituados a usar module.css - importar o CSS direto da aplicação. Teríamos um código basicamente assim.

Sendo, o Button.module.css:

```css
.button {
    background-color: #6200ea;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #3700b3;
}
```

E o componente Button.js:

```js
import React from "react";
import styles from "./Button.module.css"; // Importa o CSS Module

function Button() {
    return <button className={styles.button}>Clique Aqui</button>;
}

export default Button;
```

Conseguimos identificar que fica algo enraizado, claro, você pode usar essa maneira para criar aplicações, diretamente
utilizando styled-components, sem a necessidade do Javascript dentro do CSS, assim como eu faço.

E no outro cenário, temos o styled-components, utilizando a mesma propriedade para gerar - da mesma maneira e ainda sem
o Javascript no CSS.

```js
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #6200ea;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #3700b3;
    }
`;

function Button() {
    return <StyledButton>Clique Aqui</StyledButton>;
}

export default Button;
```

O que nos permite ter mais facilidade em dar manutenção na componentização e até a reutilização de componentes.

E como seria o cenário, aonde queremos que o botão seja dinâmico? Suponhamos que nossa aplicação tem o mesmo botão,
mas diferentes _backgrounds_ para cada seção da nossa aplicação. Isso vale para casos aonde temos um formulário, com o
mesmo botão e cores de fundo diferente, sendo uma para limpar o envio e outra para enviar.

```js
import React from "react";
import styled from "styled-components";

// Define as props do botão
const StyledButton = styled.button`
    background-color: ${({ bgColor }) => bgColor || "#6200ea"};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
        opacity: 0.9; // Simples efeito de escurecimento reduzindo a opacidade
    }
`;

const Button = ({ bgColor, children }) => {
    return <StyledButton bgColor={bgColor}>{children}</StyledButton>;
};

export default Button;
```

Dessa maneira, colocamos o Javascript para trabalhar dentro do CSS, pedimos para que qualquer cor enviada dentro de uma propriedade,
seja a cor de fundo do botão ou, caso ela não seja informada, ela será representada por uma cor padrão.

Sendo assim, em nossa aplicação, poderiamos chamar vários botões com o mesmo estilo, mas com cores diferentes.

```js
import React from "react";
import Button from "./Button";

function App() {
    return (
        <div>
            <Button bgColor="#1e90ff">Clique Aqui</Button>
            <Button bgColor="#ff6347">Excluir</Button>
            <Button>Sem Cor (Fallback)</Button>
        </div>
    );
}

export default App;
```

E caso não seja informado a cor, ele irá assumir a cor padrão que é `#6200ea`, já que não foi identificada uma outra cor.

Finalizando, vimos como o CSS-in-JS pode ser uma solução poderosa para aplicações dinâmicas, especialmente no contexto
de componentes reutilizáveis e personalizados, como botões com cores de fundo dinâmicas. Em comparação com a abordagem
tradicional de `module.css`, o uso de CSS-in-JS, como `styled-components`, permite uma maior integração com a lógica do
JavaScript, facilitando a passagem de _props_ diretamente para o estilo de um componente.

A flexibilidade oferecida pelo CSS-in-JS permite a criação de componentes altamente reutilizáveis que respondem a
diversas necessidades de design sem a complexidade de classes CSS adicionais. Isso é especialmente útil em projetos que
exigem uma interface dinâmica, onde o estilo pode variar com base no contexto, estado ou preferências do usuário.

Para projetos que demandam uma alta manutenibilidade e adaptação de estilo ao longo do tempo, o CSS-in-JS é uma solução
que traz o melhor dos dois mundos: a organização e o isolamento de estilos próprios do CSS tradicional, com o dinamismo
e a modularidade do JavaScript moderno, sem precisar ficar duplicando códigos e criando componentes semelhantes com um
detalhe ou outro de diferença.
