# Design Spec — Demo Dr Ricardo Rizzo Luiz

**Data:** 2026-05-15
**Status:** Visualmente aprovado no Figma (desktop + mobile). Pronto pra implementação Next.js.
**Figma file:** `2PikAyJ6676v6UUlFbAq9g` (https://figma.com/design/2PikAyJ6676v6UUlFbAq9g/)
**Implementação alvo:** `C:\nashpages-demos\demos\dr-ricardo-rizzo-luiz\` (config.ts + public/demos/dr-ricardo-rizzo-luiz/) — sistema demos Nashpages
**URL final:** `https://demos.nashpages.com.br/dr-ricardo-rizzo-luiz`

## 1. Objetivo

Demo Premium pra cold outreach via WhatsApp pro Dr Ricardo Rizzo Luiz, cirurgião vascular em Florianópolis. Demonstrar capacidade da Nashpages de entregar site editorial premium R$6.500-9.000, single-page long-scroll, mobile-friendly, com identidade visual única (não-template, não-IA).

## 2. Contexto do prospect

Dr Ricardo Rizzo Luiz — cirurgião vascular + angiologista, dupla especialização (Cirurgia Geral + Vascular), formado FURB Blumenau 2012, médico regulador SAMU Florianópolis, instrutor ACLS American Heart Association, voz ativa no Consenso Brasileiro de Lipedema 2025, criador do protocolo BeyondLegs, **Destaque Forbes Latina 2025** como referência nacional em lipedema e varizes. Atende em São José/SC (clínica) e Florianópolis. Foco: varizes, vasinhos, lipedema (nicho dedicado, Instagram separado).

Contato: WhatsApp (48) 99199-5583, @drricardorizzoluiz, @lipedemaflorianopolis.

## 3. Identidade Visual ("Editorial Clínico Premium Brasileiro")

### 3.1 Paleta

```css
--branco:  #FFFFFF;  /* bg principal */
--tinta:   #1A1A1A;  /* texto principal */
--grafite: #4A4A4A;  /* eyebrows, body */
--cinza:   #6B6B6B;  /* meta, footer */
--dourado: #B89554;  /* accent (CTAs, dividers, numbers) — dourado fosco, NÃO #D4AF37 clichê */
--linha:   #E8E8E8;  /* borders/dividers sutis */
```

### 3.2 Tipografia

```
DISPLAY  Inter Regular   60-144pt   headlines/hero
BODY     Inter Regular   15-22pt    parágrafos
META     JetBrains Mono  9-13pt     UPPERCASE — meta, números, eyebrows
```

Fontes via `next/font/google`, weights `[300, 400, 500, 600]` Inter + `[400, 500]` JetBrains Mono.

Letter-spacing: `-2.5%` em display monumental, `0` em body, `14-18%` em mono UPPERCASE.

### 3.3 Animação core

**Parallax cinematográfico pesado.** Fotos em camada própria, texto em outra, scroll cria profundidade. Implementar com **Framer Motion** (`useScroll` + `useTransform`) — já está instalada no projeto Nashpages-demos. Lenis (smooth scroll) também já instalada. NÃO adicionar GSAP.

Intensidades por section:
- §01 Hero: parallax 0.8 (foto direita)
- §02 Sobre: sem foto, fade-up sequencial
- §Forbes: parallax 0.6 (capa esquerda)
- §03 Tratamentos: hover-lift sutil + fade-up em cards
- §04 Tecnologia: parallax 0.7 (foto top)
- §05 Atendimento: fade-up só
- §06 Contato: zoom-in headline + pulse no CTA

Respeitar `prefers-reduced-motion`.

### 3.4 Signature elements

- **Numeração mono dourada** nas sections: `§ 01 / SECTION_NAME` mono UPPERCASE
- **Top-border dourado fino (1px)** em cards/strips (§02 credenciais, §03 cards, §04 specs, §05 ONDE/COMO)
- **CTA pill grande dourado** em momentos de conversão (Nav + §06 Contato)
- **CTAs secundários** com underline 1px dourado/cinza
- **Eyebrow mono** com `/` ou `§` antes do label

### 3.5 Tom de voz

- **Hero:** humano-direto, insight psicológico
- **§02-§04:** técnico-preciso com peso editorial
- **§05:** funcional/informativo
- **§Forbes:** institucional-editorial
- **§06:** convite direto, sem firula
- **Meta/credenciais:** mono UPPERCASE, vibe ficha técnica FT

## 4. Arquitetura: 8 sections + footer (single-page long-scroll)

### §01 Hero (Split foto-right + texto-left)

**Desktop 1440×1080** · **Mobile 375×720** (foto top em mobile)

- **Nav sticky:** logo "DR RICARDO" + links (SOBRE · TRATAMENTOS · CONSULTÓRIO · CONTATO) + CTA pill dourado "AGENDAR"
- **Hero content (left zone):**
  - Eyebrow: `/  CIRURGIÃO VASCULAR  ·  FLORIANÓPOLIS`
  - Headline: `Voltar a andar / sem pensar nelas.` (Inter Regular 108pt desktop · 32pt mobile)
  - 2 CTAs: `AGENDAR CONSULTA →` (underline dourado, link WhatsApp) · `CONHECER O DR →` (underline cinza, anchor #sobre)
- **Foto right (35% width desktop / top mobile):** portrait.jpg do Dr Ricardo
- **Meta bar bottom:** `§ 01 / HERO` esquerda + `SCROLL ↓` direita (mono cinza)

### §02 Sobre o Dr Ricardo (Editorial puro, sem foto)

**Desktop 1440×1080** · **Mobile 375×1100**

Single column central:
- Eyebrow: `§ 02 / SOBRE O DR RICARDO`
- Headline: `Um cirurgião / com dupla / especialização.` (88pt desktop · 32pt mobile)
- Divider linha dourada 80px
- 2-col (desktop) / stack (mobile):
  - Pull quote Italic: `"Diagnosticar antes / de operar."` (36pt) + atribuição `— DR RICARDO RIZZO LUIZ`
  - Bio editorial (17pt body): "Cirurgião vascular formado pela FURB (Blumenau, 2012)..."
- **Strip 5 credenciais horizontal** com top-border dourado em cada:
  - 01 FORMAÇÃO · FURB BLUMENAU · 2012
  - 02 DUPLA ESP. · CIRURGIA GERAL + VASCULAR
  - 03 SAMU · MÉDICO REGULADOR · FLORIANÓPOLIS
  - 04 ACLS · INSTRUTOR · AHA
  - 05 MÍDIA · NDTV · ND+ · REVISTA SAÚDE

### §Forbes Reconhecimento (Split capa-left dark + texto-right)

**Desktop 1440×1080** · **Mobile 375×1000** (capa top em mobile)

- **Capa Forbes Latina** (full-bleed esquerda 50% desktop / top mobile)
  - bg dark cinematic (capa original tem fundo preto)
  - QR code visível pra acessar matéria
- **Texto editorial (right zone):**
  - Eyebrow dourado: `/  FORBES LATINA  ·  DESTAQUE 2025`
  - Headline: `Referência nacional / em lipedema / e varizes.` (56pt desktop · 28pt mobile)
  - Divider linha dourada
  - Body: "Forbes Latina destaca o Dr Ricardo como uma das principais autoridades brasileiras no tratamento de lipedema e varizes. Criador do protocolo **BeyondLegs** e voz ativa no **Consenso Brasileiro de Lipedema 2025**."
  - CTA: `ACESSAR MATÉRIA NA FORBES →` (underline dourado, link `https://forbeslatina.com/...`)
  - Strip mídia: NDTV · RECORD · ND+ · REVISTA SAÚDE

### §03 Tratamentos (Grid 3 cards)

**Desktop 1440×1080** (grid horizontal) · **Mobile 375×2000** (stack vertical)

- Eyebrow: `§ 03 / TRATAMENTOS`
- Headline: `Três especialidades, / um consultório.` (64pt desktop · 38pt mobile)
- 3 cards (foto top 60% + texto bottom 40%):
  - **01 VARIZES** — foto pernas em luz natural + "Escleroterapia com espuma, laser endovenoso e cirurgia convencional. Diagnóstico por ultrassom doppler na primeira consulta."
  - **02 VASINHOS** — foto profissional aplicando laser + "Microescleroterapia e laser transdérmico. Sessões ambulatoriais, sem internação. Resultado progressivo, sem afastamento."
  - **03 LIPEDEMA** — foto drenagem linfática manual + "Avaliação clínica especializada e tecnologia Deep Slim. Acompanhamento contínuo com nutrição e estilo de vida."
- Cada card: num dourado 32pt + name mono 22pt UPPERCASE + body 15pt + `VER DETALHES →` mono dourado

### §04 Tecnologia em consultório (Foto top + texto bottom)

**Desktop 1440×1080** · **Mobile 375×900**

- **Foto top 50%** (full-bleed): consultório real do Dr (hero.jpg) — mármore + madeira + cadeira procedimento
- **Texto bottom 50%:**
  - Eyebrow: `§ 04 / TECNOLOGIA EM CONSULTÓRIO`
  - Headline (2-col desktop, stack mobile): `Tecnologia / no mesmo / consultório.` (56pt) + body
  - Strip 3 specs horizontal com top-border dourado:
    - 01 DOPPLER · ULTRASSOM VENOSO
    - 02 ACLS · INSTRUTOR AHA
    - 03 DEEP SLIM · TECNOLOGIA LIPEDEMA

### §05 Atendimento (Editorial denso, 2-col paralelo)

**Desktop 1440×720** (mais curto, "interlude") · **Mobile 375×720**

Zero foto. Tipográfico.

- Eyebrow: `§ 05 / ATENDIMENTO`
- Headline: `Onde, e como.` (88pt 1 linha desktop · 48pt 2 linhas mobile)
- 2-col paralelo (desktop) / stack (mobile), cada um com top-border dourado:
  - **ONDE:** 4 linhas (clínica/endereço/CEP/cidades atendidas)
  - **COMO:** 4 linhas (SC Saúde/UNIMED/particular/doppler primeira consulta)

### §06 Contato (Monumental tipográfico finale)

**Desktop 1440×1080** · **Mobile 375×800**

Tipográfico puro, left-aligned:

- Eyebrow: `§ 06 / CONTATO`
- Headline GIGANTE: `Vamos cuidar / disso.` (144pt desktop · 48pt mobile)
- Body: "Agende sua consulta direto pelo WhatsApp. Resposta no mesmo dia útil."
- **CTA pill grande dourado:** `AGENDAR PELO WHATSAPP →` (link `wa.me/5548991995583`)
- Tel mono: `(48) 99199-5583 — DIRETO COM O DOUTOR`
- Links sociais row mono UPPERCASE: `@DRRICARDORIZZOLUIZ · @LIPEDEMAFLORIANOPOLIS · DRRICARDORIZZOLUIZ.COM.BR`

### Footer (Institucional 3-col)

**Desktop 1440×240** · **Mobile 375×460**

- Border-top sutil cinza
- 3 cols (desktop) / stack (mobile):
  - Logo "DR RICARDO" + dados (CRM/RQE + endereço completo)
  - NAVEGAR (4 links anchor)
  - REDES (3 links Insta/site)
- Bottom row: copyright + CNPJ + "SITE POR NASHPAGES"

## 5. Stack de implementação

Aderente à infra Nashpages Demos existente:

```
Next.js 16 + React 19 + TypeScript 5
Tailwind CSS v4 (já configurado em C:\nashpages-demos)
Framer Motion 12 + Lenis (já instalados)
next/font/google (Inter + JetBrains Mono)
```

**Estrutura de código:**

```
demos/dr-ricardo-rizzo-luiz/
  config.ts          ← DemoConfig com paleta, conteúdo, fotos

public/demos/dr-ricardo-rizzo-luiz/
  portrait.jpg       ← Dr Ricardo (já existe)
  hero.jpg           ← consultório (já existe)
  clinica.jpg        ← Dr atendendo (já existe, não usar)
  forbes-capa.jpg    ← capa Forbes Latina (precisa salvar)
  varizes.jpg        ← Pexels 17040719
  vasinhos.jpg       ← Pexels 5069508
  lipedema.jpg       ← Pexels 5888064 v2

app/[slug]/page.tsx  ← rota dinâmica existente (SSG)

components/demo/     ← REESCREVER 7 components do template existente:
  DemoLayout.tsx     ← orquestra
  DemoNav.tsx        ← nav sticky
  DemoHero.tsx       ← §01
  DemoSobre.tsx      ← §02 (novo)
  DemoForbes.tsx     ← §Forbes (novo)
  DemoTratamentos.tsx ← §03 (substitui DemoEspecialidades)
  DemoTecnologia.tsx ← §04 (novo)
  DemoAtendimento.tsx ← §05 (novo)
  DemoContato.tsx    ← §06 (substitui DemoContato existente)
  DemoFooter.tsx     ← footer
```

**ATENÇÃO:** os 7 components atuais em `components/demo/` foram construídos pra V1 ESTÉTICA (Cormorant verde-jade) que foi rejeitada em 2026-05-14. **REESCREVER do zero** baseado neste spec — não reaproveitar cegamente.

## 6. Decisões não óbvias / pontos de atenção

1. **Foto Dr Ricardo aparece SÓ 1x no site** (§01) — pra não virar "personagem em cima". §02 propositadamente sem foto.
2. **Inter Regular (não Light)** em escalas grandes — Inter Display não está no Google Fonts, e Light em bg branco fica fraca.
3. **Dourado fosco #B89554** (não #D4AF37 clichê) — diferencia do mercado.
4. **Single-page long-scroll** — multi-page quebra o flow cinematic do parallax core.
5. **Mobile mantém identidade** mas adapta patterns: splits viram stacks, escalas reduzem, CTAs full-width.

## 7. Pendências antes de publicar

- [ ] **CRM/RQE corretos:** memória diz CRM/SC 18.482 · RQE 7.829; post Forbes diz CRM 18647 · RQE 17257. Confirmar com Dr antes de publicar (dado regulado CFM).
- [ ] **URL real da matéria Forbes** pra linkar no CTA "ACESSAR MATÉRIA NA FORBES" (provavelmente `https://forbeslatina.com/...`).
- [ ] **Validar protocolo BeyondLegs** e participação no Consenso Brasileiro de Lipedema 2025 — afirmações têm peso e precisam ser verdadeiras.
- [ ] **Domínio:** `demos.nashpages.com.br/dr-ricardo-rizzo-luiz` (slug a confirmar).
- [ ] **Mensagem WhatsApp** pro Dr Ricardo só DEPOIS de tudo aprovado + URL no ar.

## 8. Próximos passos

1. Spec self-review (este documento) ✓
2. User review (Enzo aprova spec) ← próxima etapa
3. `writing-plans` skill cria plano de implementação detalhado
4. Implementação Next.js seguindo o plano
5. Deploy Vercel + DNS check
6. Envio WhatsApp pro Dr Ricardo

## 9. Referências

- Figma file canônico: `2PikAyJ6676v6UUlFbAq9g`
- Memórias salvas:
  - `project_dr_ricardo_demo_2026_05_15_approved.md` (síntese completa da sessão)
  - `project_dr_ricardo_rizzo_luiz.md` (dossiê prospect)
  - `feedback_dr_ricardo_design_directions_rejected.md` (4 direções 2026-05-14 + 1 dark 2026-05-15)
  - `project_nashpages_demos_infra.md` (infra Next.js)
  - `reference_dr_ricardo_figma.md` (file Figma)
