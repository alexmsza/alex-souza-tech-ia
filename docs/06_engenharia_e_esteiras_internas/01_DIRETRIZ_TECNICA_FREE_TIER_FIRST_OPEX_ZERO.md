# Diretriz Interna de Engenharia: Arquitetura Free-Tier First & OPEX Zero
## Alex Souza — Consultoria de Negócios e Tecnologia com IA

> 🔒 **DOCUMENTO DE USO INTERNO ESTRITO — NÃO COMPARTILHAR COM CLIENTES**  
> *Esta diretriz documenta o método de engenharia e a esteira de prototipagem ágil utilizada pela consultoria. O cliente contrata e paga pelo valor de negócio gerado e pela entrega do produto funcionando, enquanto nossa esteira interna opera com custo fixo praticamente zero.*

---

## 🏛️ 1. A Tese do "Free-Tier First" na Prototipagem Ágil

No desenvolvimento tradicional, agências e consultorias cobram orçamentos exorbitantes alegando "custos altos de servidores e infraestrutura". Nossa vantagem competitiva de entrega rápida e alta margem de lucro (> 85%) se apoia no princípio do **Free-Tier First**:

1. **Validação Rápida sem Custo Fixo:** Todo MVP, prova de conceito (PoC) ou primeira versão de sistema é construído utilizando os níveis gratuitos (*Free Tiers*) das melhores ferramentas do mercado mundial.
2. **Margem Líquida Preservada:** Em contratos pontuais de R$ 7.200 a R$ 9.800, o custo de infraestrutura é de R$ 0,00 ou desprezível (< R$ 50/mês), maximizando a receita líquida retida.
3. **Escala Gradual sob Demanda:** Quando o cliente valida o produto e atinge escala comercial de alto volume (ex: mais de 50.000 usuários ativos ou dezenas de milhares de mensagens), o upgrade para planos pagos (Pro/Enterprise) é realizado de forma transparente e faturado diretamente ao cliente.

---

## 🛠️ 2. O Stack Oficial de Prototipagem Zero OPEX

```
+───────────────────────────────────────────────────────────────────────────────────+
|                           ARQUITETURA FREE-TIER FIRST                             |
+───────────────────────────────────────────────────────────────────────────────────+
| FRONTEND & EDGE:      Vercel (Hobby Tier) / Cloudflare Pages (Free Ilimitado)     |
| BANCO DE DADOS:       Supabase (PostgreSQL 500MB Free + Auth 50k MAU)            |
| COMPUTAÇÃO & BOTS:    Oracle Cloud (OCI Always Free: 4 OCPUs ARM, 24GB RAM)       |
| GATEWAY WHATSAPP:     Evolution API (v2.3.7 Dockerizada na OCI - Zero Mensalidade)|
| INFERÊNCIA LLM:       Groq LPU (Llama 3.3 70B Free) + Hugging Face Router         |
| CONTROLE DE VERSÃO:   GitHub (Repositórios Privados + Actions 2.000 min Free)    |
| MOTOR DE AUTOMAÇÃO:   n8n / Python Serverless em containers Docker autohospedados |
+───────────────────────────────────────────────────────────────────────────────────+
```

### 2.1. Detalhamento dos Componentes

#### A) Supabase (PostgreSQL em Nuvem)
- **Nível Gratuito:** 2 projetos simultâneos, 500MB de banco PostgreSQL, até 50.000 usuários ativos mensais (MAU), 1GB de storage para arquivos e 500.000 execuções de Edge Functions.
- **Uso na Consultoria:** Persistência relacional de leads do site, dados de MVPs, tabelas de CRMs/ERPs customizados e histórico de mensagens de bots.

#### B) Vercel (Edge Cloud & Frontend)
- **Nível Gratuito:** Deploy contínuo integrado ao GitHub, certificado SSL automático (Let's Encrypt), rede CDN global com latência < 50ms, rotas serverless e Vercel Analytics.
- **Uso na Consultoria:** Hospedagem do site institucional e frontends de aplicações em Next.js e HTML/Tailwind.

#### C) Oracle Cloud Infrastructure (OCI Always Free)
- **Nível Gratuito Vitalício:** Instância ARM Ampere `VM.Standard.A1.Flex` com até 4 OCPUs virtuais e 24GB de memória RAM, 200GB de disco de bloco e 10TB de tráfego de saída por mês a custo ZERO vitalício.
- **Uso na Consultoria:** Hospedagem em container Docker da Evolution API (v2.3.7) para os bots de WhatsApp, servidor Redis para filas de mensagens e instâncias do n8n sem depender de planos caros de SaaS.

#### D) Groq LPU & Hugging Face Serverless (Inferência de IA)
- **Nível Gratuito:** Groq LPU oferece inferência ultra rápida (300+ tokens/segundo) com Llama 3.3 70B Versatile e Llama 3.1 8B Instant dentro das cotas gratuitas diárias de TPM e RPM. O Hugging Face Serverless Router atua como failover automático caso a cota do Groq atinja pico momentâneo.
- **Uso na Consultoria:** Raciocínio, geração de cópias, RAG de atendimento ao cliente e respostas de bots com latência instantânea a custo zero.

#### E) GitHub (Engenharia & CI/CD)
- **Nível Gratuito:** Repositórios públicos e privados ilimitados, GitHub Actions com 2.000 minutos de esteira de automação por mês.
- **Uso na Consultoria:** Versionamento de código, controle de entregas por sprint e gatilho de deploy automático para Vercel.

---

## 🤫 3. Postura Comercial: O Que o Cliente Vê vs O Que Fazemos

| Na Frente do Cliente (Comunicação Comercial) | Nos Bastidores Técnicos (Diretriz Interna) |
| :--- | :--- |
| *"Nossa arquitetura é moderna, serverless e cloud-native, desenhada para garantir máxima velocidade de carregamento e alta disponibilidade."* | Usamos Vercel Edge + Cloudflare CDN gratuita com deploys atômicos. |
| *"Seus dados ficam em um banco de dados relacional PostgreSQL de alto desempenho com criptografia em trânsito e em repouso."* | Usamos o cluster Supabase Free Tier com políticas de RLS e backup. |
| *"Implementamos agentes de atendimento inteligente 24/7 com tempo de resposta inferior a 5 segundos."* | Rodamos a Evolution API na OCI Always Free conectada à inferência do Groq LPU. |
| *"A entrega inclui 30 dias de suporte e homologação em produção."* | O custo de manter o ambiente rodando para o cliente nesses 30 dias é de R$ 0,00 para a consultoria. |

---

## 📈 4. Regra de Transição: Quando Migrar para Planos Pagos

A migração para planos pagos só deve ocorrer quando a empresa cliente tiver demanda de tráfego ou regras de conformidade corporativa que justifiquem:
1. **Banco de Dados > 500MB:** Upgrade para Supabase Pro ($25/mês), faturado diretamente no cartão corporativo do cliente.
2. **Equipe Comercial com Múltiplos Domínios Corporativos:** Upgrade para Vercel Pro ($20/mês/membro), contratado pelo cliente.
3. **Volume de WhatsApp > 50.000 mensagens/mês com SLA Empresarial:** Contratação da Meta Cloud API oficial ou VPS dedicada na OCI/AWS, com custos assumidos pelo cliente conforme nossa cláusula de Fair Use contratual.

---
*Diretriz interna homologada para todas as esteiras de prototipagem e desenvolvimento da consultoria.*
