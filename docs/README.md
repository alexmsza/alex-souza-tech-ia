# Documentação Corporativa & Técnica — Sousza Consultoria Inteligente
## Repositório Central de Estratégia, Engenharia e Diretrizes Comerciais

> **Operação:** Sousza Consultoria Inteligente  
> **Liderança:** Alex Souza — Fundador, Principal Tech Lead & Business Advisor  
> **Sede:** Porto Digital • Bairro do Recife, Recife/PE • Atendimento Nacional  
> **Deploy Oficial:** [https://souszaconsultoria.vercel.app](https://souszaconsultoria.vercel.app)

---

## 🧭 Estrutura da Documentação (`docs/`)

```
docs/
├── 01_estrategia_e_posicionamento/        # Diretriz executiva e plano de negócios consolidado
│   └── 01_DIRETRIZ_ESTRATEGICA_E_PLANO_DE_NEGOCIOS.md
│
├── 02_identidade_marca_naming_e_design/   # Naming homologado, manual visual e design system
│   ├── 01_SUGESTOES_DE_NOMES_PARA_APROVACAO.md
│   ├── 02_MANUAL_DE_IDENTIDADE_VISUAL_E_DESIGN_SYSTEM.md
│   └── 03_tokens_design_system.css
│
├── 03_catalogo_de_servicos_e_precificacao/ # Catálogo de 8 eixos, tabela de preços e simulador de ROI
│   ├── 01_CATALOGO_COMPLETO_DE_SERVICOS.md
│   ├── 02_TABELA_DE_PACOTES_CUSTOS_E_PRECOS.md
│   └── 03_calculadora_financeira_roi.py
│
├── 04_guia_gtm_vendas_e_fechamento/       # Roteiro GTM 30 dias, Discovery SPIN, proposta e scripts
│   ├── 01_GUIA_TATIC_DO_ZERO_AOS_PRIMEIROS_CONTRATOS.md
│   ├── 02_ROTEIRO_CANONICO_DISCOVERY_E_SPIN_SELLING.md
│   ├── 03_MODELO_DE_PROPOSTA_COMERCIAL_IRRECUSAVEL.md
│   ├── 04_SCRIPTS_DE_ABORDAGEM_WHATSAPP_E_LINKEDIN.md
│   └── 05_ANALISE_DE_CONCORRENCIA_E_DIFERENCIAIS.md
│
├── 05_juridico_e_contratos/               # Minutas contratuais com escopo fechado, Fair Use e NDA/LGPD
│   ├── 01_MINUTA_CONTRATUAL_PRESTACAO_SERVICOS_TECH_IA.md
│   └── 02_ACORDO_DE_CONFIDENCIALIDADE_E_LGPD_NDA.md
│
└── 06_engenharia_e_esteiras_internas/     # Tese Free-Tier First (OPEX Zero) e script de migração Supabase
    ├── 01_DIRETRIZ_TECNICA_FREE_TIER_FIRST_OPEX_ZERO.md
    └── setup_site_leads_table.py
```

---

## 🛡️ Diretrizes de Produção e Deploy
- **Branch `deploy`:** Utilizada como branch oficial de produção na Vercel, contendo **exclusivamente os arquivos do site** (`index.html`, `styles.css`, `app.js`, `assets/`, `vercel.json`), sem arquivos de documentação interna ou minutas contratuais.
- **Branch `main`:** Mantém o repositório completo com toda a documentação corporativa, histórico e ferramentas internas.
