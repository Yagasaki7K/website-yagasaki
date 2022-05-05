import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
                <link rel="icon" type="image/png" href="/assets/favicon.png"/>
                <link rel="stylesheet" href="https://yagasaki7k.github.io/custom-scripts/font-awesome.css"/>
                <script src="https://yagasaki7k.github.io/custom-scripts/font-awesome.js"></script>

                </head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
