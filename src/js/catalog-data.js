window.CATALOG = {
  ant: {
    name: 'Anthropic',
    logo: './image/ant.jpeg',
    official: 'https://www.anthropic.com',
    praise: 'Сильный фокус на безопасных и управляемых LLM для бизнеса.',
    description: 'Anthropic развивает семейство Claude и инструменты для production-интеграций с упором на качество ответа, контроль поведения и enterprise-процессы.',
    products: [
      { title: 'Claude', desc: 'Веб-интерфейс Claude для повседневной работы с текстом, кодом и аналитикой.', link: 'https://claude.ai' },
      { title: 'Anthropic API', desc: 'API-доступ к моделям Claude для интеграции в продукты и внутренние сервисы.', link: 'https://docs.anthropic.com' },
      { title: 'Claude for Enterprise', desc: 'Корпоративный контур с админ-контролем, политиками и интеграциями.', link: 'https://www.anthropic.com/enterprise' }
    ]
  },
  ama: {
    name: 'Amazon',
    logo: './image/ama.jpeg',
    official: 'https://aws.amazon.com/ai/',
    praise: 'Одна из самых зрелых облачных экосистем для GenAI в enterprise.',
    description: 'Amazon развивает AI-направление через AWS: управляемые модели, ассистенты и инфраструктурные сервисы для масштабных нагрузок.',
    products: [
      { title: 'Amazon Bedrock', desc: 'Платформа для запуска foundation-моделей через единый API и managed-инструменты.', link: 'https://aws.amazon.com/bedrock/' },
      { title: 'Amazon Q', desc: 'AI-ассистент для бизнеса и разработки в контуре AWS.', link: 'https://aws.amazon.com/q/' },
      { title: 'Amazon Nova', desc: 'Семейство foundation-моделей Amazon для разных классов задач.', link: 'https://aws.amazon.com/ai/generative-ai/nova/' }
    ]
  },
  coh: {
    name: 'Cohere',
    logo: './image/coh.jpeg',
    official: 'https://cohere.com',
    praise: 'Практичный фокус на B2B-кейсах и retrieval-oriented сценариях.',
    description: 'Cohere предлагает корпоративные модели и API для генерации, поиска и ранжирования, включая production-кейсы с внутренними знаниями.',
    products: [
      { title: 'Command', desc: 'Линейка генеративных моделей Cohere для чатов и бизнес-автоматизации.', link: 'https://docs.cohere.com/docs/models' },
      { title: 'Embed', desc: 'Модели эмбеддингов для semantic search и RAG-пайплайнов.', link: 'https://docs.cohere.com/docs/embeddings' },
      { title: 'Rerank', desc: 'Сервис ранжирования релевантности для повышения качества поиска.', link: 'https://docs.cohere.com/docs/rerank-overview' }
    ]
  },
  dee: {
    name: 'DeepSeek',
    logo: './image/dee.jpeg',
    official: 'https://www.deepseek.com',
    praise: 'Сильные reasoning-модели при конкурентной стоимости API.',
    description: 'DeepSeek развивает семейство моделей для генерации и рассуждений, а также совместимый API для интеграции в прикладные продукты.',
    products: [
      { title: 'DeepSeek Chat', desc: 'Публичный чат-интерфейс компании для работы с LLM.', link: 'https://chat.deepseek.com/' },
      { title: 'DeepSeek API', desc: 'Официальный API для интеграций и автоматизации.', link: 'https://api-docs.deepseek.com/' },
      { title: 'DeepSeek Models', desc: 'Каталог моделей DeepSeek для различных сценариев inference.', link: 'https://api-docs.deepseek.com/quick_start/pricing' }
    ]
  },
  goo: {
    name: 'Google',
    logo: './image/goo.jpeg',
    official: 'https://ai.google',
    praise: 'Один из лидеров мультимодальности и платформенных AI-сервисов.',
    description: 'Google объединяет потребительские и enterprise-решения: Gemini, API-сервисы и инструменты развёртывания в облаке.',
    products: [
      { title: 'Gemini', desc: 'Пользовательский AI-ассистент Google для текста, кода и мультимодальных задач.', link: 'https://gemini.google.com/' },
      { title: 'Gemini API', desc: 'API и SDK для интеграции Gemini в приложения.', link: 'https://ai.google.dev/' },
      { title: 'Vertex AI', desc: 'Enterprise-платформа для обучения, деплоя и эксплуатации AI-моделей.', link: 'https://cloud.google.com/vertex-ai' }
    ]
  },
  min: {
    name: 'Minimax',
    logo: './image/min.jpeg',
    official: 'https://www.minimaxi.com',
    praise: 'Быстро растущий игрок в мультимодальных и consumer AI-сценариях.',
    description: 'MiniMax развивает линейку генеративных инструментов для текста, речи и медиа-контента, включая продукты для разработчиков.',
    products: [
      { title: 'MiniMax Platform', desc: 'Основная платформа компании с доступом к AI-продуктам и моделям.', link: 'https://www.minimaxi.com/' },
      { title: 'MiniMax API', desc: 'Программный доступ к моделям компании для интеграций.', link: 'https://platform.minimaxi.com/' },
      { title: 'Hailuo AI', desc: 'Продукт MiniMax для генерации медиа-контента.', link: 'https://www.hailuo.ai/' }
    ]
  },
  mis: {
    name: 'MistralAI',
    logo: './image/mis.jpeg',
    official: 'https://mistral.ai',
    praise: 'Сильный европейский AI-вендор с акцентом на открытые и enterprise-модели.',
    description: 'Mistral AI развивает линейку foundation-моделей, чат-продукт и платформенные решения для интеграции в бизнес-процессы.',
    products: [
      { title: 'Le Chat', desc: 'Официальный AI-ассистент Mistral для пользователей и команд.', link: 'https://chat.mistral.ai/' },
      { title: 'La Plateforme', desc: 'Платформа и API для запуска моделей Mistral в production.', link: 'https://console.mistral.ai/' },
      { title: 'Codestral', desc: 'Специализированная модель для задач разработки и генерации кода.', link: 'https://mistral.ai/news/codestral/' }
    ]
  },
  moo: {
    name: 'Moonshot AI',
    logo: './image/moo.jpeg',
    official: 'https://www.moonshot.ai',
    praise: 'Известны сильными long-context и продуктами семейства Kimi.',
    description: 'Moonshot AI развивает Kimi-экосистему: чат, платформенные API и модели для задач с большим контекстом.',
    products: [
      { title: 'Kimi Chat', desc: 'Флагманский пользовательский ассистент Moonshot AI.', link: 'https://kimi.moonshot.cn/' },
      { title: 'Moonshot Open Platform', desc: 'Платформа для разработчиков с API-доступом к моделям.', link: 'https://platform.moonshot.ai/' },
      { title: 'Kimi Models', desc: 'Линейка моделей для reasoning и long-context сценариев.', link: 'https://platform.moonshot.ai/docs' }
    ]
  },
  ope: {
    name: 'OpenAI',
    logo: './image/ope.jpeg',
    official: 'https://openai.com',
    praise: 'Один из ключевых драйверов индустрии прикладного GenAI.',
    description: 'OpenAI предлагает пользовательские и платформенные продукты: чат, API, мультимодальность и инструменты для команд и разработчиков.',
    products: [
      { title: 'ChatGPT', desc: 'Пользовательский AI-ассистент для работы, обучения и творчества.', link: 'https://chatgpt.com/' },
      { title: 'OpenAI API', desc: 'Единый API для текстовых, голосовых и мультимодальных сценариев.', link: 'https://platform.openai.com/docs' },
      { title: 'Sora', desc: 'Видео-генерация и работа с визуальным контентом в экосистеме OpenAI.', link: 'https://openai.com/sora' }
    ]
  },
  per: {
    name: 'Perplexity',
    logo: './image/per.jpeg',
    official: 'https://www.perplexity.ai',
    praise: 'Сильный продукт в web-grounded поиске и ответах с источниками.',
    description: 'Perplexity сочетает веб-поиск и LLM для быстрых ответов, а также даёт API для внедрения поиска в собственные сервисы.',
    products: [
      { title: 'Perplexity Search', desc: 'AI-поиск с ответами и ссылками на источники.', link: 'https://www.perplexity.ai/' },
      { title: 'Sonar API', desc: 'API для web-grounded ответов и поисковых сценариев.', link: 'https://docs.perplexity.ai/docs/sonar/quickstart' },
      { title: 'Perplexity Pro', desc: 'Профессиональный тариф с расширенными лимитами и возможностями.', link: 'https://www.perplexity.ai/pro' }
    ]
  },
  qwe: {
    name: 'Qwen',
    logo: './image/qwe.jpeg',
    official: 'https://qwenlm.github.io/',
    praise: 'Одна из самых активных open-модельных экосистем последних лет.',
    description: 'Qwen развивает линейку открытых и коммерческих моделей для текста, кода и мультимодальности, а также публичный чат и API-каналы.',
    products: [
      { title: 'Qwen Chat', desc: 'Публичный интерфейс для работы с моделями Qwen.', link: 'https://chat.qwen.ai/' },
      { title: 'Qwen Models', desc: 'Официальный каталог и релизы моделей Qwen.', link: 'https://qwenlm.github.io/' },
      { title: 'DashScope API', desc: 'API-канал для использования моделей Qwen в приложениях.', link: 'https://help.aliyun.com/zh/dashscope/' }
    ]
  },
  xai: {
    name: 'xAI',
    logo: './image/xai.jpeg',
    official: 'https://x.ai',
    praise: 'Быстрое развитие линейки Grok и API-инструментов.',
    description: 'xAI строит продукты для диалога, генерации и интеграций, включая официальное API и веб-приложение Grok.',
    products: [
      { title: 'Grok', desc: 'Пользовательский AI-ассистент от xAI.', link: 'https://grok.com/' },
      { title: 'xAI API', desc: 'Официальный API для интеграции моделей xAI.', link: 'https://x.ai/api' },
      { title: 'API Documentation', desc: 'Документация и примеры работы с моделями xAI.', link: 'https://docs.x.ai/' }
    ]
  },
  zai: {
    name: 'Z-AI',
    logo: './image/zai.jpeg',
    official: 'https://www.zhipuai.cn',
    praise: 'Крупный китайский вендор с развитой экосистемой GLM-моделей.',
    description: 'Zhipu AI (Z-AI) развивает платформу bigmodel.cn и семейство GLM для корпоративных и потребительских задач.',
    products: [
      { title: 'GLM Models', desc: 'Линейка языковых моделей GLM для генерации и reasoning.', link: 'https://open.bigmodel.cn/' },
      { title: 'BigModel Platform', desc: 'Платформа для разработчиков с API и инструментами внедрения.', link: 'https://open.bigmodel.cn/dev/api' },
      { title: 'AutoGLM', desc: 'Продукт направления AI-агентов в экосистеме Zhipu.', link: 'https://www.zhipuai.cn/' }
    ]
  }
};
