const base = process.env.NODE_ENV === 'production' ? '/landing-mel' : '';

export const site = {
  brand: {
    name: 'Município em Linha',
    tagline: 'Transformamos queixas em soluções',
    hero: {
      title: 'Município em Linha',
      subtitle: `Transformamos queixas em soluções através de uma <strong>plataforma digital inovadora</strong> que conecta <strong>cidadãos</strong> e <strong>autarquias portuguesas</strong>.`,
      ctaPrimary: 'Falar com a equipa',
      ctaSecondary: 'Como funciona',
      image: `${base}/images/hero.png`,
    },
  },
  images: {
    desafio: `${base}/images/desafio.png`,
    solucao: `${base}/images/solucao.png`,
    beneficios1: `${base}/images/cidadao.png`,
    beneficios2: `${base}/images/municipio.png`,
    comoFunciona: `${base}/images/plano.png`,
    mercado: `${base}/images/mercado.png`,
    tecnologia: `${base}/images/tecnologia.png`,
    convite: `${base}/images/convite.png`,
  },
  sections: {
    desafio: {
      title: 'O Desafio da Gestão Urbana Atual',
      intro:
        'A maioria das autarquias portuguesas ainda depende de <strong>chamadas telefónicas, e-mails dispersos e formulários desatualizados</strong> para recolher denúncias de problemas urbanos. Este sistema fragmentado gera ineficiência, perda de informação e frustração.',
      bullets: [
        'Respostas Lentas — Falta de transparência no acompanhamento das ocorrências reportadas pelos cidadãos.',
        'Duplicação de Pedidos — Perda de informações críticas devido à ausência de sistemas centralizados de registo.',
        'Imagem Negativa — A perceção pública deteriora-se quando problemas simples demoram semanas a resolver.',
        'Transparência Municipal — Ausência de relatórios públicos e métricas visíveis impede o acompanhamento da eficiência das ações municipais.',
      ],
      example:
        'Um buraco na estrada pode demorar semanas a ser resolvido simplesmente por falha de comunicação entre departamentos.',
    },
    solucao: {
      title: 'A Nossa Solução Digital',
      intro:
        'Uma plataforma moderna e intuitiva que estabelece uma ponte direta entre cidadãos e municípios em tempo real, promovendo transparência e eficiência na resolução de problemas urbanos.',
      items: [
        {
          title: 'App Cidadão',
          text: 'Interface simples para registar ocorrências com fotografia, categoria e geolocalização automática.',
        },
        {
          title: 'Backoffice Municipal',
          text: 'Plataforma centralizada onde técnicos e gestores acompanham e gerem todas as denúncias eficientemente.',
        },
      ],
    },
    beneficios: {
      title: 'Benefícios para Todos',
      citizens: [
        'Transparência total no processo',
        'Interface intuitiva e rápida',
        'Acompanhamento em tempo real',
        'Notificações automáticas',
      ],
      municipality: [
        'Centralização de ocorrências',
        'Histórico completo e auditável',
        'Redução de custos administrativos',
        'Melhoria da imagem pública',
      ],
      quote:
        '“Cidades mais limpas, seguras e participativas com envolvimento cívico real e colaborativo.”',
    },
    comoFunciona: {
      title: 'Como Funciona',
      intro:
        'Um processo transparente e rastreável do início ao fim, garantindo que nenhuma ocorrência fica esquecida.',
      steps: [
        {
          title: 'Report Criado',
          text: 'Cidadão cria o report com foto, localização GPS e categoria do problema.',
        },
        {
          title: 'Envio Automático',
          text: 'Sistema encaminha automaticamente para o município correspondente.',
        },
        {
          title: 'Atribuição',
          text: 'Equipa técnica recebe, atribui prioridade e atualiza o estado da ocorrência.',
        },
        {
          title: 'Resolução',
          text: 'Cidadão recebe notificação quando o problema é resolvido.',
        },
      ],
    },
    mercado: {
      title: 'Oportunidade de Mercado',
      stats: [
        {
          label: 'Municípios em Portugal',
          description:
            'Com necessidades crescentes de digitalização e modernização dos serviços públicos.',
          value: '308',
        },
        {
          label: 'Sem solução centralizada',
          description:
            'A maioria ainda não possui uma plataforma integrada de gestão de ocorrências urbanas.',
          value: '85%',
        },
        {
          label: 'Países lusófonos',
          description:
            'Potencial de expansão para Brasil, Angola, Moçambique e Cabo Verde.',
          value: '4',
        },
      ],
      trends: [
        'Movimento global de cidades inteligentes',
        'Digitalização da administração pública',
        'Pressão crescente por transparência',
        'Maior envolvimento cívico digital',
      ],
      edge: [
        'Solução 100% portuguesa',
        'Conformidade com legislação nacional',
        'Suporte em português europeu',
        'Escalabilidade comprovada',
      ],
    },
    tecnologia: {
      title: 'Tecnologia Robusta e Segura',
      stack: [
        'Frontend: React Native',
        'Backend: Node.js',
        'Base de Dados: PostgreSQL',
        'Notificações: Firebase',
        'Infraestrutura: Cloud escalável',
      ],
      security: [
        'Conformidade GDPR',
        'Dados encriptados e auditáveis',
        'Autenticação multifator',
        'Backups automáticos diários',
      ],
      multiTenant:
        'Suporta múltiplos municípios com gestão isolada e dados completamente segregados.',
      integrations:
        'API REST para integração com sistemas municipais existentes e autenticação.gov.',
    },
    equipa: {
      title: 'Equipa Fundadora',
      founders: [
        {
          name: 'Ricardo Silva',
          role: 'Programador & Visionário Técnico',
          bio: 'Engenheiro e programador com experiência em desenvolvimento de soluções digitais e sistemas integrados. Apaixonado por tecnologia aplicada ao impacto social e pela criação de ferramentas que aproximam pessoas e instituições.',
          quote:
            '“Acredito que tecnologia é mais poderosa quando melhora a vida das comunidades.”',
          image: `${base}/images/programador.png`,
        },
        {
          name: 'Gonçalo Sirgado',
          role: 'Designer UX/UI & Criativo Estratégico',
          bio: 'Especialista em design centrado no utilizador, com foco em acessibilidade, experiência e impacto visual. Responsável pela identidade do Município em Linha e pela criação de interfaces simples, humanas e eficazes.',
          quote: '“O design é a ponte entre o cidadão e a tecnologia.”',
          image: `${base}/images/designer.png`,
        },
      ],
      partnerships: [
        'Incubadoras — Apoio de incubadoras de inovação social e centros tecnológicos para aceleração do projeto.',
        'Municípios Piloto — Parcerias estratégicas com autarquias pioneiras interessadas em liderar a transformação digital.',
      ],
    },
    convite: {
      title: 'Junte-se à Transformação',
      intro:
        'Estamos a procurar parceiros municipais e autarquias que partilhem a nossa visão de cidades mais eficientes, transparentes e participativas, e que procurem uma solução inovadora.',
      acquisition:
        'A plataforma está disponível através de um renovação mandatária, desenhado para se adaptar às necessidades e dimensão de cada município, garantindo acesso contínuo a todas as funcionalidades e atualizações.',
      goal: 'Levar o Município em Linha a 30 municípios até ao final de 2026, impactando milhares de cidadãos através da nossa solução.',
    },
    contacto: {
      email: 'hello@municipioemlinha.pt',
      website: 'www.municipioemlinha.pt',
      closing:
        'é mais do que uma app — é uma ferramenta de cidadania ativa que aproxima comunidades e governações locais.',
    },
  },
};
