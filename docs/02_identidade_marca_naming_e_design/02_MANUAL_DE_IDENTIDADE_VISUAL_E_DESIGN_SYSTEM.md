# Manual de Identidade Visual, Design System & Tom de Voz
## Consultoria de Negócios e Tecnologia com IA — Alex Souza

> **Padrão Canônico:** Este manual estabelece as diretrizes visuais e comunicacionais oficiais para a operação de consultoria de Alex Souza. Cada proposta, página web, apresentação de slides ou mensagem deve refletir o nível de excelência de um Tech Lead Sênior e consultor estratégico.

---

## 🗣️ 1. Tom de Voz e Diretrizes de Comunicação

### 1.1. Princípio Fundamental: O Foco na Vida Real do Empresário
Donos de empresas e diretores não compram parâmetros técnicos ou sopa de letrinhas; compram **alívio de estresse, tempo livre, controle de dados, processos que funcionam e mais dinheiro no caixa**.
- Fale da rotina deles: *"Seu cliente hoje clica no anúncio e espera 3 horas no WhatsApp para ser atendido. Vamos colocar um sistema inteligente que responde em 5 segundos, tira dúvidas e só passa para o seu time quem já está pronto para comprar."*
- Nunca prometa revoluções mágicas; prometa entregas concretas, testadas e com prazo exato.

### 1.2. Lista de Substituição de Termos (Eliminação de Jargões Robóticos)

| ❌ Termo a Evitar (Vazio / Artificial) | ✅ Substituição Humana, Executiva e Comercial |
| :--- | :--- |
| *DataSecAIOps / Malha cognitiva* | **Rotinas seguras de tecnologia e infraestrutura estável.** |
| *Inteligência soberana digital* | **Soluções proprietárias da sua empresa, sem dependência de plataformas fechadas.** |
| *Síntese neural de processos* | **Fluxo integrado de trabalho e automação inteligente.** |
| *Orquestração simétrica de negócios* | **Parceria real entre estratégia de gestão e tecnologia prática.** |
| *Estancar vazamento crônico de receita* | **Evitar que você perca clientes por desorganização ou demora no atendimento.** |
| *Hiper-escalabilidade determinística* | **Crescer o faturamento de forma previsível e sem gargalos operacionais.** |
| *Esquadrão cibernético multi-agente* | **Equipe especializada e esteira ágil de tecnologia e automação.** |
| *Ingestão multimodal de assets* | **Importação e tratamento organizado de fotos, planilhas e documentos.** |

---

## 🎨 2. Paleta de Cores Institucional (Enterprise Tech Grade)

Inspirada no design de classe mundial de empresas como **Stripe, Linear e Vercel**, a paleta equilibra autoridade executiva clássica com inovação tecnológica moderna, evitando temas espalhafatosos ou neons artificiais.

```
+-----------------------------------------------------------------------------------+
|  PRIMARY: Deep Cobalt (#0F172A)     |  ACCENT TECH: Kinetic Cyan (#06B6D4)       |
|  SECONDARY: Slate Navy (#1E293B)    |  GROWTH/DATA: Emerald Mint (#10B981)       |
|  SURFACE: Obsidian Dark (#090D16)   |  LIGHT SURFACE: Crisp Pure (#FFFFFF)       |
+-----------------------------------------------------------------------------------+
```

### 2.1. Tabela Canônica de Cores e Tokens CSS

| Nome do Token | Hexadecimal | RGB | Função e Aplicação |
| :--- | :---: | :---: | :--- |
| `--color-bg-dark` | `#090D16` | `9, 13, 22` | Fundo principal da interface no Modo Escuro (Dark Mode). |
| `--color-card-dark` | `#131B2E` | `19, 27, 46` | Superfície elevada para cards, modais e containers escuros. |
| `--color-border-dark` | `#1E293B` | `30, 41, 59` | Bordas sutis e divisores no modo escuro. |
| `--color-primary` | `#0F172A` | `15, 23, 42` | Azul Marinho Profundo; cor de autoridade e texto no modo claro. |
| `--color-accent-cyan` | `#06B6D4` | `6, 182, 212` | Ciano Tecnológico; destaque de botões de ação e links ativos. |
| `--color-accent-emerald` | `#10B981` | `16, 185, 129` | Verde Esmeralda; métricas de crescimento, ROI e sucesso. |
| `--color-text-main` | `#F8FAFC` | `248, 250, 252` | Tipografia primária com alto contraste e legibilidade. |
| `--color-text-muted` | `#94A3B8` | `148, 163, 184` | Tipografia secundária para legendas e descrições. |
| `--color-bg-light` | `#F8FAFC` | `248, 250, 252` | Fundo principal no Modo Claro (Light Mode). |
| `--color-card-light` | `#FFFFFF` | `255, 255, 255` | Superfície de cards e blocos de conteúdo no modo claro. |

---

## 🔤 3. Tipografia Canônica

Utilizamos fontes Google de código aberto, modernas e universais:

1. **Títulos e Headings (Display):**
   - **Família:** `Plus Jakarta Sans` ou `Outfit`, sans-serif.
   - **Pesos:** 600 (SemiBold), 700 (Bold), 800 (ExtraBold).
   - **Estilo:** Letras geométricas com espaçamento ligeiramente reduzido (`letter-spacing: -0.02em`) para transmitir precisão e modernidade.

2. **Corpo de Texto (Body Text):**
   - **Família:** `Inter`, sans-serif.
   - **Pesos:** 400 (Regular), 500 (Medium).
   - **Estilo:** Excelente legibilidade em telas pequenas, entrelinha confortável (`line-height: 1.6`).

3. **Métricas, Códigos e Dados (Data & Code):**
   - **Família:** `JetBrains Mono` ou `Fira Code`, monospace.
   - **Pesos:** 500 (Medium), 600 (SemiBold).
   - **Estilo:** Usada para apresentar snippets de código, tempos de resposta de APIs, KPIs e valores financeiros.

---

## 📐 4. Elementos Visuais e Componentes de Interface

### 4.1. Cards e Superfícies
- **Raio de Borda (Border Radius):** `12px` a `16px` para cards principais; `8px` para botões e inputs.
- **Bordas Sutis:** Linhas de `1px` com transparência suave (`rgba(255, 255, 255, 0.08)` no escuro e `rgba(15, 23, 42, 0.08)` no claro).
- **Glassmorphism:** Efeito de desfoque sutil (`backdrop-filter: blur(12px)`) no menu de navegação e em cards flutuantes.

### 4.2. Botões e Ações (Call to Action — CTA)
- **Botão Primário:** Fundo com gradiente suave entre Ciano `#06B6D4` e Azul Esmeralda `#0EA5E9`, texto escuro contrastante, hover com leve elevação (`transform: translateY(-2px)`).
- **Botão Secundário:** Borda sutil com fundo translúcido, transmitindo sofisticação técnica.
- **Botão de WhatsApp Direto:** Ícone oficial do WhatsApp acompanhado de verde orgânico (`#25D366`), acionando conversa imediata com mensagem contextualizada.

### 4.3. Badges e Tags de Status
- Tags arredondadas (`rounded-full`) com padding `4px 12px`, indicando tecnologias (ex: `Next.js`, `FastAPI`, `DuckDB`, `Supabase`, `Meta Ads`).
- Fundo translúcido (10% de opacidade) com texto na cor do acento.

---

## 📱 5. Padrão de Layouts Responsivos

1. **Desktop (Grid de 12 Colunas):** Largura máxima do container de `1200px` a `1280px`, margens laterais automáticas.
2. **Mobile (1 Coluna Fluida):** Padding horizontal mínimo de `20px`, botões com altura mínima de `48px` para toque confortável, menus simplificados.
3. **Alternância Claro / Escuro (Theme Toggle):** Chave com ícones sol/lua no canto superior direito com transição suave (`transition: all 0.3s ease`).
