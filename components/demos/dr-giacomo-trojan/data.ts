export const TROJAN_PALETTE = {
  papel: "#FAFAFB",
  pedra: "#EEEEEC",
  linha: "#DDDBD5",
  neblina: "#55534D",
  tinta: "#08080A",
  azul: "#0E2E6B",
  azulDeep: "#061A47",
  cinabrio: "#8E2C1A",
  cinabrioDeep: "#5F1B0F",
  footerBg: "#08080B",
} as const;

const BASE = "/demos/dr-giacomo-trojan";

export const TROJAN_DATA = {
  nav: {
    logo: "Giácomo Trojan.",
    links: [
      { label: "SOBRE", href: "#sobre" },
      { label: "CASOS", href: "#casos" },
      { label: "PROTOCOLO", href: "#protocolo" },
      { label: "CONTATO", href: "#contato" },
    ],
    ctaShort: { label: "AGENDAR", href: "#contato" },
  },
  hero: {
    eyebrow: "§ 01 · APRESENTAÇÃO",
    firstName: "Giácomo",
    lastName: "Trojan.",
    sublineItalic: "Cirurgião-Dentista. Implantes em casos complexos.",
    sublineRegular: "Carga imediata. Resultado em sessão única.",
    cta: { label: "Falar pelo WhatsApp", href: "#contato" },
    meta: ["CRO-PR 23896", "INSTITUTO IOVI", "BALNEÁRIO CAMBORIÚ/SC"],
    photo: `${BASE}/dr-giacomo.jpg`,
  },
  filosofia: {
    eyebrow: "§ 02 · FILOSOFIA",
    quote: ["Onde outros disseram não,", "a anatomia ainda", "tem respostas."],
    attribution: "— DR. GIÁCOMO TROJAN",
    bodyEyebrow: "SOBRE A PRÁTICA",
    body: [
      "Cirurgião-Dentista CRO-PR 23896. Formado pela Universidade de Taubaté em 2012, com Trabalho de Conclusão sobre próteses implantossuportadas — uma escolha que se confirmou na clínica.",
      "Atende exclusivamente no Instituto IOVI, em Balneário Camboriú. A rotina reúne diagnóstico digital, protocolos internacionais e carga imediata, sintetizados em uma única jornada cirúrgica.",
      "O foco está em casos onde o paciente perdeu estrutura óssea. Com técnica avançada de implantes angulados, evita-se enxerto e a reabilitação completa-se em sessão única.",
    ],
    stats: [
      { num: "12+", l1: "ANOS DE", l2: "PRÁTICA" },
      { num: "1", l1: "CIRURGIA · UMA", l2: "SESSÃO ÚNICA" },
      { num: "INT.", l1: "IMERSÃO", l2: "INTERNACIONAL" },
    ],
    photo: `${BASE}/dr-paciente.jpg`,
  },
  casos: {
    eyebrow: "§ 03 · CASOS REABILITADOS",
    headline: "Quatro casos. Mesma técnica.",
    subline:
      "Reabilitações realizadas no Instituto IOVI, em Balneário Camboriú/SC. Identidades preservadas conforme termo de consentimento.",
    items: [
      {
        num: "CASO 01",
        title: "Reabilitação dental superior.",
        desc: "Implantes superiores com carga imediata. Sem enxerto ósseo, em sessão única.",
        photo: `${BASE}/casos/caso-01.jpg`,
      },
      {
        num: "CASO 02",
        title: "Maxila reabsorvida.",
        desc: "All-on-4 angulado. Função estética devolvida no mesmo dia da cirurgia.",
        photo: `${BASE}/casos/caso-02.jpg`,
      },
      {
        num: "CASO 03",
        title: "Reabilitação total.",
        desc: "Protocolo guiado digitalmente. Recuperação acompanhada nos doze meses iniciais.",
        photo: `${BASE}/casos/caso-03.jpg`,
      },
      {
        num: "CASO 04",
        title: "Função e sorriso.",
        desc: "Devolução estética com implantes minimamente invasivos.",
        photo: `${BASE}/casos/caso-04.jpg`,
      },
    ],
    footnote: "PORTFÓLIO COMPLETO DISPONÍVEL SOB CONSULTA",
  },
  protocolo: {
    eyebrow: "§ 04 · PROTOCOLO CIRÚRGICO",
    headline: "Cinco etapas. Uma jornada.",
    subline:
      "Do diagnóstico inicial ao acompanhamento pós-operatório, em sequência controlada.",
    etapas: [
      {
        key: "§ 04.1 · AVALIAÇÃO",
        title: "Diagnóstico inicial.",
        desc: "Tomografia computadorizada, scanner intraoral e fotografia digital. A anatomia é mapeada antes de qualquer decisão técnica.",
      },
      {
        key: "§ 04.2 · PLANEJAMENTO",
        title: "Estudo digital.",
        desc: "Software 3D simula angulação, profundidade e prótese final. A cirurgia é decidida na tela antes da sala.",
      },
      {
        key: "§ 04.3 · CIRURGIA",
        title: "Implantes guiados.",
        desc: "Inserção minimamente invasiva com guia cirúrgico digital. Anestesia local, sem internação.",
      },
      {
        key: "§ 04.4 · CARGA IMEDIATA",
        title: "Prótese no dia.",
        desc: "Função estética é devolvida em sessão única. O paciente sai do consultório com dentes fixos no mesmo dia.",
      },
      {
        key: "§ 04.5 · FOLLOW-UP",
        title: "Acompanhamento.",
        desc: "Sessões de revisão pelos doze meses iniciais. A reabilitação é monitorada até a estabilidade total.",
      },
    ],
  },
  imersao: {
    eyebrow: "§ 05 · IMERSÃO INTERNACIONAL",
    headline: ["Formação que atravessa", "o continente."],
    subline: "Graduação no Brasil. Atualização internacional contínua.",
    cv: [
      {
        year: "2012",
        entry: "Graduação.",
        org: "Universidade de Taubaté",
        desc: "TCC sobre próteses implantossuportadas — interesse inicial confirmado na prática.",
      },
      {
        year: "2019",
        entry: "Prática independente.",
        org: "Trojan Odontologia",
        desc: "Primeiros anos clínicos, com foco em reabilitação oral e implantes.",
      },
      {
        year: "2024",
        entry: "Instituto IOVI.",
        org: "Balneário Camboriú · SC",
        desc: "Foco em implantodontia avançada, carga imediata e planejamento digital.",
      },
    ],
    badges: [
      "PROTOCOLO ALL-ON-4 ANGULADO",
      "CARGA IMEDIATA",
      "PLANEJAMENTO DIGITAL",
      "IMERSÃO INTERNACIONAL",
    ],
  },
  tecnologia: {
    eyebrow: "§ 06 · TECNOLOGIA & SEGURANÇA",
    headline: "Materiais e métodos.",
    subline:
      "Os equipamentos, as marcas e as certificações que sustentam cada procedimento.",
    cards: [
      {
        n: "01",
        key: "IMPLANTES",
        title: "Marcas suíças e americanas.",
        items: ["Nobel Biocare", "Straumann", "Neodent"],
      },
      {
        n: "02",
        key: "DIAGNÓSTICO 3D",
        title: "Anatomia antes da sala.",
        items: ["Tomografia CBCT", "Fotografia clínica", "Scanner intraoral"],
      },
      {
        n: "03",
        key: "PROTOCOLO",
        title: "Cirurgia guiada digital.",
        items: ["Software 3D", "Guia cirúrgico impresso", "Anestesia local"],
      },
      {
        n: "04",
        key: "REGULAMENTAÇÃO",
        title: "Procedência verificável.",
        items: ["CRO-PR 23896", "ANVISA · RDC 67", "Lote rastreável"],
      },
    ],
    signature:
      "Cada material com lote registrado. Cada equipamento com calibração ativa.",
  },
  iovi: {
    eyebrow: "§ 07 · INSTITUTO IOVI",
    headline: ["Onde acontece", "o atendimento."],
    addressEyebrow: "ENDEREÇO",
    addressLines: [
      "R. Arthur Max Doose, 153",
      "Sala 1901 · Edifício Pioneiros",
      "Balneário Camboriú · SC · CEP 88331-085",
    ],
    columns: [
      { header: "ATENDIMENTO", body: "Seg–Sex · Mediante agendamento" },
      { header: "AGENDAMENTO", body: "Pelo WhatsApp · Resposta direta" },
    ],
    cta: {
      label: "Ver no mapa",
      href: "https://maps.google.com/?q=R.+Arthur+Max+Doose,+153,+Balneário+Camboriú",
    },
    map: {
      label: "INSTITUTO IOVI",
      sub: "Balneário Camboriú · SC",
      coords: "27° 00' S · 48° 38' W",
      building: "EDIFÍCIO PIONEIROS",
    },
  },
  contato: {
    eyebrow: "§ 08 · CONTATO",
    headline: ["Vamos", "conversar."],
    subline: "Comece pelo WhatsApp. Eu respondo pessoalmente.",
    cta: { label: "Falar com o Dr. Trojan", href: "#contato" },
    instagram: ["@drgiacomogtrojan", "@institutoiovi"],
  },
  footer: {
    marquee:
      "trojan implant · trojan implant · trojan implant · trojan implant · trojan implant ·",
    cols: [
      {
        header: "MARCA",
        items: [
          "Giácomo Trojan.",
          "Implantodontia avançada.",
          "INSTITUTO IOVI · BC/SC",
        ],
      },
      {
        header: "NAVEGAÇÃO",
        items: [
          "Sobre",
          "Casos",
          "Protocolo",
          "Tecnologia",
          "Atendimento",
          "Contato",
        ],
      },
      {
        header: "CONTATO",
        items: [
          "WhatsApp · sob demanda",
          "contato@institutoiovi.com.br",
          "@drgiacomogtrojan",
          "@institutoiovi",
        ],
      },
      {
        header: "LEGAL",
        items: [
          "CRO-PR 23896",
          "ANVISA · RDC 67",
          "Termo de privacidade",
          "© 2026 · Cátedra Trojan",
        ],
      },
    ],
    copyrightLeft: "© 2026 · CÁTEDRA TROJAN · SITE POR NASHPAGES",
    copyrightRight: "BALNEÁRIO CAMBORIÚ/SC",
  },
} as const;
