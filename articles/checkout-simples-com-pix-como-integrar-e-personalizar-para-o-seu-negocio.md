---
title: Checkout Simples com PIX - Como Integrar e Personalizar para o Seu Negócio
excerpt: "Integrar um sistema de checkout eficiente é essencial para qualquer negócio digital que busca aumentar conversões e oferecer uma experiência de pagamento prática ao cliente. Métodos tradicionais, como cartões de crédito, frequentemente envolvem taxas elevadas, prazos de repasse longos e fluxos complexos que podem causar desistência do comprador."
image: https://images.unsplash.com/photo-1596843720750-7de9329da5d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
tags: ["Gateway", "Pagamento", "Fintech"]
date: "2025-08-20"
---

![](https://images.unsplash.com/photo-1596843720750-7de9329da5d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

Integrar um sistema de checkout eficiente é essencial para qualquer negócio digital que busca aumentar conversões e oferecer uma experiência de pagamento prática ao cliente. Métodos tradicionais, como cartões de crédito, frequentemente envolvem taxas elevadas, prazos de repasse longos e fluxos complexos que podem causar desistência do comprador.

Com o PIX, essas barreiras são eliminadas. Trata-se de uma solução de pagamento instantânea, disponível 24 horas por dia, 7 dias por semana, sem intermediários e sem burocracia. Além disso, com soluções como a API da LiraPay, é possível construir um checkout simples, rápido e totalmente personalizável para o seu negócio.

## Por que usar PIX em um checkout?

O PIX não é apenas mais uma forma de pagamento. Ele se tornou um padrão no Brasil e hoje é a forma preferida de pagamento de milhões de consumidores. Entre as principais vantagens estão:

- Custos reduzidos: não há taxas de cartão ou tarifas de adquirentes.
- Recebimento instantâneo: o dinheiro cai na conta em segundos, inclusive finais de semana e feriados.
- Maior segurança: todas as transações são rastreáveis e criptografadas.
- Facilidade para o cliente: pagamento rápido, sem digitação de dados complexos.
- Não há necessidade de redirecionar o cliente para outra página, o que evita desistências no processo.
- Total flexibilidade: você pode personalizar a experiência do checkout para o seu produto ou serviço.

## Estrutura necessária antes da integração

Para começar a usar a API da LiraPay e oferecer PIX no seu checkout, é necessário:

1. Criar uma conta no painel administrativo da LiraPay.
2. Obter sua chave de autenticação exclusiva (API Secret) disponível na seção de integrações.
3. Configurar um endpoint no seu servidor para receber notificações de pagamento (webhooks).

## Como funciona a comunicação com a API

Todas as chamadas são feitas para a URL base:

[https://api.lirapaybr.com/v1](https://api.lirapaybr.com/v1)

Por exemplo, para criar uma transação, é usado o endpoint:

```
POST https://api.lirapaybr.com/v1/transactions
```

### Autenticação

A autenticação é feita por meio de um cabeçalho enviado junto com cada requisição:

**api-secret: SEU_API_SECRET**

Esse identificador garante que apenas seu sistema possa realizar operações em sua conta.

### Base do Código

Para facilitar a implementação, aqui vai um exemplo de um checkout simples com PIX usando a API da LiraPay. Não precisa decorar tudo, irei utilizar em exemplos práticos mais adiante.

```typescript
// lirapay.ts
const BASE_URL = "https://api.lirapaybr.com/v1";

export class LiraPay {
    private apiSecret: string;

    constructor(apiSecret: string) {
        this.apiSecret = apiSecret;
    }

    private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                "api-secret": this.apiSecret,
                ...(options.headers || {}),
            },
        });

        if (!res.ok) {
            const error = await res.text();
            throw new Error(`Erro na requisição (${res.status}): ${error || res.statusText}`);
        }

        return res.json() as Promise<T>;
    }

    // Conta
    async getAccountInfo() {
        return this.request<{
            email: string;
            name?: string;
            document?: string;
        }>("/account-info");
    }

    // Transações
    async getTransaction(transactionId: string) {
        return this.request<any>(`/transactions/${transactionId}`);
    }

    async createTransaction(data: {
        external_id: string;
        total_amount: number;
        payment_method: "PIX";
        webhook_url: string;
        items: {
            id: string;
            title: string;
            description: string;
            price: number;
            quantity: number;
            is_physical: boolean;
        }[];
        ip: string;
        customer: {
            name: string;
            email: string;
            phone: string;
            document_type: "CPF" | "CNPJ";
            document: string;
            utm_source?: string;
            utm_medium?: string;
            utm_campaign?: string;
            utm_content?: string;
            utm_term?: string;
        };
        splits?: { recipient_id: string; percentage: number }[];
    }) {
        return this.request<any>(`/transactions`, {
            method: "POST",
            body: JSON.stringify(data),
        });
    }

    // Envios
    async getShippings(params?: {
        page?: number;
        limit?: number;
        shipping_code?: string;
        shipping_status?: "PROCESSED" | "PROCESSING";
        initial_date?: string;
        final_date?: string;
        transaction_id?: string;
    }) {
        const query = params
            ? "?" +
              new URLSearchParams(
                  Object.entries(params).reduce(
                      (acc, [k, v]) => {
                          if (v !== undefined && v !== null) acc[k] = String(v);
                          return acc;
                      },
                      {} as Record<string, string>,
                  ),
              ).toString()
            : "";

        return this.request<any>(`/shippings${query}`);
    }

    async updateShippingDetails(
        transactionId: string,
        data: {
            shipping_code?: string;
            shipping_status?: "PROCESSED" | "PROCESSING";
            shipping_tracking_url?: string;
            shipping_arrive_date?: string; // ISO 8601
        },
    ) {
        return this.request<any>(`/shipping_details/${transactionId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
        });
    }

    // Cashout
    async createCashout(data: {
        external_id: string;
        pix_key: string;
        pix_type: "CPF" | "CNPJ" | "EMAIL" | "PHONE" | "RANDOM";
        amount: number;
        webhook_url: string;
    }) {
        return this.request<any>(`/cashout`, {
            method: "POST",
            body: JSON.stringify(data),
        });
    }
}
```

### Criando uma cobrança PIX

Ao criar uma cobrança, o sistema retorna um QR Code dinâmico ou uma chave PIX Copia e Cola que o cliente deve utilizar para finalizar o pagamento.

Exemplo de parâmetros de uma cobrança:

- Valor da transação
- Identificação do pedido ou do cliente
- Data e hora de expiração do QR Code
- Dados de callback para notificação (webhook)

Após o pagamento, o status da transação é atualizado automaticamente na sua conta e pode ser consultado pela API ou recebido no seu webhook.

```typescript
// pegar informações da conta
async function exemploConta() {
    const account = await client.getAccountInfo();
    console.log("Conta vinculada:", account);
}
```

```typescript
import { LiraPay } from "./lirapay";

const client = new LiraPay("SEU_API_SECRET");

// criar uma transação PIX
async function exemploTransacao() {
    const tx = await client.createTransaction({
        external_id: "pedido_123",
        total_amount: 59.9,
        payment_method: "PIX",
        webhook_url: "https://meusite.com/webhook",
        ip: "192.168.0.1",
        items: [
            {
                id: "prod_1",
                title: "Curso React",
                description: "Curso completo de React",
                price: 59.9,
                quantity: 1,
                is_physical: false,
            },
        ],
        customer: {
            name: "João Silva",
            email: "joao@email.com",
            phone: "11999999999",
            document_type: "CPF",
            document: "12345678900",
        },
    });

    console.log("Transação criada:", tx);
}
```

### Consultando informações da conta

Para acompanhar saldo, histórico e limites de movimentação, a API também oferece endpoints de consulta. Isso permite que você centralize todo o controle financeiro em seu próprio sistema.

```typescript
import { LiraPay } from "./lirapay";

const client = new LiraPay("SEU_API_SECRET");

// consultar transação
async function exemploConsultar() {
    const tx = await client.getTransaction("c22dc7e1-8b10-4580-9dc4-ebf78ceca475");
    console.log("Transação:", tx);
}
```

### Boas práticas na implementação

- Configure um webhook confiável para receber atualizações em tempo real.
- Trate os diferentes status da transação (pendente, pago, expirado).
- Armazene os registros de transações em seu banco de dados para auditoria.
- Teste em ambiente de homologação antes de disponibilizar para clientes.
- Ofereça uma interface simples e clara, reduzindo cliques desnecessários no checkout.

```typescript
// cashout
import { LiraPay } from "./lirapay";

const client = new LiraPay("SEU_API_SECRET");

async function exemploCashout() {
    const cashout = await client.createCashout({
        external_id: "cashout_001",
        pix_key: "12345678900",
        pix_type: "CPF",
        amount: 100.5,
        webhook_url: "https://meusite.com/cashout-webhook",
    });

    console.log("Cashout solicitado:", cashout);
}
```

## Conclusão

O checkout com PIX já não é apenas uma tendência, mas uma realidade consolidada no Brasil. A praticidade, a velocidade e o baixo custo tornam essa modalidade de pagamento essencial para negócios que querem aumentar suas conversões e oferecer a melhor experiência possível aos clientes.

Ao integrar a API da LiraPay, você elimina intermediários, reduz custos e mantém controle total sobre seu fluxo financeiro, tudo isso com a segurança e a instantaneidade do PIX.

Com um bom planejamento e uma integração bem feita, o checkout se torna não apenas uma etapa de pagamento, mas um diferencial competitivo para o seu negócio.

Se caso queira saber mais sobre como implementar funcionalidades específicas ou resolver dúvidas técnicas, fique à vontade para analisar a [documentação completa da API da LiraPay](https://api.lirapaybr.com/integration/docs/api).
