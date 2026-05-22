(function renderCompanyPage() {
  function inferTags(product) {
    const text = `${product.title} ${product.desc} ${product.link}`.toLowerCase();
    const tags = [];

    if (text.includes('chat') || text.includes('ассистент')) tags.push('Чат-бот');
    if (text.includes('api') || text.includes('sdk')) tags.push('API');
    if (text.includes('video') || text.includes('видео') || text.includes('sora')) tags.push('Видео');
    if (text.includes('search') || text.includes('поиск') || text.includes('rerank')) tags.push('Поиск');
    if (text.includes('code') || text.includes('coding') || text.includes('codestral')) tags.push('Код');
    if (text.includes('platform') || text.includes('console') || text.includes('bedrock')) tags.push('Платформа');
    if (text.includes('enterprise') || text.includes('корпоратив')) tags.push('Enterprise');
    if (text.includes('model') || text.includes('модел')) tags.push('Модели');

    if (tags.length === 0) tags.push('Продукт AI');
    return tags.slice(0, 3);
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get('c');
  const company = window.CATALOG && id ? window.CATALOG[id] : null;

  if (!company) {
    window.location.href = './index.html';
    return;
  }

  document.title = `AI Workshop | ${company.name}`;

  const headerBreadcrumb = document.getElementById('header-breadcrumb');
  const heroLogo = document.getElementById('company-logo');
  const heroName = document.getElementById('company-name');
  const heroPraise = document.getElementById('company-praise');
  const heroDescription = document.getElementById('company-description');
  const productsRoot = document.getElementById('products-root');

  if (headerBreadcrumb) {
    headerBreadcrumb.textContent = `ИИ модели > ${company.name}`;
  }
  heroLogo.src = company.logo;
  heroLogo.alt = company.name;
  heroName.textContent = company.name;
  heroPraise.textContent = company.praise;
  heroDescription.textContent = company.description;

  productsRoot.innerHTML = company.products
    .map((product) => {
      const tags = inferTags(product)
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join('');

      return `
        <article class="product-card">
          <h3>${product.title}</h3>
          <p>${product.desc}</p>
          <div class="product-footer">
            <div class="tag-list">${tags}</div>
            <a href="${product.link}" target="_blank" rel="noopener noreferrer">Официальная ссылка ↗</a>
          </div>
        </article>
      `;
    })
    .join('');
})();
