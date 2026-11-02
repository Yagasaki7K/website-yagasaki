---
title: O mínimo que você precisa saber para não ser um vibecoder idiota
excerpt: "Existe uma diferença abissal entre quem não sabe o que faz e quem não sabe que não sabe. O vibecoder idiota não é quem usa IA — é quem confunde 'funcionou na minha tela' com 'está pronto'. Este texto reúne o mínimo de arquitetura e segurança que nunca muda: onde o código roda, como separar camadas, por que segredos ficam fora do código, como validar entradas no servidor, como não vazar dados entre usuários e como conversar com a IA sem se humilhar."
image: "https://pbs.twimg.com/media/HR-EMpDW8AE6j0S?format=jpg&name=large"
tags: ["Segurança", "Arquitetura de Software", "IA"]
date: "2026-11-02"
---

![](https://pbs.twimg.com/media/HR-EMpDW8AE6j0S?format=jpg&name=large)

Existe uma diferença abissal entre o sujeito que não sabe o que faz, e o sujeito que não sabe que não sabe. O primeiro é um aprendiz. O segundo é um perigo público.

O vibecoder idiota não é o cara que usa IA. Sou eu, é você, é todo mundo hoje. O idiota é o que confunde "funcionou na minha tela" com "está pronto". Ele pede, cola, roda, vê a telinha bonita e conclui que resolveu o problema. Não resolveu. Ele apenas empurrou o problema para frente, onde vai custar mais caro, geralmente com dinheiro ou dado dos outros.

O remédio não é decorar framework, aprender algoritmos sofisticados, linguagens de programação. É entender meia dúzia de coisas que nunca mudam.

**ARQUITETURA: O MÍNIMO DO MÍNIMO**

1. Saiba onde o código roda
   Isso é a coisa mais importante deste texto.

Frontend é o que roda na máquina do usuário: navegador, celular. Tudo que está ali é público. Tudo. O usuário abre o F12 e lê o seu código, suas chaves, suas "senhas escondidas".
Backend é o que roda no seu servidor. É o único lugar onde você manda de verdade.

Banco de dados é onde a informação mora. É a fonte da verdade.

Quem não entende essa separação coloca a chave da API da OpenAI no frontend e descobre a conta zerada no fim do mês. Não foi hacker russo. Foi ignorância mesmo.

2. Separe as três camadas
   Tela (o que o usuário vê), regra de negócio (o que o sistema decide) e dados (onde guarda).

Quando você joga tudo no mesmo arquivo, cada mudança quebra outra coisa. Aí você volta na IA, pede pra consertar, ela conserta um lado e quebra o outro. Isso não é a IA sendo burra. É o seu projeto não ter formato nenhum.

Regra prática: se você não consegue explicar em uma frase o que aquele arquivo faz, ele faz coisa demais.

Obviamente, hoje em dia a IA já consegue montar uma arquitetura de código minimamente decente sozinha, o que pode ser bom, se teu sistema é simples, ou pode gerar complicações futuras, se for um projeto grande.

Dica: Pede para a IA utilizar arquitetura limpa no seu código. Apesar de que, há várias outras arquiteturas que podem vir a calhar para seu projeto. Recomendo fortemente o estudo de arquitetura de software, se você quiser sair do mínimo.

3. Configuração fica fora do código
   Senha de banco, chave de API, endereço de servidor. Nada disso é escrito no meio do código. Vai em variável de ambiente, no arquivo .env, e o .env vai para o .gitignore.
   Se você subir uma chave para o GitHub, existem robôs varrendo repositório público exatamente atrás disso. Em minutos, não em dias.

Ah, e saiba trabalhar com GIT. Vai salvar a sua vida e muito. Aprenda GIT.

4. Você é responsável por tudo que instala
   Cada biblioteca que a IA sugere é código de estranho rodando dentro da sua casa. Não instale pacote que você não sabe pra que serve, só porque apareceu na resposta. Questione a IA a respeito da segurança do pacote e avalie alternativas.

5. Log e erro existem para você enxergar
   Sistema sem log é sistema cego. Quando quebrar, e vai quebrar, você não vai ter a menor ideia do porquê. Peça log. Leia log.

**SEGURANÇA: O MÍNIMO DO MÍNIMO**

1. Nunca confie no que vem do usuário
   Toda validação que existe só no frontend é decoração. Serve para o usuário distraído, não para o mal-intencionado. Quem quer te atacar não usa o seu formulário, manda a requisição direto.

Valide no servidor backend. Sempre. De novo, mesmo que já tenha validado na tela.

2. Consulta ao banco é sempre parametrizada
   Se o seu código monta a consulta grudando o que o usuário digitou dentro do texto do comando SQL, ele está aberto. Isso se chama SQL injection e é um problema de 1998 que continua derrubando sistema em 2026.

Normalmente, a IA moderna vai preparar seu código de maneira segura, mas é muito importante ter a certeza disso, e conferir.

Logo, quando pedir código à IA, exija: "use query parametrizada" ou "use o ORM".

3. Senha não se guarda, se transforma
   Senha de usuário nunca é gravada como o usuário digitou. Você guarda um hash, com bcrypt ou argon2, que é um caminho só de ida. Se vazar o banco, o estrago é bem menor. Nunca deixe a senha aberta salva no banco, pelo amor de Deus.

E não invente o seu próprio jeito de fazer isso. Criptografia caseira é sempre pior que a pronta.

4. Estar logado não é ter permissão
   Esse é o erro mais comum dos sistemas gerados por IA.

Autenticação é saber quem é a pessoa. Autorização é saber o que ela pode ver. São coisas diferentes.

O teste é simples: entre com o seu usuário, olhe a URL do tipo /pedido/1042, troque para /pedido/1041 e veja o que acontece. Se aparecer o pedido de outra pessoa, você tem um vazamento de dados, não um sistema.

Se você definir um prompt bem bacana, isso não ocorrerá, é bem fácil da IA corrigir isto. Saiba definir qual a autoridade de cada usuário.

5. HTTPS, sem discussão
   Sem cadeado, tudo trafega em texto puro. Hoje o certificado é de graça. Não tem desculpa.

6. Erro não conta a sua vida para o desconhecido
   Aquela tela de erro que mostra o caminho dos arquivos, a versão do banco e o trecho da consulta é um mapa entregue de bandeja. Para o usuário: mensagem curta. Para você: detalhe no log.

Crie uma tela de erro amigável para o usuário informando o mínimo possível do que houve.

7. Coloque limite e faça backup
   Limite de tentativas de login e de requisições evita que alguém fique batendo na porta a noite inteira. E backup só existe de verdade quando você já testou restaurar. Backup nunca testado é fé, não é backup.

**COMO CONVERSAR COM A IA SEM SE HUMILHAR**

A qualidade da resposta depende do tamanho da sua pergunta.

- Diga o contexto: qual linguagem, qual banco, quem usa o sistema, o que é sensível.
- Peça a explicação junto do código. Se você não entende o que colou, não é seu.
- Peça revisão adversarial: "aponte as falhas de segurança deste código e como um atacante abusaria dele". A IA é ótima nisso, mas ela não faz se você não pedir.
- Mude uma coisa de cada vez. Quem pede dez alterações juntas não sabe qual delas quebrou o sistema.
- Desconfie da confiança. Código errado sai com o mesmo tom seguro do código certo. Ela não está mentindo, ela está completando texto.

**O ESSENCIAL**

A IA multiplica o que você é. Se você entende o mínimo, ela te faz render por três. Se você não entende nada, ela multiplica a sua ignorância na mesma velocidade, só que com aparência de coisa profissional. E é isso que engana.

Ninguém está pedindo que você vire arquiteto de software. Está pedindo que você saiba onde o código roda, que não confie no usuário, que não guarde segredo no lugar errado e que teste se o vizinho consegue ver o seu dado.

É pouco. É o mínimo. E é exatamente esse mínimo que separa quem usa a ferramenta de quem é usado por ela.
