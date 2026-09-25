---
name: sousza-brand-design
description: "Diretrizes canônicas de design visual, paleta cromática extraída da logo e enquadramento de seções por tela (100vh) para a Sousza Consultoria Inteligente."
risk: safe
source: internal
date_added: "2026-09-25"
---

# Sousza Brand Design & Viewport Sectioning

Esta skill estabelece os padrões visuais oficiais e regras de enquadramento de tela da **Sousza Consultoria Inteligente**, garantindo coerência cromática com a logomarca oficial e uma experiência executiva imersiva por seção (*Viewport-Snap Presentation*).

---

## 🎨 1. Paleta Cromática Canônica Extraída da Logo

A logo oficial ([assets/sousza_logo_mark.jpg](file:///c:/Users/alexk/Desktop/Alex_Souza_Consultoria_Tech_IA/05_site_institucional/assets/sousza_logo_mark.jpg)) combina a arquitetura moderna dos cobogós do Recife com a solidez executiva do Porto Digital.

### Cores Oficiais:
- **Ouro Cobogó Solar (Monograma Principal):** `#CD8C38` (RGB: `205, 140, 56`)
  - Variação Luminosa / Hover: `#DE9D49`
  - Variação Profunda / Glow: `rgba(205, 140, 56, 0.25)`
- **Terracota Solar Recife (Ações & CTAs de Alta Energia):** `#C2410C` (RGB: `194, 65, 12`)
  - Hover: `#9A3412`
  - Glow: `rgba(194, 65, 12, 0.3)`
- **Ardósia Petróleo Profundo (Fundo da Logo e Superfícies):**
  - Fundo Dark Body: `#0E1419`
  - Superfície Elevada (Cards): `#161F26`
  - Borda Sutil: `#23303A`
  - Destaque Ardósia Logo: `#2C353A`
- **Métricas & Sucesso:** `#10B981` (Emerald Mint)
- **WhatsApp Oficial:** `#25D366`

---

## 🖥️ 2. Regra de Enquadramento por Tela (Viewport Sectioning)

Para proporcionar uma navegação executiva que funcione como uma apresentação fluida (*presentation-grade flow*):

1. **Altura Mínima por Seção:**
   Cada bloco principal (`#home`, `#sobre`, `#servicos`, `#projetos`, `#diferenciais`, `#calculadora`, `#faq`, `#contato`) deve possuir:
   ```css
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 100px 0 60px;
   box-sizing: border-box;
   scroll-snap-align: start;
   ```
2. **Scroll Snap Opcional / Fluido:**
   `html { scroll-behavior: smooth; }` garantindo que o clique nos links do menu posicione o usuário exatamente no topo da seção correspondente.
3. **Distribuição Vertical Equilibrada:**
   Os conteúdos internos das seções devem utilizar grids adaptativos para que caibam confortavelmente em telas padrão (1080p, MacBooks e monitores ultrawide) sem empurrar botões para fora do campo de visão imediato.

---

## ⚡ 3. TypeScript & Robustez no Frontend

- Todo código de lógica interativa (calculadora, tema, máscara de telefone, submissão Supabase) deve ser mantido em TypeScript fortemente tipado (`src/app.ts`), compilado para `app.js` de produção.
- Zero `any` solto; interfaces explícitas para leads, serviços, calculadora e tema.
