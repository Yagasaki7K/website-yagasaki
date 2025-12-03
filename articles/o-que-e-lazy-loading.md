---
title: O que é Lazy Loading e para que serve?
excerpt: "Lazy loading é uma teoria de otimização que ajuda o usuário a reduzir o tempo de carregamento e melhorar a experiência do usuário."
image: https://safebooru.org//samples/4460/sample_2d86143e93b6368902f88bb4ea80cd69a8f67906.jpg?4651402
tags: ["JavaScript", "Next.js", "Lazy Loading", "Desempenho"]
date: "2024-05-04"
---

![](https://safebooru.org//samples/4460/sample_2d86143e93b6368902f88bb4ea80cd69a8f67906.jpg?4651402)

Lazy loading é uma técnica de otimização de desempenho usada para adiar o carregamento de recursos não essenciais, como imagens e conteúdo, até que sejam necessários. Isso pode ajudar a melhorar significativamente os tempos de carregamento da página e a experiência do usuário, especialmente em sites com muito conteúdo visual.

Sabe quem usa? Twitter, Instagram, Facebook utilizam do lazy loading para dar aquele sentimento de que o feeding ou imagem está carregando. Dessa maneira,
além de deixar o browser carregar as imagens por último, ele também te deixa com a sensação de que algo está acontecendo e ele está trabalhando,
ao invés de simplesmente esperar aparecer tudo na sua tela de uma vez.

## Por que usar Lazy Loading?

Ao adiar o carregamento de imagens e outros recursos até que sejam necessários, podemos reduzir a quantidade de dados que o navegador precisa baixar inicialmente. Isso é particularmente útil em sites com muitas imagens ou conteúdo abaixo da dobra, onde o usuário pode não rolar imediatamente para ver todo o conteúdo.

## Implementação com JavaScript Puro

Em JavaScript puro, podemos implementar lazy loading de imagens monitorando a posição do elemento na janela de visualização (viewport) e carregando a imagem apenas quando ela estiver próxima o suficiente para ser visível.

```javascript
document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazy");

    const lazyLoad = function () {
        lazyImages.forEach((image) => {
            if (image.getBoundingClientRect().top < window.innerHeight && !image.src) {
                image.src = image.dataset.src;
            }
        });
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);

    lazyLoad();
});
```

## Implementação com Next.js

Em aplicações Next.js, o lazy loading de imagens e conteúdo é suportado de forma nativa por meio do componente `Image` fornecido pela biblioteca `next/image`. Ele otimiza automaticamente o carregamento de imagens, fornecendo carregamento sob demanda, redimensionamento e otimização de formato de imagem.

```javascript
import Image from "next/image";

function MyComponent() {
    return (
        <div>
            {/* Imagem carregada sob demanda */}
            <Image src="/path/to/image.jpg" alt="Descrição da imagem" width={400} height={300} />
        </div>
    );
}

export default MyComponent;
```

## Conclusão

Lazy loading de imagens e conteúdo é uma prática essencial para otimizar o desempenho das páginas da web, reduzindo o tempo de carregamento inicial e melhorando a experiência do usuário. Com JavaScript puro, podemos implementar lazy loading manualmente monitorando a posição dos elementos na viewport. Em frameworks modernos como Next.js, essa funcionalidade é fornecida nativamente, facilitando a implementação e melhorando ainda mais o desempenho da aplicação.
